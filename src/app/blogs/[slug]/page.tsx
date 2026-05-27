import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serverClient } from '../../../lib/sanityServer';
import { optimizeSanityUrl } from '../../../lib/sanityClient';
import type { BlogItemDetails, SanityBlogDetails } from '../../../types/blog-data';
import HeroBlogDetailsPage from '../../../components/BlogDetailPage/HeroBlogDetailsPage';
import BlogContentSection from '../../../components/BlogDetailPage/BlogContentSection';
import RelatedBlogsSection from '../../../components/BlogDetailPage/RelatedBlogsSection';

const SITE_URL = 'https://codevisionaryservices.com';

async function getBlogBySlug(slug: string): Promise<BlogItemDetails | null> {
  const query = `*[_type == "blogItem" && slug.current == $slug][0]{
    _id,
    "slug": slug.current,
    blogId,
    title,
    date,
    author,
    description,
    "image": image.asset->url,
    readTime,
    content
  }`;
  const data = await serverClient.fetch<SanityBlogDetails | null>(query, { slug });
  if (!data) return null;
  return {
    id: data._id,
    slug: data.slug,
    blogId: data.blogId,
    title: data.title,
    date: new Date(data.date),
    author: data.author,
    description: data.description,
    image: optimizeSanityUrl(data.image, 800, 80) || '',
    readTime: data.readTime,
    content: data.content,
  };
}

async function getAllBlogSlugs(): Promise<string[]> {
  const query = `*[_type == "blogItem"]{ "slug": slug.current }`;
  const data = await serverClient.fetch<{ slug: string }[]>(query);
  return data.map((item) => item.slug);
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllBlogSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (err) {
    console.warn('generateStaticParams: failed to fetch blog slugs from Sanity', err);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) return {};
  return {
    title: `${blog.title} — Code Visionary Services`,
    description: blog.description,
    alternates: { canonical: `${SITE_URL}/blogs/${blog.slug}` },
    openGraph: {
      title: `${blog.title} — Code Visionary Services`,
      description: blog.description,
      url: `${SITE_URL}/blogs/${blog.slug}`,
      images: [blog.image || `${SITE_URL}/og-image.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${blog.title} — Code Visionary Services`,
      description: blog.description,
      images: [blog.image || `${SITE_URL}/og-image.png`],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <div className="bg-[#F0F0F0] min-h-screen">
      <HeroBlogDetailsPage blog={blog} />
      <BlogContentSection content={blog.content} />
      <RelatedBlogsSection currentBlogId={blog.id} />
    </div>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { serverClient } from '../../../lib/sanityServer';
import { optimizeSanityUrl } from '../../../lib/sanityClient';
import type {
  PortfolioItemDetails,
  SanityPortfolioDetails,
} from '../../../types/portfolio-data';
import HeroPortfolioDetailsPage from '../../../components/PortfolioDetailPage/HeroPortfolioDetailsPage';
import PortfolioContentSection from '../../../components/PortfolioDetailPage/PortfolioContentSection';
import RelatedPortfoliosSection from '../../../components/PortfolioDetailPage/RelatedPortfoliosSection';

const SITE_URL = 'https://codevisionaryservices.com';

async function getPortfolioBySlug(slug: string): Promise<PortfolioItemDetails | null> {
  const query = `*[_type == "portfolioItem" && slug.current == $slug][0]{
    _id,
    "slug": slug.current,
    portfolioId,
    title,
    date,
    author,
    description,
    "image": image.asset->url,
    category,
    content
  }`;
  const data = await serverClient.fetch<SanityPortfolioDetails | null>(query, { slug });
  if (!data) return null;
  return {
    id: data._id,
    slug: data.slug,
    portfolioId: data.portfolioId,
    title: data.title,
    date: new Date(data.date),
    author: data.author,
    description: data.description,
    image: optimizeSanityUrl(data.image, 800, 80) || '',
    category: data.category,
    content: data.content,
  };
}

async function getAllPortfolioSlugs(): Promise<string[]> {
  const query = `*[_type == "portfolioItem"]{ "slug": slug.current }`;
  const data = await serverClient.fetch<{ slug: string }[]>(query);
  return data.map((item) => item.slug);
}

export async function generateStaticParams() {
  try {
    const slugs = await getAllPortfolioSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (err) {
    console.warn('generateStaticParams: failed to fetch portfolio slugs from Sanity', err);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);
  if (!portfolio) return {};
  return {
    title: `${portfolio.title} — Code Visionary Services`,
    description: portfolio.description,
    alternates: { canonical: `${SITE_URL}/portfolio/${portfolio.slug}` },
    openGraph: {
      title: `${portfolio.title} — Code Visionary Services`,
      description: portfolio.description,
      url: `${SITE_URL}/portfolio/${portfolio.slug}`,
      images: [portfolio.image || `${SITE_URL}/og-image.png`],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${portfolio.title} — Code Visionary Services`,
      description: portfolio.description,
      images: [portfolio.image || `${SITE_URL}/og-image.png`],
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const portfolio = await getPortfolioBySlug(slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <HeroPortfolioDetailsPage portfolio={portfolio} />
      <PortfolioContentSection content={portfolio.content} />
      <RelatedPortfoliosSection currentPortfolioId={portfolio.id} />
    </div>
  );
}

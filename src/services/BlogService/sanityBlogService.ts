import { client } from "../../lib/sanityClient";
import type { BlogItem, BlogItemDetails } from "../../types/blog-data";

// Sanity-specific types
interface SanityBlogItem {
  _id: string;
  slug: string;
  blogId: string;
  title: string;
  date: string;
  author: string;
  description: string;
  image: string;
  readTime?: string;
}

interface SanityBlogDetails extends SanityBlogItem {
  content: any[];
}

export class SanityBlogService {
  // Get all blogs for the list view
  async getBlogs(): Promise<BlogItem[]> {
    const query = `*[_type == "blogItem"] | order(date desc) {
      _id,
      "slug": slug.current,
      blogId,
      title,
      date,
      author,
      description,
      "image": image.asset->url,
      readTime
    }`;

    const data = await client.fetch<SanityBlogItem[]>(query);

    return data.map((item) => ({
      id: item._id,
      slug: item.slug,
      blogId: item.blogId,
      title: item.title,
      date: new Date(item.date),
      author: item.author,
      description: item.description,
      image: item.image,
      readTime: item.readTime,
    }));
  }

  // Get single blog by slug
  async getBlogBySlug(slug: string): Promise<BlogItemDetails | null> {
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

    const data = await client.fetch<SanityBlogDetails | null>(query, { slug });

    if (!data) return null;

    return this.transformSanityData(data);
  }

  // Get featured/recent blogs for hero section
  async getFeaturedBlogs(limit: number = 2): Promise<BlogItem[]> {
    const query = `*[_type == "blogItem"] | order(date desc)[0...$limit] {
      _id,
      "slug": slug.current,
      blogId,
      title,
      date,
      author,
      description,
      "image": image.asset->url,
      readTime
    }`;

    const data = await client.fetch<SanityBlogItem[]>(query, { limit });

    return data.map((item) => ({
      id: item._id,
      slug: item.slug,
      blogId: item.blogId,
      title: item.title,
      date: new Date(item.date),
      author: item.author,
      description: item.description,
      image: item.image,
      readTime: item.readTime,
    }));
  }

  private transformSanityData(data: SanityBlogDetails): BlogItemDetails {
    return {
      id: data._id,
      slug: data.slug,
      blogId: data.blogId,
      title: data.title,
      date: new Date(data.date),
      author: data.author,
      description: data.description,
      image: data.image,
      readTime: data.readTime,
      content: data.content,
    };
  }
}

export const sanityBlogService = new SanityBlogService();

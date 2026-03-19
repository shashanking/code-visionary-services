import { client } from "../../lib/sanityClient";
import type {
  PortfolioItem,
  PortfolioItemDetails,
  SanityPortfolioDetails,
  SanityPortfolioItem,
} from "../../types/portfolio-data";

export class SanityPortfolioService {
  // Get all portfolios for the list view
  async getPortfolios(): Promise<PortfolioItem[]> {
    const query = `*[_type == "portfolioItem"] | order(date desc) {
      _id,
      "slug": slug.current,
      portfolioId,
      title,
      date,
      author,
      description,
      "image": image.asset->url,
      category
    }`;

    const data = await client.fetch<SanityPortfolioItem[]>(query);

    return data.map((item) => ({
      id: item._id,
      slug: item.slug,
      portfolioId: item.portfolioId,
      title: item.title,
      date: new Date(item.date),
      author: item.author,
      description: item.description,
      image: item.image,
      category: item.category,
    }));
  }

  // Get single portfolio by slug
  async getPortfolioBySlug(slug: string): Promise<PortfolioItemDetails | null> {
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

    const data = await client.fetch<SanityPortfolioDetails | null>(query, { slug });

    if (!data) return null;

    return this.transformSanityData(data);
  }

  // Get featured/recent portfolios for hero section
  async getFeaturedPortfolios(limit: number = 2): Promise<PortfolioItem[]> {
    const query = `*[_type == "portfolioItem"] | order(date desc)[0...$limit] {
      _id,
      "slug": slug.current,
      portfolioId,
      title,
      date,
      author,
      description,
      "image": image.asset->url,
      category
    }`;

    const data = await client.fetch<SanityPortfolioItem[]>(query, { limit });

    return data.map((item) => ({
      id: item._id,
      slug: item.slug,
      portfolioId: item.portfolioId,
      title: item.title,
      date: new Date(item.date),
      author: item.author,
      description: item.description,
      image: item.image,
      category: item.category,
    }));
  }

  private transformSanityData(data: SanityPortfolioDetails): PortfolioItemDetails {
    return {
      id: data._id,
      slug: data.slug,
      portfolioId: data.portfolioId,
      title: data.title,
      date: new Date(data.date),
      author: data.author,
      description: data.description,
      image: data.image,
      category: data.category,
      content: data.content,
    };
  }
}

export const sanityPortfolioService = new SanityPortfolioService();

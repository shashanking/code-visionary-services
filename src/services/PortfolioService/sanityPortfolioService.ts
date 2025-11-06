import { client } from "../../lib/sanityClient";
import type {
  PortfolioItem,
  PortfolioItemDetails,
} from "../../types/portfolio-data";
import type {
  SanityPortfolioDetails,
  SanityPortfolioItem,
} from "../../types/sanity";

export class SanityPortfolioService {
  // Get all portfolios for the grid view - portfolio list
  async getPortfolios(): Promise<PortfolioItem[]> {
    const query = `*[_type == "portfolioItem"] | order(_createdAt desc) {
      _id,
      "slug": slug.current,
      title,
      subtitle,
      category,
      "description": hero.description,
      "image": hero.image.asset->url,
    }`;

    const data = await client.fetch<SanityPortfolioItem[]>(query);

    return data.map((item) => ({
      id: item._id,
      slug: item.slug,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      image: item.image,
      category: item.category,
    }));
  }

  // Get latest 6 portfolios for home page
  async getLatestPortfolios(limit: number = 6): Promise<PortfolioItem[]> {
    const query = `*[_type == "portfolioItem"] | order(_createdAt desc)[0...$limit] {
      _id,
      "slug": slug.current,
      title,
      subtitle,
      category,
      "description": hero.description,
      "image": hero.image.asset->url,
    }`;

    const data = await client.fetch<SanityPortfolioItem[]>(query, { limit });

    return data.map((item) => ({
      id: item._id,
      slug: item.slug,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      image: item.image,
      category: item.category,
    }));
  }

  // Get single portfolio by slug - portfolio details
  async getPortfolioBySlug(slug: string): Promise<PortfolioItemDetails | null> {
    const query = `*[_type == "portfolioItem" && slug.current == $slug][0]{
      _id,
      "slug": slug.current,
      title,
      subtitle,
      category,
      hero {
        description,
        client,
        role,
        date,
        "image": image.asset->url,
      },
      challenges {
        title,
        subtitle,
        items[] {
          title,
          description,
          "image": image.asset->url,
        }
      },
      services,
      solutions {
        title,
        subtitle,
        description,
        techStack[] {
          name,
          description,
        },
        approaches[] {
          title,
          subtitle,
          levels[] {
            title,
            description,
          }
        }
      },
      summary {
        title,
        description,
        "image": image.asset->url,
      },
      results {
        title,
        metrics[] {
          percentage,
          title,
          description
        }
      }
    }`;

    const data = await client.fetch<SanityPortfolioDetails | null>(query, {
      slug,
    });

    if (!data) return null;

    return this.transformSanityData(data);
  }

  private transformSanityData(
    data: SanityPortfolioDetails
  ): PortfolioItemDetails {
    return {
      id: data._id,
      slug: data.slug,
      title: data.title,
      subtitle: data.subtitle,
      category: data.category,
      hero: data.hero,
      challenges: data.challenges,
      services: data.services,
      solutions: data.solutions,
      summary: data.summary,
      results: data.results,
    };
  }
}

export const sanityPortfolioService = new SanityPortfolioService();

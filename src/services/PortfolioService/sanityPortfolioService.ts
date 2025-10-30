import type {
  PortfolioItem,
  PortfolioItemDetails,
} from "../../constants/portfolio-section-data";
import { client } from "../../lib/sanity";

export class SanityPortfolioService {
  // Get all portfolios for the grid view
  async getPortfolios(): Promise<PortfolioItem[]> {
    const query = `*[_type == "portfolioItem"] | order(_createdAt desc) {
      _id,
      "title": hero.title,
      "subtitle": hero.subtitle,
      "slug": slug.current,
      "description": hero.description,
      "heroImg": hero.heroImg.asset->url,
      category,
    }`;

    const data = await client.fetch(query);

    return data.map((item: any) => ({
      id: item._id,
      title: item.title,
      subtitle: item.subtitle,
      description: item.description,
      img: item.heroImg,
      slug: item.slug,
      category: this.formatCategory(item.category),
    }));
  }

  // Get single portfolio by slug
  async getPortfolioBySlug(slug: string): Promise<PortfolioItemDetails | null> {
    const query = `*[_type == "portfolioItem" && slug.current == $slug][0]{
      _id,
      "title": hero.title,
      "slug": slug.current,
      hero {
        subtitle,
        description,
        client,
        role,
        date,
        "heroImg": heroImg.asset->url,
        featuredVideo
      },
      challenges {
        title,
        subtitle,
        items[] {
          title,
          description,
          icon
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
          icon
        },
        approaches[] {
          title,
          subtitle,
          levels[] {
            title,
            description,
            descriptionArray
          }
        }
      },
      summary {
        title,
        description,
        "image": image.asset->url,
        keyAchievements
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

    const data = await client.fetch(query, { slug });

    if (!data) return null;

    return this.transformSanityData(data);
  }

  private transformSanityData(data: any): PortfolioItemDetails {
    return {
      id: data._id,
      slug: data.current,
      hero: {
        title: data.title,
        subtitle: data.hero?.subtitle,
        description: data.hero?.description,
        client: data.hero?.client,
        role: data.hero?.role,
        date: data.hero?.date,
        heroImg: data.hero?.heroImg,
        featuredVideo: data.hero?.featuredVideo,
      },
      challenges: {
        title: data.challenges?.title || "The Challenge",
        subtitle: data.challenges?.subtitle,
        items: data.challenges?.items || [],
      },
      services: data.services || [],
      solutions: {
        title: data.solutions?.title || "The Solution",
        subtitle: data.solutions?.subtitle,
        description: data.solutions?.description,
        techStack: data.solutions?.techStack || [],
        approaches: (data.solutions?.approaches || []).map((approach: any) => ({
          ...approach,
          levels: approach.levels.map((level: any) => ({
            ...level,
            description: level.descriptionArray || level.description,
          })),
        })),
      },
      summary: {
        title: data.summary?.title || "Project Summary",
        description: data.summary?.description,
        image: data.summary?.image,
        keyAchievements: data.summary?.keyAchievements,
      },
      results: {
        title: data.results?.title,
        metrics: data.results?.metrics || [],
      },
    };
  }

  private formatCategory(category: string): string {
    const categoryMap: { [key: string]: string } = {
      websites: "Websites",
      "web-applications": "Web Applications",
      "mobile-applications": "Mobile Applications",
      branding: "Branding",
    };
    return categoryMap[category] || category;
  }
}

export const sanityPortfolioService = new SanityPortfolioService();

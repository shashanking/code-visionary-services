import { client } from "../../lib/sanityClient";
import type {
  TechCategory,
  Technology,
  SanityTechCategory,
  SanityTechnology,
  TechStackData,
} from "../../types/tech-stack-data";

export class SanityTechStackService {
  // Get all tech stack data (categories + technologies)
  async getTechStack(): Promise<TechStackData> {
    const query = `{
      "categories": *[_type == "techCategory"] | order(order asc) {
        _id,
        name,
        image {
          asset->{
            url
          },
          alt
        },
        highlighted,
        order
      },
      "technologies": *[_type == "technology" && active == true] | order(name asc) {
        _id,
        name,
        image {
          asset->{
            url
          },
          alt
        },
        active,
        highlighted,
        category->{
          _id,
          name,
          highlighted
        }
      }
    }`;

    const data = await client.fetch<{
      categories: SanityTechCategory[];
      technologies: SanityTechnology[];
    }>(query);

    return {
      categories: data.categories.map(this.transformCategory),
      technologies: data.technologies.map(this.transformTechnology),
    };
  }

  // Get only categories
  async getCategories(): Promise<TechCategory[]> {
    const query = `*[_type == "techCategory"] | order(order asc) {
      _id,
      name,
      image {
        asset->{
          url
        },
        alt
      },
      highlighted,
      order
    }`;

    const data = await client.fetch<SanityTechCategory[]>(query);
    return data.map(this.transformCategory);
  }

  // Get technologies by category
  async getTechnologiesByCategory(categoryName: string): Promise<Technology[]> {
    const query = `*[_type == "technology" && category->name == $categoryName && active == true] | order(name asc) {
      _id,
      name,
      image {
        asset->{
          url
        },
        alt
      },
      active,
      highlighted,
      category->{
        _id,
        name,
        highlighted
      }
    }`;

    const data = await client.fetch<SanityTechnology[]>(query, {
      categoryName,
    });
    return data.map(this.transformTechnology);
  }

  // Get featured technologies - highlighted ones - and only active technologies
  async getFeaturedTechnologies(): Promise<Technology[]> {
    const query = `*[_type == "technology" && active == true && highlighted == true] | order(name asc) {
      _id,
      name,
      image {
        asset->{
          url
        },
        alt
      },
      active,
      highlighted,
      category->{
        _id,
        name,
        highlighted
      }
    }`;

    const data = await client.fetch<SanityTechnology[]>(query);
    return data.map(this.transformTechnology);
  }

  private transformCategory(data: SanityTechCategory): TechCategory {
    return {
      id: data._id,
      name: data.name,
      image: data.image?.asset.url,
      imageAlt: data.image?.alt,
      highlighted: data.highlighted,
      order: data.order,
    };
  }

  private transformTechnology(data: SanityTechnology): Technology {
    return {
      id: data._id,
      name: data.name,
      image: data.image.asset.url,
      imageAlt: data.image.alt,
      active: data.active,
      highlighted: data.highlighted,
      category: {
        id: data.category._id,
        name: data.category.name,
        highlighted: data.category.highlighted,
      },
    };
  }
}

export const sanityTechStackService = new SanityTechStackService();

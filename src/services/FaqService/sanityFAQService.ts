import { client } from "../../lib/sanityClient";
import type { FAQItem, SanityFAQItem } from "../../types/faq-data";

export class SanityFAQService {
  // Get all active FAQs ordered by display order
  async getFAQs(): Promise<FAQItem[]> {
    const query = `*[_type == "faq" && active == true] | order(order asc, question asc) {
      _id,
      question,
      answer,
      order,
      active,
      category
    }`;

    const data = await client.fetch<SanityFAQItem[]>(query);
    return data.map(this.transformFAQItem);
  }

  // Get FAQs by category
  async getFAQsByCategory(category: string): Promise<FAQItem[]> {
    const query = `*[_type == "faq" && active == true && category == $category] | order(order asc, question asc) {
      _id,
      question,
      answer,
      order,
      active,
      category
    }`;

    const data = await client.fetch<SanityFAQItem[]>(query, { category });
    return data.map(this.transformFAQItem);
  }

  // Get all FAQs including inactive (for admin purposes)
  async getAllFAQs(): Promise<FAQItem[]> {
    const query = `*[_type == "faq"] | order(order asc, question asc) {
      _id,
      question,
      answer,
      order,
      active,
      category
    }`;

    const data = await client.fetch<SanityFAQItem[]>(query);
    return data.map(this.transformFAQItem);
  }

  private transformFAQItem(data: SanityFAQItem): FAQItem {
    return {
      id: data._id,
      question: data.question,
      answer: data.answer,
      order: data.order,
      active: data.active,
      category: data.category,
    };
  }
}

export const sanityFAQService = new SanityFAQService();

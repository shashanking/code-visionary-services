import { client } from "../../lib/sanityClient";
import type { SanityService, Service } from "../../types/service-data";


export class SanityServiceDataService {
  // Get all services
  async getServices(): Promise<Service[]> {
    const query = `*[_type == "serviceItem"] | order(date desc) {
      _id,
      serviceId,
      label,
      date,
      "image": image.asset->url,
      description,
      tools
    }`;

    const data = await client.fetch<SanityService[]>(query);

    return data.map((item) => ({
      id: item._id,
      serviceId: item.serviceId,
      label: item.label,
      image: item.image,
      tools: item.tools || [],
      description: item.description,
      date: this.formatDate(item.date),
    }));
  }

  // Get services by ID
  async getServiceById(serviceId: string): Promise<Service | null> {
    const query = `*[_type == "serviceItem" && serviceId == $serviceId][0] {
      _id,
      serviceId,
      label,
      date,
      "image": image.asset->url,
      description,
      tools
    }`;

    const data = await client.fetch<SanityService | null>(query, { serviceId });

    if (!data) return null;

    return {
      id: data._id,
      serviceId: data.serviceId,
      label: data.label,
      image: data.image,
      tools: data.tools || [],
      description: data.description,
      date: this.formatDate(data.date),
    };
  }

  // Get featured services (most recent)
  async getFeaturedServices(limit: number = 6): Promise<Service[]> {
    const query = `*[_type == "serviceItem"] | order(date desc)[0...$limit] {
      _id,
      serviceId,
      label,
      date,
      "image": image.asset->url,
      description,
      tools
    }`;

    const data = await client.fetch<SanityService[]>(query, { limit });

    return data.map((item) => ({
      id: item._id,
      serviceId: item.serviceId,
      label: item.label,
      image: item.image,
      tools: item.tools || [],
      description: item.description,
      date: this.formatDate(item.date),
    }));
  }

  private formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      console.warn("Invalid date format:", dateString, error);
      return dateString;
    }
  }
}

export const sanityServiceDataService = new SanityServiceDataService();

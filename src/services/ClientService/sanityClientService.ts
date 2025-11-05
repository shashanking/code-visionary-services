import { client } from "../../lib/sanityClient";
import type { Client, SanityClient } from "../../types/client-data";

export class SanityClientService {
  // Get all clients
  async getClients(): Promise<Client[]> {
    const query = `*[_type == "clientItem"] | order(date desc) {
      _id,
      clientId,
      name,
      date,
      "image": image.asset->url
    }`;

    const data = await client.fetch<SanityClient[]>(query);

    return data.map((item) => ({
      id: item._id,
      clientId: item.clientId,
      name: item.name,
      image: item.image,
      date: this.formatDate(item.date),
    }));
  }

  // Get featured clients (most recent)
  async getFeaturedClients(limit: number = 9): Promise<Client[]> {
    const query = `*[_type == "clientItem"] | order(date desc)[0...$limit] {
      _id,
      clientId,
      name,
      date,
      "image": image.asset->url
    }`;

    const data = await client.fetch<SanityClient[]>(query, { limit });

    return data.map((item) => ({
      id: item._id,
      clientId: item.clientId,
      name: item.name,
      image: item.image,
      date: this.formatDate(item.date),
    }));
  }

  // Get client by ID
  async getClientById(clientId: string): Promise<Client | null> {
    const query = `*[_type == "clientItem" && clientId == $clientId][0] {
      _id,
      clientId,
      name,
      date,
      "image": image.asset->url
    }`;

    const data = await client.fetch<SanityClient | null>(query, { clientId });

    if (!data) return null;

    return {
      id: data._id,
      clientId: data.clientId,
      name: data.name,
      image: data.image,
      date: this.formatDate(data.date),
    };
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

export const sanityClientService = new SanityClientService();

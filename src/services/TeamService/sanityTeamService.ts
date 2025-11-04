import { client } from "../../lib/sanityClient";
import type { SanityTeamMember, TeamMember } from "../../types/team-data";

export class SanityTeamService {
  // Get all team members
  async getTeamMembers(): Promise<TeamMember[]> {
    const query = `*[_type == "teamItem"] | order(date desc) {
      _id,
      teamId,
      name,
      role,
      date,
      "image": image.asset->url,
      description
    }`;

    const data = await client.fetch<SanityTeamMember[]>(query);

    return data.map((item) => ({
      id: item._id,
      teamId: item.teamId,
      name: item.name,
      role: item.role,
      image: item.image,
      description: item.description,
      date: this.formatDate(item.date),
    }));
  }

  // Get featured team members (most recent)
  async getFeaturedTeamMembers(limit: number = 5): Promise<TeamMember[]> {
    const query = `*[_type == "teamItem"] | order(date desc)[0...$limit] {
      _id,
      teamId,
      name,
      role,
      date,
      "image": image.asset->url,
      description
    }`;

    const data = await client.fetch<SanityTeamMember[]>(query, { limit });

    return data.map((item) => ({
      id: item._id,
      teamId: item.teamId,
      name: item.name,
      role: item.role,
      image: item.image,
      description: item.description,
      date: this.formatDate(item.date),
    }));
  }

  // Get team member by ID
  async getTeamMemberById(teamId: string): Promise<TeamMember | null> {
    const query = `*[_type == "teamItem" && teamId == $teamId][0] {
      _id,
      teamId,
      name,
      role,
      date,
      "image": image.asset->url,
      description
    }`;

    const data = await client.fetch<SanityTeamMember | null>(query, { teamId });

    if (!data) return null;

    return {
      id: data._id,
      teamId: data.teamId,
      name: data.name,
      role: data.role,
      image: data.image,
      description: data.description,
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

export const sanityTeamService = new SanityTeamService();

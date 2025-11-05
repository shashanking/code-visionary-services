import { useState, useEffect } from "react";
import type { TeamMember } from "../../types/team-data";
import { sanityTeamService } from "../../services/TeamService/sanityTeamService";

export const useSanityTeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const data = await sanityTeamService.getTeamMembers();
        setTeamMembers(data);
      } catch (err) {
        setError("Failed to fetch team members");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  return { teamMembers, loading, error };
};

export const useSanityFeaturedTeamMembers = (limit: number = 5) => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedTeamMembers = async () => {
      try {
        setLoading(true);
        const data = await sanityTeamService.getFeaturedTeamMembers(limit);
        setTeamMembers(data);
      } catch (err) {
        setError("Failed to fetch featured team members");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedTeamMembers();
  }, [limit]);

  return { teamMembers, loading, error };
};

export const useSanityTeamMemberById = (teamId: string) => {
  const [teamMember, setTeamMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTeamMemberById = async () => {
      try {
        setLoading(true);
        const data = await sanityTeamService.getTeamMemberById(teamId);
        setTeamMember(data);
      } catch (err) {
        setError("Failed to fetch team member");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (teamId) {
      fetchTeamMemberById();
    }
  }, [teamId]);

  return { teamMember, loading, error };
};

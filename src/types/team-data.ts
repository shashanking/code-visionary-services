// Sanity-specific types
export interface SanityTeamMember {
  _id: string;
  teamId: string;
  name: string;
  role: string;
  date: string;
  image: string;
  description: string;
}

export interface TeamMember {
  id: string;
  teamId: string;
  name: string;
  role: string;
  image: string;
  description: string;
  date: string;
}

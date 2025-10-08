import p1 from "../assets/our_team_pradep_color_image.png";
import p2 from "../assets/our_team_shashank_color_image.png";
import p3 from "../assets/our_team_shayan_color_image.png";
import p4 from "../assets/our_team_vikash_color_image.png";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
}

export const teamMembers: TeamMember[] = [
  { id: 1, name: "Sahil Biswas", role: "Co-founder", image: p1 },
  { id: 2, name: "Vikash Jha", role: "Co-founder, CEO", image: p4 },
  { id: 3, name: "Shashank Singh", role: "Co-founder", image: p2 },
  { id: 4, name: "Sayan Choudhury", role: "Co-founder", image: p3 },
  { id: 5, name: "Pradip Choudhury", role: "Founder", image: p1 },
];

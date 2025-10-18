import p1 from "../assets/our_team_pradep_color_image.png";
import p2 from "../assets/our_team_shashank_color_image.png";
import p3 from "../assets/our_team_shayan_color_image.png";
import p4 from "../assets/our_team_vikash_color_image.png";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
  description?: string;
}

export const OurTeamData: TeamMember[] = [
  {
    id: 1,
    name: "Vikash Jha",
    role: "Co-founder, CEO",
    image: p4,
    description:
      "With over two decades of experience, Charles leads Bizypro with a focus on innovation and integrity.",
  },
  {
    id: 2,
    name: "Pradip Choudhury",
    role: "Founder",
    image: p1,
    description:
      "Sophia integrates eco-conscious practices to create sustainable and future-ready designs.",
  },
  {
    id: 3,
    name: "Sahil Biswas",
    role: "Co-founder",
    image: p1,
    description: "",
  },
  {
    id: 4,
    name: "Sayan Choudhury",
    role: "Co-founder",
    image: p3,
    description:
      "Emma brings unparalleled expertise in structural analysis, ensuring durability and performance in every design.",
  },
  {
    id: 5,
    name: "Shashank Singh",
    role: "Co-founder",
    image: p2,
    description:
      "Emma brings unparalleled expertise in structural analysis, ensuring durability and performance in every design.",
  },
];

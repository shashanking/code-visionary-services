import PradipImg from "../assets/about-page/our-team/pradip-img.png";
import SahilImg from "../assets/about-page/our-team/sahil-img.png";
import SashankImg from "../assets/about-page/our-team/sashank-img.png";
import SayanImg from "../assets/about-page/our-team/sayan-img.png";
import VikashImg from "../assets/about-page/our-team/vikash-img.png";

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
    image: VikashImg,
    description:
      "With over two decades of experience, Charles leads Bizypro with a focus on innovation and integrity.",
  },
  {
    id: 2,
    name: "Pradip Choudhury",
    role: "Founder",
    image: PradipImg,
    description:
      "Sophia integrates eco-conscious practices to create sustainable and future-ready designs.",
  },
  {
    id: 3,
    name: "Sahil Biswas",
    role: "Co-founder",
    image: SahilImg,
    description: "",
  },
  {
    id: 4,
    name: "Sayan Choudhury",
    role: "Co-founder",
    image: SayanImg,
    description:
      "Emma brings unparalleled expertise in structural analysis, ensuring durability and performance in every design.",
  },
  {
    id: 5,
    name: "Shashank Singh",
    role: "Co-founder",
    image: SashankImg,
    description:
      "Emma brings unparalleled expertise in structural analysis, ensuring durability and performance in every design.",
  },
];

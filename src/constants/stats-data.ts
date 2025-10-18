import StatsIcon1 from "..//assets/about-page/stats-icon-1.svg";
import StatsIcon2 from "..//assets/about-page/stats-icon-2.svg";
import StatsIcon3 from "..//assets/about-page/stats-icon-3.svg";

interface Stats {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export const StatsCardData: Stats[] = [
  {
    id: 1,
    title: "Excellence",
    description:
      "We deliver the highest quality in all our services, striving for continuous improvement and exceeding expectations.",
    icon: StatsIcon1,
  },
  {
    id: 2,
    title: "Innovation",
    description:
      "We embrace new ideas and technologies to create unique and effective digital solutions.",
    icon: StatsIcon2,
  },
  {
    id: 3,
    title: "Integrity",
    description:
      "We embrace new ideas and technologies to create unique and effective digital solutions.",
    icon: StatsIcon3,
  },
];

export const StatsData: Stats[] = [
  {
    id: 1,
    title: "4+",
    description: "Years Of Experience",
  },
  {
    id: 2,
    title: "100+",
    description: "Projects",
  },
  {
    id: 3,
    title: "20+",
    description: "Satisfied customers",
  },
  {
    id: 4,
    title: "1500+",
    description: "Hours invested",
  },
];

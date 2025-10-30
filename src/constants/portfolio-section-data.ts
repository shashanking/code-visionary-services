import kaltechImg from "../assets/portfolio_Responsive_design-1.png";
import gutCheckImg from "../assets/portfolio_Responsive_design-2.png";
import moneyBlasterImg from "../assets/portfolio_Responsive_design-3.png";
import dorjiEcommerceImg from "../assets/portfolio_Responsive_design-4.png";
import harmonyRehabImg from "../assets/portfolio_Responsive_design-5.png";
import ospDashboardImg from "../assets/portfolio_Responsive_design-6.png";

export interface PortfolioItem {
  id: string;
  slug: string;
  title: string;
  img: string;
  description: string;
  category: string;
}

export const categories = [
  { label: "All" },
  { label: "Websites" },
  { label: "Mobile application" },
  { label: "Web application" },
  { label: "Branding" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "CVS-PRO-1",
    slug: "leathertalks-80-sales-surge",
    title: "KALTECH CONSULTANCY",
    category: "Websites",
    img: kaltechImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    id: "CVS-PRO-2",
    slug: "leathertalks-80-sales-surge",
    title: "GUT CHECK",
    category: "Websites",
    img: gutCheckImg,
    description:
      "Website redesign focused on clarity, performance, and higher conversions across devices.",
  },
  {
    id: "CVS-PRO-3",
    slug: "leathertalks-80-sales-surge",
    title: "MONEY BLASTER",
    category: "Websites",
    img: moneyBlasterImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    id: "CVS-PRO-4",
    slug: "leathertalks-80-sales-surge",
    title: "DORJI ECOMMERCE",
    category: "Web applications",
    img: dorjiEcommerceImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    id: "CVS-PRO-5",
    slug: "leathertalks-80-sales-surge",
    title: "HARMONY REHAB",
    category: "Websites",
    img: harmonyRehabImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    id: "CVS-PRO-6",
    slug: "leathertalks-80-sales-surge",
    title: "OSP DASHBOARD",
    category: "Web applications",
    img: ospDashboardImg,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
];

export interface ChallengeItem {
  title: string;
  description: string;
  icon?: string;
}

export interface TechStackItem {
  name: string;
  description: string;
  icon?: string;
}

export interface ApproachLevel {
  title: string;
  description: string | string[];
}

export interface Approach {
  title: string;
  subtitle?: string;
  levels: ApproachLevel[];
}

export interface ResultMetric {
  percentage: string;
  title: string;
  description: string;
}

export interface PortfolioItemDetails {
  id: string;
  slug: string;

  hero: {
    title: string;
    subtitle?: string;
    description: string;
    client: string;
    role: string;
    date: string;
    heroImg: string;
    featuredVideo?: string;
  };

  challenges: {
    title: string;
    subtitle: string;
    items: ChallengeItem[];
  };

  services: string[];

  solutions: {
    title: string;
    subtitle: string;
    description: string;
    techStack: TechStackItem[];
    approaches: Approach[];
  };

  summary: {
    title: string;
    description: string;
    image: string;
    keyAchievements?: string[];
  };

  results: {
    title?: string;
    metrics: ResultMetric[];
  };
}

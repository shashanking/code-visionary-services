import kaltechImg from "../assets/portfolio_Responsive_design-1.png";
import gutCheckImg from "../assets/portfolio_Responsive_design-2.png";
import moneyBlasterImg from "../assets/portfolio_Responsive_design-3.png";
import dorjiEcommerceImg from "../assets/portfolio_Responsive_design-4.png";
import harmonyRehabImg from "../assets/portfolio_Responsive_design-5.png";
import ospDashboardImg from "../assets/portfolio_Responsive_design-6.png";

export interface PortfolioItem {
  title: string;
  img: string;
  url: string;
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
    title: "KALTECH CONSULTANCY",
    category: "Websites",
    img: kaltechImg,
    url: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    title: "GUT CHECK",
    category: "Websites",
    img: gutCheckImg,
    url: "#",
    description:
      "Website redesign focused on clarity, performance, and higher conversions across devices.",
  },
  {
    title: "MONEY BLASTER",
    category: "Websites",
    img: moneyBlasterImg,
    url: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    title: "DORJI ECOMMERCE",
    category: "Web applications",
    img: dorjiEcommerceImg,
    url: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    title: "HARMONY REHAB",
    category: "Websites",
    img: harmonyRehabImg,
    url: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
  {
    title: "OSP DASHBOARD",
    category: "Web applications",
    img: ospDashboardImg,
    url: "#",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.",
  },
];

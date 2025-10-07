import kaltechImg from "../assets/portfolio_Responsive_design-1.png";
import gutCheckImg from "../assets/portfolio_Responsive_design-2.png";
import moneyBlasterImg from "../assets/portfolio_Responsive_design-3.png";
import dorjiEcommerceImg from "../assets/portfolio_Responsive_design-4.png";
import harmonyRehabImg from "../assets/portfolio_Responsive_design-5.png";
import ospDashboardImg from "../assets/portfolio_Responsive_design-6.png";

export const categories = [
  { label: "All" },
  { label: "Websites" },
  { label: "Mobile apps" },
  { label: "Web apps" },
  { label: "Branding" },
];

export const portfolioItems = [
  {
    title: "KALTECH CONSULTANCY",
    category: "Websites",
    img: kaltechImg,
    url: "#",
    description: "",
    bg: "rgba(44, 62, 80, 0.68)",
  },
  {
    title: "GUT CHECK",
    category: "Websites",
    img: gutCheckImg,
    url: "#",
    description:
      "Website redesign focused on clarity, performance, and higher conversions across devices.",
    bg: "linear-gradient(180deg, #86E3B3 0%, #7AD1B6 100%)",
  },
  {
    title: "MONEY BLASTER",
    category: "Websites",
    img: moneyBlasterImg,
    url: "#",
    description: "",
    bg: "linear-gradient(180deg, #FFD6DC 0%, #FEB9C8 100%)",
  },
  {
    title: "DORJI ECOMMERCE",
    category: "Web applications",
    img: dorjiEcommerceImg,
    url: "#",
    description: "",
    bg: "rgba(130, 90, 40, 0.5)",
  },
  {
    title: "HARMONY REHAB",
    category: "Websites",
    img: harmonyRehabImg,
    url: "#",
    description: "",
    bg: "linear-gradient(180deg, #F8CDFE 0%, #ECBCED 100%)",
  },
  {
    title: "OSP DASHBOARD",
    category: "Web applications",
    img: ospDashboardImg,
    url: "#",
    description: "",
    bg: "rgba(44, 62, 80, 0.88)",
  },
];

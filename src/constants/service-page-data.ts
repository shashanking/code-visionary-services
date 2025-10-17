import UiUxImg from "../assets/home-page/hero-service/UI_UX.webp";
import DigitalMarketingImg from "../assets/home-page/hero-service/Digital_marketing.webp";
import AppDevImg from "../assets/home-page/hero-service/App_Dev.webp";
import AiMarketingImg from "../assets/home-page/hero-service/AI_marketing.webp";
import DashboardImg from "../assets/home-page/hero-service/dashboard.webp";
import WebDevImg from "../assets/home-page/hero-service/Web_dev.webp";
import BlockchainImg from "../assets/home-page/hero-service/Blockchain.webp";
import BrandingImg from "../assets/home-page/hero-service/Branding.webp";

interface Services {
  id: number;
  label: string;
  image?: string;
  tools?: string[];
  description?: string;
}

export const ServicesData: Services[] = [
  {
    id: 1,
    label: "UI/UX Design",
    image: UiUxImg,
    tools: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    description:
      "We craft intuitive, engaging user experiences for every device.",
  },
  {
    id: 2,
    label: "Web Design & Development",
    image: DashboardImg,
    tools: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    description:
      "Custom websites that deliver results and elevate your business.",
  },
  {
    id: 3,
    label: "Mobile Applications",
    image: AppDevImg,
    tools: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    description: "Cross-platform apps with seamless UX for every user.",
  },
  {
    id: 4,
    label: "Digital Marketing",
    image: DigitalMarketingImg,
    tools: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    description:
      "Grow your brand and drive conversions with targeted online campaigns.",
  },
  {
    id: 5,
    label: "AI Marketing",
    image: AiMarketingImg,
    tools: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    description:
      "Leverage AI-powered automation to supercharge your marketing impact.",
  },
  {
    id: 6,
    label: "Branding",
    image: BrandingImg,
    tools: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    description:
      "Robust, scalable web applications for next-gen digital businesses.",
  },
  {
    id: 7,
    label: "Web Applications",
    image: WebDevImg,
    tools: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    description:
      "Robust, scalable web applications for next-gen digital businesses.",
  },
  {
    id: 8,
    label: "AI Development",
    image: AiMarketingImg,
    tools: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    description:
      "Leverage AI-powered automation to supercharge your marketing impact.",
  },
  {
    id: 9,
    label: "Blockchain",
    image: BlockchainImg,
    tools: [
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
      "Lorem ipsum",
    ],
    description:
      "Robust, scalable web applications for next-gen digital businesses.",
  },
];

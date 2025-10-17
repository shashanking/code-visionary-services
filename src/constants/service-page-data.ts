import UiUxServiceImg from "../assets/services-page/ui-ux-service.jpg";
import WebDesignDevServiceImg from "../assets/services-page/web-design-dev-service.png";
import MobileAppServiceImg from "../assets/services-page/mobile-app-service.png";
import DigitalMarketingServiceImg from "../assets/services-page/digital-marketing-service.png";
import AiMarketingDevServiceImg from "../assets/services-page/ai-marketing-dev-service.jpg";
import BrandingServiceImg from "../assets/services-page/branding-service.png";
import WebAppBlockchainServiceImg from "../assets/services-page/web-app-blockchain-service.png";

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
    image: UiUxServiceImg,
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
    image: WebDesignDevServiceImg,
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
    image: MobileAppServiceImg,
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
    image: DigitalMarketingServiceImg,
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
    image: AiMarketingDevServiceImg,
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
    image: BrandingServiceImg,
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
    image: WebAppBlockchainServiceImg,
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
    image: AiMarketingDevServiceImg,
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
    image: WebAppBlockchainServiceImg,
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

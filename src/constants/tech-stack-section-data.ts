import ReactLogo from "../assets/home-page/tech-stack/React js.svg";
import AngularLogo from "../assets/home-page/tech-stack/Angular js.svg";
import NextLogo from "../assets/home-page/tech-stack/Next.js.svg";
import NodeLogo from "../assets/home-page/tech-stack/Node-Js.svg";
import VueLogo from "../assets/home-page/tech-stack/Vuejs.svg";
import SvelteLogo from "../assets/home-page/tech-stack/Svelte_Logo.svg";
import LaravelLogo from "../assets/home-page/tech-stack/Svelte_Logo.svg";
import NestLogo from "../assets/home-page/tech-stack/nestjs-icon.svg";
import ExpressLogo from "../assets/home-page/tech-stack/Express.svg";
import WordpressLogo from "../assets/home-page/tech-stack/Wordpress.svg";
import ShopifyLogo from "../assets/home-page/tech-stack/Shopify.svg";
import WebflowLogo from "../assets/home-page/tech-stack/Webflow.svg";
import FlutterLogo from "../assets/home-page/tech-stack/Flutter-logo.svg";
import FigmaLogo from "../assets/home-page/tech-stack/Figma.svg";
import AdobeXdLogo from "../assets/home-page/tech-stack/Adobe-xd.svg";
import GoogleAnalyticsLogo from "../assets/home-page/tech-stack/Google analytics.svg";
import SearchConsoleLogo from "../assets/home-page/tech-stack/search console.svg";
import SEMrushLogo from "../assets/home-page/tech-stack/SEMrush.svg";
import AhrefsLogo from "../assets/home-page/tech-stack/Ahrefs.svg";
import SolidityLogo from "../assets/home-page/tech-stack/Solidity.svg";
import EthereumLogo from "../assets/home-page/tech-stack/Ethereum.svg";
import OpenAiLogo from "../assets/home-page/tech-stack/Chatgpt.svg";
import TensorFlowLogo from "../assets/home-page/tech-stack/Tensorflow.svg";
import PyTorchLogo from "../assets/home-page/tech-stack/PyTorch.svg";
import LangChainLogo from "../assets/home-page/tech-stack/langchain.svg";
import HuggingFaceLogo from "../assets/home-page/tech-stack/Hugging face.svg";

export const mainTechs = [
  // Web Development
  { label: "ReactJS", img: ReactLogo },
  { label: "AngularJS", img: AngularLogo, active: true },
  { label: "NextJS", img: NextLogo },
  { label: "NodeJS", img: NodeLogo },
  { label: "VueJS", img: VueLogo },
  { label: "Svelte", img: SvelteLogo },
  // Back-end & APIs
  { label: "Laravel", img: LaravelLogo },
  { label: "NestJS", img: NestLogo },
  { label: "ExpressJS", img: ExpressLogo },
  // CMS / Platforms
  { label: "WordPress", img: WordpressLogo },
  { label: "Shopify", img: ShopifyLogo },
  { label: "Webflow", img: WebflowLogo },
  // Mobile
  { label: "React Native", img: ReactLogo },
  { label: "Flutter", img: FlutterLogo },
  // Data / DB
  { label: "MongoDB" },
  { label: "PostgreSQL" },
  { label: "MySQL" },
  // Design
  { label: "Figma", img: FigmaLogo },
  { label: "Adobe XD", img: AdobeXdLogo },
  // SEO / Analytics
  { label: "Google Analytics", img: GoogleAnalyticsLogo },
  { label: "Search Console", img: SearchConsoleLogo },
  { label: "SEMrush", img: SEMrushLogo },
  { label: "Ahrefs", img: AhrefsLogo },
  // Blockchain
  { label: "Solidity", img: SolidityLogo },
  { label: "Ethereum", img: EthereumLogo },
  // AI / ML
  { label: "OpenAI", img: OpenAiLogo },
  { label: "TensorFlow", img: TensorFlowLogo },
  { label: "PyTorch", img: PyTorchLogo },
  { label: "LangChain", img: LangChainLogo },
  { label: "Hugging Face", img: HuggingFaceLogo },
];

export const techTags = [
  { label: "Web Development", highlighted: true },
  { label: "App Development" },
  { label: "Marketing" },
  { label: "AI" },
  { label: "Design" },
  { label: "SEO Tools" },
  { label: "Blockchain" },
];

export const tagToTechs: Record<string, string[]> = {
  "Web Development": [
    "ReactJS",
    "AngularJS",
    "NextJS",
    "NodeJS",
    "VueJS",
    "Svelte",
    "ExpressJS",
    "NestJS",
  ],
  "App Development": ["React Native", "Flutter"],
  Marketing: ["Shopify", "Webflow"],
  AI: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Hugging Face"],
  Design: ["Figma", "Adobe XD"],
  "SEO Tools": ["Google Analytics", "Search Console", "SEMrush", "Ahrefs"],
  Blockchain: ["Solidity", "Ethereum"],
};

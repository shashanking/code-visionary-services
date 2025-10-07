import reactLogo from "../assets/tech_stack_section_tech1_image.png";
import angularLogo from "../assets/tech_stack_section_tech2_image.png";
import laravelLogo from "../assets/tech_stack_section_tech4_image.png";
import wordpressLogo from "../assets/tech_stack_section_tech3_image.png";

export const mainTechs = [
  // Web Development
  { label: "React", img: reactLogo },
  { label: "Angular", img: angularLogo, active: true },
  { label: "Next.js" },
  { label: "Node.js" },
  { label: "Vue" },
  { label: "Svelte" },
  // Back-end & APIs
  { label: "Laravel", img: laravelLogo },
  { label: "NestJS" },
  { label: "Express" },
  // CMS / Platforms
  { label: "WordPress", img: wordpressLogo },
  { label: "Shopify" },
  { label: "Webflow" },
  // Mobile
  { label: "React Native" },
  { label: "Flutter" },
  // Data / DB
  { label: "MongoDB" },
  { label: "PostgreSQL" },
  { label: "MySQL" },
  // Design
  { label: "Figma" },
  { label: "Adobe XD" },
  // SEO / Analytics
  { label: "Google Analytics" },
  { label: "Search Console" },
  { label: "SEMrush" },
  { label: "Ahrefs" },
  // Blockchain
  { label: "Solidity" },
  { label: "Ethereum" },
  // AI / ML
  { label: "OpenAI" },
  { label: "TensorFlow" },
  { label: "PyTorch" },
  { label: "LangChain" },
  { label: "Hugging Face" },
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
    "React",
    "Angular",
    "Next.js",
    "Node.js",
    "Vue",
    "Svelte",
    "Express",
    "NestJS",
  ],
  "App Development": ["React Native", "Flutter"],
  Marketing: ["Shopify", "Webflow"],
  AI: ["OpenAI", "TensorFlow", "PyTorch", "LangChain", "Hugging Face"],
  Design: ["Figma", "Adobe XD"],
  "SEO Tools": ["Google Analytics", "Search Console", "SEMrush", "Ahrefs"],
  Blockchain: ["Solidity", "Ethereum"],
};

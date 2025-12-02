export const categories = [
  { label: "All", value: "all" },
  { label: "Websites", value: "websites" },
  { label: "Web Applications", value: "web-applications" },
  { label: "Mobile Applications", value: "mobile-applications" },
  { label: "Branding", value: "branding" },
];

export interface ChallengeItem {
  title: string;
  description: string;
  image?: string;
}

export interface TechStackItem {
  name: string;
  description: string;
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
  percentage?: string;
  title: string;
  description: string;
}

// Base interface with common fields
export interface PortfolioBase {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
}

// Portfolio List - card grid view - minimal data needed
export interface PortfolioItem extends PortfolioBase {
  image: string;
  description: string;
}

// Portfolio details page
export interface PortfolioItemDetails extends PortfolioBase {
  hero?: {
    description: string;
    client: string;
    role: string;
    date: string;
    image: string;
  };

  challenges?: {
    title: string;
    subtitle: string;
    items: ChallengeItem[];
  };

  services?: string[];

  solutions?: {
    title: string;
    subtitle: string;
    description: string;
    techStack: TechStackItem[];
    approaches: Approach[];
  };

  summary?: {
    title: string;
    description: string;
    image: string;
  };

  results?: {
    title?: string;
    metrics: ResultMetric[];
  };
}

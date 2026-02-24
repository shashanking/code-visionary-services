export interface SanityPortfolioItem {
  _id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
}

interface SanityHero {
  description: string;
  client: string;
  role: string;
  date: string;
  image: string;
}

interface SanityChallengeItem {
  title: string;
  description: string;
  image: string;
}

interface SanityChallenges {
  title: string;
  subtitle: string;
  items: SanityChallengeItem[];
}

interface SanityTechStackItem {
  name: string;
  description: string;
}

interface SanityGalleryImage {
  url: string;
  alt?: string;
}

interface SanityGallery {
  title: string;
  description: string;
  images: SanityGalleryImage[];
}

interface SanitySolutions {
  title: string;
  subtitle: string;
  description: string;
  techStack: SanityTechStackItem[];
}

interface SanitySummary {
  title: string;
  description: string;
  image: string;
}

interface SanityResultMetric {
  percentage: string;
  title: string;
  description: string;
}

interface SanityResults {
  title?: string;
  metrics: SanityResultMetric[];
}

export interface SanityPortfolioDetails {
  _id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  hero: SanityHero;
  challenges: SanityChallenges;
  services: string[];
  solutions: SanitySolutions;
  gallery: SanityGallery;
  summary: SanitySummary;
  results: SanityResults;
}

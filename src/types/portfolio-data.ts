// Base types for Sanity content
export interface SanityBaseContent {
  _type: string;
  _key: string;
}

// Sanity-specific types
export interface SanityPortfolioItem {
  _id: string;
  slug: string;
  portfolioId: string;
  title: string;
  date: string;
  author: string;
  description: string;
  image: string;
  category?: string;
}

export interface SanityPortfolioDetails extends SanityPortfolioItem {
  content: SanityBaseContent[];
}

// Portfolio type
export interface PortfolioItem {
  id: string;
  slug: string;
  portfolioId: string;
  title: string;
  date: Date;
  image: string;
  author?: string;
  description?: string;
  category?: string;
}

export interface PortfolioItemDetails extends PortfolioItem {
  content?: SanityBaseContent[];
}

// Categories for filtering
export const categories = [
  { label: "All", value: "all" },
  { label: "Websites", value: "websites" },
  { label: "Web Applications", value: "web-applications" },
  { label: "Mobile Applications", value: "mobile-applications" },
  { label: "Branding", value: "branding" },
];

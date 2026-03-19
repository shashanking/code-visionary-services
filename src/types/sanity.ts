// Base types for Sanity content
export interface SanityBaseContent {
  _type: string;
  _key: string;
}

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

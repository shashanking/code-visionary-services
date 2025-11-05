// Sanity-specific types
export interface SanityFAQItem {
  _id: string;
  question: string;
  answer: string;
  order: number;
  active: boolean;
  category: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  order: number;
  active: boolean;
  category: string;
}

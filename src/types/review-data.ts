// Sanity-specific types
export interface SanityReviewItem {
  _id: string;
  reviewId: string;
  reviewer: string;
  clientType: string;
  date: string;
  image: string;
  description: string;
  video?: {
    asset?: {
      url: string;
    };
  };
  rating?: number;
}

export interface SanityReviewHeroItem {
  _id: string;
  reviewerId: string;
  name: string;
  image: string;
  date: string;
}

export interface ReviewItem {
  id: string;
  reviewer: string;
  clientType: string;
  description: string;
  image: string;
  video?: string;
  date?: string;
  rating?: number;
}

export interface ReviewHeroItem {
  id: string;
  reviewerId: string;
  name: string;
  image: string;
  date?: string;
}

import { client } from "../../lib/sanityClient";
import type {
  ReviewItem,
  ReviewHeroItem,
  SanityReviewItem,
  SanityReviewHeroItem,
} from "../../types/review-data";

export class SanityReviewService {
  // Get all review items
  async getReviewItems(): Promise<ReviewItem[]> {
    const query = `*[_type == "reviewItem"] | order(date desc) {
      _id,
      reviewId,
      reviewer,
      clientType,
      date,
      "image": image.asset->url,
      description,
      video,
      rating
    }`;

    const data = await client.fetch<SanityReviewItem[]>(query);

    return data.map((item) => ({
      id: item._id, // Map _id to id
      reviewId: item.reviewId,
      reviewer: item.reviewer,
      clientType: item.clientType,
      description: item.description,
      image: item.image,
      video: item.video?.asset?.url, // Extract video URL
      date: this.formatDate(item.date),
      rating: item.rating,
    }));
  }

  // Get hero review items
  async getHeroReviewItems(): Promise<ReviewHeroItem[]> {
    const query = `*[_type == "reviewHero"] | order(date desc) {
      _id,
      reviewerId,
      name,
      "image": image.asset->url,
      date
    }`;

    const data = await client.fetch<SanityReviewHeroItem[]>(query);

    return data.map((item) => ({
      id: item._id, // Map _id to id
      reviewerId: item.reviewerId,
      name: item.name,
      image: item.image,
      date: this.formatDate(item.date),
    }));
  }

  // Get review items by rating
  async getReviewItemsByRating(minRating: number = 4): Promise<ReviewItem[]> {
    const query = `*[_type == "reviewItem" && rating >= $minRating] | order(date desc) {
      _id,
      reviewId,
      reviewer,
      clientType,
      date,
      "image": image.asset->url,
      description,
      video,
      rating
    }`;

    const data = await client.fetch<SanityReviewItem[]>(query, { minRating });

    return data.map((item) => ({
      id: item._id,
      reviewId: item.reviewId,
      reviewer: item.reviewer,
      clientType: item.clientType,
      description: item.description,
      image: item.image,
      video: item.video?.asset?.url,
      date: this.formatDate(item.date),
      rating: item.rating,
    }));
  }

  // Get top-rated latest reviews (high rating + recent)
  async getTopRatedLatestReviews(
    limit: number = 8,
    minRating: number = 4
  ): Promise<ReviewItem[]> {
    const query = `*[_type == "reviewItem" && rating >= $minRating] | order(date desc, rating desc)[0...$limit] {
      _id,
      reviewId,
      reviewer,
      clientType,
      date,
      "image": image.asset->url,
      description,
      video,
      rating
    }`;

    const data = await client.fetch<SanityReviewItem[]>(query, {
      minRating,
      limit,
    });

    return data.map((item) => ({
      id: item._id,
      reviewId: item.reviewId,
      reviewer: item.reviewer,
      clientType: item.clientType,
      description: item.description,
      image: item.image,
      video: item.video?.asset?.url,
      date: this.formatDate(item.date),
      rating: item.rating,
    }));
  }

  private formatDate(dateString: string): string {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      console.warn("Invalid date format:", dateString, error);
      return dateString;
    }
  }
}

export const sanityReviewService = new SanityReviewService();

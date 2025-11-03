import { useState, useEffect } from "react";
import type { ReviewHeroItem, ReviewItem } from "../../types/review-data";
import { sanityReviewService } from "../../services/ReviewService/sanityReviewService";

export const useSanityReviewItems = () => {
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviewItems = async () => {
      try {
        setLoading(true);
        const data = await sanityReviewService.getReviewItems();
        setReviewItems(data);
      } catch (err) {
        setError("Failed to fetch review items");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchReviewItems();
  }, []);

  return { reviewItems, loading, error };
};

export const useSanityHeroReviewItems = () => {
  const [heroReviewItems, setHeroReviewItems] = useState<ReviewHeroItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHeroReviewItems = async () => {
      try {
        setLoading(true);
        const data = await sanityReviewService.getHeroReviewItems();
        setHeroReviewItems(data);
      } catch (err) {
        setError("Failed to fetch hero review items");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeroReviewItems();
  }, []);

  return { heroReviewItems, loading, error };
};

export const useSanityHighRatedReviewItems = (minRating: number = 4) => {
  const [reviewItems, setReviewItems] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHighRatedReviewItems = async () => {
      try {
        setLoading(true);
        const data = await sanityReviewService.getReviewItemsByRating(
          minRating
        );
        setReviewItems(data);
      } catch (err) {
        setError("Failed to fetch high-rated review items");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHighRatedReviewItems();
  }, [minRating]);

  return { reviewItems, loading, error };
};

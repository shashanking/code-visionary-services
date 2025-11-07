import { useState, useEffect } from "react";
import type { FAQItem } from "../../types/faq-data";
import { sanityFAQService } from "../../services/FaqService/sanityFAQService";

export const useSanityFAQs = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        setLoading(true);
        const data = await sanityFAQService.getFAQs();
        setFaqs(data);
      } catch (err) {
        setError("Failed to fetch FAQs");
        console.error("Sanity FAQ error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  return { faqs, loading, error };
};

export const useSanityFAQsByCategory = (category: string) => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFAQsByCategory = async () => {
      try {
        setLoading(true);
        const data = await sanityFAQService.getFAQsByCategory(category);
        setFaqs(data);
      } catch (err) {
        setError(`Failed to fetch FAQs for ${category}`);
        console.error("Sanity FAQ error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (category) {
      fetchFAQsByCategory();
    }
  }, [category]);

  return { faqs, loading, error };
};

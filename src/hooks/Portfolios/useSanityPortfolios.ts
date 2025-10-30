import { useState, useEffect } from "react";
import type {
  PortfolioItem,
  PortfolioItemDetails,
} from "../../constants/portfolio-section-data";
import { sanityPortfolioService } from "../../services/PortfolioService/sanityPortfolioService";

export const useSanityPortfolios = () => {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        setLoading(true);
        const data = await sanityPortfolioService.getPortfolios();
        setPortfolios(data);
      } catch (err) {
        setError("Failed to fetch portfolios");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  return { portfolios, loading, error };
};

export const useSanityPortfolioBySlug = (slug: string) => {
  const [portfolio, setPortfolio] = useState<PortfolioItemDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPortfolioBySlug = async () => {
      try {
        setLoading(true);
        const data = await sanityPortfolioService.getPortfolioBySlug(slug);
        setPortfolio(data);
      } catch (err) {
        setError("Failed to fetch portfolio");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPortfolioBySlug();
    }
  }, [slug]);

  return { portfolio, loading, error };
};

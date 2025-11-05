import { useState, useEffect } from "react";
import { sanityTechStackService } from "../../services/TechStackService/sanityTechStackService";
import type {
  TechCategory,
  Technology,
  TechStackData,
} from "../../types/tech-stack-data";

export const useSanityTechStack = () => {
  const [techStack, setTechStack] = useState<TechStackData>({
    categories: [],
    technologies: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTechStack = async () => {
      try {
        setLoading(true);
        const data = await sanityTechStackService.getTechStack();
        setTechStack(data);
      } catch (err) {
        setError("Failed to fetch tech stack data");
        console.error("Sanity tech stack error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTechStack();
  }, []);

  return { ...techStack, loading, error };
};

export const useSanityTechCategories = () => {
  const [categories, setCategories] = useState<TechCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const data = await sanityTechStackService.getCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to fetch tech categories");
        console.error("Sanity categories error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
};

export const useSanityTechnologiesByCategory = (categoryName: string) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        setLoading(true);
        const data = await sanityTechStackService.getTechnologiesByCategory(
          categoryName
        );
        setTechnologies(data);
      } catch (err) {
        setError(`Failed to fetch technologies for ${categoryName}`);
        console.error("Sanity technologies error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (categoryName) {
      fetchTechnologies();
    }
  }, [categoryName]);

  return { technologies, loading, error };
};

export const useSanityFeaturedTechnologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedTechnologies = async () => {
      try {
        setLoading(true);
        const data = await sanityTechStackService.getFeaturedTechnologies();
        setTechnologies(data);
      } catch (err) {
        setError("Failed to fetch featured technologies");
        console.error("Sanity featured technologies error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedTechnologies();
  }, []);

  return { technologies, loading, error };
};

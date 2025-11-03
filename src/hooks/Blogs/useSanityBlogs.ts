import { useState, useEffect } from "react";
import { sanityBlogService } from "../../services/BlogService/sanityBlogService";
import type { BlogItem, BlogItemDetails } from "../../types/blog-data";

export const useSanityBlogs = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await sanityBlogService.getBlogs();
        setBlogs(data);
      } catch (err) {
        setError("Failed to fetch blogs");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};

export const useSanityBlogBySlug = (slug: string) => {
  const [blog, setBlog] = useState<BlogItemDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogBySlug = async () => {
      try {
        setLoading(true);
        const data = await sanityBlogService.getBlogBySlug(slug);
        setBlog(data);
      } catch (err) {
        setError("Failed to fetch blog");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogBySlug();
    }
  }, [slug]);

  return { blog, loading, error };
};

export const useSanityFeaturedBlogs = (limit: number = 2) => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedBlogs = async () => {
      try {
        setLoading(true);
        const data = await sanityBlogService.getFeaturedBlogs(limit);
        setBlogs(data);
      } catch (err) {
        setError("Failed to fetch featured blogs");
        console.error("Sanity error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedBlogs();
  }, [limit]);

  return { blogs, loading, error };
};

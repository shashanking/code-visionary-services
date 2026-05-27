"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { sanityBlogService } from "../../services/BlogService/sanityBlogService";
import type { BlogItemDetails } from "../../types/blog-data";
import HeroBlogDetailsPage from "../../components/BlogDetailPage/HeroBlogDetailsPage";
import BlogContentSection from "../../components/BlogDetailPage/BlogContentSection";
import RelatedBlogsSection from "../../components/BlogDetailPage/RelatedBlogsSection";
import { LoadingScreen } from "../../components/shared";

const BlogDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const router = useRouter();
    const [blog, setBlog] = useState<BlogItemDetails | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            if (!slug) return;

            try {
                setLoading(true);
                const data = await sanityBlogService.getBlogBySlug(slug);

                if (!data) {
                    // Blog not found, redirect to 404 or blogs list
                    router.push("/404");
                    return;
                }

                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog details:", error);
                router.push("/404");
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
    }, [slug, navigate]);

    if (loading) {
        return <LoadingScreen />;
    }

    if (!blog) {
        return null;
    }

    const siteUrl = "https://codevisionaryservices.com";

    return (
        <div className="bg-[#F0F0F0] min-h-screen">            <HeroBlogDetailsPage blog={blog} />
            <BlogContentSection content={blog.content} />
            <RelatedBlogsSection currentBlogId={blog.id} />
        </div>
    );
};

export default BlogDetailPage;

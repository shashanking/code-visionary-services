import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sanityBlogService } from "../../services/BlogService/sanityBlogService";
import type { BlogItemDetails } from "../../types/blog-data";
import HeroBlogDetailsPage from "../../components/BlogDetailPage/HeroBlogDetailsPage";
import BlogContentSection from "../../components/BlogDetailPage/BlogContentSection";
import RelatedBlogsSection from "../../components/BlogDetailPage/RelatedBlogsSection";
import { LoadingScreen } from "../../components/shared";

const BlogDetailPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
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
                    navigate("/404");
                    return;
                }

                setBlog(data);
            } catch (error) {
                console.error("Error fetching blog details:", error);
                navigate("/404");
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

    return (
        <div className="bg-[#F0F0F0] min-h-screen">
            <HeroBlogDetailsPage blog={blog} />
            <BlogContentSection content={blog.content} />
            <RelatedBlogsSection currentBlogId={blog.id} />
        </div>
    );
};

export default BlogDetailPage;

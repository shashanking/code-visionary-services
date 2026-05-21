import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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

    const siteUrl = "https://codevisionaryservices.com";

    return (
        <div className="bg-[#F0F0F0] min-h-screen">
            <Helmet>
                <title>{`${blog.title} — Code Visionary Services`}</title>
                <meta name="description" content={blog.description} />
                <link rel="canonical" href={`${siteUrl}/blogs/${blog.slug}`} />
                <meta property="og:title" content={`${blog.title} — Code Visionary Services`} />
                <meta property="og:description" content={blog.description} />
                <meta property="og:image" content={blog.image || `${siteUrl}/og-image.png`} />
                <meta property="og:url" content={`${siteUrl}/blogs/${blog.slug}`} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={`${blog.title} — Code Visionary Services`} />
                <meta name="twitter:description" content={blog.description} />
                <meta name="twitter:image" content={blog.image || `${siteUrl}/og-image.png`} />
            </Helmet>
            <HeroBlogDetailsPage blog={blog} />
            <BlogContentSection content={blog.content} />
            <RelatedBlogsSection currentBlogId={blog.id} />
        </div>
    );
};

export default BlogDetailPage;

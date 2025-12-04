import React, { useEffect, useState } from "react";
import type { BlogItem } from "../../types/blog-data";
import { sanityBlogService } from "../../services/BlogService/sanityBlogService";
import { BlogCard } from "../BlogPageComponents";
import { Link } from "react-router-dom";
import ContentContainer from "../shared/ContentContainer";

interface RelatedBlogsSectionProps {
    currentBlogId: string;
}

const RelatedBlogsSection: React.FC<RelatedBlogsSectionProps> = ({
    currentBlogId,
}) => {
    const [relatedBlogs, setRelatedBlogs] = useState<BlogItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRelatedBlogs = async () => {
            try {
                // For now, just fetch recent blogs and filter out the current one
                // In a real app, you might want to fetch based on tags or categories
                const blogs = await sanityBlogService.getFeaturedBlogs(4);
                const filtered = blogs
                    .filter((blog) => blog.id !== currentBlogId)
                    .slice(0, 3);
                setRelatedBlogs(filtered);
            } catch (error) {
                console.error("Error fetching related blogs:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRelatedBlogs();
    }, [currentBlogId]);

    if (loading || relatedBlogs.length === 0) return null;

    return (
        <div className="w-full flex flex-col items-center py-[60px] bg-[#F0F0F0]">
            <ContentContainer
                maxWidth="7xl"
                paddingX="lg"
                className="flex flex-col gap-[60px]"
            >
                {/* Header */}
                <div className="flex flex-row justify-between items-center w-full">
                    <h2 className="font-earth-orbiter font-bold text-[32px] md:text-[48px] leading-[100%] text-[#161616] text-center w-full">
                        RELATED BLOGS
                    </h2>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedBlogs.map((blog) => (
                        <BlogCard key={blog.id} blog={blog} />
                    ))}
                </div>

                {/* See All Button */}
                <div className="flex justify-center mt-10">
                    <Link
                        to="/blogs"
                        className="flex flex-row justify-center items-center px-10 py-5 gap-2.5 bg-[#303030] rounded-[34px] hover:bg-[#404040] transition-colors"
                    >
                        <span className="font-earth-orbiter font-bold text-[20px] leading-[20px] text-[#F0F0F0] text-center">
                            See All
                        </span>
                    </Link>
                </div>
            </ContentContainer>
        </div>
    );
};

export default RelatedBlogsSection;

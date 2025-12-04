import React from "react";
import type { BlogItemDetails } from "../../types/blog-data";
import { Calendar, User } from "lucide-react";
import ContentContainer from "../shared/ContentContainer";

interface HeroBlogDetailsPageProps {
    blog: BlogItemDetails;
}

const HeroBlogDetailsPage: React.FC<HeroBlogDetailsPageProps> = ({ blog }) => {
    return (
        <div className="relative w-full flex flex-col items-center pt-[172px] pb-[60px]">
            {/* Background */}
            <div className="absolute top-0 left-0 w-full h-[1080px] bg-[#F0F0F0] -z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F0F0F0]" />
            </div>

            <ContentContainer
                maxWidth="7xl"
                paddingX="lg"
                className="flex flex-col gap-6"
            >
                {/* Title */}
                <h1 className="font-montserrat font-bold text-[32px] md:text-[40px] leading-[130%] text-[#303030]">
                    {blog.title}
                </h1>

                {/* Metadata */}
                <div className="flex flex-row items-center gap-3">
                    {/* Date */}
                    <div className="flex flex-row items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#B5442C]" />
                        <span className="font-montserrat font-normal text-base text-transparent bg-clip-text bg-gradient-to-l from-[#4F1E13] to-[#B5442C]">
                            {new Date(blog.date).toLocaleDateString("en-GB", {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                            })}
                        </span>
                    </div>

                    {/* Divider */}
                    <div className="w-[1px] h-[23px] bg-[#303030] opacity-60 rounded-[18px]" />

                    {/* Author */}
                    <div className="flex flex-row items-center gap-3">
                        <User className="w-5 h-5 text-[#B5442C]" />
                        <span className="font-montserrat font-normal text-base text-transparent bg-clip-text bg-gradient-to-l from-[#4F1E13] to-[#B5442C]">
                            {blog.author || "Unknown"}
                        </span>
                    </div>
                </div>

                {/* Image */}
                <div className="w-full h-[400px] md:h-[600px] rounded-[32px] overflow-hidden mt-[30px] bg-[#DADADA]">
                    <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full object-cover"
                    />
                </div>
            </ContentContainer>
        </div>
    );
};

export default HeroBlogDetailsPage;

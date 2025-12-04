import React from "react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { SanityBaseContent } from "../../types/blog-data";
import { urlFor } from "../../lib/sanityClient";
import ContentContainer from "../shared/ContentContainer";

interface BlogContentSectionProps {
    content?: SanityBaseContent[];
}

const components: PortableTextComponents = {
    block: {
        h1: ({ children }) => (
            <h1 className="font-montserrat font-bold text-[32px] md:text-[40px] leading-[130%] text-[#303030] mt-10 mb-6">
                {children}
            </h1>
        ),
        h2: ({ children }) => (
            <h2 className="font-montserrat font-bold text-[28px] md:text-[32px] leading-[130%] text-[#303030] mt-10 mb-5">
                {children}
            </h2>
        ),
        h3: ({ children }) => (
            <h3 className="font-montserrat font-bold text-[24px] md:text-[28px] leading-[130%] text-[#303030] mt-8 mb-4">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="font-montserrat font-bold text-[20px] md:text-[24px] leading-[130%] text-[#303030] mt-6 mb-3">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="font-montserrat font-normal text-[18px] md:text-[20px] leading-[160%] text-[#303030] mb-6">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-[#B5442C] pl-6 italic my-8 text-[20px] text-[#303030] opacity-80">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc pl-6 mb-6 font-montserrat font-normal text-[18px] md:text-[20px] leading-[160%] text-[#303030]">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal pl-6 mb-6 font-montserrat font-normal text-[18px] md:text-[20px] leading-[160%] text-[#303030]">
                {children}
            </ol>
        ),
    },
    types: {
        image: ({ value }: { value: any }) => {
            return (
                <div className="my-10 w-full rounded-[24px] overflow-hidden">
                    <img
                        src={urlFor(value).url()}
                        alt={value.alt || "Blog image"}
                        className="w-full h-auto object-cover"
                    />
                </div>
            );
        },
    },
};

const BlogContentSection: React.FC<BlogContentSectionProps> = ({ content }) => {
    if (!content) return null;

    return (
        <div className="w-full flex justify-center pb-[60px]">
            <ContentContainer maxWidth="7xl" paddingX="lg">
                <div className="max-w-[1200px]">
                    <PortableText value={content} components={components} />
                </div>
            </ContentContainer>
        </div>
    );
};

export default BlogContentSection;

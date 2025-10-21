import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import BlogPageBg from "../../assets/blog-page/hero-bg.jpg";

import BlogImg1 from "../../assets/blog-page/blog-img-1.jpg";
import BlogImg2 from "../../assets/blog-page/blog-img-2.jpg";
import BlogImg3 from "../../assets/blog-page/blog-img-3.jpg";
import BlogImg4 from "../../assets/blog-page/blog-img-4.jpg";

interface BlogHero {
  id: string;
  title: string;
  date: string;
  image: string;
  slug: string;
}

const BlogHeroData: BlogHero[] = [
  {
    id: "01",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg1,
    slug: "blog-123",
  },
  {
    id: "02",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg2,
    slug: "blog-456",
  },
  {
    id: "03",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg3,
    slug: "blog-789",
  },
  {
    id: "04",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    date: "May 02,2024",
    image: BlogImg4,
    slug: "blog-321",
  },
];

const HeroBlogPage: React.FC = () => {
  return (
    <SectionContainer
      id="review-hero"
      fullWidth
      padding="lg"
      background="#e3e3e3"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${BlogPageBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0]/0 via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-center"
      >
        <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center">
          <h1
            className={`font-heading font-bold text-title-2xl text-center uppercase mb-6 bg-gradient-to-r text-[#161616] leading-[1.1]`}
          >
            Explore{" "}
            <span className="bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
              Our Blog
            </span>
          </h1>

          <p className="font-sans font-normal text-body1 text-[#161616] max-w-xl mx-auto leading-[1.5]">
            Stay ahead in the digital world with our expert insights, industry
            trends, and creative inspiration. Explore our blog for valuable
            tips, thought leadership, and the latest innovations from Code
            Visionary Studios.
          </p>
        </div>
      </ContentContainer>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 pt-15 pb-10 flex justify-center items-center"
      >
        <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center gap-4">
          {/* Left side vertical carousel */}
          <div className="w-2/3"></div>

          {/* Ride side horizontal carousel */}
          <div className="w-1/3"></div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroBlogPage;

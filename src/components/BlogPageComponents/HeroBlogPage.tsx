import React, { useState, useEffect, useRef } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import BlogPageBg from "../../assets/blog-page/hero-bg.jpg";
import { useNavigate } from "react-router-dom";
import { BlogHeroData } from "../../constants/blog-page-data";

const HeroBlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const leftScrollRef = useRef<HTMLDivElement>(null);
  const rightScrollRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<number | null>(null);

  const getNextIndex = (current: number) => (current + 1) % BlogHeroData.length;
  const rightIndex = getNextIndex(activeIndex);

  // Auto scroll functionality
  useEffect(() => {
    const scrollInterval = 4000; // Change every 4 seconds

    autoScrollInterval.current = window.setInterval(() => {
      setActiveIndex((prev) => getNextIndex(prev));
    }, scrollInterval);

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

  // Handle manual navigation
  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  // Pause auto-scroll on hover
  const handleMouseEnter = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  // Resume auto-scroll on mouse leave
  const handleMouseLeave = () => {
    if (!autoScrollInterval.current) {
      autoScrollInterval.current = window.setInterval(() => {
        setActiveIndex((prev) => getNextIndex(prev));
      }, 4000);
    }
  };

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
        className="relative z-10 py-10 flex justify-center items-center"
      >
        <div
          className="relative z-10 w-full max-w-2xl mx-auto flex flex-col lg:flex-row justify-between items-stretch gap-6 min-h-[400px]"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left side vertical auto-scroll */}
          <div className="w-full lg:w-3/5 relative overflow-hidden rounded-2xl bg-black/80 backdrop-blur-sm border border-white/20 shadow-2xl min-h-[300px] lg:min-h-[400px]">
            <div
              ref={leftScrollRef}
              className="h-full flex flex-col justify-center p-6 lg:p-8 gap-6"
            >
              <img
                src={BlogHeroData[activeIndex].image}
                alt={BlogHeroData[activeIndex].title}
                className="w-full h-48 lg:h-64 object-cover rounded-xl shadow-lg mx-auto transform hover:scale-105 transition-transform duration-500"
              />

              <div
                key={activeIndex}
                onClick={() => handleBlogClick(BlogHeroData[activeIndex].slug)}
                className="flex flex-row justify-between transform transition-all duration-1000 ease-in-out"
              >
                <div className="text-left">
                  <span className="text-title-sm font-heading font-bold text-white mb-4 block">
                    {BlogHeroData[activeIndex].id}
                  </span>
                  <h2 className="text-body font-semibold text-white mb-4 leading-tight">
                    {BlogHeroData[activeIndex].title}
                  </h2>
                  <p className="text-body2 text-gray-600">
                    {BlogHeroData[activeIndex].date}
                  </p>
                </div>

                {/* Progress indicator */}
                <div className="flex flex-col gap-2 w-[25px] mt-auto">
                  {BlogHeroData.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-500 ${
                        index === activeIndex
                          ? "bg-[#B5442C] w-6"
                          : "bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side horizontal auto-scroll */}
          <div className="w-full lg:w-2/5 relative overflow-hidden rounded-2xl bg-black/80 backdrop-blur-sm border border-white/20 shadow-2xl min-h-[300px] lg:min-h-[400px]">
            <div
              ref={rightScrollRef}
              className="h-full flex-col items-center justify-center p-6 lg:p-8"
            >
              <div className="mb-4 lg:mb-6">
                <img
                  src={BlogHeroData[rightIndex].image}
                  alt={BlogHeroData[rightIndex].title}
                  className="w-full h-48 lg:h-64 object-cover rounded-xl shadow-lg mx-auto transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div
                key={rightIndex}
                onClick={() => handleBlogClick(BlogHeroData[rightIndex].slug)}
                className="w-full transform transition-all duration-1000 ease-in-out"
              >
                <div className="text-left">
                  <span className="text-title-sm font-heading font-bold text-white mb-4 block">
                    {BlogHeroData[rightIndex].id}
                  </span>
                  <h2 className="text-body font-semibold text-white mb-4 leading-tight">
                    {BlogHeroData[rightIndex].title}
                  </h2>
                  <p className="text-body2 text-gray-600">
                    {BlogHeroData[rightIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroBlogPage;

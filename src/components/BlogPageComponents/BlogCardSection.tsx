import React, { useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import ReviewCardBg from "../../assets/review-page/review-bg.jpg";
import leftArrow from "../../assets/Testimonial_section_left_arrow_vector_image.png";
import rightArrow from "../../assets/Testimonial_section_right_arrow_vector_image.png";
import { BlogsData } from "../../constants/blog-page-data";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BlogCardSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | string | null>("02"); // second card hovered by default

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(BlogsData.length / cardsPerPage);

  // Get current cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = BlogsData.slice(indexOfFirstCard, indexOfLastCard);

  const navigate = useNavigate();

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  // Navigation functions for pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <SectionContainer
      id="review-card"
      fullWidth
      padding="lg"
      background="#e3e3e3"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${ReviewCardBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div className="relative w-full max-w-2xl pt-20 pb-10 flex flex-col justify-start items-center">
          <div className="flex flex-row w-full mx-auto justify-between items-center mb-10">
            <h1 className="font-heading font-bold text-title-lg text-center uppercase leading-tight max-w-md text-[#161616] leading-[1.1]">
              All Blogs
            </h1>

            <button className="font-heading uppercase font-normal text-body1 text-[#f0f0f0] bg-[#303030] rounded-full py-1.5 px-6 leading-[1.5] cursor-pointer hover:bg-[#B5442C]">
              See All
            </button>
          </div>

          <div className="relative w-full">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
              {currentCards.map((item) => {
                const isHovered = hoveredId === item.id;

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`relative w-full h-full p-3 rounded-2xl overflow-hidden transition-all duration-300 border border-[#B5442C]`}
                    style={{
                      background: isHovered
                        ? "linear-gradient(270deg, #B5442C 0%, #4F1E13 100%)"
                        : "#F0F0F0",
                      boxShadow: "0px 0px 8px 0px #B5442C80",
                    }}
                  >
                    <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-400 ease-out"
                        loading="lazy"
                      />

                      <button
                        onClick={() => handleBlogClick(item.slug)}
                        className={`absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? "bg-[#f0f0f0] text-[#B5442C] hover:bg-[#B5442C] hover:text-[#f0f0f0] border border-[#B5442C] -rotate-45 cursor-pointer"
                            : "bg-[#B5442C] text-[#f0f0f0] hover:bg-[#f0f0f0] hover:text-[#B5442C] border border-[#B5442C]"
                        }`}
                        title={`Read more about ${item.title}`}
                      >
                        <ArrowRightIcon />
                      </button>
                    </div>

                    {/* Text Content */}
                    <div
                      className={`relative flex flex-col justify-between text-left transition-opacity duration-300 ${
                        isHovered ? "text-[#f0f0f0]" : "text-[#000000]"
                      }`}
                    >
                      <p className="text-body5 font-sans leading-[1.5] my-3">
                        {item.date} | By {item.author}
                      </p>

                      <h3 className="text-body1 font-sans font-semibold mb-3 line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-body3 font-sans line-clamp-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-8 mt-10 px-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`w-14 h-14 flex items-center justify-center border rounded-full ${
                currentPage > 1
                  ? "border-[#161616] cursor-pointer hover:bg-gray-100"
                  : "border-[#161616]/20 cursor-not-allowed"
              }`}
            >
              <img
                src={leftArrow}
                alt="Previous"
                className={`w-5 h-5 ${
                  currentPage > 1 ? "opacity-100" : "opacity-50"
                }`}
              />
            </button>

            {/* Page Indicator */}
            <div className="flex items-center gap-2">
              <span className="text-body1 font-sans text-[#161616]">
                Page {currentPage} of {totalPages}
              </span>
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`w-14 h-14 flex items-center justify-center border rounded-full ${
                currentPage < totalPages
                  ? "border-[#161616] cursor-pointer hover:bg-gray-100"
                  : "border-[#161616]/20 cursor-not-allowed"
              }`}
            >
              <img
                src={rightArrow}
                alt="Next"
                className={`w-5 h-5 ${
                  currentPage < totalPages ? "opacity-100" : "opacity-50"
                }`}
              />
            </button>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default BlogCardSection;

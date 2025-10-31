import React, { useEffect, useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import BlogCardBg from "../../assets/blog-page/blog-card-bg.jpg";
import leftArrow from "../../assets/Testimonial_section_left_arrow_vector_image.png";
import rightArrow from "../../assets/Testimonial_section_right_arrow_vector_image.png";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSanityBlogs } from "../../hooks/Blogs/useSanityBlogs";

const BlogCardSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(1);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  // Using Sanity hook to fetch blogs
  const { blogs, loading, error } = useSanityBlogs();

  const navigate = useNavigate();

  // Set default hover to second card when blogs load
  useEffect(() => {
    if (blogs.length > 1) {
      setHoveredIndex(1); // Always set to second card (index 1)
    }
  }, [blogs]);

  const handleBlogClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  // Calculate total pages
  const totalPages = Math.ceil(blogs.length / cardsPerPage);

  // Navigation functions for pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      // Reset hover to second card when page changes
      setHoveredIndex(1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      // Reset hover to second card when page changes
      setHoveredIndex(1);
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
          style={{ backgroundImage: `url(${BlogCardBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-start items-center">
          <div className="flex flex-row w-full mx-auto justify-between items-center mb-10">
            <h1 className="font-heading font-bold text-title-lg text-center uppercase leading-tight max-w-md text-[#161616] leading-[1.1]">
              All Blogs
            </h1>

            <button className="font-heading uppercase font-normal text-body1 text-[#f0f0f0] bg-[#303030] rounded-full py-1.5 px-6 leading-[1.5] cursor-pointer hover:bg-[#B5442C]">
              See All
            </button>
          </div>

          {loading ? (
            <div className="relative w-full">
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                {[...Array(8)].map((_, index) => (
                  <div
                    key={index}
                    className="relative w-full h-full p-3 rounded-2xl overflow-hidden bg-gray-200 animate-pulse min-h-[350px]"
                  />
                ))}
              </div>
            </div>
          ) : error ? (
            <div className="w-full text-center py-20">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-red-800 mb-2">
                  Failed to Load Blogs
                </h3>
                <p className="text-red-600">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="w-full text-center py-20">
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                  No Blogs Available
                </h3>
                <p className="text-yellow-600">
                  Check back later for new blog posts.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="relative w-full">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                  {blogs.map((item, index) => {
                    const isHovered = hoveredIndex === index;

                    return (
                      <div
                        key={index}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(1)}
                        className={`relative w-full h-full p-3 rounded-2xl overflow-hidden transition-all duration-300 border border-[#B5442C]`}
                        style={{
                          background: isHovered
                            ? "linear-gradient(270deg, #B5442C 0%, #4F1E13 100%)"
                            : "#F0F0F0",
                          boxShadow: "0px 0px 8px 0px #B5442C80",
                        }}
                        onClick={() => handleBlogClick(item.slug)}
                      >
                        <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-all duration-400 ease-out"
                            loading="lazy"
                          />

                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent card click
                              handleBlogClick(item.slug);
                            }}
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
                            {new Date(item.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}{" "}
                            | By {item.author}
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
              {totalPages > 1 && (
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
              )}
            </>
          )}
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default BlogCardSection;

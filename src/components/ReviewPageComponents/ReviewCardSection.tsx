import React, { useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import ReviewCardBg from "../../assets/review-page/review-bg.jpg";
import leftArrow from "../../assets/review-page/review-left-arrow.png";
import rightArrow from "../../assets/review-page/review-right-arrow.png";
import { useSanityReviewItems } from "../../hooks/Reviews/useSanityReviews";

// Loading Skeleton Component
const ReviewsLoadingSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="relative w-full h-[350px] sm:h-[390px] md:h-[420px] rounded-2xl overflow-hidden bg-gray-200 animate-pulse"
        >
          {/* Logo skeleton */}
          <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-gray-300 z-30" />

          {/* Content skeleton */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 pt-22">
            <div className="space-y-3">
              <div className="h-4 bg-gray-300 rounded w-full" />
              <div className="h-4 bg-gray-300 rounded w-5/6" />
              <div className="h-4 bg-gray-300 rounded w-4/6" />
              <div className="h-4 bg-gray-300 rounded w-3/6" />
            </div>
            <div className="flex flex-col items-start mt-4 gap-2">
              <div className="h-5 bg-gray-300 rounded w-24" />
              <div className="h-4 bg-gray-300 rounded w-32" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Error Display Component
const ReviewsErrorDisplay: React.FC<{ error: string }> = ({ error }) => {
  return (
    <div className="w-full max-w-2xl mx-auto text-center py-10">
      <div className="bg-red-50 border border-red-200 rounded-xl p-8">
        <h3 className="text-xl font-semibold text-red-800 mb-3">
          Unable to Load Reviews
        </h3>
        <p className="text-red-600 mb-4">{error}</p>
        <p className="text-gray-500 text-sm">
          Please check your connection and try again later.
        </p>
      </div>
    </div>
  );
};

const ReviewCardSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(1);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = React.useRef<Record<number, HTMLVideoElement | null>>({});

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  const { reviewItems, loading, error } = useSanityReviewItems();

  // Debug: Log review items to check video data
  React.useEffect(() => {
    console.log("Review items fetched:", reviewItems);
    console.log("Items with videos:", reviewItems.filter(item => item.video));
  }, [reviewItems]);

  // Calculate total pages
  const totalPages = Math.ceil(reviewItems.length / cardsPerPage);

  // Navigation functions
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

  React.useEffect(() => {
    return () => {
      Object.values(videoRefs.current).forEach((v) => v?.pause());
    };
  }, []);

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
          <h1 className="font-heading font-bold text-title-lg text-center uppercase mb-10 leading-tight max-w-md text-[#161616] leading-[1.1]">
            What Our{" "}
            <span className="bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
              Clients
            </span>{" "}
            Say
          </h1>

          <p className="font-sans font-normal text-body1 text-[#161616] max-w-lg mx-auto leading-[1.5]">
            Discover how Code Visionary Services has made a difference for our
            clients. Our testimonials showcase the positive impact of our web
            design, app development, branding, and digital marketing services.
          </p>

          <div className="relative w-full max-w-sm h-0.5 my-10">
            <div
              className="w-full h-full"
              style={{
                background:
                  "linear-gradient(270deg, rgba(8, 97, 170, 0) 0%, #0861AA 50%, rgba(8, 97, 170, 0) 100%)",
              }}
            />
          </div>

          {/* Review Cards Section */}
          <div className="relative w-full">
            {loading ? (
              <ReviewsLoadingSkeleton />
            ) : error ? (
              <ReviewsErrorDisplay error={error} />
            ) : (
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
                {reviewItems.map((item, index) => {
                  const isHovered = hoveredIndex === index;
                  const isPlaying = playingId === index;

                  const isActive = isHovered || isPlaying;
                  const bgColor = isActive ? "#131A22" : "#F0F0F0";

                  const textColor =
                    bgColor === "#131A22" ? "#FFFFFF" : "#000000";

                  return (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(1)}
                      className={`relative w-full h-[350px] sm:h-[390px] md:h-[420px] rounded-2xl overflow-hidden transition-all duration-300`}
                      style={{
                        background: bgColor,
                        boxShadow: isHovered
                          ? "0px 0px 8px 2px #B5442C80"
                          : "0px 0px 8px 2px #0861AA80",
                        borderImageSource: isHovered
                          ? "linear-gradient(91.08deg, #B5442C 0.34%, #FF9C87 99.62%)"
                          : undefined,
                        borderImageSlice: isHovered ? 1 : undefined,
                      }}
                    >
                      {/* Logo always visible */}
                      <img
                        src={item.image}
                        alt={item.reviewer}
                        className="absolute top-5 left-5 w-12 h-12 rounded-full border-2 border-[#0861AA] object-contain z-30"
                      />

                      {/* Video */}
                      {item.video && (
                        <>
                          {console.log(`Rendering video for item ${index}:`, item.video)}
                          <video
                            ref={(el) => {
                              videoRefs.current[index] = el;
                            }}
                            src={item.video}
                            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                              isHovered || isPlaying
                                ? "opacity-100"
                                : "opacity-0 pointer-events-none"
                            }`}
                            loop
                            playsInline
                          />
                        </>
                      )}

                      {/* Play/Pause button overlay */}
                      {item.video && isHovered && (
                        <>
                          {console.log(`Rendering play button for item ${index}, isHovered: ${isHovered}, hasVideo: ${!!item.video}`)}
                          <button
                            className={`
                                      absolute z-20 flex items-center justify-center
                                      w-[90px] h-[50px] 
                                      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                      gap-2 rounded-[68px] pt-[20px] pb-[20px]
                                      bg-black/30 hover:bg-white/50 opacity-100 cursor-pointer
                                    `}
                            onClick={async (e) => {
                              e.stopPropagation();
                              console.log(`Play button clicked for item ${index}`);
                              if (playingId && playingId !== index) {
                                videoRefs.current[playingId]?.pause();
                              }
                              if (playingId === index) {
                                videoRefs.current[index]?.pause();
                                setPlayingId(null);
                              } else {
                                try {
                                  await videoRefs.current[index]?.play();
                                  setPlayingId(index);
                                } catch (err) {
                                  console.error("Video play error", err);
                                }
                              }
                            }}
                          >
                          {playingId === index ? (
                            <div className="flex gap-2">
                              <div className="w-1.5 h-6 bg-white rounded-sm" />
                              <div className="w-1.5 h-6 bg-white rounded-sm" />
                            </div>
                          ) : (
                            <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white" />
                          )}
                        </button>
                        </>
                      )}

                      {/* Text */}
                      <div
                        className={`absolute inset-0 flex flex-col justify-between p-6 pt-22 transition-opacity duration-300 ${
                          item.video
                            ? isHovered || isPlaying
                              ? "opacity-0"
                              : "opacity-100"
                            : "opacity-100" // always visible text if no video
                        }`}
                        style={{ color: textColor }}
                      >
                        <p className="text-body2 font-sans leading-[1.5]">
                          {item.description}
                        </p>
                        <div className="flex flex-col items-start mt-4 gap-2">
                          <h3 className="text-body1 font-sans font-bold">
                            {item.reviewer}
                          </h3>
                          <p className="text-body2 font-sans">
                            {item.clientType}
                          </p>
                        </div>
                      </div>

                      {/* Hover info */}
                      {isHovered && (
                        <div className="absolute bottom-6 left-6 flex flex-col items-start gap-2 text-white z-10">
                          <h3 className="text-body1 font-sans font-bold">
                            {item.reviewer}
                          </h3>
                          <p className="text-body2 font-sans">
                            {item.clientType}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Pagination Controls */}
          {!loading && !error && reviewItems.length > 0 && totalPages > 1 && (
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
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ReviewCardSection;

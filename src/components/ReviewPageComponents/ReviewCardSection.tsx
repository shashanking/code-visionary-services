import React, { useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import ReviewCardBg from "../../assets/review-page/review-bg.jpg";
import { testimonials } from "../../constants/testimonials-data";
import leftArrow from "../../assets/Testimonial_section_left_arrow_vector_image.png";
import rightArrow from "../../assets/Testimonial_section_right_arrow_vector_image.png";

const ReviewCardSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(2); // second card hovered by default
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = React.useRef<Record<number, HTMLVideoElement | null>>({});

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  // Get current cards to display
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = testimonials.slice(indexOfFirstCard, indexOfLastCard);

  // Navigation functions
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
            Discover how Code Visionary Studios has made a difference for our
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

          {/* Testimonial Cards Grid */}
          <div className="relative w-full">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4">
              {currentCards.map((item, idx) => {
                const isHovered = hoveredId === item.id;
                const isPlaying = playingId === item.id;
                const isDefaultDark = idx === 1;

                const isActive = isHovered || isPlaying || isDefaultDark;
                const bgColor = isActive ? "#131A22" : "#F0F0F0";

                const textColor = bgColor === "#131A22" ? "#FFFFFF" : "#000000";

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredId(item.id)}
                    onMouseLeave={() => setHoveredId(null)}
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
                      alt={item.name}
                      className="absolute top-5 left-5 w-12 h-12 rounded-full border-2 border-[#0861AA] object-contain z-30"
                    />

                    {/* Video */}
                    {item.video && (
                      <video
                        ref={(el) => {
                          videoRefs.current[item.id] = el;
                        }}
                        src={item.video}
                        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                          isHovered || isPlaying
                            ? "opacity-100"
                            : "opacity-0 pointer-events-none"
                        }`}
                        muted
                        loop
                        playsInline
                      />
                    )}

                    {/* Play/Pause button overlay */}
                    {item.video && isHovered && (
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
                          if (playingId && playingId !== item.id) {
                            videoRefs.current[playingId]?.pause();
                          }
                          if (playingId === item.id) {
                            videoRefs.current[item.id]?.pause();
                            setPlayingId(null);
                          } else {
                            try {
                              await videoRefs.current[item.id]?.play();
                              setPlayingId(item.id);
                            } catch (err) {
                              console.error("Video play error", err);
                            }
                          }
                        }}
                      >
                        {playingId === item.id ? (
                          <div className="flex gap-2">
                            <div className="w-1.5 h-6 bg-white rounded-sm" />
                            <div className="w-1.5 h-6 bg-white rounded-sm" />
                          </div>
                        ) : (
                          <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white" />
                        )}
                      </button>
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
                        {item.text}
                      </p>
                      <div className="flex flex-col items-start mt-4 gap-2">
                        <h3 className="text-body1 font-sans font-bold">
                          {item.name}
                        </h3>
                        <p className="text-body2 font-sans">{item.title}</p>
                      </div>
                    </div>

                    {/* Hover info */}
                    {isHovered && (
                      <div className="absolute bottom-6 left-6 flex flex-col items-start gap-2 text-white z-10">
                        <h3 className="text-body1 font-sans font-bold">
                          {item.name}
                        </h3>
                        <p className="text-body2 font-sans">{item.title}</p>
                      </div>
                    )}
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

export default ReviewCardSection;

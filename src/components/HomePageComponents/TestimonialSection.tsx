import React, { useRef, useState, useEffect } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import testimonialBg from "../../assets/Testimonial_section_bg_image.png";
import leftArrow from "../../assets/Testimonial_section_left_arrow_vector_image.png";
import rightArrow from "../../assets/Testimonial_section_right_arrow_vector_image.png";
import { useSanityReviewItems } from "../../hooks/Reviews/useSanityReviews";

const TestimonialSection: React.FC = () => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | string | null>(1);
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollByAmount = 360;

  const { reviewItems, loading, error } = useSanityReviewItems();

  const updateScrollButtons = () => {
    if (!rowRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1); // -1 for rounding issues
  };

  const scrollLeft = () => {
    rowRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
    setTimeout(updateScrollButtons, 200);
  };

  const scrollRight = () => {
    rowRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });
    setTimeout(updateScrollButtons, 200);
  };

  useEffect(() => {
    updateScrollButtons(); // initial
    const el = rowRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateScrollButtons, { passive: true });

    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  useEffect(() => {
    return () => {
      Object.values(videoRefs.current).forEach((v) => v?.pause());
    };
  }, []);

  if (loading) {
    return <div>Loading reviews...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <SectionContainer
      id="reviews"
      fullWidth
      padding="none"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#F0F0F0]"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center scale-x-[-1]"
          style={{ backgroundImage: `url(${testimonialBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 w-full py-20 md:py-30"
      >
        <div className="w-full max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-15 mb-16 md:mb-20">
            <div className="hidden md:flex gap-4 items-center">
              <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className={`w-16 h-16 flex items-center justify-center border rounded-full ${
                  canScrollLeft
                    ? "border-[#161616] cursor-pointer"
                    : "border-[#161616]/20"
                }`}
              >
                <img
                  src={leftArrow}
                  alt="Prev"
                  className={`w-6 h-6 ${
                    canScrollLeft ? "opacity-100" : "opacity-50"
                  }`}
                />
              </button>
              <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className={`w-16 h-16 flex items-center justify-center border rounded-full ${
                  canScrollRight
                    ? "border-[#161616] cursor-pointer"
                    : "border-[#161616]/20"
                }`}
              >
                <img
                  src={rightArrow}
                  alt="Next"
                  className={`w-6 h-6 ${
                    canScrollRight ? "opacity-100" : "opacity-50"
                  }`}
                />
              </button>
            </div>

            {/* Vertical Divider */}
            <div className="hidden md:flex w-0.5 h-32 rounded-xl bg-gradient-to-b from-[#0861AA]/0 via-[#0861AA] to-[#0861AA]/0" />

            <div className="flex-1 text-center md:text-left">
              <h1 className="font-heading font-bold text-title-md text-center md:text-left uppercase mb-6 leading-tight max-w-full md:max-w-sm">
                <span className="text-[#161616]">WHAT OUR</span>{" "}
                <span className="bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
                  CLIENTS
                </span>{" "}
                <span className="text-[#161616] inline-block">SAY</span>
              </h1>

              <p className="font-sans font-normal text-body1 text-[#3C4454] leading-[1.5] text-center md:text-left">
                Discover how Code Visionary Services makes a difference for our
                clients. We design and ship performant web and mobile
                products—and we also build AI infrastructure that supports
                business operations.
              </p>
            </div>
          </div>

          {/* Testimonial Cards Container */}
          <div className="relative">
            <div
              ref={rowRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory py-4 px-3"
              style={{
                scrollPaddingLeft: "12px", // Ensures first card snap includes left padding
                scrollPaddingRight: "10px", // Ensures last card snap includes right padding
              }}
            >
              {reviewItems.map((item, index) => {
                const isHovered = hoveredIndex === item.id;
                const isPlaying = playingId === index;

                // Determine card background
                const isActive = isHovered || isPlaying;
                const bgColor = isActive ? "#131A22" : "#F0F0F0";

                // Determine text color based on background
                const textColor = bgColor === "#131A22" ? "#FFFFFF" : "#000000";

                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setHoveredIndex(item.id)}
                    onMouseLeave={() => setHoveredIndex(1)}
                    className={`relative flex-shrink-0 snap-start w-[280px] sm:w-[310px] md:w-[340px] lg:w-[380px] h-[350px] sm:h-[390px] md:h-[420px] lg:h-[450px] rounded-2xl overflow-hidden transition-all duration-300`}
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
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden w-full max-w-xs mx-auto justify-between gap-8 mt-10 px-4 sm:px-0">
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`w-14 h-14 flex items-center justify-center border rounded-full ${
                canScrollLeft
                  ? "border-[#161616] cursor-pointer"
                  : "border-[#161616]/20"
              }`}
            >
              <img
                src={leftArrow}
                alt="Prev"
                className={`w-5 h-5 ${
                  canScrollLeft ? "opacity-100" : "opacity-50"
                }`}
              />
            </button>
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`w-14 h-14 flex items-center justify-center border rounded-full ${
                canScrollRight
                  ? "border-[#161616] cursor-pointer"
                  : "border-[#161616]/20"
              }`}
            >
              <img
                src={rightArrow}
                alt="Next"
                className={`w-5 h-5 ${
                  canScrollRight ? "opacity-100" : "opacity-50"
                }`}
              />
            </button>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default TestimonialSection;

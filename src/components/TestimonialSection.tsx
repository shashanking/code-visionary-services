// import React, { useRef, useState } from "react";
// import SectionContainer from "./shared/SectionContainer";
// import ContentContainer from "./shared/ContentContainer";
// import testimonialBg from "../assets/Testimonial_section_bg_image.png";
// import leftArrow from "../assets/Testimonial_section_left_arrow_vector_image.png";
// import rightArrow from "../assets/Testimonial_section_right_arrow_vector_image.png";
// import { testimonials } from "../constants/testimonials-data";

// const TestimonialSection: React.FC = () => {
//   const rowRef = useRef<HTMLDivElement>(null);
//   const [hoveredId, setHoveredId] = useState<number | null>(null);
//   const [playingId, setPlayingId] = useState<number | null>(null);

//   // Create a map of refs for all videos
//   const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

//   const scrollByAmount = 360;
//   const scrollLeft = () => {
//     rowRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
//   };
//   const scrollRight = () => {
//     rowRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });
//   };

//   const handlePlay = (id: number) => {
//     // Pause previously playing video
//     if (playingId && videoRefs.current[playingId]) {
//       videoRefs.current[playingId]?.pause();
//     }

//     // If clicked same video, toggle pause
//     if (playingId === id) {
//       videoRefs.current[id]?.pause();
//       setPlayingId(null);
//     } else {
//       setPlayingId(id);
//       // Play new video
//       videoRefs.current[id]?.play();
//     }
//   };

//   return (
//     <SectionContainer
//       id="testimonials"
//       fullWidth
//       padding="none"
//       className="relative bg-[#F0F0F0] py-20 overflow-hidden"
//     >
//       {/* Background */}
//       <div
//         className="absolute inset-0 bg-cover bg-center opacity-10 scale-x-[-1]"
//         style={{ backgroundImage: `url(${testimonialBg})` }}
//       />

//       <ContentContainer maxWidth="7xl" paddingX="lg" className="relative z-10">
//         {/* Header */}
//         <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
//           <div className="hidden md:flex gap-10">
//             <button
//               onClick={scrollLeft}
//               className="w-16 h-16 flex items-center justify-center border border-[#161616]/20 hover:opacity-50 rounded-full"
//             >
//               <img src={leftArrow} alt="Prev" className="w-6 h-6" />
//             </button>
//             <button
//               onClick={scrollRight}
//               className="w-16 h-16 flex items-center justify-center border border-[#161616]/20 hover:opacity-50 rounded-full"
//             >
//               <img src={rightArrow} alt="Next" className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="flex-1 text-center md:text-left">
//             <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4">
//               What Our Clients Say
//             </h2>
//             <p className="max-w-3xl mx-auto md:mx-0 text-[#303030] leading-relaxed">
//               Discover how Code Visionary Services makes a difference for our
//               clients. We design and ship performant web and mobile products —
//               and also build AI infrastructure that supports business
//               operations.
//             </p>
//           </div>
//         </div>

//         {/* Scrollable testimonial cards */}
//         <div
//           ref={rowRef}
//           className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory px-2 md:px-0"
//         >
//           {testimonials.map((item) => {
//             const isHovered = hoveredId === item.id;
//             const isPlaying = playingId === item.id;

//             return (
//               <div
//                 key={item.id}
//                 onMouseEnter={() => setHoveredId(item.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//                 className="relative flex-shrink-0 snap-start w-[280px] sm:w-[320px] md:w-[360px] lg:w-[420px] h-[480px] rounded-3xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-[1.02] bg-white"
//               >
//                 {/* Video Overlay */}
//                 <video
//                   ref={(el) => {
//                     videoRefs.current[item.id] = el; // just assign, don't return anything
//                   }}
//                   src={item.video}
//                   className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
//                     isHovered || isPlaying
//                       ? "opacity-100"
//                       : "opacity-0 pointer-events-none"
//                   }`}
//                   muted
//                   loop
//                   playsInline
//                 />

//                 {/* Overlay Gradient */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity duration-500 pointer-events-none ${
//                     isHovered || isPlaying ? "opacity-100" : "opacity-0"
//                   }`}
//                 />

//                 {/* Content */}
//                 <div className="relative z-10 flex flex-col justify-between p-6 h-full">
//                   {/* Text always visible */}
//                   <p className="text-[#303030] text-base md:text-lg leading-relaxed">
//                     {item.text}
//                   </p>

//                   {/* Logo, Name & Title appear on hover */}
//                   <div
//                     className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-center transition-opacity duration-300 ${
//                       isHovered ? "opacity-100" : "opacity-0"
//                     }`}
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-16 h-16 object-contain"
//                     />
//                     <h3 className="text-2xl font-bold text-white">
//                       {item.name}
//                     </h3>
//                     <p className="text-white opacity-80">{item.title}</p>

//                     {/* Play button */}
//                     <button
//                       onClick={() => handlePlay(item.id)}
//                       className="mt-2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/50 flex items-center justify-center transition"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="currentColor"
//                         viewBox="0 0 24 24"
//                         className="w-6 h-6 text-white"
//                       >
//                         <path d="M4 4l16 8-16 8z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Mobile arrows */}
//         <div className="flex md:hidden justify-center gap-8 mt-10">
//           <button
//             onClick={scrollLeft}
//             className="w-14 h-14 flex items-center justify-center border border-[#161616]/20 rounded-full"
//           >
//             <img src={leftArrow} alt="Prev" className="w-5 h-5" />
//           </button>
//           <button
//             onClick={scrollRight}
//             className="w-14 h-14 flex items-center justify-center border border-[#161616]/20 rounded-full"
//           >
//             <img src={rightArrow} alt="Next" className="w-5 h-5" />
//           </button>
//         </div>
//       </ContentContainer>
//     </SectionContainer>
//   );
// };

// export default TestimonialSection;

// import React, { useRef, useState, useEffect } from "react";
// import SectionContainer from "./shared/SectionContainer";
// import ContentContainer from "./shared/ContentContainer";
// import testimonialBg from "../assets/Testimonial_section_bg_image.png";
// import leftArrow from "../assets/Testimonial_section_left_arrow_vector_image.png";
// import rightArrow from "../assets/Testimonial_section_right_arrow_vector_image.png";
// import { testimonials } from "../constants/testimonials-data";

// const TestimonialSection: React.FC = () => {
//   const rowRef = useRef<HTMLDivElement>(null);
//   const [hoveredId, setHoveredId] = useState<number | null>(2); // second card hovered by default
//   const [playingId, setPlayingId] = useState<number | null>(null);
//   const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

//   const scrollByAmount = 360;
//   const scrollLeft = () =>
//     rowRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
//   const scrollRight = () =>
//     rowRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });

//   useEffect(() => {
//     return () => {
//       Object.values(videoRefs.current).forEach((v) => v?.pause());
//     };
//   }, []);

//   return (
//     <SectionContainer
//       id="testimonials"
//       fullWidth
//       padding="none"
//       className="relative min-h-screen overflow-hidden bg-[#F0F0F0]"
//     >
//       {/* Background */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div
//           className="w-full h-full bg-cover bg-no-repeat bg-center scale-x-[-1]"
//           style={{ backgroundImage: `url(${testimonialBg})` }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
//       </div>

//       <ContentContainer
//         maxWidth="7xl"
//         paddingX="lg"
//         className="relative z-10 w-full min-h-screen py-16 md:py-20"
//       >
//         {/* Header */}
//         <div className="flex flex-col md:flex-row items-center gap-8 md:gap-15 mb-16 md:mb-20">
//           <div className="hidden md:flex gap-4">
//             <button
//               onClick={scrollLeft}
//               className="w-16 h-16 flex items-center justify-center border border-[#161616]/20 rounded-full"
//             >
//               <img src={leftArrow} alt="Prev" className="w-6 h-6" />
//             </button>
//             <button
//               onClick={scrollRight}
//               className="w-16 h-16 flex items-center justify-center border border-[#161616]/20 rounded-full"
//             >
//               <img src={rightArrow} alt="Next" className="w-6 h-6" />
//             </button>
//           </div>

//           <div className="flex-1 text-center md:text-left">
//             <h1 className="font-heading font-bold uppercase tracking-widest mb-4">
//               What Our Clients Say
//             </h1>
//             <p className="text-[#303030] leading-relaxed max-w-3xl mx-auto md:mx-0">
//               Discover how Code Visionary Services makes a difference for our
//               clients. We design and ship performant web and mobile products—and
//               we also build AI infrastructure that supports business operations.
//             </p>
//           </div>
//         </div>

//         {/* Testimonial Cards */}
//         <div
//           ref={rowRef}
//           className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory p-4"
//         >
//           {testimonials.map((item, idx) => {
//             const isHovered = hoveredId === item.id;
//             const isPlaying = playingId === item.id;
//             const isDefaultDark = idx === 1;

//             return (
//               <div
//                 key={item.id}
//                 onMouseEnter={() => setHoveredId(item.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//                 className={`relative flex-shrink-0 snap-start w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer`}
//                 style={{
//                   background:
//                     isHovered || isDefaultDark ? "#131A22" : "#F0F0F0",
//                   boxShadow: isHovered
//                     ? "0px 0px 8px 2px #B5442C80"
//                     : "0px 0px 8px 2px #0861AA80",
//                   borderImageSource: isHovered
//                     ? "linear-gradient(91.08deg, #B5442C 0.34%, #FF9C87 99.62%)"
//                     : undefined,
//                   borderImageSlice: isHovered ? 1 : undefined,
//                 }}
//               >
//                 {/* Video */}
//                 {item.video && (
//                   <video
//                     ref={(el) => {
//                       videoRefs.current[item.id] = el; // just assign, don't return anything
//                     }}
//                     src={item.video}
//                     className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
//                       isHovered || isPlaying
//                         ? "opacity-100"
//                         : "opacity-0 pointer-events-none"
//                     }`}
//                     muted
//                     loop
//                     playsInline
//                   />
//                 )}

//                 {item.video && !isPlaying && isHovered && (
//                   <button
//                     className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl z-20"
//                     onClick={async (e) => {
//                       e.stopPropagation(); // prevent triggering hover leave
//                       // Pause currently playing video
//                       if (
//                         playingId &&
//                         videoRefs.current[playingId] &&
//                         playingId !== item.id
//                       ) {
//                         videoRefs.current[playingId]?.pause();
//                       }

//                       if (playingId === item.id) {
//                         videoRefs.current[item.id]?.pause();
//                         setPlayingId(null);
//                       } else {
//                         try {
//                           await videoRefs.current[item.id]?.play();
//                           setPlayingId(item.id);
//                         } catch (err) {
//                           console.error("Video play error", err);
//                         }
//                       }
//                     }}
//                   >
//                     <div className="w-16 h-16 rounded-full bg-white/30 hover:bg-white/50 flex items-center justify-center">
//                       <div className="w-0 h-0 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent border-l-[20px] border-l-white ml-1" />
//                     </div>
//                   </button>
//                 )}
//                 {/* Text & Logo */}
//                 <div
//                   className={`absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-300 ${
//                     isHovered ? "opacity-0" : "opacity-100"
//                   }`}
//                 >
//                   <p className="text-[#303030] text-base md:text-lg leading-relaxed">
//                     {item.text}
//                   </p>
//                   <div className="flex flex-col items-start mt-4">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-16 h-16 object-contain mb-2"
//                     />
//                     <h3 className="text-2xl font-bold text-[#161616]">
//                       {item.name}
//                     </h3>
//                     <p className="text-[#303030]">{item.title}</p>
//                   </div>
//                 </div>
//                 {/* Hover info */}
//                 {isHovered && (
//                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-center text-white z-10">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-16 h-16 object-contain"
//                     />
//                     <h3 className="text-2xl font-bold">{item.name}</h3>
//                     <p className="opacity-80">{item.title}</p>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* Mobile arrows */}
//         <div className="flex md:hidden justify-center gap-8 mt-10">
//           <button
//             onClick={scrollLeft}
//             className="w-14 h-14 flex items-center justify-center border border-[#161616]/20 rounded-full"
//           >
//             <img src={leftArrow} alt="Prev" className="w-5 h-5" />
//           </button>
//           <button
//             onClick={scrollRight}
//             className="w-14 h-14 flex items-center justify-center border border-[#161616]/20 rounded-full"
//           >
//             <img src={rightArrow} alt="Next" className="w-5 h-5" />
//           </button>
//         </div>
//       </ContentContainer>
//     </SectionContainer>
//   );
// };

// export default TestimonialSection;

import React, { useRef, useState, useEffect } from "react";
import SectionContainer from "./shared/SectionContainer";
import ContentContainer from "./shared/ContentContainer";
import testimonialBg from "../assets/Testimonial_section_bg_image.png";
import leftArrow from "../assets/Testimonial_section_left_arrow_vector_image.png";
import rightArrow from "../assets/Testimonial_section_right_arrow_vector_image.png";
import { testimonials } from "../constants/testimonials-data";

const TestimonialSection: React.FC = () => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(2); // second card hovered by default
  const [playingId, setPlayingId] = useState<number | null>(null);
  const videoRefs = useRef<Record<number, HTMLVideoElement | null>>({});

  const scrollByAmount = 360;
  const scrollLeft = () =>
    rowRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  const scrollRight = () =>
    rowRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });

  useEffect(() => {
    return () => {
      Object.values(videoRefs.current).forEach((v) => v?.pause());
    };
  }, []);

  return (
    <SectionContainer
      id="testimonials"
      fullWidth
      padding="none"
      className="relative min-h-screen overflow-hidden bg-[#F0F0F0]"
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
        className="relative z-10 w-full py-16 md:py-20"
      >
        <div className="w-full max-w-2xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-15 mb-16 md:mb-20">
            <div className="hidden md:flex gap-4">
              <button
                onClick={scrollLeft}
                className="w-16 h-16 flex items-center justify-center border border-[#161616]/20 rounded-full"
              >
                <img src={leftArrow} alt="Prev" className="w-6 h-6" />
              </button>
              <button
                onClick={scrollRight}
                className="w-16 h-16 flex items-center justify-center border border-[#161616]/20 rounded-full"
              >
                <img src={rightArrow} alt="Next" className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h1 className="font-heading font-bold uppercase tracking-widest mb-4">
                What Our Clients Say
              </h1>
              <p className="text-[#303030] leading-relaxed max-w-3xl mx-auto md:mx-0">
                Discover how Code Visionary Services makes a difference for our
                clients. We design and ship performant web and mobile
                products—and we also build AI infrastructure that supports
                business operations.
              </p>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div
            ref={rowRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory p-4"
          >
            {testimonials.map((item, idx) => {
              const isHovered = hoveredId === item.id;
              const isPlaying = playingId === item.id;
              const isDefaultDark = idx === 1;

              // Determine card background
              const isActive = isHovered || isPlaying || isDefaultDark;
              const bgColor = isActive ? "#131A22" : "#F0F0F0";

              // Determine text color based on background
              const textColor = bgColor === "#131A22" ? "#FFFFFF" : "#000000";

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`relative flex-shrink-0 snap-start w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] h-[380px] md:h-[460px] rounded-2xl overflow-hidden transition-all duration-300`}
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
                    className={`absolute inset-0 flex flex-col justify-between p-6 pt-20 transition-opacity duration-300 ${
                      isHovered || isPlaying ? "opacity-0" : "opacity-100"
                    }`}
                    style={{ color: textColor }}
                  >
                    <p className="text-body2 leading-[1.5]">{item.text}</p>
                    <div className="flex flex-col items-start mt-4 gap-2">
                      <h3 className="text-body1 font-bold">{item.name}</h3>
                      <p className="text-body2">{item.title}</p>
                    </div>
                  </div>

                  {/* Hover info */}
                  {isHovered && (
                    <div className="absolute bottom-6 left-6 flex flex-col items-start gap-2 text-white z-10">
                      <h3 className="text-body1 font-bold">{item.name}</h3>
                      <p className="text-body2">{item.title}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile arrows */}
          <div className="flex md:hidden justify-center gap-8 mt-10">
            <button
              onClick={scrollLeft}
              className="w-14 h-14 flex items-center justify-center border border-[#161616]/20 rounded-full"
            >
              <img src={leftArrow} alt="Prev" className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-14 h-14 flex items-center justify-center border border-[#161616]/20 rounded-full"
            >
              <img src={rightArrow} alt="Next" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default TestimonialSection;

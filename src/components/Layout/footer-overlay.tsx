// import { motion, useScroll, useTransform } from "framer-motion";

// export const FooterRevealOverlay = ({
//   footerRef,
//   isActive,
// }: {
//   footerRef: React.RefObject<HTMLElement | null>;
//   isActive: boolean;
// }) => {
//   const { scrollYProgress } = useScroll({
//     target: footerRef,
//     offset: ["start end", "end end"],
//   });

//   // Overlay slides up as scroll
//   const overlayY = useTransform(scrollYProgress, [0.7, 1], ["0%", "-100%"]);

//   const glowOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0, 0]);

//   if (!isActive) return null;

//   return (
//     <motion.div
//       style={{
//         y: overlayY,
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "#f0f0f0",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         zIndex: 20,
//         pointerEvents: "none",
//         gap: "10rem",
//       }}
//       className="footer-overlay min-h-[100vh] overflow-hidden"
//     >
//       {/* <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" /> */}

//       <motion.div
//         style={{
//           opacity: glowOpacity,
//         }}
//         className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[100px] bg-[#B5442C] z-0 pointer-events-none"
//       />

//       <motion.div className="font-heading text-center z-10">
//         <p className="font-heading font-bold text-title-lg text-[#161616]">
//           Got an Idea?
//         </p>
//         <p className="font-heading font-bold text-title-lg bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent uppercase">
//           Contact Us
//         </p>
//       </motion.div>
//     </motion.div>
//   );
// };

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FooterRevealOverlay: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sliderRef.current || !wrapperRef.current) return;

      const slides = gsap.utils.toArray<HTMLElement>(".slide");
      const delay = 1;

      const tl = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
          transformOrigin: "center center -100px",
        },
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${(slides.length - 1) * 80}%`,
          pin: true,
          scrub: 1,
        },
      });

      gsap.set(slides, {
        rotationX: (i: number) => (i ? -90 : 0),
        transformOrigin: "center center -100px",
      });

      slides.forEach((slide: HTMLElement, i: number) => {
        const nextSlide = slides[i + 1];
        if (!nextSlide) return;

        tl.to(
          slide,
          {
            rotationX: 90,
            onComplete: () => {
              gsap.set(slide, { rotationX: -90 });
            },
          },
          `+=${delay}`
        ).to(
          nextSlide,
          {
            rotationX: 0,
          },
          "<"
        );
      });

      tl.to({}, { duration: delay });
    },
    { scope: sliderRef }
  );

  return (
    <div
      ref={wrapperRef}
      className="w-full min-h-screen flex justify-center items-center"
    >
      <div
        ref={sliderRef}
        className="min-w-md h-[105px] relative perspective-[300px] overflow-hidden"
      >
        <div className="slide absolute w-full h-full top-0 left-0 flex justify-center items-center bg-transparent [backface-visibility:hidden]">
          <p className="font-heading font-bold text-title-2xl text-[#161616] uppercase">
            Got an Idea?
          </p>
        </div>
        <div className="slide absolute w-full h-full top-0 left-0 text-2xl flex justify-center items-center bg-transparent [backface-visibility:hidden]">
          <p className="font-heading font-bold text-title-2xl bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent uppercase">
            Contact Us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterRevealOverlay;

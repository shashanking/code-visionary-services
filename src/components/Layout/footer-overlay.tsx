import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";

gsap.registerPlugin(ScrollTrigger);

const FooterRevealOverlay: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sliderRef.current || !wrapperRef.current || !gradientRef.current)
        return;

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

      // Gradient animation timeline
      const gradientTl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${(slides.length - 1) * 80}%`,
          scrub: 1,
        },
      });

      // Initial state - small gradient
      gsap.set(gradientRef.current, {
        width: "500px",
        height: "250px",
        opacity: 0.8,
      });

      // Animate gradient to grow during the transition
      gradientTl.to(gradientRef.current, {
        width: "50vw",
        height: "50vh",
        opacity: 0.8,
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
    <SectionContainer
      id="footer-overlay-section"
      fullWidth
      padding="lg"
      background="#F0F0F0"
      ref={wrapperRef}
      className="w-full min-h-screen flex justify-center items-center relative"
    >
      <div
        ref={gradientRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-[200px] md:blur-[500px] bg-gradient-to-r from-[#B5442C] to-[#FF9C87] z-0 pointer-events-none transition-all duration-100"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0]/0 z-0 pointer-events-none" />

      <ContentContainer
        ref={sliderRef}
        maxWidth="2xl"
        paddingX="lg"
        className="min-w-md h-[105px] relative perspective-[300px] overflow-hidden z-10"
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
      </ContentContainer>
    </SectionContainer>
  );
};

export default FooterRevealOverlay;

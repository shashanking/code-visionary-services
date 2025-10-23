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
      const delay = 0.5;

      const tl = gsap.timeline({
        defaults: {
          ease: "power1.inOut",
          transformOrigin: "center center -150px",
        },
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: `+=${(slides.length - 1) * 50}%`,
          pin: true,
          scrub: true,
        },
      });

      gsap.set(slides, {
        rotationX: (i: number) => (i ? -90 : 0),
        transformOrigin: "center center -150px",
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
        className="w-[300px] h-[300px] relative perspective-[500px]"
      >
        <div className="slide absolute w-full h-full top-0 left-0 text-2xl flex justify-center items-center bg-gradient-to-br from-green-400 to-green-600 [backface-visibility:hidden]">
          Slide 1
        </div>
        <div className="slide absolute w-full h-full top-0 left-0 text-2xl flex justify-center items-center bg-gradient-to-br from-purple-400 to-purple-600 [backface-visibility:hidden]">
          Slide 2
        </div>
        <div className="slide absolute w-full h-full top-0 left-0 text-2xl flex justify-center items-center bg-gradient-to-br from-blue-400 to-blue-600 [backface-visibility:hidden]">
          Slide 3
        </div>
      </div>
    </div>
  );
};

export default FooterRevealOverlay;

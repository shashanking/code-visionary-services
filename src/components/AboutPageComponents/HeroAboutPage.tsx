import React, { useRef } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import HeroBg from "../../assets/about-page/hero-bg.png";
import ArrowDown from "../../assets/about-page/arrow-down.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const HeroAboutPage: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      const sectionEl = sectionRef.current;
      const textEl = textRef.current;
      if (!sectionEl || !textEl) return;

      // Split text into spans - each letter for color transition
      const originalText = textEl.textContent || "";
      const words = originalText.split(" ");

      textEl.innerHTML = words
        .map((word) => {
          const letters = word
            .split("")
            .map(
              (char) =>
                `<span class="letter will-change-[color]" style="color:#9CA3AF; display:inline">${char}</span>`
            )
            .join("");

          // wrap the word as inline so wrapping happens naturally
          return `<span class="word inline">${letters} </span>`;
        })
        .join("");

      const letters = textEl.querySelectorAll<HTMLSpanElement>(".letter");

      // GSAP timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: "top top",
          end: "+=250%",
          scrub: true,
          pin: true,
          pinSpacing: true,
        },
      });

      // Test color transition
      tl.to(
        letters,
        {
          color: "#000000",
          ease: "none",
          duration: 0,
          stagger: { each: 0.05, ease: "none", from: "start" },
        },
        0.5 // start 0.5 into the timeline, avoids early color flash
      );

      // Extend the timeline with a dummy tween to consume extra scroll space
      // empty tween, just stretches the timeline
      tl.to({}, { duration: 0.5 });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <SectionContainer
      id="home"
      fullWidth
      padding="none"
      background="#e3e3e3"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full about-hero-bg"
          style={{ backgroundImage: `url(${HeroBg})` }}
        />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-20 flex flex-col justify-center items-center text-center min-h-screen bg-black/40 backdrop-blur-2xl"
      >
        <div className="absolute inset-0 h-100 bg-gradient-to-b from-[#111111] via-transparent to-transparent z-0 pointer-events-none" />

        <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center">
          <h1 className="font-heading font-bold text-title-2xl text-center uppercase mb-6 leading-tight max-w-2xl text-[#ffffff] leading-[1.1]">
            Creativity and innovation fuel{" "}
            <span className="bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent pr-1">
              our journey
            </span>
            .
          </h1>

          <p className="font-sans font-normal text-body1 text-[#ffffff] max-w-xl mx-auto mb-10 leading-[1.5]">
            At Code Visionary Services, we believe in the power of innovation
            and creativity. Our team excels in web design, app development,
            branding, and digital marketing, delivering solutions that drive
            success. Learn more about our philosophy, our journey, and the
            people who make it all possible.
          </p>

          <div className="flex flex-col justify-center items-center mt-20">
            <p className="font-heading uppercase text-body2 text-gray-400">
              Scroll Down
            </p>
            <img
              src={ArrowDown}
              alt="arrow-down"
              className="relative w-[30px] h-[30px] text-gray-400"
            />
          </div>
        </div>
      </ContentContainer>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen bg-transparent"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-center items-center"></div>
      </ContentContainer>

      {/* Scroll-trigger our vision section */}
      <ContentContainer
        ref={sectionRef}
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-left bg-[#f0f0f0] overflow-hidden"
        style={{ minHeight: `calc(100vh + 64px)` }}
      >
        <div className="absolute top-1/2 -left-10 -translate-y-1/2 w-[400px] h-full rounded-full opacity-40 blur-[150px] bg-[#B5442C] z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />

        <div className="relative w-full max-w-2xl flex flex-col justify-center items-start">
          <h1 className="font-heading font-bold text-title-lg text-center uppercase mb-6 leading-tight max-w-2xl bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent leading-[1.1]">
            OUR VISION
          </h1>

          <p
            ref={textRef}
            className="font-sans font-semibold text-title-lg text-left leading-[1.5]"
          >
            Our vision is to empower businesses with innovative, reliable, and
            design-forward digital solutions. We aim to be a trusted partner in
            driving growth through technology and creativity.
          </p>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroAboutPage;

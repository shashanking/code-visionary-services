import React, { useRef } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FooterRevealOverlay: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const slider = sliderRef.current;
    const gradient = gradientRef.current;

    if (!section || !slider || !gradient) return;

    const slides = gsap.utils.toArray<HTMLElement>(".slide");

    // Set initial states
    gsap.set(slides, {
      rotationX: (i) => (i ? -90 : 0),
      transformOrigin: "center center",
      backfaceVisibility: "hidden",
    });

    gsap.set(gradient, {
      width: "400px",
      height: "200px",
      opacity: 0.6,
    });

    // Gradient grow timeline
    gsap.to(gradient, {
      width: "50vw",
      height: "50vh",
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Slide transition timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=150%", // controls total scroll distance
        scrub: true,
        pin: true,
      },
      defaults: { ease: "power2.inOut" },
    });

    // Transition Got an Idea -> Contact Us
    tl.to(slides[0], {
      rotationX: 90,
      duration: 1,
    }).to(
      slides[1],
      {
        rotationX: 0,
        duration: 1,
      },
      "<"
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <SectionContainer
      ref={sectionRef}
      id="footer-overlay-section"
      fullWidth
      padding="lg"
      background="#e3e3e3"
      className="relative w-full h-screen flex justify-center items-center overflow-hidden"
    >
      {/* Gradient background */}
      <div
        ref={gradientRef}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-[200px] md:blur-[400px] bg-gradient-to-r from-[#B5442C] to-[#FF9C87] z-0 pointer-events-none"
      />

      {/* Soft gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0]/0 z-0 pointer-events-none" />

      {/* Text slider */}
      <ContentContainer
        ref={sliderRef}
        maxWidth="2xl"
        paddingX="lg"
        className="relative min-w-md h-[100px] overflow-hidden z-10"
      >
        <div className=" absolute w-full h-full top-0 left-0 flex justify-center items-center bg-transparent">
          <p className="font-heading font-bold text-title-2xl text-[#161616] uppercase">
            Got an Idea?
          </p>
        </div>
        <div className=" absolute w-full h-full top-0 left-0 flex justify-center items-center bg-transparent">
          <p className="font-heading font-bold text-title-2xl bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent uppercase">
            Contact Us!
          </p>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default FooterRevealOverlay;

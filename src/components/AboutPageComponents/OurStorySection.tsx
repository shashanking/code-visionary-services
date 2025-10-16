import React, { useRef } from "react";
import { CTAButton } from "../shared";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import StoryBg from "../../assets/about-page/our-story-bg.jpg";
import StoryImg1 from "../../assets/about-page/our-story-img-1.png";
import StoryImg2 from "../../assets/about-page/our-story-img-2.png";
import StoryImg3 from "../../assets/about-page/our-story-img-3.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const OurStorySection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const img1Ref = useRef<HTMLImageElement | null>(null);
  const img2Ref = useRef<HTMLImageElement | null>(null);
  const img3Ref = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (
        !sectionRef.current ||
        !img1Ref.current ||
        !img2Ref.current ||
        !img3Ref.current ||
        !textRef.current
      )
        return;

      [img1Ref.current, img2Ref.current, img3Ref.current].forEach((el) => {
        gsap.set(el, { position: "absolute", top: "50%", left: "50%" });
        gsap.set(el, {
          xPercent: -50,
          yPercent: -50,
          transformOrigin: "50% 50%",
        });
      });

      // Initial states
      gsap.set(img1Ref.current, { scale: 1, opacity: 1, zIndex: 3 });
      gsap.set(img2Ref.current, { scale: 0.9, opacity: 1, zIndex: 2 });
      gsap.set(img3Ref.current, { scale: 0.8, opacity: 1, zIndex: 1 });
      gsap.set(textRef.current, { y: 40, opacity: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=250%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
        defaults: { ease: "power2.out" },
      });

      // Subtle lift at start
      tl.to(img1Ref.current, { y: 20, duration: 0.6 }, 0);
      tl.to(img2Ref.current, { y: -20, duration: 0.6 }, 0);
      tl.to(img3Ref.current, { y: -60, duration: 0.6 }, 0);

      // Text fade-in
      tl.to(textRef.current, { y: 0, opacity: 1, duration: 0.5 }, 0);

      // Back 3rd image push back down as scroll continues to align it center
      tl.to(img3Ref.current, { y: 0, duration: 0.8 }, 1.4);

      // Main stacking animation
      tl.to(img1Ref.current, { y: 300, duration: 1 }, 0.8);
      tl.to(img1Ref.current, { opacity: 0, duration: 0.7 }, 1);

      tl.to(img2Ref.current, { scale: 1, duration: 1 }, 0.8);
      tl.to(img3Ref.current, { scale: 0.9, duration: 0.6 }, 1);

      tl.to(img2Ref.current, { y: 300, duration: 1 }, 1.4);
      tl.to(img2Ref.current, { opacity: 0, duration: 0.7 }, 1.8);

      tl.to(
        img3Ref.current,
        { scale: 1, opacity: 1, zIndex: 3, duration: 1 },
        1.6
      );

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <SectionContainer
      ref={sectionRef}
      id="our-story"
      fullWidth
      padding="lg"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${StoryBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />

        {/* Left-side gradient block */}
        <div
          className="absolute top-0 left-0 h-full z-10 pointer-events-none"
          style={{
            width: "50%",
            background: "linear-gradient(180deg, #0861AA 0%, #032744 100%)",
            clipPath: "polygon(0 0, 30% 0, 60% 100%, 0% 100%)",
          }}
        />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col  items-center"
      >
        <div className="relative z-10 w-full max-w-2xl flex flex-col sm:flex-row items-center">
          <div className="relative flex-1 flex items-center justify-center min-h-[620px]">
            <img
              ref={img3Ref}
              src={StoryImg3}
              alt="story-img-3"
              className="w-[450px] h-auto block rounded-xl"
            />
            <img
              ref={img2Ref}
              src={StoryImg2}
              alt="story-img-2"
              className="w-[450px] h-auto block rounded-xl"
            />
            <img
              ref={img1Ref}
              src={StoryImg1}
              alt="story-img-1"
              className="w-[450px] h-auto block rounded-xl"
            />
          </div>

          <div ref={textRef} className="flex-1 text-left sm:pl-10 pt-8 sm:pt-0">
            <h2 className="font-heading font-bold text-title-lg uppercase mb-6 leading-tight bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
              OUR STORY
            </h2>

            <p className="font-sans text-body1 text-gray-800 mb-10 leading-relaxed max-w-lg">
              Code Visionary Services began with a simple idea — to bridge the
              gap between creativity and technology. What started as a small
              team of passionate developers and designers has grown into a
              full-service IT company helping businesses build impactful digital
              experiences.
            </p>

            <CTAButton variant="secondary" size="large">
              See All Projects
            </CTAButton>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default OurStorySection;

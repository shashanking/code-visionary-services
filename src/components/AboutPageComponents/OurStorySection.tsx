import React from "react";
import { CTAButton } from "../shared";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import StoryBg from "../../assets/about-page/our-story-bg.jpg";

const OurStorySection: React.FC = () => {
  return (
    <SectionContainer
      id="home"
      fullWidth
      padding="lg"
      className="min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center bg-fixed"
          style={{ backgroundImage: `url(${StoryBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col justify-center items-center text-center"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-center items-center">
          <h2 className="font-heading font-bold text-title-md text-center uppercase mb-6 leading-tight max-w-md bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
            OUR STORY
          </h2>

          <p className="font-sans font-normal text-body1 text-gray-800 max-w-lg mx-auto mb-10 leading-[1.5]">
            Code Visionary Services began with a simple idea, to bridge the gap
            between creativity and technology. What started as a small team of
            passionate developers and designers has grown into a full-service IT
            company helping businesses build impactful digital experiences. Our
            journey is driven by a commitment to quality, innovation, and client
            success.
          </p>

          <div className="flex justify-center">
            <CTAButton
              variant="secondary"
              size="large"
              onClick={() => console.log("Clicked!")}
            >
              See All Projects
            </CTAButton>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default OurStorySection;

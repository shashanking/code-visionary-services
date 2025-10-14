import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import HeroBg from "../../assets/about-page/hero-bg.jpg";
import ArrowDown from "../../assets/about-page/arrow-down.png";

const HeroAboutPage: React.FC = () => {
  return (
    <SectionContainer
      id="home"
      fullWidth
      padding="none"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center bg-fixed"
          style={{ backgroundImage: `url(${HeroBg})` }}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" /> */}
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen bg-black/30 backdrop-blur-2xl"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-center items-center">
          <h1 className="font-heading font-bold text-title-2xl text-center uppercase mb-6 leading-tight max-w-2xl text-[#ffffff] leading-[1.1]">
            Creativity and innovation fuel{" "}
            <span className="bg-gradient-to-l from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent">
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

          <div className="flex flex-col justify-center items-center">
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
    </SectionContainer>
  );
};

export default HeroAboutPage;

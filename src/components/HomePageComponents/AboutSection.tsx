import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import bgImg from "../../assets/about-page/home-about-bg.png";
import laptopImg from "../../assets/about-page/home-about-laptop.png";
import { useNavigate } from "react-router-dom";

const AboutSection: React.FC = () => {
  const navigate = useNavigate();
  const handleCtaClick = () => {
    navigate(`/contact`);
  };

  return (
    <SectionContainer
      id="about"
      fullWidth
      padding="none"
      className="flex flex-col md:flex-row items-center justify-between overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="hidden md:block w-full h-full bg-cover bg-no-repeat bg-right"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        <div
          className="md:hidden w-full h-full bg-cover bg-no-repeat bg-bottom mobile-bg-rotate"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="flex flex-col md:flex-row items-center justify-between py-16 md:py-0 h-140 sm:h-160 md:h-122 lg:h-146 xl:h-195"
      >
        <div className="w-full max-w-2xl mx-auto">
          <div className="font-heading md:w-1/2 mb-12 md:mb-0 md:pr-8 lg:pr-16">
            <h1 className="text-title-md font-bold text-gray-800 uppercase leading-tight mb-6 text-center md:text-left mx-auto max-w-xs md:max-w-sm">
              YOUR PARTNER IN{" "}
              <span className="inline-block bg-gradient-to-r from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
                DIGITAL INNOVATION
              </span>
            </h1>

            <p className="font-sans font-normal text-body1 text-gray-800 leading-[1.5] mb-10 max-w-xl mx-auto md:mx-0 text-center md:text-left">
              At Code Visionary Services, we design and build reliable digital
              products that move businesses forward. Our team blends strategy,
              clean design, and modern engineering to deliver fast, accessible
              websites and applications.
            </p>

            <div className="text-center md:text-left">
              <button
                onClick={handleCtaClick}
                className="bg-gray-800 hover:bg-[#8c3320] text-white px-8 py-3 w-full md:w-fit rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="absolute right-[20%] sm:right-[33%] md:right-0 -bottom-10 md:bottom-0">
            <img
              src={laptopImg}
              alt="Laptop"
              className="w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg"
            />
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default AboutSection;

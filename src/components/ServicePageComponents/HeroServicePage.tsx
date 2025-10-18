import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import ServicePageBg from "../../assets/services-page/service-page-bg.png";
import ServiceHeroBg from "../../assets/services-page/service-hero-bg.png";

const HeroServicePage: React.FC = () => {
  return (
    <SectionContainer
      id="service-hero"
      fullWidth
      padding="none"
      background="#e3e3e3"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center bg-fixed"
          style={{ backgroundImage: `url(${ServicePageBg})` }}
        />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 pt-30 pb-10 flex flex-col justify-center items-center text-center min-h-[55vh]"
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-center"
            style={{ backgroundImage: `url(${ServiceHeroBg})` }}
          />
        </div>

        <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center">
          <h1 className="font-heading font-bold text-title-2xl text-center uppercase mb-6 leading-tight max-w-2xl text-[#161616] leading-[1.1]">
            Comprehensive{" "}
            <span className="bg-gradient-to-r from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
              IT Solutions
            </span>{" "}
            for Your Business
          </h1>

          <p className="font-sans font-normal text-body1 text-[#161616] max-w-xl mx-auto leading-[1.5]">
            From custom websites and software to creative graphic design, we
            deliver tailored services that combine innovation, functionality,
            and style. Helping your brand thrive in the digital world.
          </p>
        </div>
      </ContentContainer>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col justify-center items-center text-center h-[50vh] bg-transparent"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-center items-center"></div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroServicePage;

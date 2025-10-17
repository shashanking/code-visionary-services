import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import ServiceCardBg from "../../assets/services-page/service-card-bg.png";

const ServiceCardSection: React.FC = () => {
  return (
    <SectionContainer
      id="service-card"
      fullWidth
      padding="none"
      background="#e3e3e3"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${ServiceCardBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-left overflow-hidden"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-start items-center">
          <h1 className="font-heading font-bold text-title-lg text-center uppercase mb-6 leading-tight max-w-md text-[#161616] leading-[1.1]">
            Your One-Stop Solution for Digital Excellence
          </h1>

          {/* services card will be here*/}
          <div></div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ServiceCardSection;

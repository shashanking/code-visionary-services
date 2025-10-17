import React, { useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import ServiceCardBg from "../../assets/services-page/service-card-bg.png";
import { ServicesData } from "../../constants/service-page-data";
import { CTAButton } from "../shared";

const ServiceCardSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

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
        <div className="relative w-full max-w-2xl pt-20 pb-10 flex flex-col justify-start items-center">
          <h1 className="font-heading font-bold text-title-lg text-center uppercase mb-10 leading-tight max-w-md text-[#161616] leading-[1.1]">
            Your One-Stop Solution for Digital Excellence
          </h1>
        </div>

        {/* --- SERVICES LIST --- */}
        <div className="w-screen flex flex-col divide-y divide-[#B5442C]/30 border border-t-[#B5442C]">
          {ServicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            const isActive = activeIndex === index;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                className={`group relative w-full transition-all duration-500 ease-in-out border-b border-[#B5442C] px-4 md:px-8 lg:px-10 ${
                  isActive
                    ? "bg-gradient-to-l from-[#B5442C] to-[#4F1E13] text-white"
                    : "bg-transparent text-[#161616]"
                }`}
              >
                <div className="mx-auto max-w-2xl min-h-[350px] flex flex-col md:flex-row items-center justify-between gap-10 py-10 transition-all duration-500">
                  <div
                    className={`w-full md:w-[30%] flex items-center ${
                      isEven
                        ? "md:order-1 justify-center md:justify-start"
                        : "md:order-2 justify-center md:justify-end"
                    }`}
                  >
                    <div className="relative overflow-hidden rounded-2xl w-[280px] md:w-[350px] aspect-[9/7]">
                      <img
                        src={service.image || ""}
                        alt={service.label}
                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
                          isActive
                            ? "scale-110 grayscale-0"
                            : "scale-100 grayscale"
                        }`}
                      />
                    </div>
                  </div>

                  {/* TEXT CONTENT */}
                  <div
                    className={`w-full md:w-[70%] flex flex-col transition-all duration-500 ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <div className="flex flex-col justify-center h-full min-h-[200px]">
                      <div className="text-center md:text-left mb-6">
                        <h2
                          className={`font-sans font-semibold transition-all duration-500 ${
                            isActive
                              ? "text-white text-title-sm mb-3"
                              : "text-[#161616] text-title-md mb-4"
                          }`}
                        >
                          {service.label}
                        </h2>
                        <p
                          className={`font-sans transition-all duration-500 ${
                            isActive
                              ? "text-white text-body2"
                              : "text-[#161616] text-body1"
                          }`}
                        >
                          {service.description}
                        </p>
                      </div>

                      <div
                        className={`transition-all duration-500 overflow-hidden ${
                          isActive
                            ? "max-h-32 opacity-100 mb-6"
                            : "max-h-0 opacity-0 mb-0"
                        }`}
                      >
                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                          {service.tools?.map((tool, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 border border-white/40 rounded-full text-sm"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Button Section */}
                      <div className="flex justify-center md:justify-start">
                        <CTAButton
                          size="small"
                          showIcon={false}
                          className={`w-fit shadow-[0px_0px_8px_0px_#B5442C] hover:shadow-[0px_0px_12px_0px_#B5442C] hover:bg-gradient-to-r hover:from-[#B5442C80] hover:to-[#B5442C] transition-all duration-500 ${
                            isActive
                              ? "bg-black text-white"
                              : "bg-black text-white"
                          }`}
                          onClick={() => console.log("Button clicked")}
                        >
                          Get Started
                        </CTAButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ServiceCardSection;

import React, { useEffect, useState, useRef } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import StatsBg from "../../assets/about-page/stats-bg.jpg";
import { StatsCardData, StatsData } from "../../constants/stats-data";

const StatsSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number>(
    StatsCardData[StatsCardData.length - 1].id
  );
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleHover = (id: number) => {
    setActiveCard(id);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveCard(StatsCardData[StatsCardData.length - 1].id);
    }, 4000);
  };

  useEffect(() => {
    // Set initial fallback timer
    timeoutRef.current = setTimeout(() => {
      setActiveCard(StatsCardData[StatsCardData.length - 1].id);
    }, 4000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <SectionContainer
      id="stats"
      fullWidth
      padding="lg"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${StatsBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-transparent to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative z-10 w-full flex flex-col items-start">
          <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-start">
            <h2 className="font-heading font-bold text-title-lg uppercase mb-10 max-w-sm leading-tight text-[#161616]">
              We Value Integrity and Transparency
            </h2>
          </div>

          {/* Smaller screen - Column layout */}
          <div className="w-full lg:hidden flex flex-col gap-8">
            <div className="flex flex-col gap-6 w-full">
              {StatsCardData.map((stat) => {
                const isActive = activeCard === stat.id;

                return (
                  <div
                    key={stat.id}
                    onMouseEnter={() => handleHover(stat.id)}
                    className={`group relative flex items-center justify-between gap-6 p-6 h-full rounded-xl border border-[#B5442C] backdrop-blur-sm shadow-md transition-all duration-500 cursor-pointer
                      ${
                        isActive
                          ? "bg-gradient-to-l from-[#B5442C] to-[#4F1E13] shadow-lg"
                          : "bg-white/60"
                      }`}
                  >
                    {/* Text Area */}
                    <div className="flex flex-col items-start justify-center flex-1 overflow-hidden min-h-[120px]">
                      <h3
                        className={`font-sans text-title-sm font-semibold transition-all duration-300 ${
                          isActive
                            ? "text-white translate-y-[-4px]"
                            : "text-[#000000]"
                        }`}
                      >
                        {stat.title}
                      </h3>

                      <p
                        className={`text-sm transition-all duration-500 ease-out transform ${
                          isActive
                            ? "opacity-100 translate-y-0 text-white h-auto mt-3"
                            : "opacity-0 translate-y-5 text-[#333333] h-0 mt-0"
                        }`}
                      >
                        {stat.description}
                      </p>
                    </div>

                    {/* Icon */}
                    <div className="flex items-center justify-center shrink-0">
                      <img
                        src={stat.icon}
                        alt={stat.title}
                        className={`w-16 h-16 object-contain transition-all duration-500 ${
                          isActive ? "invert brightness-0" : "text-[#161616]"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Grid - Mobile */}
            <div className="w-full grid grid-cols-2 gap-6 items-stretch bg-[#89E2FF33] backdrop-blur-sm shadow-lg p-6 rounded-4xl">
              {StatsData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center text-[#161616] p-4"
                >
                  <p className="font-heading font-medium text-title-lg text-center">
                    {item.title}
                  </p>
                  <p className="font-sans text-body2 text-center mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Large screen - full screen layout */}
          <div className="hidden lg:block relative w-full">
            {/* Full screen width container */}
            <div className="relative w-screen -ml-[calc((100vw-100%)/2)] px-4 md:px-8 lg:px-10">
              {/* Inner content container with max-w-2xl */}
              <div className="flex justify-between max-w-2xl mx-auto">
                <div className="flex flex-col gap-6 w-1/2 pr-6">
                  {StatsCardData.map((stat) => {
                    const isActive = activeCard === stat.id;

                    return (
                      <div
                        key={stat.id}
                        onMouseEnter={() => handleHover(stat.id)}
                        className={`group relative flex items-center justify-between gap-6 p-6 h-full rounded-xl border border-[#B5442C] backdrop-blur-sm shadow-md transition-all duration-500 cursor-pointer
                          ${
                            isActive
                              ? "bg-gradient-to-l from-[#B5442C] to-[#4F1E13] shadow-lg"
                              : "bg-white/60"
                          }`}
                      >
                        {/* Text Area */}
                        <div className="flex flex-col items-start justify-center flex-1 overflow-hidden min-h-[120px]">
                          <h3
                            className={`font-sans text-title-sm font-semibold transition-all duration-300 ${
                              isActive
                                ? "text-white translate-y-[-4px]"
                                : "text-[#000000]"
                            }`}
                          >
                            {stat.title}
                          </h3>

                          <p
                            className={`text-sm transition-all duration-500 ease-out transform ${
                              isActive
                                ? "opacity-100 translate-y-0 text-white h-auto mt-3"
                                : "opacity-0 translate-y-5 text-[#333333] h-0 mt-0"
                            }`}
                          >
                            {stat.description}
                          </p>
                        </div>

                        {/* Icon */}
                        <div className="flex items-center justify-center shrink-0">
                          <img
                            src={stat.icon}
                            alt={stat.title}
                            className={`w-16 h-16 object-contain transition-all duration-500 ${
                              isActive
                                ? "invert brightness-0"
                                : "text-[#161616]"
                            }`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="absolute left-1/2 right-0 top-0 bottom-0 pl-6">
                  <div className="w-full h-full grid grid-cols-2 gap-6 items-stretch bg-[#89E2FF33] backdrop-blur-sm shadow-lg p-8 rounded-l-4xl">
                    {StatsData.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col items-center justify-center text-[#161616] p-4"
                      >
                        <p className="font-heading font-medium text-title-lg text-center">
                          {item.title}
                        </p>
                        <p className="font-sans text-body2 text-center mt-2">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default StatsSection;

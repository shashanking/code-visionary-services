import React, { useState, useEffect } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import PortfolioPageBg from "../../assets/portfolio-page/hero-bg.jpg";

const HeroPortfolioPage: React.FC = () => {
  const [currentGradientIndex, setCurrentGradientIndex] = useState(0);

  const gradientColors = [
    "from-[#F23232] to-[#FEA656]",
    "from-[#FEA656] to-[#CCF232]",
    "from-[#CCF232] to-[#63FE56]",
    "from-[#63FE56] to-[#32F2D0]",
    "from-[#32F2D0] to-[#5685FE]",
    "from-[#5685FE] to-[#C032F2]",
    "from-[#C032F2] to-[#FE56BB]",
    "from-[#FE56BB] to-[#FF4848]",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradientIndex((prevIndex) =>
        prevIndex === gradientColors.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [gradientColors.length]);

  return (
    <SectionContainer
      id="portfolio-hero"
      fullWidth
      padding="lg"
      background="#e3e3e3"
      className="relative min-h-[55vh] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${PortfolioPageBg})` }}
        />

        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" /> */}
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-center"
      >
        <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center">
          <h1
            className={`font-heading font-bold text-title-5xl text-center uppercase mb-6 bg-gradient-to-r ${gradientColors[currentGradientIndex]} bg-clip-text text-transparent leading-[1.1] transition-colors duration-2000`}
          >
            OUR PROJECTS
          </h1>
        </div>
      </ContentContainer>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col justify-center items-center text-center h-[100vh] bg-transparent"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-center items-center"></div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroPortfolioPage;

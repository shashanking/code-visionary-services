import React, { useState, useEffect, useRef } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import PortfolioPageBg from "../../assets/portfolio-page/hero-bg.jpg";
import { useNavigate } from "react-router-dom";
import { useSanityFeaturedPortfolios } from "../../hooks/Portfolios/useSanityPortfolios";

const HeroPortfolioPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [leftAnimation, setLeftAnimation] = useState("enter");
  const [rightAnimation, setRightAnimation] = useState("enter");
  const leftScrollRef = useRef<HTMLDivElement>(null);
  const rightScrollRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<number | null>(null);

  const { portfolios: featuredPortfolios, loading, error } = useSanityFeaturedPortfolios(6);

  const getNextIndex = (current: number) =>
    (current + 1) % featuredPortfolios.length;
  const rightIndex = getNextIndex(activeIndex);

  useEffect(() => {
    if (featuredPortfolios.length === 0) return;

    const scrollInterval = 4000;

    autoScrollInterval.current = window.setInterval(() => {
      setLeftAnimation("exit");
      setRightAnimation("exit");

      setTimeout(() => {
        setActiveIndex((prev) => getNextIndex(prev));
        setLeftAnimation("enter");
        setRightAnimation("enter");
      }, 500);
    }, scrollInterval);

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, [featuredPortfolios.length]);

  const handlePortfolioClick = (slug: string) => {
    navigate(`/portfolio/${slug}`);
  };

  const handleMouseEnter = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  const handleMouseLeave = () => {
    if (!autoScrollInterval.current && featuredPortfolios.length > 0) {
      autoScrollInterval.current = window.setInterval(() => {
        setLeftAnimation("exit");
        setRightAnimation("exit");

        setTimeout(() => {
          setActiveIndex((prev) => getNextIndex(prev));
          setLeftAnimation("enter");
          setRightAnimation("enter");
        }, 500);
      }, 4000);
    }
  };

  const getLeftAnimationClass = () => {
    switch (leftAnimation) {
      case "enter":
        return "translate-y-0";
      case "exit":
        return "-translate-y-full";
      default:
        return "translate-y-full";
    }
  };

  const getRightAnimationClass = () => {
    switch (rightAnimation) {
      case "enter":
        return "translate-x-0";
      case "exit":
        return "-translate-x-full";
      default:
        return "translate-x-full";
    }
  };

  return (
    <SectionContainer
      id="portfolio-hero"
      fullWidth
      padding="lg"
      background="#e3e3e3"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${PortfolioPageBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0]/0 via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-center"
      >
        <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center">
          <h1
            className={`font-heading font-bold text-title-2xl text-center uppercase mb-6 bg-gradient-to-r text-[#161616] leading-[1.1]`}
          >
            Explore{" "}
            <span className="bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h1>

          <p className="font-sans font-normal text-body1 text-[#161616] max-w-xl mx-auto leading-[1.5]">
            Discover our latest projects showcasing innovation, creativity, and
            technical excellence. From web applications to mobile solutions,
            explore how we bring ideas to life.
          </p>
        </div>
      </ContentContainer>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex justify-center items-center"
      >
        {loading ? (
          <div className="w-full max-w-2xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-3 lg:gap-6 min-h-[450px]">
            <div className="w-full md:w-3/5 relative overflow-hidden rounded-2xl bg-gray-300 animate-pulse min-h-[300px] lg:min-h-[450px]" />
            <div className="w-full md:w-2/5 relative overflow-hidden rounded-2xl bg-gray-300 animate-pulse min-h-[300px] lg:min-h-[450px]" />
          </div>
        ) : error ? (
          <div className="w-full max-w-2xl mx-auto text-center py-20">
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-red-800 mb-2">
                Failed to Load Featured Portfolios
              </h3>
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        ) : featuredPortfolios.length === 0 ? (
          <div className="w-full max-w-2xl mx-auto text-center py-20">
            <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                No Featured Portfolios Available
              </h3>
              <p className="text-yellow-600">
                Check back later for featured portfolio projects.
              </p>
            </div>
          </div>
        ) : (
          <div
            className="relative z-10 w-full max-w-2xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-3 lg:gap-6 min-h-[450px]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="w-full md:w-3/5 relative overflow-hidden rounded-2xl bg-black/80 backdrop-blur-sm border border-white/20 shadow-2xl min-h-[300px] lg:min-h-[450px]">
              <img
                src={featuredPortfolios[activeIndex]?.image}
                alt={featuredPortfolios[activeIndex]?.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-400 ease-out"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />

              <div
                ref={leftScrollRef}
                className="relative h-full flex flex-col justify-end p-6 lg:p-8 gap-6 overflow-hidden"
              >
                <div
                  key={activeIndex}
                  className={`flex flex-row justify-between overflow-hidden`}
                >
                  <div
                    onClick={() =>
                      handlePortfolioClick(featuredPortfolios[activeIndex]?.slug)
                    }
                    className={`text-left overflow-hidden cursor-pointer`}
                  >
                    <span
                      className={`text-title-sm font-heading font-bold text-white mb-4 leading-tight block transform transition-transform duration-500 ease-in-out ${getLeftAnimationClass()}`}
                    >
                      {featuredPortfolios[activeIndex].portfolioId}
                    </span>

                    <div className="text-left overflow-hidden">
                      <h2
                        className={`max-w-[600px] text-body font-semibold text-white mb-4 leading-tight transform transition-transform duration-500 ease-in-out ${getLeftAnimationClass()}`}
                      >
                        {featuredPortfolios[activeIndex].title}
                      </h2>
                    </div>
                    <p className={`text-body2 text-white font-light`}>
                      {new Date(
                        featuredPortfolios[activeIndex].date
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 w-[25px] mt-auto">
                    {featuredPortfolios
                      .map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-1000 ${
                            index === activeIndex
                              ? "border border-white bg-transparent w-6"
                              : "border border-white bg-transparent"
                          }`}
                        />
                      ))
                      .reverse()}
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-2/5 relative overflow-hidden rounded-2xl bg-black/80 backdrop-blur-sm border border-white/20 shadow-2xl min-h-[300px] lg:min-h-[450px]">
              <img
                src={featuredPortfolios[rightIndex].image}
                alt={featuredPortfolios[rightIndex].title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-400 ease-out"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />

              <div
                ref={rightScrollRef}
                className="relative h-full flex flex-col justify-end p-6 lg:p-8 gap-6 overflow-hidden"
              >
                <div
                  key={rightIndex}
                  onClick={() =>
                    handlePortfolioClick(featuredPortfolios[rightIndex].slug)
                  }
                  className={`w-full overflow-hidden cursor-pointer`}
                >
                  <div className="text-left">
                    <span
                      className={`text-title-sm font-heading font-bold text-white mb-4 leading-tight block transform transition-transform duration-500 ease-in-out ${getRightAnimationClass()}`}
                    >
                      {featuredPortfolios[rightIndex].portfolioId}
                    </span>
                    <h2
                      className={`max-w-[600px] text-body font-semibold text-white mb-4 leading-tight transform transition-transform duration-500 ease-in-out ${getRightAnimationClass()}`}
                    >
                      {featuredPortfolios[rightIndex].title}
                    </h2>
                    <p className={`text-body2 text-white font-light`}>
                      {new Date(
                        featuredPortfolios[rightIndex].date
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroPortfolioPage;

import React, { useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useSanityPortfolioBySlug } from "../../hooks/Portfolios/useSanityPortfolios";

const SolutionSection: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { portfolio, loading, error } = useSanityPortfolioBySlug(slug!);
  const [hoveredTechIndex, setHoveredTechIndex] = useState<number>(0); // First tech is hovered by default

  if (loading) {
    return (
      <SectionContainer fullWidth padding="lg" background="#e3e3e3">
        <ContentContainer
          maxWidth="7xl"
          paddingX="lg"
          className="py-20 text-center"
        >
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </ContentContainer>
      </SectionContainer>
    );
  }

  if (error || !portfolio) {
    return (
      <SectionContainer fullWidth padding="lg" background="#e3e3e3">
        <ContentContainer
          maxWidth="7xl"
          paddingX="lg"
          className="py-20 text-center"
        >
          <h1 className="text-2xl font-bold mb-4">
            {error || "Project Not Found"}
          </h1>
          <button
            onClick={() => navigate("/portfolio")}
            className="px-6 py-2 bg-[#161616] text-white rounded-full hover:bg-[#303030] transition-colors"
          >
            Back to Portfolio
          </button>
        </ContentContainer>
      </SectionContainer>
    );
  }

  const { solutions } = portfolio;

  // Split approaches into two columns
  const leftApproaches = solutions.approaches.slice(
    0,
    Math.ceil(solutions.approaches.length / 2)
  );
  const rightApproaches = solutions.approaches.slice(
    Math.ceil(solutions.approaches.length / 2)
  );

  return (
    <SectionContainer
      id="review-card"
      fullWidth
      padding="lg"
      background="#f0f0f0"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col lg:flex-row justify-between items-start"
      >
        <div className="relative w-full max-w-2xl mx-auto flex flex-col lg:flex-row justify-start items-start gap-10">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start">
            <div className="flex flex-col w-full justify-start items-start mb-10">
              <h1 className="font-heading font-bold text-title-lg text-left uppercase text-[#161616] leading-[1.1] mb-6">
                {solutions.title}
              </h1>

              <p className="font-sans font-semibold text-body text-left text-[#161616] leading-[1.1] mb-4">
                {solutions.subtitle}
              </p>

              <p className="font-sans text-body1 text-[#161616] max-w-sm leading-[1.5] text-left mb-8">
                {solutions.description}
              </p>
            </div>

            {/* Tech Stack */}
            {solutions.techStack.length > 0 && (
              <div className="w-full">
                <h3 className="font-heading font-bold text-body mb-6 text-[#161616]">
                  Technology Stack
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {solutions.techStack.map((tech, index) => {
                    const isHovered = hoveredTechIndex === index;

                    return (
                      <div
                        key={index}
                        onMouseEnter={() => setHoveredTechIndex(index)}
                        className={`
                          relative rounded-2xl p-5 overflow-hidden cursor-pointer transition-all duration-500 ease-out
                          ${isHovered ? "min-h-[140px]" : "min-h-[80px]"}
                        `}
                        style={{
                          background: isHovered
                            ? "linear-gradient(270deg, #B5442C 0%, #4F1E13 100%)"
                            : "transparent",
                          borderImageSource:
                            "linear-gradient(91.08deg, #B5442C 0.34%, #FF9C87 99.62%)",
                          boxShadow: "0px 0px 8px 0px #B5442C80",
                          border: "1px solid #B5442C",
                        }}
                      >
                        <div
                          className={`
                          relative z-10 transition-all duration-100 ease-out
                          ${
                            isHovered
                              ? "transform -translate-y-2 text-white"
                              : "text-transparent bg-clip-text bg-gradient-to-r from-[#4F1E13] via-[#B5442C] to-[#B5442C]"
                          }
                        `}
                        >
                          <h4
                            className={`
                            font-sans font-bold text-body transition-all duration-100
                            ${isHovered ? "mb-3" : ""}
                          `}
                          >
                            {tech.name}
                          </h4>
                        </div>

                        <div
                          className={`
                          relative z-10 transition-all duration-500 ease-out overflow-hidden
                          ${
                            isHovered
                              ? "max-h-20 opacity-100 transform translate-y-0"
                              : "max-h-0 opacity-0 transform translate-y-4"
                          }
                        `}
                        >
                          <p
                            className={`
                            font-sans text-body3 leading-relaxed transition-all duration-300
                            ${isHovered ? "text-white/90" : "text-transparent"}
                          `}
                          >
                            {tech.description}
                          </p>
                        </div>

                        {isHovered && (
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#B5442C]/20 to-[#FF9C87]/20 pointer-events-none" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative flex flex-col sm:flex-row gap-4 min-h-[600px] sm:min-h-[700px]">
              <div className="flex-1">
                <div className="space-y-6">
                  {leftApproaches.map((approach, index) => (
                    <div
                      key={index}
                      className={`
                        rounded-3xl p-4 backdrop-blur-sm border border-transparent relative overflow-hidden
                        shadow-[0px_8px_13px_0px_#00000040,-1px_-3px_4px_0px_#FFFFFF66_inset,4px_5px_6px_0px_#FFFFFF66_inset]
                        before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-transparent
                        before:bg-gradient-to-br before:from-[rgba(255,255,255,0.05)] before:via-[#FFFFFF]/0 before:to-[rgba(255,255,255,0.05)]
                        before:bg-gradient-225deg before:-z-10
                      `}
                      style={{
                        background: `
                          linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02)),
                          linear-gradient(156.04deg, rgba(111, 184, 244, 0.2) 0%, rgba(255, 255, 255, 0) 100%)
                        `,
                        borderImageSource:
                          "linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.05) 100%)",
                        border: "1px solid #ffffff",
                      }}
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6FB8F4]/10 to-transparent opacity-30 pointer-events-none" />

                      <div className="text-left mb-4 relative z-10">
                        <h3 className="font-sans font-semibold text-body w-[200px] mb-2 text-[#161616] leading-tight">
                          {approach.title}
                        </h3>
                        {approach.subtitle && (
                          <p className="font-sans text-body3 text-[#161616]">
                            {approach.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="space-y-4 relative z-10">
                        {approach.levels.map((level, levelIndex) => (
                          <div key={levelIndex} className="">
                            <p className="font-sans text-body4 mb-2 text-gray-900">
                              <span className="font-semibold">
                                {level.title}:
                              </span>{" "}
                              {level.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-1 flex flex-col">
                <div className="flex-1"></div>
                <div className="space-y-6">
                  {rightApproaches.map((approach, index) => (
                    <div
                      key={index}
                      className={`
                        rounded-3xl p-4 backdrop-blur-sm border border-transparent relative overflow-hidden
                        shadow-[0px_8px_13px_0px_#00000040,-1px_-3px_4px_0px_#FFFFFF66_inset,4px_5px_6px_0px_#FFFFFF66_inset]
                        before:content-[''] before:absolute before:inset-0 before:rounded-3xl before:border before:border-transparent
                        before:bg-gradient-to-br before:from-[rgba(255,255,255,0.05)] before:via-[#FFFFFF]/0 before:to-[rgba(255,255,255,0.05)]
                        before:bg-gradient-225deg before:-z-10
                      `}
                      style={{
                        background: `
                          linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02)),
                          linear-gradient(156.04deg, rgba(255, 160, 141, 0.2) 0%, rgba(255, 255, 255, 0) 100%)
                        `,
                        borderImageSource:
                          "linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.05) 100%)",
                        border: "1px solid #ffffff",
                      }}
                    >
                      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFA08D]/10 to-transparent opacity-30 pointer-events-none" />

                      <div className="text-left mb-4 relative z-10">
                        <h3 className="font-sans font-semibold text-body w-[200px] mb-4 text-[#161616] leading-tight">
                          {approach.title}
                        </h3>
                        {approach.subtitle && (
                          <p className="font-sans text-body3 text-[#161616]">
                            {approach.subtitle}
                          </p>
                        )}
                      </div>

                      <div className="space-y-4 relative z-10">
                        {approach.levels.map((level, levelIndex) => (
                          <div key={levelIndex} className="">
                            <h4 className="font-sans font-semibold text-body3 mb-4 text-gray-900">
                              {level.title}
                            </h4>
                            <div className="text-gray-700">
                              {Array.isArray(level.description) ? (
                                <ul className="space-y-1 pl-4">
                                  {level.description.map((item, idx) => (
                                    <li
                                      key={idx}
                                      className="flex items-start gap-2"
                                    >
                                      <span className="w-1 h-1 bg-[#161616] rounded-full mt-2 flex-shrink-0" />
                                      <span className="font-sans text-body3">
                                        {item}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              ) : (
                                <p className="font-sans text-body3 leading-relaxed">
                                  {level.description}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default SolutionSection;

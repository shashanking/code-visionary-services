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

  if (!solutions) {
    return null;
  }

  return (
    <SectionContainer
      id="solutions-section"
      fullWidth
      padding="lg"
      background="#f0f0f0"
      className="relative overflow-hidden flex flex-col items-center justify-center"
    >
      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10"
      >
        <div className="relative w-full max-w-4xl mx-auto flex flex-col justify-center items-center">
          <div className="flex flex-col w-full justify-center items-center mb-10">
            <h1 className="font-heading font-bold text-title-lg text-center uppercase text-[#161616] leading-[1.1] mb-6">
              {solutions.title}
            </h1>

            <p className="font-sans font-semibold text-body text-center text-[#161616] leading-[1.1] mb-4">
              {solutions.subtitle}
            </p>

            <p className="font-sans text-body1 text-[#303030] max-w-3xl leading-[1.5] text-center mb-8">
              {solutions.description}
            </p>
          </div>

          {/* Tech Stack */}
          {solutions.techStack.length > 0 && (
            <div className="w-full max-w-2xl">
              <h3 className="font-heading font-bold text-body mb-6 text-[#161616] text-center">
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
                        ${isHovered
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
                        ${isHovered
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
      </ContentContainer>
    </SectionContainer>
  );
};

export default SolutionSection;

import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useSanityPortfolioBySlug } from "../../hooks/Portfolios/useSanityPortfolios";

const SolutionSection: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { portfolio, loading, error } = useSanityPortfolioBySlug(slug!);

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
        <div className="relative w-full max-w-2xl mx-auto flex flex-row justify-start items-center gap-10">
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
                  {solutions.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                      <h4 className="font-sans font-bold text-body mb-2 text-gray-900">
                        {tech.name}
                      </h4>
                      <p className="font-sans text-body3 text-gray-600 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative flex gap-4">
              <div className="flex-1 space-y-6">
                {leftApproaches.map((approach, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-left mb-4">
                      <h3 className="font-sans font-semibold text-body w-[200px] mb-2 text-[#161616] leading-tight">
                        {approach.title}
                      </h3>
                      {approach.subtitle && (
                        <p className="font-sans text-body3 text-[#161616]">
                          {approach.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4">
                      {approach.levels.map((level, levelIndex) => (
                        <div key={levelIndex} className="">
                          <p className="font-sans text-body4 mb-2 text-gray-900">
                            <span className="font-semibold ">
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

              <div className="flex-1 flex flex-col justify-end space-y-6">
                {rightApproaches.map((approach, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="text-left mb-4">
                      <h3 className="font-sans font-semibold text-body w-[200px] mb-4 text-[#161616] leading-tight">
                        {approach.title}
                      </h3>
                      {approach.subtitle && (
                        <p className="font-sans text-body3 text-[#161616]">
                          {approach.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="space-y-4">
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
      </ContentContainer>
    </SectionContainer>
  );
};

export default SolutionSection;

import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useSanityPortfolioBySlug } from "../../hooks/Portfolios/useSanityPortfolios";

const ResultSection: React.FC = () => {
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

  const { results } = portfolio;

  return (
    <SectionContainer
      id="review-card"
      fullWidth
      padding="lg"
      background="#f0f0f0"
      className="relative overflow-hidden flex flex-col items-center justify-center"
    >
      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-between items-start"
      >
        <div className="relative w-full max-w-2xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
          {results.title && (
            <h2 className="font-heading font-bold text-title-lg text-left uppercase text-[#161616] leading-[1.1] mb-6">
              {results.title}
            </h2>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {results.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-4xl p-6 text-center border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-105 group"
              >
                <h3 className="text-title-sm font-semibold mb-4 text-gray-900">
                  {metric.title}
                </h3>

                <div className="text-title-lg font-[700] text-[#161616] mb-4">
                  {metric.percentage}
                </div>

                <p className="text-body4 text-[#161616] leading-[1.5]">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ResultSection;

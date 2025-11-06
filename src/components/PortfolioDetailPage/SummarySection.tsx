import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useSanityPortfolioBySlug } from "../../hooks/Portfolios/useSanityPortfolios";

const SummarySection: React.FC = () => {
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

  const { summary } = portfolio;

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
        className="relative z-10 py-10 flex flex-col justify-between items-start"
      >
        <div className="relative w-full max-w-2xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Left Side */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="w-auto h-[300px] sm:h-[500px] rounded-lg overflow-hidden relative z-10">
              <img
                src={summary.image}
                alt={summary.title}
                className="w-full h-full object-contain transition-all duration-400 ease-out"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="relative flex flex-col w-full md:w-1/2">
            <h1 className="font-heading font-bold text-title-lg text-left uppercase text-[#161616] leading-[1.1] mb-6">
              {summary.title}
            </h1>

            <p className="font-sans text-body text-left text-[#161616] leading-[1.5]">
              {summary.description}
            </p>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default SummarySection;

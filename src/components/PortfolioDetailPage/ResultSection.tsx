import React, { useMemo } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useSanityPortfolioBySlug } from "../../hooks/Portfolios/useSanityPortfolios";

const ResultSection: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { portfolio, loading, error } = useSanityPortfolioBySlug(slug!);

  // Define the color schemes
  const colorSchemes = [
    {
      background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02)), linear-gradient(180deg, rgba(227, 33, 33, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
      border:
        "linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.05) 100%)",
    },
    {
      background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02)), linear-gradient(180deg, rgba(227, 198, 33, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
      border:
        "linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.05) 100%)",
    },
    {
      background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02)), linear-gradient(180deg, rgba(33, 227, 55, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
      border:
        "linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.05) 100%)",
    },
    {
      background:
        "linear-gradient(0deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.02)), linear-gradient(180deg, rgba(33, 133, 227, 0.2) 0%, rgba(255, 255, 255, 0) 100%)",
      border:
        "linear-gradient(225deg, rgba(255, 255, 255, 0.05) 0%, #FFFFFF 50%, rgba(255, 255, 255, 0.05) 100%)",
    },
  ];

  // Function to assign colors ensuring no two same colors are adjacent
  const getCardColors = (count: number) => {
    if (count <= 4) {
      // For 4 or fewer cards, using sequential colors
      return Array.from(
        { length: count },
        (_, i) => colorSchemes[i % colorSchemes.length]
      );
    }

    // For more than 4 cards, assign colors randomly but ensure no adjacent duplicates
    const colors = [];
    let lastColorIndex = -1;

    for (let i = 0; i < count; i++) {
      let availableColors = colorSchemes.map((_, index) => index);

      // Remove the last used color to prevent adjacent duplicates
      if (lastColorIndex !== -1) {
        availableColors = availableColors.filter(
          (colorIndex) => colorIndex !== lastColorIndex
        );
      }

      // Randomly select from available colors
      const randomIndex = Math.floor(Math.random() * availableColors.length);
      const selectedColorIndex = availableColors[randomIndex];

      colors.push(colorSchemes[selectedColorIndex]);
      lastColorIndex = selectedColorIndex;
    }

    return colors;
  };

  const cardColors = useMemo(() => {
    return portfolio?.results?.metrics
      ? getCardColors(portfolio.results.metrics.length)
      : [];
  }, [portfolio?.results?.metrics]);

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

  if (!results) {
    return null;
  }

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

          <div className="w-full flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center max-w-2xl mx-auto">
              {results.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="w-full max-w-[400px] rounded-4xl p-6 text-center hover:shadow-xl transition-all duration-500 hover:scale-105 group"
                  style={{
                    background: cardColors[index]?.background,
                    borderImageSource: cardColors[index]?.border,
                    boxShadow: `
                      -1px -3px 4px 0px #FFFFFF66 inset,
                      4px 5px 6px 0px #FFFFFF66 inset,
                      0px 8px 13px 0px #00000040
                    `,
                    borderImageSlice: 0,
                    border: "1px solid #ffffff",
                  }}
                >
                  <h3 className="text-title-sm font-semibold mb-5 text-[#161616]">
                    {metric.title}
                  </h3>

                  <div className="text-title-lg font-[700] text-[#161616] mb-5">
                    {metric.percentage}
                  </div>

                  <p className="text-body4 text-[#161616] leading-[1.5]">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ResultSection;

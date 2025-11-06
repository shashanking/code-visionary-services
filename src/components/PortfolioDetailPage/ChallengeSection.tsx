import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import ChallengeBg from "../../assets/portfolio-page/challenge-bg.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSanityPortfolioBySlug } from "../../hooks/Portfolios/useSanityPortfolios";

const ChallengeSection: React.FC = () => {
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

  const { challenges, services } = portfolio;

  return (
    <SectionContainer
      id="review-card"
      fullWidth
      padding="lg"
      background="#e3e3e3"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center gap-10"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center opacity-90"
          style={{ backgroundImage: `url(${ChallengeBg})` }}
        />

        {/* <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" /> */}
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-start items-center">
          <div className="flex flex-col w-full mx-auto justify-between items-center mb-10">
            <h1 className="font-heading font-bold text-title-lg text-center uppercase leading-tight max-w-md text-[#161616] leading-[1.1] mb-6">
              {challenges.title}
            </h1>

            <p className="font-sans font-normal text-body1 text-[#161616] leading-[1.5] max-w-xl  mx-auto">
              {challenges.subtitle}
            </p>
          </div>

          {loading ? (
            <div className="relative w-full">
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="relative w-full h-full p-3 rounded-2xl overflow-hidden bg-gray-200 animate-pulse min-h-[350px]"
                  />
                ))}
              </div>
            </div>
          ) : error ? (
            <div className="w-full text-center py-20">
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-red-800 mb-2">
                  Failed to Load Data
                </h3>
                <p className="text-red-600">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : challenges.items.length === 0 ? (
            <div className="w-full text-center py-20">
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 max-w-md mx-auto">
                <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                  No Data Available
                </h3>
                <p className="text-yellow-600">
                  Check back later for the latest data.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="relative w-full">
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
                  {challenges.items.map((challenge, index) => {
                    return (
                      <div
                        key={index}
                        className={`relative flex flex-col justify-start items-center w-full h-full p-4 rounded-4xl bg-white/30 backdrop-blur-sm overflow-hidden`}
                      >
                        <div className="w-[100px] h-[100px] rounded-lg overflow-hidden mb-6">
                          <img
                            src={challenge.image}
                            alt={challenge.title}
                            className="w-full h-full object-cover transition-all duration-400 ease-out"
                            loading="lazy"
                          />
                        </div>

                        {/* Text Content */}
                        <div
                          className={`relative flex flex-col justify-between text-center transition-opacity duration-300 text-[#161616]`}
                        >
                          <h3 className="text-body text-[#161616] font-sans font-semibold mb-3 text-center">
                            {challenge.title}
                          </h3>

                          <p className="text-body3 font-sans line-clamp-6">
                            {challenge.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </ContentContainer>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-start items-center">
          <div className="flex flex-row w-full mx-auto justify-center items-center mb-10">
            <h1 className="font-heading font-bold text-title-lg text-center uppercase leading-tight max-w-md text-[#161616] leading-[1.1]">
              Services
            </h1>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {services.map((service, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-[#161616] text-white rounded-full text-sm font-semibold uppercase tracking-wide"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ChallengeSection;

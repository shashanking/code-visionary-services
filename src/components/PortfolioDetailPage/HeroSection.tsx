import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import PortfolioHeroBg from "../../assets/portfolio-page/portfolio-details-bg.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSanityPortfolioBySlug } from "../../hooks/Portfolios/useSanityPortfolios";

const HeroPortfolioDetailsPage: React.FC = () => {
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

  const { title, subtitle, hero } = portfolio;

  if (!hero) {
    return (
      <SectionContainer
        id="service-hero"
        fullWidth
        padding="none"
        background="#e3e3e3"
        className="relative min-h-[50vh] overflow-hidden flex flex-col items-center justify-center text-center"
      >
        <ContentContainer
          maxWidth="7xl"
          paddingX="lg"
          className="relative z-10 pt-20 pb-10 flex flex-col justify-center items-center text-center"
        >
          <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center">
            <h1 className="font-heading font-semibold text-title-sm uppercase mb-6 leading-[1.5] bg-gradient-to-t from-[#4F1E13] to-[#B5442C] bg-clip-text text-transparent">
              {title}
            </h1>

            {subtitle && (
              <h2 className="relative w-full max-w-2xl mx-auto text-center text-[#161616] leading-[1.1] text-title-2xl font-[700] mb-6">
                {subtitle}
              </h2>
            )}
          </div>
        </ContentContainer>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer
      id="service-hero"
      fullWidth
      padding="none"
      background="#e3e3e3"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center bg-fixed"
          style={{ backgroundImage: `url(${hero.image})` }}
        />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 pt-30 pb-10 flex flex-col justify-center items-center text-center min-h-[55vh]"
      >
        {/* Background Images */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-no-repeat bg-top"
            style={{ backgroundImage: `url(${PortfolioHeroBg})` }}
            aria-hidden="true"
          />

          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#F0F0F0] to-transparent z-0 pointer-events-none" />
        </div>

        <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center">
          <h1 className="font-heading font-semibold text-title-sm uppercase mb-6 leading-[1.5] bg-gradient-to-t from-[#4F1E13] to-[#B5442C] bg-clip-text text-transparent">
            {title}
          </h1>

          {subtitle && (
            <h2 className="relative w-full max-w-2xl mx-auto text-center text-[#161616] leading-[1.1] text-title-2xl font-[700] mb-6">
              {subtitle}
            </h2>
          )}

          <p className="font-sans font-normal text-body1 text-[#161616] leading-[1.5] max-w-xl  mx-auto">
            {hero.description}
          </p>

          <div className="w-full max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-10 mt-10">
            <div className="mb-4">
              <div className="font-heading text-[#161616] font-medium text-body1 uppercase">
                Client
              </div>
              <div className="text-[#303030] font-[300] text-body1">
                {hero.client}
              </div>
            </div>
            <div className="mb-4">
              <div className="font-heading text-[#161616] font-medium text-body1 uppercase">
                Role
              </div>
              <div className="text-[#303030] font-[300] text-body1">
                {hero.role}
              </div>
            </div>
            <div className="mb-4">
              <div className="font-heading text-[#161616] font-medium text-body1 uppercase">
                Date
              </div>
              <div className="text-[#303030] font-[300] text-body1">
                {hero.date}
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col justify-center items-center text-center h-[50vh] bg-transparent"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-center items-center"></div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroPortfolioDetailsPage;

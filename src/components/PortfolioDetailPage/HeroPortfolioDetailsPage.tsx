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
        </div>

        <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center">
          <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl uppercase mb-6 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <h2 className="text-title-2xl font-light mb-6 opacity-90">
              {subtitle}
            </h2>
          )}

          <p className="font-sans font-normal text-body1 text-[#161616] leading-[1.5] max-w-xl  mx-auto">
            {hero.description}
          </p>
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

import React from "react";
import HeroPortfolioDetailsPage from "../../components/PortfolioDetailPage/HeroSection";
import ChallengeSection from "../../components/PortfolioDetailPage/ChallengeSection";
import SolutionSection from "../../components/PortfolioDetailPage/SolutionSection";
import SummarySection from "../../components/PortfolioDetailPage/SummarySection";
import ResultSection from "../../components/PortfolioDetailPage/ResultSection";
import CTASection from "../../components/PortfolioDetailPage/CTASection";

const PortfolioDetailPage = React.memo(() => {
  return (
    <div>
      <HeroPortfolioDetailsPage />
      <ChallengeSection />
      <SolutionSection />
      <SummarySection />
      <ResultSection />
      <CTASection />
    </div>
  );
});

export default PortfolioDetailPage;

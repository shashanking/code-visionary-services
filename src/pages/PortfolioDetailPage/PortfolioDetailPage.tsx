import React from "react";
import HeroPortfolioDetailsPage from "../../components/PortfolioDetailPage/HeroSection";
import ChallengeSection from "../../components/PortfolioDetailPage/ChallengeSection";
import SolutionSection from "../../components/PortfolioDetailPage/SolutionSection";

const PortfolioDetailPage = React.memo(() => {
  return (
    <div>
      <HeroPortfolioDetailsPage />
      <ChallengeSection />
      <SolutionSection />
    </div>
  );
});

export default PortfolioDetailPage;

import React from "react";
import HeroPortfolioDetailsPage from "../../components/PortfolioDetailPage/HeroSection";
import ChallengeSection from "../../components/PortfolioDetailPage/ChallengeSection";

const PortfolioDetailPage = React.memo(() => {
  return (
    <div>
      <HeroPortfolioDetailsPage />
      <ChallengeSection />
    </div>
  );
});

export default PortfolioDetailPage;

import React from "react";
import HeroPortfolioPage from "../../components/PortfolioPageComponents/HeroPortfolioPage";
import PortfolioCardSection from "../../components/PortfolioPageComponents/PortfolioCardSection";

const PortfolioPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroPortfolioPage />
      <PortfolioCardSection />
    </div>
  );
};

export default PortfolioPage;

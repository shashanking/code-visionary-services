import React from "react";
import { Helmet } from "react-helmet-async";
import HeroPortfolioPage from "../../components/PortfolioPageComponents/HeroPortfolioPage";
import PortfolioCardSection from "../../components/PortfolioPageComponents/PortfolioCardSection";

const PortfolioPage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>Our Digital Projects That Drive Results | Code Visionary Services</title>
        <meta name="description" content="See how we transform ideas into results through web development, app solutions, branding, and performance-driven digital projects." />
        <link rel="canonical" href="https://codevisionaryservices.com/portfolio" />
        <meta property="og:title" content="Our Digital Projects That Drive Results | Code Visionary Services" />
        <meta property="og:description" content="See how we transform ideas into results through web development, app solutions, branding, and performance-driven digital projects." />
        <meta property="og:image" content="https://codevisionaryservices.com/og-image.webp" />
        <meta property="og:url" content="https://codevisionaryservices.com/portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Digital Projects That Drive Results | Code Visionary Services" />
        <meta name="twitter:description" content="See how we transform ideas into results through web development, app solutions, branding, and performance-driven digital projects." />
        <meta name="twitter:image" content="https://codevisionaryservices.com/og-image.webp" />
      </Helmet>
      <HeroPortfolioPage />
      <PortfolioCardSection />
    </div>
  );
};

export default PortfolioPage;

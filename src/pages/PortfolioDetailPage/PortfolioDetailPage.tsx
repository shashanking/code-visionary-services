import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useSanityPortfolioBySlug } from "../../hooks/Portfolios/useSanityPortfolios";
import HeroPortfolioDetailsPage from "../../components/PortfolioDetailPage/HeroPortfolioDetailsPage";
import PortfolioContentSection from "../../components/PortfolioDetailPage/PortfolioContentSection";
import RelatedPortfoliosSection from "../../components/PortfolioDetailPage/RelatedPortfoliosSection";

const PortfolioDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { portfolio, loading, error } = useSanityPortfolioBySlug(slug || "");

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#B5442C]"></div>
      </div>
    );
  }

  if (error || !portfolio) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="flex flex-col">
      <HeroPortfolioDetailsPage portfolio={portfolio} />
      <PortfolioContentSection content={portfolio.content} />
      <RelatedPortfoliosSection currentPortfolioId={portfolio.id} />
    </div>
  );
};

export default PortfolioDetailPage;

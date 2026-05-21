import React from "react";
import { Helmet } from "react-helmet-async";
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

  const siteUrl = "https://codevisionaryservices.com";

  return (
    <div className="flex flex-col">
      <Helmet>
        <title>{`${portfolio.title} — Code Visionary Services`}</title>
        <meta name="description" content={portfolio.description} />
        <link rel="canonical" href={`${siteUrl}/portfolio/${portfolio.slug}`} />
        <meta property="og:title" content={`${portfolio.title} — Code Visionary Services`} />
        <meta property="og:description" content={portfolio.description} />
        <meta property="og:image" content={portfolio.image || `${siteUrl}/og-image.png`} />
        <meta property="og:url" content={`${siteUrl}/portfolio/${portfolio.slug}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${portfolio.title} — Code Visionary Services`} />
        <meta name="twitter:description" content={portfolio.description} />
        <meta name="twitter:image" content={portfolio.image || `${siteUrl}/og-image.png`} />
      </Helmet>
      <HeroPortfolioDetailsPage portfolio={portfolio} />
      <PortfolioContentSection content={portfolio.content} />
      <RelatedPortfoliosSection currentPortfolioId={portfolio.id} />
    </div>
  );
};

export default PortfolioDetailPage;

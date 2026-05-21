import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "../../components/HomePageComponents/HeroSection";
import ClientsMarqueeSection from "../../components/HomePageComponents/ClientsMarqueeSection";
import AboutSection from "../../components/HomePageComponents/AboutSection";
import PortfolioSection from "../../components/HomePageComponents/PortfolioSection";
import TechStackSection from "../../components/HomePageComponents/TechStackSection";
import ReviewSection from "../../components/HomePageComponents/ReviewSection";
import OurTeamSection from "../../components/HomePageComponents/OurTeamSection";
import BannerSection from "../../components/HomePageComponents/BannerSection";
import ContactSection from "../../components/HomePageComponents/ContactSection";
import FAQSection from "../../components/HomePageComponents/FAQSection";

const SITE_URL = "https://codevisionaryservices.com";

const HomePage = React.memo(() => {
  return (
    <div>
      <Helmet>
        <title>Hire the Best Developers | Code Visionary Services</title>
        <meta name="description" content="Hire dedicated developers for Python, React, and app development. Code Visionary Services delivers expert dev talent, AI insights & growth funnels." />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content="Hire the Best Developers | Code Visionary Services" />
        <meta property="og:description" content="Hire dedicated developers for Python, React, and app development. Code Visionary Services delivers expert dev talent, AI insights & growth funnels." />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:url" content={SITE_URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire the Best Developers | Code Visionary Services" />
        <meta name="twitter:description" content="Hire dedicated developers for Python, React, and app development. Code Visionary Services delivers expert dev talent, AI insights & growth funnels." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
      </Helmet>
      <HeroSection />
      <ClientsMarqueeSection />
      <AboutSection />
      <PortfolioSection />
      <TechStackSection />
      <ReviewSection />
      <OurTeamSection />
      <BannerSection />
      <ContactSection />
      <FAQSection />
    </div>
  );
});

export default HomePage;

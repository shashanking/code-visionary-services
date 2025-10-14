import React from "react";
import HeroSection from "../../components/HomePageComponents/HeroSection";
import ClientsMarqueeSection from "../../components/HomePageComponents/ClientsMarqueeSection";
import AboutSection from "../../components/HomePageComponents/AboutSection";
import PortfolioSection from "../../components/HomePageComponents/PortfolioSection";
import TechStackSection from "../../components/HomePageComponents/TechStackSection";
import TestimonialSection from "../../components/HomePageComponents/TestimonialSection";
import OurTeamSection from "../../components/HomePageComponents/OurTeamSection";
import BannerSection from "../../components/HomePageComponents/BannerSection";
import ContactSection from "../../components/HomePageComponents/ContactSection";
import FAQSection from "../../components/HomePageComponents/FAQSection";

const HomePage = React.memo(() => {
  return (
    <div>
      <HeroSection />
      <ClientsMarqueeSection />
      <AboutSection />
      <PortfolioSection />
      <TechStackSection />
      <TestimonialSection />
      <OurTeamSection />
      <BannerSection />
      <ContactSection />
      <FAQSection />
    </div>
  );
});

export default HomePage;

import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import TechStackSection from "./components/TechStackSection";
// import OurTeamSection from "./components/OurTeamSection";
import BannerSection from "./components/BannerSection";
import ContactSection from "./components/ContactSection";
import FAQSection from "./components/FAQSection";
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from "./components/FooterSection";
import ClientsMarqueeSection from "./components/ClientsMarqueeSection";

const App: React.FC = () => {
  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-top bg-center"
      // style={{
      //   backgroundImage: `url(${bgLines})`,
      // }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 md:px-16 lg:px-24">
        <Navbar />
        <HeroSection />
        <ClientsMarqueeSection />
        <AboutSection />
        <PortfolioSection />
        <TechStackSection />
        <TestimonialSection />
        {/* <OurTeamSection /> */}
        <BannerSection />
        <ContactSection />
        <FAQSection />
        <FooterSection />
      </div>
    </div>
  );
};

export default App;

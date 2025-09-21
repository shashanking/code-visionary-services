import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import bgLines from "./assets/BG_lines.png"; // Import the background image
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
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${bgLines})`,  // Use imported image here
        backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 8, lg: 12 } }}>
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
      </Container>
    </Box>
  );
};

export default App;

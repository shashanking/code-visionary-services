import React from "react";
import HeroAboutPage from "../../components/AboutPageComponents/HeroAboutPage";
import OurStorySection from "../../components/AboutPageComponents/OurStorySection";

const AboutPage = React.memo(() => {
  return (
    <div>
      <HeroAboutPage />
      <OurStorySection />
    </div>
  );
});

export default AboutPage;

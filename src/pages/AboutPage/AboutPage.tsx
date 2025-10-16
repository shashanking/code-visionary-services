import React from "react";
import HeroAboutPage from "../../components/AboutPageComponents/HeroAboutPage";
import OurStorySection from "../../components/AboutPageComponents/OurStorySection";
import OurTeamSection from "../../components/AboutPageComponents/OurTeamSection";

const AboutPage = React.memo(() => {
  return (
    <div>
      <HeroAboutPage />
      <OurStorySection />
      <OurTeamSection />
    </div>
  );
});

export default AboutPage;

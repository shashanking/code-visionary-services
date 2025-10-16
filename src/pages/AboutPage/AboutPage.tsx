import React from "react";
import HeroAboutPage from "../../components/AboutPageComponents/HeroAboutPage";
import OurStorySection from "../../components/AboutPageComponents/OurStorySection";
import OurTeamSection from "../../components/AboutPageComponents/OurTeamSection";
import TimelineSection from "../../components/AboutPageComponents/TimelineSection";

const AboutPage = React.memo(() => {
  return (
    <div>
      <HeroAboutPage />
      <OurStorySection />
      <OurTeamSection />
      <TimelineSection />
    </div>
  );
});

export default AboutPage;

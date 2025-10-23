import React from "react";
import HeroAboutPage from "../../components/AboutPageComponents/HeroAboutPage";
import OurStorySection from "../../components/AboutPageComponents/OurStorySection";
import OurTeamSection from "../../components/AboutPageComponents/OurTeamSection";
import TimelineSection from "../../components/AboutPageComponents/TimelineSection";
import StatsSection from "../../components/AboutPageComponents/StatsSection";
import ContactUsSection from "../../components/AboutPageComponents/ContactUsSection";

const AboutPage = React.memo(() => {
  return (
    <div>
      <HeroAboutPage />
      <OurStorySection />
      <OurTeamSection />
      <TimelineSection />
      <StatsSection />
      <ContactUsSection />
    </div>
  );
});

export default AboutPage;

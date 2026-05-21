import React from "react";
import { Helmet } from "react-helmet-async";
import HeroAboutPage from "../../components/AboutPageComponents/HeroAboutPage";
import OurStorySection from "../../components/AboutPageComponents/OurStorySection";
import OurTeamSection from "../../components/AboutPageComponents/OurTeamSection";
import TimelineSection from "../../components/AboutPageComponents/TimelineSection";
import StatsSection from "../../components/AboutPageComponents/StatsSection";
import ContactUsSection from "../../components/AboutPageComponents/ContactUsSection";

const AboutPage = React.memo(() => {
  return (
    <div>
      <Helmet>
        <title>About Code Visionary Services | Digital Innovation Team</title>
        <meta name="description" content="From vision to execution, Code Visionary Services builds scalable digital products through innovation, strategy, and a passionate expert team." />
        <link rel="canonical" href="https://codevisionaryservices.com/about" />
        <meta property="og:title" content="About Code Visionary Services | Digital Innovation Team" />
        <meta property="og:description" content="From vision to execution, Code Visionary Services builds scalable digital products through innovation, strategy, and a passionate expert team." />
        <meta property="og:image" content="https://codevisionaryservices.com/og-image.png" />
        <meta property="og:url" content="https://codevisionaryservices.com/about" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Code Visionary Services | Digital Innovation Team" />
        <meta name="twitter:description" content="From vision to execution, Code Visionary Services builds scalable digital products through innovation, strategy, and a passionate expert team." />
        <meta name="twitter:image" content="https://codevisionaryservices.com/og-image.png" />
      </Helmet>
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

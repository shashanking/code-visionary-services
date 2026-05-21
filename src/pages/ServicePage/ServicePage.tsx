import React from "react";
import { Helmet } from "react-helmet-async";
import HeroServicePage from "../../components/ServicePageComponents/HeroServicePage";
import ServiceCardSection from "../../components/ServicePageComponents/ServiceCardSection";

const ServicePage = React.memo(() => {
  return (
    <div>
      <Helmet>
        <title>Hire Dedicated Developers | Web, App & Tech Marketing | Code Visionary Services</title>
        <meta name="description" content="Code Visionary Services offers web development, mobile apps, UI/UX design, branding, AI automation, and performance-driven digital funnels" />
        <link rel="canonical" href="https://codevisionaryservices.com/services" />
        <meta property="og:title" content="Hire Dedicated Developers | Web, App & Tech Marketing | Code Visionary Services" />
        <meta property="og:description" content="Code Visionary Services offers web development, mobile apps, UI/UX design, branding, AI automation, and performance-driven digital funnels" />
        <meta property="og:image" content="https://codevisionaryservices.com/og-image.png" />
        <meta property="og:url" content="https://codevisionaryservices.com/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hire Dedicated Developers | Web, App & Tech Marketing | Code Visionary Services" />
        <meta name="twitter:description" content="Code Visionary Services offers web development, mobile apps, UI/UX design, branding, AI automation, and performance-driven digital funnels" />
        <meta name="twitter:image" content="https://codevisionaryservices.com/og-image.png" />
      </Helmet>
      <HeroServicePage />
      <ServiceCardSection />
    </div>
  );
});

export default ServicePage;

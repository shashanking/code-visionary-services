import React from "react";
import { Helmet } from "react-helmet-async";
import HeroContactPage from "../../components/ContactPageComponents/HeroContactPage";

const ContactPage = React.memo(() => {
  return (
    <div>
      <Helmet>
        <title>Ready to Hire Dedicated Developers? Contact Code Visionary Services</title>
        <meta name="description" content="Got a project in mind? Hire dedicated Python, React & app developers at Code Visionary Services. Schedule a call & get a clear plan in one business day." />
        <link rel="canonical" href="https://codevisionaryservices.com/contact" />
        <meta property="og:title" content="Ready to Hire Dedicated Developers? Contact Code Visionary Services" />
        <meta property="og:description" content="Got a project in mind? Hire dedicated Python, React & app developers at Code Visionary Services. Schedule a call & get a clear plan in one business day." />
        <meta property="og:image" content="https://codevisionaryservices.com/og-image.webp" />
        <meta property="og:url" content="https://codevisionaryservices.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ready to Hire Dedicated Developers? Contact Code Visionary Services" />
        <meta name="twitter:description" content="Got a project in mind? Hire dedicated Python, React & app developers at Code Visionary Services. Schedule a call & get a clear plan in one business day." />
        <meta name="twitter:image" content="https://codevisionaryservices.com/og-image.webp" />
      </Helmet>
      <HeroContactPage />
    </div>
  );
});

export default ContactPage;

import React from "react";
import HeroContactPage from "../../components/ContactPageComponents/HeroContactPage";
import ContactCardSection from "../../components/ContactPageComponents/ContactCardSection";

const ContactPage = React.memo(() => {
  return (
    <div>
      <HeroContactPage />
      <ContactCardSection />
    </div>
  );
});

export default ContactPage;

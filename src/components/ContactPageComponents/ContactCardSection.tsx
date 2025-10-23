import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";

import ContactForm from "./ContactForm";

const ContactCardSection: React.FC = () => {
  return (
    <SectionContainer
      id="review-card"
      fullWidth
      padding="lg"
      // background="#e3e3e350"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0]/0 via-[#F0F0F0] to-[#F0F0F0] z-0 pointer-events-none" />

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 pb-10 flex flex-col justify-center items-center text-center overflow-hidden"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-center items-center">
          <h2 className="font-heading font-bold text-title-md text-center uppercase mb-6 leading-tight max-w-sm bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
            Let's Get In Touch
          </h2>

          <p className="font-sans font-normal text-body1 text-[#303030] leading-[1.5] text-center max-w-md mb-6">
            Tell us a bit about your project and goals. We'll get back within
            one business day with next steps and a clear plan to move forward.
          </p>

          {/* Main Contact Card */}
          <div className="w-full mx-auto mt-10">
            <ContactForm />
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ContactCardSection;

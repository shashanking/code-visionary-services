import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import bgImg from "../../assets/contact_bg_image.png";
import ContactForm from "../ContactPageComponents/ContactForm";

const ContactSection: React.FC = () => {
  return (
    <SectionContainer
      id="contact"
      fullWidth
      padding="lg"
      className="relative min-h-screen bg-[#F0F0F0] flex justify-center items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      {/* Content */}
      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col justify-center items-center text-center"
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

export default ContactSection;

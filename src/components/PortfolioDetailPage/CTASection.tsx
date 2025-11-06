import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import CtaSectionBg from "../../assets/portfolio-page/cta-section-bg.jpg";
import CtaSectionElement from "../../assets/portfolio-page/cta-section-element.png";
import { useNavigate } from "react-router-dom";

const CTASection: React.FC = () => {
  const navigate = useNavigate();

  const handleCtaClick = () => {
    navigate(`/contact`);
  };

  return (
    <SectionContainer
      id="portfolio-cta-section"
      fullWidth
      padding="lg"
      background="#f0f0f0"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      <div className="absolute top-1/2 -translate-y-1/2 inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-[50vh] bg-cover bg-no-repeat bg-bottom opacity-90"
          style={{ backgroundImage: `url(${CtaSectionBg})` }}
        />

        {/* Left side design element */}
        <div
          className="absolute z-30 left-0 w-20 h-auto bg-cover bg-no-repeat bg-bottom opacity-90"
          style={{ backgroundImage: `url(${CtaSectionElement})` }}
        />

        {/* Right side design element */}
        <div
          className="absolute z-30 right-0 w-20 h-auto bg-cover bg-no-repeat bg-bottom opacity-90"
          style={{ backgroundImage: `url(${CtaSectionElement})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-[#000000]/20 to-[#F0F0F0/0 z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-between items-start"
      >
        <div className="relative w-full max-w-2xl mx-auto flex flex-col justify-center items-center">
          <h1 className="font-heading max-w-xl text-center font-bold text-title-lg text-left uppercase text-white leading-[1.1] mb-6">
            Ready to Bring Your Vision to Life?
          </h1>

          <p className="font-sans text-body2 max-w-md text-center text-white leading-[1.5] mb-4">
            Let’s collaborate to build something extraordinary. Get in touch
            with Code Visionary Services today and start your digital
            transformation journey.
          </p>

          <p className="font-sans text-body2 max-w-md text-center text-white leading-[1.5] mb-6">
            Book a <span className="font-semibold">FREE consultation</span> now
            and start seeing results. Our team is ready to deliver the future to
            your business today!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row gap-4 mt-6">
            <button
              onClick={handleCtaClick}
              className="uppercase font-heading font-bold text-body1 rounded-full
                  bg-[#F0F0F0] text-[#161616] px-6 md:px-10 py-1 md:py-2 shadow-[0px_0px_8px_#B5442C]
                  hover:bg-[#ECECEC] transition-colors duration-200 cursor-pointer"
            >
              Schedule a Meeting
            </button>

            <button
              onClick={handleCtaClick}
              className="uppercase font-heading font-bold text-body1 rounded-full
                  bg-[#0861AA] text-white px-6 md:px-10 py-1 md:py-2 shadow-[0px_0px_8px_#0861AA]
                  hover:bg-[linear-gradient(90deg,#0861AA_0%,#0861AA_100%)] transition-all duration-200 cursor-pointer"
            >
              Call Now!
            </button>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default CTASection;

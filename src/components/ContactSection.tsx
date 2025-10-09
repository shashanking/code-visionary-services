import React, { useEffect, useState } from "react";
import SectionContainer from "./shared/SectionContainer";
import ContentContainer from "./shared/ContentContainer";
import bgImg from "../assets/contact_bg_image.png";
import bgImgInside from "../assets/contact_bg_image_inside.png";
import bgImgInsideMobile from "../assets/contact_bg_image_inside_mobile.png";

const ContactSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SectionContainer
      id="contact-section"
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
          <h2
            className="font-heading font-bold text-title-md text-center uppercase mb-6 leading-tight max-w-sm
              bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent"
          >
            Let's Get In Touch
          </h2>

          <p className="font-sans font-normal text-body1 text-[#303030] leading-[1.5] text-center max-w-md mb-6">
            Tell us a bit about your project and goals. We’ll get back within
            one business day with next steps and a clear plan to move forward.
          </p>

          {/* Main Contact Card */}
          <div className="relative w-full rounded-[22px] overflow-hidden p-[2px] bg-gradient-to-r from-[#2B7EE0] to-[#B5442C] flex justify-center items-center">
            <div
              className="relative w-full rounded-[20px] bg-white bg-opacity-95 p-4 md:p-8 shadow-[0_8px_32px_rgba(44,62,80,0.13)] flex flex-col items-stretch justify-between overflow-hidden"
              style={{
                backgroundImage: `url(${
                  isMobile ? bgImgInsideMobile : bgImgInside
                })`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full flex flex-col md:flex-row">
                {/* CALENDER SIDE */}
                <div className="flex-1.5 p-6 md:p-8 flex flex-col justify-center">
                  {/* calender will goes here */}
                </div>

                {/* Divider */}
                <div className="w-full md:w-[3px] h-[3px] md:h-auto rounded-full bg-gradient-to-r from-[#B5442C] to-transparent md:bg-[linear-gradient(180deg,#B5442C_0%,rgba(240,240,240,0)_100%)] transition-all duration-300 mx-auto md:mx-4 my-4 md:my-0"></div>

                {/* INFO SIDE */}
                <div className="flex-1 flex flex-col justify-center text-left max-w-md">
                  <h3 className="font-heading text-[#161616] text-body1 font-bold  uppercase mb-1">
                    Call Us
                  </h3>
                  <p className="font-sans text-[#303030] text-body2 mb-3">
                    Prefer to talk? Give us a call—our team is happy to discuss
                    scope, timelines, and the best approach for your needs.
                  </p>
                  <div className="flex items-center gap-2 mb-6">
                    <p className="font-sans font-semibold text-[#303030] text-body2">
                      +91 8637515632
                    </p>
                  </div>

                  <h3 className="font-heading text-[#161616] text-body1 font-bold uppercase mb-1">
                    Email
                  </h3>
                  <p className="font-sans text-[#303030] text-body2 mb-3">
                    Want to share docs or a brief? Email us and we’ll follow up
                    with a quick discovery call and a tailored proposal.
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="font-sans font-semibold text-[#303030] text-body2">
                      office@codevisionaryservices.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <button
                  className="uppercase w-full sm:w-fit font-heading font-bold text-body1 rounded-full
                  bg-[#B5442C] text-white px-4 md:px-10 py-1 md:py-2 shadow-[0px_0px_8px_#B5442C]
                  hover:bg-[linear-gradient(90deg,#c8462b_0%,#e86d3a_100%)] transition-all duration-200 cursor-pointer"
                >
                  Schedule A Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ContactSection;

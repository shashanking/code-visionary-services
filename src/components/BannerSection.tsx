import React, { useEffect, useState } from "react";
import SectionContainer from "./shared/SectionContainer";
import ContentContainer from "./shared/ContentContainer";
import bgArrows from "../assets/banner_section_bg_image.png";
import blueCard from "../assets/banner_section_blue_image.png";
import blueCardMobile from "../assets/banner_section_blue_image_mobile.png";
import phoneStack from "../assets/banner_section_phone_image.png";

const BannerSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size once on mount and on resize
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SectionContainer
      id="banner-section"
      fullWidth
      padding="lg"
      className="relative min-h-screen bg-[#F0F0F0] flex justify-center items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center scale-x-[-1]"
          style={{ backgroundImage: `url(${bgArrows})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      {/* Subtle top/bottom gradient overlay */}

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex justify-center items-center"
      >
        {/* Blue Card */}
        <div
          className="relative max-w-2xl min-h-fit md:h-[530px] rounded-xl md:rounded-2xl overflow-visible flex flex-col md:flex-row shadow-[0_10px_40px_rgba(0,0,0,0.25)] bg-gradient-to-b from-[#0861AA] to-[#032744] bg-cover bg-center p-4"
          style={{
            backgroundImage: `url(${isMobile ? blueCardMobile : blueCard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Left / Top - Phone Image */}
          <div className="relative flex justify-center items-center w-full md:w-1/2 z-10">
            <img
              src={phoneStack}
              alt="App preview phones"
              className="w-[400px] md:w-[600px] h-auto -translate-y-24 drop-shadow-[4px_4px_14.9px_rgba(0,0,0,0.5)] md:drop-shadow-none select-none pointer-events-none"
            />
          </div>

          {/* Right / Bottom - Text and CTA */}
          <div className="relative -top-10 md:top-0 flex flex-col justify-end md:justify-center w-full md:w-1/2 text-white">
            <h3 className="font-heading font-bold text-title-md text-left uppercase mb-6 leading-tight max-w-[150px] md:max-w-md">
              LET’S TALK STRATEGY
            </h3>

            <p className="font-sans font-normal text-body1 leading-[1.5] text-left">
              Ready to scale your business? Whether you need a cutting-edge
              website, a high-impact mobile app, or game-changing marketing
              strategies, Kyptronix is here to help.
              <br />
              <br />
              Book a{" "}
              <span className="text-white font-semibold">
                FREE consultation
              </span>{" "}
              now and start seeing results. Our team is ready to deliver the
              future to your business today!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col xs:flex-row gap-4 mt-6">
              <button
                className="uppercase font-heading font-bold text-body1 rounded-full
                  bg-[#F0F0F0] text-[#161616] px-6 md:px-10 py-1 md:py-2 shadow-[0px_0px_8px_#B5442C]
                  hover:bg-[#ECECEC] transition-colors duration-200 cursor-pointer"
              >
                Schedule a Meeting
              </button>

              <button
                className="uppercase font-heading font-bold text-body1 rounded-full
                  bg-[#B5442C] text-white px-6 md:px-10 py-1 md:py-2 shadow-[0px_0px_8px_#B5442C]
                  hover:bg-[linear-gradient(90deg,#c8462b_0%,#e86d3a_100%)] transition-all duration-200 cursor-pointer"
              >
                Call Now!
              </button>
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default BannerSection;

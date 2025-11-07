import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import ContactBg from "../../assets/about-page/contact-us-bg.jpg";
import ContactCardBg from "../../assets/about-page/contact-us-card-bg.jpg";
import ContactImgBg from "../../assets/about-page/contact-us-img.png";
import { CTAButton } from "../shared";
import { useNavigate } from "react-router-dom";

const ContactUsSection: React.FC = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate(`/contact`);
  };

  return (
    <SectionContainer
      id="contact-us"
      fullWidth
      padding="lg"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${ContactBg})` }}
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[30vw] h-[90vh] rounded-full bg-[#B5442C] blur-[150px] md:blur-[180px]" />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative z-0 w-full max-w-2xl flex flex-col items-center p-6 md:p-12 lg:p-20">
          <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
            <div
              className="w-full h-full bg-cover bg-no-repeat bg-center [transform:scaleX(-1)]"
              style={{ backgroundImage: `url(${ContactCardBg})` }}
            />

            <div className="absolute inset-0 bg-[linear-gradient(180deg,#0861AA_0%,#032744_100%)] opacity-70" />
          </div>

          <div className="relative flex flex-col-reverse md:flex-row w-full max-w-2xl mx-auto">
            <div className="w-full md:w-1/2 pr-4 md:pr-8 lg:pr-16">
              <h2 className="font-sans font-semibold text-title-md max-w-sm mb-6 md:mb-10 leading-tight text-white">
                Let's Start a{" "}
                <span className="bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent">
                  Conversation
                </span>
              </h2>

              <p className="font-sans text-body2 text-white mb-6 md:mb-10 leading-relaxed max-w-sm">
                Whether you’re starting a new project or looking to enhance your
                current digital strategy, Code Visionary Services is here to
                assist you. Reach out to us today to learn more about our
                services and how we can help your business succeed.
              </p>

              <div className="flex justify-center md:justify-start">
                <CTAButton
                  size="small"
                  showIcon={false}
                  className="bg-white text-black shadow-[0px_0px_8px_0px_#B5442C] hover:shadow-[0px_0px_12px_0px_#B5442C] transition-shadow"
                  onClick={handleContactClick}
                >
                  Contact Us!
                </CTAButton>
              </div>
            </div>

            <div className="hidden md:block absolute -right-30 lg:-right-50 bottom-10 lg:-bottom-15 w-4/5">
              <img src={ContactImgBg} alt="Laptop" className="w-full h-full" />
            </div>

            <div className="flex md:hidden justify-center items-center relative w-full -mt-40 pb-8">
              <img src={ContactImgBg} alt="Laptop" className="w-full h-full" />
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ContactUsSection;

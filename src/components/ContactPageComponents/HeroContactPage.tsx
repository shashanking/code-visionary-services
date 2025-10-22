import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import { MessageCircleMore, Phone } from "lucide-react";

const HeroContactPage: React.FC = () => {
  return (
    <SectionContainer
      id="review-hero"
      fullWidth
      padding="lg"
      background="#e3e3e3"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          // style={{ backgroundImage: `url(${BlogPageBg})` }}
        />
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] bg-center" />

        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0]/0 via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-center"
      >
        <div className="relative z-10 w-full max-w-xl flex flex-col justify-center items-center">
          <h1
            className={`font-heading font-bold text-title-2xl text-center uppercase mb-6 bg-gradient-to-r text-[#161616] leading-[1.1]`}
          >
            Let’s Build Something Great{" "}
            <span className="bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
              Together
            </span>
          </h1>

          <p className="font-sans font-normal text-body1 text-[#161616] max-w-xl mx-auto leading-[1.5] mb-10">
            Have a project in mind or a question to ask? Reach out to us, we’re
            here to turn your ideas into powerful digital solutions.
          </p>

          <div
            className="w-full max-w-xs flex flex-row items-center justify-between bg-[#161616] p-2 leading-none rounded-full"
            style={{
              boxShadow: "0px 0px 8px 0px #B5442C",
            }}
          >
            <button className="flex items-center justify-center font-heading text-body2 text-white uppercase gap-2">
              <span className="bg-white rounded-full flex-shrink-0">
                <Phone className="text-black w-5 h-5 p-1" />
              </span>{" "}
              Call Us
            </button>

            {/* Divider */}
            <div className="w-1 h-full bg-white rounded-full mx-2 leading-[1.5]">|</div>

            <button className="flex items-center justify-center font-heading text-body2 text-white uppercase gap-2">
              Chat With Us{" "}
              <span className="bg-white rounded-full flex-shrink-0">
                <MessageCircleMore className="text-black w-5 h-5 p-1" />
              </span>
            </button>
          </div>
        </div>
      </ContentContainer>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex justify-center items-center"
      >
        <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-3 lg:gap-6 min-h-[450px]"></div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroContactPage;

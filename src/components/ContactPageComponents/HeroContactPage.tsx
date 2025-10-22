import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import { MessageCircleMore, Phone } from "lucide-react";

const HeroContactPage: React.FC = () => {
  const [gridCount, setGridCount] = useState(0);
  const [isHoveringCall, setIsHoveringCall] = useState(false);
  const [isHoveringChat, setIsHoveringChat] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateGrid = () => {
      const cellSize = 110; // px
      const cols = Math.ceil(window.innerWidth / cellSize);
      const rows = Math.ceil(window.innerHeight / cellSize);
      setGridCount(cols * rows);
    };

    updateGrid();
    window.addEventListener("resize", updateGrid);
    return () => window.removeEventListener("resize", updateGrid);
  }, []);

  const handleCallClick = () => {
    navigate("/contact");
  };

  const handleChatClick = () => {
    navigate("/contact");
  };

  return (
    <SectionContainer
      id="review-hero"
      fullWidth
      padding="lg"
      background="#e3e3e3"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-start text-center"
    >
      <div className="absolute inset-0 z-0 grid [grid-template-columns:repeat(auto-fill,minmax(110px,1fr))]">
        {Array.from({ length: gridCount }).map((_, i) => (
          <div
            key={i}
            className="border border-black/5 bg-[#e3e3e3] transition-all duration-300 hover:bg-white"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0]/50 via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-center pointer-events-none"
      >
        <div className="w-full max-w-xl flex flex-col justify-center items-center mb-16">
          <h1 className="font-heading font-bold text-title-2xl text-center uppercase mb-6 text-[#161616] leading-[1.1]">
            Let's Build Something Great{" "}
            <span className="bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
              Together
            </span>
          </h1>

          <p className="font-sans font-normal text-body1 text-[#161616] max-w-xl mx-auto leading-[1.5]">
            Have a project in mind or a question to ask? Reach out to us, we're
            here to turn your ideas into powerful digital solutions.
          </p>
        </div>
      </ContentContainer>

      <div
        className="w-full max-w-[350px] h-10 flex flex-row items-center justify-between bg-[#161616] p-2 leading-none rounded-full relative overflow-hidden"
        style={{
          boxShadow: isHoveringCall
            ? "0px 0px 8px 0px #B5442C"
            : isHoveringChat
            ? "0px 0px 8px 0px #2C6FB5"
            : "0px 0px 8px 0px #B5442C",
        }}
      >
        <button
          className={`flex items-center justify-center font-heading text-body2 text-white uppercase gap-2 p-2 pl-0 cursor-pointer relative z-10 transition-all duration-300 ${
            isHoveringCall
              ? "w-full opacity-100"
              : isHoveringChat
              ? "w-0 opacity-0"
              : "w-auto opacity-100"
          }`}
          onMouseEnter={() => setIsHoveringCall(true)}
          onMouseLeave={() => setIsHoveringCall(false)}
          onClick={handleCallClick}
        >
          <span className="bg-white rounded-full flex-shrink-0">
            <Phone className="text-black w-6 h-6 p-1" />
          </span>{" "}
          Call Us
        </button>

        <div
          className={`absolute left-0 top-0 h-full bg-gradient-to-l from-[#B5442C] to-[#4F1E13] rounded-full transition-all duration-300 ${
            isHoveringCall ? "w-full" : "w-0"
          }`}
        />

        <div
          className={`h-full bg-white rounded-full transition-all duration-300 ease-in-out ${
            isHoveringCall || isHoveringChat
              ? "w-0 opacity-0 mx-0"
              : "w-[2px] opacity-100 mx-2"
          }`}
        ></div>

        <button
          className={`flex items-center justify-center font-heading text-body2 text-white uppercase gap-2 p-2 pr-0 cursor-pointer relative z-10 transition-all duration-300 ${
            isHoveringChat
              ? "w-full opacity-100"
              : isHoveringCall
              ? "w-0 opacity-0"
              : "w-auto opacity-100"
          }`}
          onMouseEnter={() => setIsHoveringChat(true)}
          onMouseLeave={() => setIsHoveringChat(false)}
          onClick={handleChatClick}
        >
          Chat With Us{" "}
          <span className="bg-white rounded-full flex-shrink-0">
            <MessageCircleMore className="text-black w-6 h-6 p-1" />
          </span>
        </button>

        <div
          className={`absolute right-0 top-0 h-full bg-gradient-to-b from-[#2C6FB5] to-[#134F7A] rounded-full transition-all duration-300 ${
            isHoveringChat ? "w-full" : "w-0"
          }`}
        />
      </div>
    </SectionContainer>
  );
};

export default HeroContactPage;

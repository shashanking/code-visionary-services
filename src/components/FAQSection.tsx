import React, { useState } from "react";
import SectionContainer from "./shared/SectionContainer";
import ContentContainer from "./shared/ContentContainer";
import faqBg from "../assets/FAQ_bg_image.png";
import { faqs } from "../constants/faqs-data";

const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <SectionContainer
      id="faq-section"
      fullWidth
      padding="lg"
      className="relative min-h-screen bg-[#fafafa] flex justify-center items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center scale-x-[-1]"
          style={{ backgroundImage: `url(${faqBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      {/* Content */}
      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col justify-center items-center text-center"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-center items-center">
          {/* FAQ Title */}
          <h2 className="font-heading font-bold text-title-md text-center text-[#161616] uppercase mb-6 leading-tight max-w-md">
            NEED <span className="text-[#B5442C]">HELP?</span> WE'VE GOT ANSWERS
          </h2>

          <p className="font-sans font-normal text-body1 text-[#303030] leading-[1.5] text-center max-w-lg mb-10">
            Explore our FAQ section to learn more about our services, timelines,
            pricing, and what to expect when working with Code Visionary
            Services.
          </p>

          {/* FAQs Container */}
          <div className="w-full space-y-4">
            {faqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={index}
                  className={`w-full rounded-2xl transition-all duration-300 ${
                    isExpanded
                      ? "border border-[#B5442C] shadow-lg"
                      : "border border-gray-200 shadow-md hover:shadow-lg"
                  }`}
                  style={{
                    background: isExpanded
                      ? "linear-gradient(270deg, #B5442C 0%, #4F1E13 100%)"
                      : "#ffffff",
                  }}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => handleToggle(index)}
                    className={`w-full px-4 py-5 text-left flex justify-between items-center gap-4 font-sans font-bold text-body1 transition-all duration-300 rounded-2xl cursor-pointer ${
                      isExpanded
                        ? "text-white"
                        : "text-[#161616] hover:text-[#B5442C]"
                    }`}
                  >
                    <span className="flex-1 text-left">{faq.question}</span>
                    <span
                      className={`flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                        isExpanded
                          ? "bg-white text-[#B5442C]"
                          : "bg-[#f4d6ce] text-[#B5442C]"
                      }`}
                    >
                      {isExpanded ? (
                        <span className="text-md font-bold">−</span>
                      ) : (
                        <span className="text-md font-bold">+</span>
                      )}
                    </span>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`px-4 transition-all duration-300 overflow-hidden ${
                      isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="">
                      <p
                        className={`font-sans font-normal text-left ${
                          isExpanded ? "text-white pb-5" : "text-[#161616]"
                        }`}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default FAQSection;

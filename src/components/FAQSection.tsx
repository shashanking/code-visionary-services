import React, { useState } from "react";
import SectionContainer from "./shared/SectionContainer";
import ContentContainer from "./shared/ContentContainer";
import faqBg from "../assets/FAQ_bg_image.png";
import { faqs } from "../constants/faqs-data";

const FAQSection: React.FC = () => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([0]);

  const handleToggle = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isExpanded = (index: number) => expandedIndexes.includes(index);

  return (
    <SectionContainer
      id="faq-section"
      fullWidth
      padding="lg"
      className="relative min-h-screen bg-[#fafafa] flex justify-center items-start overflow-hidden"
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
          <div className="w-full space-y-4 md:space-y-6">
            {faqs.map((faq, index) => {
              const expanded = isExpanded(index);

              return (
                <div
                  key={index}
                  className={`w-full rounded-xl md:rounded-2xl transition-all duration-500 ease-in-out backdrop-blur-sm ${
                    expanded
                      ? "border border-[#B5442C] backdrop-blur-md"
                      : "border border-gray-200 backdrop-blur-sm hover:backdrop-blur-md"
                  }`}
                  style={{
                    background: expanded
                      ? "linear-gradient(270deg, #B5442C 0%, #4F1E13 100%)"
                      : "rgba(255, 255, 255, 0.95)",
                    boxShadow: expanded ? "" : "0px 0px 8px 0px #B5442C80",
                  }}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => handleToggle(index)}
                    className={`w-full px-4 py-5 text-left flex justify-between items-center gap-4 font-sans font-bold text-body1 transition-all duration-500 ease-in-out rounded-2xl cursor-pointer ${
                      expanded
                        ? "text-white"
                        : "text-[#161616] hover:text-[#B5442C]"
                    }`}
                  >
                    <span className="flex-1 text-left">{faq.question}</span>
                    <span
                      className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-500 ease-in-out transform ${
                        expanded
                          ? "bg-white text-[#B5442C] rotate-180"
                          : "bg-[#f4d6ce] text-[#B5442C] rotate-0"
                      }`}
                    >
                      {expanded ? (
                        <span className="text-md font-bold transform scale-110">
                          −
                        </span>
                      ) : (
                        <span className="text-md font-bold transform scale-110">
                          +
                        </span>
                      )}
                    </span>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 pb-5">
                      <p
                        className={`font-sans font-normal text-left leading-relaxed transition-all duration-300 delay-100 ${
                          expanded
                            ? "text-white translate-y-0"
                            : "text-[#161616] translate-y-2"
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

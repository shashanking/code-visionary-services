import React, { useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import faqBg from "../../assets/home-page/home-faq-bg.png";
import { useSanityFAQs } from "../../hooks/FAQs/useSanityFaqs";

const FAQSection: React.FC = () => {
  const { faqs, loading, error } = useSanityFAQs();
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([0]);

  const handleToggle = (index: number) => {
    setExpandedIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isExpanded = (index: number) => expandedIndexes.includes(index);

  // Skeleton loader for FAQ items
  const FAQSkeleton = () => (
    <div className="w-full space-y-4 md:space-y-6">
      {[1, 2, 3, 4].map((item) => (
        <div
          key={item}
          className="w-full rounded-xl md:rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-sm animate-pulse"
        >
          <div className="w-full px-4 py-5 flex justify-between items-center gap-4">
            <div className="flex-1">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="w-6 h-6 rounded-full bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <SectionContainer
      id="faq-section"
      fullWidth
      padding="lg"
      className="relative min-h-screen bg-[#fafafa] flex justify-center items-start overflow-hidden z-30"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center bg-fixed"
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
          <div className="w-full">
            {loading ? (
              <FAQSkeleton />
            ) : error ? (
              <div className="text-center text-red-400 py-20">
                <p>Error loading FAQs</p>
                <p className="text-sm mt-2">{error}</p>
              </div>
            ) : faqs.length > 0 ? (
              <div className="space-y-4 md:space-y-6">
                {faqs.map((faq, index) => {
                  const expanded = isExpanded(index);

                  return (
                    <div
                      key={faq.id}
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
                        className={`w-full px-4 py-5 text-left flex justify-between items-center gap-4 font-sans font-bold text-body1 transition-all duration-300 ease-in-out rounded-2xl cursor-pointer ${
                          expanded
                            ? "text-white"
                            : "text-[#161616] hover:text-[#B5442C]"
                        }`}
                      >
                        <span className="flex-1 text-left">{faq.question}</span>
                        <span
                          className={`flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out transform ${
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
                        className={`grid transition-all duration-500 ease-in-out ${
                          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <div className="px-4 pb-5">
                            <p
                              className={`font-sans font-normal text-left leading-relaxed transition-all duration-300 ${
                                expanded
                                  ? "text-white opacity-100 translate-y-0"
                                  : "text-[#161616] opacity-0 translate-y-2"
                              }`}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="text-gray-500 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="font-semibold">No FAQs Available</p>
                </div>
                <p className="text-sm text-gray-600">
                  Check back later for frequently asked questions.
                </p>
              </div>
            )}
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default FAQSection;

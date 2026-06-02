"use client";

import React, { useState } from 'react';
import SectionContainer from '../shared/SectionContainer';
import ContentContainer from '../shared/ContentContainer';

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQ[];
  title?: string;
}

export default function ServiceFAQ({ faqs, title }: ServiceFAQProps) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <SectionContainer background="#F0F0F0" padding="lg">
      <ContentContainer maxWidth="2xl" paddingX="lg">

        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-title-lg uppercase text-[#161616] leading-[1.1] mb-4">
            {title || "Frequently Asked Questions"}
          </h2>
          <p className="font-sans text-body1 text-[#666]">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = active === i;
            return (
              <div key={i} className={`rounded-xl overflow-hidden border transition-all duration-300 ${
                isOpen ? "border-[#B5442C]/40" : "border-[#ddd]"
              }`}>

                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className={`w-full p-5 md:p-6 flex items-center justify-between gap-4 text-left transition-all duration-300 ${
                    isOpen
                      ? "bg-gradient-to-r from-[#B5442C] to-[#4F1E13]"
                      : "bg-white hover:bg-[#fafafa]"
                  }`}
                >
                  <span className={`font-sans font-semibold text-body1 ${isOpen ? "text-white" : "text-[#161616]"}`}>
                    {faq.question}
                  </span>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg transition-all duration-300 ${
                    isOpen ? "bg-white/20 text-white" : "bg-[#B5442C]/10 text-[#B5442C]"
                  }`}>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className={`font-sans text-body2 text-[#555] leading-relaxed overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}>
                  <div className="p-5 md:p-6 bg-white border-t border-[#eee]">
                    {faq.answer}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </ContentContainer>
    </SectionContainer>
  );
}

"use client";

import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";

interface ServiceOverviewProps {
  title: string;
  body: string[];
  bullets: string[];
}

export default function ServiceOverview({ title, body, bullets }: ServiceOverviewProps) {
  return (
    <SectionContainer background="#F0F0F0" padding="lg">
      <ContentContainer maxWidth="7xl" paddingX="lg">

        <h2 className="font-heading font-bold text-title-lg uppercase text-[#161616] leading-[1.1] mb-16 text-center">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

          <div className="flex-1 space-y-5">
            {body.map((para, i) => (
              <p key={i} className="font-sans text-body1 text-[#444] leading-relaxed">{para}</p>
            ))}
          </div>

          <div className="lg:w-[380px] flex-shrink-0">
            <p className="font-sans text-body5 text-[#B5442C] uppercase tracking-widest font-semibold mb-5">
              Key Highlights
            </p>
            <ul className="space-y-4">
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#B5442C] mt-2 flex-shrink-0" />
                  <span className="font-sans text-body1 text-[#333] leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </ContentContainer>
    </SectionContainer>
  );
}

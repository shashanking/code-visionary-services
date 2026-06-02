"use client";

import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import ContentContainer from '../shared/ContentContainer';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface ServiceFeaturesProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
}

export default function ServiceFeatures({ title, subtitle, features }: ServiceFeaturesProps) {
  return (
    <SectionContainer background="#e3e3e3" padding="lg">
      <ContentContainer maxWidth="7xl" paddingX="lg">

        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-title-lg uppercase text-[#161616] leading-[1.1] mb-4">
            {title || "What We Offer"}
          </h2>
          {subtitle && <p className="font-sans text-body1 text-[#666] max-w-xl mx-auto">{subtitle}</p>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-2xl p-7 bg-white border border-[#B5442C]/15
              hover:border-[#B5442C]/50 hover:shadow-[0px_0px_24px_0px_#B5442C15]
              transition-all duration-300 overflow-hidden cursor-default">

              <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#B5442C] to-[#4F1E13]
                w-0 group-hover:w-full transition-all duration-500" />

              <span className="text-4xl mb-5 block">{f.icon}</span>
              <h3 className="font-sans font-semibold text-title-sm text-[#161616] group-hover:text-[#B5442C]
                transition-colors duration-300 mb-2">
                {f.title}
              </h3>
              <p className="font-sans text-body2 text-[#666] leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

      </ContentContainer>
    </SectionContainer>
  );
}

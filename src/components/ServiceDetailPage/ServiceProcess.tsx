"use client";

import React from 'react';
import SectionContainer from '../shared/SectionContainer';
import ContentContainer from '../shared/ContentContainer';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: ProcessStep[];
  title?: string;
}

export default function ServiceProcess({ steps, title }: ServiceProcessProps) {
  return (
    <SectionContainer background="#161616" padding="lg" className="relative overflow-hidden">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px]
        bg-[#B5442C]/8 blur-[120px] rounded-full pointer-events-none" />

      <ContentContainer maxWidth="7xl" paddingX="lg" className="relative z-10">

        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-title-lg uppercase text-white leading-[1.1] mb-4">
            {title || "How We Work"}
          </h2>
          <p className="font-sans text-body1 text-white/40 max-w-xl mx-auto">
            A transparent, structured process that keeps you in control at every stage.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="absolute top-8 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)]
            h-px bg-gradient-to-r from-transparent via-[#B5442C]/40 to-transparent
            hidden lg:block" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4">

              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#B5442C] to-[#4F1E13]
                flex items-center justify-center mb-6 relative z-10
                shadow-[0px_0px_20px_#B5442C50]">
                <span className="font-heading font-bold text-white text-title-sm">{step.number}</span>
              </div>

              <h3 className="font-heading font-bold text-white uppercase text-title-sm mb-3 leading-[1.1]">
                {step.title}
              </h3>
              <p className="font-sans text-body2 text-white/45 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </ContentContainer>
    </SectionContainer>
  );
}

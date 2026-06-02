"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import SectionContainer from '../shared/SectionContainer';
import ContentContainer from '../shared/ContentContainer';
import { CTAButton } from '../shared';

interface ServiceCTABannerProps {
  serviceName: string;
}

export default function ServiceCTABanner({ serviceName }: ServiceCTABannerProps) {
  const router = useRouter();

  return (
    <SectionContainer background="#161616" padding="lg" className="relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-[#B5442C] via-[#7a2510] to-[#4F1E13] pointer-events-none" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#FF9C8720,transparent_60%)] pointer-events-none" />

      <ContentContainer maxWidth="2xl" paddingX="lg" className="relative z-10 text-center">

        <h2 className="font-heading font-bold text-title-lg uppercase text-white leading-[1.1] mb-4">
          Ready to Build Your {serviceName} Solution?
        </h2>
        <p className="font-sans text-body1 text-white/70 max-w-lg mx-auto mb-10">
          Let's turn your idea into a live product. Get a free consultation from our expert team today.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <CTAButton size="small" showIcon={false}
            className="bg-white text-[#B5442C] font-semibold hover:bg-[#fff5f3] shadow-lg transition-all duration-300"
            onClick={() => router.push("/contact")}>
            Get a Free Quote
          </CTAButton>
          <CTAButton size="small" showIcon={false}
            className="bg-transparent border border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            onClick={() => router.push("/contact")}>
            Schedule a Call
          </CTAButton>
        </div>

      </ContentContainer>
    </SectionContainer>
  );
}

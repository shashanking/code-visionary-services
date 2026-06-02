"use client";

import React from "react";
import { useRouter } from "next/navigation";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import { CTAButton } from "../shared";

interface ServiceHeroProps {
  heading: string;
  description: string;
  stats?: Array<{ value: string; label: string }>;
}

const DEFAULT_STATS = [
  { value: "50+", label: "Projects Shipped" },
  { value: "6+", label: "Years Active" },
  { value: "100%", label: "Code Ownership" },
  { value: "24/7", label: "Support" },
];

export default function ServiceHero({ heading, description, stats }: ServiceHeroProps) {
  const router = useRouter();

  return (
    <SectionContainer id="service-hero" fullWidth padding="none" background="#161616" className="relative overflow-hidden">

      <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-[#B5442C]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[350px] h-[300px] bg-[#B5442C]/5 rounded-full blur-[100px] pointer-events-none" />

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col items-center justify-center text-center pt-32 pb-20 min-h-[60vh]"
      >
        <span className="font-sans text-body5 text-white/40 uppercase tracking-[0.3em] mb-8 block">
          Services
        </span>

        <h1 className="font-heading font-bold text-title-2xl uppercase leading-[1.1] text-white mb-6">
          {heading.split("|").map((part, i) =>
            i % 2 === 1 ? (
              <span key={i} className="bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent">
                {part}
              </span>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
        </h1>

        <p className="font-sans text-body1 text-white/60 max-w-xl leading-relaxed mb-10">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <CTAButton
            size="small"
            showIcon={false}
            className="bg-gradient-to-r from-[#B5442C] to-[#4F1E13] text-white shadow-[0px_0px_14px_0px_#B5442C80] hover:shadow-[0px_0px_24px_0px_#B5442C] transition-all duration-300"
            onClick={() => router.push("/contact")}
          >
            Get a Free Quote
          </CTAButton>
          <CTAButton
            size="small"
            showIcon={false}
            className="bg-transparent border border-white/20 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            onClick={() => router.push("/portfolio")}
          >
            View Our Work
          </CTAButton>
        </div>
      </ContentContainer>

      <div className="relative z-10 w-full border-t border-white/10 bg-black/30">
        <ContentContainer maxWidth="7xl" paddingX="lg" className="py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {(stats || DEFAULT_STATS).map((s, i) => (
              <div key={i}>
                <div className="font-heading font-bold text-title-sm text-[#FF9C87]">{s.value}</div>
                <div className="font-sans text-body5 text-white/40 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </ContentContainer>
      </div>

    </SectionContainer>
  );
}

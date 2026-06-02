"use client";

import React from "react";
import { useRouter } from "next/navigation";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import { CTAButton } from "../shared";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceLandingPageProps {
  heading: string;
  subheading: string;
  description: string;
  features: ServiceFeature[];
  techStack: string[];
  whyUsPoints: string[];
  ctaText?: string;
}

const ServiceLandingPage: React.FC<ServiceLandingPageProps> = ({
  heading,
  subheading,
  description,
  features,
  techStack,
  whyUsPoints,
  ctaText = "Get a Free Quote",
}) => {
  const router = useRouter();

  return (
    <div className="bg-[#e3e3e3] min-h-screen">
      {/* Hero */}
      <SectionContainer
        id="service-hero"
        fullWidth
        padding="none"
        background="#161616"
        className="relative min-h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#161616] via-[#2a0e07] to-[#161616] opacity-95" />
        <ContentContainer
          maxWidth="2xl"
          paddingX="lg"
          className="relative z-10 py-24 flex flex-col items-center text-center"
        >
          <h1 className="font-heading font-bold text-title-2xl uppercase leading-[1.1] mb-6 text-white">
            {heading.split("|").map((part, i) =>
              i % 2 === 1 ? (
                <span
                  key={i}
                  className="bg-gradient-to-r from-[#B5442C] to-[#f07a5e] bg-clip-text text-transparent"
                >
                  {part}
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </h1>
          <p className="text-[#c9c9c9] text-body1 max-w-xl leading-relaxed mb-8">
            {subheading}
          </p>
          <CTAButton
            size="small"
            showIcon={false}
            className="bg-gradient-to-r from-[#B5442C] to-[#4F1E13] text-white shadow-[0px_0px_12px_0px_#B5442C] hover:shadow-[0px_0px_20px_0px_#B5442C] transition-all duration-300"
            onClick={() => router.push("/contact")}
          >
            {ctaText}
          </CTAButton>
        </ContentContainer>
      </SectionContainer>

      {/* About the service */}
      <SectionContainer id="service-about" padding="lg" background="#f0f0f0">
        <ContentContainer maxWidth="2xl" paddingX="lg" className="py-16">
          <p className="text-body1 text-[#333] leading-relaxed text-center max-w-2xl mx-auto">
            {description}
          </p>
        </ContentContainer>
      </SectionContainer>

      {/* Features */}
      <SectionContainer id="service-features" padding="lg" background="#e3e3e3">
        <ContentContainer maxWidth="7xl" paddingX="lg" className="py-16">
          <h2 className="font-heading font-bold text-title-lg uppercase text-[#161616] text-center mb-12 leading-[1.1]">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#B5442C]/20 hover:border-[#B5442C]/60 transition-all duration-300"
              >
                <h3 className="font-sans font-semibold text-title-sm text-[#161616] mb-2">
                  {f.title}
                </h3>
                <p className="text-body2 text-[#555] leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </ContentContainer>
      </SectionContainer>

      {/* Tech Stack */}
      <SectionContainer id="service-tech" padding="lg" background="#f0f0f0">
        <ContentContainer maxWidth="2xl" paddingX="lg" className="py-16 text-center">
          <h2 className="font-heading font-bold text-title-lg uppercase text-[#161616] mb-10 leading-[1.1]">
            Technologies We Use
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-white border border-[#B5442C]/30 rounded-full text-sm text-[#333] font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </ContentContainer>
      </SectionContainer>

      {/* Why Us */}
      <SectionContainer id="service-why" padding="lg" background="#161616">
        <ContentContainer maxWidth="2xl" paddingX="lg" className="py-16">
          <h2 className="font-heading font-bold text-title-lg uppercase text-white text-center mb-10 leading-[1.1]">
            Why Choose Code Visionary Services?
          </h2>
          <ul className="space-y-4 max-w-xl mx-auto">
            {whyUsPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-[#c9c9c9] text-body1">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#B5442C] flex-shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </ContentContainer>
      </SectionContainer>

      {/* CTA Banner */}
      <SectionContainer id="service-cta" padding="lg" background="#B5442C">
        <ContentContainer maxWidth="2xl" paddingX="lg" className="py-16 flex flex-col items-center text-center gap-6">
          <h2 className="font-heading font-bold text-title-lg uppercase text-white leading-[1.1]">
            Ready to Build Something Great?
          </h2>
          <p className="text-white/80 text-body1 max-w-md">
            Let's talk about your project. Get a free consultation with our team today.
          </p>
          <CTAButton
            size="small"
            showIcon={false}
            className="bg-white text-[#B5442C] font-semibold hover:bg-[#f5e8e5] transition-all duration-300"
            onClick={() => router.push("/contact")}
          >
            Contact Us Now
          </CTAButton>
        </ContentContainer>
      </SectionContainer>
    </div>
  );
};

export default ServiceLandingPage;

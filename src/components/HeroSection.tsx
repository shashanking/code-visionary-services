import React, { useState, useEffect } from "react";
import { CTAButton } from "./shared";
import heroBg1 from "../assets/hero/hero-bg-1.png";
import heroBg2 from "../assets/hero/hero-bg-2.png";
import heroBg3 from "../assets/hero/hero-bg-3.png";
import heroBg4 from "../assets/hero/hero-bg-4.png";
import arrowImg from "../assets/mingcute_arrow-up-line.png";
import { services } from "../constants/hero-section-data";

const heroBackgrounds = [heroBg1, heroBg2, heroBg3, heroBg4];

// Service Card Component (unchanged)
const ServiceCard: React.FC<{
  service: { img: string; label: string; description: string };
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ service, isHovered, onHover, onLeave }) => {
  return (
    <div
      className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-lg transition-all duration-400 ease-out hover:scale-102 aspect-[4/3] min-h-[200px]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 z-20 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <img
          src={arrowImg}
          alt=""
          className="w-5 h-5 invert"
          aria-hidden="true"
        />
      </div>

      <img
        src={service.img}
        alt={service.label}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-400 ease-out ${
          isHovered ? "grayscale-0 scale-105" : "grayscale scale-100"
        }`}
        loading="lazy"
      />

      <div
        className={`absolute inset-0 transition-all duration-250 ease-in ${
          isHovered
            ? "bg-gradient-to-b from-black/40 to-black/95"
            : "bg-gradient-to-b from-black/10 via-black/40 to-black/90"
        }`}
      />

      <div className="absolute bottom-0 left-0 w-full z-10 p-4 md:p-6">
        <h3
          className={`text-white font-sans transition-all duration-350 ease-in-out ${
            isHovered
              ? "font-bold -translate-y-2 text-lg md:text-xl lg:text-2xl"
              : "font-semibold text-base md:text-lg lg:text-xl"
          }`}
        >
          {service.label}
        </h3>
        <p
          className={`text-white transition-all duration-350 ease-in-out ${
            isHovered ? "opacity-95 max-h-32 mt-2" : "opacity-0 max-h-0"
          } text-sm md:text-base leading-relaxed`}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
};

const MinMaxServicesGrid: React.FC<{
  services: Array<{ img: string; label: string; description: string }>;
  hoverIdx: number | null;
  setHoverIdx: (index: number | null) => void;
}> = ({ services, hoverIdx, setHoverIdx }) => {
  // Safer minmax implementation with media queries
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(255px,1fr))] xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 sm:gap-4 lg:gap-6 w-full mx-auto">
      {services.map((service, idx) => (
        <ServiceCard
          key={service.label}
          service={service}
          isHovered={hoverIdx === idx}
          onHover={() => setHoverIdx(idx)}
          onLeave={() => setHoverIdx(null)}
        />
      ))}
    </div>
  );
};

// Main HeroSection Component
const HeroSection: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(
        (prevIndex) => (prevIndex + 1) % heroBackgrounds.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative left-1/2 transform -translate-x-1/2 w-screen min-h-[120vh] overflow-hidden flex flex-col items-center justify-center text-center py-6 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 md:py-10">
      {/* Background Images */}
      {heroBackgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-2000 ease-in-out z-0 ${
            currentBgIndex === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${bg})` }}
          aria-hidden="true"
        />
      ))}

      {/* Content */}
      <div className="relative z-10 w-full mx-auto">
        {/* Hero Text */}
        <div className="w-full mx-auto mb-2 mt-20 md:mt-30 font-heading font-medium text-title-xl leading-[1.08]">
          <h1 className="text-gray-800 mb-4">
            INNOVATIVE{" "}
            <span className="inline-block bg-gradient-to-r from-[#4F1E13] to-[#B5442C] bg-clip-text text-transparent">
              DIGITAL SOLUTIONS,
            </span>
          </h1>

          <h1 className="text-gray-800 mb-6">BUILT FOR IMPACT</h1>
        </div>

        <p className="font-sans font-normal text-body1 text-gray-800 max-w-[1000px] mx-auto mb-8 leading-[30px]">
          At Code Visionary Services, we craft high-performance websites,
          software, and visual identities that elevate your brand and drive
          results. From code to creativity, we turn your ideas into powerful
          digital experiences.
        </p>

        <div className="flex justify-center">
          <CTAButton variant="secondary" size="large">
            Start a Project
          </CTAButton>
        </div>

        {/* Services Section */}
        <div className="mt-40 w-full relative">
          {/* Services Heading */}
          <h2 className="absolute w-full -top-22 left-1/2 transform -translate-x-1/2 leading-[1] font-heading font-semibold text-center bg-gradient-to-b from-[#0861AA] to-[#0861AA00] bg-clip-text text-transparent opacity-50 md:opacity-35 xl:opacity-25 pointer-events-none text-[52px] sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[140px]">
            OUR SERVICES
          </h2>

          <div className="relative mt-20">
            <MinMaxServicesGrid
              services={services}
              hoverIdx={hoverIdx}
              setHoverIdx={setHoverIdx}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

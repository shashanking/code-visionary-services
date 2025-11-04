import React, { useState, useEffect } from "react";
import { CTAButton } from "../shared";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import heroBg1 from "../../assets/hero/hero-bg-1.png";
import heroBg2 from "../../assets/hero/hero-bg-2.png";
import heroBg3 from "../../assets/hero/hero-bg-3.png";
import heroBg4 from "../../assets/hero/hero-bg-4.png";
import arrowImg from "../../assets/home-page/arrow-up-icon.png";
import { useNavigate } from "react-router-dom";
import { useSanityHeroServices } from "../../hooks/Services/useSanityServices";

const heroBackgrounds = [heroBg1, heroBg2, heroBg3, heroBg4];

const ServiceCard: React.FC<{
  service: { image: string; label: string; description: string };
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}> = ({ service, isHovered, onHover, onLeave }) => {
  const navigate = useNavigate();
  const handleServiceClick = () => {
    navigate(`/services`);
  };

  return (
    <div
      className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-lg transition-all duration-400 ease-out hover:scale-102 aspect-[4/3] min-h-[200px]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div
        className={`absolute top-3 right-3 w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 z-20 cursor-pointer ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
        onClick={handleServiceClick}
      >
        <img
          src={arrowImg}
          alt=""
          className="w-5 h-5 invert"
          aria-hidden="true"
        />
      </div>

      <img
        src={service.image}
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
          className={`text-white font-heading transition-all duration-350 ease-in-out ${
            isHovered
              ? "font-bold -translate-y-2 text-body1"
              : "font-semibold text-body1"
          }`}
        >
          {service.label}
        </h3>
        <p
          className={`text-white transition-all duration-350 ease-in-out ${
            isHovered ? "opacity-95 max-h-32 mt-2" : "opacity-0 max-h-0"
          } text-body2 leading-relaxed`}
        >
          {service.description}
        </p>
      </div>
    </div>
  );
};

const ServicesGrid: React.FC<{
  services: Array<{ image: string; label: string; description: string }>;
  hoverIdx: number | null;
  setHoverIdx: (index: number | null) => void;
}> = ({ services, hoverIdx, setHoverIdx }) => {
  const getGridConfig = () => {
    const count = services.length;
    if (count === 6) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    if (count === 8) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  };

  return (
    <div
      className={`grid ${getGridConfig()} gap-3 sm:gap-4 md:gap-6 lg:gap-6 w-full max-w-2xl mx-auto`}
    >
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

const HeroSection: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  const navigate = useNavigate();
  const handleCtaClick = () => {
    navigate(`/contact`);
  };

  const { services, loading, error } = useSanityHeroServices(8);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex(
        (prevIndex) => (prevIndex + 1) % heroBackgrounds.length
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 p-10 py-40">
        {[...Array(8)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 animate-pulse rounded-lg h-80"
          />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-10 py-40">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            Error Loading Services
          </h3>
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <SectionContainer
      id="home"
      fullWidth
      padding="lg"
      className="min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
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

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-center"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-center items-center">
          <div className="w-full max-w-2xl flex flex-col justify-center items-center mb-16">
            <h1 className="font-heading font-bold text-title-2xl text-center uppercase text-[#161616] leading-[1.1]">
              INNOVATIVE{" "}
              <span className="inline-block bg-gradient-to-r from-[#4F1E13] to-[#B5442C] bg-clip-text text-transparent">
                DIGITAL SOLUTIONS,
              </span>{" "}
              BUILT FOR IMPACT
            </h1>
          </div>

          <p className="font-sans font-normal text-body1 text-gray-800 max-w-lg mx-auto mb-10 leading-[1.5]">
            At Code Visionary Services, we craft high-performance websites,
            software, and visual identities that elevate your brand and drive
            results. From code to creativity, we turn your ideas into powerful
            digital experiences.
          </p>

          <div className="flex justify-center">
            <CTAButton
              variant="secondary"
              size="large"
              onClick={handleCtaClick}
            >
              Start a Project
            </CTAButton>
          </div>

          {/* Services Section */}
          <div className="mt-40 w-full relative">
            <h2 className="absolute w-full -top-22 left-1/2 transform -translate-x-1/2 leading-[1] font-heading font-semibold text-center bg-gradient-to-b from-[#0861AA] to-[#0861AA00] bg-clip-text text-transparent opacity-50 md:opacity-35 xl:opacity-50 pointer-events-none text-[52px] sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[140px]">
              OUR SERVICES
            </h2>

            <ServicesGrid
              services={services}
              hoverIdx={hoverIdx}
              setHoverIdx={setHoverIdx}
            />
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroSection;

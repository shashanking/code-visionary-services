import React, { useState, useEffect, useMemo } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import bgImg from "../../assets/home-page/tech-stack/tech-stack-bg.png";
import { useSanityTechStack } from "../../hooks/TechStack/useSanityTechStack";

const TechStackSection: React.FC = () => {
  const { categories, technologies, loading, error } = useSanityTechStack();
  const [activeTag, setActiveTag] = useState<string>("");

  // Transform data to match your existing structure
  const { techTags, tagToTechs, mainTechs } = useMemo(() => {
    // Transform categories to techTags
    const techTags = categories.map((cat) => ({
      label: cat.name,
      highlighted: cat.highlighted,
    }));

    // Transform technologies to mainTechs
    const mainTechs = technologies.map((tech) => ({
      label: tech.name,
      img: tech.image,
      highlighted: tech.highlighted,
    }));

    // Create tagToTechs mapping
    const tagToTechs: Record<string, string[]> = {};
    technologies.forEach((tech) => {
      if (tech.category.name) {
        if (!tagToTechs[tech.category.name]) {
          tagToTechs[tech.category.name] = [];
        }
        tagToTechs[tech.category.name].push(tech.name);
      }
    });

    return { techTags, tagToTechs, mainTechs };
  }, [categories, technologies]);

  // Set default active tag when data loads
  useEffect(() => {
    if (categories.length > 0 && !activeTag) {
      // Try to find a highlighted category first, otherwise use the first one
      const highlightedCategory = categories.find((cat) => cat.highlighted);
      setActiveTag(
        highlightedCategory ? highlightedCategory.name : categories[0].name
      );
    }
  }, [categories, activeTag]);

  // Filter technologies based on active tag
  const visibleTechs = useMemo(() => {
    if (!activeTag) return [];

    return mainTechs.filter((t) =>
      (tagToTechs[activeTag] || []).includes(t.label)
    );
  }, [mainTechs, activeTag, tagToTechs]);

  // Auto-rotate selected chip (only on desktop)
  useEffect(() => {
    if (techTags.length === 0) return;

    const interval = setInterval(() => {
      const currentIdx = techTags.findIndex((t) => t.label === activeTag);
      const nextIdx = (currentIdx + 1) % techTags.length;
      setActiveTag(techTags[nextIdx].label);
    }, 4000);

    return () => clearInterval(interval);
  }, [activeTag, techTags]);

  // Loading state
  if (loading) {
    return (
      <SectionContainer
        id="services"
        fullWidth
        padding="none"
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#b44a2c] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading technologies...</p>
        </div>
      </SectionContainer>
    );
  }

  // Error state
  if (error) {
    return (
      <SectionContainer
        id="services"
        fullWidth
        padding="none"
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
      >
        <div className="text-center text-red-600">
          <p>Error loading technologies: {error}</p>
        </div>
      </SectionContainer>
    );
  }

  // No data state
  if (categories.length === 0 || technologies.length === 0) {
    return (
      <SectionContainer
        id="services"
        fullWidth
        padding="none"
        className="relative min-h-screen overflow-hidden flex items-center justify-center"
      >
        <div className="text-center text-gray-600">
          <p>No technology data found.</p>
          <p className="text-sm">
            Please add categories and technologies in Sanity Studio.
          </p>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer
      id="services"
      fullWidth
      padding="none"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Desktop Background */}
        <div
          className="hidden md:block w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        {/* Mobile Background (rotated) */}
        <div
          className="md:hidden mobile-bg-rotate"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full min-h-[100vh] py-16 md:py-20"
      >
        <div className="flex flex-col md:flex-row items-stretch justify-between w-full max-w-2xl mx-auto gap-10">
          {/* Left: Tech Grid */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center self-start md:self-center h-138 xs:h-100 md:h-full">
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full max-w-2xl">
              {visibleTechs.map(({ label, img, highlighted }) => (
                <div
                  key={label}
                  className={`
                    rounded-2xl shadow-lg cursor-pointer transition-all duration-300 
                    w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40
                    flex flex-col items-center justify-center p-3 flex-shrink-0
                    ${
                      highlighted
                        ? "bg-gradient-to-br from-[#b44a2c] to-[#882f1a] text-white shadow-2xl shadow-orange-900/30"
                        : "bg-white text-[#143255] border-2 border-gray-100 hover:shadow-xl"
                    }
                  `}
                >
                  {img ? (
                    <img
                      src={img}
                      alt={label}
                      className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain`}
                    />
                  ) : (
                    <div
                      className={`
                        w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full 
                        flex items-center justify-center font-montserrat font-bold 
                        uppercase tracking-wider text-xs sm:text-sm
                        ${
                          highlighted
                            ? "bg-white/20 text-white"
                            : "bg-gray-100 text-[#143255]"
                        }
                      `}
                    >
                      {label
                        .split(" ")
                        .map((w) => w[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  )}
                  <div
                    className={`font-sans font-bold text-center mt-2 ${
                      highlighted ? "text-white" : "text-[#143255]"
                    } text-xs sm:text-sm md:text-base leading-tight`}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content Section*/}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left self-end md:self-center md:pl-25">
            <h1 className="font-heading font-bold text-title-md text-center md:text-left uppercase mb-6 leading-tight max-w-xs md:max-w-sm">
              <span className="text-[#b44a2c]">TECHNOLOGIES</span>{" "}
              <span className="text-[#161616]">WE</span>{" "}
              <span className="text-[#161616] inline-block">WORK WITH</span>
            </h1>

            <p className="font-sans font-normal text-body1 text-[#3C4454] leading-[1.5] mb-10 text-center md:text-left">
              At CVS, we stay ahead of the curve by using the latest technology
              to ensure your success. Our experts leverage the most powerful
              tools and frameworks to deliver high-performing, future-proof
              digital solutions.
            </p>

            <div className="w-full max-w-lg flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
              {techTags.map(({ label, highlighted }) => (
                <button
                  key={label}
                  onClick={() => setActiveTag(label)}
                  className={`
                    px-4 py-2 rounded-full font-montserrat font-semibold text-sm md:text-base 
                    transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0
                    ${
                      activeTag === label
                        ? "bg-[#232323] text-white shadow-lg border border-transparent"
                        : highlighted
                        ? "bg-[#b44a2c] text-white border border-transparent hover:bg-[#a43a1c]"
                        : "text-[#161616] border border-[#161616]/35 hover:bg-[#b44a2c] hover:text-white hover:border-transparent"
                    }
                  `}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default TechStackSection;

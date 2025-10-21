import React, { useState, useEffect } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import PortfolioPageBg from "../../assets/portfolio-page/hero-bg.jpg";
import {
  categories,
  portfolioItems,
  type PortfolioItem,
} from "../../constants/portfolio-section-data";

interface PortfolioCardProps {
  item: PortfolioItem;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  onClick: () => void;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  hoverIdx: number | null;
  setHoverIdx: (index: number | null) => void;
  onItemClick: (url: string) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  item,
  isHovered,
  onHover,
  onLeave,
  onClick,
}) => {
  return (
    <div
      className="relative bg-white rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-400 ease-out hover:scale-102 aspect-[4/3] min-h-[200px] group"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Background Image */}
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-400 ease-out scale-100 group-hover:scale-105"
        loading="lazy"
      />

      {/* Background Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-500 ease-in-out overflow-hidden ${
          isHovered ? "border-2 border-[#FEA656] rounded-2xl shadow-md" : ""
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/80" />

        <div
          className={`absolute w-full h-full transition-all duration-700 ease-in-out ${
            isHovered
              ? "bg-gradient-to-b from-black/0 via-black/70 to-black/95 transform translate-y-0"
              : "bg-gradient-to-b from-black/10 via-black/30 to-black/80 transform translate-y-full"
          }`}
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full z-10 p-4 md:p-6">
        <h3
          className={`text-body text-white text-left max-w-20 font-heading transition-all duration-350 ease-in-out uppercase tracking-wider ${
            isHovered ? "font-bold -translate-y-2 " : "font-semibold"
          }`}
        >
          {item.title}
        </h3>
        <p
          className={`text-white text-left font-sans transition-all duration-350 ease-in-out ${
            isHovered && item.description
              ? "opacity-95 max-h-32 mt-2"
              : "opacity-0 max-h-0"
          } text-body2 leading-relaxed`}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
};

const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  items,
  hoverIdx,
  setHoverIdx,
  onItemClick,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 w-full max-w-2xl mx-auto">
      {items.map((item, idx) => (
        <PortfolioCard
          key={item.title}
          item={item}
          isHovered={hoverIdx === idx}
          onHover={() => setHoverIdx(idx)}
          onLeave={() => setHoverIdx(null)}
          onClick={() => onItemClick(item.url)}
        />
      ))}
    </div>
  );
};

const HeroPortfolioPage: React.FC = () => {
  const [currentGradientIndex, setCurrentGradientIndex] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeCat, setActiveCat] = useState<string>("All");

  const gradientColors = [
    "from-[#F23232] to-[#FEA656]",
    "from-[#FEA656] to-[#CCF232]",
    "from-[#CCF232] to-[#63FE56]",
    "from-[#63FE56] to-[#32F2D0]",
    "from-[#32F2D0] to-[#5685FE]",
    "from-[#5685FE] to-[#C032F2]",
    "from-[#C032F2] to-[#FE56BB]",
    "from-[#FE56BB] to-[#FF4848]",
  ];

  const visibleItems =
    activeCat === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCat);

  const handleItemClick = (url: string) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradientIndex((prevIndex) =>
        prevIndex === gradientColors.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, [gradientColors.length]);

  return (
    <SectionContainer
      id="portfolio-hero"
      fullWidth
      padding="lg"
      background="#e3e3e3"
      className="relative min-h-[55vh] overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${PortfolioPageBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0]/0 via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-center items-center text-center"
      >
        <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center">
          <h1
            className={`font-heading font-bold text-title-5xl text-center uppercase mb-6 bg-gradient-to-r ${gradientColors[currentGradientIndex]} bg-clip-text text-transparent leading-[1.1] transition-colors duration-2000`}
          >
            OUR PROJECTS
          </h1>
        </div>
      </ContentContainer>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10 flex flex-col justify-start items-center text-center min-h-screen bg-transparent"
      >
        <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center">
          {/* Category Pills */}
          <div className="w-full max-w-lg mr-auto mb-10">
            <div className="flex flex-wrap items-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveCat(cat.label)}
                  className={`
                    px-4 py-1 md:px-8 md:py-2 rounded-full font-sans text-body2 
                    transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0
                    min-h-[30px] flex items-center justify-center
                    ${
                      activeCat === cat.label
                        ? "bg-[#161616] text-white shadow-sm border border-[#161616]"
                        : "bg-transparent text-[#303030] hover:bg-[#161616] hover:text-white border border-[#161616]"
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <PortfolioGrid
            items={visibleItems}
            hoverIdx={hoveredIdx}
            setHoverIdx={setHoveredIdx}
            onItemClick={handleItemClick}
          />
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroPortfolioPage;

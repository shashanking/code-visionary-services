import React, { useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import bgImg from "../../assets/portfolio_bg_image.png";
import {
  categories,
  portfolioItems,
} from "../../constants/portfolio-section-data";

interface PortfolioItem {
  title: string;
  img: string;
  url: string;
  description: string;
  category: string;
}

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
      className="relative bg-white rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer shadow-lg transition-all duration-400 ease-out hover:scale-102 aspect-[4/3] min-h-[200px]"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {/* Background Image */}
      <img
        src={item.img}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-400 ease-out scale-100 hover:scale-105"
        loading="lazy"
      />

      {/* Background Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-250 ease-in ${
          isHovered
            ? "bg-gradient-to-b from-black/40 to-black/95"
            : "bg-gradient-to-b from-black/10 via-black/40 to-black/90"
        }`}
      />

      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 w-full z-10 p-4 md:p-6">
        <h3
          className={`text-white max-w-20 font-heading transition-all duration-350 ease-in-out uppercase tracking-wider ${
            isHovered
              ? "font-bold -translate-y-2 text-body1"
              : "font-semibold text-body1"
          }`}
        >
          {item.title}
        </h3>
        <p
          className={`text-white font-sans transition-all duration-350 ease-in-out ${
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 max-w-2xl mx-auto min-h-[30vh] lg:min-h-[50vh]">
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

const PortfolioSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeCat, setActiveCat] = useState<string>("All");

  const visibleItems =
    activeCat === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCat);

  const handleItemClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <SectionContainer
      id="portfolio"
      fullWidth
      // background="#F0F0F0"
      padding="lg"
      className="overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer maxWidth="7xl" paddingX="lg">
        <h2 className="font-heading text-title-md font-bold uppercase leading-tight mb-6 text-center bg-gradient-to-b from-[#0861AA] to-[#032744] bg-clip-text text-transparent">
          OUR WORK
        </h2>

        {/* Category Pills */}
        <div className="w-full max-w-lg mx-auto mt-6 md:mt-8 mb-8 md:mb-12">
          <div className="bg-[#0861AA1A] rounded-xl lg:rounded-full px-3 py-3 md:px-2 md:py-2 lg:py-1.5 flex items-center gap-2 md:gap-4 w-full">
            <div className="flex flex-wrap items-center gap-2 md:gap-3 flex-1">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setActiveCat(cat.label)}
                  className={`
                    px-4 py-1 md:px-6 md:py-1 rounded-full font-sans text-sm md:text-base 
                    transition-all duration-200 cursor-pointer whitespace-nowrap flex-shrink-0
                    min-h-[30px] flex items-center justify-center
                    ${
                      activeCat === cat.label
                        ? "bg-[#B5442C] font-medium text-white shadow-sm"
                        : "bg-transparent text-[#303030] hover:bg-[#B5442C] hover:text-white"
                    }
                  `}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* VIEW ALL button - fixed on the right */}
            <div className="flex-shrink-0">
              <button className="px-6 py-1 md:px-8 md:py-1 rounded-full font-bold font-heading text-sm md:text-base text-white bg-[#212A36] hover:bg-[#B5442C] transition-all duration-200 cursor-pointer whitespace-nowrap min-h-[30px] flex items-center justify-center shadow-sm">
                VIEW ALL
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <PortfolioGrid
          items={visibleItems}
          hoverIdx={hoveredIdx}
          setHoverIdx={setHoveredIdx}
          onItemClick={handleItemClick}
        />
      </ContentContainer>
    </SectionContainer>
  );
};

export default PortfolioSection;

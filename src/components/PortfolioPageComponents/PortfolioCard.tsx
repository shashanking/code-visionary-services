import React from "react";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { PortfolioItem } from "../../types/portfolio-data";

interface PortfolioCardProps {
    portfolio: PortfolioItem;
    isHovered?: boolean;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
    portfolio,
    isHovered: externalIsHovered,
    onMouseEnter,
    onMouseLeave,
}) => {
    const navigate = useNavigate();
    const [internalIsHovered, setInternalIsHovered] = React.useState(false);

    const isHovered =
        externalIsHovered !== undefined ? externalIsHovered : internalIsHovered;

    const handleMouseEnter = () => {
        setInternalIsHovered(true);
        onMouseEnter?.();
    };

    const handleMouseLeave = () => {
        setInternalIsHovered(false);
        onMouseLeave?.();
    };

    const handlePortfolioClick = (slug: string) => {
        navigate(`/portfolio/${slug}`);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`relative w-full h-full p-3 rounded-2xl overflow-hidden transition-all duration-300 border border-[#B5442C]`}
            style={{
                background: isHovered
                    ? "linear-gradient(270deg, #B5442C 0%, #4F1E13 100%)"
                    : "#F0F0F0",
                boxShadow: "0px 0px 8px 0px #B5442C80",
            }}
        >
            <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
                <img
                    src={portfolio.image}
                    alt={portfolio.title}
                    className="w-full h-full object-cover transition-all duration-400 ease-out"
                    loading="lazy"
                />

                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handlePortfolioClick(portfolio.slug);
                    }}
                    className={`absolute bottom-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isHovered
                            ? "bg-[#f0f0f0] text-[#B5442C] hover:bg-[#B5442C] hover:text-[#f0f0f0] border border-[#B5442C] -rotate-45 cursor-pointer"
                            : "bg-[#B5442C] text-[#f0f0f0] hover:bg-[#f0f0f0] hover:text-[#B5442C] border border-[#B5442C]"
                        }`}
                    title={`View ${portfolio.title}`}
                >
                    <ArrowRightIcon />
                </button>
            </div>

            <div
                className={`relative flex flex-col justify-between text-left transition-opacity duration-300 ${isHovered ? "text-[#f0f0f0]" : "text-[#000000]"
                    }`}
            >
                <p className="text-body5 font-sans leading-[1.5] my-3">
                    {new Date(portfolio.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                    })}{" "}
                    {portfolio.category && `| ${portfolio.category}`}
                </p>

                <h3 className="text-body1 font-sans font-semibold mb-3 line-clamp-2">
                    {portfolio.title}
                </h3>

                <p className="text-body3 font-sans line-clamp-6">{portfolio.description}</p>
            </div>
        </div>
    );
};

export default PortfolioCard;

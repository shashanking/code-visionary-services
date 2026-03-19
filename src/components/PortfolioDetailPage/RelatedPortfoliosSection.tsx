import React, { useEffect, useState } from "react";
import type { PortfolioItem } from "../../types/portfolio-data";
import { sanityPortfolioService } from "../../services/PortfolioService/sanityPortfolioService";
import PortfolioCard from "../PortfolioPageComponents/PortfolioCard";
import { Link } from "react-router-dom";
import ContentContainer from "../shared/ContentContainer";

interface RelatedPortfoliosSectionProps {
    currentPortfolioId: string;
}

const RelatedPortfoliosSection: React.FC<RelatedPortfoliosSectionProps> = ({
    currentPortfolioId,
}) => {
    const [relatedPortfolios, setRelatedPortfolios] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRelatedPortfolios = async () => {
            try {
                const portfolios = await sanityPortfolioService.getFeaturedPortfolios(4);
                const filtered = portfolios
                    .filter((portfolio) => portfolio.id !== currentPortfolioId)
                    .slice(0, 3);
                setRelatedPortfolios(filtered);
            } catch (error) {
                console.error("Error fetching related portfolios:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRelatedPortfolios();
    }, [currentPortfolioId]);

    if (loading || relatedPortfolios.length === 0) return null;

    return (
        <div className="w-full flex flex-col items-center py-[60px] bg-[#F0F0F0]">
            <ContentContainer
                maxWidth="7xl"
                paddingX="lg"
                className="flex flex-col gap-[60px]"
            >
                {/* Header */}
                <div className="flex flex-row justify-between items-center w-full">
                    <h2 className="font-earth-orbiter font-bold text-[32px] md:text-[48px] leading-[100%] text-[#161616] text-center w-full">
                        RELATED PROJECTS
                    </h2>
                </div>

                {/* Portfolio Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPortfolios.map((portfolio) => (
                        <PortfolioCard key={portfolio.id} portfolio={portfolio} />
                    ))}
                </div>

                {/* See All Button */}
                <div className="flex justify-center mt-10">
                    <Link
                        to="/portfolio"
                        className="flex flex-row justify-center items-center px-10 py-5 gap-2.5 bg-[#303030] rounded-[34px] hover:bg-[#404040] transition-colors"
                    >
                        <span className="font-earth-orbiter font-bold text-[20px] leading-[20px] text-[#F0F0F0] text-center">
                            See All
                        </span>
                    </Link>
                </div>
            </ContentContainer>
        </div>
    );
};

export default RelatedPortfoliosSection;

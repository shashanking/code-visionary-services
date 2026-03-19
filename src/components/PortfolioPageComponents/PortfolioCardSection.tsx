import React, { useState } from "react";
import { useSanityPortfolios } from "../../hooks/Portfolios/useSanityPortfolios";
import PortfolioCard from "./PortfolioCard";
import ContentContainer from "../shared/ContentContainer";

const PortfolioCardSection: React.FC = () => {
  const { portfolios, loading, error } = useSanityPortfolios();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const totalPages = Math.ceil(portfolios.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPortfolios = portfolios.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="w-full flex flex-col items-center py-[60px] bg-[#F0F0F0]">
        <ContentContainer
          maxWidth="7xl"
          paddingX="lg"
          className="flex flex-col gap-[60px]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="relative bg-gray-200 rounded-2xl overflow-hidden aspect-[4/3] min-h-[300px] animate-pulse"
              />
            ))}
          </div>
        </ContentContainer>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full flex flex-col items-center py-[60px] bg-[#F0F0F0]">
        <ContentContainer maxWidth="7xl" paddingX="lg">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-red-800 mb-2">
              Failed to Load Portfolios
            </h3>
            <p className="text-red-600">{error}</p>
          </div>
        </ContentContainer>
      </div>
    );
  }

  if (portfolios.length === 0) {
    return (
      <div className="w-full flex flex-col items-center py-[60px] bg-[#F0F0F0]">
        <ContentContainer maxWidth="7xl" paddingX="lg">
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-yellow-800 mb-2">
              No Portfolios Available
            </h3>
            <p className="text-yellow-600">
              Check back later for portfolio projects.
            </p>
          </div>
        </ContentContainer>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center py-[60px] bg-[#F0F0F0]">
      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="flex flex-col gap-[60px]"
      >
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPortfolios.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-row justify-center items-center gap-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-6 py-3 rounded-full font-earth-orbiter font-bold text-[16px] transition-all ${
                currentPage === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#303030] text-[#F0F0F0] hover:bg-[#404040]"
              }`}
            >
              Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-full font-earth-orbiter font-bold text-[16px] transition-all ${
                      currentPage === page
                        ? "bg-[#B5442C] text-[#F0F0F0]"
                        : "bg-[#303030] text-[#F0F0F0] hover:bg-[#404040]"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-6 py-3 rounded-full font-earth-orbiter font-bold text-[16px] transition-all ${
                currentPage === totalPages
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-[#303030] text-[#F0F0F0] hover:bg-[#404040]"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </ContentContainer>
    </div>
  );
};

export default PortfolioCardSection;

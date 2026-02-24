import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useSanityPortfolioBySlug } from "../../hooks/Portfolios/useSanityPortfolios";

const GallerySection: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { portfolio, loading, error } = useSanityPortfolioBySlug(slug!);

  if (loading) {
    return (
      <SectionContainer fullWidth padding="lg" background="#F0F0F0">
        <ContentContainer
          maxWidth="7xl"
          paddingX="lg"
          className="py-20 text-center"
        >
          <h1 className="text-2xl font-bold mb-4">Loading...</h1>
        </ContentContainer>
      </SectionContainer>
    );
  }

  if (error || !portfolio) {
    return (
      <SectionContainer fullWidth padding="lg" background="#F0F0F0">
        <ContentContainer
          maxWidth="7xl"
          paddingX="lg"
          className="py-20 text-center"
        >
          <h1 className="text-2xl font-bold mb-4">
            {error || "Project Not Found"}
          </h1>
          <button
            onClick={() => navigate("/portfolio")}
            className="px-6 py-2 bg-[#161616] text-white rounded-full hover:bg-[#303030] transition-colors"
          >
            Back to Portfolio
          </button>
        </ContentContainer>
      </SectionContainer>
    );
  }

  const { gallery } = portfolio;

  if (!gallery || !gallery.images || gallery.images.length === 0) {
    return null;
  }

  const images = gallery.images.slice(0, 6);

  const layoutConfig = [
    { wrapper: "lg:col-span-4 lg:row-span-2", height: "h-[280px] sm:h-[360px] lg:h-full" },
    { wrapper: "lg:col-span-3", height: "h-[220px]" },
    { wrapper: "lg:col-span-5", height: "h-[220px]" },
    { wrapper: "lg:col-span-8", height: "h-[260px] sm:h-[320px]" },
    { wrapper: "lg:col-span-4 lg:row-span-2", height: "h-[280px] sm:h-[360px] lg:h-full" },
    { wrapper: "lg:col-span-4", height: "h-[220px]" },
  ];

  return (
    <SectionContainer
      id="gallery-section"
      fullWidth
      padding="lg"
      background="#F0F0F0"
      className="relative overflow-hidden flex flex-col items-center justify-center"
    >
      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 py-10"
      >
        <div className="flex flex-col justify-center items-start gap-6 mb-12">
          <h1 className="font-heading font-bold text-title-lg text-center uppercase text-[#161616] leading-[1.1] w-full">
            {gallery.title}
          </h1>
          <p className="font-sans text-body1 text-[#303030] max-w-4xl leading-[1.5] text-center mx-auto">
            {gallery.description}
          </p>
        </div>

        <div className="relative w-full max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6">
            {images.map((image, index) => {
              const config = layoutConfig[index] ?? {
                wrapper: "lg:col-span-4",
                height: "h-[220px]",
              };

              return (
                <div
                  key={image.url + index}
                  className={`w-full ${config.wrapper}`}
                >
                  <div
                    className={`relative w-full ${config.height} bg-[#DBDBDB] rounded-3xl shadow-[0px_0px_4px_rgba(0,0,0,0.25)] overflow-hidden`}
                  >
                    <img
                      src={image.url}
                      alt={image.alt || `Gallery image ${index + 1}`}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default GallerySection;

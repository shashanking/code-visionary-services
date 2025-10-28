import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import { portfolioItemsDetails } from "../../constants/portfolio-section-data";

const HeroPortfolioDetailPage: React.FC = () => {
  const { portfolioId } = useParams<{ portfolioId: string }>();
  const navigate = useNavigate();

  const portfolioItem = portfolioItemsDetails.find(
    (item) => item.id === portfolioId
  );

  if (!portfolioItem) {
    return (
      <SectionContainer fullWidth padding="lg" background="#e3e3e3">
        <ContentContainer
          maxWidth="7xl"
          paddingX="lg"
          className="py-20 text-center"
        >
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
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

  const { hero, challenges, services, solutions, summary, results } =
    portfolioItem;

  return (
    <div className="bg-[#e3e3e3] min-h-screen">
      {/* Hero Section */}
      <SectionContainer
        fullWidth
        padding="none"
        background="transparent"
        className="relative"
      >
        <div className="relative h-[80vh] min-h-[700px] w-full overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={hero.heroImg}
              alt={hero.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          </div>

          {/* Hero Content */}
          <div className="relative h-full flex items-end">
            <ContentContainer maxWidth="7xl" paddingX="lg" className="pb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                {/* Main Title & Description */}
                <div className="text-white">
                  <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl uppercase mb-6 leading-tight">
                    {hero.title}
                  </h1>
                  {hero.subtitle && (
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-6 opacity-90">
                      {hero.subtitle}
                    </h2>
                  )}
                  <p className="text-lg md:text-xl lg:text-2xl opacity-80 leading-relaxed max-w-2xl">
                    {hero.description}
                  </p>
                </div>

                {/* Project Metadata */}
                <div className="text-white">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <div className="mb-4">
                          <div className="text-sm uppercase opacity-70 mb-1">
                            Client
                          </div>
                          <div className="text-lg font-semibold">
                            {hero.client}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm uppercase opacity-70 mb-1">
                            Role
                          </div>
                          <div className="text-lg font-semibold">
                            {hero.role}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="mb-4">
                          <div className="text-sm uppercase opacity-70 mb-1">
                            Date
                          </div>
                          <div className="text-lg font-semibold">
                            {hero.date}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm uppercase opacity-70 mb-1">
                            Category
                          </div>
                          <div className="text-lg font-semibold">
                            {hero.client}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ContentContainer>
          </div>
        </div>
      </SectionContainer>

      {/* Back Button */}
      <SectionContainer
        fullWidth
        padding="lg"
        background="transparent"
        className="relative -mt-20"
      >
        <ContentContainer maxWidth="7xl" paddingX="lg">
          <button
            onClick={() => navigate("/portfolio")}
            className="flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-sm text-[#161616] rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Portfolio
          </button>
        </ContentContainer>
      </SectionContainer>

      {/* Services Pill */}
      <SectionContainer fullWidth padding="lg" background="transparent">
        <ContentContainer maxWidth="7xl" paddingX="lg">
          <div className="flex flex-wrap gap-3 justify-center">
            {services.map((service, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-[#161616] text-white rounded-full text-sm font-semibold uppercase tracking-wide"
              >
                {service}
              </span>
            ))}
          </div>
        </ContentContainer>
      </SectionContainer>

      {/* Challenges Section */}
      <SectionContainer fullWidth padding="lg" background="white">
        <ContentContainer maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 uppercase">
              {challenges.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {challenges.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.items.map((challenge, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-3xl p-8 border-2 border-transparent hover:border-[#FEA656] transition-all duration-500 hover:shadow-2xl"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#F23232] to-[#FEA656] rounded-2xl flex items-center justify-center text-white font-bold text-2xl">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-[#161616] transition-colors">
                      {challenge.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentContainer>
      </SectionContainer>

      {/* Solutions Section */}
      <SectionContainer fullWidth padding="lg" background="transparent">
        <ContentContainer maxWidth="7xl" paddingX="lg">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 uppercase">
              {solutions.title}
            </h2>
            <p className="text-xl text-gray-600 mb-4 max-w-4xl mx-auto">
              {solutions.subtitle}
            </p>
            <p className="text-lg text-gray-700 max-w-6xl mx-auto leading-relaxed">
              {solutions.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              Technology Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-gray-200 text-center hover:shadow-lg transition-shadow"
                >
                  <h4 className="font-bold text-xl mb-3 text-gray-900">
                    {tech.name}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Approaches */}
          <div className="space-y-12">
            {solutions.approaches.map((approach, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200"
              >
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-3 text-gray-900">
                    {approach.title}
                  </h3>
                  {approach.subtitle && (
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                      {approach.subtitle}
                    </p>
                  )}
                </div>

                <div className="space-y-6">
                  {approach.levels.map((level, levelIndex) => (
                    <div
                      key={levelIndex}
                      className="border-l-4 border-[#FEA656] pl-6 py-2"
                    >
                      <h4 className="text-xl font-bold mb-3 text-gray-900">
                        {level.title}
                      </h4>
                      <div className="text-gray-700 leading-relaxed">
                        {Array.isArray(level.description) ? (
                          <ul className="space-y-2">
                            {level.description.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <span className="w-2 h-2 bg-[#FEA656] rounded-full mt-2 flex-shrink-0" />
                                <span className="text-lg">{item}</span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-lg leading-relaxed">
                            {level.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ContentContainer>
      </SectionContainer>

      {/* Summary Section */}
      <SectionContainer fullWidth padding="lg" background="white">
        <ContentContainer maxWidth="7xl" paddingX="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 uppercase">
                {summary.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {summary.description}
              </p>

              {summary.keyAchievements && (
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gray-900">
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {summary.keyAchievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-[#FEA656] rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={summary.image}
                  alt={summary.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </ContentContainer>
      </SectionContainer>

      {/* Results Section */}
      <SectionContainer fullWidth padding="lg" background="transparent">
        <ContentContainer maxWidth="7xl" paddingX="lg">
          {results.title && (
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-center uppercase">
              {results.title}
            </h2>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-xl transition-all duration-500 hover:scale-105 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#161616] mb-4 group-hover:text-[#FEA656] transition-colors">
                  {metric.percentage}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 group-hover:text-[#161616] transition-colors">
                  {metric.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </ContentContainer>
      </SectionContainer>

      {/* CTA Section */}
      <SectionContainer fullWidth padding="lg" background="#161616">
        <ContentContainer maxWidth="7xl" paddingX="lg" className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing for your business.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => navigate("/contact")}
              className="px-8 py-4 bg-[#FEA656] text-white rounded-full hover:bg-[#e69545] transition-colors font-semibold"
            >
              Get In Touch
            </button>
            <button
              onClick={() => navigate("/portfolio")}
              className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-[#161616] transition-colors font-semibold"
            >
              View More Projects
            </button>
          </div>
        </ContentContainer>
      </SectionContainer>
    </div>
  );
};

export default HeroPortfolioDetailPage;

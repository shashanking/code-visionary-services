import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import ReviewPageBg from "../../assets/review-page/hero-bg.jpg";
import Person1 from "../../assets/review-page/person-1.jpg";
import Person2 from "../../assets/review-page/person-2.jpg";
import Person3 from "../../assets/review-page/person-3.jpg";
import Person4 from "../../assets/review-page/person-4.jpg";

interface TestimonialHero {
  id: number;
  name: string;
  image: string;
}

const TestimonialsHeroData: TestimonialHero[] = [
  {
    id: 1,
    name: "Lorem ipsum",
    image: Person1,
  },
  {
    id: 2,
    name: "Lorem ipsum",
    image: Person2,
  },
  {
    id: 3,
    name: "Lorem ipsum",
    image: Person3,
  },
  {
    id: 4,
    name: "Lorem ipsum",
    image: Person4,
  },
];

const HeroReviewPage: React.FC = () => {
  return (
    <SectionContainer
      id="portfolio-hero"
      fullWidth
      padding="lg"
      background="#e3e3e3"
      className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${ReviewPageBg})` }}
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
            className={`font-heading font-bold text-title-2xl text-center uppercase mb-6 bg-gradient-to-r text-[#161616] leading-[1.1]`}
          >
            Customer{" "}
            <span className="bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
              Stories
            </span>
          </h1>

          <p className="font-sans font-normal text-body1 text-[#161616] max-w-lg mx-auto leading-[1.5]">
            Discover how businesses have grown with our web, software, and
            design solutions—straight from the experiences of our satisfied
            clients.
          </p>
        </div>
      </ContentContainer>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 pt-15 pb-10 flex justify-center items-center"
      >
        <div className="relative flex items-center justify-center h-40 md:h-80">
          {TestimonialsHeroData.map((item, index) => {
            const isEven = (index + 1) % 2 === 0;
            const rotation = isEven
              ? index === 1
                ? "-rotate-12"
                : "-rotate-8"
              : index === 0
              ? "rotate-9"
              : "rotate-14";

            const zIndex = isEven ? "z-10" : "z-0";
            const translateY = isEven
              ? index === 1
                ? "-translate-y-2"
                : "-translate-y-2"
              : index === 0
              ? "translate-y-2"
              : "translate-y-4";

            return (
              <div
                key={item.id}
                className={`relative ${zIndex} transform ${rotation} ${translateY} transition-all duration-300 hover:scale-105 hover:z-20`}
                style={{
                  marginLeft: index === 0 ? "0" : "-2rem",
                }}
              >
                <div className="relative w-32 h-40 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-white p-2 rounded-lg shadow-lg border-4 border-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-sm"
                  />

                  <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gray-300 rounded-tl-sm"></div>
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gray-300 rounded-tr-sm"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gray-300 rounded-bl-sm"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gray-300 rounded-br-sm"></div>
                </div>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeroReviewPage;

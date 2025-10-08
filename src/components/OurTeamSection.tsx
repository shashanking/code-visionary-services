import { useState } from "react";
import SectionContainer from "./shared/SectionContainer";
import ContentContainer from "./shared/ContentContainer";
import bgImg from "../assets/our-team-background-section-image.png";
import { teamMembers, type TeamMember } from "../constants/team-section-data";

const OurTeamSection: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(1);

  return (
    <SectionContainer
      id="our-team"
      fullWidth
      padding="none"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgImg})` }}
      />

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 pt-10 pb-20 md:pt-20 md:pb-30 flex flex-col items-center"
      >
        {/* Section Title */}
        <h2 className="relative w-full max-w-2xl top-5 md:top-7 lg:top-5 xl:top-8 leading-[1] font-heading font-semibold text-center bg-gradient-to-b from-[#0861AA] to-[#0861AA00] bg-clip-text text-transparent opacity-70 pointer-events-none text-[52px] sm:text-[70px] md:text-[80px] lg:text-[100px] xl:text-[140px]">
          OUR TEAM
        </h2>

        {/* Team Cards */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-wrap justify-center items-center gap-4 lg:gap-2 xl:gap-6">
          {teamMembers.map((member: TeamMember, idx: number) => {
            const isActive = hoverIndex === idx;

            const translateClass =
              idx % 2 === 0
                ? "lg:-translate-y-[26px]"
                : "lg:translate-y-[26px]";

            return (
              <div
                key={member.id}
                tabIndex={0}
                onMouseEnter={() => setHoverIndex(idx)}
                onMouseLeave={() => setHoverIndex(null)}
                onFocus={() => setHoverIndex(idx)}
                onBlur={() => setHoverIndex(null)}
                className={`relative flex-shrink-0 w-[220px] h-[320px] lg:w-[180px] lg:h-[280px] xl:w-[220px] xl:h-[320px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-end
                  ${isActive ? "z-20" : "z-10"}
                  ${translateClass} shadow-[0_0_12px_2px_#B5442C80]

                `}
                style={{
                  scrollSnapAlign: "center",
                  // boxShadow: "0 0 8px 1px #B5442C80",
                  background: member.image
                    ? `url(${member.image}) center/cover no-repeat, linear-gradient(160deg, #324D6B 0%, #1C3551 100%)`
                    : "linear-gradient(160deg, #324D6B 0%, #1C3551 100%)",
                  filter: isActive ? "grayscale(0%)" : "grayscale(100%)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none" />

                <div className="flex-1" />

                {/* Name & Role Overlay */}
                <div className="bg-gradient-to-t from-black/46 to-black/0 p-4 rounded-b-[18px] text-white">
                  <h3 className="relative z-10 text-body2 font-bold text-lg leading-[1.1]">
                    {member.name}
                  </h3>
                  {isActive && (
                    <p className="relative z-10 text-body3 transition-all duration-300">
                      {member.role}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default OurTeamSection;

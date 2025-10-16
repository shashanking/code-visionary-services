import React from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import TeamBg from "../../assets/about-page/our-team-bg.jpg";
import { motion } from "framer-motion";
import { OurTeamData } from "../../constants/about-page-team-data";

const OurTeamSection: React.FC = () => {
  return (
    <SectionContainer
      id="our-team"
      fullWidth
      padding="lg"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${TeamBg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
          <h2 className="font-heading font-bold text-title-lg uppercase mb-10 leading-tight bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent">
            OUR TEAM
          </h2>

          <div className="w-full flex flex-col divide-y divide-[#000000] border-y border-[#000000]">
            {OurTeamData.map((member) =>
              member.name === "Sahil Biswas" ? (
                <div
                  key={member.id}
                  className={`relative flex flex-col items-center justify-center py-4 min-h-[120px] ${
                    member.name === "Sahil Biswas"
                      ? "bg-gradient-to-r from-[#B5442C] to-[#FF9C87]"
                      : ""
                  }`}
                >
                  {/* Infinite Marquee */}
                  <div className="w-full overflow-hidden flex ">
                    <motion.div
                      className="flex shrink-0 whitespace-nowrap text-title-sm font-sans font-semibold text-[#ffffff]"
                      animate={{ x: ["0%", "-50%"] }}
                      transition={{
                        repeat: Infinity,
                        duration: 15,
                        ease: "linear",
                      }}
                    >
                      {[...Array(20)].map((_, i) => (
                        <span key={i} className="mx-8">
                          {member.name}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* Floating image */}
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="absolute top-1/2 left-1/2 w-20 sm:w-30 rounded-xl -translate-x-1/2 -translate-y-1/2 shadow-xl"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [10, 15, 15, 10],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 6,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              ) : (
                <div
                  key={member.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-4 min-h-[120px]"
                >
                  <div className="sm:w-2/5 text-left">
                    <h3 className="font-heading text-title-md font-medium text-[#161616]">
                      {member.name}
                    </h3>
                    <p className="text-body2 text-[#303030]">{member.role}</p>
                  </div>

                  <div className="sm:w-2/5 text-body3 text-[#303030] leading-relaxed">
                    {member.description}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default OurTeamSection;

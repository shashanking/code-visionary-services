import React, { useEffect, useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import TeamBg from "../../assets/about-page/our-team-bg.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useSanityTeamMembers } from "../../hooks/Team/useSanityTeam";

const OurTeamSection: React.FC = () => {
  const { teamMembers, loading, error } = useSanityTeamMembers();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // compute safe middle index
  const middleIndex =
    teamMembers && teamMembers.length > 0
      ? Math.floor(teamMembers.length / 2)
      : null;

  useEffect(() => {
    if (middleIndex !== null) {
      setActiveIndex(middleIndex);
    }
  }, [middleIndex]);

  if (error) {
    return <div>Error: {error}</div>;
  }

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

          <AnimatePresence mode="wait">
            {!loading && teamMembers?.length > 0 ? (
              <motion.div
                key="team"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-screen flex flex-col divide-y divide-[#000000] border-y border-[#000000]"
              >
                {teamMembers?.map((member, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <motion.div
                      key={`${member.name}-${index}`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseLeave={() => setActiveIndex(middleIndex)}
                      className="relative w-screen left-1/2 -translate-x-1/2 py-4 min-h-[150px] sm:min-h-[120px] overflow-visible cursor-pointer"
                      animate={isActive ? "active" : "rest"}
                      initial="rest"
                    >
                      {/* Animated Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-[#B5442C] to-[#FF9C87] opacity-0 z-0"
                        variants={{
                          rest: { opacity: 0, transition: { duration: 0.4 } },
                          active: { opacity: 1, transition: { duration: 0.4 } },
                        }}
                      />

                      {/* Infinite Marquee */}
                      <motion.div
                        className="absolute w-full overflow-hidden flex justify-center top-1/2 -translate-y-1/2 z-10"
                        variants={{
                          rest: { opacity: 0 },
                          active: {
                            opacity: 1,
                            transition: { duration: 0.4 },
                          },
                        }}
                      >
                        <motion.div
                          className="flex shrink-0 whitespace-nowrap text-title-sm font-sans font-semibold text-white"
                          variants={{
                            rest: { x: "0%" },
                            active: {
                              x: ["0%", "-50%"],
                              transition: {
                                repeat: Infinity,
                                duration: 50,
                                ease: "linear",
                              },
                            },
                          }}
                        >
                          {[...Array(30)].map((_, i) => (
                            <span key={i} className="mx-8">
                              {member.name}
                            </span>
                          ))}
                        </motion.div>
                      </motion.div>

                      {/* Floating Image */}
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="absolute top-1/2 left-1/2 w-30 h-40 sm:w-38 sm:h-48 rounded-lg -translate-x-1/2 -translate-y-1/2 shadow-xl object-cover z-20"
                        variants={{
                          rest: { opacity: 0, y: 0, rotate: 10 },
                          active: {
                            opacity: 1,
                            y: [0, -10, 0],
                            rotate: [10, 15, 10],
                            transition: {
                              // repeat: Infinity,
                              // duration: 6,
                              ease: "easeInOut",
                            },
                          },
                        }}
                      />

                      <motion.div
                        className="relative z-30 max-w-2xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 px-4 md:px-8 lg:px-10"
                        variants={{
                          rest: { opacity: 1, transition: { duration: 0.4 } },
                          active: { opacity: 0, transition: { duration: 0.4 } },
                        }}
                      >
                        <div className="sm:w-2/5 text-left">
                          <h3 className="font-heading text-title-md font-medium text-[#161616]">
                            {member.name}
                          </h3>
                          <p className="text-body2 text-[#303030]">
                            {member.role}
                          </p>
                        </div>

                        <div className="sm:w-2/5 text-body3 text-[#303030] leading-relaxed">
                          {member.description}
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-10 text-gray-600 text-lg"
              >
                Loading team...
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default OurTeamSection;

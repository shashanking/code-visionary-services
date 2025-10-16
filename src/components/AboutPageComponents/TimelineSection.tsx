import React, { useRef } from "react";
import SectionContainer from "../shared/SectionContainer";
import ContentContainer from "../shared/ContentContainer";
import TimelineBg from "../../assets/about-page/timeline-bg.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { TimelineData } from "../../constants/timeline-data";

gsap.registerPlugin(ScrollTrigger);

const TimelineSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const timelineItems = itemsRef.current;
      const icon = iconRef.current;

      // initial state - all items invisible
      timelineItems.forEach((item) => {
        if (!item) return;
        const year = item.querySelector(".timeline-year") as HTMLElement;
        const desc = item.querySelector(".timeline-desc") as HTMLElement;
        if (year && desc) gsap.set([year, desc], { opacity: 0 });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${timelineItems.length * 100}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      timelineItems.forEach((item, i) => {
        if (!item) return;

        const year = item.querySelector(".timeline-year") as HTMLElement;
        const desc = item.querySelector(".timeline-desc") as HTMLElement;

        // animate icon to this item's position
        tl.to(
          icon,
          {
            y: item.offsetTop + item.offsetHeight / 2 - icon!.offsetHeight / 2,
            duration: 0.5,
            ease: "power2.out",
          },
          i * 0.5
        );

        // reveal current item
        tl.to(
          [year, desc],
          { opacity: 1, color: "#161616", duration: 0.5, ease: "power2.out" },
          i * 0.5
        );

        // revert previous items to gray
        if (i > 0) {
          const prevItem = timelineItems[i - 1];
          if (prevItem) {
            const prevYear = prevItem.querySelector(
              ".timeline-year"
            ) as HTMLElement;
            const prevDesc = prevItem.querySelector(
              ".timeline-desc"
            ) as HTMLElement;
            if (prevYear && prevDesc) {
              tl.to(
                [prevYear, prevDesc],
                { opacity: 1, color: "#9e9e9e", duration: 0.3 },
                i * 0.5
              );
            }
          }
        }
      });

      return () => {
        tl.scrollTrigger?.kill();
        tl.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <SectionContainer
      ref={sectionRef}
      id="timeline"
      fullWidth
      padding="lg"
      className="relative flex items-center justify-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: `url(${TimelineBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-transparent to-[#F0F0F0] z-0 pointer-events-none" />
      </div>

      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col items-center"
      >
        <div className="relative z-10 w-full max-w-2xl flex flex-col items-center">
          <h2 className="font-heading font-bold text-title-lg uppercase mb-10 leading-tight bg-gradient-to-b from-[#B5442C]/70 via-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
            Our Journey
          </h2>

          <div className="relative w-full max-w-2xl mx-auto flex flex-col justify-start gap-6">
            {/* Vertical timeline line */}
            <div className="absolute left-2.5 sm:left-[25.72%] top-0 bottom-0 w-1 bg-gradient-to-t from-[#B5442C] to-transparent z-0 rounded-full" />

            {/* Floating icon */}
            <div
              ref={iconRef}
              className="absolute left-0 sm:left-1/4 w-6 h-6 rounded-full z-10 flex items-center justify-center"
              style={{ top: 0, backgroundColor: "rgba(31, 60, 115, 0.4)" }}
            >
              <div className="w-3 h-3 rounded-full bg-black" />
            </div>

            {TimelineData.map((item, i) => (
              <div
                key={i}
                ref={(el) => {
                  itemsRef.current[i] = el;
                }}
                className="flex flex-col sm:flex-row gap-2 min-h-[100px] relative"
              >
                {/* Year */}
                <div className="timeline-year w-full sm:w-1/4 font-heading font-semibold text-left text-title-lg text-[#9e9e9e] flex sm:justify-center items-center pl-10 sm:pl-0">
                  {item.year}
                </div>

                {/* Spacer for vertical timeline */}
                <div className="w-10 md:w-15 lg:w-20 h-full hidden sm:block" />

                {/* Description */}
                <div className="timeline-desc text-[#9e9e9e] text-body1 flex-1 flex items-center pl-10 sm:pl-0">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default TimelineSection;

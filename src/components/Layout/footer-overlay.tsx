import { motion, useScroll, useTransform } from "framer-motion";

export const FooterRevealOverlay = ({
  footerRef,
  isActive,
}: {
  footerRef: React.RefObject<HTMLElement | null>;
  isActive: boolean;
}) => {
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Overlay slides up as scroll
  const overlayY = useTransform(scrollYProgress, [0.7, 1], ["0%", "-100%"]);

  const glowOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 0, 0]);

  if (!isActive) return null;

  return (
    <motion.div
      style={{
        y: overlayY,
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "#f0f0f0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 20,
        pointerEvents: "none",
        gap: "10rem",
      }}
      className="footer-overlay min-h-[100vh] overflow-hidden"
    >
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" /> */}

      <motion.div
        style={{
          opacity: glowOpacity,
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full blur-[100px] bg-[#B5442C] z-0 pointer-events-none"
      />

      <motion.div className="font-heading text-center z-10">
        <p className="font-heading font-bold text-title-lg text-[#161616]">
          Got an Idea?
        </p>
        <p className="font-heading font-bold text-title-lg bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent uppercase">
          Contact Us
        </p>
      </motion.div>
    </motion.div>
  );
};

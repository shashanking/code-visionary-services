import { motion, useScroll, useTransform } from "framer-motion";

export const FooterRevealOverlay = ({
  footerRef,
  isActive,
}: {
  footerRef: React.RefObject<HTMLElement | null>;
  isActive: boolean;
}) => {
  // Scroll progress inside the footer element
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  // Opacity values for texts
  const ideaOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const contactOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

  // Overlay Y to move up like shutter after contact text fully visible
  const overlayY = useTransform(scrollYProgress, [0.7, 1], ["0%", "-100%"]);

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
        background:
          "linear-gradient(to bottom, rgba(255,255,255) 0%, rgba(255,255,255) 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        zIndex: 20,
        pointerEvents: "none",
      }}
      className="footer-overlay"
    >
      <motion.div
        style={{
          opacity: ideaOpacity,
          color: "#222",
          fontWeight: "bold",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          textAlign: "center",
        }}
        className="font-heading"
      >
        Got an Idea ?
      </motion.div>
      <motion.div
        style={{
          opacity: contactOpacity,
          background:
            "linear-gradient(91.08deg, #B5442C 0.34%, #FF9C87 99.62%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontWeight: "bold",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          textAlign: "center",
        }}
        className="font-heading"
      >
        Contact Us
      </motion.div>
    </motion.div>
  );
};

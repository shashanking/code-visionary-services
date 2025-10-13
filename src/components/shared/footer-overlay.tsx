// import { motion, useScroll, useTransform } from "framer-motion";

// export const FooterRevealOverlay = ({
//   footerRef,
//   isActive,
// }: {
//   footerRef: React.RefObject<HTMLElement | null>;
//   isActive: boolean;
// }) => {
//   // Scroll progress inside the footer element
//   const { scrollYProgress } = useScroll({
//     target: footerRef,
//     offset: ["start end", "end end"],
//   });

//   // Opacity values for texts
//   const ideaOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
//   const contactOpacity = useTransform(scrollYProgress, [0.3, 0.7], [0, 1]);

//   // Overlay Y to move up like shutter after contact text fully visible
//   const overlayY = useTransform(scrollYProgress, [0.7, 1], ["0%", "-100%"]);

//   if (!isActive) return null;

//   return (
//     <motion.div
//       style={{
//         y: overlayY,
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         background: "#f0f0f0",
//         // background:
//         //   "linear-gradient(to bottom, rgba(240,240,240, 1) 0%, rgba(240,240,240, 1) 100%)",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: "column",
//         zIndex: 20,
//         pointerEvents: "none",
//         gap: "10rem",
//       }}
//       className="footer-overlay min-h-[250vh]"
//     >
//       <div className="absolute inset-0 bg-gradient-to-b from-[#F0F0F0] via-[#F0F0F0]/0 to-[#F0F0F0] z-0 pointer-events-none" />
//       <motion.div
//         style={{
//           opacity: ideaOpacity,
//           color: "#222",
//           fontWeight: "bold",
//           fontSize: "clamp(2rem, 5vw, 3rem)",
//           textAlign: "center",
//         }}
//         className="font-heading min-h-[100vh]"
//       >
//         Got an Idea ?
//       </motion.div>
//       <motion.div
//         style={{
//           opacity: contactOpacity,
//           background:
//             "linear-gradient(91.08deg, #B5442C 0.34%, #FF9C87 99.62%)",
//           WebkitBackgroundClip: "text",
//           WebkitTextFillColor: "transparent",
//           backgroundClip: "text",
//           fontWeight: "bold",
//           fontSize: "clamp(2rem, 5vw, 3rem)",
//           textAlign: "center",
//         }}
//         className="font-heading min-h-[100vh]"
//       >
//         Contact Us
//       </motion.div>
//     </motion.div>
//   );
// };

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
        height: "300vh",
        background: "#f0f0f0",
        display: "flex",
        flexDirection: "column",
        zIndex: 20,
        pointerEvents: "none",
      }}
      className="footer-overlay"
    >
      {/* First Section */}
      <div className="h-[100vh] w-full flex justify-center items-center">
        <div className="font-heading font-bold text-title-md text-gray-800">
          Got an Idea ?
        </div>
      </div>

      {/* Second Section */}
      <div className="min-h-[100vh] w-full flex justify-center items-center">
        <div className="font-heading font-bold text-title-md bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent">
          Contact Us
        </div>
      </div>

      {/* Empty space */}
      <div className="min-h-[100vh] w-full"></div>
    </motion.div>
  );
};

// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";

// import digitalMarketingImg from "../assets/service_card_4_digital_markiting_color_image.png";
// import uiuxImg from "../assets/service_card_2_UIUX_color_image.png";
// import websiteDevImg from "../assets/service_card_1_website_design_and_development_color_image.png";
// import mobileAppImg from "../assets/service_card_3_mobile_application_color_image.png";
// import aiMarketingImg from "../assets/AI_Marketing.png";
// import webApplicationsImg from "../assets/Web_Applications.png";

// import arrowImg from "../assets/mingcute_arrow-up-line.png";

// const services = [
//   {
//     label: "Digital Marketing",
//     img: digitalMarketingImg,
//     description: "Grow your brand and drive conversions with targeted online campaigns.",
//   },
//   {
//     label: "UI/UX Design",
//     img: uiuxImg,
//     description: "We craft intuitive, engaging user experiences for every device.",
//   },
//   {
//     label: "Website Design & Development",
//     img: websiteDevImg,
//     description: "Custom websites that deliver results and elevate your business.",
//   },
//   {
//     label: "Mobile Applications",
//     img: mobileAppImg,
//     description: "Cross-platform apps with seamless UX for every user.",
//   },
//   {
//     label: "AI Marketing",
//     img: aiMarketingImg,
//     description: "Leverage AI-powered automation to supercharge your marketing impact.",
//   },
//   {
//     label: "Web Applications",
//     img: webApplicationsImg,
//     description: "Robust, scalable web applications for next-gen digital businesses.",
//   },
// ];

// const ServicesSection: React.FC = () => {
//   const [hoverIdx, setHoverIdx] = useState<number | null>(null);

//   return (
//     <Box
//       sx={{
//         width: "100%",
//         maxWidth: 1599,
//         mx: "auto",
//         position: "relative",
//         pt: 4,
//         pb: 10,
//         px: { xs: 2, md: 4 },
//         boxSizing: "border-box",
//       }}
//     >
//       {/* Faded background heading text */}
//       <Typography
//         variant="h1"
//         sx={{
//           position: "absolute",
//           top: 30,
//           left: "50%",
//           transform: "translate(-50%, -40%)",
//           fontFamily: "Montserrat, sans-serif",
//           fontWeight: 700,
//           fontSize: { xs: "12vw", md: "8vw", lg: "9vw" },
//           color: "#405fad",
//           opacity: 0.07,
//           userSelect: "none",
//           whiteSpace: "nowrap",
//           letterSpacing: "0.04em",
//           textAlign: "center",
//           zIndex: 1,
//           width: "100%",
//           pointerEvents: "none",
//         }}
//       >
//         OUR SERVICES
//       </Typography>

//       {/* Card grid for services */}
//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 2,
//           display: "grid",
//           gridTemplateColumns: {
//             xs: "1fr",
//             sm: "repeat(2, 1fr)",
//             md: "repeat(3, 1fr)",
//             lg: "repeat(4, 1fr)",
//           },
//           gap: 4,
//           mt: "-50px",
//           width: "100%",
//         }}
//       >
//         {services.map(({ img, label, description }, idx) => (
//           <Box
//             key={label}
//             sx={{
//               borderRadius: "24px",
//               overflow: "hidden",
//               position: "relative",
//               cursor: "pointer",
//               boxShadow: 3,
//               height: 300,
//               background: "transparent",
//               transition: "transform 0.4s cubic-bezier(.3,.9,.3,1)",
//               "&:hover": {
//                 transform: "scale(1.07)",
//               },
//             }}
//             onMouseEnter={() => setHoverIdx(idx)}
//             onMouseLeave={() => setHoverIdx(null)}
//           >
//             {/* Arrow icon on hover */}
//             <Box
//               component="img"
//               src={arrowImg}
//               alt="Arrow"
//               sx={{
//                 display: hoverIdx === idx ? "block" : "none",
//                 position: "absolute",
//                 top: 14,
//                 right: 14,
//                 zIndex: 10,
//                 width: 32,
//                 height: 32,
//                 opacity: 0.95,
//                 pointerEvents: "none",
//                 filter: "drop-shadow(1px 2px 6px #222)",
//                 transition: "opacity 0.3s",
//               }}
//             />

//             {/* Background service image */}
//             <Box
//               component="img"
//               src={img}
//               alt={label}
//               sx={{
//                 width: "100%",
//                 height: "100%",
//                 objectFit: "cover",
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 borderRadius: "24px",
//                 filter: hoverIdx === idx ? "none" : "grayscale(100%)",
//                 transition: "filter 0.35s, transform 0.4s cubic-bezier(.3,.9,.3,1)",
//                 transform: hoverIdx === idx ? "scale(1.13)" : "scale(1)",
//                 pointerEvents: "none",
//                 zIndex: 1,
//               }}
//             />

//             {/* Overlay with label and description */}
//             <Box
//               sx={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 width: "100%",
//                 px: 3,
//                 pb: 3,
//                 borderBottomLeftRadius: "24px",
//                 borderBottomRightRadius: "24px",
//                 zIndex: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "flex-end",
//                 background: hoverIdx === idx
//                   ? "linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.98) 90%)"
//                   : "linear-gradient(180deg, rgba(0,0,0,0.07) 30%, rgba(0,0,0,0.60) 100%)",
//                 opacity: 1,
//                 minHeight: "60%",
//                 transition: "background 0.4s cubic-bezier(.3,.9,.3,1)",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 sx={{
//                   fontWeight: 700,
//                   mb: 0.5,
//                   color: "#fff",
//                   letterSpacing: 0.2,
//                   fontSize: { xs: "1.1rem", md: "1.2rem" },
//                   textShadow: "1px 2px 12px #232b34",
//                   transition: "text-shadow 0.3s",
//                 }}
//               >
//                 {label}
//               </Typography>
//               <Typography
//                 sx={{
//                   opacity: hoverIdx === idx ? 1 : 0,
//                   color: "#fff",
//                   fontWeight: 400,
//                   mt: 1,
//                   fontSize: "1rem",
//                   lineHeight: 1.26,
//                   textShadow: "1px 2px 14px #232126",
//                   transition: "opacity 0.4s",
//                 }}
//               >
//                 {description}
//               </Typography>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// };

// export default ServicesSection;

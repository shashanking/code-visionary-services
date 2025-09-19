import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CTAButton } from "./shared";

// Import hero background images
import heroBg1 from "../assets/hero/hero-bg-1.png";
import heroBg2 from "../assets/hero/hero-bg-2.png";
import heroBg3 from "../assets/hero/hero-bg-3.png";
import heroBg4 from "../assets/hero/hero-bg-4.png";

// Import service assets
import digitalMarketingImg from "../assets/service_card_4_digital_markiting_color_image.png";
import uiuxImg from "../assets/service_card_2_UIUX_color_image.png";
import websiteDevImg from "../assets/service_card_1_website_design_and_development_color_image.png";
import mobileAppImg from "../assets/service_card_3_mobile_application_color_image.png";
import aiMarketingImg from "../assets/AI_Marketing.png";
import webApplicationsImg from "../assets/Web_Applications.png";
import arrowImg from "../assets/mingcute_arrow-up-line.png";

const heroBackgrounds = [heroBg1, heroBg2, heroBg3, heroBg4];

const services = [
  {
    label: "Digital Marketing",
    img: digitalMarketingImg,
    description: "Grow your brand and drive conversions with targeted online campaigns.",
  },
  {
    label: "UI/UX Design",
    img: uiuxImg,
    description: "We craft intuitive, engaging user experiences for every device.",
  },
  {
    label: "Website Design & Development",
    img: websiteDevImg,
    description: "Custom websites that deliver results and elevate your business.",
  },
  {
    label: "Mobile Apps",
    img: mobileAppImg,
    description: "Cross-platform apps with seamless UX for every user.",
  },
  {
    label: "AI Marketing",
    img: aiMarketingImg,
    description: "Leverage AI-powered automation to supercharge your marketing impact.",
  },
  {
    label: "Web Apps",
    img: webApplicationsImg,
    description: "Robust, scalable web applications for next-gen digital businesses.",
  },
];

const HeroSection: React.FC = () => {
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prevIndex) => (prevIndex + 1) % heroBackgrounds.length);
    }, 4000); // Change background every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        minHeight: "120vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: { xs: 6, md: 10 },
        px: { xs: 1, sm: 2, md: 6 },
        boxSizing: "border-box",
      }}
    >
      {/* Animated Background Images */}
      {heroBackgrounds.map((bg, index) => (
        <Box
          key={index}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100%",
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: currentBgIndex === index ? 1 : 0,
            transition: "opacity 2s ease-in-out",
            zIndex: -1,
          }}
        />
      ))}

      {/* Content Overlay */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {/* Responsive container for heading text */}
        <Box sx={{ width: "100%", maxWidth: 1100, mx: "auto", mb: 2, mt: {xs: 10, md: 20 ,lg: 24, xl: 26} }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Earth Orbiter Bold', Montserrat, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem", lg: "61px" },
              lineHeight: 1.08,
              color: "#333333",
              mb: 1.8,
            }}
          >
            INNOVATIVE{" "}
            <Box
              component="span"
              sx={{
                display: "inline-block",
                background: "linear-gradient(270deg, #B5442C 0%, #4F1E13 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              DIGITAL SOLUTIONS,
            </Box>
          </Typography>
        </Box>

        <Typography
          variant="h1"
          sx={{
            fontFamily: "'Earth Orbiter Bold', Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "2rem", sm: "2.9rem", md: "3.5rem", lg: "4rem" },
            lineHeight: 1,
            color: "#333333",
            mb: 3,
          }}
        >
          BUILT FOR IMPACT
        </Typography>

        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "16px", md: "20px" },
            color: "#333333",
            maxWidth: 1000,
            mx: "auto",
            mb: 6,
            lineHeight: "30px",
          }}
        >
          At Code Visionary Services, we craft high-performance websites, software, and visual identities that elevate your brand and drive results. From code to creativity, we turn your ideas into powerful digital experiences.
        </Typography>

        <CTAButton
          variant="secondary"
          size="large"
          onClick={() => console.log("Start project clicked")}
        >
          Start a Project
        </CTAButton>

        {/* Services Section */}
        <Box sx={{ mt: { xs: 7, md: 10 }, width: "100%", position: "relative" }}>
          {/* Services heading with blue gradient (responsive) */}
          <Typography
            variant="h1"
            sx={{
              position: { xs: "static", xl: "absolute" },
              width: { xs: "100%", xl: "1476px" },
              height: { xl: "198px" },
              left: { xl: "62px" },
              top: { xl: "0px" },
              fontFamily: "'Earth Orbiter Bold', Montserrat, sans-serif",
              fontStyle: "normal",
              fontWeight: 400,
              fontSize: { xs: "52px", sm: "72px", md: "96px", lg: "128px", xl: "240px" },
              lineHeight: { xs: 1.05, xl: "198px" },
              textAlign: "center",
              background: "linear-gradient(180deg, #0861AA 19.44%, rgba(8, 97, 170, 0) 82.32%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              opacity: { xs: 0.12, xl: 0.1 },
              zIndex: 1,
              pointerEvents: "none",
              mb: 0,
            }}
          >
            OUR SERVICES
          </Typography>

          {/* xs–lg: grid layout (responsive) */}
          <Box
            sx={{
              display: { xs: "grid", md: "grid", lg: "grid", xl: "none" },
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "repeat(3, 1fr)" },
              gap: { xs: 2, md: 3 },
              width: "100%",
              maxWidth: { xs: 640, sm: 900, md: 1100, lg: 1280 },
              mx: "auto",
              mt: { xs: -1, sm: -2, md: -4, lg: -6 },
              position: "relative",
              zIndex: 2,
            }}
          >
            {services.map(({ img, label, description }, idx) => (
              <Box
                key={label}
                sx={{
                  borderRadius: { xs: "16px", md: "20px" },
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                  boxShadow: 3,
                  height: { xs: 220, sm: 260, md: 300, lg: 320 },
                  background: "#FFFFFF",
                  transition: "transform 0.4s cubic-bezier(.3,.9,.3,1)",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
                onMouseEnter={() => setHoverIdx(idx)}
                onMouseLeave={() => setHoverIdx(null)}
              >
                {/* Arrow icon on hover */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(3px)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: hoverIdx === idx ? 1 : 0,
                    transition: "opacity 0.3s",
                    zIndex: 2,
                  }}
                >
                  <Box component="img" src={arrowImg} alt="Arrow" sx={{ width: 20, height: 20, filter: "brightness(0) invert(1)" }} />
                </Box>

                {/* Background service image */}
                <Box
                  component="img"
                  src={img}
                  alt={label}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    filter: hoverIdx === idx ? "none" : "grayscale(100%)",
                    transition: "filter 0.35s, transform 0.4s cubic-bezier(.3,.9,.3,1)",
                    transform: hoverIdx === idx ? "scale(1.08)" : "scale(1)",
                    pointerEvents: "none",
                    zIndex: 0,
                  }}
                />

                {/* Overlay with label and description */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    px: 2,
                    py: 2,
                    zIndex: 1,
                    background: hoverIdx === idx
                      ? "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.95) 100%)"
                      : "linear-gradient(180deg, rgba(0,0,0,0.05) 10%, rgba(0,0,0,0.85) 100%)",
                    transition: "background 0.25s ease",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: hoverIdx === idx ? 800 : 700,
                      color: "#fff",
                      fontSize: hoverIdx === idx
                        ? { xs: "1.06rem", sm: "1.12rem", md: "1.18rem" }
                        : { xs: "1rem", sm: "1.05rem", md: "1.1rem" },
                      transform: hoverIdx === idx ? "translateY(-10px)" : "translateY(0)",
                      transition: "transform 0.35s ease, font-size 0.25s ease, font-weight 0.25s ease",
                    }}
                  >
                    {label}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      opacity: hoverIdx === idx ? 0.95 : 0,
                      fontSize: { xs: "0.82rem", sm: "0.9rem", md: "0.95rem" },
                      mt: hoverIdx === idx ? 0.5 : 0,
                      maxHeight: hoverIdx === idx ? "120px" : 0,
                      overflow: "hidden",
                      transition: "opacity 0.35s ease, max-height 0.35s ease, margin-top 0.35s ease",
                    }}
                  >
                    {description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          {/* xl and up: absolute positioned layout for pixel-perfect design */}
          <Box
            sx={{
              display: { xs: "none", xl: "block" },
              position: "relative",
              width: "1600px",
              height: "1393px",
              left: "160px",
              top: "0px",
              zIndex: 2,
            }}
          >
            {services.map(({ img, label, description }, idx) => {
              const positions = [
                { left: "calc(50% - 376px/2 - 612px)", top: "0px" },
                { left: "calc(50% - 376px/2 + 204px)", top: "0px" },
                { left: "calc(50% - 376px/2 + 612px)", top: "0px" },
                { left: "calc(50% - 376px/2 - 612px)", top: "435px" },
                { left: "calc(50% - 376px/2 - 204px)", top: "435px" },
                { left: "calc(50% - 376px/2 + 204px)", top: "435px" },
                { left: "calc(50% - 376px/2 - 612px)", top: "870px" },
                { left: "calc(50% - 376px/2 - 204px)", top: "870px" },
                { left: "calc(50% - 376px/2 + 204px)", top: "870px" },
                { left: "calc(50% - 376px/2 + 612px)", top: "870px" },
              ];
              const position = positions[idx] || positions[0];

              return (
                <Box
                  key={label}
                  sx={{
                    position: "absolute",
                    width: "376px",
                    height: "403px",
                    left: position.left,
                    top: position.top,
                    background: "#FFFFFF",
                    borderRadius: "24px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.4s cubic-bezier(.3,.9,.3,1)",
                    "&:hover": { transform: "scale(1.07)" },
                  }}
                  onMouseEnter={() => setHoverIdx(idx)}
                  onMouseLeave={() => setHoverIdx(null)}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={label}
                    sx={{
                      position: "absolute",
                      height: "410px",
                      left: "-22.07%",
                      right: "-22.19%",
                      top: "-7px",
                      objectFit: "cover",
                      filter: hoverIdx === idx ? "none" : "grayscale(100%)",
                      transition: "filter 0.35s, transform 0.4s cubic-bezier(.3,.9,.3,1)",
                      transform: hoverIdx === idx ? "scale(1.13)" : "scale(1)",
                      zIndex: 1,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      background: hoverIdx === idx
                        ? "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.95) 100%)"
                        : "linear-gradient(180deg, rgba(17, 17, 17, 0) 0%, #111111 100%)",
                      transition: "background 0.25s ease",
                      zIndex: 2,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      width: "42px",
                      height: "42px",
                      left: "396px",
                      top: "20px",
                      background: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(3px)",
                      borderRadius: "42px",
                      opacity: hoverIdx === idx ? 1 : 0,
                      transition: "opacity 0.3s",
                      zIndex: 10,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Box component="img" src={arrowImg} alt="Arrow" sx={{ width: 24, height: 24, filter: "brightness(0) invert(1)" }} />
                  </Box>
                  <Box sx={{ position: "absolute", left: "20px", top: "354px", width: "336px", zIndex: 3 }}>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: hoverIdx === idx ? 800 : 700,
                        fontSize: hoverIdx === idx ? "26px" : "24px",
                        lineHeight: "29px",
                        color: "#FFFFFF",
                        mb: 1,
                        transform: hoverIdx === idx ? "translateY(-10px)" : "translateY(0)",
                        transition: "transform 0.35s ease, font-size 0.25s ease, font-weight 0.25s ease",
                      }}
                    >
                      {label}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "21px",
                        color: "#FFFFFF",
                        opacity: hoverIdx === idx ? 1 : 0,
                        maxHeight: hoverIdx === idx ? "120px" : 0,
                        overflow: "hidden",
                        transition: "opacity 0.35s ease, max-height 0.35s ease",
                      }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
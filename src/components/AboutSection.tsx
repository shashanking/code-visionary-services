import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import bgImg from "../assets/about_section_bg_image.png";
import laptopImg from "../assets/Laptop.png";

const AboutSection: React.FC = () => (
  <Box
    sx={{
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100vw",// Full viewport width
      height: "100vh", // Vertically fills the screen
      minHeight: 520,
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "space-between",
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: { xs: "center", md: "left" },
      overflowX: "hidden",
      overflowY: "hidden",
      boxSizing: "border-box",
      py: { xs: 2, md: 3 }, // only vertical padding
      px: 0, // no horizontal padding so image touches edge!
    }}
  >
    {/* Text Section */}
    <Box
      sx={{
        flex: 1,
        minWidth: { xs: "100%", md: 360 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: { xs: "center", md: "left" },
        pl: { xs: 2, sm: 8, md: 13, lg: 13 }, // Use padding-left for text only
        pr: { xs: 2, md: 0 }, // no padding-right so image is flush
        py: 0,
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Earth Orbiter', Arial, sans-serif",
          fontWeight: 700,
          textTransform: "uppercase",
          fontSize: { xs: 28, sm: 42, md: 48, lg: 35 },// responsive font size
          color: "#303030",
          lineHeight: 1.14,
          mb: { xs: 1, md: 1.5 },
        }}
      >
        YOUR PARTNER IN{" "}
        <Box component="span" sx={{ color: "#AD6236" }}>
          DIGITAL INNOVATION
        </Box>
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontFamily: "Montserrat, Arial, sans-serif",
          fontWeight: 400,
          fontSize: { xs: 16, md: 22 }, // responsive font size
          lineHeight: "30px",
          letterSpacing:"0%",
          color: "#444",
          maxWidth: 500,
          mb: 4,
        }}
      >
        At Code Visionary Studios, we design and build reliable digital
        products that move businesses forward. Our team blends strategy,
        clean design, and modern engineering to deliver fast, accessible
        websites and applications. From concept to launch, we partner with
        you to create experiences that look great and perform even better.
      </Typography>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px 40px",
          gap: "10px",
          isolation: "isolate",
          width: "192px",
          height: "50px",
          background: "#303030",
          borderRadius: "34px",
          cursor: "pointer",
          transition: "background 0.3s ease",
          "&:hover": {
            background: "#8c3320",
          },
        }}
      >
        <Typography
          sx={{
            width: "132px",
            height: "20px",
            fontFamily: "'Earth Orbiter Bold', Montserrat, sans-serif",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "20px",
            textAlign: "center",
            color: "#F0F0F0",
            flex: "none",
            order: 0,
            flexGrow: 0,
            zIndex: 0,
          }}
        >
          Learn More
        </Typography>
        <Box
          sx={{
            position: "absolute",
            width: "2px",
            height: "2px",
            left: "74px",
            top: "49px",
            background: "#F0F0F0",
            opacity: 0,
            flex: "none",
            order: 1,
            flexGrow: 0,
            zIndex: 1,
            transition: "opacity 0.3s ease",
          }}
        />
      </Box>
    </Box>

    {/* Laptop Image Section */}
    <Box
      sx={{
        flex: 1,
        minWidth: { xs: "100%", md: 460 },
        maxWidth: { xs: "100%", md: 1200 },
        mt: { xs: 6, md: 0 },
        display: "flex",
        justifyContent: { xs: "center", md: "flex-end" },
        alignItems: "flex-end",
        pr: { xs: 0, md: 0 }, // no padding-right, laptop flush
      }}
    >
      <Box
        component="img"
        src={laptopImg}
        alt="Laptop Graphic"
        sx={{
          width: { xs: "85vw", sm: 440, md: 520, lg: 1125 },
          height: "auto",
          borderRadius: 20,
          position: "relative",
          transform: { xs: "none", md: "translateY(24px)" },
          backgroundColor: "transparent",
          userSelect: "none",
        }}
      />
    </Box>
  </Box>
);

export default AboutSection;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import arrowIcon from "../assets/mingcute_arrow-up-line.png";

const HeroSection: React.FC = () => (
  <Box
    sx={{
      width: "100%",
      maxWidth: "100vw",
      overflowX: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      py: { xs: 6, md: 10 },
      px: { xs: 1, sm: 2, md: 6 },
      boxSizing: "border-box",
    }}
  >
    {/* Responsive container for heading text */}
    <Box sx={{ width: "100%", maxWidth: 1100, mx: "auto" }}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Earth Orbiter Bold', Montserrat, sans-serif",
          fontWeight: 400,
          fontSize: { xs: "2.1rem", sm: "2.9rem", md: "4rem", lg: "3.8rem" },
          lineHeight: 1.08,
          color: "#222222",
          mb: 1.8,
        }}
      >
        INNOVATIVE{" "}
        <Box component="span" sx={{ color: "#B5442C", display: "inline" }}>
          DIGITAL SOLUTIONS
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
        color: "#222222",
        mb: 2,
      }}
    >
      BUILT FOR IMPACT
    </Typography>

    <Typography
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 400,
        fontSize: 18,
        color: "#303030",
        maxWidth: 700,
        mx: "auto",
        mb: 5,
        lineHeight: 1.5,
      }}
    >
      At Code Visionary Services, we craft high-performance websites, software, and visual identities that elevate your brand and drive results. From code to creativity, we turn your ideas into powerful digital experiences.
    </Typography>

    <Button
      variant="contained"
      sx={{
        textTransform: "uppercase",
        borderRadius: "50px",
        fontWeight: 700,
        fontFamily: "'Earth Orbiter Bold', Montserrat, sans-serif",
        height: 56,
        fontSize: 18,
        px: 6,
        backgroundColor: "#000000",
        color: "#FFFFFF",
        display: "inline-flex",
        alignItems: "center",
        gap: 1.5,
        mx: "auto",
        transition: "background 0.35s, color 0.35s",
        "&:hover": {
          backgroundColor: "#8c3320",
          color: "#ffe2d1",
          "& .MuiBox-root": {
            transform: "translateX(7px) scale(1.16)",
            filter: "drop-shadow(0 0 2px #8c3320)",
          },
        },
        userSelect: "none",
      }}
    >
      Start a Project
      <Box
        component="img"
        src={arrowIcon}
        alt="Arrow Icon"
        sx={{
          width: 22,
          height: 22,
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), filter 0.35s",
          ml: 1,
        }}
      />
    </Button>
  </Box>
);

export default HeroSection;

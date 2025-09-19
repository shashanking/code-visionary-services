import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import bgArrows from "../assets/banner_section_bg_image.png"; // Background arrows image
import blueCard from "../assets/banner_section_blue_image.png";  // Blue card background image
import phoneStack from "../assets/banner_section_phone_image.png"; // Phone stack image

const BannerSection: React.FC = () => (
  <Box
    sx={{
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100vw",
      minHeight: { xs: 852, md: "100vh" },
      bgcolor: "#F0F0F0",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      px: { xs: 0, md: 2 },
      py: 0,
    }}
  >
    {/* Background arrows */}
    <Box
      component="img"
      src={bgArrows}
      alt=""
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />

    {/* Top/bottom subtle gradient overlay (Figma Rectangle 93) */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(180deg, #F0F0F0 0%, rgba(240,240,240,0) 50.48%, #F0F0F0 100%)",
        zIndex: 0,
        pointerEvents: "none",
      }}
    />

    {/* Blue card container with responsive layout */}
    <Box
      sx={{
        position: "relative",
        width: { xs: 360, md: "100%" },
        maxWidth: { xs: 360, md: 1300 },
        height: { xs: 587, md: 600 },
        borderRadius: { xs: 3, md: 4 },
        backgroundImage: { xs: "linear-gradient(180deg, #0861AA 0%, #032744 100%)", md: `url(${blueCard})` },
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.25)",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        overflow: "visible",
        zIndex: 1,
        mt: { xs: 14, md: 0 }, // approximate top spacing from Figma
        pt: { xs: 2, md: 0 },
      }}
    >
      {/* Left/Top: Phone image (visible on mobile, centered above content) */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          position: { xs: "relative", md: "relative" },
          pl: { xs: 0, sm: 0, md: 5 },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          alignItems: "center",
          overflow: "visible",
          pt: { xs: 2, md: 0 },
          top: { xs: 0, md: "auto" },
          left: { xs: "auto", md: "auto" },
          transform: { xs: "none", md: "none" },
          zIndex: { xs: 1, md: 1 },
        }}
      >
        <Box
          component="img"
          src={phoneStack}
          alt="Product preview phones"
          sx={{
            width: { xs: 240, sm: 260, md: 610 },
            height: "auto",
            mb: { xs: 0, md: 10 },
            ml: { xs: 0, sm: 0, md: 8 },
            position: "relative",
            left: { xs: 0, sm: 0, md: "-100px" },
            userSelect: "none",
            pointerEvents: "none",
            display: { xs: "block", md: "block" },
            filter: { xs: "drop-shadow(4px 4px 14.9px rgba(0, 0, 0, 0.5))", md: "none" },
          }}
        />
      </Box>

      {/* Right/Bottom: Text and buttons */}
      <Box
        sx={{
          width: { xs: "100%", md: "50%" },
          pr: { xs: 0, sm: 3, md: 8 },
          pl: { xs: 2, md: 0 },
          display: "flex",
          flexDirection: "column",
          justifyContent: { xs: "flex-end", md: "center" },
          color: "#fff",
          pb: { xs: 3, md: 0 },
          mt: { xs: 2, md: 0 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Earth Orbiter', 'Orbitron', sans-serif",
            fontWeight: 700,
            fontSize: { xs: 36, md: 44 },
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            mb: { xs: 2, md: 3 },
          }}
        >
          LET’S TALK STRATEGY
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 12, md: 18 },
            mb: { xs: 2, md: 4 },
            lineHeight: { xs: "18px", md: 1.6 },
            maxWidth: { xs: 321, md: 480 },
          }}
        >
          Ready to scale your business? Whether you need a cutting-edge website, a high-impact mobile app, or game-changing marketing strategies, Kyptronix is here to help.<br /><br />
          Book a <strong style={{ color: "#fff", textDecoration: "underline" }}>FREE</strong> consultation now and start seeing results. Our team is ready to deliver the future to your business today!
        </Typography>

        <Stack direction="row" spacing={2} sx={{ width: { xs: 321, md: "auto" } }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#F0F0F0",
              color: "#161616",
              px: { xs: 2, md: 5 },
              py: { xs: 0.5, md: 1.75 },
              borderRadius: { xs: 6, md: 3 },
              fontWeight: 700,
              fontSize: { xs: 14, md: 18 },
              boxShadow: { xs: "0px 0px 8px #B5442C", md: 3 },
              textTransform: "uppercase",
              "&:hover": { backgroundColor: { xs: "#ECECEC", md: "#e6e6ff" } },
              minWidth: { xs: 194, md: 180 },
              height: { xs: 32, md: 48 },
              borderRadiusFallback: "48px",
            }}
          >
            Schedule a Meeting
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "#B5442C",
              color: "#fff",
              px: { xs: 2, md: 5 },
              py: { xs: 0.5, md: 1.75 },
              borderRadius: { xs: 6, md: 3 },
              fontWeight: 700,
              fontSize: { xs: 14, md: 18 },
              boxShadow: { xs: "0px 0px 8px #B5442C", md: 3 },
              textTransform: "uppercase",
              "&:hover": {
                background: { xs: "#9c3b24", md: "linear-gradient(90deg, #c8462b 0%, #e86d3a 100%)" },
              },
              minWidth: { xs: 111, md: 140 },
              height: { xs: 32, md: 48 },
              borderRadiusFallback: "48px",
            }}
          >
            Call Now
          </Button>
        </Stack>
      </Box>
    </Box>
  </Box>
);

export default BannerSection;

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
      minHeight: "100vh",
      bgcolor: "#f9f9f9",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      px: 2,
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

    {/* Blue card container with two equal halves */}
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: 1300,
        height: { xs: 500, md: 600 },
        borderRadius: 4,
        backgroundImage: `url(${blueCard})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.25)",
        display: "flex",
        overflow: "visible",
        zIndex: 1,
      }}
    >
      {/* Left half: Phone image */}
      <Box
        sx={{
          width: "50%",
          position: "relative",
          pl: { xs: 2, sm: 3, md: 5 },
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          overflow: "visible",
        }}
      >
        <Box
          component="img"
          src={phoneStack}
          alt="Product preview phones"
          sx={{
            width: { xs: 170, sm: 250, md: 610 },
            height: "auto",
            mb: { xs: 4, md: 10 },
            ml: { xs: 6, sm: 8, md: 8 },
            // Allows part of phones to overflow left
            position: "relative",
            left: { xs: "-50px", sm: "-70px", md: "-100px" },
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* Right half: Text and buttons */}
      <Box
        sx={{
          width: "50%",
          pr: { xs: 3, sm: 6, md: 8 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Earth Orbiter', 'Orbitron', sans-serif",
            fontWeight: 700,
            fontSize: { xs: 26, md: 44 },
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            mb: 3,
          }}
        >
          LET’S TALK STRATEGY
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 15, md: 18 },
            mb: 4,
            lineHeight: 1.6,
            maxWidth: 480,
          }}
        >
          Ready to scale your business? Whether you need a cutting-edge website, a high-impact mobile app, or game-changing marketing strategies, Kyptronix is here to help.<br /><br />
          Book a <strong style={{ color: "#fff", textDecoration: "underline" }}>FREE</strong> consultation now and start seeing results. Our team is ready to deliver the future to your business today!
        </Typography>

        <Stack direction="row" spacing={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#fff",
              color: "#1a4ebd",
              px: 5,
              py: 1.75,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: 18,
              boxShadow: 3,
              textTransform: "uppercase",
              "&:hover": { backgroundColor: "#e6e6ff" },
              minWidth: 180,
            }}
          >
            Schedule a Meeting
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #e86d3a 0%, #c8462b 100%)",
              color: "#fff",
              px: 5,
              py: 1.75,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: 18,
              boxShadow: 3,
              textTransform: "uppercase",
              "&:hover": {
                background: "linear-gradient(90deg, #c8462b 0%, #e86d3a 100%)",
              },
              minWidth: 140,
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

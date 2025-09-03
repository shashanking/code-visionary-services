import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import bgArrows from "../assets/banner_section_bg_image.png";
import blueCard from "../assets/banner_section_blue_image.png";
import phoneStack from "../assets/banner_section_phone_image.png";

const BannerSection: React.FC = () => (
  <Box
    sx={{
      position: "relative",
      width: "100vw",
      height: "100vh",
      left: "50%",
      transform: "translateX(-50%)",
      bgcolor: "#f9f9f9",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
      py: 0,
    }}
  >
    {/* Arrows in background */}
    <Box
      component="img"
      src={bgArrows}
      alt=""
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        left: 0,
        top: 0,
        zIndex: 1,
        pointerEvents: "none",
      }}
    />

    {/* Blue card as flex row */}
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        width: { xs: "96vw", md: "130vw" },
        maxWidth: 1200,
        minHeight: { xs: 420, md: 520 },
        backgroundImage: `url(${blueCard})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: 5,
        boxShadow: 6,
        mx: "auto",
        zIndex: 2,
        overflow: "visible",
      }}
    >
      {/* Phone image left */}
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: 170, sm: 230, md: 340 },
          height: { xs: 340, sm: 420, md: 800 },
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          zIndex: 3,
          mt: { xs: -40, md: -50 }, // Pull phone up for overlap with card edge
          ml: { xs: 0, md: 15 }, // Left margin
        }}
      >
        <Box
          component="img"
          src={phoneStack}
          alt="App preview"
          sx={{
            width: "155%",
            height: "auto",
            display: "block",
            userSelect: "none",
            pointerEvents: "none",
          }}
        />
      </Box>

      {/* Content column - always right of phone */}
      <Stack
        spacing={3.5}
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          color: "#fff",
          pl: { xs: 3, sm: 4, md: 7 },
          pr: { xs: 2, md: 4 },
          py: { xs: 3, md: 0 },
          width: { xs: "60%", md: "62%" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Earth Orbiter', 'Orbitron', 'Roboto', sans-serif",
            fontWeight: 700,
            letterSpacing: 2,
            color: "#fff",
            textAlign: "right",
            ml: "auto",

            textTransform: "uppercase",
            fontSize: { xs: 26, sm: 38, md: 48 },
            mb: 1,
          }}
        >
          LET'S TALK STRATEGY
        </Typography>
        <Typography
          sx={{
            color: "#e8e8e8",
            fontWeight: 400,
            mb: 2.2,
            fontSize: { xs: 15, md: 18 },
            textAlign: "left",
            maxWidth: { xs: 330, sm: 430, md: 530 },
          }}
        >
          Ready to scale your business? Whether you need a cutting-edge website, a high-impact mobile app, or game-changing marketing strategies, Kyptronix is here to help. <br /><br />
          Book a <span style={{ color: '#fff', fontWeight: 600, textDecoration: 'underline' }}>FREE</span> consultation now and start seeing results. Our team is ready to deliver the future to your business today!
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            sx={{
              background: "#fff",
              color: "#0063b3",
              borderRadius: 6,
              fontWeight: 700,
              px: 4,
              py: 1.7,
              fontSize: 18,
              boxShadow: 2,
              "&:hover": { background: "#e9e9e9" },
            }}
          >
            SCHEDULE A MEETING
          </Button>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(90deg, #e86d3a 0%, #c8462b 100%)",
              color: "#fff",
              borderRadius: 6,
              fontWeight: 700,
              px: 4,
              py: 1.7,
              fontSize: 18,
              boxShadow: 2,
              "&:hover": { background: "linear-gradient(90deg, #c8462b 0%, #e86d3a 100%)" },
            }}
          >
            CALL NOW!
          </Button>
        </Stack>
      </Stack>
    </Box>
  </Box>
);

export default BannerSection;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import bgImg from "../assets/about_section_bg_image.png";
import laptopImg from "../assets/Laptop.png";

const AboutSection: React.FC = () => (
  <Box
    sx={{
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100vw",
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
        pl: { xs: 2, sm: 8, md: 13, lg: 20 }, // Use padding-left for text only
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
          fontSize: { xs: 28, sm: 42, md: 48 },
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
          fontSize: { xs: 16, md: 18 },
          color: "#444",
          maxWidth: 430,
          mb: 4,
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
        quis orci vitae quam aliquam dapibus. Aliquam a tincidunt nunc,
        posuere fringilla nunc. Ut dignissim scelerisque metus, id
        sollicitudin justo tincidunt eget.
      </Typography>
      <Button
        variant="contained"
        sx={{
          alignSelf: { xs: "center", md: "flex-start" },
          backgroundColor: "#232323",
          color: "#fff",
          fontWeight: 700,
          fontFamily: "'Earth Orbiter Bold', Arial, sans-serif",
          fontSize: 18,
          borderRadius: 40,
          px: 5,
          py: 1.3,
          boxShadow: "0 3px 14px rgba(44,62,80,0.08)",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#8c3320",
          },
        }}
      >
        Learn More
      </Button>
    </Box>

    {/* Laptop Image Section */}
    <Box
      sx={{
        flex: 1,
        minWidth: { xs: "100%", md: 460 },
        maxWidth: { xs: "100%", md: 820 },
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
          width: { xs: "85vw", sm: 440, md: 520, lg: 1000 },
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

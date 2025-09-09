import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";

// Import your image assets
import testimonialBg from "../assets/Testimonial_section_bg_image.png";
import profileImage from "../assets/Testimonial_section_profile_image.png";
import leftArrow from "../assets/Testimonial_section_left_arrow_vector_image.png"; 
import rightArrow from "../assets/Testimonial_section_right_arrow_vector_image.png"; 
import topLine from "../assets/Testimonial_section_vertical_line_on_top_image.png"; 

const CARD_WIDTH = 362;

const testimonials = [
  {
    name: "Rob Wat",
    title: "CEO of Kingdom Advisors",
    image: profileImage,
    text:
      "“The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast!”",
  },
  {
    name: "Jessica Smith",
    title: "CTO of TechStart",
    image: profileImage,
    text:
      "“We've worked with CVS on several development projects and they've been consistently excellent in communication, quality, and turnaround time. Highly recommended!”",
  },
  {
    name: "Alex Turner",
    title: "Head of Design, ColorX",
    image: profileImage,
    text:
      "“Code Visionary Studios delivers creative solutions with precision and speed. They are true partners and always exceed our expectations.”",
  },
  {
    name: "Ava Jones",
    title: "Co-Founder, EvoSoft",
    image: profileImage,
    text:
      "“Professional, thoughtful, and reliable. Working with CVS has been a fantastic experience since day one.”",
  },
];

const TestimonialSection: React.FC = () => {
  const [startIdx, setStartIdx] = useState(0);

  const visibleTestimonials = testimonials.slice(startIdx, startIdx + 3);
  const canGoLeft = startIdx > 0;
  const canGoRight = startIdx + 3 < testimonials.length;

  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${testimonialBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "160% 100%",
        backgroundPosition: "left center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
        px: { xs: 1, md: 6 },
        py: 4,
        overflow: "hidden",
      }}
    >
      {/* Header (TRANSPARENT BACKGROUND) */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1250,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          gap: 3.5,
          mb: 4,
          py: 2,
          px: { xs: 0, md: 0 },
          background: "transparent",
        }}
      >
        {/* Left: Arrow buttons */}
        <IconButton
          sx={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            bgcolor: "rgba(246,247,250,0.62)",
            border: "1.5px solid #eaecf0",
            mr: 1,
            boxShadow: "0 2px 8px rgba(44,65,121,0.09)",
            "&:hover": { bgcolor: "#e4e5ea" },
            p: 0,
            cursor: canGoLeft ? "pointer" : "not-allowed",
            opacity: canGoLeft ? 1 : 0.5,
            transition: "background 0.14s",
          }}
          disabled={!canGoLeft}
          onClick={() => setStartIdx((s) => Math.max(0, s - 1))}
          aria-label="Previous testimonial"
        >
          <img src={leftArrow} alt="Previous" width={34} height={34} />
        </IconButton>
        <IconButton
          sx={{
            width: 52,
            height: 52,
            borderRadius: "50%",
            bgcolor: "rgba(246,247,250,0.62)",
            border: "1.5px solid #eaecf0",
            boxShadow: "0 2px 8px rgba(44,65,121,0.09)",
            "&:hover": { bgcolor: "#e4e5ea" },
            p: 0,
            cursor: canGoRight ? "pointer" : "not-allowed",
            opacity: canGoRight ? 1 : 0.5,
            transition: "background 0.14s",
            mr: 2.2,
          }}
          disabled={!canGoRight}
          onClick={() => setStartIdx((s) => Math.min(testimonials.length - 3, s + 1))}
          aria-label="Next testimonial"
        >
          <img src={rightArrow} alt="Next" width={34} height={34} />
        </IconButton>

        {/* Vertical line as image */}
        <Box
          component="img"
          src={topLine}
          alt=""
          sx={{
            height: 42,
            width: 11,
            mr: 3.2,
            display: { xs: "none", sm: "inline-block" },
            objectFit: "contain",
            alignSelf: "stretch",
            mb: 0,
          }}
        />

        {/* Text block */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Earth Orbiter', Arial, sans-serif",
              fontWeight: 700,
              color: "#232323",
              fontSize: { xs: 23, md: 38 },
              letterSpacing: { xs: ".12em", md: ".17em" },
              textTransform: "uppercase",
              mb: 1.2,
              lineHeight: 1.16,
              textAlign: "left",
              display: "block",
            }}
          >
            WHAT OUR <Box component="span" sx={{ color: "#B5442C", display: "inline" }}>CLIENTS</Box> SAY
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: 16, md: 19 },
              lineHeight: 1.57,
              color: "#575757",
              textAlign: "left",
              maxWidth: 780,
            }}
          >
            Discover how Code Visionary Studios has made a difference for our clients. Our testimonials showcase the positive impact of our web design, app development, branding, and digital marketing services.
          </Typography>
        </Box>
      </Box>

      {/* Testimonial Cards */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1250,
          mx: "auto",
          display: "flex",
          justifyContent: "center",
          gap: 3,
        }}
      >
        {visibleTestimonials.map((item, idx) => {
          const globalIndex = startIdx + idx;
          const isActive = globalIndex === startIdx + 1;

          return (
            <Card
              key={item.name + globalIndex}
              sx={{
                width: CARD_WIDTH,
                borderRadius: 3,
                border: isActive ? "2px solid #B5442C" : "1px solid #C4C4C4",
                boxShadow: isActive ? "0 0 40px rgba(181,68,70,0.2)" : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 3,
                cursor: "default",
                transition: "border 0.3s, box-shadow 0.3s",
                userSelect: "none"
              }}
            >
              <Avatar
                src={item.image}
                alt={item.name}
                sx={{
                  width: 70,
                  height: 70,
                  marginBottom: 2,
                  border: isActive ? "2.5px solid #B5442C" : "2px solid transparent",
                  boxShadow: isActive ? "0 0 10px rgba(255,255,255,0.7)" : "none",
                  backgroundColor: "#fff",
                }}
              />
              <Typography
                sx={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: 16,
                  color: "#444",
                  marginBottom: 3,
                  flexGrow: 1,
                  textAlign: "left",
                  wordBreak: "break-word",
                }}
              >
                {item.text}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: 18,
                  color: isActive ? "#B5442C" : "#333",
                }}
              >
                {item.name}
              </Typography>
              <Typography sx={{ fontSize: 14, color: "#777" }}>
                {item.title}
              </Typography>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default TestimonialSection;

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";

import bgImg from "../assets/tech_stack_section_bg_image.png";
import reactLogo from "../assets/tech_stack_section_tech1_image.png";
import angularLogo from "../assets/tech_stack_section_tech2_image.png";
import laravelLogo from "../assets/tech_stack_section_tech4_image.png";
import wordpressLogo from "../assets/tech_stack_section_tech3_image.png";

const mainTechs = [
  // Web Development
  { label: "React", img: reactLogo },
  { label: "Angular", img: angularLogo, active: true },
  { label: "Next.js" },
  { label: "Node.js" },
  { label: "Vue" },
  { label: "Svelte" },
  // Back-end & APIs
  { label: "Laravel", img: laravelLogo },
  { label: "NestJS" },
  { label: "Express" },
  // CMS / Platforms
  { label: "WordPress", img: wordpressLogo },
  { label: "Shopify" },
  { label: "Webflow" },
  // Mobile
  { label: "React Native" },
  { label: "Flutter" },
  // Data / DB
  { label: "MongoDB" },
  { label: "PostgreSQL" },
  { label: "MySQL" },
  // Design
  { label: "Figma" },
  { label: "Adobe XD" },
  // SEO / Analytics
  { label: "Google Analytics" },
  { label: "Search Console" },
  { label: "SEMrush" },
  { label: "Ahrefs" },
  // Blockchain
  { label: "Solidity" },
  { label: "Ethereum" },
];

const techTags = [
  { label: "Web Development", highlighted: true },
  { label: "App Development" },
  { label: "Marketing" },
  { label: "AI" },
  { label: "Design" },
  { label: "SEO Tools" },
  { label: "Blockchain" },
];

const TechStackSection = () => {
  const [activeTag, setActiveTag] = useState<string>("Web Development");
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const tagToTechs: Record<string, string[]> = {
    "Web Development": [
      "React",
      "Angular",
      "Next.js",
      "Node.js",
      "Vue",
      "Svelte",
      "Express",
      "NestJS",
    ],
    "App Development": ["React Native", "Flutter"],
    Marketing: ["Shopify", "Webflow"],
    AI: ["Next.js", "Node.js"],
    Design: ["Figma", "Adobe XD"],
    "SEO Tools": ["Google Analytics", "Search Console", "SEMrush", "Ahrefs"],
    Blockchain: ["Solidity", "Ethereum"],
  };

  const visibleTechs = mainTechs.filter((t) =>
    (tagToTechs[activeTag] || ["React", "Angular", "Laravel", "WordPress"]).includes(t.label)
  );

  const displayTechs = isXs ? visibleTechs.slice(0, 5) : visibleTechs;

  // Auto-rotate selected chip every ~2.5s based on current activeTag
  // Disable rotation on mobile to avoid UI jumping
  useEffect(() => {
    if (isXs) return;
    const interval = setInterval(() => {
      const currentIdx = techTags.findIndex((t) => t.label === activeTag);
      const nextIdx = (currentIdx + 1) % techTags.length;
      setActiveTag(techTags[nextIdx].label);
    }, 2500);
    return () => clearInterval(interval);
  }, [activeTag, isXs]);

  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw", // Full viewport width
        height: { xs: 852, md: "100vh" }, // fixed height on mobile per design
        overflow: "hidden",
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: { xs: "top center", md: "center center" },
        backgroundSize: "cover", // Ensures full coverage, scales correctly
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        m: 0, // Remove default margin if any
        p: 0, // Remove default padding if any
        overflowX: "hidden", // prevent mobile horizontal scroll
      }}
      id="services"
    >
      {/* Top/bottom subtle gradient overlay to match Figma mobile (kept below elements) */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #F0F0F0 0%, rgba(240,240,240,0) 50%, #F0F0F0 100%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      {/* Main Content Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100%", md: "100vw" },
          height: { xs: "100%", md: "760px" },
          maxWidth: 1600,
          mx: "auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left Side - Tech cards grid */}
        <Box
          sx={{
            zIndex: 1,
            transform: { xs: "none", md: "translateX(-16%)" },
            width: { xs: "100%", md: "55vw" },
            maxWidth: { xs: 380, lg: "820px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 0,
            order: { xs: 1, md: 1 }, // grid first on mobile
            px: { xs: 2, md: 0 },
            mt: { xs: 2, md: 0 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              display: "grid",
              gridTemplateColumns: { xs: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(2, 1fr)" },
              gap: { xs: 2, sm: 2.5, md: 4 },
              width: { xs: "100%", md: "auto" },
              maxWidth: { xs: 360, sm: 520, md: "unset" },
              // Allow full three rows on mobile
              overflow: { xs: "visible", md: "visible" },
              alignContent: { xs: "center", md: "stretch" },
              mt: { xs: 2, md: 0 },
              mb: { xs: 4, md: 0 },
              justifyItems: { xs: "center", md: "stretch" },
            }}
          >
            {displayTechs.map(({ label, img, active }, idx) => (
              <Box
                key={label}
                sx={{
                  background: active
                    ? "linear-gradient(135deg, #b44a2c 0%, #882f1a 100%)"
                    : "#fff",
                  borderRadius: 12,
                  boxShadow: active
                    ? "0 10px 25px rgba(180,74,44,0.33)"
                    : "0 2px 12px rgba(33,52,100,0.09)",
                  border: active ? "none" : "2px solid #EDF1F6",
                  cursor: "pointer",
                  width: { xs: 128, sm: 136, md: 165 },
                  height: { xs: 128, sm: 136, md: 165 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 1,
                  color: active ? "#fff" : "#143255",
                  transition: "box-shadow 0.3s",
                  "&:hover": {
                    boxShadow: active
                      ? "0 24px 50px rgba(180,74,44,0.42)"
                      : "0 6px 22px rgba(33,52,100,0.19)",
                  },
                  // 2-2-1 layout on mobile: last item spans and centers
                  gridColumn: { xs: idx === displayTechs.length - 1 ? "1 / -1" : "auto", md: "auto" },
                  justifySelf: { xs: idx === displayTechs.length - 1 ? "center" : "stretch", md: "auto" },
                }}
              >
                {img ? (
                  <Box
                    component="img"
                    src={img}
                    alt={label}
                    sx={{
                      width: { xs: 44, sm: 44, md: 58 },
                      height: { xs: 44, sm: 44, md: 58 },
                      objectFit: "contain",
                      filter: active ? "none" : "grayscale(55%)",
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      width: { xs: 44, sm: 44, md: 58 },
                      height: { xs: 44, sm: 44, md: 58 },
                      borderRadius: "50%",
                      background: active ? "rgba(255,255,255,0.22)" : "#EDF1F6",
                      color: active ? "#fff" : "#143255",
                      fontWeight: 800,
                      fontFamily: "Montserrat, Arial, sans-serif",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textTransform: "uppercase",
                      letterSpacing: 0.6,
                    }}
                  >
                    {label.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </Box>
                )}
                <Typography
                  sx={{
                    mt: 1.5,
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: { xs: 15, sm: 16, md: 22 },
                    textAlign: "center",
                    color: active ? "#fff" : "#143255",
                    letterSpacing: 0,
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Right Side - Text and tags */}
        <Box
          sx={{
            zIndex: 2,
            width: { xs: "100%", md: "45vw" },
            maxWidth: { xs: 380, lg: "680px" },
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            px: { xs: 2, md: 10 },
            py: { xs: 2, md: 14 },
            background: "transparent", // Removed white/light background
            borderTopRightRadius: { xs: 0, md: 40 },
            borderBottomRightRadius: { xs: 0, md: 40 },
            textAlign: { xs: "center", md: "left" },
            order: { xs: 1, md: 2 }, // text above grid on mobile
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Earth Orbiter', Arial, sans-serif",
              fontWeight: 700,
              fontSize: { xs: 19, md: 26 },
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#b44a2c",
              mb: 1,
              lineHeight: 1,
            }}
          >
            TECHNOLOGIES
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Earth Orbiter', Arial, sans-serif",
              fontWeight: 700,
              fontSize: { xs: 24, md: 38 },
              letterSpacing: 2,
              textTransform: "uppercase",
              color: "#143255",
              mb: 4,
              lineHeight: 1.17,
            }}
          >
            WE WORK WITH
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: 15, md: 19 },
              lineHeight: 1.7,
              color: "#3C4454",
              mb: 6,
              maxWidth: { xs: "100%", md: 540 },
            }}
          >
            At CVS, we stay ahead of the curve by using the latest technology to ensure your success. Our experts leverage the most powerful tools and frameworks to deliver high-performing, future-proof digital solutions.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 1, md: 2 },
              width: "100%",
              maxWidth: { xs: 360, md: 530 },
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            {techTags.map(({ label }) => (
              <Chip
                key={label}
                label={label}
                variant={activeTag === label ? "filled" : "outlined"}
                sx={{
                  borderRadius: "20px",
                  px: { xs: 1.5, md: 2.5 },
                  py: { xs: 0.6, md: 1 },
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: 13, md: 16 },
                  color: activeTag === label ? "#fff" : "rgba(22, 22, 22, 1)",
                  backgroundColor: activeTag === label ? "#232323" : "#fff",
                  borderColor: activeTag === label ? "transparent" : "rgba(22, 22, 22, 0.35)",
                  boxShadow: activeTag === label ? "0 4px 12px rgba(0,0,0,0.18)" : "none",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#b44a2c",
                    color: "#fff",
                  },
                }}
                onClick={() => {
                  setActiveTag(label);
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TechStackSection;

import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import bgImg from "../assets/our-team-background-section-image.png";

const teamMembers = [
  { name: "Sahil Biswas", role: "Co-founder" },
  { name: "Vikash Jha", role: "Co-founder, CEO" },
  { name: "Shashank Singh", role: "Co-founder" },
  { name: "Sayan Choudhury", role: "Co-founder" },
  { name: "Pradip Choudhury", role: "Founder" },
];

const CARD_WIDTH = 220;
const ACTIVE_CARD_WIDTH = 260;
const CARD_HEIGHT = 340;
const ACTIVE_CARD_HEIGHT = 380;
const UP_TRANSLATE = -26;
const DOWN_TRANSLATE = 26;

const OurTeamSection = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(1);

  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        boxSizing: "border-box",
        py: 10,
        px: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
          fontSize: { xs: 56, md: 110 },
          color: "rgba(85, 131, 185, 0.11)",
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          userSelect: "none",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          width: "100%",
          textAlign: "center",
          lineHeight: 1,
          zIndex: 0,
          letterSpacing: "0.08em",
        }}
      >
        OUR TEAM
      </Typography>

      <Box
        sx={{
          maxWidth: 1300,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          gap: 3,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          py: 8,
          position: "relative",
          zIndex: 1,
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {teamMembers.map((member, idx) => {
          const isActive = hoverIndex === idx;
          const translateY = idx % 2 === 0 ? UP_TRANSLATE : DOWN_TRANSLATE;

          return (
            <Card
              key={member.name}
              tabIndex={0}
              onMouseEnter={() => setHoverIndex(idx)}
              onMouseLeave={() => setHoverIndex(null)}
              onFocus={() => setHoverIndex(idx)}
              onBlur={() => setHoverIndex(null)}
              sx={{
                position: "relative",
                flexShrink: 0,
                width: isActive ? ACTIVE_CARD_WIDTH : CARD_WIDTH,
                height: isActive ? ACTIVE_CARD_HEIGHT : CARD_HEIGHT,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: isActive
                  ? "0 12px 40px rgba(0, 0, 0, 0.3)"
                  : "0 4px 12px rgba(0, 0, 0, 0.1)",
                cursor: "pointer",
                color: "#fff",
                transform: `translateY(${translateY}px) scale(${isActive ? 1.1 : 1})`,
                transition: "all 0.3s ease",
                zIndex: isActive ? 10 : 1,
                display: "flex",
                flexDirection: "column",
                background: isActive
                  ? "linear-gradient(160deg, #223B5A 0%, #0F2238 100%)"
                  : "linear-gradient(160deg, #324D6B 0%, #1C3551 100%)",
              }}
            >
              <Box sx={{ flex: 1 }} />
              <Box
                sx={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.46) 0%, rgba(0,0,0,0.0) 100%)",
                  borderBottomLeftRadius: 18,
                  borderBottomRightRadius: 18,
                  color: "#fff",
                  p: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.1 }}>
                  {member.name}
                </Typography>
                <Typography variant="subtitle2" sx={{ opacity: 0.94 }}>
                  {member.role}
                </Typography>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default OurTeamSection;

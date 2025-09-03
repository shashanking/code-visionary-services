import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import { useState } from "react";

// Images
import bgImg from "../assets/our-team-background-section-image.png";
import vikashImg from "../assets/our_team_vikash_image.png";
import sahilImg from "../assets/our_team_sahil_image.png";
import shashankImg from "../assets/our_team_shashank_image.png";
import sayanImg from "../assets/our_team_shayan_image.png";
import pradipImg from "../assets/our_team_pradep_image.png";

const teamMembers = [
  {
    name: "Vikash Jha",
    role: "Co-founder",
    img: vikashImg,
  },
  {
    name: "Sahil Biswas",
    role: "Co-founder",
    img: sahilImg,
  },
  {
    name: "Shashank Singh",
    role: "Co-founder",
    img: shashankImg,
  },
  {
    name: "Sayan Choudhury",
    role: "Co-founder",
    img: sayanImg,
  },
  {
    name: "Pradip Choudhury",
    role: "Founder",
    img: pradipImg,
  },
];

const OurTeamSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        height: "100vh",
        minHeight: 600,
        maxHeight: 900,
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflowX: "hidden",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 0, md: 0 },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Orbitron', sans-serif",
          fontWeight: 700,
          fontSize: { xs: 70, md: 120 },
          color: "rgba(140, 179, 215, 0.15)",
          textAlign: "center",
          userSelect: "none",
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          zIndex: 0,
          pointerEvents: "none",
          whiteSpace: "nowrap",
        }}
      >
        OUR TEAM
      </Typography>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 1, md: 4 },
          width: "100%",
          maxWidth: 1100,
          display: "flex",
          justifyContent: "center",
          gap: 4,
          flexWrap: "nowrap",
          overflowX: { xs: "auto", md: "unset" },
          scrollSnapType: "x mandatory",
          '& > *': {
            scrollSnapAlign: "center",
          },
        }}
      >
        {teamMembers.map((member, index) => {
          const isActive = activeIndex === index;
          return (
            <Card
              key={member.name}
              onClick={() => setActiveIndex(index)}
              sx={{
                flex: isActive ? "0 0 230px" : "0 0 170px",
                height: isActive ? 340 : 260,
                borderRadius: 4,
                background: isActive ? "#2B7EE0" : "#f5f7fb", // Blue background only below image
                color: isActive ? "#fff" : "#333",
                cursor: "pointer",
                boxShadow: isActive ? "0 8px 32px rgba(44, 62, 80, 0.15)" : "0 2px 12px rgba(0,0,0,0.1)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                userSelect: "none",
                transition: "all 0.3s ease-in-out",
                scrollSnapAlign: "center",
                p: 0, // Remove padding to allow image edge-to-edge
              }}
            >
              {/* Image fills the top */}
              <Box sx={{ width: "100%", height: "70%", minHeight: 0 }}>
                <Box
                  component="img"
                  src={member.img}
                  alt={member.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    filter: isActive ? "none" : "grayscale(100%) brightness(0.75)",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    margin: 0,
                  }}
                />
              </Box>
              {/* Info area has card background */}
              <Box sx={{
                p: 2,
                textAlign: "center",
                width: "100%",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}>
                <Typography sx={{ fontWeight: 'bold', fontSize: isActive ? 18 : 16, mb: member.role ? 0.5 : 0 }}>
                  {member.name}
                </Typography>
                {member.role && (
                  <Typography sx={{ fontSize: 14, color: isActive ? '#c9e4fd' : '#666' }}>
                    {member.role}
                  </Typography>
                )}
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default OurTeamSection;

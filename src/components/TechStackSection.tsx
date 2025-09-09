import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import bgImg from "../assets/tech_stack_section_bg_image.png";
import reactLogo from "../assets/tech_stack_section_tech1_image.png";
import angularLogo from "../assets/tech_stack_section_tech2_image.png";
import laravelLogo from "../assets/tech_stack_section_tech4_image.png";
import wordpressLogo from "../assets/tech_stack_section_tech3_image.png";

const mainTechs = [
  { label: "React", img: reactLogo },
  { label: "Angular", img: angularLogo, active: true },
  { label: "Laravel", img: laravelLogo },
  { label: "WordPress", img: wordpressLogo },
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

const TechStackSection = () => (
  <Box
    sx={{
      position: "relative",
      left: "50%",
      transform: "translateX(-50%)",
      width: "100vw",// Full viewport width
      height: "100vh", // Vertically fills the screen
      overflow: "hidden",
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      backgroundSize: "cover", // Ensures full coverage, scales correctly
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxSizing: "border-box",
      m: 0, // Remove default margin if any
      p: 0, // Remove default padding if any
    }}
  >
    {/* Main Content Wrapper */}
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: { xs: "auto", md: "760px" },
        maxWidth: 1600,
        mx: "auto",
        position: "relative",
      }}
    >
      {/* Left Side - Tech cards grid */}
      <Box
        sx={{
          zIndex: 1,
      transform: "translateX(-16%)",
          width: { xs: "100vw", md: "55vw" },
          maxWidth: { xs: "100vw", lg: "820px" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 0,
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: { xs: 2, md: 4 },
          }}
        >
          {mainTechs.map(({ label, img, active }) => (
            <Box
              key={label}
              sx={{
                background: active
                  ? "linear-gradient(135deg, #b44a2c 0%, #882f1a 100%)"
                  : "#fff",
                borderRadius: 4,
                boxShadow: active
                  ? "0 10px 25px rgba(180,74,44,0.33)"
                  : "0 2px 12px rgba(33,52,100,0.09)",
                border: active ? "none" : "2px solid #EDF1F6",
                cursor: "pointer",
                width: { xs: 120, md: 175 },
                height: { xs: 120, md: 175 },
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
              }}
            >
              <Box
                component="img"
                src={img}
                alt={label}
                sx={{
                  width: { xs: 44, md: 63 },
                  height: { xs: 44, md: 63 },
                  objectFit: "contain",
                  filter: active ? "none" : "grayscale(55%)",
                }}
              />
              <Typography
                sx={{
                  mt: 2,
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: 18, md: 24 },
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
          width: { xs: "100vw", md: "45vw" },
          maxWidth: { xs: "100vw", lg: "680px" },
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: { xs: "center", md: "flex-start" },
          px: { xs: 2, md: 10 },
          py: { xs: 2, md: 14 },
          background: "transparent",  // Removed white/light background
          borderTopRightRadius: { xs: 0, md: 40 },
          borderBottomRightRadius: { xs: 0, md: 40 },
          textAlign: { xs: "center", md: "left" },
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
            gap: 2,
            width: "100%",
            maxWidth: { xs: 320, md: 530 },
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          {techTags.map(({ label, highlighted }) => (
            <Chip
              key={label}
              label={label}
              variant={highlighted ? "filled" : "outlined"}
              sx={{
                borderRadius: "20px",
                px: 2.5,
                py: 1,
                fontFamily: "Montserrat, Arial, sans-serif",
                fontWeight: 600,
                fontSize: 16,
                color: highlighted ? "#fff" : "#232323",
                backgroundColor: highlighted ? "#232323" : "#fff",
                borderColor: highlighted ? "transparent" : "#bbb",
                boxShadow: highlighted ? "0 4px 12px rgba(0,0,0,0.18)" : "none",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#b44a2c",
                  color: "#fff",
                },
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);

export default TechStackSection;

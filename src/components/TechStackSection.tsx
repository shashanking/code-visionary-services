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
      width: "100vw",
      height: "100vh",
      py: { xs: 6, md: 10 },
      backgroundImage: `url(${bgImg})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "center",
      alignItems: "center",
      gap: { xs: 4, md: 6 },
      overflow: "hidden",
      px: { xs: 3, md: 6 },
      boxSizing: "border-box",
    }}
  >
    {/* Tech Cards Side */}
    <Box
      sx={{
        width: { xs: "100%", md: "30%" }, // Fix left width
        maxWidth: 500,
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: { xs: 2, md: 5 },
        px: 0,
        py: { xs: 4, md: 0 },
        boxSizing: "border-box",
        alignItems: "center",
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
              ? "0 10px 25px rgba(180,74,44,.33)"
              : "0 4px 14px rgba(33,42,70,.09)",
            border: active ? "none" : "1.75px solid #eee",
            cursor: "pointer",
            height: 142,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
            color: active ? "#fff" : "#222",
            transition: "box-shadow 0.3s ease",
            "&:hover": {
              boxShadow: active
                ? "0 18px 44px rgba(180,74,44,.4)"
                : "0 12px 38px rgba(33,42,70,.18)",
            },
          }}
        >
          <Box
            component="img"
            src={img}
            alt={label}
            sx={{
              width: 58,
              height: 58,
              objectFit: "contain",
              filter: active ? "none" : "grayscale(65%)",
            }}
          />
          <Typography
            sx={{
              mt: 2,
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 700,
              fontSize: 21,
              textAlign: "center",
              color: active ? "#fff" : "#222",
            }}
          >
            {label}
          </Typography>
        </Box>
      ))}
    </Box>
    {/* Text and Tags Side (expanded to right) */}
    <Box
      sx={{
        width: { xs: "100%", md: "70%" }, // expand right text section!
        maxWidth: { xs: "100%", md: "100%" }, // remove upper constraint
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
        px: { xs: 2, md: 45 }, // moderate padding
        py: { xs: 3, md: 80 },
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Earth Orbiter', Arial, sans-serif",
          fontWeight: 700,
          fontSize: { xs: 18, md: 22 },
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#a54a2a",
          mb: 1,
        }}
      >
        TECHNOLOGIES
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Earth Orbiter', Arial, sans-serif",
          fontWeight: 700,
          fontSize: { xs: 20, md: 28 },
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#222",
          mb: 3,
        }}
      >
        WE WORK WITH
      </Typography>
      <Typography
        sx={{
          fontFamily: "Montserrat, Arial, sans-serif",
          fontWeight: 400,
          fontSize: { xs: 15, md: 17 },
          lineHeight: 1.7,
          color: "#444",
          mb: 5,
          maxWidth: "100%", // allow expansion
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
          maxWidth: 650,
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {techTags.map(({ label, highlighted }) => (
          <Chip
            key={label}
            label={label}
            variant={highlighted ? "filled" : "outlined"}
            sx={{
              borderRadius: 2,
              px: 2.5,
              py: 1,
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 600,
              fontSize: 15,
              color: highlighted ? "#fff" : "#222",
              backgroundColor: highlighted ? "#232323" : "transparent",
              borderColor: highlighted ? "transparent" : "#bbb",
              boxShadow: highlighted ? "0 4px 10px rgba(0,0,0,0.20)" : "none",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#ad6236",
                color: "#fff",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  </Box>
);

export default TechStackSection;

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Paper from "@mui/material/Paper";

import kaltechImg from "../assets/portfolio_Responsive_design-1.png";
import gutCheckImg from "../assets/portfolio_Responsive_design-2.png";
import moneyBlasterImg from "../assets/portfolio_Responsive_design-3.png";
import dorjiEcommerceImg from "../assets/portfolio_Responsive_design-4.png";
import harmonyRehabImg from "../assets/portfolio_Responsive_design-5.png";
import ospDashboardImg from "../assets/portfolio_Responsive_design-6.png";
import bgImg from "../assets/portfolio_bg_image.png";

const categories = [
  { label: "All", active: true },
  { label: "Websites" },
  { label: "Mobile applications" },
  { label: "Web applications" },
  { label: "Branding" },
];

const portfolioItems = [
  { title: "KALTECH CONSULTANCY", img: kaltechImg, url: "#", description: "", bg: "rgba(44, 62, 80, 0.68)" },
  { title: "GUT CHECK", img: gutCheckImg, url: "#", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque mollis sagittis finibus.", bg: "linear-gradient(180deg, #86E3B3 0%, #7AD1B6 100%)" },
  { title: "MONEY BLASTER", img: moneyBlasterImg, url: "#", description: "", bg: "linear-gradient(180deg, #FFD6DC 0%, #FEB9C8 100%)" },
  { title: "DORJI ECOMMERCE", img: dorjiEcommerceImg, url: "#", description: "", bg: "rgba(130, 90, 40, 0.5)" },
  { title: "HARMONY REHAB", img: harmonyRehabImg, url: "#", description: "", bg: "linear-gradient(180deg, #F8CDFE 0%, #ECBCED 100%)" },
  { title: "OSP DASHBOARD", img: ospDashboardImg, url: "#", description: "", bg: "rgba(44, 62, 80, 0.88)" },
];

const PortfolioSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
        boxSizing: "border-box",
        px: 0,
        py: 0,
      }}
    >
      <Box
        sx={{
          width: { xs: "95vw", md: "90vw", lg: "1200px" },
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: "'Earth Orbiter Bold', Arial, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "24px", md: "48px" },
            letterSpacing: "0.06em",
            color: "#2961A6",
            mb: 0,
          }}
        >
          OUR WORK
        </Typography>

        {/* Category Pills */}
        <Box
          sx={{
            width: { xs: "98vw", md: "88vw", lg: "1200px" },
            maxWidth: "1200px",
            mx: "auto",
            mt: { xs: 2, md: 3 },
            mb: { xs: 3, md: 4 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: { xs: 1.5, md: 2.5 },
            boxSizing: "border-box",
          }}
        >
          <Paper
            elevation={0}
            sx={{
              bgcolor: "#0861AA1A",
              borderRadius: "49px",
              px: { xs: 1.5, sm: 3, md: 1 },
              py: { xs: 1.1, md: 0.3 },
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              flexWrap: { xs: "wrap", md: "nowrap" },
              overflow: "visible",
              minWidth: 0,
              width: "auto",
              boxSizing: "border-box",
            }}
          >
            {categories.map((cat) => (
              <Button
                key={cat.label}
                variant="text"
                disableElevation
                disableRipple
                sx={{
                  px: 2.7,
                  py: 0.7,
                  borderRadius: "800px",
                  minWidth: "unset",
                  fontWeight: cat.label === "All" ? 700 : 500,
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: { xs: "1rem", md: "1rem" },
                  textTransform: "none",
                  color: cat.label === "All" ? "#FFF" : "#26405E",
                  background: cat.label === "All" ? "#B5442C" : "transparent",
                  boxShadow: "none",
                  transition: "background 0.18s, color 0.18s",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#B5442C",
                    color: "#FFF",
                  },
                }}
              >
                {cat.label}
              </Button>
            ))}

            <Button
              variant="text"
              disableElevation
              disableRipple
              sx={{
                px: 4,
                py: 0.3,
                ml: -1,
                borderRadius: "800px",
                fontWeight: 700,
                fontFamily: "'Earth Orbiter', Arial, sans-serif",
                fontSize: { xs: "1rem", md: "1rem" },
                textTransform: "none",
                color: "#FFF",
                background: "#212A36",
                boxShadow: "none",
                transition: "background 0.18s",
                cursor: "pointer",
                "&:hover": {
                  background: "#B5442C",
                },
              }}
            >
              VIEW ALL
            </Button>
          </Paper>
        </Box>

        {/* Portfolio Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
            gap: 4,
            px: { xs: 2, md: 4, lg: 0 },
            width: "110%",
            boxSizing: "border-box",
            mx: -8,
            alignItems: "center",
          }}
        >
          {portfolioItems.map(({ title, img, url, description, bg }, idx) => (
            <Card
              key={title}
              sx={{
                borderRadius: "24px",
                boxShadow: 6,
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                height: 220,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                background: bg,
                transition: "transform 0.3s cubic-bezier(.3,1.1,.7,1)",
                "&:hover": {
                  transform: "translateY(-6px) scale(1.03)",
                  boxShadow: "0 14px 44px 0 rgba(44,65,121,0.10)",
                },
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onClick={() => window.open(url, "_blank")}
              aria-label={`View project: ${title}`}
            >
              <CardActionArea sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  image={img}
                  alt={title}
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    left: 0,
                    top: 0,
                    zIndex: 0,
                  }}
                />
                <CardContent
                  sx={{
                    position: "relative",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "flex-end",
                    px: 3,
                    pb: 3,
                    zIndex: 1,
                    background:
                      hoveredIdx === idx
                        ? "linear-gradient(180deg, rgba(44,65,121,0.0) 40%, rgba(44,65,121,0.76) 100%)"
                        : "linear-gradient(180deg, rgba(44,65,121,0) 60%, rgba(44,65,121,0.6) 100%)",
                    transition: "background 0.35s cubic-bezier(.7,.3,.3,1)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Earth Orbiter', Arial, sans-serif",
                      fontWeight: 700,
                      color: "#fff",
                      mb: hoveredIdx === idx ? 1.5 : 0,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                      fontSize: { xs: "1.08rem", md: "1.19rem" },
                      transition: "margin-bottom 0.3s",
                    }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    sx={{
                      opacity: hoveredIdx === idx && description ? 1 : 0,
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: 400,
                      transition: "opacity 0.25s cubic-bezier(.7,.3,.3,1)",
                    }}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default PortfolioSection;

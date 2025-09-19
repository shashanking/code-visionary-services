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
  { label: "All" },
  { label: "Websites" },
  { label: "Mobile applications" },
  { label: "Web applications" },
  { label: "Branding" },
];

const portfolioItems = [
  { title: "KALTECH CONSULTANCY", category: "Websites", img: kaltechImg, url: "#", description: "", bg: "rgba(44, 62, 80, 0.68)" },
  { title: "GUT CHECK", category: "Websites", img: gutCheckImg, url: "#", description: "Website redesign focused on clarity, performance, and higher conversions across devices.", bg: "linear-gradient(180deg, #86E3B3 0%, #7AD1B6 100%)" },
  { title: "MONEY BLASTER", category: "Websites", img: moneyBlasterImg, url: "#", description: "", bg: "linear-gradient(180deg, #FFD6DC 0%, #FEB9C8 100%)" },
  { title: "DORJI ECOMMERCE", category: "Web applications", img: dorjiEcommerceImg, url: "#", description: "", bg: "rgba(130, 90, 40, 0.5)" },
  { title: "HARMONY REHAB", category: "Websites", img: harmonyRehabImg, url: "#", description: "", bg: "linear-gradient(180deg, #F8CDFE 0%, #ECBCED 100%)" },
  { title: "OSP DASHBOARD", category: "Web applications", img: ospDashboardImg, url: "#", description: "", bg: "rgba(44, 62, 80, 0.88)" },
];

const PortfolioSection: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [activeCat, setActiveCat] = useState<string>("All");

  const visibleItems = activeCat === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCat);

  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        minHeight: { xs: "auto", md: "100vh" },
        backgroundColor: "#F0F0F0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "hidden",
        boxSizing: "border-box",
        px: 0,
        py: 0,
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
      }}
    >
      {/* Background image layer */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Top/bottom fade gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #F0F0F0 0%, rgba(240,240,240,0) 45%, #F0F0F0 100%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Blurred accent ellipses (md+) */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 0, md: 546 },
          height: { xs: 0, md: 546 },
          left: { md: -120, lg: -180 },
          top: { md: 40 },
          background: "#B5442C",
          opacity: 0.2,
          filter: "blur(140px)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: { xs: 0, md: 546 },
          height: { xs: 0, md: 546 },
          right: { md: -120, lg: -160 },
          bottom: { md: 40 },
          background: "#B5442C",
          opacity: 0.2,
          filter: "blur(140px)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          width: { xs: "95vw", md: "90vw", lg: "1200px" },
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          flex: "0 0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontFamily: "'Earth Orbiter Bold', Arial, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "28px", md: "48px" },
            letterSpacing: "0.06em",
            background: "linear-gradient(180deg, #0861AA 0%, #032744 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
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
                  fontWeight: activeCat === cat.label ? 700 : 500,
                  fontFamily: "Montserrat, Arial, sans-serif",
                  fontSize: { xs: "1rem", md: "1rem" },
                  textTransform: "none",
                  color: activeCat === cat.label ? "#FFF" : "#303030",
                  background: activeCat === cat.label ? "#B5442C" : "transparent",
                  boxShadow: "none",
                  transition: "background 0.18s, color 0.18s",
                  cursor: "pointer",
                  "&:hover": {
                    background: "#B5442C",
                    color: "#FFF",
                  },
                }}
                onClick={() => setActiveCat(cat.label)}
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
            gap: { xs: 2.5, md: 4 },
            px: { xs: 2, md: 0 },
            width: "100%",
            boxSizing: "border-box",
            alignItems: "center",
          }}
        >
          {visibleItems.map(({ title, img, url, description, bg }, idx) => (
            <Card
              key={title}
              sx={{
                borderRadius: "16px",
                boxShadow: 6,
                overflow: "hidden",
                cursor: "pointer",
                position: "relative",
                height: { xs: 240, sm: 260, md: 300 },
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
                        ? "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.85) 100%)"
                        : "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.6) 100%)",
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
                      transform: hoveredIdx === idx ? "translateY(-8px)" : "translateY(0)",
                      transition: "margin-bottom 0.3s ease, transform 0.3s ease",
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
                      mt: hoveredIdx === idx && description ? 0.5 : 0,
                      maxHeight: hoveredIdx === idx && description ? "120px" : 0,
                      overflow: "hidden",
                      transform: hoveredIdx === idx && description ? "translateY(0)" : "translateY(8px)",
                      transition: "opacity 0.3s ease, max-height 0.3s ease, transform 0.3s ease, margin-top 0.3s ease",
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

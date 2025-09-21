import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";

// Import your image assets
import testimonialBg from "../assets/Testimonial_section_bg_image.png";
// Client logos
import kbidLogo from "../assets/clients/k-bid.jpeg";
import ospLogo from "../assets/clients/osp-logo.png";
import riqshaLogo from "../assets/clients/riqsha.jpeg";
import rideeasyLogo from "../assets/clients/rideeasy.webp";
import moneyblasterLogo from "../assets/clients/moneyblaster.jpg";
import dentologieLogo from "../assets/clients/dentologie.jpg";
import pistonheadLogo from "../assets/clients/pistonhead.png";
import shopinfinityLogo from "../assets/clients/shopinfinity.webp";
import happyhelpLogo from "../assets/clients/happyhelpinghands.webp";
import kaltechLogo from "../assets/clients/kaltech.jpeg";
import leftArrow from "../assets/Testimonial_section_left_arrow_vector_image.png"; 
import rightArrow from "../assets/Testimonial_section_right_arrow_vector_image.png"; 

const testimonials = [
  {
    name: "K-Bid",
    title: "E-commerce Platform",
    image: kbidLogo,
    text:
      "“CVS rebuilt our storefront with blazing performance and a clean UX. Conversions are up and maintenance is a breeze.”",
  },
  {
    name: "OSP Broker",
    title: "Logistics SaaS",
    image: ospLogo,
    text:
      "“Reliable team, clear communication, and on-time delivery. Our onboarding flow is now 2× faster.”",
  },
  {
    name: "HHH",
    title: "Nonprofit",
    image: happyhelpLogo,
    text:
      "“They modernized our website and donation experience. The impact on engagement has been immediate.”",
  },
  {
    name: "RiQsha",
    title: "Mobility App",
    image: riqshaLogo,
    text:
      "“From idea to launch, CVS handled design and engineering seamlessly. The app feels polished and fast.”",
  },
  {
    name: "ShopInfinity",
    title: "Retail Brand",
    image: shopinfinityLogo,
    text:
      "“Beautiful UI, stable integrations, and attentive support. A great partner for our growth.”",
  },
  {
    name: "Ride Easy",
    title: "Auto Services",
    image: rideeasyLogo,
    text:
      "“Excellent communication and execution. Our booking experience is significantly better now.”",
  },
  {
    name: "MoneyBlaster",
    title: "FinTech Tournament",
    image: moneyblasterLogo,
    text:
      "“CVS delivered a performant, real-time experience on a tight timeline. We’ll work with them again.”",
  },
  {
    name: "Dentologie",
    title: "Healthcare",
    image: dentologieLogo,
    text:
      "“Thoughtful design and smooth implementation. Our patients love the updated portal.”",
  },
  {
    name: "PistonHeads",
    title: "Media",
    image: pistonheadLogo,
    text:
      "“High-quality engineering and attention to detail. The site feels premium and quick.”",
  },
  {
    name: "Kaltech",
    title: "Industrial",
    image: kaltechLogo,
    text:
      "“CVS helped us modernize internal systems and data flows. Their AI-driven automations reduced manual effort dramatically.”",
  },
];

const TestimonialSection: React.FC = () => {
  // Show all testimonials; horizontal scroll handles overflow
  const visibleTestimonials = testimonials;
  const rowRef = useRef<HTMLDivElement | null>(null);
  const scrollByAmount = 360; // px; approximates one card on md screens

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
        alignItems: "center",
        justifyContent: "flex-start",
        boxSizing: "border-box",
        px: 0,
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
        overflow: "hidden",
      }}
    >
      {/* Mirrored background image */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${testimonialBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scaleX(-1)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Vertical fade gradient overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, #F0F0F0 0%, rgba(240,240,240,0) 50.48%, #F0F0F0 100%)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Blurred secondary ellipse */}
      <Box
        sx={{
          position: "absolute",
          width: 660,
          height: 660,
          left: { xs: "50%", md: 630 },
          top: { xs: 380, md: 320 },
          transform: { xs: "translateX(-50%)", md: "none" },
          background: "#B5442C",
          opacity: 0.2,
          filter: "blur(139.545px)",
          borderRadius: "50%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      {/* Header (TRANSPARENT BACKGROUND) */}
      <Box
        sx={{
          width: "100%",
          maxWidth: 1600,
          mx: "auto",
          display: "flex",
          alignItems: "center",
          gap: { xs: 2, md: "60px" },
          mb: { xs: 8, md: 10 },
          py: 0,
          px: { xs: 2, md: 4 },
          background: "transparent",
          position: "relative",
          zIndex: 2,
          minHeight: 132,
        }}
      >
        {/* Left: Arrows group (228x90, gap 48) */}
        <Box
          sx={{
            width: 228,
            height: 90,
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            gap: "48px",
            flex: "0 0 auto",
          }}
        >
          <IconButton
            sx={{
              width: 90,
              height: 90,
              borderRadius: "46px",
              bgcolor: "transparent",
              border: "1px solid #161616",
              opacity: 0.2,
              "&:hover": { opacity: 0.35 },
              p: 0,
              cursor: "pointer",
              transition: "opacity 0.14s",
            }}
            onClick={() => rowRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" })}
            aria-label="Previous testimonial"
          >
            <img src={leftArrow} alt="Previous" width={42} height={42} />
          </IconButton>
          <IconButton
            sx={{
              width: 90,
              height: 90,
              borderRadius: "46px",
              bgcolor: "transparent",
              border: "1px solid #161616",
              p: 0,
              cursor: "pointer",
              transition: "opacity 0.14s",
            }}
            onClick={() => rowRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" })}
            aria-label="Next testimonial"
          >
            <img src={rightArrow} alt="Next" width={42} height={42} />
          </IconButton>
        </Box>

        {/* Vertical gradient divider (Rectangle 90) */}
        <Box
          sx={{
            width: 2,
            height: 132,
            borderRadius: "17px",
            background: "linear-gradient(180deg, rgba(8,97,170,0) 0%, #0861AA 50%, rgba(8,97,170,0) 100%)",
            display: { xs: "none", sm: "block" },
            flex: "0 0 auto",
          }}
        />

        {/* Text block */}
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="h4"
            sx={{
              fontFamily: "'Earth Orbiter', Arial, sans-serif",
              fontWeight: 700,
              color: "#161616",
              fontSize: { xs: 28, md: 48 },
              letterSpacing: { xs: ".12em", md: ".17em" },
              textTransform: "uppercase",
              mb: 1.2,
              lineHeight: "48px",
              textAlign: "left",
              display: "block",
            }}
          >
            WHAT OUR CLIENTS SAY
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat, Arial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: 18, md: 20 },
              lineHeight: "30px",
              color: "#303030",
              textAlign: "left",
              maxWidth: 1250,
            }}
          >
            Discover how Code Visionary Services makes a difference for our clients. We design and ship performant web and mobile products—and we also build AI infrastructure that supports business operations, from data pipelines and embeddings to automated workflows and copilots that boost team productivity.
          </Typography>
        </Box>
      </Box>

      {/* Testimonial Cards */}
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: 1000, sm: 1200, md: 1280, lg: 1400 },
          mx: "auto",
          display: "flex",
          justifyContent: "flex-start",
          flexWrap: "nowrap",
          gap: { xs: 2, sm: 2.5, md: 3 },
          px: { xs: 2, md: 0 },
          overflowX: "auto",
          overflowY: "hidden",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": { display: "none" },
          mt: { xs: 2, md: 3 },
          position: "relative",
          zIndex: 1,
        }}
        ref={rowRef}
      >
        {visibleTestimonials.map((item, idx) => {
          const isDark = idx === 1; // keep highlight styling on second card

          return (
            <Card
              key={item.name + idx}
              sx={{
                width: { xs: 280, sm: 280, md: 300, lg: 360, xl: 420 },
                maxHeight: { xs: 480, md: 540, lg: 560, xl: 560 },
                borderRadius: "20px",
                border: isDark ? "none" : "none",
                boxShadow: isDark
                  ? "0px 0px 8px rgba(181, 68, 44, 0.5)"
                  : "0px 0px 8px 2px rgba(8, 97, 170, 0.5)",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                position: "relative",
                overflow: "hidden",
                background: isDark ? "#131A22" : "#F0F0F0",
                scrollSnapAlign: "start",
                flex: "0 0 auto",
              }}
            >
              {/* Removed dark card background image overlay to avoid stretching logos */}

              {/* Avatar removed per request */}

              {/* Content wrapper to keep text within bounds */}
              <Box
                sx={{
                  position: "relative",
                  zIndex: 2,
                  p: { xs: 2.5, md: 3 },
                  pt: { xs: 2, md: 3 },
                  height: "100%",
                  width: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minWidth: 0,
                }}
              >
                {/* Client logo */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: { xs: 1.5, md: 2 },
                  }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={`${item.name} logo`}
                    sx={{
                      width: { xs: 56, md: 64 },
                      height: { xs: 56, md: 64 },
                      objectFit: "contain",
                      borderRadius: 0,
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Montserrat, Arial, sans-serif",
                    fontWeight: 400,
                    fontSize: { xs: 16, md: 18, lg: 20 },
                    lineHeight: { xs: "26px", md: "28px", lg: "30px" },
                    color: isDark ? "#FFFFFF" : "#303030",
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                    hyphens: "auto",
                  }}
                >
                  {item.text}
                </Typography>

                <Box sx={{ mt: { xs: 2, md: 3 } }}>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat, Arial, sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: 22, md: 32, lg: 48 },
                      lineHeight: { xs: "30px", md: "36px", lg: "30px" },
                      color: isDark ? "#FFFFFF" : "#161616",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Montserrat, Arial, sans-serif",
                      fontWeight: 400,
                      fontSize: { xs: 14, md: 16, lg: 20 },
                      lineHeight: { xs: "22px", md: "24px", lg: "30px" },
                      color: isDark ? "#FFFFFF" : "#303030",
                    }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Box>

              {/* Play button on dark card */}
              {isDark && (
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 100,
                    height: 60,
                    borderRadius: 68,
                    background: "rgba(255,255,255,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    zIndex: 2,
                  }}
                  aria-label="Play video"
                >
                  <Box
                    sx={{
                      width: 0,
                      height: 0,
                      borderTop: "10px solid transparent",
                      borderBottom: "10px solid transparent",
                      borderLeft: "20px solid #FFFFFF",
                    }}
                  />
                </Box>
              )}
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default TestimonialSection;

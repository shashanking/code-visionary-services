import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import testimonialBg from "../assets/Testimonial_section_bg_image.png";
import profileImage from "../assets/Testimonial_section_profile_image.png";

const testimonials = [
    {
        name: "Rob Wat",
        title: "CEO, Kingdom Advisors",
        image: profileImage,
        text: `“The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast.”`,
    },
    {
        name: "Rob Wat",
        title: "CEO, Kingdom Advisors",
        image: profileImage,
        text: `“The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast.”`,
    },
    {
        name: "Rob Wat",
        title: "CEO, Kingdom Advisors",
        image: profileImage,
        text: `“The lovely team at DesignMe has provided our startup with significant leverage. Their work is exceptionally professional, and Adrian is always attentive to our needs, taking the time to understand our briefs and offer valuable direction. Additionally, their turnaround times are impressively fast.”`,
    },
];

const TestimonialSection: React.FC = () => (
    <Box
        sx={{
            width: "100vw",
            minHeight: "100vh",
            backgroundImage: `url(${testimonialBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "160% 100%",
            backgroundPosition: "left center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            px: { xs: 1, md: 6 }, //Add padding for spacing on both sides
            py: 0,
            overflow: "hidden",
        }}
    >
        <Box
            sx={{
                width: "100%",
                maxWidth: 1400,
                mx: "auto",
                px: { xs: 1, md: 6 },
                py: { xs: 6, md: 10 },
                textAlign: "center",
            }}
        >
            {/* Header with arrows on both ends */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mb: 3,
                }}
            >
                <IconButton sx={{ color: "#B5442C", mr: 1 }}>
                    <ArrowBackIosIcon fontSize="large" />
                </IconButton>
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "'Earth Orbiter', Arial, sans-serif",
                        fontWeight: 700,
                        letterSpacing: ".11em",
                        textTransform: "uppercase",
                        color: "#111",
                        flexGrow: 1,
                        textAlign: "center",
                    }}
                >
                    WHAT OUR{" "}
                    <Box component="span" sx={{ color: "#B5442C" }}>
                        CLIENTS
                    </Box>{" "}
                    SAY
                </Typography>
                <IconButton sx={{ color: "#B5442C", ml: 1 }}>
                    <ArrowForwardIosIcon fontSize="large" />
                </IconButton>
            </Box>

            {/* Description */}
            <Typography
                variant="body1"
                sx={{
                    maxWidth: 700,
                    mx: "auto",
                    color: "#232323",
                    fontWeight: 400,
                    fontSize: { xs: 15, md: 18 },
                    mb: { xs: 4, md: 7 },
                    fontFamily: "Montserrat, sans-serif",
                    lineHeight: 1.5,
                    textAlign: "center",
                }}
            >
                Discover how Code Visionary Studios has made a difference for our clients. Our testimonials showcase the positive impact of our web design, app development, branding, and digital marketing services.
            </Typography>

            {/* Testimonial Cards */}
            <Box
                sx={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
                    gap: { xs: 4, md: 6 },
                    alignItems: "stretch",
                    justifyContent: "center",
                }}
            >
                {testimonials.map((testimonial, idx) => (
                    <Card
                        key={idx}
                        sx={{
                            bgcolor: "#fff",
                            borderRadius: 3,
                            border: idx === 1 ? "2px solid #B5442C" : "1px solid #ddd",
                            boxShadow:
                                idx === 1
                                    ? "0 16px 40px rgba(181,68,70,0.20)"
                                    : "0 6px 12px rgba(0,0,0,0.09)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: 4,
                            minHeight: 340,
                            justifyContent: "flex-start",
                            cursor: "default",
                            // IMPROVED: Add right margin to last card on desktop for spacing
                            mr:
                                idx === testimonials.length - 1
                                    ? { xs: 0, md: 2 }
                                    : undefined,
                        }}
                    >
                        <Avatar
                            src={testimonial.image}
                            alt={testimonial.name}
                            sx={{
                                width: 70,
                                height: 70,
                                mb: 2,
                                border: "2.5px solid #B5442C",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.11)",
                                bgcolor: "#fff",
                            }}
                        />
                        <Typography
                            sx={{
                                fontStyle: "italic",
                                fontWeight: 400,
                                fontSize: 15,
                                color: "#444",
                                mb: 4,
                                flexGrow: 1,
                                fontFamily: "Montserrat, sans-serif",
                                textAlign: "center",
                                wordBreak: "break-word", // for long words, ensures wrapping
                            }}
                        >
                            {testimonial.text}
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                fontFamily: "'Earth Orbiter', Arial",
                                mb: 0.5,
                                color: "#232323",
                            }}
                        >
                            {testimonial.name}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            sx={{ color: "#666", textAlign: "center" }}
                        >
                            {testimonial.title}
                        </Typography>
                    </Card>
                ))}
            </Box>
        </Box>
    </Box>
);

export default TestimonialSection;

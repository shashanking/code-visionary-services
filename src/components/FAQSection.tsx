import React, { useState } from "react";
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Stack } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import faqBg from "../assets/FAQ_bg_image.png";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We design and build high‑performing websites and web/mobile applications. Our team also supports branding, UI/UX, and growth services like SEO and analytics—so you get a complete product from strategy to launch.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most websites launch in 4–8 weeks, depending on scope and content readiness. Web apps vary more widely—smaller MVPs can ship in 6–10 weeks while larger builds may run multiple phases. We’ll share a detailed timeline after discovery.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We scope fixed‑price packages for clearly defined deliverables and use milestone‑based billing for complex builds. After a quick call we’ll recommend the best approach and provide a transparent estimate with options.",
  },
  {
    question: "Do you provide post‑launch support?",
    answer:
      "Yes. We offer ongoing support and optimization plans that include maintenance, security updates, performance tuning, and feature iterations based on real user feedback.",
  },
];

const FAQSection: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(0);

  const handleChange = (panel: number) => (
    _event: React.SyntheticEvent,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        position: "relative",
        left: "50%",
        transform: "translateX(-50%)",
        width: "100vw",
        minHeight: 500,
        bgcolor: "#fafafa",
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 10 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowX: "hidden",
        backgroundImage: `url(${faqBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          width: { xs: "95%", sm: "85%", md: "60%" },
          position: "relative",
          zIndex: 2,
          px: 0,
        }}
      >
        {/* FAQ Title */}
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: 700,
            letterSpacing: 2,
            fontFamily: '"Orbitron","Roboto",sans-serif',
            mb: 1,
          }}
        >
          NEED <span style={{ color: "#cc5a32" }}>HELP?</span> WE'VE GOT ANSWERS
        </Typography>
        <Typography
          align="center"
          sx={{ mb: 4, color: "#777", fontSize: { xs: 14, md: 16 } }}
        >
          Explore our FAQ section to learn more about our services, timelines, pricing, and what to expect when working with Code Visionary Services.
        </Typography>

        {/* FAQs */}
        <Stack spacing={2}>
          {faqs.map((faq, i) => (
            <Accordion
              key={i}
              expanded={expanded === i}
              onChange={handleChange(i)}
              sx={{
                borderRadius: 3,
                boxShadow: "none",
                bgcolor: expanded === i ? "#a34527" : "#fff",
                color: expanded === i ? "#fff" : "#222",
                "&:before": { display: "none" },
                border: "none",
                px: { xs: 1, md: 2 },
              }}
            >
              <AccordionSummary
                disableRipple
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: 16, md: 20 },
                  bgcolor: "transparent",
                  py: 2,
                  borderRadius: 3,
                  "&.Mui-focused, &:focus, &:active": {
                    bgcolor: "transparent",
                  },
                }}
                expandIcon={
                  expanded === i ? (
                    <RemoveIcon sx={{ color: "#fff", fontSize: 30 }} />
                  ) : (
                    <ExpandMoreIcon sx={{ color: "#a34527", fontSize: 30 }} />
                  )
                }
              >
                {faq.question}
              </AccordionSummary>
              <AccordionDetails sx={{ fontSize: { xs: 14, md: 16 }, pt: 0 }}>
                {faq.answer}
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default FAQSection;

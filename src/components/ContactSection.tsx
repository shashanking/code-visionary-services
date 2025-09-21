import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import bgImg from "../assets/contact_bg_image.png";
// import sendIcon from "../assets/mingcute_arrow-up-line.png";
import middleDividerImg from "../assets/contact_section_middle_line_image.png";

const ContactSection: React.FC = () => (
  <Box
    sx={{
      position: "relative",
      width: "100vw",
      left: "50%",
      transform: "translateX(-50%)",
      minHeight: "100vh",          // Fill full viewport height
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      px: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflowX: "hidden",
      overflowY: "auto",          // Allow vertical scroll within if necessary
      boxSizing: "border-box",
    }}
  >
    <Box
      sx={{
        width: { xs: "96vw", sm: "90vw", md: "80vw", lg: "1100px" },
        borderRadius: 5,
        bgcolor: "rgba(255,255,255,0.85)",
        boxShadow: "0 8px 32px rgba(44,62,80,0.13)",
        py: { xs: 3, md: 5 },        // reduce padding for better fit
        px: { xs: 2, sm: 4, md: 6 }, // reduced padding horizontally
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        maxHeight: "95vh",           // limit max height to viewport minus margin
        overflowY: "auto",           // scroll inside content if overflow occurs
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Earth Orbiter', Arial, sans-serif",
          fontWeight: 700,
          letterSpacing: ".065em",
          fontSize: { xs: "1.4rem", md: "2rem" },
          textTransform: "uppercase",
          color: "#B5442C",
          mb: 1,
          textAlign: "center",
        }}
      >
        LET'S GET IN TOUCH
      </Typography>
      <Typography
        sx={{
          fontFamily: "Montserrat, Arial, sans-serif",
          fontSize: "1.07rem",
          color: "#444",
          mb: 3,
          textAlign: "center",
          maxWidth: 540,
        }}
      >
        Tell us a bit about your project and goals. We’ll get back within one
        business day with next steps and a clear plan to move forward.
      </Typography>

      {/* Main card container */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          borderLeft: { xs: "1.5px solid #2B7EE0", md: "2.5px solid #2B7EE0" },
          borderRight: { xs: "1.5px solid #B5442C", md: "2.5px solid #B5442C" },
          borderTop: { xs: "1.5px solid #e3e6ea", md: "2.5px solid #e3e6ea" },
          borderBottom: { xs: "1.5px solid #e3e6ea", md: "2.5px solid #e3e6ea" },
          borderRadius: "32px",
          boxSizing: "border-box",
          background: "rgba(255,255,255,0.94)",
          flexGrow: 1,
          minHeight: 0,        // for proper flexbox scroll behavior
          overflow: "hidden",
          gap: { xs: 2, md: 0 },
        }}
      >
        {/* FORM SIDE */}
        {/* <Box
          sx={{
            flex: 1.4,
            borderRadius: "32px 0 0 32px",
            bgcolor: "rgba(255,255,255,0.94)",
            boxShadow: "none",
            px: { xs: 1, md: 4 },
            py: { xs: 2, md: 4 },
            minWidth: { xs: 0, md: 320 },
            maxWidth: 580,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflowY: "auto",
            maxHeight: "90vh",   // to fit inside viewport comfortably
          }}
        >
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="First Name"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 40,
                  fontSize: 15,
                  background: "#fff",
                },
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Last Name"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 40,
                  fontSize: 15,
                  background: "#fff",
                },
              }}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <TextField
              fullWidth
              variant="outlined"
              label="Phone number"
              size="small"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 40,
                  background: "#fff",
                  fontSize: 15,
                },
              }}
            />
            <TextField
              fullWidth
              variant="outlined"
              label="Email ID"
              size="small"
              type="email"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 40,
                  background: "#fff",
                  fontSize: 15,
                },
              }}
            />
          </Box>
          <TextField
            fullWidth
            variant="outlined"
            label="Service"
            size="small"
            sx={{
              mb: 2,
              "& .MuiOutlinedInput-root": {
                borderRadius: 40,
                background: "#fff",
                fontSize: 15,
              },
            }}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Message"
            multiline
            rows={3}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 28,
                background: "#fff",
                fontSize: 15,
              },
            }}
          />
          <Button
            variant="contained"
            disableRipple
            endIcon={
              <Box
                component="img"
                src={sendIcon}
                alt="Send"
                sx={{
                  width: 18,
                  height: 18,
                  ml: 1,
                  transition:
                    "transform 0.35s cubic-bezier(0.4,0,0.2,1), filter 0.35s",
                }}
              />
            }
            sx={{
              mt: 3,
              background: "#B5442C",
              color: "#fff",
              fontWeight: 700,
              borderRadius: 20,
              boxShadow: "0 2px 8px rgba(181,68,44,.08)",
              px: { xs: 3, md: 6 },
              py: 1.4,
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontFamily: "Montserrat, Arial, sans-serif",
              fontSize: 17,
              alignSelf: { xs: "stretch", md: "flex-start" },
              width: { xs: "100%", md: "auto" },
              transition: "background 0.35s, color 0.35s",
              "&:hover": {
                background: "#8c3320",
                color: "#ffe2d1",
                "& .MuiBox-root": {
                  transform: "translateX(7px) scale(1.16)",
                  filter: "drop-shadow(0 0 2px #B5442C)",
                },
              },
            }}
          >
            Send Message
          </Button>
        </Box> */}

        {/* MIDDLE DIVIDER with image */}
        <Box
          sx={{
            width: "2.5px",
            minWidth: "2.5px",
            height: { xs: 150, md: 200 },
            marginY: "auto",
            mx: { xs: 1, md: 2 },
            display: { xs: "none", md: "block" },
            borderRadius: "12px",
            overflow: "hidden",
            background: "#fff0",
            flexShrink: 0,
          }}
        >
          <img
            src={middleDividerImg}
            alt="middle divider"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </Box>

        {/* INFO SIDE */}
        <Box
          sx={{
            flex: 1,
            pl: { xs: 0, md: 4 },
            pr: { xs: 0, md: 2 },
            py: { xs: 3, md: 4 },
            borderRadius: "0 32px 32px 0",
            background: "rgba(255,255,255,0.86)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            overflowY: "auto",
            maxHeight: "90vh",
          }}
        >
          <Typography
            sx={{
              fontWeight: 700,
              letterSpacing: 2,
              fontFamily: "'Earth Orbiter', Arial, sans-serif",
              fontSize: 18,
              textTransform: "uppercase",
              color: "#B5442C",
              mb: 0.8,
            }}
          >
            CALL US
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat, Arial, sans-serif",
              fontSize: 15,
              color: "#232323",
              mb: 1,
              maxWidth: 310,
            }}
          >
            Prefer to talk? Give us a call—our team is happy to discuss scope,
            timelines, and the best approach for your needs.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <PhoneIcon sx={{ color: "#1a1a1a", mr: 1 }} />
            <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#232323" }}>
              +91 8637515632
            </Typography>
          </Box>
          <Typography
            sx={{
              fontWeight: 700,
              letterSpacing: 2,
              fontFamily: "'Earth Orbiter', Arial, sans-serif",
              fontSize: 18,
              textTransform: "uppercase",
              color: "#B5442C",
              mb: 0.8,
            }}
          >
            EMAIL
          </Typography>
          <Typography
            sx={{
              fontFamily: "Montserrat, Arial, sans-serif",
              fontSize: 15,
              color: "#232323",
              mb: 1,
              maxWidth: 310,
            }}
          >
            Want to share docs or a brief? Email us and we’ll follow up with a
            quick discovery call and a tailored proposal.
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ color: "#1a1a1a", mr: 1 }} />
            <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#232323" }}>
              office@codevisionaryservices.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default ContactSection;

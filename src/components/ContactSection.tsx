import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import bgImg from "../assets/contact_bg_image.png";
import sendIcon from "../assets/mingcute_arrow-up-line.png";

const ContactSection: React.FC = () => (
  <Box
    sx={{
      position: "relative",
      width: "100vw",
      left: "50%",
      transform: "translateX(-50%)",
      minHeight: 600,
      height: "100vh",
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      px: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflowX: "hidden",
      boxSizing: "border-box",
    }}
  >
    <Box
      sx={{
        width: { xs: "96vw", sm: "90vw", md: "80vw", lg: "1100px" },
        borderRadius: 5,
        bgcolor: "rgba(255,255,255,0.85)",
        boxShadow: "0 8px 32px rgba(44,62,80,0.13)",
        py: { xs: 4, md: 7 },
        px: { xs: 2, sm: 4, md: 8 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
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
          mb: 1.2,
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
          mb: 4,
          textAlign: "center",
          maxWidth: 540,
        }}
      >
        Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi,
        pretium ut lacinia in, elementum id enim. Done
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "stretch",
          borderRadius: 4,
          bgcolor: "transparent",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* FORM SIDE WITH HOVER EFFECT */}
        <Box
          sx={{
            flex: 1.1,
            border: "2.5px solid #2980b9",
            borderRadius: "30px",
            bgcolor: "rgba(255,255,255,0.94)",
            boxShadow: "0 2px 12px rgba(44,62,80,0.06)",
            px: { xs: 2, md: 4 },
            py: { xs: 4, md: 4 },
            minWidth: 320,
            maxWidth: 430,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            transition: "all 0.35s cubic-bezier(0.4,0,0.2,1)",
            '&:hover': {
              boxShadow: "0 10px 36px rgba(44,62,80,0.18)",
              borderColor: "#2B7EE0",
              transform: "scale(1.04) translateY(-8px)",
              background: "rgba(240,249,255,0.97)",
              cursor: "pointer",
            },
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
            endIcon={
              <Box
                component="img"
                src={sendIcon}
                alt="Send"
                sx={{
                  width: 18,
                  height: 18,
                  ml: 1,
                  transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), filter 0.35s",
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
              px: 6,
              py: 1.4,
              letterSpacing: "1px",
              textTransform: "uppercase",
              fontFamily: "Montserrat, Arial, sans-serif",
              fontSize: 17,
              alignSelf: "flex-start",
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
            SEE ALL
          </Button>
        </Box>

        <Divider
          orientation="vertical"
          flexItem
          sx={{
            display: { xs: "none", md: "block" },
            mx: 2,
            borderColor: "#AD6236",
            borderWidth: "1.6px",
            borderRadius: "7px",
          }}
        />

        {/* INFO SIDE */}
        <Box
          sx={{
            flex: 1,
            pl: { xs: 0, md: 4 },
            pr: { xs: 0, md: 2 },
            py: { xs: 3, md: 4 },
            border: "1.6px solid #AD6236",
            borderRadius: "26px",
            background: "rgba(255,255,255,0.86)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
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
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Done
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <PhoneIcon sx={{ color: "#1a1a1a", mr: 1 }} />
            <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#232323" }}>
              +1-323-453-5817
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
            Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id en
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ color: "#1a1a1a", mr: 1 }} />
            <Typography sx={{ fontWeight: 700, fontSize: 16, color: "#232323" }}>
              Example@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default ContactSection;

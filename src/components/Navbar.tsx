// ...other imports remain unchanged
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import logo from "../assets/cvs-logo-navbar.png";
import arrowIcon from "../assets/mingcute_arrow-up-line.png";

const navItems = [
  "Home",
  "About Us",
  "Services",
  "Reviews",
  "Portfolio",
  "Blog",
  "Contact",
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("Home");

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ backdropFilter: "blur(8px)" }}
    >
      <Toolbar
        disableGutters
        sx={{
          minHeight: 80,
          px: { xs: 0, sm: 1, md: 4 },
          overflowX: "hidden",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        {/* Logo Left */}
        <Box sx={{ display: "flex", alignItems: "center", minWidth: 80, mr: 2 }}>
          <img src={logo} alt="CVS Logo" style={{ height: 40, maxWidth: "100%" }} />
        </Box>

        {/* Nav Items Centered */}
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            minWidth: 0,
            maxWidth: "100%",
            overflowX: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {navItems.map((label) => (
            <Button
              key={label}
              onClick={() => setActive(label)}
              color="inherit"
              sx={{
                textTransform: "none",
                fontWeight: active === label ? 700 : 400,
                fontSize: 20,
                fontFamily: "Montserrat, sans-serif",
                color: active === label ? "#000000" : `rgba(48,48,48,0.6)`,
                whiteSpace: "nowrap",
                transition: "color 0.3s, font-weight 0.3s",
                "&:hover": {
                  color: "#000000",
                },
                userSelect: "none",
              }}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Start a project Right */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", ml: 2 }}>
          <Button
            variant="contained"
            sx={{
              textTransform: "uppercase",
              borderRadius: 29,
              fontWeight: 600,
              fontFamily: "'Earth Orbiter Bold', Montserrat, sans-serif",
              height: 60,
              fontSize: 16,
              px: 5,
              boxShadow: "0 2px 8px rgba(181,68,44,0.12)",
              backgroundColor: "#B5442C",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              minWidth: 130,
              transition: "background 0.35s, color 0.35s",
              "&:hover": {
                backgroundColor: "#8c3320",
                color: "#ffe2d1",
                "& .MuiBox-root": {
                  transform: "translateX(7px) scale(1.16)",
                  filter: "drop-shadow(0 0 2px #B5442C)",
                },
              },
              userSelect: "none",
            }}
          >
            Start a Project
            <Box
              component="img"
              src={arrowIcon}
              alt="Arrow Icon"
              sx={{
                width: 22,
                height: 22,
                transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1), filter 0.35s",
                ml: 1,
              }}
            />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

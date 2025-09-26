import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { CTAButton, Logo } from "./shared";
import { NAV_ITEMS } from "../constants/navigation";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigate = (href: string, label: string) => {
    setActive(label);
    try {
      const target = document.querySelector(href);
      if (target) {
        (target as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (href.startsWith("#")) {
        // as a fallback, update hash
        window.location.hash = href.substring(1);
      }
    } catch { /* empty */ }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: '#1a1a1a', height: '100%' }}>
      <Typography variant="h6" sx={{ my: 2, color: '#fff' }}>
        CVS
      </Typography>
      <List>
        {NAV_ITEMS.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              onClick={(e) => {
                e.preventDefault();
                handleNavigate(item.href, item.label);
              }}
            >
              <ListItemText
                primary={item.label}
                sx={{
                  color: active === item.label ? '#444' : '#444',
                  '& .MuiTypography-root': {
                    fontWeight: active === item.label ? 600 : 400
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.1)" : "none",
          transition: "all 0.3s ease-in-out"
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            px: { xs: 2, md: 4, lg: 6 },
            maxWidth: "1400px",
            mx: "auto",
            width: "100%",
          }}
        >
          {/* Logo Left */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Logo variant="navbar" onClick={() => setActive("Home")} />
          </Box>

          {/* Spacer */}
          <Box sx={{ width: { xs: 0, md: 80, lg: 120 } }} />

          {/* Nav Items Right-aligned - Desktop */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 2,
            }}
          >
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.label}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(item.href, item.label);
                }}
                sx={{
                  textTransform: "none",
                  fontWeight: active === item.label ? 600 : 400,
                  fontSize: "14px",
                  fontFamily: "Montserrat, sans-serif",
                  color: active === item.label ? "#D2691E" : isScrolled ? "#333" : "#444",
                  position: "relative",
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#D2691E",
                    backgroundColor: "transparent",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: -2,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: active === item.label ? "100%" : "0%",
                    height: "2px",
                    backgroundColor: "#D2691E",
                    transition: "width 0.3s ease",
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile menu button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none" }, ml: "auto" }}
          >
            <MenuIcon sx={{ color: "#fff" }} />
          </IconButton>

          {/* Start a project Button - Desktop */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <CTAButton
              variant="primary"
              size="small"
              onClick={() => console.log("Start project clicked")}
            >
              Start a Project
            </CTAButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;

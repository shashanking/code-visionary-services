import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Real client logos available in assets
import kbidLogo from "../assets/clients/k-bid.jpeg";
import ospLogo from "../assets/clients/osp-logo.png";
import riqshaLogo from "../assets/clients/riqsha.jpeg";
import rideeasyLogo from "../assets/clients/rideeasy.webp";
import moneyblasterLogo from "../assets/clients/moneyblaster.jpg";
import dentologieLogo from "../assets/clients/dentologie.jpg";
import pistonheadLogo from "../assets/clients/pistonhead.png";
import shopinfinityLogo from "../assets/clients/shopinfinity.webp";
import happyhelpLogo from "../assets/clients/happyhelpinghands.webp";

const clients: Array<{ name: string; logo?: string }> = [
  { name: "K-Bid", logo: kbidLogo },
  { name: "OSP Broker", logo: ospLogo },
  { name: "HHH", logo: happyhelpLogo },
  { name: "RiQsha", logo: riqshaLogo },
  { name: "ShopInfinity", logo: shopinfinityLogo }, // no logo available
  { name: "Ride Easy", logo: rideeasyLogo },
  { name: "MoneyBlaster", logo: moneyblasterLogo },
  { name: "Dentologie", logo: dentologieLogo },
  { name: "PistonHeads", logo: pistonheadLogo },
    
];

const RowItem: React.FC<{ name: string; logo?: string }> = ({ name, logo }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.75,
        px: 1.5,
        py: 1.25,
        backgroundColor: "#ffffff",
        border: "1px solid rgba(20,50,85,0.1)",
        borderRadius: 2,
        boxShadow: "0 2px 10px rgba(20,50,85,0.08)",
        backdropFilter: "saturate(120%) blur(2px)",
        whiteSpace: "nowrap",
        width: { xs: 110, md: 128 },
        height: { xs: 120, md: 136 },
      }}
    >
      {/* Logo (if provided) else placeholder initials */}
      {logo ? (
        <Box
          component="img"
          src={logo}
          alt={`${name} logo`}
          sx={{
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            borderRadius: 0,
            objectFit: "contain",
            backgroundColor: "transparent",
          }}
        />
      ) : (
        <Box
          sx={{
            width: { xs: 56, md: 64 },
            height: { xs: 56, md: 64 },
            borderRadius: 0,
            background: "linear-gradient(135deg, #b44a2c 0%, #882f1a 100%)",
            color: "#fff",
            fontSize: 16,
            fontWeight: 800,
            fontFamily: "Montserrat, Arial, sans-serif",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            letterSpacing: 0.4,
          }}
        >
          {name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 2)}
        </Box>
      )}

      <Typography
        sx={{
          fontFamily: "Montserrat, Arial, sans-serif",
          fontWeight: 700,
          fontSize: { xs: 12, md: 13 },
          color: "#143255",
          textAlign: "center",
          mt: 0.5,
          maxWidth: '100%',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        }}
      >
        {name}
      </Typography>
    </Box>
  );
};

const ClientsMarqueeSection: React.FC = () => {
  // Duplicate the list to create a seamless loop
  const marqueeList = [...clients, ...clients];

  return (
    <Box
      id="clients"
      sx={{
        width: "100vw",
        py: { xs: 3, md: 5 },
        position: "relative",
        // Bleed full viewport width even inside a padded Container
        ml: "calc(50% - 50vw)",
        mr: "calc(50% - 50vw)",
        backgroundColor: "rgb(240, 240, 240)",
        px: { xs: 2, md: 8, lg: 12 },
        boxSizing: "border-box",
        overflowX: "hidden",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Earth Orbiter', Arial, sans-serif",
          fontWeight: 700,
          fontSize: { xs: 18, md: 22 },
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#b44a2c",
          mb: 1,
          textAlign: "center",
        }}
      >
        Trusted by clients
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Earth Orbiter', Arial, sans-serif",
          fontWeight: 700,
          fontSize: { xs: 22, md: 32 },
          letterSpacing: 2,
          textTransform: "uppercase",
          color: "#143255",
          mb: { xs: 2.5, md: 4 },
          textAlign: "center",
        }}
      >
        Across industries
      </Typography>

      {/* Marquee wrapper */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
        }}
      >
        {/* Moving row */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: 2, md: 3 },
            px: 1,
            animationName: "clients-marquee",
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
            animationDuration: { xs: "12s", md: "25s" },
            // Define keyframes inside sx
            "@keyframes clients-marquee": {
              from: { transform: "translateX(0)" },
              to: { transform: "translateX(-50%)" },
            },
          }}
        >
          {marqueeList.map((c, i) => (
            <RowItem key={`${c.name}-${i}`} name={c.name} logo={c.logo} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientsMarqueeSection;

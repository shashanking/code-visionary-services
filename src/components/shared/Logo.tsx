import React from "react";
import Box from "@mui/material/Box";
import logo from "../../assets/cvs-logo-navbar.png";

interface LogoProps {
    variant?: "navbar" | "footer";
    onClick?: () => void;
}

const Logo: React.FC<LogoProps> = ({
    variant = "navbar",
    onClick
}) => {
    const isNavbar = variant === "navbar";

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                cursor: onClick ? "pointer" : "default",
                transition: "transform 0.2s ease",
                "&:hover": onClick ? {
                    transform: "scale(1.05)",
                } : {},
            }}
            onClick={onClick}
        >
            <Box
                component="img"
                src={logo}
                alt="CVS Logo"
                sx={{
                    height: isNavbar ? 40 : 50,
                    width: "auto",
                    maxWidth: "100%",
                    objectFit: "contain",
                }}
            />
        </Box>
    );
};

export default Logo;
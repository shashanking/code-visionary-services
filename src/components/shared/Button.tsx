import React, { useState } from "react";
import Box from "@mui/material/Box";
import type { SxProps, Theme } from "@mui/material";

interface CTAButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    sx?: SxProps<Theme>;
}

const ArrowIcon: React.FC = () => (
    <svg
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: "rotate(315deg)" }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
    </svg>
);

const CTAButton: React.FC<CTAButtonProps> = ({
    children,
    onClick,
    variant = "primary",
    size = "medium",
    disabled = false,
    sx = {},
}) => {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const sizeStyles = {
        small: { width: "280px", height: "48px", fontSize: "12px" },
        medium: { width: "320px", height: "56px", fontSize: "14px" },
        large: { width: "384px", height: "64px", fontSize: "16px" },
    };

    const currentSize = sizeStyles[size];

    const getBackgroundStyle = () => {
        if (variant === "primary") {
            return isHovered
                ? "linear-gradient(135deg, #b22222 0%, #d63d2e 50%, #ff3b2e 100%)"
                : "#D2691E";
        }
        return isHovered
            ? "linear-gradient(135deg, #333333 0%, #555555 50%, #666666 100%)"
            : "#000000";
    };

    const getBoxShadow = () => {
        if (variant === "primary") {
            return isHovered
                ? "0 10px 25px -5px rgba(178, 34, 34, 0.4), 0 5px 10px -5px rgba(178, 34, 34, 0.3)"
                : "0 5px 15px rgba(210, 105, 30, 0.2)";
        }
        return isHovered
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 5px 10px -5px rgba(0, 0, 0, 0.3)"
            : "0 5px 15px rgba(0, 0, 0, 0.2)";
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                ...sx,
            }}
        >
            <Box
                component="button"
                onClick={onClick}
                disabled={disabled}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                sx={{
                    position: "relative",
                    width: currentSize.width,
                    height: currentSize.height,
                    borderRadius: "50px",
                    overflow: "hidden",
                    border: "none",
                    cursor: disabled ? "not-allowed" : "pointer",
                    background: getBackgroundStyle(),
                    boxShadow: getBoxShadow(),
                    transition: "all 0.7s ease-out",
                    transform: isHovered ? "translateY(-2px)" : "translateY(0)",
                    "&:focus": {
                        outline: "none",
                    },
                }}
            >
                {/* Glowing border */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-2px",
                        left: "-2px",
                        right: "-2px",
                        bottom: "-2px",
                        borderRadius: "50px",
                        background: variant === "primary"
                            ? "linear-gradient(135deg, rgba(255,80,80,0.9), rgba(255,50,50,0.7), rgba(180,30,30,0.9))"
                            : "linear-gradient(135deg, rgba(100,100,100,0.9), rgba(150,150,150,0.7), rgba(80,80,80,0.9))",
                        filter: "blur(4px)",
                        opacity: isHovered ? 1 : 0,
                        transition: "all 0.7s ease-out",
                        zIndex: -1,
                    }}
                />

                {/* Button content */}
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100%",
                        borderRadius: "50px",
                        px: 3,
                    }}
                >
                    {/* Text container */}
                    <Box
                        sx={{
                            position: "relative",
                            overflow: "hidden",
                            mr: 2,
                        }}
                    >
                        {/* Default text */}
                        <Box
                            component="span"
                            sx={{
                                display: "block",
                                color: "#fff",
                                fontSize: currentSize.fontSize,
                                fontFamily: '"Earth Orbiter Bold", "Audiowide", cursive, sans-serif',
                                fontWeight: 400,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                transition: "all 0.5s ease-out",
                                transform: isHovered ? "translateX(-100%)" : "translateX(0)",
                                opacity: isHovered ? 0 : 1,
                            }}
                        >
                            {children}
                        </Box>

                        {/* Hover text sliding in from right */}
                        <Box
                            component="span"
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                color: "#fff",
                                fontSize: currentSize.fontSize,
                                fontFamily: '"Earth Orbiter Bold", "Audiowide", cursive, sans-serif',
                                fontWeight: 400,
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                transition: "all 0.5s ease-out",
                                transform: isHovered ? "translateX(0)" : "translateX(100%)",
                                opacity: isHovered ? 1 : 0,
                            }}
                        >
                            {children}
                        </Box>
                    </Box>

                    {/* Arrow container */}
                    <Box
                        sx={{
                            position: "relative",
                            width: "24px",
                            height: "24px",
                            overflow: "hidden",
                            color: "#fff",
                        }}
                    >
                        {/* Default arrow */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                transition: "all 0.5s ease-out",
                                transform: isHovered ? "translateY(-100%)" : "translateY(0)",
                                opacity: isHovered ? 0 : 1,
                            }}
                        >
                            <ArrowIcon />
                        </Box>

                        {/* Hover arrow sliding in from bottom */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                transition: "all 0.5s ease-out",
                                transform: isHovered ? "translateY(0)" : "translateY(100%)",
                                opacity: isHovered ? 1 : 0,
                            }}
                        >
                            <ArrowIcon />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CTAButton;
import React from "react";
import { cn } from "../../lib/utils";
import logo from "../../assets/cvs-logo-navbar.png";

interface LogoProps {
  variant?: "navbar" | "footer" | "menubar" | "default";
  onClick?: () => void;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({
  variant = "navbar",
  onClick,
  className,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };

  // Size configuration based on variant
  const getSizeClasses = () => {
    switch (variant) {
      case "navbar":
        return "h-8 sm:h-10";
      case "footer":
        return "h-10 sm:h-12";
      case "menubar":
        return "h-6 sm:h-8";
      default:
        return "h-12 sm:h-14";
    }
  };

  return (
    <div
      className={cn(
        "flex items-center transition-transform duration-200 ease-in-out",
        onClick &&
          "cursor-pointer hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-main focus:ring-opacity-50",
        className
      )}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : "img"}
      tabIndex={onClick ? 0 : undefined}
      aria-label={onClick ? "CVS Logo - Click to go home" : "CVS Logo"}
    >
      <img
        src={logo}
        alt="CVS Logo"
        className={cn(getSizeClasses(), "w-auto max-w-full object-contain")}
        loading="eager" // Important for logo - load immediately
      />
    </div>
  );
};

export default Logo;

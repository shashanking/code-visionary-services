import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  className?: string;
  fullWidth?: boolean;
}

const ArrowIcon: React.FC = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className="rotate-[-45deg]"
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
  className = "",
  fullWidth = false,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Responsive size classes using CSS variables
  const sizeClasses = {
    small:
      "text-button-sm min-w-[200px] max-w-[280px] w-[var(--size-button-width-sm)] h-[var(--size-button-height-sm)]",
    medium:
      "text-button-md min-w-[240px] max-w-[320px] w-[var(--size-button-width-md)] h-[var(--size-button-height-md)]",
    large:
      "text-button-lg min-w-[280px] max-w-[384px] w-[var(--size-button-width-lg)] h-[var(--size-button-height-lg)]",
  };

  // Full width override
  const widthClass = fullWidth ? "w-full max-w-none" : sizeClasses[size];

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        fullWidth ? "w-full" : "",
        className
      )}
    >
      <button
        onClick={onClick}
        disabled={disabled}
        onMouseEnter={() => !disabled && setIsHovered(true)}
        onMouseLeave={() => !disabled && setIsHovered(false)}
        className={cn(
          // Base styles
          "relative rounded-[50px] overflow-hidden border-none cursor-pointer",
          "transition-all duration-700 ease-out focus:outline-none",
          "font-heading font-normal tracking-widest uppercase",

          // Responsive sizing
          widthClass,

          // Variant styles
          variant === "primary"
            ? "bg-button-primary shadow-button-primary"
            : "bg-button-secondary shadow-button-secondary",

          // Hover effects
          !disabled &&
            isHovered && [
              "translate-y-[-2px]",
              variant === "primary"
                ? "shadow-button-primary-hover"
                : "shadow-button-secondary-hover",
            ],

          // Disabled state
          disabled && "cursor-not-allowed opacity-60"
        )}
        style={{
          // Dynamic background gradients on hover
          background:
            !disabled && isHovered
              ? variant === "primary"
                ? "linear-gradient(135deg, var(--color-button-primary-hover-start) 0%, var(--color-button-primary-hover-mid) 50%, var(--color-button-primary-hover-end) 100%)"
                : "linear-gradient(135deg, var(--color-button-secondary-hover-start) 0%, var(--color-button-secondary-hover-mid) 50%, var(--color-button-secondary-hover-end) 100%)"
              : undefined,
        }}
      >
        {/* Glowing border */}
        <div
          className={cn(
            "absolute top-[-2px] left-[-2px] right-[-2px] bottom-[-2px] rounded-[50px] blur-sm transition-all duration-700 ease-out -z-10",
            !disabled && isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            background:
              variant === "primary"
                ? "linear-gradient(135deg, rgba(255,80,80,0.9), rgba(255,50,50,0.7), rgba(180,30,30,0.9))"
                : "linear-gradient(135deg, rgba(100,100,100,0.9), rgba(150,150,150,0.7), rgba(80,80,80,0.9))",
          }}
        />

        {/* Button content */}
        <div
          className={cn(
            "relative flex items-center justify-center h-full rounded-[50px] transition-all duration-300",
            fullWidth ? "px-4 sm:px-8 md:px-12" : "px-6 sm:px-8 md:px-12"
          )}
        >
          {/* Text container */}
          <div className="relative overflow-hidden mr-4 sm:mr-6 md:mr-8">
            {/* Default text */}
            <span
              className={cn(
                "block text-white transition-all duration-500 ease-out",
                !disabled && isHovered
                  ? "translate-x-[-100%] opacity-0"
                  : "translate-x-0 opacity-100"
              )}
            >
              {children}
            </span>

            {/* Hover text sliding in from right */}
            <span
              className={cn(
                "absolute top-0 left-0 text-white transition-all duration-500 ease-out",
                !disabled && isHovered
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              )}
            >
              {children}
            </span>
          </div>

          {/* Arrow container - responsive sizing */}
          <div className="relative w-6 h-6 overflow-hidden text-white">
            {/* Default arrow */}
            <div
              className={cn(
                "absolute inset-0 transition-all duration-500 ease-out",
                !disabled && isHovered
                  ? "translate-y-[-100%] opacity-0"
                  : "translate-y-0 opacity-100"
              )}
            >
              <ArrowIcon />
            </div>

            {/* Hover arrow sliding in from bottom */}
            <div
              className={cn(
                "absolute inset-0 transition-all duration-500 ease-out",
                !disabled && isHovered
                  ? "translate-y-0 opacity-100"
                  : "translate-y-full opacity-0"
              )}
            >
              <ArrowIcon />
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CTAButton;

// Usage....

// // Fully responsive - automatically adapts to screen size
// <CTAButton variant="primary" onClick={() => console.log('Clicked!')}>
//   Start Project
// </CTAButton>

// // Full width version
// <CTAButton variant="secondary" fullWidth>
//   Learn More
// </CTAButton>

// // Still accepts size prop, but now it's responsive
// <CTAButton size="large" disabled>
//   Coming Soon
// </CTAButton>

// // No need to specify size
// <CTAButton variant="secondary">
//   Start a Project
// </CTAButton>

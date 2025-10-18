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
  // Icon control props
  showIcon?: boolean;
  icon?: React.ReactNode;
  hoverIcon?: React.ReactNode;
  iconPosition?: "left" | "right";
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
  variant,
  size = "medium",
  disabled = false,
  className = "",
  fullWidth = false,
  // Icon control props
  showIcon = true,
  icon = <ArrowIcon />,
  hoverIcon,
  iconPosition = "right",
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

  // Size-based padding classes
  const paddingClasses = {
    small: "px-4 sm:px-5 md:px-6",
    medium: "px-4 sm:px-6 md:px-8",
    large: "px-6 sm:px-8 md:px-10",
  };

  // Full width override
  const widthClass = fullWidth ? "w-full max-w-none" : sizeClasses[size];

  // Check if it's a custom button (no variant specified)
  const isCustomButton = !variant;

  // Determine which icon to show
  const currentIcon = icon;
  const currentHoverIcon = hoverIcon || icon;

  return (
    <div
      className={cn(
        "flex items-center justify-center",
        fullWidth ? "w-full" : ""
        // Remove className from wrapper div
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

          // Responsive sizing (applies to both variant and custom buttons)
          widthClass,

          // Variant styles (only apply if variant is specified)
          variant === "primary" && "bg-button-primary shadow-button-primary",
          variant === "secondary" &&
            "bg-button-secondary shadow-button-secondary",

          // Hover effects (only for variant buttons)
          !isCustomButton &&
            !disabled &&
            isHovered && [
              "translate-y-[-2px]",
              variant === "primary"
                ? "shadow-button-primary-hover"
                : "shadow-button-secondary-hover",
            ],

          // Disabled state
          disabled && "cursor-not-allowed opacity-60",

          // Apply custom className to the button itself
          className
        )}
        style={{
          // Dynamic background gradients on hover (only for variant buttons)
          background:
            !isCustomButton && !disabled && isHovered
              ? variant === "primary"
                ? "linear-gradient(135deg, var(--color-button-primary-hover-start) 0%, var(--color-button-primary-hover-mid) 50%, var(--color-button-primary-hover-end) 100%)"
                : "linear-gradient(135deg, var(--color-button-secondary-hover-start) 0%, var(--color-button-secondary-hover-mid) 50%, var(--color-button-secondary-hover-end) 100%)"
              : undefined,
        }}
      >
        {/* Glowing border (only for variant buttons) */}
        {!isCustomButton && (
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
        )}

        {/* Button content */}
        <div
          className={cn(
            "relative flex items-center justify-center h-full rounded-[50px] transition-all duration-300",
            // Apply size-based padding to both variant and custom buttons
            paddingClasses[size],
            // Reverse flex direction for left icon
            iconPosition === "left" ? "flex-row-reverse" : "flex-row"
          )}
        >
          {/* Text container */}
          <div
            className={cn(
              "relative overflow-hidden transition-all duration-500 ease-out",
              // Only add margin when icon is shown
              showIcon
                ? iconPosition === "left"
                  ? "ml-4 sm:ml-4 md:ml-6"
                  : "mr-4 sm:mr-4 md:mr-6"
                : ""
            )}
          >
            {/* Default text */}
            <span
              className={cn(
                "block transition-all duration-500 ease-out",
                !disabled && isHovered
                  ? "translate-x-[-100%] opacity-0"
                  : "translate-x-0 opacity-100",
                // For custom buttons, text color should come from className
                // Remove text-white for custom buttons since it's handled by className
                isCustomButton ? "" : "text-white"
              )}
            >
              {children}
            </span>

            {/* Hover text sliding in from right */}
            <span
              className={cn(
                "absolute top-0 left-0 transition-all duration-500 ease-out",
                !disabled && isHovered
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0",
                // For custom buttons, text color should come from className
                // Remove text-white for custom buttons since it's handled by className
                isCustomButton ? "" : "text-white"
              )}
            >
              {children}
            </span>
          </div>

          {/* Icon container - only show if showIcon is true */}
          {showIcon && (
            <div
              className={cn(
                "relative w-6 h-6 overflow-hidden",
                // For custom buttons, icon color should come from className
                isCustomButton ? "" : "text-white"
              )}
            >
              {/* Default icon */}
              <div
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-out flex items-center justify-center",
                  !disabled && isHovered
                    ? "translate-y-[-100%] opacity-0"
                    : "translate-y-0 opacity-100"
                )}
              >
                {currentIcon}
              </div>

              {/* Hover icon sliding in from bottom */}
              <div
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-out flex items-center justify-center",
                  !disabled && isHovered
                    ? "translate-y-0 opacity-100"
                    : "translate-y-full opacity-0"
                )}
              >
                {currentHoverIcon}
              </div>
            </div>
          )}
        </div>
      </button>
    </div>
  );
};

export default CTAButton;

// Usage.....

/* <CTAButton
  size="small"
  showIcon={false}
  className="bg-white text-black hover:bg-gray-100 border border-gray-300"
  onClick={() => console.log("Button clicked")}
>
  Contact Us
</CTAButton>; */

// // 1. Custom button with small size (gets small padding & height)
// <CTAButton
//   size="small"
//   className="bg-blue-500 hover:bg-blue-600 text-white shadow-lg"
// >
//   Small Custom
// </CTAButton>

// // 2. Custom button with medium size (default)
// <CTAButton
//   size="medium"
//   className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
// >
//   Medium Custom
// </CTAButton>

// // 3. Custom button with large size (gets large padding & height)
// <CTAButton
//   size="large"
//   className="bg-green-500 hover:bg-green-600 text-white font-bold"
// >
//   Large Custom
// </CTAButton>

// // 4. Primary variant with custom className (still gets size layout)
// <CTAButton
//   variant="primary"
//   size="small"
//   className="border-2 border-white" // Adds border but keeps small size layout
// >
//   Small Primary
// </CTAButton>

// // 5. Full width custom button with proper sizing
// <CTAButton
//   size="large"
//   fullWidth
//   className="bg-red-500 hover:bg-red-600 text-white"
// >
//   Full Width Large
// </CTAButton>

// // 6. Custom button with different icon and size
// <CTAButton
//   size="medium"
//   icon={<StarIcon />}
//   className="bg-yellow-500 hover:bg-yellow-600 text-black"
// >
//   Star Button
// </CTAButton>

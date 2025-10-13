import React, { forwardRef } from "react";

interface ContentContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "7xl";
  paddingX?: "none" | "sm" | "md" | "lg" | "xl";
}

const ContentContainer = forwardRef<HTMLDivElement, ContentContainerProps>(
  ({ children, className = "", maxWidth = "7xl", paddingX = "lg" }, ref) => {
    const maxWidthClasses = {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "7xl": "max-w-7xl",
    };

    const paddingXClasses = {
      none: "",
      sm: "px-4",
      md: "px-6",
      lg: "px-4 md:px-8 lg:px-10",
      xl: "px-4 md:px-10 lg:px-15",
    };

    return (
      <div
        ref={ref}
        className={`relative z-10 w-full ${maxWidthClasses[maxWidth]} mx-auto ${paddingXClasses[paddingX]} ${className}`}
      >
        {children}
      </div>
    );
  }
);

ContentContainer.displayName = "ContentContainer";

export default ContentContainer;

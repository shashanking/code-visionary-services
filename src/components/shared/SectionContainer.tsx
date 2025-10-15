import React, { forwardRef } from "react";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  background?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
  (
    {
      id,
      children,
      className = "",
      fullWidth = true,
      background = "transparent",
      padding = "lg",
    },
    ref
  ) => {
    const paddingClasses = {
      none: "",
      sm: "py-8",
      md: "py-12",
      lg: "py-20 md:py-30",
    };

    return (
      <section
        id={id}
        ref={ref}
        className={`
        relative w-full
        ${fullWidth ? "w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]" : ""}
        ${paddingClasses[padding]}
        ${className}
      `}
        style={{ background }}
      >
        {children}
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";

export default SectionContainer;

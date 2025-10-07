import React from "react";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
  background?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  id,
  children,
  className = "",
  fullWidth = true,
  background = "transparent",
  padding = "lg",
}) => {
  const paddingClasses = {
    none: "",
    sm: "py-8",
    md: "py-12",
    lg: "py-16 md:py-30",
  };

  return (
    <section
      id={id}
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
};

export default SectionContainer;

import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CTAButton, Logo } from "../shared";
import { NAV_ITEMS } from "../../constants/navigation";
import { cn } from "../../lib/utils";
import ContentContainer from "../shared/ContentContainer";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = location.pathname;
    const currentItem = NAV_ITEMS.find(
      (item) =>
        item.href === currentPath || (currentPath === "/" && item.href === "/")
    );
    if (currentItem) {
      setActive(currentItem.label);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigate = (href: string, label: string) => {
    setActive(label);
    setMobileOpen(false);

    // Use React Router navigation
    navigate(href);
  };

  const GradientUnderlineV2: React.FC = () => (
    <div className="absolute bottom-0 left-0 w-full h-0.5">
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(90deg, rgba(181, 68, 44, 0) 0%, #B5442C 35%, #B5442C 65%, rgba(181, 68, 44, 0) 100%)",
        }}
      />
    </div>
  );

  // Mobile Menubar
  const MobileDrawer = () => (
    <div
      className={cn(
        "fixed inset-0 z-50 transition-all duration-300 ease-in-out lg:hidden",
        mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDrawerToggle}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={cn(
          "absolute top-0 left-0 h-full w-65 bg-gray-900 transform transition-transform duration-300 ease-in-out flex flex-col",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex-shrink-0 p-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <Logo
              variant="navbar"
              onClick={() => handleNavigate("/", "Home")}
            />
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="space-y-2 px-4">
            {NAV_ITEMS.map((item, index) => (
              <div
                key={item.label}
                className="transform transition-all duration-300 ease-out"
                style={{
                  transitionDelay: mobileOpen ? `${index * 50}ms` : "0ms",
                  transform: mobileOpen ? "translateX(0)" : "translateX(-10px)",
                  opacity: mobileOpen ? 1 : 0,
                }}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.href, item.label);
                  }}
                  className={cn(
                    "w-full text-left py-3 px-4 rounded-lg transition-all duration-200 cursor-pointer",
                    "focus:outline-none focus:ring-2 focus:ring-white/30",
                    active === item.label
                      ? "bg-[#0861aa] text-white font-semibold"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.label}</span>
                    {active === item.label && (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </nav>

        <div className="flex-shrink-0 p-4 border-t border-gray-700">
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-3">
              Ready to start your project?
            </p>
            <CTAButton
              variant="primary"
              size="small"
              fullWidth
              onClick={() => {
                console.log("Start project clicked from mobile");
                setMobileOpen(false);
                navigate("/contact");
              }}
              className="text-button-xsm"
            >
              Start a Project
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "bg-transparent"
        )}
        style={{ height: "64px" }}
      >
        <div className="max-w-7xl mx-auto h-full">
          <ContentContainer
            maxWidth="2xl"
            paddingX="lg"
            className="relative z-10 max-w-[1480px] flex items-center justify-between h-full gap-4"
          >
            <div className="flex items-center">
              <Logo
                variant="navbar"
                onClick={() => handleNavigate("/", "Home")}
              />
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.label}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.href, item.label);
                  }}
                  className={cn(
                    "relative py-2 text-sm font-medium transition-all duration-200 group cursor-pointer",
                    "hover:text-[#000000] focus:outline-none focus:text-[#000000]",
                    active === item.label
                      ? "text-[#000000] font-semibold"
                      : isScrolled
                      ? "text-gray-500"
                      : "text-gray-600"
                  )}
                >
                  {item.label}

                  {/* Gradient Underline - Active State */}
                  {active === item.label && <GradientUnderlineV2 />}

                  {/* Hover Underline Effect */}
                  {active !== item.label && (
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#B5442C] to-transparent transition-all duration-300 group-hover:w-full" />
                  )}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center">
              <CTAButton
                variant="primary"
                size="small"
                onClick={() => navigate("/contact")}
              >
                Start a Project
              </CTAButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={handleDrawerToggle}
              className={cn(
                "lg:hidden p-2 rounded transition-all duration-200 cursor-pointer",
                "focus:outline-none focus:ring-2 focus:ring-[#D2691E] focus:ring-opacity-50",
                isScrolled
                  ? "text-gray-900 hover:bg-gray-100"
                  : "text-white bg-black hover:bg-black/50"
              )}
              aria-label="Open menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </ContentContainer>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer />

      {/* Spacer for fixed navbar */}
      {/* <div style={{ height: "64px" }} /> */}
    </>
  );
};

export default Navbar;

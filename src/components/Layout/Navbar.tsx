"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { CTAButton, Logo } from "../shared";
import { NAV_ITEMS } from "../../constants/navigation";
import { cn } from "../../lib/utils";
import ContentContainer from "../shared/ContentContainer";

const SERVICE_PAGES = [
  { label: "Web App Development", href: "/services/web-app-development" },
  { label: "Mobile App Development", href: "/services/mobile-app-development" },
  { label: "Android App Development", href: "/services/android-app-development" },
  { label: "Custom Software Development", href: "/services/custom-software-development" },
  { label: "Software Development", href: "/services/software-development" },
  { label: "App Development", href: "/services/app-development" },
];

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("Home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const currentPath = pathname;
    const currentItem = NAV_ITEMS.find(
      (item) =>
        item.href === currentPath || (currentPath === "/" && item.href === "/")
    );
    if (currentItem) {
      setActive(currentItem.label);
    }
  }, [pathname]);

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
    router.push(href);
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
                    if (item.label === "Services") {
                      setMobileServicesOpen(!mobileServicesOpen);
                    } else {
                      handleNavigate(item.href, item.label);
                    }
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
                    {item.label === "Services" ? (
                      <svg className={cn("w-4 h-4 transition-transform duration-200", mobileServicesOpen ? "rotate-180" : "")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    ) : active === item.label ? (
                      <div className="w-2 h-2 bg-white rounded-full" />
                    ) : null}
                  </div>
                </button>
                {item.label === "Services" && mobileServicesOpen && (
                  <div className="ml-4 mt-1 mb-2 space-y-1">
                    {SERVICE_PAGES.map((sp) => (
                      <button
                        key={sp.href}
                        onClick={() => { router.push(sp.href); setMobileOpen(false); }}
                        className="w-full text-left py-2 px-4 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-150 cursor-pointer"
                      >
                        {sp.label}
                      </button>
                    ))}
                  </div>
                )}
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
                setMobileOpen(false);
                router.push("/contact");
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
              {NAV_ITEMS.map((item) => {
                const isServices = item.label === "Services";
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => isServices && setServicesOpen(true)}
                    onMouseLeave={() => isServices && setServicesOpen(false)}
                  >
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigate(item.href, item.label);
                        setServicesOpen(false);
                      }}
                      className={cn(
                        "relative py-2 text-sm font-medium transition-all duration-200 group cursor-pointer flex items-center gap-1",
                        "hover:text-[#000000] focus:outline-none focus:text-[#000000]",
                        active === item.label
                          ? "text-[#000000] font-semibold"
                          : isScrolled
                          ? "text-gray-500"
                          : "text-gray-600"
                      )}
                    >
                      {item.label}
                      {isServices && (
                        <svg className={cn("w-3 h-3 transition-transform duration-200", servicesOpen ? "rotate-180" : "")} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}

                      {active === item.label && <GradientUnderlineV2 />}
                      {active !== item.label && (
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-transparent via-[#B5442C] to-transparent transition-all duration-300 group-hover:w-full" />
                      )}
                    </button>

                    {isServices && servicesOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50 w-64">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-2 overflow-hidden">
                          {SERVICE_PAGES.map((sp) => (
                            <button
                              key={sp.href}
                              onClick={() => { router.push(sp.href); setServicesOpen(false); }}
                              className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-[#B5442C]/5 hover:text-[#B5442C] transition-colors duration-150 cursor-pointer"
                            >
                              {sp.label}
                            </button>
                          ))}
                          <div className="border-t border-gray-100 mt-1 pt-1">
                            <button
                              onClick={() => { router.push("/services"); setServicesOpen(false); }}
                              className="w-full text-left px-4 py-2.5 text-sm text-[#B5442C] font-semibold hover:bg-[#B5442C]/5 transition-colors cursor-pointer"
                            >
                              View All Services →
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="hidden lg:flex items-center">
              <CTAButton
                variant="primary"
                size="small"
                onClick={() => router.push("/contact")}
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
    </>
  );
};

export default Navbar;

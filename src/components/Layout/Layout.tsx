import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FooterRevealOverlay from "./footer-overlay";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <main>{children}</main>
      <FooterRevealOverlay />
      <Footer />
    </div>
  );
};

export default Layout;

import React, { useEffect } from "react";
import AppRoutes from "./routes/AppRoutes";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <>
      {/* <ScrollToTop /> */}
      <AppRoutes />
    </>
  );
};

export default App;

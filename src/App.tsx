import React from "react";
import AppRoutes from "./routes/AppRoutes";
import TawkChat from "./services/TwakMessanger/TwakMessanger";

const App: React.FC = () => {
  return (
    <>
      <AppRoutes />
      <TawkChat />
    </>
  );
};

export default App;

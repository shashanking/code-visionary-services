import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import Layout from "../components/Layout/Layout";
import AboutPage from "../pages/AboutPage/AboutPage";
import ServicePage from "../pages/ServicePage/ServicePage";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <HomePage />
          </Layout>
        }
      />
      <Route
        path="/about"
        element={
          <Layout>
            <AboutPage />
          </Layout>
        }
      />
      <Route
        path="/services"
        element={
          <Layout>
            <ServicePage />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

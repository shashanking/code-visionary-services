import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import AboutPage from "../pages/AboutPage/AboutPage";
import ServicePage from "../pages/ServicePage/ServicePage";
import PortfolioPage from "../pages/PortfolioPage/PortfolioPage";
import ReviewPage from "../pages/ReviewPage/ReviewPage";
import BlogPage from "../pages/BlogPage/BlogPage";
import ContactPage from "../pages/ContactPage/ContactPage";
import PortfolioDetailPage from "../pages/PortfolioDetailPage/PortfolioDetailPage";
import ComingSoon from "../components/shared/ComingSoon";
import NotFound from "../components/shared/NotFound";

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
      <Route
        path="/portfolio"
        element={
          <Layout>
            <PortfolioPage />
          </Layout>
        }
      />
      <Route
        path="/portfolio/:slug"
        element={
          <Layout>
            <PortfolioDetailPage />
          </Layout>
        }
      />
      <Route
        path="/reviews"
        element={
          <Layout>
            <ReviewPage />
          </Layout>
        }
      />
      <Route
        path="/blogs"
        element={
          <Layout>
            <BlogPage />
          </Layout>
        }
      />
      <Route
        path="/blogs/:slug"
        element={
          <Layout>
            <ComingSoon />
          </Layout>
        }
      />
      <Route
        path="/contact"
        element={
          <Layout>
            <ContactPage />
          </Layout>
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { useScrollRestoration } from "../hooks/useScrollRestoration";

const HomePage = React.lazy(() => import("../pages/HomePage/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage/AboutPage"));
const ServicePage = React.lazy(() => import("../pages/ServicePage/ServicePage"));
const PortfolioPage = React.lazy(() => import("../pages/PortfolioPage/PortfolioPage"));
const ReviewPage = React.lazy(() => import("../pages/ReviewPage/ReviewPage"));
const BlogPage = React.lazy(() => import("../pages/BlogPage/BlogPage"));
const ContactPage = React.lazy(() => import("../pages/ContactPage/ContactPage"));
const PortfolioDetailPage = React.lazy(() => import("../pages/PortfolioDetailPage/PortfolioDetailPage"));
const BlogDetailPage = React.lazy(() => import("../pages/BlogDetailPage/BlogDetailPage"));
const PrivacyPolicyPage = React.lazy(() => import("../components/Layout/PrivacyPolicy"));
const TermsAndConditionsPage = React.lazy(() => import("../components/Layout/TermsAndConditions"));
const NotFound = React.lazy(() => import("../components/shared/NotFound"));
const ThankYouPage = React.lazy(() => import("../pages/ThankYouPage/ThankYouPage"));

const PageFallback = () => (
  <div className="min-h-screen bg-black" />
);

const AppRoutes: React.FC = () => {
  useScrollRestoration();

  return (
    <Suspense fallback={<PageFallback />}>
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
              <BlogDetailPage />
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
        <Route
          path="/thank-you"
          element={
            <Layout>
              <ThankYouPage />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicyPage />
            </Layout>
          }
        />
        <Route
          path="/terms-and-conditions"
          element={
            <Layout>
              <TermsAndConditionsPage />
            </Layout>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;

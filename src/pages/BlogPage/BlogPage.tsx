import React from "react";
import { Helmet } from "react-helmet-async";
import HeroBlogPage from "../../components/BlogPageComponents/HeroBlogPage";
import BlogCardSection from "../../components/BlogPageComponents/BlogCardSection";

const BlogPage = React.memo(() => {
  return (
    <div>
      <Helmet>
        <title>Digital Innovation Blog | Code Visionary Services</title>
        <meta name="description" content="Stay updated with the latest digital trends, marketing strategies, web technologies, and creative insights from our expert blog." />
        <link rel="canonical" href="https://codevisionaryservices.com/blogs" />
        <meta property="og:title" content="Digital Innovation Blog | Code Visionary Services" />
        <meta property="og:description" content="Stay updated with the latest digital trends, marketing strategies, web technologies, and creative insights from our expert blog." />
        <meta property="og:image" content="https://codevisionaryservices.com/og-image.webp" />
        <meta property="og:url" content="https://codevisionaryservices.com/blogs" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Digital Innovation Blog | Code Visionary Services" />
        <meta name="twitter:description" content="Stay updated with the latest digital trends, marketing strategies, web technologies, and creative insights from our expert blog." />
        <meta name="twitter:image" content="https://codevisionaryservices.com/og-image.webp" />
      </Helmet>
      <HeroBlogPage />
      <BlogCardSection />
    </div>
  );
});

export default BlogPage;

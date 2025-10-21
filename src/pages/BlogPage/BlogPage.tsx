import React from "react";
import HeroBlogPage from "../../components/BlogPageComponents/HeroBlogPage";
import BlogCardSection from "../../components/BlogPageComponents/BlogCardSection";

const BlogPage = React.memo(() => {
  return (
    <div>
      <HeroBlogPage />
      <BlogCardSection />
    </div>
  );
});

export default BlogPage;

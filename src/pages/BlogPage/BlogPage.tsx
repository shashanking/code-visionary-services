import React from "react";
import HeroBlogPage from "../../components/BlogPageComponents/HeroBlogPage";

const BlogPage = React.memo(() => {
  return (
    <div>
      <HeroBlogPage />
    </div>
  );
});

export default BlogPage;

import React from "react";
import { Helmet } from "react-helmet-async";
import HeroReviewPage from "../../components/ReviewPageComponents/HeroReviewPage";
import ReviewCardSection from "../../components/ReviewPageComponents/ReviewCardSection";

const ReviewPage = React.memo(() => {
  return (
    <div>
      <Helmet>
        <title>Customer Stories &amp; Testimonials | Code Visionary Services</title>
        <meta name="description" content="Read real customer stories and testimonials showcasing how Code Visionary Services helped businesses grow with web, app, and marketing solutions." />
        <link rel="canonical" href="https://codevisionaryservices.com/reviews" />
        <meta property="og:title" content="Customer Stories & Testimonials | Code Visionary Services" />
        <meta property="og:description" content="Read real customer stories and testimonials showcasing how Code Visionary Services helped businesses grow with web, app, and marketing solutions." />
        <meta property="og:image" content="https://codevisionaryservices.com/og-image.png" />
        <meta property="og:url" content="https://codevisionaryservices.com/reviews" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Customer Stories & Testimonials | Code Visionary Services" />
        <meta name="twitter:description" content="Read real customer stories and testimonials showcasing how Code Visionary Services helped businesses grow with web, app, and marketing solutions." />
        <meta name="twitter:image" content="https://codevisionaryservices.com/og-image.png" />
      </Helmet>
      <HeroReviewPage />
      <ReviewCardSection />
    </div>
  );
});

export default ReviewPage;

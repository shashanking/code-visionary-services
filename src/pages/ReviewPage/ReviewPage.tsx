import React from "react";
import HeroReviewPage from "../../components/ReviewPageComponents/HeroReviewPage";
import ReviewCardSection from "../../components/ReviewPageComponents/ReviewCardSection";

const ReviewPage = React.memo(() => {
  return (
    <div>
      <HeroReviewPage />
      <ReviewCardSection />
    </div>
  );
});

export default ReviewPage;

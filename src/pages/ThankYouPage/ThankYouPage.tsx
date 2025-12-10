import React, { useEffect } from "react";
import SectionContainer from "../../components/shared/SectionContainer";
import ContentContainer from "../../components/shared/ContentContainer";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

const ThankYouPage: React.FC = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.fbq) {
      window.fbq("track", "Lead");
    }
  }, []);

  return (
    <SectionContainer
      id="thank-you"
      fullWidth
      padding="lg"
      background="#F0F0F0"
      className="relative min-h-screen flex justify-center items-center overflow-hidden"
    >
      <ContentContainer
        maxWidth="7xl"
        paddingX="lg"
        className="relative z-10 flex flex-col justify-center items-center text-center"
      >
        <div className="relative w-full max-w-2xl flex flex-col justify-center items-center">
          <h1 className="font-heading font-bold text-title-md md:text-title-xl text-center uppercase mb-6 leading-tight max-w-sm bg-gradient-to-l from-[#B5442C] to-[#4F1E13] bg-clip-text text-transparent">
            Thank You For Reaching Out
          </h1>
          <p className="font-sans font-normal text-body1 text-[#303030] leading-[1.5] text-center max-w-md mb-4">
            Your request has been received. Our team will review your details and
            get back to you within one business day.
          </p>
          <p className="font-sans font-normal text-body2 text-[#606060] leading-[1.5] text-center max-w-md">
            You can safely close this page or continue browsing our site while we
            prepare the next steps for your project.
          </p>
        </div>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ThankYouPage;

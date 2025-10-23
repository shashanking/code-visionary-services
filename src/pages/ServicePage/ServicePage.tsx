import React from "react";
import HeroServicePage from "../../components/ServicePageComponents/HeroServicePage";
import ServiceCardSection from "../../components/ServicePageComponents/ServiceCardSection";

const ServicePage = React.memo(() => {
  return (
    <div>
      <HeroServicePage />
      <ServiceCardSection />
    </div>
  );
});

export default ServicePage;

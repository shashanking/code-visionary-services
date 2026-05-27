import type { Metadata } from 'next';
import HeroSection from '../components/HomePageComponents/HeroSection';
import ClientsMarqueeSection from '../components/HomePageComponents/ClientsMarqueeSection';
import AboutSection from '../components/HomePageComponents/AboutSection';
import PortfolioSection from '../components/HomePageComponents/PortfolioSection';
import TechStackSection from '../components/HomePageComponents/TechStackSection';
import ReviewSection from '../components/HomePageComponents/ReviewSection';
import OurTeamSection from '../components/HomePageComponents/OurTeamSection';
import BannerSection from '../components/HomePageComponents/BannerSection';
import ContactSection from '../components/HomePageComponents/ContactSection';
import FAQSection from '../components/HomePageComponents/FAQSection';
import { sanityReviewService } from '../services/ReviewService/sanityReviewService';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Hire the Best Developers | Code Visionary Services',
  description: 'Hire dedicated developers for Python, React, and app development. Code Visionary Services delivers expert dev talent, AI insights & growth funnels.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Hire the Best Developers | Code Visionary Services',
    description: 'Hire dedicated developers for Python, React, and app development. Code Visionary Services delivers expert dev talent, AI insights & growth funnels.',
    url: SITE_URL,
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire the Best Developers | Code Visionary Services',
    description: 'Hire dedicated developers for Python, React, and app development. Code Visionary Services delivers expert dev talent, AI insights & growth funnels.',
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default async function HomePage() {
  const reviewItems = await sanityReviewService.getTopRatedLatestReviews(8, 4);

  return (
    <div>
      <HeroSection />
      <ClientsMarqueeSection />
      <AboutSection />
      <PortfolioSection />
      <TechStackSection />
      <ReviewSection initialData={reviewItems} />
      <OurTeamSection />
      <BannerSection />
      <ContactSection />
      <FAQSection />
    </div>
  );
}

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
import { sanityFAQService } from '../services/FaqService/sanityFAQService';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Hire the Best Developers | Code Visionary Services',
  description: 'Hire dedicated developers for Python, React, and app development. Code Visionary Services delivers expert dev talent, AI insights & growth funnels.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
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
  const [reviewItems, faqs] = await Promise.all([
    sanityReviewService.getTopRatedLatestReviews(8, 4),
    sanityFAQService.getFAQs(),
  ]);

  const faqSchema = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  } : null;

  return (
    <div>
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
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

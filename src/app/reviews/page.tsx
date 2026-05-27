import type { Metadata } from 'next';
import HeroReviewPage from '../../components/ReviewPageComponents/HeroReviewPage';
import ReviewCardSection from '../../components/ReviewPageComponents/ReviewCardSection';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Customer Stories & Testimonials | Code Visionary Services',
  description: 'Read real customer stories and testimonials showcasing how Code Visionary Services helped businesses grow with web, app, and marketing solutions.',
  alternates: { canonical: `${SITE_URL}/reviews` },
  openGraph: {
    title: 'Customer Stories & Testimonials | Code Visionary Services',
    description: 'Read real customer stories and testimonials showcasing how Code Visionary Services helped businesses grow with web, app, and marketing solutions.',
    url: `${SITE_URL}/reviews`,
    images: [`${SITE_URL}/og-image.webp`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Customer Stories & Testimonials | Code Visionary Services',
    description: 'Read real customer stories and testimonials showcasing how Code Visionary Services helped businesses grow with web, app, and marketing solutions.',
    images: [`${SITE_URL}/og-image.webp`],
  },
};

export default function ReviewPage() {
  return (
    <div>
      <HeroReviewPage />
      <ReviewCardSection />
    </div>
  );
}

import type { Metadata } from 'next';
import HeroReviewPage from '../../components/ReviewPageComponents/HeroReviewPage';
import ReviewCardSection from '../../components/ReviewPageComponents/ReviewCardSection';
import { sanityReviewService } from '../../services/ReviewService/sanityReviewService';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Client Testimonials | Web Design, App Development & Digital Marketing Services | Code Visionary Services',
  description: 'See what our clients say about Code Visionary Services. Real testimonials on web design, app development, branding, and digital marketing solutions that drive business growth.',
  alternates: { canonical: `${SITE_URL}/reviews` },
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
    title: 'Client Testimonials | Web Design & App Development | Code Visionary Services',
    description: 'See what our clients say about Code Visionary Services. Real testimonials on web design, app development, branding, and digital marketing solutions that drive business growth.',
    url: `${SITE_URL}/reviews`,
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials | Web Design & App Development | Code Visionary Services',
    description: 'See what our clients say about Code Visionary Services. Real testimonials on web design, app development, branding, and digital marketing solutions that drive business growth.',
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default async function ReviewPage() {
  const [reviewItems, heroReviewItems] = await Promise.all([
    sanityReviewService.getReviewItems(),
    sanityReviewService.getHeroReviewItems(),
  ]);

  return (
    <div>
      <HeroReviewPage initialData={heroReviewItems} />
      <ReviewCardSection initialData={reviewItems} />
    </div>
  );
}

import type { Metadata } from 'next';
import HeroBlogPage from '../../components/BlogPageComponents/HeroBlogPage';
import BlogCardSection from '../../components/BlogPageComponents/BlogCardSection';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Digital Innovation Blog | Code Visionary Services',
  description: 'Stay updated with the latest digital trends, marketing strategies, web technologies, and creative insights from our expert blog.',
  alternates: { canonical: `${SITE_URL}/blogs` },
  openGraph: {
    title: 'Digital Innovation Blog | Code Visionary Services',
    description: 'Stay updated with the latest digital trends, marketing strategies, web technologies, and creative insights from our expert blog.',
    url: `${SITE_URL}/blogs`,
    images: [`${SITE_URL}/og-image.webp`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Innovation Blog | Code Visionary Services',
    description: 'Stay updated with the latest digital trends, marketing strategies, web technologies, and creative insights from our expert blog.',
    images: [`${SITE_URL}/og-image.webp`],
  },
};

export default function BlogPage() {
  return (
    <div>
      <HeroBlogPage />
      <BlogCardSection />
    </div>
  );
}

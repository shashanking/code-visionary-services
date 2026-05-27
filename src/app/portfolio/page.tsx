import type { Metadata } from 'next';
import HeroPortfolioPage from '../../components/PortfolioPageComponents/HeroPortfolioPage';
import PortfolioCardSection from '../../components/PortfolioPageComponents/PortfolioCardSection';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Our Digital Projects That Drive Results | Code Visionary Services',
  description: 'See how we transform ideas into results through web development, app solutions, branding, and performance-driven digital projects.',
  alternates: { canonical: `${SITE_URL}/portfolio` },
  openGraph: {
    title: 'Our Digital Projects That Drive Results | Code Visionary Services',
    description: 'See how we transform ideas into results through web development, app solutions, branding, and performance-driven digital projects.',
    url: `${SITE_URL}/portfolio`,
    images: [`${SITE_URL}/og-image.webp`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Digital Projects That Drive Results | Code Visionary Services',
    description: 'See how we transform ideas into results through web development, app solutions, branding, and performance-driven digital projects.',
    images: [`${SITE_URL}/og-image.webp`],
  },
};

export default function PortfolioPage() {
  return (
    <div className="flex flex-col">
      <HeroPortfolioPage />
      <PortfolioCardSection />
    </div>
  );
}

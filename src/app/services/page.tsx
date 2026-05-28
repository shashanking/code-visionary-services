import type { Metadata } from 'next';
import HeroServicePage from '../../components/ServicePageComponents/HeroServicePage';
import ServiceCardSection from '../../components/ServicePageComponents/ServiceCardSection';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Hire Dedicated Developers | Web, App & Tech Marketing | Code Visionary Services',
  description: 'Code Visionary Services offers web development, mobile apps, UI/UX design, branding, AI automation, and performance-driven digital funnels',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
    title: 'Hire Dedicated Developers | Web, App & Tech Marketing | Code Visionary Services',
    description: 'Code Visionary Services offers web development, mobile apps, UI/UX design, branding, AI automation, and performance-driven digital funnels',
    url: `${SITE_URL}/services`,
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Dedicated Developers | Web, App & Tech Marketing | Code Visionary Services',
    description: 'Code Visionary Services offers web development, mobile apps, UI/UX design, branding, AI automation, and performance-driven digital funnels',
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function ServicePage() {
  return (
    <div>
      <HeroServicePage />
      <ServiceCardSection />
    </div>
  );
}

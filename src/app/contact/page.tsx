import type { Metadata } from 'next';
import HeroContactPage from '../../components/ContactPageComponents/HeroContactPage';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Ready to Hire Dedicated Developers? Contact Code Visionary Services',
  description: 'Got a project in mind? Hire dedicated Python, React & app developers at Code Visionary Services. Schedule a call & get a clear plan in one business day.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: 'Ready to Hire Dedicated Developers? Contact Code Visionary Services',
    description: 'Got a project in mind? Hire dedicated Python, React & app developers at Code Visionary Services. Schedule a call & get a clear plan in one business day.',
    url: `${SITE_URL}/contact`,
    images: [`${SITE_URL}/og-image.webp`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ready to Hire Dedicated Developers? Contact Code Visionary Services',
    description: 'Got a project in mind? Hire dedicated Python, React & app developers at Code Visionary Services. Schedule a call & get a clear plan in one business day.',
    images: [`${SITE_URL}/og-image.webp`],
  },
};

export default function ContactPage() {
  return (
    <div>
      <HeroContactPage />
    </div>
  );
}

import type { Metadata } from 'next';
import HeroAboutPage from '../../components/AboutPageComponents/HeroAboutPage';
import OurStorySection from '../../components/AboutPageComponents/OurStorySection';
import OurTeamSection from '../../components/AboutPageComponents/OurTeamSection';
import TimelineSection from '../../components/AboutPageComponents/TimelineSection';
import StatsSection from '../../components/AboutPageComponents/StatsSection';
import ContactUsSection from '../../components/AboutPageComponents/ContactUsSection';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'About Code Visionary Services | Digital Innovation Team',
  description: 'From vision to execution, Code Visionary Services builds scalable digital products through innovation, strategy, and a passionate expert team.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About Code Visionary Services | Digital Innovation Team',
    description: 'From vision to execution, Code Visionary Services builds scalable digital products through innovation, strategy, and a passionate expert team.',
    url: `${SITE_URL}/about`,
    images: [`${SITE_URL}/og-image.webp`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Code Visionary Services | Digital Innovation Team',
    description: 'From vision to execution, Code Visionary Services builds scalable digital products through innovation, strategy, and a passionate expert team.',
    images: [`${SITE_URL}/og-image.webp`],
  },
};

export default function AboutPage() {
  return (
    <div>
      <HeroAboutPage />
      <OurStorySection />
      <OurTeamSection />
      <TimelineSection />
      <StatsSection />
      <ContactUsSection />
    </div>
  );
}

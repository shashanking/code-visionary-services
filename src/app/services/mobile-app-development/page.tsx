import type { Metadata } from 'next';
import ServiceLandingPage from '../../../components/ServiceLandingPage/ServiceLandingPage';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Mobile App Development Company in India | Code Visionary Services',
  description: 'Top-rated mobile app development company offering iOS, Android, and cross-platform app development. Build your dream app with Code Visionary Services.',
  alternates: { canonical: `${SITE_URL}/services/mobile-app-development` },
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
    title: 'Mobile App Development Company in India | Code Visionary Services',
    description: 'Top-rated mobile app development company offering iOS, Android, and cross-platform app development. Build your dream app with Code Visionary Services.',
    url: `${SITE_URL}/services/mobile-app-development`,
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Company in India | Code Visionary Services',
    description: 'Top-rated mobile app development company offering iOS, Android, and cross-platform app development. Build your dream app with Code Visionary Services.',
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function MobileAppDevelopmentPage() {
  return (
    <ServiceLandingPage
      heading="Mobile App |Development| Company"
      subheading="From idea to App Store — we build iOS, Android, and cross-platform mobile apps that users love and businesses rely on."
      description="Code Visionary Services is a full-service mobile app development company in India with a track record of delivering polished, scalable apps across industries. Whether you need a consumer-facing app or an enterprise mobile solution, our team combines design thinking with engineering excellence to bring your vision to life on any platform."
      features={[
        {
          title: "iOS App Development",
          description: "Native Swift and SwiftUI apps built for iPhone and iPad with App Store optimization included.",
        },
        {
          title: "Android App Development",
          description: "Kotlin-first Android apps that perform flawlessly across the full range of Android devices.",
        },
        {
          title: "Cross-Platform Development",
          description: "React Native and Flutter apps that share one codebase while delivering a native-like feel.",
        },
        {
          title: "MVP Development",
          description: "Launch fast with a focused minimum viable product and iterate based on real user feedback.",
        },
        {
          title: "App Redesign & Migration",
          description: "Modernize legacy apps or migrate from one platform to another without losing functionality.",
        },
        {
          title: "Push Notifications & Analytics",
          description: "Built-in engagement tools — notifications, in-app analytics, and A/B testing support.",
        },
      ]}
      techStack={[
        "React Native", "Flutter", "Swift", "Kotlin", "Expo",
        "Firebase", "Supabase", "Node.js", "AWS", "Google Play", "App Store",
      ]}
      whyUsPoints={[
        "Cross-platform experts: one team covers iOS, Android, and hybrid development.",
        "UI/UX-first approach — every app is designed to maximize user retention.",
        "We build for scale: architecture that grows as your user base grows.",
        "Dedicated project manager for every engagement, always accessible.",
        "Post-launch support included — we don't disappear after deployment.",
        "Proven delivery with 50+ mobile apps shipped to real users globally.",
      ]}
    />
  );
}

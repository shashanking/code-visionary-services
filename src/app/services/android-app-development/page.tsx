import type { Metadata } from 'next';
import ServiceLandingPage from '../../../components/ServiceLandingPage/ServiceLandingPage';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Android App Development Company in India | Code Visionary Services',
  description: 'Looking for a reliable Android app development company? Code Visionary Services builds high-performance, scalable Android applications for startups and enterprises.',
  alternates: { canonical: `${SITE_URL}/services/android-app-development` },
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
    title: 'Android App Development Company in India | Code Visionary Services',
    description: 'Looking for a reliable Android app development company? Code Visionary Services builds high-performance, scalable Android applications for startups and enterprises.',
    url: `${SITE_URL}/services/android-app-development`,
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Android App Development Company in India | Code Visionary Services',
    description: 'Looking for a reliable Android app development company? Code Visionary Services builds high-performance, scalable Android applications for startups and enterprises.',
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function AndroidAppDevelopmentPage() {
  return (
    <ServiceLandingPage
      heading="Android App |Development| Company"
      subheading="We build powerful, scalable Android applications that deliver seamless user experiences and drive real business results."
      description="As a leading Android app development company in India, Code Visionary Services specializes in building robust, feature-rich Android applications. Whether you're a startup launching your first app or an enterprise scaling your mobile presence, our Android developers deliver solutions tailored to your goals — from native Kotlin apps to complex multi-platform systems."
      features={[
        {
          title: "Native Android Development",
          description: "High-performance apps built with Kotlin and Java, optimized for the full Android device ecosystem.",
        },
        {
          title: "Custom UI/UX Design",
          description: "Material Design-compliant interfaces that are intuitive, beautiful, and conversion-focused.",
        },
        {
          title: "API & Backend Integration",
          description: "Seamless integration with REST APIs, Firebase, cloud services, and third-party platforms.",
        },
        {
          title: "Play Store Publishing",
          description: "End-to-end support from development to Google Play Store submission, review, and launch.",
        },
        {
          title: "App Maintenance & Support",
          description: "Ongoing updates, performance monitoring, and bug fixes to keep your app running smoothly.",
        },
        {
          title: "Android App Testing",
          description: "Rigorous testing across device sizes, OS versions, and usage scenarios to ensure reliability.",
        },
      ]}
      techStack={[
        "Kotlin", "Java", "Jetpack Compose", "Android Studio",
        "Firebase", "Retrofit", "Room DB", "Coroutines", "Hilt", "Google Play",
      ]}
      whyUsPoints={[
        "Dedicated Android developers with 3+ years of hands-on experience.",
        "Transparent project management with weekly updates and milestone tracking.",
        "Agile development approach — faster delivery without compromising quality.",
        "Full-stack capability: we handle both app and backend development in-house.",
        "Competitive pricing with no hidden costs — ideal for startups and SMEs.",
        "Based in India, serving global clients across the US, UK, and Middle East.",
      ]}
    />
  );
}

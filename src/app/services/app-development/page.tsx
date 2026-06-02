import type { Metadata } from 'next';
import ServiceLandingPage from '../../../components/ServiceLandingPage/ServiceLandingPage';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'App Development Company in India | Code Visionary Services',
  description: 'Trusted app development company offering custom app development for iOS, Android, and web. From concept to launch — Code Visionary Services delivers.',
  alternates: { canonical: `${SITE_URL}/services/app-development` },
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
    title: 'App Development Company in India | Code Visionary Services',
    description: 'Trusted app development company offering custom app development for iOS, Android, and web. From concept to launch — Code Visionary Services delivers.',
    url: `${SITE_URL}/services/app-development`,
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'App Development Company in India | Code Visionary Services',
    description: 'Trusted app development company offering custom app development for iOS, Android, and web. From concept to launch — Code Visionary Services delivers.',
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function AppDevelopmentPage() {
  return (
    <ServiceLandingPage
      heading="App |Development| Company"
      subheading="Custom app development for every platform — mobile, web, and desktop. We turn your idea into a product your users will keep coming back to."
      description="Code Visionary Services is a custom app development company that specializes in building digital products from the ground up. Whether you need a mobile app for consumers, a web app for your team, or a multi-platform product, our app development services cover every stage — strategy, design, build, test, and launch. We're the app development company that makes your idea real."
      features={[
        {
          title: "Custom App Development",
          description: "Bespoke apps built around your specific business needs — no templates, no shortcuts.",
        },
        {
          title: "iOS App Development",
          description: "Native Swift apps for iPhone and iPad with full App Store submission support.",
        },
        {
          title: "Android App Development",
          description: "Kotlin-powered Android apps optimized for performance on all device types.",
        },
        {
          title: "Cross-Platform Apps",
          description: "React Native and Flutter apps that run on iOS and Android from a single codebase.",
        },
        {
          title: "App UI/UX Design",
          description: "User-centered design with wireframes, prototypes, and pixel-perfect implementation.",
        },
        {
          title: "App Store Optimization",
          description: "Keyword-optimized store listings and assets to maximize organic downloads from day one.",
        },
      ]}
      techStack={[
        "React Native", "Flutter", "Swift", "Kotlin", "Expo",
        "Firebase", "Node.js", "GraphQL", "AWS", "App Store", "Google Play",
      ]}
      whyUsPoints={[
        "Full-service app development company — design, engineering, and QA under one roof.",
        "Fast turnaround: MVP apps delivered in as little as 6–8 weeks.",
        "Human-centered design: we prototype and validate with real users before building.",
        "Flexible hiring models — project-based or dedicated app development team.",
        "Transparent pricing with detailed project estimates before work begins.",
        "Post-launch support and iterative updates included in every engagement.",
      ]}
    />
  );
}

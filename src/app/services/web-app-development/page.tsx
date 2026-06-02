import type { Metadata } from 'next';
import ServiceLandingPage from '../../../components/ServiceLandingPage/ServiceLandingPage';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Web App Development Company in India | Code Visionary Services',
  description: 'Expert web app development company building fast, scalable, and secure web applications. From dashboards to SaaS platforms — we deliver end-to-end.',
  alternates: { canonical: `${SITE_URL}/services/web-app-development` },
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
    title: 'Web App Development Company in India | Code Visionary Services',
    description: 'Expert web app development company building fast, scalable, and secure web applications. From dashboards to SaaS platforms — we deliver end-to-end.',
    url: `${SITE_URL}/services/web-app-development`,
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web App Development Company in India | Code Visionary Services',
    description: 'Expert web app development company building fast, scalable, and secure web applications. From dashboards to SaaS platforms — we deliver end-to-end.',
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function WebAppDevelopmentPage() {
  return (
    <ServiceLandingPage
      heading="Web App |Development| Company"
      subheading="We build powerful web applications that scale with your business — from MVPs and internal tools to full SaaS platforms."
      description="Code Visionary Services is an experienced web app development company delivering high-performance web applications for startups and growing businesses. Our full-stack development team handles everything from UI design and frontend engineering to backend APIs and cloud infrastructure — so you get a complete product, not just code."
      features={[
        {
          title: "Progressive Web Apps (PWA)",
          description: "Offline-capable, installable web apps that deliver a native-like experience on any device.",
        },
        {
          title: "SaaS Platform Development",
          description: "Multi-tenant SaaS products with subscription management, role-based access, and analytics.",
        },
        {
          title: "Admin Dashboards & Portals",
          description: "Data-rich admin panels with real-time charts, filters, and role-based permission systems.",
        },
        {
          title: "E-Commerce Web Apps",
          description: "Custom online stores with advanced product management, payments, and logistics integration.",
        },
        {
          title: "Real-Time Applications",
          description: "Chat, collaboration, and live-data apps powered by WebSockets and event-driven architecture.",
        },
        {
          title: "Performance Optimization",
          description: "Core Web Vitals tuning, lazy loading, caching strategies, and CDN setup for lightning speed.",
        },
      ]}
      techStack={[
        "React", "Next.js", "TypeScript", "Node.js", "Express",
        "PostgreSQL", "Redis", "Tailwind CSS", "AWS", "Vercel", "Supabase",
      ]}
      whyUsPoints={[
        "Full-stack expertise: one team owns the entire product — frontend, backend, and infrastructure.",
        "SEO-optimized builds: server-side rendering and structured data from the start.",
        "Responsive-first design: your web app looks and performs great on every screen size.",
        "Scalable architecture designed to handle growth from 100 to 1,000,000 users.",
        "Transparent sprint reviews — you see progress every week, not just at the end.",
        "Long-term partnership: maintenance plans available post-launch.",
      ]}
    />
  );
}

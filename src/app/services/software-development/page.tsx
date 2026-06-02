import type { Metadata } from 'next';
import ServiceLandingPage from '../../../components/ServiceLandingPage/ServiceLandingPage';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Software Development Company in India | Code Visionary Services',
  description: 'Top software development company in India offering end-to-end software development services. Web, mobile, cloud, and enterprise solutions for global clients.',
  alternates: { canonical: `${SITE_URL}/services/software-development` },
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
    title: 'Software Development Company in India | Code Visionary Services',
    description: 'Top software development company in India offering end-to-end software development services. Web, mobile, cloud, and enterprise solutions for global clients.',
    url: `${SITE_URL}/services/software-development`,
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Software Development Company in India | Code Visionary Services',
    description: 'Top software development company in India offering end-to-end software development services. Web, mobile, cloud, and enterprise solutions for global clients.',
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function SoftwareDevelopmentPage() {
  return (
    <ServiceLandingPage
      heading="Software |Development| Company in India"
      subheading="End-to-end software development services — from architecture and design to deployment and ongoing support."
      description="Code Visionary Services is a full-service software development company in India trusted by startups and enterprises across the globe. Our software development services span the entire product lifecycle: discovery, design, development, QA, deployment, and post-launch support. We build software that solves real problems and creates measurable value for your business."
      features={[
        {
          title: "Product Discovery & Planning",
          description: "Structured workshops to define scope, architecture, and roadmap before a single line of code is written.",
        },
        {
          title: "Full-Stack Development",
          description: "End-to-end delivery across frontend, backend, databases, and cloud infrastructure.",
        },
        {
          title: "Quality Assurance & Testing",
          description: "Manual and automated testing including unit, integration, and end-to-end test coverage.",
        },
        {
          title: "DevOps & Cloud Deployment",
          description: "CI/CD pipelines, containerization, and cloud hosting on AWS, GCP, or Azure.",
        },
        {
          title: "Dedicated Development Teams",
          description: "Hire a dedicated software development team that works as an extension of your in-house engineering.",
        },
        {
          title: "Ongoing Maintenance",
          description: "Retainer-based support plans with SLA-backed response times and monthly updates.",
        },
      ]}
      techStack={[
        "Python", "Node.js", "React", "Next.js", "Java", "TypeScript",
        "PostgreSQL", "MongoDB", "AWS", "Docker", "Kubernetes", "GitHub Actions",
      ]}
      whyUsPoints={[
        "Rated among the top software development companies in India for client satisfaction.",
        "6+ years of combined experience in building scalable digital products.",
        "Time-zone friendly: we overlap with US, UK, and Gulf business hours.",
        "Cost-effective: Indian development rates with Silicon Valley quality standards.",
        "Structured onboarding — you're up and running in under a week.",
        "No lock-in: all contracts include source code handover and documentation.",
      ]}
    />
  );
}

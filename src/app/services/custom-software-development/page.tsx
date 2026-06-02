import type { Metadata } from 'next';
import ServiceLandingPage from '../../../components/ServiceLandingPage/ServiceLandingPage';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Custom Software Development Company | Code Visionary Services',
  description: 'Leading custom software development company in India. We build tailor-made software solutions for startups, SMEs, and enterprises. Get a free consultation.',
  alternates: { canonical: `${SITE_URL}/services/custom-software-development` },
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
    title: 'Custom Software Development Company | Code Visionary Services',
    description: 'Leading custom software development company in India. We build tailor-made software solutions for startups, SMEs, and enterprises. Get a free consultation.',
    url: `${SITE_URL}/services/custom-software-development`,
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Company | Code Visionary Services',
    description: 'Leading custom software development company in India. We build tailor-made software solutions for startups, SMEs, and enterprises. Get a free consultation.',
    images: [`${SITE_URL}/og-image.png`],
  },
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <ServiceLandingPage
      heading="Custom Software |Development| Company"
      subheading="Off-the-shelf software can't solve unique problems. We build custom software tailored exactly to your business workflow, users, and goals."
      description="Code Visionary Services is a trusted custom software development company helping businesses replace outdated systems, automate workflows, and build proprietary tools that give them a competitive edge. Our software engineers work closely with your team to understand your processes and deliver solutions that fit like a glove — no bloat, no compromise."
      features={[
        {
          title: "Business Process Automation",
          description: "Automate repetitive tasks and internal workflows to reduce costs and free up your team's time.",
        },
        {
          title: "SaaS Product Development",
          description: "End-to-end SaaS application development with multi-tenancy, billing, and admin dashboards.",
        },
        {
          title: "ERP & CRM Solutions",
          description: "Custom enterprise resource planning and CRM systems built around your actual business model.",
        },
        {
          title: "Legacy System Modernization",
          description: "Migrate outdated software to modern stacks without disrupting ongoing business operations.",
        },
        {
          title: "API Development & Integration",
          description: "Build and connect robust APIs to unify your data sources, tools, and third-party services.",
        },
        {
          title: "Cloud-Native Software",
          description: "Scalable software architected for the cloud — AWS, GCP, or Azure — with CI/CD from day one.",
        },
      ]}
      techStack={[
        "Python", "Node.js", "React", "Next.js", "PostgreSQL",
        "MongoDB", "Django", "FastAPI", "AWS", "Docker", "Kubernetes",
      ]}
      whyUsPoints={[
        "Deep discovery process — we spend time understanding your business before writing a line of code.",
        "Agile methodology: iterative sprints, working software every 2 weeks.",
        "Full ownership: you get the complete source code and IP at delivery.",
        "Security-first: data protection, role-based access, and compliance built in.",
        "Flexible engagement models: fixed-price, T&M, or dedicated team.",
        "Trusted by businesses across logistics, healthcare, fintech, and e-commerce.",
      ]}
    />
  );
}

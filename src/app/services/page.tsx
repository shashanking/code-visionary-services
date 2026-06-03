import type { Metadata } from 'next';
import Link from 'next/link';
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

const SERVICE_PAGES = [
  { label: 'UI/UX Design', href: '/services/ui-ux-design', icon: '🎨', desc: 'User-centered interfaces & seamless experiences' },
  { label: 'Web Development', href: '/services/web-development', icon: '🖥️', desc: 'Fast, responsive & scalable websites' },
  { label: 'Application Development', href: '/services/application-development', icon: '📱', desc: 'Mobile & web apps for every platform' },
  { label: 'Artificial Intelligence', href: '/services/artificial-intelligence', icon: '🤖', desc: 'AI automation & intelligent business systems' },
  { label: 'Enterprise Solutions', href: '/services/enterprise-solutions', icon: '⚙️', desc: 'Custom software for complex business needs' },
  { label: 'Branding', href: '/services/branding', icon: '✨', desc: 'Memorable brand identity & visual systems' },
  { label: 'Performance Marketing', href: '/services/performance-marketing', icon: '📈', desc: 'Data-driven ads with measurable ROAS' },
  { label: 'Digital Funnel', href: '/services/digital-funnel', icon: '🚀', desc: 'Conversion funnels that turn leads into customers' },
  { label: 'Web 3.0', href: '/services/web-3-0', icon: '🔗', desc: 'Blockchain-powered decentralized web experiences' },
];

export default function ServicePage() {
  return (
    <div>
      <HeroServicePage />

      {/* Dedicated Service Pages Quick-Links */}
      <section className="bg-[#161616] py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
          <div className="text-center mb-10">
            <p className="text-xs text-white/30 uppercase tracking-[0.3em] mb-3">Explore In Depth</p>
            <h2 className="font-heading font-bold text-title-lg uppercase text-white leading-[1.1]">
              Dedicated{' '}
              <span className="bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent">
                Service
              </span>{' '}
              Pages
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_PAGES.map((sp) => (
              <Link
                key={sp.href}
                href={sp.href}
                className="group flex items-start gap-4 p-5 rounded-xl border border-white/10
                  hover:border-[#B5442C]/60 hover:bg-[#B5442C]/8 transition-all duration-300"
              >
                <span className="text-2xl mt-0.5">{sp.icon}</span>
                <div>
                  <p className="font-sans font-semibold text-white group-hover:text-[#FF9C87] transition-colors duration-200 text-sm md:text-base">
                    {sp.label}
                  </p>
                  <p className="font-sans text-white/40 text-xs mt-1">{sp.desc}</p>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-[#B5442C] transition-colors duration-200 text-lg">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCardSection />
    </div>
  );
}

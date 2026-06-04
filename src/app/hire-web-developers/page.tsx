import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = 'https://codevisionaryservices.com';

export const metadata: Metadata = {
  title: 'Hire Web Developers On Demand | Staffing as a Service | Code Visionary Services',
  description: 'Scale your brand, not your headcount. Hire expert web developers, designers, and engineers on demand. Flexible staffing solutions for startups and growing businesses.',
  alternates: { canonical: `${SITE_URL}/hire-web-developers` },
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
    title: 'Hire Web Developers On Demand | Staffing as a Service | Code Visionary Services',
    description: 'Scale your brand, not your headcount. Hire expert web developers, designers, and engineers on demand.',
    url: `${SITE_URL}/hire-web-developers`,
    images: [`${SITE_URL}/og-image.png`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Web Developers On Demand | Code Visionary Services',
    description: 'Scale your brand, not your headcount. Hire expert web developers, designers, and engineers on demand.',
    images: [`${SITE_URL}/og-image.png`],
  },
};

const ROLES = [
  { icon: '🖥️', title: 'Frontend Developers', desc: 'React, Vue.js, Angular, TypeScript, Tailwind CSS' },
  { icon: '⚙️', title: 'Backend Developers', desc: 'Node.js (Express), Python (Django/FastAPI), Go, Rust' },
  { icon: '🗄️', title: 'Database Engineers', desc: 'PostgreSQL, MongoDB, Redis, Pinecone (AI vector search)' },
  { icon: '🔗', title: 'API Specialists', desc: 'GraphQL, REST, Webhooks, microservices architecture' },
  { icon: '📱', title: 'Mobile Developers', desc: 'React Native, Flutter — fast D2C deployment' },
  { icon: '🤖', title: 'AI/ML Engineers', desc: 'Python, TensorFlow, LangChain, OpenAI integration' },
  { icon: '🎨', title: 'UI/UX Designers', desc: 'Figma, Adobe XD, Framer — pixel-perfect prototypes' },
  { icon: '☁️', title: 'DevOps Engineers', desc: 'AWS, Docker, Kubernetes, CI/CD pipelines' },
];

const WHY_US = [
  { icon: '⚡', title: 'Hire in 48 Hours', desc: 'We match you with vetted talent in under 2 days — no long recruitment cycles.' },
  { icon: '✅', title: 'Pre-Vetted Experts', desc: 'Every developer goes through a rigorous technical and communication assessment.' },
  { icon: '🔄', title: 'Scale Up or Down', desc: 'Add team members when you grow, reduce when you don\'t. Full flexibility.' },
  { icon: '💬', title: 'Direct Communication', desc: 'Your developers work in your timezone, your tools, your workflow.' },
  { icon: '🛡️', title: 'Zero Risk Trial', desc: '2-week trial period — if you\'re not satisfied, you don\'t pay.' },
  { icon: '💰', title: 'Cost Effective', desc: 'Up to 60% savings compared to hiring in-house or using Western agencies.' },
];

const PROCESS = [
  { number: '01', title: 'Tell Us What You Need', desc: 'Share your tech stack, project scope, and timeline. Takes 10 minutes.' },
  { number: '02', title: 'Meet Your Candidates', desc: 'We shortlist 2–3 pre-vetted developers within 48 hours for you to interview.' },
  { number: '03', title: 'Start the Trial', desc: '2-week paid trial. Verify quality before committing to a longer engagement.' },
  { number: '04', title: 'Scale Your Team', desc: 'Onboard your developer into your workflow. Add more as your needs grow.' },
];

const FAQS = [
  {
    question: 'How quickly can I hire a developer?',
    answer: 'We typically present 2–3 vetted candidates within 48 hours of your requirements brief. The full onboarding process — interview, trial start — takes 3–5 business days.',
  },
  {
    question: 'What engagement models do you offer?',
    answer: 'We offer full-time dedicated developers (160 hrs/month), part-time (80 hrs/month), and project-based contracts. All models include a 2-week trial period.',
  },
  {
    question: 'Who manages the developer — you or me?',
    answer: 'You do. The developer reports directly to you, uses your tools, and follows your processes. We handle HR, payroll, and benefits so you get the control of an employee without the administrative overhead.',
  },
  {
    question: 'What if the developer isn\'t the right fit?',
    answer: 'We replace them at no additional cost. Our 2-week trial is specifically designed to validate fit before the full engagement begins.',
  },
  {
    question: 'Do your developers speak English fluently?',
    answer: 'Yes. All candidates are assessed for English communication as part of our vetting process. We only present developers with strong professional communication skills.',
  },
];

export default function HireWebDevelopersPage() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen">

      {/* Hero */}
      <section className="pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-xs text-white/30 uppercase tracking-[0.3em] mb-4">Staffing as a Service</p>
          <h1 className="font-heading font-bold text-4xl md:text-6xl uppercase leading-[1.05] mb-6">
            Hire Expert{' '}
            <span className="bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent">
              Web Developers
            </span>{' '}
            On Demand
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
            Scale your brand, not your headcount. Get pre-vetted developers, designers, and engineers integrated into your team — in 48 hours, not 48 days.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#B5442C] to-[#FF6B4A] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 text-sm md:text-base"
            >
              Hire a Developer →
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white/70 rounded-lg hover:border-white/40 hover:text-white transition-all duration-200 text-sm md:text-base"
            >
              View All Services
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: '200+', label: 'Developers Placed' },
            { value: '48hrs', label: 'Avg Time to Hire' },
            { value: '60%', label: 'Cost Savings vs In-House' },
            { value: '98%', label: 'Client Retention Rate' },
          ].map((stat) => (
            <div key={stat.label} className="border border-white/10 rounded-xl p-5">
              <p className="font-heading font-bold text-3xl md:text-4xl text-white mb-1">{stat.value}</p>
              <p className="text-white/40 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roles We Staff */}
      <section className="py-20 px-4 md:px-8 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-white/30 uppercase tracking-[0.3em] mb-3">Roles We Staff</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase text-white">
              Every Tech Role,{' '}
              <span className="bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent">
                Covered
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ROLES.map((role) => (
              <div
                key={role.title}
                className="p-5 rounded-xl border border-white/10 hover:border-[#B5442C]/40 transition-all duration-300"
              >
                <span className="text-3xl mb-3 block">{role.icon}</span>
                <h3 className="font-semibold text-white text-base mb-2">{role.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-white/30 uppercase tracking-[0.3em] mb-3">Why CVS Staffing</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase text-white">
              The Smarter Way to{' '}
              <span className="bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent">
                Grow Your Team
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_US.map((item) => (
              <div key={item.title} className="p-6 rounded-xl border border-white/10 hover:border-[#B5442C]/30 transition-all duration-300">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="font-semibold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 md:px-8 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-white/30 uppercase tracking-[0.3em] mb-3">How It Works</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase text-white">
              From Brief to{' '}
              <span className="bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent">
                Onboarded
              </span>{' '}
              in Days
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((step) => (
              <div key={step.number} className="relative p-6 rounded-xl border border-white/10">
                <p className="font-heading font-bold text-5xl text-white/10 mb-3">{step.number}</p>
                <h3 className="font-semibold text-white text-base mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs text-white/30 uppercase tracking-[0.3em] mb-3">FAQ</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase text-white">
              Common{' '}
              <span className="bg-gradient-to-r from-[#B5442C] to-[#FF9C87] bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq) => (
              <div key={faq.question} className="p-6 rounded-xl border border-white/10">
                <h3 className="font-semibold text-white text-base mb-3">{faq.question}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-[#B5442C]/20 to-[#B5442C]/5 border-t border-[#B5442C]/20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl uppercase text-white mb-4">
            Ready to Hire Your First Developer?
          </h2>
          <p className="text-white/50 text-base mb-8">
            Tell us what you need and we'll have candidates in your inbox within 48 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#B5442C] to-[#FF6B4A] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200 text-base"
          >
            Get Started Today →
          </Link>
        </div>
      </section>

    </div>
  );
}

import React from 'react'
import SectionContainer from '../shared/SectionContainer'
import ContentContainer from '../shared/ContentContainer'

const REASONS = [
  { icon: "🎯", title: "Business-First Thinking",    desc: "We understand your goals and build software that solves real problems, not just code that passes tests." },
  { icon: "⚡", title: "Fast, Iterative Delivery",   desc: "Agile sprints with working software every 2 weeks. You always know what's being built and why." },
  { icon: "🔐", title: "Security by Default",        desc: "Data protection, role-based access, and compliance baked into every build from day one." },
  { icon: "📦", title: "100% Code Ownership",        desc: "You own the source code and IP at delivery. No vendor lock-in, no hidden strings, no surprises." },
  { icon: "🌍", title: "Global Quality, India Rates", desc: "Silicon Valley standards at competitive Indian pricing — serving clients in the US, UK, and Gulf." },
  { icon: "🤝", title: "Long-Term Partnership",      desc: "We build relationships, not just software. Most clients stay with us across multiple product cycles." },
]

export default function ServiceWhyUs() {
  return (
    <SectionContainer background="#e3e3e3" padding="lg">
      <ContentContainer maxWidth="7xl" paddingX="lg">

        <div className="text-center mb-14">
          <h2 className="font-heading font-bold text-title-lg uppercase text-[#161616] leading-[1.1] mb-4">
            Why Choose Code Visionary Services
          </h2>
          <p className="font-sans text-body1 text-[#666] max-w-2xl mx-auto">
            We combine technical depth with business thinking to deliver software that actually moves the needle.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REASONS.map((r, i) => (
            <div key={i} className="rounded-2xl p-7 bg-white border border-[#B5442C]/10
              hover:border-[#B5442C]/40 hover:shadow-[0px_0px_20px_#B5442C15]
              transition-all duration-300 group">
              <span className="text-4xl mb-5 block">{r.icon}</span>
              <h3 className="font-sans font-semibold text-title-sm text-[#161616] group-hover:text-[#B5442C]
                transition-colors duration-300 mb-2">{r.title}</h3>
              <p className="font-sans text-body2 text-[#666] leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

      </ContentContainer>
    </SectionContainer>
  )
}

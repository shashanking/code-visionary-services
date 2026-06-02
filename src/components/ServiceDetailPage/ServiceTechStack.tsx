import React from 'react'
import SectionContainer from '../shared/SectionContainer'
import ContentContainer from '../shared/ContentContainer'

interface ServiceTechStackProps {
  tools: string[]
  title?: string
}

export default function ServiceTechStack({ tools, title }: ServiceTechStackProps) {
  return (
    <SectionContainer background="#ffffff" padding="lg">
      <ContentContainer maxWidth="7xl" paddingX="lg" className="text-center">

        <h2 className="font-heading font-bold text-title-lg uppercase text-[#161616] leading-[1.1] mb-4">
          {title || "Technologies We Use"}
        </h2>
        <p className="font-sans text-body1 text-[#666] max-w-xl mx-auto mb-12">
          Modern, battle-tested technologies chosen for reliability, scalability, and performance.
        </p>

        {tools && tools.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tech, i) => (
              <span key={i} className="px-5 py-2.5 rounded-full bg-white border border-[#B5442C]/20
                text-[#333] font-sans font-medium
                hover:border-[#B5442C] hover:text-[#B5442C] hover:bg-[#B5442C]/5
                transition-all duration-200 cursor-default text-sm md:text-base">
                {tech}
              </span>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-10 w-24 rounded-full bg-gray-200 animate-pulse" />
            ))}
          </div>
        )}

      </ContentContainer>
    </SectionContainer>
  )
}

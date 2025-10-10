interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "What services do you offer?",
    answer:
      "We design and build high‑performing websites and web/mobile applications. Our team also supports branding, UI/UX, and growth services like SEO and analytics—so you get a complete product from strategy to launch.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Most websites launch in 4–8 weeks, depending on scope and content readiness. Web apps vary more widely—smaller MVPs can ship in 6–10 weeks while larger builds may run multiple phases. We’ll share a detailed timeline after discovery.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We scope fixed‑price packages for clearly defined deliverables and use milestone‑based billing for complex builds. After a quick call we’ll recommend the best approach and provide a transparent estimate with options.",
  },
  {
    question: "Do you provide post‑launch support?",
    answer:
      "Yes. We offer ongoing support and optimization plans that include maintenance, security updates, performance tuning, and feature iterations based on real user feedback.",
  },
];

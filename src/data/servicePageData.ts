export interface ServiceHeroData {
  heading: string;
  description: string;
  stats?: Array<{ value: string; label: string }>;
}

export interface ServiceOverviewData {
  title: string;
  body: string[];
  bullets: string[];
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceFeaturesData {
  title: string;
  subtitle: string;
  features: Feature[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceProcessData {
  steps: ProcessStep[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceFAQData {
  faqs: FAQ[];
}

export interface ServicePageMetadata {
  title: string;
  description: string;
  canonical: string;
}

export interface ServicePageConfig {
  hero: ServiceHeroData;
  overview: ServiceOverviewData;
  features: ServiceFeaturesData;
  process: ServiceProcessData;
  techStack: string[];
  faq: ServiceFAQData;
  ctaBannerName: string;
  metadata: ServicePageMetadata;
}

const SITE = 'https://codevisionaryservices.com';

export const servicePageData: Record<string, ServicePageConfig> = {

  'web-app-development': {
    metadata: {
      title: 'Web App Development Company in India | Code Visionary Services',
      description: 'Expert web app development company building fast, scalable, and secure web applications. From dashboards to SaaS platforms — end-to-end delivery.',
      canonical: `${SITE}/services/web-app-development`,
    },
    hero: {
      heading: 'WEB APP|DEVELOPMENT|COMPANY',
      description: 'We build powerful, scalable web applications that perform under pressure — from idea to launch, with your users at the centre of every decision.',
      stats: [
        { value: '50+', label: 'Web Apps Shipped' },
        { value: '6+', label: 'Years Active' },
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '24/7', label: 'Support' },
      ],
    },
    overview: {
      title: 'Full-Stack Web Application Development',
      body: [
        'Code Visionary Services is a full-service web app development company in India, delivering high-performance web applications for startups and growing businesses. Our full-stack engineering team takes complete ownership — from UI design and frontend architecture to backend APIs and cloud deployment.',
        'Whether you need a consumer-facing SaaS product, an internal business tool, or a complex data-driven dashboard, we architect every solution for scale, security, and long-term maintainability. We use modern frameworks and follow industry best practices so your web app stays fast and reliable as your user base grows.',
        'Every project starts with a discovery phase where we understand your users, map out workflows, and define measurable success criteria. Then we build iteratively, delivering working software in sprints so you always have visibility into progress.',
      ],
      bullets: [
        'Server-side rendered and statically generated pages for peak SEO performance',
        'Real-time features: live dashboards, notifications, and collaborative tools',
        'Multi-tenant SaaS architecture with role-based access control',
        'Third-party API integration: payments, CRMs, analytics, and more',
        'Progressive Web App (PWA) support — installable, offline-capable',
        'CI/CD pipelines and automated testing from day one',
      ],
    },
    features: {
      title: 'What We Build',
      subtitle: 'From internal tools to market-facing SaaS — we handle every category of web application.',
      features: [
        { icon: '🖥️', title: 'SaaS Platforms', description: 'Multi-tenant SaaS products with subscription billing, usage analytics, and admin dashboards built to scale.' },
        { icon: '📊', title: 'Admin Dashboards', description: 'Data-rich control panels with real-time charts, table filters, role-based views, and export functionality.' },
        { icon: '🛒', title: 'E-Commerce Web Apps', description: 'Custom storefronts with inventory management, payment gateway integration, and logistics APIs.' },
        { icon: '⚡', title: 'Progressive Web Apps', description: 'Offline-capable, installable web apps that deliver a native-like experience on any device or OS.' },
        { icon: '🔄', title: 'Real-Time Applications', description: 'Chat, collaboration, and live-data apps powered by WebSockets and event-driven architecture.' },
        { icon: '🔗', title: 'API & Integration Layers', description: 'Connect your existing tools and data sources with custom REST and GraphQL APIs.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Discovery', description: 'We map your users, workflows, and business goals before writing a single line of code.' },
        { number: '02', title: 'Design', description: 'Wireframes, prototypes, and UI components aligned to your brand and user experience goals.' },
        { number: '03', title: 'Build', description: 'Iterative sprints with working software delivered every two weeks for your review.' },
        { number: '04', title: 'Launch', description: 'Deployment, monitoring setup, performance tuning, and post-launch support included.' },
      ],
    },
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Tailwind CSS', 'AWS', 'Vercel', 'Docker', 'GraphQL', 'Supabase'],
    faq: {
      faqs: [
        { question: 'How long does it take to build a web application?', answer: 'A focused MVP typically takes 6–10 weeks. Larger SaaS platforms with complex features can take 3–6 months. We provide detailed timelines during the discovery phase so you always know what to expect.' },
        { question: 'Do you handle both frontend and backend development?', answer: 'Yes — we are a full-stack web app development company. One team owns the entire product: frontend, backend, database architecture, and cloud infrastructure. This means fewer handoff delays and tighter coordination.' },
        { question: 'Will my web app be SEO-friendly?', answer: 'Absolutely. We build with Next.js which supports server-side rendering and static generation by default — both essential for search engine indexing. We also configure structured data, canonical URLs, and Core Web Vitals from the start.' },
        { question: 'Who owns the code after the project?', answer: 'You do. 100%. All source code, documentation, and assets are transferred to you at project completion. There is no lock-in or ongoing licensing fee for the code we write.' },
        { question: 'Can you take over a web app that another team built?', answer: 'Yes. We have experience inheriting legacy codebases, auditing them for quality and security issues, and either modernising the existing code or migrating to a better architecture depending on the situation.' },
      ],
    },
    ctaBannerName: 'Web Application',
  },

  'mobile-app-development': {
    metadata: {
      title: 'Mobile App Development Company in India | Code Visionary Services',
      description: 'Top-rated mobile app development company offering iOS, Android, and cross-platform app development. Build your dream app with Code Visionary Services.',
      canonical: `${SITE}/services/mobile-app-development`,
    },
    hero: {
      heading: 'MOBILE APP|DEVELOPMENT|COMPANY',
      description: 'From first concept to App Store launch — we build iOS, Android, and cross-platform mobile apps that users love and businesses rely on.',
      stats: [
        { value: '40+', label: 'Apps Launched' },
        { value: '2', label: 'Platforms Covered' },
        { value: '4.8★', label: 'Avg App Rating' },
        { value: '6wk', label: 'MVP Delivery' },
      ],
    },
    overview: {
      title: 'End-to-End Mobile App Development',
      body: [
        'Code Visionary Services is a mobile app development company in India with a proven track record of delivering polished, scalable apps across industries — retail, healthcare, logistics, fintech, and more. Our mobile engineering team covers the full spectrum: native iOS and Android, and cross-platform solutions using React Native and Flutter.',
        'We follow a human-centred design approach: every app starts with user research and low-fidelity prototypes before a single component is coded. This means fewer expensive pivots and a final product that actually resonates with your audience.',
        'Beyond the build, we help you navigate App Store and Google Play submission, ASO keyword optimisation, and post-launch analytics setup so your app hits the ground running.',
      ],
      bullets: [
        'Native iOS (Swift/SwiftUI) and Android (Kotlin/Jetpack Compose) development',
        'Cross-platform React Native and Flutter for shared-codebase efficiency',
        'App Store and Google Play submission, review, and launch management',
        'Push notifications, in-app purchases, and analytics integration',
        'Offline-first architecture for reliable performance in low-connectivity areas',
        'Accessibility (WCAG) compliance built into the design system',
      ],
    },
    features: {
      title: 'Mobile App Services',
      subtitle: 'Every platform, every use case — we have the expertise to deliver.',
      features: [
        { icon: '🍎', title: 'iOS App Development', description: 'Native Swift and SwiftUI apps built for iPhone and iPad with App Store optimisation and TestFlight delivery.' },
        { icon: '🤖', title: 'Android App Development', description: 'Kotlin-first Android apps using Jetpack Compose, optimised for the full range of Android device types.' },
        { icon: '🔀', title: 'Cross-Platform Apps', description: 'React Native and Flutter apps that share one codebase while delivering a near-native user experience.' },
        { icon: '🚀', title: 'MVP Development', description: 'A focused minimum viable product to validate your idea with real users before committing to full scale.' },
        { icon: '🔄', title: 'App Redesign & Migration', description: 'Modernise legacy apps or migrate from one platform to another without losing existing functionality.' },
        { icon: '📱', title: 'App Store Optimisation', description: 'Keyword-rich listings, optimised screenshots, and A/B testing to maximise organic downloads.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Research', description: 'User personas, competitor analysis, and platform strategy defined before design begins.' },
        { number: '02', title: 'Prototype', description: 'Interactive wireframes reviewed and validated with real users before development starts.' },
        { number: '03', title: 'Develop', description: 'Iterative builds with bi-weekly TestFlight/beta releases for continuous feedback.' },
        { number: '04', title: 'Ship', description: 'Store submission, launch day support, and 30-day post-launch monitoring included.' },
      ],
    },
    techStack: ['React Native', 'Flutter', 'Swift', 'SwiftUI', 'Kotlin', 'Jetpack Compose', 'Expo', 'Firebase', 'Node.js', 'AWS', 'App Store Connect', 'Google Play Console'],
    faq: {
      faqs: [
        { question: 'Should I build a native or cross-platform app?', answer: 'It depends on your budget, timeline, and feature requirements. Native apps (Swift for iOS, Kotlin for Android) give the best performance and platform integration. Cross-platform (React Native or Flutter) cuts cost and time by sharing a single codebase. We recommend native for apps with complex hardware integrations and cross-platform for most standard business apps.' },
        { question: 'How much does mobile app development cost?', answer: 'A focused MVP app typically starts at ₹3–8 lakhs depending on complexity. We provide a detailed, itemised estimate after the discovery call so there are no surprises.' },
        { question: 'How long does app submission take?', answer: 'Apple App Store review typically takes 1–3 days. Google Play is usually 1–7 days. We prepare all required assets, metadata, and compliance documentation so your submission goes through first time.' },
        { question: 'Do you provide post-launch support?', answer: 'Yes. Every engagement includes 30 days of post-launch support at no extra cost. After that, we offer monthly maintenance retainers covering OS update compatibility, bug fixes, and minor feature additions.' },
        { question: 'Can you add new features to my existing app?', answer: 'Absolutely. We regularly take on feature extension and modernisation work for existing apps. We start with a code audit to understand the current architecture before committing to a scope.' },
      ],
    },
    ctaBannerName: 'Mobile App',
  },

  'android-app-development': {
    metadata: {
      title: 'Android App Development Company in India | Code Visionary Services',
      description: 'Leading Android app development company building high-performance native Android apps. Kotlin, Jetpack Compose, Firebase — delivered on time.',
      canonical: `${SITE}/services/android-app-development`,
    },
    hero: {
      heading: 'ANDROID APP|DEVELOPMENT|COMPANY',
      description: 'Native Android apps built with Kotlin and Jetpack Compose — fast, reliable, and optimised for every device in the ecosystem.',
      stats: [
        { value: '25+', label: 'Android Apps' },
        { value: '4.7★', label: 'Play Store Rating' },
        { value: 'Kotlin', label: 'First Language' },
        { value: '30+', label: 'Devices Tested' },
      ],
    },
    overview: {
      title: 'Native Android App Development',
      body: [
        'As a dedicated Android app development company in India, Code Visionary Services builds native Android applications that perform flawlessly across the full Android device ecosystem — from flagship phones to budget devices. We use Kotlin as our primary language and Jetpack Compose for modern, declarative UI.',
        'Our Android engineers follow Google\'s Material Design guidelines and Android architecture best practices (MVVM, Clean Architecture, Hilt DI) to build apps that are maintainable, testable, and ready to scale.',
        'We handle everything from initial wireframing and UX design to Google Play submission and post-launch monitoring. Our clients range from early-stage startups shipping their first consumer app to enterprises extending their product to Android.',
      ],
      bullets: [
        'Modern Kotlin codebase with Jetpack Compose UI',
        'MVVM + Clean Architecture for maintainability',
        'Offline-first with Room database and WorkManager',
        'Firebase integration: analytics, crash reporting, push notifications',
        'Google Play submission and ASO support',
        'Device testing across 30+ physical and virtual devices',
      ],
    },
    features: {
      title: 'Android Development Capabilities',
      subtitle: 'Native Android expertise across every layer of the stack.',
      features: [
        { icon: '🤖', title: 'Native Kotlin Development', description: 'Modern Android apps built with Kotlin and Jetpack Compose — performant, concise, and maintainable.' },
        { icon: '🎨', title: 'Material Design UI', description: 'Pixel-perfect interfaces following Google\'s Material Design 3 guidelines for a familiar, polished experience.' },
        { icon: '🔗', title: 'API & Firebase Integration', description: 'Seamless integration with REST APIs, GraphQL, Firebase services, and third-party SDKs.' },
        { icon: '📦', title: 'Play Store Publishing', description: 'End-to-end submission support including store listing optimisation, screenshots, and review management.' },
        { icon: '🧪', title: 'Device & QA Testing', description: 'Rigorous testing across screen sizes, OS versions (API 24+), and real-world usage scenarios.' },
        { icon: '🔧', title: 'Maintenance & Updates', description: 'Ongoing support for Android OS updates, security patches, and feature additions.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Define', description: 'User stories, feature scope, and Android-specific UX patterns agreed upfront.' },
        { number: '02', title: 'Design', description: 'Figma prototypes reviewed across multiple screen sizes before coding begins.' },
        { number: '03', title: 'Build', description: 'Two-week sprints with APK builds shared for testing after each iteration.' },
        { number: '04', title: 'Ship', description: 'Google Play submission, release track management, and launch day support.' },
      ],
    },
    techStack: ['Kotlin', 'Jetpack Compose', 'Android Studio', 'Firebase', 'Retrofit', 'Room DB', 'Hilt', 'Coroutines', 'WorkManager', 'Google Play', 'Figma'],
    faq: {
      faqs: [
        { question: 'Do you build Android-only or also iOS?', answer: 'We specialise in Android native development but also offer iOS and cross-platform (React Native, Flutter) development. Many clients start with Android and we help them expand to iOS at a later stage.' },
        { question: 'Which Android versions do you support?', answer: 'We target Android API 24 (Android 7.0) and above, which covers 97%+ of active Android devices worldwide. We can adjust the minimum SDK based on your specific audience requirements.' },
        { question: 'How do you handle device fragmentation?', answer: 'We use a responsive layout system that adapts to different screen densities and sizes. QA is conducted on a matrix of physical and virtual devices representing the most common screen sizes and OS versions in your target market.' },
        { question: 'Can you integrate with our existing backend?', answer: 'Yes. We integrate with any backend that exposes REST or GraphQL APIs. If you need a backend alongside the app, we can build that too — we are a full-stack team.' },
        { question: 'What is the timeline for a standard Android app?', answer: 'A focused Android MVP typically takes 8–12 weeks. More complex apps with multiple user roles, offline sync, or hardware integrations take 4–6 months. We break this into sprints with clear milestones.' },
      ],
    },
    ctaBannerName: 'Android App',
  },

  'custom-software-development': {
    metadata: {
      title: 'Custom Software Development Company | Code Visionary Services',
      description: 'Leading custom software development company building tailor-made solutions for startups and enterprises. Automate workflows, replace legacy systems, build proprietary tools.',
      canonical: `${SITE}/services/custom-software-development`,
    },
    hero: {
      heading: 'CUSTOM SOFTWARE|DEVELOPMENT|COMPANY',
      description: 'Off-the-shelf software was not built for your business. We build custom software that fits your exact processes, users, and growth trajectory.',
      stats: [
        { value: '30+', label: 'Custom Systems' },
        { value: '60%', label: 'Avg Cost Saved vs SaaS' },
        { value: '100%', label: 'IP Ownership' },
        { value: '2wk', label: 'Sprint Cycle' },
      ],
    },
    overview: {
      title: 'Bespoke Software Built Around Your Business',
      body: [
        'Code Visionary Services is a custom software development company that helps businesses stop working around their tools and start working with software designed specifically for how they operate. Whether you are replacing a legacy system, automating a manual workflow, or building a proprietary internal platform, we deliver solutions without compromise.',
        'Our discovery process is thorough — before we write a line of code, we spend time with your team understanding your operations, data flows, and pain points. This investment in clarity means fewer revisions, faster delivery, and software that actually gets used.',
        'We follow agile methodology with two-week sprints, giving you working software early and often. Every engagement includes full source code handover, documentation, and a knowledge transfer session so your team can maintain and extend the system confidently.',
      ],
      bullets: [
        'Deep discovery workshops before development begins',
        'Agile sprints with working software delivered every two weeks',
        'Full source code and IP ownership at project completion',
        'Security-first: data protection and role-based access built in',
        'Cloud-native architecture for scalability and reliability',
        'Documentation and team knowledge transfer included',
      ],
    },
    features: {
      title: 'Custom Software We Build',
      subtitle: 'Every system is designed from first principles around your specific business needs.',
      features: [
        { icon: '⚙️', title: 'Business Process Automation', description: 'Replace manual, error-prone workflows with automated systems that save time and reduce operational costs.' },
        { icon: '📊', title: 'ERP & CRM Systems', description: 'Custom enterprise resource planning and CRM tools designed around your actual business model — not someone else\'s.' },
        { icon: '🏗️', title: 'SaaS Product Development', description: 'Multi-tenant SaaS platforms with subscription management, usage metering, and white-label options.' },
        { icon: '🔄', title: 'Legacy System Modernisation', description: 'Migrate outdated software to modern stacks without disrupting ongoing business operations.' },
        { icon: '🔗', title: 'API Development & Integration', description: 'Custom APIs and middleware to unify your data sources, tools, and third-party services.' },
        { icon: '☁️', title: 'Cloud-Native Applications', description: 'Software built for cloud deployment from day one — scalable, containerised, and CI/CD-ready.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Discovery', description: 'Workshops to map your processes, data, users, and success criteria before any code is written.' },
        { number: '02', title: 'Architecture', description: 'System design, tech stack selection, and data modelling reviewed and approved by your team.' },
        { number: '03', title: 'Build', description: 'Iterative sprints with demos every two weeks — no black-box development.' },
        { number: '04', title: 'Handover', description: 'Deployment, documentation, team training, and a 30-day post-launch support window.' },
      ],
    },
    techStack: ['Python', 'Node.js', 'React', 'Next.js', 'PostgreSQL', 'MongoDB', 'Django', 'FastAPI', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
    faq: {
      faqs: [
        { question: 'How is custom software development different from buying a SaaS tool?', answer: 'SaaS tools are built for a broad market. Custom software is built for your specific processes, users, and data. This means no workarounds, no paying for features you do not use, and software that becomes a genuine competitive advantage rather than a commodity tool.' },
        { question: 'What if my requirements change during development?', answer: 'Change is expected and our agile process accommodates it. Scope changes are discussed at each sprint boundary, prioritised against remaining capacity, and agreed in writing before implementation. We keep a prioritised backlog so you always control what gets built next.' },
        { question: 'How do you protect our business data during development?', answer: 'We sign NDAs before any discovery work begins. All development environments use sanitised data. Production access is restricted, logged, and follows the principle of least privilege. We can also work within your existing infrastructure if data sovereignty is a concern.' },
        { question: 'Do you offer fixed-price or time-and-materials contracts?', answer: 'Both. Fixed-price works well for well-defined scopes. Time-and-materials is better for exploratory or evolving projects. We always provide a detailed estimate and are transparent about assumptions. Whichever model you choose, you will never be surprised by a bill.' },
        { question: 'Can you build the software and train our team to maintain it?', answer: 'Yes — and we recommend it. Knowledge transfer is built into every project: we provide technical documentation, conduct a handover session with your team, and offer an optional post-launch retainer where we are available for questions as your team gets comfortable with the system.' },
      ],
    },
    ctaBannerName: 'Custom Software',
  },

  'software-development': {
    metadata: {
      title: 'Software Development Company in India | Code Visionary Services',
      description: 'Top software development company in India delivering end-to-end software development services. Web, mobile, cloud, and enterprise solutions for global clients.',
      canonical: `${SITE}/services/software-development`,
    },
    hero: {
      heading: 'SOFTWARE|DEVELOPMENT|COMPANY IN INDIA',
      description: 'End-to-end software development services from discovery and design to deployment and long-term support — one team, total ownership.',
      stats: [
        { value: '100+', label: 'Projects Delivered' },
        { value: '6+', label: 'Years Experience' },
        { value: '3', label: 'Continents Served' },
        { value: '98%', label: 'Client Retention' },
      ],
    },
    overview: {
      title: 'Full Lifecycle Software Development Services',
      body: [
        'Code Visionary Services is a full-lifecycle software development company in India, trusted by startups and enterprises across the US, UK, Gulf, and Southeast Asia. Our software development services cover every stage of the product lifecycle — from ideation and architecture to development, QA, deployment, and post-launch support.',
        'We offer the combination that global clients value most: Silicon Valley engineering standards at competitive Indian pricing, with time-zone overlap that makes collaboration genuinely smooth. Our team of software engineers, designers, and product managers work as a cohesive unit — not a collection of freelancers stitched together.',
        'Whether you need a dedicated development team, a project-based engagement, or ongoing software maintenance, we structure our services around your needs and your budget — not the other way around.',
      ],
      bullets: [
        'Rated among the top software development companies in India for client satisfaction',
        'Dedicated project manager for every engagement from day one',
        'Time-zone friendly: overlap with US, UK, and Gulf business hours',
        'Transparent pricing — detailed estimates with no hidden costs',
        'Structured onboarding — teams are operational within one week',
        'No lock-in: all contracts include full source code handover',
      ],
    },
    features: {
      title: 'Software Development Services',
      subtitle: 'Everything from strategy and design to code and cloud — under one roof.',
      features: [
        { icon: '🗺️', title: 'Product Discovery & Planning', description: 'Structured workshops to define scope, architecture, and roadmap before a line of code is written.' },
        { icon: '💻', title: 'Full-Stack Development', description: 'End-to-end delivery across frontend, backend, databases, and cloud infrastructure by one unified team.' },
        { icon: '🧪', title: 'Quality Assurance & Testing', description: 'Manual and automated testing — unit, integration, and end-to-end — with coverage reports at every sprint.' },
        { icon: '☁️', title: 'DevOps & Cloud Deployment', description: 'CI/CD pipelines, containerisation, and hosting on AWS, GCP, or Azure with monitoring from day one.' },
        { icon: '👥', title: 'Dedicated Development Teams', description: 'A dedicated pod of engineers that works as an extension of your in-house team — embedded, not outsourced.' },
        { icon: '🔧', title: 'Software Maintenance', description: 'SLA-backed retainer plans covering bug fixes, dependency updates, security patches, and minor enhancements.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Onboarding', description: 'NDA, discovery call, team introduction, and tool access set up within 5 business days.' },
        { number: '02', title: 'Plan', description: 'Architecture review, sprint planning, and milestone roadmap agreed before development begins.' },
        { number: '03', title: 'Build', description: 'Iterative development with weekly standups, bi-weekly demos, and transparent progress tracking.' },
        { number: '04', title: 'Support', description: 'Post-launch monitoring, performance tuning, and ongoing maintenance to keep software healthy.' },
      ],
    },
    techStack: ['Python', 'Node.js', 'React', 'Next.js', 'Java', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'GitHub Actions'],
    faq: {
      faqs: [
        { question: 'Why hire a software development company in India?', answer: 'India offers a unique combination: a large pool of highly skilled software engineers, competitive pricing compared to Western markets, and proven delivery capability for global clients. Code Visionary Services specifically offers strong English communication, overlap with Western time zones, and a structured delivery process that matches what enterprise clients expect.' },
        { question: 'What engagement models do you offer?', answer: 'We offer three models: fixed-price project (clear scope, defined deliverable), time-and-materials (flexible scope, ongoing work), and dedicated team (you hire our engineers on a monthly retainer). We help you pick the right model based on your project type and budget.' },
        { question: 'How do you ensure quality across the software development lifecycle?', answer: 'Quality is built in at every stage — not bolted on at the end. We use code reviews, automated testing, branch protection policies, staging environments, and user acceptance testing before every release. QA is a dedicated function, not an afterthought.' },
        { question: 'Can you take over software development from another vendor?', answer: 'Yes. We have experience with vendor transitions — auditing existing code, assessing technical debt, stabilising the codebase, and then continuing development. We document our findings transparently so you understand what you are working with.' },
        { question: 'Do you sign NDAs?', answer: 'Yes, always. NDAs are signed before any discovery work begins, and all team members working on your project are covered under confidentiality agreements.' },
      ],
    },
    ctaBannerName: 'Software',
  },

  'app-development': {
    metadata: {
      title: 'App Development Company in India | Code Visionary Services',
      description: 'Trusted app development company offering custom app development for iOS, Android, and web. From concept to launch — Code Visionary Services delivers.',
      canonical: `${SITE}/services/app-development`,
    },
    hero: {
      heading: 'APP|DEVELOPMENT|COMPANY',
      description: 'Custom app development for mobile, web, and desktop. We turn your idea into a product your users will keep coming back to.',
      stats: [
        { value: '60+', label: 'Apps Delivered' },
        { value: '6wk', label: 'MVP Timeline' },
        { value: '3', label: 'Platforms Covered' },
        { value: '4.8★', label: 'Client Rating' },
      ],
    },
    overview: {
      title: 'Custom App Development from Concept to Launch',
      body: [
        'Code Visionary Services is a full-service app development company in India that specialises in building digital products from the ground up. Whether you need a mobile app for consumers, a web app for your operations team, or a multi-platform product that covers both, our app development services span every stage — strategy, design, build, test, and launch.',
        'We are not a factory. Every app we build starts with a genuine understanding of your users and business goals. We prototype, validate with real users, and iterate quickly so you are not committing engineering resources to assumptions.',
        'Our cross-functional team — engineers, designers, and a dedicated PM — works as a single unit throughout your engagement. You get one point of contact, clear communication, and a team that is genuinely invested in the success of your product.',
      ],
      bullets: [
        'iOS, Android, and cross-platform development under one roof',
        'User research and interactive prototyping before any coding',
        'MVP-first approach — launch fast, iterate based on real data',
        'End-to-end: design, develop, QA, deploy, and maintain',
        'App Store and Google Play submission and launch support',
        'Post-launch analytics, crash reporting, and performance monitoring',
      ],
    },
    features: {
      title: 'What We Build',
      subtitle: 'Consumer apps, enterprise tools, and everything in between.',
      features: [
        { icon: '📱', title: 'iOS App Development', description: 'Native Swift apps for iPhone and iPad with full App Store submission and TestFlight beta testing support.' },
        { icon: '🤖', title: 'Android App Development', description: 'Kotlin-powered native Android apps optimised for performance across the full Android device range.' },
        { icon: '🔀', title: 'Cross-Platform Apps', description: 'React Native and Flutter apps that run natively on iOS and Android from a single, maintainable codebase.' },
        { icon: '🌐', title: 'Web Applications', description: 'Full-stack web apps — dashboards, portals, SaaS tools — built with React, Next.js, and Node.js.' },
        { icon: '🎨', title: 'App UI/UX Design', description: 'User research, wireframes, interactive prototypes, and pixel-perfect design systems.' },
        { icon: '🚀', title: 'MVP Development', description: 'A lean, focused minimum viable product to test your idea with real users in 6–8 weeks.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Discover', description: 'User interviews, competitor analysis, and feature prioritisation to define what to build first.' },
        { number: '02', title: 'Prototype', description: 'Clickable Figma prototypes tested with target users before development begins.' },
        { number: '03', title: 'Build', description: 'Bi-weekly builds with TestFlight/beta releases so you see progress early and often.' },
        { number: '04', title: 'Launch', description: 'Store submission, performance baseline, and 30 days post-launch support included.' },
      ],
    },
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'React', 'Next.js', 'Node.js', 'Firebase', 'AWS', 'App Store', 'Google Play'],
    faq: {
      faqs: [
        { question: 'Should I build a mobile app or a web app first?', answer: 'It depends on your users and use case. Mobile apps excel for frequent, task-focused interactions and access to device features (camera, GPS, notifications). Web apps are faster to build and accessible without installation. We help you make this decision during the discovery phase based on your specific audience and goals.' },
        { question: 'How fast can you deliver an MVP app?', answer: 'A focused MVP — one primary user flow, core features only — typically takes 6–8 weeks. This assumes a clear product brief and timely feedback on our weekly builds. We have refined this process significantly over 60+ app deliveries.' },
        { question: 'Do you offer app design as well as development?', answer: 'Yes. We are a full-service app development company with in-house designers. Every project includes UX research, wireframing, prototyping, and full UI design. You do not need to come to us with finished designs — we handle the visual and interaction design from scratch.' },
        { question: 'What happens after the app launches?', answer: 'Every project includes 30 days of post-launch support at no extra cost. This covers bug fixes, crash resolution, and minor UX adjustments based on early user feedback. After that, we offer monthly maintenance retainers for ongoing updates and feature work.' },
        { question: 'Can you build both the app and the backend API?', answer: 'Yes — and we recommend it. Having one team own both the app and backend eliminates the coordination overhead and finger-pointing that happens when two vendors are involved. We build full-stack: mobile or web app, backend API, database, and cloud infrastructure.' },
      ],
    },
    ctaBannerName: 'App',
  },

};

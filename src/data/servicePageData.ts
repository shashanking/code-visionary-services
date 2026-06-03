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

  'ui-ux-design': {
    metadata: {
      title: 'UI/UX Design Services in India | Code Visionary Services',
      description: 'Craft visually stunning, user-centered interfaces for your digital product. Our UI/UX design services blend aesthetics with seamless functionality to drive user engagement.',
      canonical: `${SITE}/services/ui-ux-design`,
    },
    hero: {
      heading: 'UI/UX|DESIGN|SERVICES',
      description: 'We design digital experiences that users love — visually stunning, intuitively navigable, and built to convert at every touchpoint.',
      stats: [
        { value: '80+', label: 'Products Designed' },
        { value: '6+', label: 'Years Experience' },
        { value: '4.9★', label: 'Client Rating' },
        { value: '2wk', label: 'First Prototype' },
      ],
    },
    overview: {
      title: 'User-Centered Interface Design',
      body: [
        'Code Visionary Services delivers UI/UX design that puts your users first. We combine deep user research with modern visual design principles to create interfaces that are both beautiful and intuitive — across web, mobile, and enterprise platforms.',
        'Our design process starts with understanding your users\' goals and pain points, then moves through wireframing, prototyping, and high-fidelity UI — all validated with real users before a single line of code is written. This eliminates costly redesigns and ensures your product launches with confidence.',
        'Every design decision we make is grounded in data, usability best practices, and your brand identity. The result is a product that feels effortless to use and builds trust with every interaction.',
      ],
      bullets: [
        'User research, personas, and journey mapping to understand real behaviour',
        'Wireframes and interactive prototypes for rapid idea validation',
        'High-fidelity UI design aligned to your brand identity',
        'Responsive design that works perfectly across all screen sizes',
        'Design systems and component libraries for consistent, scalable UI',
        'Usability testing with real users before final handoff',
      ],
    },
    features: {
      title: 'What We Design',
      subtitle: 'From first sketch to pixel-perfect delivery — we cover every design need.',
      features: [
        { icon: '🖥️', title: 'Web App UI', description: 'Clean, intuitive dashboards and web application interfaces built for efficiency and delight.' },
        { icon: '📱', title: 'Mobile App UI', description: 'Native-feel mobile interfaces for iOS and Android that meet platform design guidelines.' },
        { icon: '🗺️', title: 'UX Research', description: 'User interviews, competitive audits, and journey mapping to ground every design in real insight.' },
        { icon: '⚡', title: 'Prototyping', description: 'Clickable prototypes in Figma that let you test your product before committing to development.' },
        { icon: '🎨', title: 'Design Systems', description: 'Scalable component libraries and design tokens that keep your UI consistent as you grow.' },
        { icon: '♿', title: 'Accessibility', description: 'WCAG-compliant design that ensures your product works for every user.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Discover', description: 'We learn about your users, business goals, and competitors through research and stakeholder interviews.' },
        { number: '02', title: 'Define', description: 'User personas, journey maps, and information architecture establish the design direction.' },
        { number: '03', title: 'Design', description: 'Wireframes evolve into high-fidelity, interactive prototypes ready for user testing.' },
        { number: '04', title: 'Deliver', description: 'Developer-ready Figma files with annotated specs, assets, and a full design system handoff.' },
      ],
    },
    techStack: ['Figma', 'Adobe XD', 'Framer', 'Maze', 'Hotjar', 'UserTesting', 'Canva', 'Principle', 'Lottie'],
    faq: {
      faqs: [
        { question: 'Do you offer UX research as part of the design service?', answer: 'Yes. Every project begins with a discovery phase that includes user research, competitive analysis, and journey mapping. This ensures our design decisions are rooted in real user behaviour rather than assumptions.' },
        { question: 'What design tools do you use?', answer: 'We primarily work in Figma for UI design and prototyping. For user testing we use Maze and Hotjar, and for motion design we use Framer and Lottie. All deliverables are handed off in developer-ready Figma files.' },
        { question: 'Can you redesign an existing product?', answer: 'Absolutely. Product redesigns are one of our most common engagements. We start with a UX audit of your current product, identify friction points, then redesign with measurable improvements in mind.' },
        { question: 'Will the designs be responsive for mobile?', answer: 'Yes — all our designs are created with responsive layouts for desktop, tablet, and mobile from the start. We design for mobile-first when the audience data supports it.' },
        { question: 'Do you work with the development team during build?', answer: 'Yes. We provide developer-ready specs, asset exports, and stay available for design QA throughout the development phase to ensure the final product matches the design exactly.' },
      ],
    },
    ctaBannerName: 'Design',
  },

  'web-development': {
    metadata: {
      title: 'Web Development Company in India | Code Visionary Services',
      description: 'Professional web development services delivering fast, responsive, and scalable websites. From landing pages to full-stack web platforms — built for performance and SEO.',
      canonical: `${SITE}/services/web-development`,
    },
    hero: {
      heading: 'WEB|DEVELOPMENT|SERVICES',
      description: 'We build fast, responsive, and scalable websites that drive business results — from marketing sites to complex full-stack web platforms.',
      stats: [
        { value: '100+', label: 'Websites Delivered' },
        { value: '6+', label: 'Years Active' },
        { value: '98%', label: 'Client Retention' },
        { value: '<2s', label: 'Avg Page Load' },
      ],
    },
    overview: {
      title: 'Professional Web Development for Growing Businesses',
      body: [
        'Code Visionary Services builds websites that do more than look good — they perform. Our web development team combines modern frontend frameworks with robust backend engineering to deliver fast, secure, and maintainable web properties for businesses of every size.',
        'Whether you need a high-converting marketing site, a content-heavy publication, or a full-featured web platform, we architect every project for speed, SEO, and long-term scalability. We use Next.js and React as our primary stack, ensuring server-side rendering and stellar Core Web Vitals out of the box.',
        'From initial design handoff through deployment and post-launch optimisation, we own the full process. Every website we ship includes SEO best practices, analytics integration, and a content management setup so your team can make updates without touching code.',
      ],
      bullets: [
        'Next.js and React for server-side rendering and optimal SEO performance',
        'Mobile-first responsive design that works flawlessly on every device',
        'Core Web Vitals optimised for Google Search ranking',
        'CMS integration (Sanity, Contentful, WordPress) for easy content updates',
        'HTTPS, security headers, and performance audits on every build',
        'Analytics and conversion tracking wired up from day one',
      ],
    },
    features: {
      title: 'What We Build',
      subtitle: 'Every type of web property — designed to perform and built to last.',
      features: [
        { icon: '🌐', title: 'Marketing Websites', description: 'High-converting brand and product sites that rank, engage, and generate leads.' },
        { icon: '📝', title: 'Content Platforms', description: 'Blogs, publications, and knowledge bases built for fast loading and SEO dominance.' },
        { icon: '🛒', title: 'E-Commerce Sites', description: 'Custom online stores with seamless checkout, inventory management, and payment integration.' },
        { icon: '⚡', title: 'Landing Pages', description: 'Conversion-optimised pages for campaigns, product launches, and lead generation.' },
        { icon: '🔗', title: 'API Integration', description: 'Connect your website to CRMs, payment gateways, analytics tools, and third-party services.' },
        { icon: '🔄', title: 'Website Rebuilds', description: 'Migrate legacy sites to modern stacks without losing SEO equity or existing content.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Discovery', description: 'We map your goals, audience, and content strategy before touching a design tool.' },
        { number: '02', title: 'Design', description: 'Wireframes and visual designs aligned to your brand, validated before development begins.' },
        { number: '03', title: 'Build', description: 'Clean, semantic code with performance and SEO baked in from the first commit.' },
        { number: '04', title: 'Launch', description: 'Deployment, analytics setup, search console submission, and 30 days of post-launch support.' },
      ],
    },
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Sanity CMS', 'PostgreSQL', 'Vercel', 'AWS', 'Cloudflare'],
    faq: {
      faqs: [
        { question: 'How long does it take to build a website?', answer: 'A focused marketing website typically takes 3–5 weeks from kickoff to launch. Larger web platforms with custom features take 6–12 weeks. We provide a fixed timeline at the start of every project.' },
        { question: 'Will my website rank on Google?', answer: 'Yes — SEO is built into our development process, not added as an afterthought. We use Next.js for server-side rendering, implement structured data, optimise Core Web Vitals, and submit your sitemap to Google Search Console at launch.' },
        { question: 'Can I update the website myself after launch?', answer: 'Yes. We set up a CMS (typically Sanity or similar) so your team can update pages, blog posts, and content without touching code. We provide a walkthrough and documentation.' },
        { question: 'Do you offer ongoing maintenance?', answer: 'Yes. We offer monthly maintenance retainers that cover security updates, performance monitoring, content updates, and small feature additions. Ask us about our maintenance plans during onboarding.' },
        { question: 'Can you redesign an existing website?', answer: 'Yes. Website redesigns are a core service. We audit your existing site, preserve your SEO equity, and rebuild on a modern stack that performs significantly better.' },
      ],
    },
    ctaBannerName: 'Website',
  },

  'application-development': {
    metadata: {
      title: 'Application Development Company in India | Code Visionary Services',
      description: 'Custom mobile and web application development for startups and enterprises. iOS, Android, and cross-platform apps with sleek design and powerful features.',
      canonical: `${SITE}/services/application-development`,
    },
    hero: {
      heading: 'APPLICATION|DEVELOPMENT|SERVICES',
      description: 'From concept to launch — we build mobile and web applications that delight users and accelerate business growth across every platform.',
      stats: [
        { value: '60+', label: 'Apps Launched' },
        { value: '6+', label: 'Years Active' },
        { value: '4.8★', label: 'Avg App Rating' },
        { value: '8wk', label: 'MVP Delivery' },
      ],
    },
    overview: {
      title: 'End-to-End Application Development',
      body: [
        'Code Visionary Services delivers complete application development — from initial wireframes through App Store submission and beyond. Our cross-functional team of designers, engineers, and QA specialists takes full ownership of your product so you can focus on your business.',
        'We build for every platform: native iOS and Android apps for maximum performance, cross-platform apps in Flutter and React Native for faster delivery, and web apps in Next.js for browser-based experiences. Every app is designed with the end user in mind — intuitive navigation, fast load times, and a UI that feels native to the platform.',
        'Our development process is transparent and iterative. You see working software every two weeks, provide feedback, and we adjust. No surprises at launch.',
      ],
      bullets: [
        'iOS, Android, and cross-platform development under one roof',
        'Sleek, platform-native UI design that passes App Store review standards',
        'Offline support, push notifications, and deep linking',
        'Secure authentication: biometrics, OAuth, and two-factor',
        'Backend APIs and cloud infrastructure built alongside the app',
        'App Store Optimisation (ASO) and submission handled end-to-end',
      ],
    },
    features: {
      title: 'What We Build',
      subtitle: 'Every category of mobile and web application — built to scale.',
      features: [
        { icon: '📱', title: 'iOS Apps', description: 'Native Swift and SwiftUI apps optimised for iPhone and iPad with full Apple ecosystem integration.' },
        { icon: '🤖', title: 'Android Apps', description: 'Native Kotlin apps with Material Design and deep Android platform integration.' },
        { icon: '🔄', title: 'Cross-Platform Apps', description: 'Flutter and React Native apps that deliver native performance on both iOS and Android from a single codebase.' },
        { icon: '🛒', title: 'E-Commerce Apps', description: 'Shopping apps with product catalogues, cart, payments, and order tracking built for conversion.' },
        { icon: '💬', title: 'Social & Community Apps', description: 'Real-time messaging, feeds, and community features with WebSocket-powered live updates.' },
        { icon: '⚕️', title: 'Enterprise & Industry Apps', description: 'Field service, logistics, healthcare, and fintech apps with complex business logic and compliance requirements.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Discovery', description: 'Product brief, user stories, and technical architecture defined before any design work begins.' },
        { number: '02', title: 'Design', description: 'UX flows and high-fidelity UI prototypes validated with real users before development.' },
        { number: '03', title: 'Build', description: 'Two-week sprints with a working build you can install and test at the end of every sprint.' },
        { number: '04', title: 'Launch', description: 'App Store and Play Store submission, analytics setup, crash monitoring, and post-launch support.' },
      ],
    },
    techStack: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Node.js', 'Firebase', 'PostgreSQL', 'Redis', 'AWS', 'Supabase'],
    faq: {
      faqs: [
        { question: 'Should I build a native or cross-platform app?', answer: 'It depends on your budget and requirements. Native apps (Swift for iOS, Kotlin for Android) offer maximum performance and platform integration. Cross-platform apps (Flutter or React Native) cost 30–40% less and deliver near-native performance. We recommend cross-platform for most startups and native for high-performance or hardware-intensive apps.' },
        { question: 'How long does it take to build an app?', answer: 'A focused MVP — one primary user flow and core features — typically takes 6–8 weeks. A full-featured app with backend, admin panel, and multiple user roles takes 12–20 weeks. We provide a detailed timeline during discovery.' },
        { question: 'Do you handle App Store submission?', answer: 'Yes. We manage the full App Store and Google Play submission process, including app review guidelines compliance, screenshots, descriptions, and App Store Optimisation (ASO).' },
        { question: 'Will you build the backend API too?', answer: 'Yes — and we recommend it. Having one team own both the app and backend eliminates communication overhead and integration bugs. We build full-stack: app, backend API, database, and cloud infrastructure.' },
        { question: 'What happens after launch?', answer: 'Every project includes 30 days of post-launch support at no extra cost. We monitor crash reports, fix bugs, and make minor UX adjustments based on early user feedback. After that, we offer monthly retainers for ongoing development.' },
      ],
    },
    ctaBannerName: 'App',
  },

  'artificial-intelligence': {
    metadata: {
      title: 'AI Development Services in India | Code Visionary Services',
      description: 'Harness artificial intelligence to automate processes and uncover business insights. Custom AI and machine learning solutions that learn, adapt, and give you a competitive edge.',
      canonical: `${SITE}/services/artificial-intelligence`,
    },
    hero: {
      heading: 'ARTIFICIAL|INTELLIGENCE|SOLUTIONS',
      description: 'We build AI systems that automate your workflows, surface hidden insights, and keep your business ahead of the competition — built for your specific needs.',
      stats: [
        { value: '30+', label: 'AI Projects Delivered' },
        { value: '6+', label: 'Years Experience' },
        { value: '40%', label: 'Avg Cost Reduction' },
        { value: '10x', label: 'Process Speed-Up' },
      ],
    },
    overview: {
      title: 'Custom AI and Machine Learning Development',
      body: [
        'Code Visionary Services designs and builds AI solutions tailored to your business — not off-the-shelf tools bolted onto your workflow. From natural language processing to computer vision and predictive analytics, we develop intelligent systems that integrate with your existing tech stack and deliver measurable ROI.',
        'Our AI engineering team has hands-on experience across the full ML lifecycle: data collection and labelling, model training and evaluation, deployment, and ongoing monitoring. We use proven frameworks — TensorFlow, PyTorch, and LangChain — and cloud-native ML infrastructure to ensure your AI solution is reliable and scalable.',
        'Whether you want to automate customer support, predict churn, extract insights from unstructured data, or build a generative AI feature into your product, we scope and deliver the right solution at the right cost.',
      ],
      bullets: [
        'Natural language processing: chatbots, summarisation, sentiment analysis',
        'Predictive analytics and demand forecasting models',
        'Computer vision: image classification, object detection, OCR',
        'LLM-powered workflows using GPT-4, Claude, and open-source models',
        'AI integration into existing apps via REST and streaming APIs',
        'MLOps pipelines for continuous model training and monitoring',
      ],
    },
    features: {
      title: 'What We Build',
      subtitle: 'Practical AI solutions that solve real business problems.',
      features: [
        { icon: '🤖', title: 'Conversational AI', description: 'Intelligent chatbots and voice assistants that handle customer queries, bookings, and support at scale.' },
        { icon: '📊', title: 'Predictive Analytics', description: 'Forecasting models that predict sales, churn, demand, and risk with high accuracy.' },
        { icon: '👁️', title: 'Computer Vision', description: 'Image and video analysis for quality control, document processing, and visual search.' },
        { icon: '📝', title: 'Document Intelligence', description: 'Automated data extraction from invoices, contracts, and forms using OCR and NLP.' },
        { icon: '⚡', title: 'Process Automation', description: 'End-to-end AI automation for repetitive tasks — reducing manual effort by up to 80%.' },
        { icon: '🧠', title: 'LLM Integration', description: 'Embed GPT-4, Claude, or fine-tuned models directly into your product features and workflows.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Discover', description: 'We audit your data, define the business problem, and scope the right AI approach.' },
        { number: '02', title: 'Prototype', description: 'A proof-of-concept built and evaluated against your data in 2–3 weeks.' },
        { number: '03', title: 'Build', description: 'Full model development, integration, and testing in a staging environment.' },
        { number: '04', title: 'Deploy', description: 'Production deployment with monitoring, retraining pipelines, and ongoing performance tracking.' },
      ],
    },
    techStack: ['Python', 'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI API', 'Hugging Face', 'FastAPI', 'PostgreSQL', 'MongoDB', 'AWS SageMaker', 'Power BI'],
    faq: {
      faqs: [
        { question: 'Do I need a large dataset to get started with AI?', answer: 'Not always. The data requirement depends on the type of AI. For LLM-based solutions (chatbots, summarisation) you can start with very little labelled data. For custom predictive models, we typically need at least 6–12 months of historical data. We assess your data in discovery and recommend the right approach.' },
        { question: 'How long does an AI project take?', answer: 'A proof-of-concept takes 2–4 weeks. A production-ready AI feature integrated into your product typically takes 8–16 weeks, depending on data availability and integration complexity.' },
        { question: 'Will the AI integrate with my existing software?', answer: 'Yes. We build AI as APIs or microservices that integrate with your existing applications via REST or streaming endpoints. Your team does not need to change how they work — the AI plugs in behind the scenes.' },
        { question: 'How do you ensure the AI is accurate and reliable?', answer: 'Every model goes through rigorous evaluation against held-out test data before deployment. We set up monitoring dashboards that track model performance in production and alert us when accuracy drifts so we can retrain proactively.' },
        { question: 'Can you improve an AI system we already have?', answer: 'Yes. AI audits and performance improvement projects are a common engagement. We evaluate your current model, identify bottlenecks in data quality or architecture, and implement targeted improvements.' },
      ],
    },
    ctaBannerName: 'AI Solution',
  },

  'enterprise-solutions': {
    metadata: {
      title: 'Enterprise Software Solutions in India | Code Visionary Services',
      description: 'Custom enterprise software development for complex business needs. Seamlessly integrate processes, data, and teams with scalable, reliable solutions built for your organisation.',
      canonical: `${SITE}/services/enterprise-solutions`,
    },
    hero: {
      heading: 'ENTERPRISE|SOFTWARE|SOLUTIONS',
      description: 'We build customised enterprise software that streamlines operations, connects your teams, and scales with your business — no off-the-shelf compromise.',
      stats: [
        { value: '25+', label: 'Enterprise Projects' },
        { value: '6+', label: 'Years Experience' },
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '50+', label: 'Integrations Built' },
      ],
    },
    overview: {
      title: 'Custom Enterprise Software Development',
      body: [
        'Code Visionary Services builds enterprise-grade software that solves the complexity challenges large organisations face: fragmented systems, manual workflows, data silos, and scaling bottlenecks. We design solutions from the ground up for your specific processes — not your processes bent to fit generic software.',
        'Our enterprise development practice covers custom ERP modules, internal tooling, data platforms, integration middleware, and large-scale web applications. We work within your governance requirements, security standards, and infrastructure constraints to deliver software that IT and business stakeholders trust.',
        'Every enterprise project begins with a thorough discovery phase where we map your existing systems, identify integration points, and define measurable success criteria. We then build iteratively, de-risking delivery through phased rollouts and rigorous UAT.',
      ],
      bullets: [
        'Custom ERP, CRM, and internal tool development',
        'Microservices architecture for independent scaling and deployment',
        'Enterprise-grade security: SSO, RBAC, audit logging, and encryption',
        'System integration: connect legacy systems to modern applications',
        'Data warehousing and business intelligence dashboards',
        'Phased delivery with continuous UAT and stakeholder sign-off',
      ],
    },
    features: {
      title: 'What We Build',
      subtitle: 'From process automation to organisation-wide platforms — we handle enterprise complexity.',
      features: [
        { icon: '⚙️', title: 'Custom ERP Systems', description: 'Purpose-built ERP modules that map to your actual workflows, not the other way around.' },
        { icon: '🔗', title: 'System Integration', description: 'Middleware and API layers that connect your legacy systems, SaaS tools, and databases into one coherent platform.' },
        { icon: '📊', title: 'Business Intelligence', description: 'Data warehouses and real-time dashboards that give leadership accurate, up-to-date insights.' },
        { icon: '👥', title: 'HR & Operations Portals', description: 'Employee self-service portals, onboarding systems, and operational management tools.' },
        { icon: '🔒', title: 'Compliance & Audit Tools', description: 'Regulated industry software with full audit trails, access controls, and compliance reporting.' },
        { icon: '🚀', title: 'Digital Transformation', description: 'Replace manual, paper-based, or legacy processes with modern, automated digital workflows.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Discovery', description: 'Stakeholder workshops, system audits, and requirements gathering to define scope precisely.' },
        { number: '02', title: 'Architecture', description: 'Technical design, integration mapping, and security review before any development begins.' },
        { number: '03', title: 'Build', description: 'Phased development with regular demos and UAT milestones to reduce delivery risk.' },
        { number: '04', title: 'Deploy', description: 'Staged rollout, training, documentation, and hypercare support through go-live.' },
      ],
    },
    techStack: ['Python', 'Node.js', 'React', 'PostgreSQL', 'Redis', 'Kafka', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GraphQL', 'REST APIs'],
    faq: {
      faqs: [
        { question: 'Can you integrate with our existing legacy systems?', answer: 'Yes. Legacy system integration is one of our core enterprise capabilities. We build middleware and API layers that connect legacy systems (including mainframes and on-premise databases) to modern applications without requiring a full system replacement.' },
        { question: 'How do you handle enterprise security requirements?', answer: 'We implement SSO (SAML, OAuth), role-based access control, end-to-end encryption, full audit logging, and penetration testing as standard on enterprise projects. We align to your existing security policies and can work within ISO 27001 or SOC 2 compliant environments.' },
        { question: 'How long does a typical enterprise project take?', answer: 'Enterprise projects vary widely. A focused internal tool or module takes 3–4 months. A full platform with multiple integrations and phased rollout typically takes 6–18 months. We break every project into phases with clear milestones and deliverables.' },
        { question: 'Do you provide ongoing support after launch?', answer: 'Yes. We offer managed support and maintenance contracts for enterprise clients, covering bug fixes, security patches, performance monitoring, and feature enhancements. SLA-backed support with dedicated response times is available.' },
        { question: 'Can your team work alongside our internal developers?', answer: 'Yes. We frequently work as a specialist team embedded within a client\'s existing engineering organisation. We adapt to your development standards, version control workflows, and project management tools.' },
      ],
    },
    ctaBannerName: 'Enterprise Solution',
  },

  'branding': {
    metadata: {
      title: 'Branding Services in India | Code Visionary Services',
      description: 'Build a memorable brand identity that sets you apart. Logo design, visual systems, brand strategy, and cohesive messaging that drives recognition and trust.',
      canonical: `${SITE}/services/branding`,
    },
    hero: {
      heading: 'BRANDING|DESIGN|SERVICES',
      description: 'We build brand identities that are impossible to forget — from strategy and naming through logo, colour, typography, and every brand touchpoint.',
      stats: [
        { value: '70+', label: 'Brands Built' },
        { value: '6+', label: 'Years Experience' },
        { value: '4.9★', label: 'Client Rating' },
        { value: '3wk', label: 'Brand Sprint' },
      ],
    },
    overview: {
      title: 'Brand Identity That Sets You Apart',
      body: [
        'Code Visionary Services builds brands that stand out in crowded markets and build lasting trust with their audiences. Our branding practice combines strategic thinking with distinctive visual design — creating brand identities that communicate who you are and why customers should choose you.',
        'Every branding project starts with positioning strategy: understanding your audience, competitive landscape, and the unique value you deliver. From that foundation, we develop a visual identity — logo, colour palette, typography, and design language — that expresses your brand personality consistently across every touchpoint.',
        'Whether you are launching a new brand from scratch or refreshing an established one, we deliver a complete brand system that your team can use confidently across print, digital, social, and product.',
      ],
      bullets: [
        'Brand strategy, positioning, and competitive differentiation',
        'Logo design with full primary, secondary, and icon variants',
        'Colour palette and typography system for consistent visual identity',
        'Brand guidelines document covering all usage rules',
        'Social media templates, pitch decks, and marketing collateral',
        'Brand voice, messaging framework, and tone of voice guidelines',
      ],
    },
    features: {
      title: 'What We Deliver',
      subtitle: 'A complete brand system — from strategy to every visual asset your team needs.',
      features: [
        { icon: '🎯', title: 'Brand Strategy', description: 'Positioning, audience definition, competitive analysis, and a clear brand narrative that informs every design decision.' },
        { icon: '✏️', title: 'Logo Design', description: 'A distinctive, versatile logo with primary, secondary, and icon variants for every use case.' },
        { icon: '🎨', title: 'Visual Identity', description: 'Colour palette, typography, illustration style, and photography guidelines that define your brand\'s look and feel.' },
        { icon: '📖', title: 'Brand Guidelines', description: 'A comprehensive brand book covering correct usage, spacing, do\'s and don\'ts, and tone of voice.' },
        { icon: '📱', title: 'Digital Assets', description: 'Social media templates, email headers, presentation decks, and web UI aligned to your new brand.' },
        { icon: '🔄', title: 'Brand Refresh', description: 'Modernise an existing brand while preserving equity — updated logo, refreshed colour system, new guidelines.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Strategy', description: 'We define your positioning, audience, and brand personality through workshops and competitive research.' },
        { number: '02', title: 'Concept', description: 'Logo concepts and visual direction options explored and presented for your feedback.' },
        { number: '03', title: 'Refine', description: 'The chosen direction is refined to final quality across all brand elements.' },
        { number: '04', title: 'Deliver', description: 'Full brand guidelines, all asset files, and a handoff session so your team can hit the ground running.' },
      ],
    },
    techStack: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'Canva', 'After Effects', 'Notion'],
    faq: {
      faqs: [
        { question: 'What is included in a branding project?', answer: 'A full branding project includes brand strategy, logo design (with all variants), colour palette, typography system, brand guidelines document, and a set of digital assets (social media templates, presentation deck, email headers). We scope exactly what is included at the start so there are no surprises.' },
        { question: 'How long does a branding project take?', answer: 'A focused brand sprint — strategy through final logo and guidelines — takes 3–4 weeks. A full brand identity with extensive collateral takes 6–8 weeks. We move at the speed your project requires.' },
        { question: 'Do you handle naming and brand strategy too?', answer: 'Yes. For new brands, we offer a naming workshop and full brand strategy as part of the engagement. This ensures the name, positioning, and visual identity are aligned from day one.' },
        { question: 'Who owns the final brand assets?', answer: 'You do — 100%. All source files (Figma, Illustrator, etc.) and final exports are transferred to you at project completion. There is no ongoing fee for the assets we create.' },
        { question: 'Can you refresh an existing brand rather than redesign it from scratch?', answer: 'Yes. Brand refreshes are a common engagement — especially for companies that have grown but whose visual identity hasn\'t kept pace. We modernise what exists while preserving the equity and recognition your brand has built.' },
      ],
    },
    ctaBannerName: 'Brand',
  },

  'performance-marketing': {
    metadata: {
      title: 'Performance Marketing Services in India | Code Visionary Services',
      description: 'Drive measurable growth with data-driven advertising. Expert performance marketing across Google Ads, Meta, and display channels — optimised for maximum ROAS and real business results.',
      canonical: `${SITE}/services/performance-marketing`,
    },
    hero: {
      heading: 'PERFORMANCE|MARKETING|SERVICES',
      description: 'We run data-driven advertising campaigns that deliver measurable results — optimised in real time across search, social, and display for maximum ROAS.',
      stats: [
        { value: '3x', label: 'Avg ROAS Delivered' },
        { value: '₹50Cr+', label: 'Ad Spend Managed' },
        { value: '6+', label: 'Years Experience' },
        { value: '40+', label: 'Brands Scaled' },
      ],
    },
    overview: {
      title: 'Performance Marketing That Pays for Itself',
      body: [
        'Code Visionary Services runs advertising campaigns built around one principle: you pay for results. Our performance marketing team manages campaigns across Google Ads, Meta Ads, and display networks with a relentless focus on measurable outcomes — clicks, leads, sales, and revenue.',
        'We combine strategic audience targeting with creative that converts and real-time bid optimisation to maximise every rupee of your ad budget. Every campaign is instrumented with full conversion tracking so you always know exactly what is working and why.',
        'Unlike agencies that set campaigns and forget them, we optimise continuously. Weekly performance reports, monthly strategy reviews, and proactive creative refreshes ensure your campaigns improve over time rather than decay.',
      ],
      bullets: [
        'Google Search, Shopping, Display, and YouTube campaigns',
        'Meta Ads (Facebook and Instagram) for awareness, leads, and e-commerce',
        'Full conversion tracking and attribution setup from day one',
        'Real-time bid optimisation and budget allocation across channels',
        'A/B testing of creatives, audiences, and landing pages',
        'Weekly performance reports with clear ROAS and CPA visibility',
      ],
    },
    features: {
      title: 'What We Run',
      subtitle: 'Every performance channel — managed for maximum return on ad spend.',
      features: [
        { icon: '🔍', title: 'Google Search Ads', description: 'Intent-driven search campaigns that capture high-value prospects at the moment they are ready to buy.' },
        { icon: '🛒', title: 'Google Shopping', description: 'Product listing ads optimised for e-commerce ROAS with smart bidding and feed management.' },
        { icon: '📘', title: 'Meta Ads', description: 'Facebook and Instagram campaigns for brand awareness, lead generation, and direct sales.' },
        { icon: '📺', title: 'YouTube Ads', description: 'Video campaigns that build brand awareness and retarget high-intent audiences at scale.' },
        { icon: '🎯', title: 'Retargeting', description: 'Precise remarketing campaigns that re-engage website visitors and past customers across channels.' },
        { icon: '📈', title: 'Conversion Optimisation', description: 'Landing page testing and funnel analysis to improve conversion rates alongside ad performance.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Audit', description: 'We review your existing campaigns (or market landscape) and identify the highest-leverage opportunities.' },
        { number: '02', title: 'Strategy', description: 'Channel mix, audience strategy, budget allocation, and creative brief defined before launch.' },
        { number: '03', title: 'Launch', description: 'Campaigns built, conversion tracking installed, and creatives live with baseline data collected.' },
        { number: '04', title: 'Optimise', description: 'Ongoing bid optimisation, creative testing, and monthly strategy reviews to compound performance over time.' },
      ],
    },
    techStack: ['Google Ads', 'Meta Ads Manager', 'Google Analytics 4', 'Google Tag Manager', 'Meta Pixel', 'Looker Studio', 'SEMrush', 'Hotjar'],
    faq: {
      faqs: [
        { question: 'What is a realistic ROAS I can expect?', answer: 'ROAS varies significantly by industry, product, and ad maturity. We typically target a minimum of 3x ROAS for e-commerce clients within 90 days. For lead generation, we focus on cost-per-lead and lead quality rather than ROAS. We set realistic targets at the start of every engagement based on your specific market.' },
        { question: 'What is the minimum budget to get started?', answer: 'We recommend a minimum monthly ad spend of ₹50,000–1,00,000 to generate enough data for meaningful optimisation. Below that threshold, campaigns do not have enough volume to learn and improve. Our management fee is separate from your ad spend budget.' },
        { question: 'Do you handle creative (ad copy and visuals)?', answer: 'Yes. Our team handles ad copy, static creatives, and creative strategy. For video ads, we can work with your existing footage or brief our production partners. Creative is refreshed proactively when we detect performance fatigue.' },
        { question: 'How long before I see results?', answer: 'Most campaigns begin generating data within the first week. Meaningful optimisation typically takes 30–60 days as the algorithms learn. Significant performance improvements — ROAS gains, lower CPAs — are usually visible by month 2–3.' },
        { question: 'Can you take over campaigns another agency is running?', answer: 'Yes. We do campaign takeovers regularly. We audit the existing account structure, preserve what is working, and fix what is not — typically without pausing activity during the transition.' },
      ],
    },
    ctaBannerName: 'Marketing Campaign',
  },

  'digital-funnel': {
    metadata: {
      title: 'Digital Funnel Strategy & Build | Code Visionary Services',
      description: 'Design performance-driven digital funnels that convert leads into customers. Full funnel strategy, build, and optimisation — mapping the customer journey for maximum ROI.',
      canonical: `${SITE}/services/digital-funnel`,
    },
    hero: {
      heading: 'DIGITAL|FUNNEL|SERVICES',
      description: 'We design, build, and optimise digital funnels that move your audience from first touch to paying customer — automated, tracked, and built for scale.',
      stats: [
        { value: '5x', label: 'Avg Lead-to-Sale Improvement' },
        { value: '6+', label: 'Years Experience' },
        { value: '50+', label: 'Funnels Built' },
        { value: '30%', label: 'Avg CAC Reduction' },
      ],
    },
    overview: {
      title: 'Performance-Driven Digital Funnels',
      body: [
        'Code Visionary Services builds digital funnels that systematically convert your audience into customers. We map the complete customer journey — from first ad impression through lead capture, nurture, and conversion — then design and build every stage to maximise ROI.',
        'Our funnel work combines paid advertising, landing page design, email automation, and CRM integration into a single, cohesive acquisition system. Every touchpoint is tracked, every stage is measured, and every bottleneck is identified and fixed through ongoing optimisation.',
        'Whether you need a simple lead capture funnel or a multi-stage e-commerce acquisition system with upsells, retargeting, and post-purchase nurture, we architect the right funnel for your business model and audience.',
      ],
      bullets: [
        'Full customer journey mapping from awareness to purchase and beyond',
        'Landing page and squeeze page design optimised for conversion',
        'Email and SMS automation sequences for lead nurture',
        'CRM integration and lead scoring for sales team handoff',
        'Retargeting campaigns at every funnel stage',
        'Funnel analytics dashboards with stage-by-stage conversion visibility',
      ],
    },
    features: {
      title: 'What We Build',
      subtitle: 'Every component of a high-converting digital acquisition funnel.',
      features: [
        { icon: '🎯', title: 'Lead Capture Funnels', description: 'Opt-in pages, lead magnets, and forms designed to maximise email and phone capture rates.' },
        { icon: '📧', title: 'Email Automation', description: 'Multi-step nurture sequences that warm leads and move them toward purchase on autopilot.' },
        { icon: '🛒', title: 'Sales Funnels', description: 'Product and service funnels with order forms, upsells, downsells, and post-purchase sequences.' },
        { icon: '🔄', title: 'Retargeting Systems', description: 'Coordinated retargeting across Facebook, Instagram, and Google to re-engage drop-offs at every stage.' },
        { icon: '📊', title: 'Funnel Analytics', description: 'Stage-by-stage dashboards that show exactly where leads are dropping off and what to fix.' },
        { icon: '⚡', title: 'Landing Pages', description: 'High-converting landing pages A/B tested for copy, layout, and CTA performance.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Map', description: 'We map your customer journey end-to-end and identify the highest-impact funnel stages to build or fix.' },
        { number: '02', title: 'Build', description: 'Landing pages, email sequences, integrations, and tracking built and tested in staging.' },
        { number: '03', title: 'Launch', description: 'Funnel goes live with full analytics instrumentation and baseline performance benchmarked.' },
        { number: '04', title: 'Optimise', description: 'Ongoing A/B testing, copy refinement, and stage-by-stage conversion rate improvements.' },
      ],
    },
    techStack: ['Meta Ads Manager', 'Google Ads', 'Mailchimp', 'ActiveCampaign', 'HubSpot', 'Klaviyo', 'Webflow', 'Google Tag Manager', 'SEO', 'UGC'],
    faq: {
      faqs: [
        { question: 'What is a digital funnel?', answer: 'A digital funnel is the structured sequence of steps you design to move a stranger into a paying customer online. It typically starts with an ad or organic content, moves through a landing page and lead capture, then a nurture sequence, and ends at a purchase or conversion event. A well-designed funnel makes this process automatic and measurable.' },
        { question: 'How long does it take to build a funnel?', answer: 'A focused single-step funnel (lead magnet + email sequence) takes 2–3 weeks. A full multi-stage acquisition system with landing pages, email automation, CRM integration, and retargeting takes 4–8 weeks to build and launch.' },
        { question: 'Do you integrate with our CRM?', answer: 'Yes. We integrate funnels with HubSpot, Salesforce, Zoho, and custom CRM systems. This includes lead routing, scoring, and handoff sequences so your sales team receives warm, qualified leads at the right stage.' },
        { question: 'How do you measure funnel performance?', answer: 'We set up stage-by-stage tracking from the first ad impression through every step to conversion. You get a dashboard showing click-through rates, opt-in rates, email open and click rates, and final conversion rates — so you always know where the bottleneck is.' },
        { question: 'Can you fix an existing funnel that is underperforming?', answer: 'Yes. Funnel audits are a common engagement. We analyse every stage of your current funnel, identify where you are losing the most leads, and prioritise fixes by impact. Often a single landing page or email sequence improvement delivers a 30–50% conversion lift.' },
      ],
    },
    ctaBannerName: 'Funnel',
  },

  'web-3-0': {
    metadata: {
      title: 'Web 3.0 Development Services in India | Code Visionary Services',
      description: 'Step into the decentralized future with blockchain-powered web experiences. Smart contracts, dApps, NFT platforms, and DeFi solutions built for security, privacy, and innovation.',
      canonical: `${SITE}/services/web-3-0`,
    },
    hero: {
      heading: 'WEB 3.0|DEVELOPMENT|SERVICES',
      description: 'We build blockchain-powered web experiences that give users greater security, privacy, and control — from smart contracts to fully decentralised applications.',
      stats: [
        { value: '20+', label: 'Web3 Projects Delivered' },
        { value: '6+', label: 'Years Experience' },
        { value: '5', label: 'Blockchains Supported' },
        { value: '100%', label: 'Smart Contract Audits Passed' },
      ],
    },
    overview: {
      title: 'Decentralised Web Development for the Next Era',
      body: [
        'Code Visionary Services builds Web 3.0 applications that leverage blockchain technology to give users real ownership, transparency, and security. Whether you need a DeFi protocol, an NFT marketplace, a DAO platform, or a blockchain-integrated web application, our team delivers production-grade Web3 solutions.',
        'Our Web3 practice covers the full stack: Solidity smart contract development and auditing, frontend dApp interfaces with wallet integration, backend indexing infrastructure, and cross-chain compatibility. We build on Ethereum, Polygon, Solana, BNB Chain, and other leading networks depending on your requirements.',
        'We approach every Web3 project with a security-first mindset. Smart contracts are peer-reviewed and audited before deployment, and frontend applications are built to protect users from common Web3 attack vectors like phishing and malicious transaction approvals.',
      ],
      bullets: [
        'Smart contract development in Solidity and Rust with full audit process',
        'dApp frontend with MetaMask, WalletConnect, and multi-wallet support',
        'NFT minting, marketplace, and royalty infrastructure',
        'DeFi protocol development: DEX, staking, lending, and yield farming',
        'DAO governance contracts and voting mechanisms',
        'Cross-chain bridge integration and multi-network deployment',
      ],
    },
    features: {
      title: 'What We Build',
      subtitle: 'The full spectrum of Web3 products — from smart contracts to production dApps.',
      features: [
        { icon: '📜', title: 'Smart Contracts', description: 'Audited Solidity and Rust contracts deployed on Ethereum, Polygon, Solana, and BNB Chain.' },
        { icon: '🖼️', title: 'NFT Platforms', description: 'NFT minting sites, marketplaces, and collection management with royalty distribution.' },
        { icon: '💱', title: 'DeFi Protocols', description: 'Decentralised exchanges, staking platforms, and yield farming contracts built to specification.' },
        { icon: '🏛️', title: 'DAO & Governance', description: 'On-chain governance contracts and voting interfaces that give token holders real decision-making power.' },
        { icon: '🔗', title: 'Web3 dApps', description: 'Full-stack decentralised applications with wallet integration, on-chain interactions, and IPFS storage.' },
        { icon: '🌉', title: 'Token & Bridge Infra', description: 'ERC-20/SPL token creation, vesting contracts, and cross-chain bridge integration.' },
      ],
    },
    process: {
      steps: [
        { number: '01', title: 'Scope', description: 'We define the on-chain vs off-chain architecture, select the right blockchain, and scope the smart contract logic.' },
        { number: '02', title: 'Build', description: 'Smart contracts developed with unit tests and peer review; dApp frontend wired to testnet for early validation.' },
        { number: '03', title: 'Audit', description: 'Smart contracts audited for security vulnerabilities before mainnet deployment — no shortcuts.' },
        { number: '04', title: 'Deploy', description: 'Mainnet deployment, frontend launch, and monitoring infrastructure set up for on-chain activity.' },
      ],
    },
    techStack: ['Solidity', 'Rust', 'Hardhat', 'Foundry', 'Ethers.js', 'Wagmi', 'React', 'IPFS', 'The Graph', 'OpenZeppelin', 'Ethereum', 'Polygon', 'Solana'],
    faq: {
      faqs: [
        { question: 'Which blockchains do you develop on?', answer: 'We primarily build on Ethereum, Polygon, BNB Chain, Solana, and Avalanche. We recommend the right chain based on your project requirements — considering transaction costs, throughput, ecosystem, and your target user base.' },
        { question: 'How do you ensure smart contract security?', answer: 'Every smart contract goes through internal peer review, automated static analysis, and a formal audit before mainnet deployment. We follow OpenZeppelin security standards and have a track record of zero exploits on deployed contracts.' },
        { question: 'Do you build the frontend for the dApp as well?', answer: 'Yes. We build the complete dApp: smart contracts, backend indexing (using The Graph or custom indexers), and the React-based frontend with multi-wallet support (MetaMask, WalletConnect, Phantom). You get one team owning the entire stack.' },
        { question: 'Can you build on a private / permissioned blockchain?', answer: 'Yes. We have experience with permissioned blockchain implementations for enterprise clients who need the benefits of blockchain (immutability, audit trail) without public network exposure. We work with Hyperledger Fabric and private EVM chains.' },
        { question: 'How long does a Web3 project take?', answer: 'A focused smart contract with a basic frontend takes 4–8 weeks. A full NFT marketplace or DeFi protocol with audit takes 12–20 weeks. Timeline depends heavily on smart contract complexity and audit scope.' },
      ],
    },
    ctaBannerName: 'Web3 Product',
  },

};

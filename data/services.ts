export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface ServiceData {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  icon: string
  benefits: string[]
  process: ProcessStep[]
  category: 'staffing' | 'digital' | 'technology' | 'consulting'
  featured?: boolean
}

export interface PricingPlan {
  id: 'standard' | 'premium'
  name: string
  tagline: string
  price?: string
  billingNote?: string
  features: string[]
  isRecommended: boolean
  ctaLabel: string
  ctaHref: string
}

export const services: ServiceData[] = [
  {
    id: 'job-marketing',
    title: 'Job Marketing Services',
    shortDescription:
      'End-to-end job marketing for OPT consultants — from resume crafting to interview coaching and placement.',
    fullDescription:
      'SSV Technologies provides comprehensive job marketing services tailored specifically for OPT consultants navigating the competitive US job market. Our experienced team handles every aspect of your job search — from crafting an ATS-optimised resume and building a compelling LinkedIn profile to identifying the right opportunities, submitting targeted applications, and preparing you for technical and behavioural interviews. We combine deep market knowledge with personalised attention to maximise your chances of landing a role that aligns with your skills and career goals.',
    icon: 'Briefcase',
    benefits: [
      'ATS-optimised resume crafting and LinkedIn profile enhancement',
      'Targeted job search across top US technology companies',
      'Application tracking and status updates in real time',
      'Technical and behavioural interview preparation',
      'Dedicated account manager for personalised support',
      'End-to-end placement support until you land your role',
      'Career mentorship from industry professionals',
      'Ongoing guidance throughout your career journey',
    ],
    process: [
      {
        step: 1,
        title: 'Profile Assessment',
        description:
          'We conduct a thorough review of your skills, experience, and career goals to build a personalised job marketing strategy.',
      },
      {
        step: 2,
        title: 'Resume & Profile Optimisation',
        description:
          'Our experts craft an ATS-friendly resume and optimise your LinkedIn profile to attract recruiter attention.',
      },
      {
        step: 3,
        title: 'Targeted Job Search',
        description:
          'We identify and apply to roles that match your profile across our extensive network of US technology employers.',
      },
      {
        step: 4,
        title: 'Interview Preparation',
        description:
          'Comprehensive coaching covering technical rounds, system design, and behavioural interviews with mock sessions.',
      },
      {
        step: 5,
        title: 'Offer & Onboarding Support',
        description:
          'We guide you through offer evaluation, negotiation, and the onboarding process to ensure a smooth transition.',
      },
    ],
    category: 'staffing',
    featured: true,
  },
  {
    id: 'placement-services',
    title: 'Placement Services',
    shortDescription:
      'Connecting US Citizens, H1B, and Green Card holders with top technology employers across the United States.',
    fullDescription:
      'Our Placement Services are designed for US Citizens, H1B visa holders, and Green Card holders seeking their next technology role. SSV Technologies leverages a robust network of direct employer relationships and staffing partnerships to match qualified candidates with roles that align with their expertise and compensation expectations. We handle the full recruitment lifecycle — from initial screening and skills assessment to interview coordination and offer management — so you can focus on performing at your best.',
    icon: 'Users',
    benefits: [
      'Access to exclusive job openings not listed on public boards',
      'Direct employer relationships across Fortune 500 and mid-market companies',
      'Skills assessment and gap analysis to strengthen your candidacy',
      'Interview scheduling and preparation support',
      'Salary benchmarking and offer negotiation guidance',
      'Ongoing career support post-placement',
    ],
    process: [
      {
        step: 1,
        title: 'Candidate Screening',
        description:
          'We evaluate your technical skills, experience, and career aspirations to identify the best-fit opportunities.',
      },
      {
        step: 2,
        title: 'Opportunity Matching',
        description:
          'Our team matches your profile against open roles in our employer network and presents curated opportunities.',
      },
      {
        step: 3,
        title: 'Interview Coordination',
        description:
          'We manage all scheduling, briefing, and logistics so you can focus entirely on interview performance.',
      },
      {
        step: 4,
        title: 'Offer Management',
        description:
          'We provide salary benchmarking data and negotiate on your behalf to secure the best possible offer.',
      },
      {
        step: 5,
        title: 'Post-Placement Support',
        description:
          'Our relationship continues after placement with check-ins and career guidance to ensure long-term success.',
      },
    ],
    category: 'staffing',
    featured: true,
  },
  {
    id: 'domestic-placement',
    title: 'Domestic Placement Services',
    shortDescription:
      'Connecting skilled IT professionals with leading technology companies across India.',
    fullDescription:
      "SSV Technologies' Domestic Placement Services bridge the gap between talented IT professionals and India's rapidly growing technology sector. Whether you are a fresh graduate, an experienced engineer, or a senior technology leader, our team works closely with top IT companies, product firms, and GCCs across India to identify roles that match your skills and ambitions. We provide end-to-end support from profile preparation and employer introductions to interview coaching and offer finalisation.",
    icon: 'MapPin',
    benefits: [
      'Partnerships with leading IT companies, product firms, and GCCs in India',
      'Roles across all experience levels — fresher to senior leadership',
      'Personalised career counselling and profile preparation',
      'Interview coaching tailored to Indian IT hiring processes',
      'Transparent communication and regular status updates',
      'Post-placement support and career guidance',
    ],
    process: [
      {
        step: 1,
        title: 'Profile Review',
        description:
          'We assess your skills, qualifications, and career goals to identify the most suitable opportunities in the Indian IT market.',
      },
      {
        step: 2,
        title: 'Employer Matching',
        description:
          'We connect your profile with our network of IT companies, product startups, and GCCs actively hiring in India.',
      },
      {
        step: 3,
        title: 'Interview Preparation',
        description:
          'Our coaches prepare you for technical assessments, coding rounds, and HR interviews specific to Indian IT employers.',
      },
      {
        step: 4,
        title: 'Offer Facilitation',
        description:
          'We facilitate offer discussions and help you evaluate compensation packages to make an informed decision.',
      },
      {
        step: 5,
        title: 'Onboarding Assistance',
        description:
          'We remain available through your onboarding period to address any questions and ensure a smooth start.',
      },
    ],
    category: 'staffing',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing Services',
    shortDescription:
      'AI-powered digital marketing strategies that drive measurable growth for businesses of all sizes.',
    fullDescription:
      'SSV Technologies delivers cutting-edge Digital Marketing Services powered by Agentic AI — autonomous AI systems that execute multi-step marketing workflows with minimal human intervention. Our Agentic AI platform continuously analyses market signals, audience behaviour, and campaign performance to optimise your digital presence in real time. From SEO and content marketing to paid advertising, social media management, and conversion rate optimisation, we build and execute data-driven strategies that generate qualified leads and accelerate revenue growth.',
    icon: 'TrendingUp',
    benefits: [
      'Agentic AI-driven campaign optimisation for maximum ROI',
      'Comprehensive SEO strategy including technical, on-page, and off-page',
      'Data-driven content marketing that builds authority and drives organic traffic',
      'Precision-targeted paid advertising across Google, LinkedIn, and Meta',
      'Social media management and community building',
      'Conversion rate optimisation through A/B testing and analytics',
      'Real-time performance dashboards and transparent reporting',
      'Scalable strategies that grow with your business',
    ],
    process: [
      {
        step: 1,
        title: 'Digital Audit & Strategy',
        description:
          'We conduct a comprehensive audit of your current digital presence and develop a tailored growth strategy aligned with your business objectives.',
      },
      {
        step: 2,
        title: 'Agentic AI Setup',
        description:
          'Our Agentic AI platform is configured to monitor your market, analyse competitor activity, and identify high-value opportunities autonomously.',
      },
      {
        step: 3,
        title: 'Campaign Execution',
        description:
          'We launch and manage multi-channel campaigns across SEO, paid media, content, and social — all orchestrated by our AI platform.',
      },
      {
        step: 4,
        title: 'Continuous Optimisation',
        description:
          'Agentic AI continuously analyses performance data and adjusts targeting, bidding, and content to maximise results.',
      },
      {
        step: 5,
        title: 'Reporting & Insights',
        description:
          'Monthly strategy reviews with detailed performance reports, actionable insights, and roadmap updates keep you fully informed.',
      },
    ],
    category: 'digital',
    featured: true,
  },
  {
    id: 'software-services',
    title: 'Custom Software Development',
    shortDescription:
      'Bespoke software solutions built with modern architectures to solve your most complex business challenges.',
    fullDescription:
      'SSV Technologies designs and builds custom software solutions that are scalable, secure, and aligned with your business strategy. Our full-stack engineering teams bring expertise across web applications, mobile platforms, APIs, microservices, and data engineering. We follow agile delivery practices with continuous integration and deployment pipelines, ensuring rapid iteration and high-quality releases. From greenfield product development to legacy system modernisation, we deliver software that creates lasting competitive advantage.',
    icon: 'Code2',
    benefits: [
      'Full-stack development across web, mobile, and backend platforms',
      'Microservices and API-first architecture for scalability',
      'Agile delivery with two-week sprint cycles and regular demos',
      'Rigorous quality assurance including automated testing and code reviews',
      'DevOps and CI/CD pipeline setup for rapid, reliable deployments',
      'Security-first development practices and compliance support',
      'Post-launch maintenance, monitoring, and enhancement services',
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Requirements',
        description:
          'We work closely with your stakeholders to define requirements, map user journeys, and establish technical architecture.',
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        description:
          'Our UX/UI designers create wireframes and interactive prototypes to validate the solution before development begins.',
      },
      {
        step: 3,
        title: 'Agile Development',
        description:
          'Engineering teams build in two-week sprints with regular demos, ensuring continuous alignment with your expectations.',
      },
      {
        step: 4,
        title: 'Quality Assurance',
        description:
          'Comprehensive testing — unit, integration, performance, and security — ensures a robust, production-ready product.',
      },
      {
        step: 5,
        title: 'Deployment & Support',
        description:
          'We manage production deployment, provide post-launch monitoring, and offer ongoing maintenance and feature development.',
      },
    ],
    category: 'technology',
  },
  {
    id: 'cloud-modernization',
    title: 'Cloud Modernization Services',
    shortDescription:
      'Accelerate your cloud journey with expert migration, optimisation, and cloud-native transformation services.',
    fullDescription:
      'SSV Technologies helps organisations unlock the full potential of the cloud through strategic migration, modernisation, and optimisation services. Whether you are lifting and shifting legacy workloads, re-architecting applications for cloud-native deployment, or optimising an existing cloud environment for cost and performance, our certified cloud architects deliver measurable outcomes. We work across AWS, Azure, and Google Cloud Platform, bringing deep expertise in containerisation, serverless architectures, infrastructure-as-code, and FinOps.',
    icon: 'Cloud',
    benefits: [
      'Cloud strategy and roadmap development aligned with business goals',
      'Workload assessment and migration planning with risk mitigation',
      'Multi-cloud and hybrid cloud architecture design',
      'Containerisation and Kubernetes orchestration',
      'Infrastructure-as-code with Terraform and CloudFormation',
      'FinOps practices to optimise cloud spend by up to 40%',
      'Security hardening and compliance (SOC 2, ISO 27001, HIPAA)',
      'Ongoing managed services and cloud operations support',
    ],
    process: [
      {
        step: 1,
        title: 'Cloud Readiness Assessment',
        description:
          'We evaluate your current infrastructure, applications, and data to produce a detailed cloud readiness report and migration roadmap.',
      },
      {
        step: 2,
        title: 'Architecture Design',
        description:
          'Our architects design a target-state cloud architecture optimised for performance, security, and cost efficiency.',
      },
      {
        step: 3,
        title: 'Migration Execution',
        description:
          'We execute migrations in phased waves, minimising downtime and business disruption through proven migration methodologies.',
      },
      {
        step: 4,
        title: 'Optimisation & Hardening',
        description:
          'Post-migration, we optimise workloads for performance and cost, and implement security controls and compliance frameworks.',
      },
      {
        step: 5,
        title: 'Managed Operations',
        description:
          'Our cloud operations team provides 24/7 monitoring, incident response, and continuous improvement of your cloud environment.',
      },
    ],
    category: 'technology',
  },
  {
    id: 'enterprise-consulting',
    title: 'Enterprise Architectural Consulting',
    shortDescription:
      'Strategic technology architecture guidance to align your IT landscape with long-term business objectives.',
    fullDescription:
      "SSV Technologies' Enterprise Architectural Consulting practice helps large organisations and GCCs design, govern, and evolve their technology architectures to support strategic business outcomes. Our enterprise architects bring decades of combined experience across application architecture, data architecture, integration patterns, and technology governance. We work as trusted advisors — conducting architecture reviews, defining target-state blueprints, establishing architecture governance frameworks, and guiding technology investment decisions that deliver lasting value.",
    icon: 'Building2',
    benefits: [
      'Current-state architecture assessment and gap analysis',
      'Target-state architecture blueprints aligned with business strategy',
      'Technology roadmap development with prioritised investment recommendations',
      'Architecture governance framework and review board setup',
      'Integration architecture and API strategy design',
      'Data architecture and analytics platform strategy',
      'Vendor evaluation and technology selection support',
      'Architecture coaching and capability building for internal teams',
    ],
    process: [
      {
        step: 1,
        title: 'Architecture Discovery',
        description:
          'We conduct stakeholder interviews and document your current technology landscape, pain points, and strategic objectives.',
      },
      {
        step: 2,
        title: 'Assessment & Analysis',
        description:
          'Our architects analyse the current state against industry best practices and your business requirements to identify gaps and opportunities.',
      },
      {
        step: 3,
        title: 'Target-State Design',
        description:
          'We develop a comprehensive target-state architecture blueprint with detailed design decisions and rationale.',
      },
      {
        step: 4,
        title: 'Roadmap & Governance',
        description:
          'We produce a phased implementation roadmap and establish governance processes to guide architecture evolution.',
      },
      {
        step: 5,
        title: 'Advisory & Review',
        description:
          'Ongoing advisory engagement ensures architecture decisions remain aligned with evolving business needs and technology trends.',
      },
    ],
    category: 'consulting',
  },
  {
    id: 'gcc-services',
    title: 'GCC Services',
    shortDescription:
      'End-to-end support for Global Capability Centers — from setup and talent acquisition to operations and scaling.',
    fullDescription:
      'SSV Technologies is a specialist partner for multinational corporations establishing or scaling Global Capability Centers (GCCs) in India. We provide comprehensive GCC advisory and execution services — from location strategy, legal entity setup, and talent acquisition to technology infrastructure, governance frameworks, and operational excellence programmes. Our deep understanding of the Indian talent market, regulatory environment, and GCC operating models enables us to accelerate your GCC journey while minimising risk and maximising the value delivered to your global organisation.',
    icon: 'Globe',
    benefits: [
      'GCC feasibility study and business case development',
      'Location strategy and site selection across major Indian cities',
      'Legal entity setup, compliance, and regulatory guidance',
      'Talent acquisition strategy and executive hiring',
      'Technology infrastructure design and vendor management',
      'GCC governance framework and operating model design',
      'Transition management and knowledge transfer support',
      'Ongoing operational excellence and performance optimisation',
    ],
    process: [
      {
        step: 1,
        title: 'Feasibility & Strategy',
        description:
          'We develop a comprehensive GCC feasibility study covering location options, talent availability, cost models, and risk assessment.',
      },
      {
        step: 2,
        title: 'Setup & Incorporation',
        description:
          'Our team manages legal entity incorporation, regulatory registrations, and compliance setup to get your GCC operational quickly.',
      },
      {
        step: 3,
        title: 'Talent Acquisition',
        description:
          'We build your initial leadership team and engineering workforce through targeted recruitment and our extensive talent network.',
      },
      {
        step: 4,
        title: 'Infrastructure & Operations',
        description:
          'We design and implement the technology infrastructure, tools, and processes needed to run an efficient GCC operation.',
      },
      {
        step: 5,
        title: 'Scale & Optimise',
        description:
          'Ongoing advisory support helps you scale your GCC, optimise operations, and continuously improve delivery quality and efficiency.',
      },
    ],
    category: 'consulting',
    featured: true,
  },
]

export const jobMarketingPricingPlans: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Standard Plan',
    tagline: 'Core job marketing essentials to launch your US career',
    features: [
      'Job marketing and targeted application submissions',
      'ATS-optimised resume review and feedback',
      'Application tracking and status updates',
      'Job alerts for matching opportunities',
      'Basic interview preparation guidance',
      'LinkedIn profile review',
    ],
    isRecommended: false,
    ctaLabel: 'Get Started',
    ctaHref: '/contact?service=job-marketing',
  },
  {
    id: 'premium',
    name: 'Premium Plan',
    tagline: 'Complete end-to-end support for your technology career journey',
    features: [
      'Everything in Standard Plan',
      'Comprehensive training support and skill development',
      'Career mentorship from industry professionals',
      'Advanced interview coaching with mock sessions',
      'Dedicated account manager for personalised support',
      'End-to-end placement support until you land your role',
      'Career journey guidance and long-term mentorship',
      'Salary negotiation and offer evaluation support',
      'Post-placement check-ins and career growth guidance',
    ],
    isRecommended: true,
    ctaLabel: 'Get Premium Support',
    ctaHref: '/contact?service=job-marketing',
  },
]

export interface Industry {
  id: string
  title: string
  icon: string
  description: string
  expandedDescription: string
}

export const industries: Industry[] = [
  {
    id: 'technology',
    title: 'Technology',
    icon: 'Cpu',
    description:
      'Empowering software companies, SaaS platforms, and tech startups with specialised talent and digital solutions.',
    expandedDescription:
      'SSV Technologies has deep roots in the technology sector, serving software product companies, SaaS platforms, cloud-native startups, and enterprise IT organisations. We provide specialised talent acquisition for roles spanning software engineering, DevOps, data science, and product management. Our digital marketing and cloud modernisation services help technology companies accelerate growth, reduce infrastructure costs, and reach new markets. With our GCC advisory practice, we help global technology firms establish high-performing engineering centres in India.',
  },
  {
    id: 'finance-banking',
    title: 'Finance & Banking',
    icon: 'Landmark',
    description:
      'Supporting banks, fintech firms, and financial services companies with technology talent and digital transformation.',
    expandedDescription:
      'The financial services industry demands the highest standards of security, compliance, and reliability. SSV Technologies serves banks, credit unions, insurance companies, and fintech innovators with technology staffing, custom software development, and cloud modernisation services. Our teams have experience with core banking systems, payment platforms, regulatory compliance frameworks (SOC 2, PCI-DSS), and digital banking transformation. We help financial institutions modernise legacy infrastructure while maintaining the security and uptime their customers depend on.',
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    icon: 'HeartPulse',
    description:
      'Enabling healthcare providers and health-tech companies to leverage technology for better patient outcomes.',
    expandedDescription:
      'Healthcare organisations face unique challenges at the intersection of technology, compliance, and patient care. SSV Technologies supports hospitals, health systems, medical device companies, and health-tech startups with technology talent and software development services. Our teams have experience with EHR integrations, HIPAA-compliant cloud architectures, telehealth platforms, and healthcare data analytics. We help healthcare organisations harness the power of technology to improve operational efficiency, enhance patient experiences, and drive better clinical outcomes.',
  },
  {
    id: 'retail-ecommerce',
    title: 'Retail & E-Commerce',
    icon: 'ShoppingCart',
    description:
      'Helping retailers and e-commerce brands build scalable platforms and drive customer acquisition through digital marketing.',
    expandedDescription:
      'The retail and e-commerce landscape is evolving rapidly, driven by shifting consumer expectations and the rise of omnichannel commerce. SSV Technologies helps retailers and direct-to-consumer brands build scalable e-commerce platforms, optimise their digital marketing spend, and leverage data analytics to personalise customer experiences. Our Agentic AI-powered digital marketing services are particularly effective for e-commerce brands seeking to maximise return on ad spend and grow organic traffic. We also support retail technology teams with specialised engineering talent.',
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing',
    icon: 'Factory',
    description:
      'Driving Industry 4.0 transformation for manufacturers through IoT, automation, and cloud-connected operations.',
    expandedDescription:
      'Manufacturing companies are embracing Industry 4.0 technologies to improve operational efficiency, reduce downtime, and build more resilient supply chains. SSV Technologies supports manufacturers with technology talent, custom software development, and cloud modernisation services tailored to industrial environments. Our teams have experience with IoT platform integration, manufacturing execution systems (MES), ERP modernisation, and predictive maintenance solutions. We help manufacturers connect their shop floor to the cloud and unlock the value of operational data.',
  },
  {
    id: 'gccs',
    title: 'GCCs',
    icon: 'Globe2',
    description:
      'Specialist partner for Global Capability Centers — from setup and talent strategy to operational excellence.',
    expandedDescription:
      'Global Capability Centers (GCCs) are a strategic priority for multinational corporations seeking to build high-quality, cost-effective technology and business process capabilities in India. SSV Technologies is a specialist GCC partner, offering end-to-end support from feasibility studies and legal entity setup to talent acquisition, technology infrastructure, and governance frameworks. We have supported GCC establishments across Hyderabad, Bengaluru, and Pune, helping global companies build thriving India operations that deliver measurable value to their parent organisations.',
  },
]

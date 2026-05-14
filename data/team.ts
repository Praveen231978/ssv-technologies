export interface TeamMember {
  id: string
  name: string
  title: string
  bio?: string
  photoUrl?: string
  linkedinUrl?: string
}

export const teamMembers: TeamMember[] = [
  {
    id: 'surya-vedangi',
    name: 'Ambika Vedangi',
    title: 'Chief Executive Officer',
    bio: 'Ambika Vedangi is the founder and CEO of SSV Technologies Pvt. Ltd., bringing over a decade of experience in IT staffing, digital transformation, and enterprise technology consulting. With a deep understanding of both the US and Indian technology markets, Ambika has built SSV Technologies into a trusted partner for companies and candidates across the globe. His vision of combining human expertise with Agentic AI drives the company\'s innovative approach to digital marketing and talent placement.',
    linkedinUrl: 'https://www.linkedin.com/company/ssvtechnologies/',
  },
  {
    id: 'operations-lead',
    name: 'Ambika V.',
    title: 'Head of Operations',
    bio: 'Ambika leads SSV Technologies\' operations team, overseeing client delivery, candidate management, and process excellence. With extensive experience in IT staffing and operations management, she ensures every client and candidate receives the highest standard of service throughout their engagement with SSV Technologies.',
    linkedinUrl: undefined,
  },
  {
    id: 'technology-lead',
    name: 'Nag V.',
    title: 'Head of Technology',
    bio: 'Nag leads the technology practice at SSV Technologies, overseeing software development, cloud modernisation, and enterprise consulting engagements. His background spans enterprise architecture, cloud platforms, and digital transformation, enabling him to guide clients through complex technology challenges with clarity and confidence.',
    linkedinUrl: undefined,
  },
  {
    id: 'marketing-lead',
    name: 'Preethi Reddy',
    title: 'Head of Digital Marketing',
    bio: 'Preethi leads SSV Technologies\' digital marketing practice, specialising in Agentic AI-powered marketing strategies. With expertise in SEO, paid media, and marketing automation, she helps clients achieve measurable growth through data-driven campaigns that continuously optimise for performance.',
    linkedinUrl: undefined,
  },
]

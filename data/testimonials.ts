export interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
  company?: string
  avatarUrl?: string
  rating: 1 | 2 | 3 | 4 | 5
  category: 'client' | 'candidate'
}

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    quote:
      'SSV Technologies transformed our digital marketing strategy. Their Agentic AI platform delivered a 3x increase in qualified leads within the first quarter. The team is responsive, data-driven, and genuinely invested in our growth.',
    author: 'Rajesh Nair',
    role: 'VP of Marketing',
    company: 'TechVision Solutions',
    rating: 5,
    category: 'client',
  },
  {
    id: 'testimonial-2',
    quote:
      "As an OPT consultant, the US job market felt overwhelming. SSV Technologies' Premium Plan gave me the structure, coaching, and support I needed. Within 8 weeks, I had multiple offers and landed a role at a Fortune 500 company. I cannot recommend them highly enough.",
    author: 'Priya Sharma',
    role: 'Software Engineer',
    company: 'Leading US Technology Company',
    rating: 5,
    category: 'candidate',
  },
  {
    id: 'testimonial-3',
    quote:
      'We engaged SSV Technologies to help establish our GCC in Hyderabad. Their end-to-end support — from legal setup to hiring our first 50 engineers — was exceptional. They understood our culture and delivered a team that hit the ground running.',
    author: 'Michael Chen',
    role: 'Chief Technology Officer',
    company: 'Global Financial Services Firm',
    rating: 5,
    category: 'client',
  },
  {
    id: 'testimonial-4',
    quote:
      'The cloud modernisation team at SSV Technologies migrated our entire infrastructure to AWS in under three months with zero downtime. Our infrastructure costs dropped by 35% and our deployment frequency tripled. Outstanding execution.',
    author: 'Ananya Krishnamurthy',
    role: 'Head of Engineering',
    company: 'HealthTech Innovations',
    rating: 5,
    category: 'client',
  },
]

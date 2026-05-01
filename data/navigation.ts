export interface NavLink {
  label: string
  href: string
}

export interface FooterLinkGroup {
  title: string
  links: NavLink[]
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact Us', href: '/contact' },
]

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Team', href: '/about#team' },
      { label: 'Our Journey', href: '/about#timeline' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Job Marketing Services', href: '/services#job-marketing' },
      { label: 'Placement Services', href: '/services#placement-services' },
      { label: 'Domestic Placement', href: '/services#domestic-placement' },
      { label: 'Digital Marketing', href: '/services#digital-marketing' },
      { label: 'Software Development', href: '/services#software-services' },
      { label: 'Cloud Modernization', href: '/services#cloud-modernization' },
      { label: 'Enterprise Consulting', href: '/services#enterprise-consulting' },
      { label: 'GCC Services', href: '/services#gcc-services' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Technology', href: '/industries#technology' },
      { label: 'Finance & Banking', href: '/industries#finance-banking' },
      { label: 'Healthcare', href: '/industries#healthcare' },
      { label: 'Retail & E-Commerce', href: '/industries#retail-ecommerce' },
      { label: 'Manufacturing', href: '/industries#manufacturing' },
      { label: 'GCCs', href: '/industries#gccs' },
    ],
  },
  {
    title: 'Careers',
    links: [
      { label: 'OPT Consultant Opportunities', href: '/careers#opt' },
      { label: 'US Placement', href: '/careers#us-placement' },
      { label: 'India Placement', href: '/careers#india-placement' },
      { label: 'Apply Now', href: '/careers#apply' },
    ],
  },
]

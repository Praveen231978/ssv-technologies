export interface StatItem {
  id: string
  value: number
  suffix: string
  label: string
  icon?: string
}

export const stats: StatItem[] = [
  {
    id: 'placements',
    value: 500,
    suffix: '+',
    label: 'Successful Placements',
    icon: 'Users',
  },
  {
    id: 'clients',
    value: 50,
    suffix: '+',
    label: 'Clients Served',
    icon: 'Building2',
  },
  {
    id: 'experience',
    value: 8,
    suffix: '+',
    label: 'Years of Experience',
    icon: 'Calendar',
  },
  {
    id: 'satisfaction',
    value: 98,
    suffix: '%',
    label: 'Satisfaction Rate',
    icon: 'Star',
  },
]

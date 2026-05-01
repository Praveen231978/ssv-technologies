import { z } from 'zod'

export const SERVICE_IDS = [
  'job-marketing',
  'placement-services',
  'domestic-placement',
  'digital-marketing',
  'software-services',
  'cloud-modernization',
  'enterprise-consulting',
  'gcc-services',
] as const

export type ServiceId = (typeof SERVICE_IDS)[number]

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.enum(SERVICE_IDS, {
    required_error: 'Please select a service',
    invalid_type_error: 'Please select a valid service',
  }),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export const applicationFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  location: z.string().min(2, 'Please enter your location'),
  visaStatus: z.enum(['opt', 'h1b', 'green-card', 'us-citizen', 'india-based'], {
    required_error: 'Please select your visa status',
  }),
  yearsExperience: z
    .number({ invalid_type_error: 'Please enter a valid number' })
    .min(0, 'Years of experience cannot be negative')
    .max(50, 'Please enter a valid number of years'),
  techStack: z.string().min(2, 'Please describe your primary technology stack'),
  resume: z
    .instanceof(File, { message: 'Please upload your resume' })
    .refine((f) => f.size <= 5_000_000, 'Resume must be under 5 MB'),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
export type ApplicationFormData = z.infer<typeof applicationFormSchema>

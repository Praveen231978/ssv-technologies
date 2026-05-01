import { NextRequest, NextResponse } from 'next/server'

const MAX_FILE_SIZE = 5_000_000 // 5 MB
const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
]

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    // Extract text fields
    const fullName = formData.get('fullName')
    const email = formData.get('email')
    const phone = formData.get('phone')
    const location = formData.get('location')
    const visaStatus = formData.get('visaStatus')
    const yearsExperienceRaw = formData.get('yearsExperience')
    const techStack = formData.get('techStack')
    const resume = formData.get('resume')

    // Basic required field validation
    const missingFields: string[] = []
    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      missingFields.push('fullName')
    }
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      missingFields.push('email')
    }
    if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
      missingFields.push('phone')
    }
    if (!location || typeof location !== 'string' || location.trim().length < 2) {
      missingFields.push('location')
    }
    if (!visaStatus || typeof visaStatus !== 'string') {
      missingFields.push('visaStatus')
    }
    if (!techStack || typeof techStack !== 'string' || techStack.trim().length < 2) {
      missingFields.push('techStack')
    }

    const yearsExperience = Number(yearsExperienceRaw)
    if (isNaN(yearsExperience) || yearsExperience < 0 || yearsExperience > 50) {
      missingFields.push('yearsExperience')
    }

    if (missingFields.length > 0) {
      return NextResponse.json(
        { error: 'Validation failed', fields: missingFields },
        { status: 400 },
      )
    }

    // Validate resume file
    if (!resume || !(resume instanceof File)) {
      return NextResponse.json(
        { error: 'Resume file is required' },
        { status: 400 },
      )
    }

    if (resume.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { error: 'Resume file must be under 5 MB' },
        { status: 400 },
      )
    }

    if (!ALLOWED_MIME_TYPES.includes(resume.type)) {
      return NextResponse.json(
        { error: 'Resume must be a PDF, DOC, or DOCX file' },
        { status: 400 },
      )
    }

    // Log the submission (replace with storage + email service in production)
    console.log('Application form submission:', {
      fullName,
      email,
      phone,
      location,
      visaStatus,
      yearsExperience,
      techStack,
      resumeFileName: resume.name,
      resumeSize: resume.size,
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}

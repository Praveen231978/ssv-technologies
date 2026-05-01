import { SectionHeading } from '@/components/ui/SectionHeading'
import { LeaderCard } from '@/components/ui/LeaderCard'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { teamMembers } from '@/data/team'

export function LeadershipTeam() {
  return (
    <section
      className="bg-white py-20 md:py-28"
      aria-labelledby="leadership-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection direction="up">
          <SectionHeading
            id="leadership-heading"
            title="Our Leadership Team"
            subtitle="Experienced professionals dedicated to delivering exceptional outcomes for every client and candidate."
            align="center"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <AnimatedSection key={member.id} direction="up" delay={index * 0.1}>
              <LeaderCard
                name={member.name}
                title={member.title}
                bio={member.bio}
                photoUrl={member.photoUrl}
                linkedinUrl={member.linkedinUrl}
                className="h-full"
              />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

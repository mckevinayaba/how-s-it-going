import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { TeamMemberCard } from '@/components/team/TeamMemberCard'
import { teamMembers } from '@/data/team'

export function About() {
  return (
    <>
      {/* Philosophy */}
      <section className="bg-warm py-12 sm:py-20">
        <div className="container-page max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
            About HappyMe Health
          </p>
          <h1 className="mt-3 text-balance font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl">
            We believe good food can heal.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Not in a prescriptive medical sense, but in the way that cooking
            with intention and choosing ingredients with purpose quietly
            shapes the health of our homes over time.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our mission"
            heading="Healthier, longer lives through everyday choices"
            intro="To empower communities to live healthier, longer lives by addressing chronic disease challenges through accessible health products, education, and compassionate outreach."
          />
        </div>
      </section>

      {/* History */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="Our history"
            heading="This brand was born inside a family kitchen"
          />
          <p className="text-base leading-relaxed text-muted">
            HappyMe Health started as a personal response to chronic
            illness. A father living with hypertension. A sister growing up
            with type 1 diabetes. A grandmother lost to stroke. These were
            not statistics. They were people at a table, navigating health
            without always having the right tools, knowledge, or access to
            proper care. That experience became the engine behind HappyMe
            Health.
          </p>
        </div>
      </section>

      {/* Team */}
      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="Our team" heading="The people behind HappyMe Health" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Future plans + CTA */}
      <section className="bg-green-800 py-16 sm:py-24">
        <div className="container-page mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl text-white sm:text-4xl">
            Building toward more homes and more communities
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85">
            As HappyMe Health grows, our plan stays the same: better everyday
            products for the home, and practical, documented outreach for
            communities with limited access to care.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/shop" variant="inverse" size="lg">
              Shop products
            </Button>
            <Button to="/impact" variant="inverse-outline" size="lg">
              See our impact
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

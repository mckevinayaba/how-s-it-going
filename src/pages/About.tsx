import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { TeamMemberCard } from '@/components/team/TeamMemberCard'
import { teamMembers } from '@/data/team'
import { usePageMeta } from '@/hooks/usePageMeta'

type Pillar = {
  eyebrow: string
  title: string
  body: string
}

const pillars: Pillar[] = [
  {
    eyebrow: 'Our',
    title: 'Philosophy',
    body: 'At HappyMe Health, we believe good food can heal. Our philosophy is to use simple, sustainable nutrition as a transformative tool to control blood sugar, manage blood pressure, and help our community live healthier lives.',
  },
  {
    eyebrow: 'Our',
    title: 'Mission',
    body: 'To empower communities to live healthier, longer lives by addressing chronic disease challenges through accessible health products, education, and compassionate outreach.',
  },
  {
    eyebrow: 'Our',
    title: 'Impact',
    body: 'We close the gap in healthcare access with free awareness campaigns in underserved areas, early diagnosis for diabetes, hypertension and breast cancer, training for local medical staff, and first aid kits for communities with minimal infrastructure.',
  },
  {
    eyebrow: 'Our',
    title: 'Future Plans',
    body: 'We are expanding screening programmes to more underserved and climate-vulnerable communities, partnering to scale training and kit distribution, and building a network of local volunteer health advocates for lasting impact.',
  },
]

export function About() {
  usePageMeta(
    'About | HappyMe Health',
    'Meet the HappyMe Health team and learn our philosophy, mission, and history — a brand born inside a family kitchen and built for healthier homes and communities.',
  )
  return (
    <>
      {/* Philosophy hero */}
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

      {/* Four pillars — Philosophy · Mission · Impact · Future Plans */}
      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-700">
              What we stand for
            </p>
            <h2 className="mt-3 font-serif text-3xl text-charcoal sm:text-4xl">
              A premium wellness brand rooted in family and community
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-x-14 gap-y-14 sm:mt-16 md:grid-cols-2 lg:gap-x-20 lg:gap-y-20">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="relative pt-6">
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-px w-16 bg-[#B98A4E]"
                />
                <p
                  className="font-serif italic text-3xl leading-none text-[#B98A4E] sm:text-[2.25rem]"
                  style={{ fontFamily: '"Fraunces", "Playfair Display", serif' }}
                >
                  {pillar.eyebrow}
                </p>
                <h3 className="mt-2 font-serif text-4xl uppercase tracking-tight text-charcoal sm:text-5xl">
                  {pillar.title}
                </h3>
                <p className="mt-5 max-w-[46ch] text-[0.98rem] leading-relaxed text-muted">
                  {pillar.body}
                </p>
              </article>
            ))}
          </div>
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

      {/* CTA */}
      <section className="bg-green-800 py-16 sm:py-24">
        <div className="container-page mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl text-white sm:text-4xl">
            Build a healthier home with us
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85">
            Shop products crafted for everyday wellness, or support the
            outreach that carries this mission into communities that need it
            most.
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

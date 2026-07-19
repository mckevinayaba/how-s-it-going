import { Button } from '@/components/ui/Button'
import { SectionHeading } from '@/components/ui/SectionHeading'
import sallyAlbum from '@/assets/sally-impact-album.png.asset.json'
import { PillarCard } from '@/components/impact/PillarCard'
import { ProjectStoryCard } from '@/components/impact/ProjectStoryCard'
import { InsightCard } from '@/components/impact/InsightCard'
import { ImpactSupportCard } from '@/components/impact/ImpactSupportCard'
import { ReportCard } from '@/components/impact/ReportCard'
import { usePageMeta } from '@/hooks/usePageMeta'
import {
  impactPillars,
  projectStories,
  fieldInsights,
  impactSupportOptions,
  impactReports,
} from '@/data/impact'

export function Impact() {
  usePageMeta(
    'Impact | HappyMe Health',
    "HappyMe Health's impact work: community health awareness, clinical screening, and outreach in Buea Bomaka and Pendamboko. See documented results and support the next outreach.",
  )
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-warm py-12 sm:py-20 lg:py-24">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
              HappyMe Health Impact
            </p>
            <h1 className="mt-3 text-balance font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl">
              Health in community, not only at home.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              HappyMe Health’s impact work focuses on practical community
              health outreach, including awareness sessions, clinical
              examinations, basic supply support, and volunteer capacity
              building in communities with limited access to care.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/support" size="lg">
                Support outreach
              </Button>
              <Button to="#reports" variant="outline" size="lg">
                View impact reports
              </Button>
            </div>
          </div>

          <OutreachHeroScene className="aspect-[4/5] w-full shadow-lift lg:aspect-[5/6]" />
        </div>
      </section>

      {/* 2. Impact pillars */}
      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading eyebrow="What we do" heading="What our outreach focuses on" />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactPillars.map((pillar) => (
              <PillarCard key={pillar.title} pillar={pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Documented work */}
      <section className="bg-green-700 py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading tone="light" eyebrow="Documented work" heading="Where we have worked" />
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {projectStories.map((story) => (
              <ProjectStoryCard key={story.slug} story={story} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lessons from the field */}
      <section className="bg-warm py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Lessons from the field"
            heading="What the reports taught us"
            intro="The reports show something important. Communities are willing to show up when health work reaches them properly. The barriers are often practical, not emotional."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {fieldInsights.map((insight) => (
              <InsightCard key={insight.title} insight={insight} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Support options */}
      <section className="bg-oat py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Get involved"
            heading="Support the next outreach"
            intro="If you want to help, support specific parts of the work. This makes every contribution clearer, more practical, and easier to report."
          />
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactSupportOptions.map((option) => (
              <ImpactSupportCard key={option.slug} option={option} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Impact reports */}
      <section id="reports" className="scroll-mt-20 bg-warm py-16 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Transparency"
            heading="Impact reports"
            intro="We are building a transparent reporting culture. As HappyMe Health grows, every outreach activity should be documented with location, date, target, number reached, lessons learned, and support needed."
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {impactReports.map((report) => (
              <ReportCard key={report.slug} report={report} />
            ))}
          </div>

          <div className="mt-8 rounded-xl2 border border-dashed border-line bg-oat p-6 sm:p-8">
            <h3 className="font-serif text-lg text-charcoal">More reports coming soon</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              HappyMe Health is building a transparent reporting culture. As
              more outreach reports are organised and reviewed, they will be
              added here with clear project summaries, outcomes, lessons, and
              support needs.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-green-800 py-16 sm:py-24">
        <div className="container-page mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl text-white sm:text-4xl">
            Help us take practical health outreach further.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/85">
            HappyMe Health is building a model where better products for the
            home sit beside real outreach in communities that need care,
            education, screening, and support.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/support" variant="inverse" size="lg">
              Support outreach
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Partner with us
            </Button>
            <Button to="/shop" variant="inverse-outline" size="lg">
              Shop products
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

import type { ReactNode } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import { getImpactReportBySlug } from '@/data/impact'
import { DocumentIcon } from '@/components/icons'
import { usePageMeta } from '@/hooks/usePageMeta'

function ReportSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-8">
      <h2 className="font-serif text-xl text-charcoal">{title}</h2>
      {children}
    </div>
  )
}

export function ReportDetail() {
  const { slug } = useParams<{ slug: string }>()
  const report = slug ? getImpactReportBySlug(slug) : undefined

  usePageMeta(
    report ? `${report.title} | HappyMe Health` : 'Impact Report | HappyMe Health',
    report?.overview,
  )

  if (!report) {
    return <Navigate to="/impact" replace />
  }

  return (
    <div className="py-12 sm:py-16">
      <div className="container-page max-w-3xl">
        <Link
          to="/impact#reports"
          className="inline-flex items-center gap-2 text-sm font-medium text-green-700 hover:text-green-800"
        >
          &larr; Back to Impact
        </Link>

        <span className="mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-700">
          <DocumentIcon className="h-6 w-6" strokeWidth={1.6} />
        </span>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-green-700">
          Impact report
        </p>
        <h1 className="mt-3 text-balance font-serif text-3xl text-charcoal sm:text-4xl">
          {report.title}
        </h1>
        <p className="mt-3 text-base text-muted">{report.subtitle}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {report.tags.map((tag) => (
            <li key={tag} className="rounded-pill bg-oat px-3 py-1 text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>

        {/* Overview */}
        <ReportSection title="Overview">
          <p className="mt-3 text-base leading-relaxed text-muted">{report.overview}</p>
        </ReportSection>

        {/* Key metric */}
        <ReportSection title="Key metric">
          <div className="mt-3 rounded-xl2 bg-green-700 p-6 shadow-card sm:p-7">
            <p className="font-serif text-2xl text-white sm:text-3xl">{report.keyMetric}</p>
          </div>
        </ReportSection>

        {/* What happened */}
        <ReportSection title="What happened">
          <ul className="mt-3 space-y-2">
            {report.whatHappened.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-500" />
                {item}
              </li>
            ))}
          </ul>
        </ReportSection>

        {/* Challenges */}
        <ReportSection title="Challenges">
          <ul className="mt-3 space-y-2">
            {report.challenges.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                {item}
              </li>
            ))}
          </ul>
        </ReportSection>

        {/* Support needed */}
        <ReportSection title="Support needed">
          <ul className="mt-3 space-y-2">
            {report.supportNeeded.map((item) => (
              <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-700" />
                {item}
              </li>
            ))}
          </ul>
        </ReportSection>

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line pt-8">
          <button
            type="button"
            disabled
            title="Download coming soon"
            className="cursor-not-allowed rounded-pill border border-line px-6 py-3 text-sm font-medium text-muted opacity-70"
          >
            Download coming soon
          </button>
          <Button to="/support" size="lg">
            Support the next outreach
          </Button>
        </div>
      </div>
    </div>
  )
}

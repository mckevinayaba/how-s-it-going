import { Link } from 'react-router-dom'
import type { ImpactReport } from '@/data/impact'
import { DocumentIcon } from '@/components/icons'
import { OutreachHeroScene } from '@/components/illustrations/ImpactScenes'

export function ReportCard({ report }: { report: ImpactReport }) {
  const metaLine = [report.location, report.date, report.focusArea].filter(Boolean).join(' · ')

  return (
    <div className="flex flex-col overflow-hidden rounded-xl2 bg-white shadow-card ring-1 ring-line transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift">
      {report.image ? (
        <div className="aspect-[16/10] w-full overflow-hidden">
          <img src={report.image} alt={report.title} loading="lazy" className="h-full w-full object-cover" />
        </div>
      ) : (
        <OutreachHeroScene className="aspect-[16/10] w-full" rounded="rounded-none" />
      )}

      <div className="flex flex-1 flex-col p-6">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-700">
          <DocumentIcon className="h-5 w-5" strokeWidth={1.6} />
        </span>
        <h3 className="mt-4 font-serif text-lg text-charcoal">{report.title}</h3>
        <p className="mt-1 text-sm text-muted">{report.subtitle}</p>
        {metaLine && <p className="mt-1 text-xs text-muted">{metaLine}</p>}
        <p className="mt-2 text-xs font-medium text-green-700">{report.keyMetric}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {report.tags.map((tag) => (
            <li key={tag} className="rounded-pill bg-oat px-2.5 py-1 text-xs text-muted">
              {tag}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          <Link
            to={`/impact/reports/${report.slug}`}
            className="inline-flex flex-1 items-center justify-center rounded-pill bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors duration-300 ease-premium hover:bg-green-700"
          >
            View report
          </Link>
          {report.downloadUrl ? (
            <a
              href={report.downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill border border-green-700/30 px-5 py-2.5 text-sm font-medium text-green-700 transition-colors hover:bg-green-700/5"
            >
              Download report
            </a>
          ) : (
            <span
              title="Download coming soon"
              className="inline-flex cursor-not-allowed items-center justify-center rounded-pill border border-line px-5 py-2.5 text-sm font-medium text-muted opacity-70"
            >
              Download coming soon
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

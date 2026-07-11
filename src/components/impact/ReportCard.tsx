import { Link } from 'react-router-dom'
import type { ImpactReport } from '@/data/impact'
import { DocumentIcon } from '@/components/icons'

export function ReportCard({ report }: { report: ImpactReport }) {
  return (
    <div className="flex flex-col rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line transition-all duration-300 ease-premium hover:-translate-y-1 hover:shadow-lift">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-700">
        <DocumentIcon className="h-5 w-5" strokeWidth={1.6} />
      </span>
      <h3 className="mt-4 font-serif text-lg text-charcoal">{report.title}</h3>
      <p className="mt-1 text-sm text-muted">{report.subtitle}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {report.tags.map((tag) => (
          <li key={tag} className="rounded-pill bg-oat px-2.5 py-1 text-xs text-muted">
            {tag}
          </li>
        ))}
      </ul>
      <Link
        to={`/impact/reports/${report.slug}`}
        className="mt-5 inline-flex w-full items-center justify-center rounded-pill bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-colors duration-300 ease-premium hover:bg-green-700"
      >
        View report
      </Link>
    </div>
  )
}

import type { ImpactReport } from '@/data/impact'
import { DocumentIcon } from '@/components/icons'

export function ReportCard({ report }: { report: ImpactReport }) {
  return (
    <div className="flex flex-col rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green-50 text-green-700">
        <DocumentIcon className="h-5 w-5" strokeWidth={1.6} />
      </span>
      <h3 className="mt-4 font-serif text-lg text-charcoal">{report.title}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {report.tags.map((tag) => (
          <li key={tag} className="rounded-pill bg-oat px-2.5 py-1 text-xs text-muted">
            {tag}
          </li>
        ))}
      </ul>
      <button
        type="button"
        disabled
        title="PDF report coming soon"
        className="mt-5 w-full cursor-not-allowed rounded-pill border border-line px-5 py-2.5 text-sm font-medium text-muted opacity-70"
      >
        View report
      </button>
      <p className="mt-2 text-xs text-muted">Report PDF coming soon</p>
    </div>
  )
}

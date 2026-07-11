import type { SupportOption } from '@/types'
import { Link } from 'react-router-dom'

export function SupportCard({ option }: { option: SupportOption }) {
  return (
    <div className="flex flex-col rounded-xl2 bg-white p-6 shadow-card ring-1 ring-line">
      <h3 className="font-serif text-lg text-charcoal">{option.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {option.description}
      </p>
      <Link
        to={`/support#${option.slug}`}
        className="mt-4 text-sm font-medium text-green-700 hover:text-green-800"
      >
        Learn more &rarr;
      </Link>
    </div>
  )
}

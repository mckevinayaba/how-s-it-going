import type { ProjectStory } from '@/data/impact'
import { CheckBadgeIcon } from '@/components/icons'

export function ProjectStoryCard({ story }: { story: ProjectStory }) {
  return (
    <div className="rounded-xl2 bg-white p-7 shadow-lift ring-1 ring-line sm:p-8">
      <span className="inline-block rounded-pill bg-red-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-600">
        {story.location}
      </span>
      <h3 className="mt-4 font-serif text-xl text-charcoal">{story.title}</h3>
      <p className="mt-3 font-serif text-2xl text-green-700 sm:text-3xl">{story.metric}</p>
      <p className="mt-4 text-sm leading-relaxed text-muted">{story.body}</p>
      <div className="mt-5 flex items-center gap-2 border-t border-line pt-4 text-xs font-medium text-green-700">
        <CheckBadgeIcon className="h-4 w-4" strokeWidth={1.8} />
        {story.proofNote}
      </div>
    </div>
  )
}

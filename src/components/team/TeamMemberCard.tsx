import type { TeamMember } from '@/types'
import { PortraitPlaceholder } from '@/components/team/PortraitPlaceholder'

export function TeamMemberCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <div className="overflow-hidden rounded-xl2 bg-white shadow-card ring-1 ring-line">
      {member.photo ? (
        <img
          src={member.photo}
          alt={`Portrait of ${member.name}`}
          className="aspect-[4/5] w-full object-cover object-top bg-white"
          loading="lazy"
        />
      ) : (
        <PortraitPlaceholder name={member.name} index={index} className="aspect-[4/5] w-full" />
      )}
      <div className="p-6">
        <h3 className="font-serif text-lg text-charcoal">{member.name}</h3>
        <p className="text-xs font-semibold uppercase tracking-wide text-green-700">{member.role}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{member.bio}</p>
      </div>
    </div>
  )
}

import type { TeamMember } from '@/types'

// No photo field is set for any team member below. TeamMemberCard falls back
// to a premium PortraitPlaceholder avatar in that case. This is deliberate:
// keep placeholders until the owner supplies (or approves) real team photos —
// do not substitute a low quality or synthetic photo in the meantime.

export const teamMembers: TeamMember[] = [
  {
    name: 'Sally Njoh',
    role: 'CEO and Co Founder',
    bio: 'Sally Njoh leads HappyMe Health with a clear personal mission to use nutrition, awareness, and practical outreach to help individuals and families make better everyday health choices.',
  },
  {
    name: 'Norbel Abanumben',
    role: 'CTO',
    bio: 'Norbel Abanumben builds and protects the digital foundation of HappyMe Health, making sure the platform is safe, secure, accessible, and ready to grow responsibly.',
  },
  {
    name: 'Idris Tabi',
    role: 'COO',
    bio: 'Idris Tabi oversees operations and ensures HappyMe Health programmes run with discipline, accountability, and real results in the community.',
  },
  {
    name: 'Ngomba Njoh',
    role: 'CFO',
    bio: 'Ngomba Njoh manages the financial foundation of HappyMe Health with a focus on stability, compliance, transparency, and long term trust.',
  },
]

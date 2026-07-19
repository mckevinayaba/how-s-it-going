import type { TeamMember } from '@/types'
import sallyPhoto from '@/assets/team-sally.jpg'
import norbelPhoto from '@/assets/team-norbel.jpg'
import idrisPhoto from '@/assets/team-idris.jpg'
import ngombaPhoto from '@/assets/team-ngomba.jpg'

export const teamMembers: TeamMember[] = [
  {
    name: 'Sally Njoh',
    role: 'CEO and Co Founder',
    bio: 'Sally Njoh leads HappyMe Health with a clear personal mission to use nutrition, awareness, and practical outreach to help individuals and families make better everyday health choices.',
    photo: sallyPhoto,
  },
  {
    name: 'Norbel Abanumben',
    role: 'CTO',
    bio: 'Norbel Abanumben builds and protects the digital foundation of HappyMe Health, making sure the platform is safe, secure, accessible, and ready to grow responsibly.',
    photo: norbelPhoto,
  },
  {
    name: 'Idris Tabi',
    role: 'COO',
    bio: 'Idris Tabi oversees operations and ensures HappyMe Health programmes run with discipline, accountability, and real results in the community.',
    photo: idrisPhoto,
  },
  {
    name: 'Ngomba Njoh',
    role: 'CFO',
    bio: 'Ngomba Njoh manages the financial foundation of HappyMe Health with a focus on stability, compliance, transparency, and long term trust.',
    photo: ngombaPhoto,
  },
]

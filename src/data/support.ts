import type { SupportOption } from '@/types'

export const supportOptions: SupportOption[] = [
  {
    slug: 'sponsor-a-screening-day',
    title: 'Sponsor a screening day',
    description:
      'Help cover basic costs for clinical examinations and health education in one community.',
    suggestedAmounts: [25, 75, 150],
  },
  {
    slug: 'first-aid-kits-and-supplies',
    title: 'Support first aid kits and supplies',
    description:
      'Contribute to kits and consumables that make basic care possible where formal health facilities are limited.',
    suggestedAmounts: [15, 40, 90],
  },
  {
    slug: 'transport-and-logistics',
    title: 'Help with transport and logistics',
    description:
      'Support transport for coordinators, volunteers, and materials to reach project sites in challenging conditions.',
    suggestedAmounts: [20, 50, 120],
  },
]

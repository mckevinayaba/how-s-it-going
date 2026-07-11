import type { ImpactMetric } from '@/types'

export const impactMetrics: ImpactMetric[] = [
  {
    location: 'Buea Bomaka',
    headline: 'Free clinical breast examinations',
    detail:
      '52 people received free clinical breast examinations during the activity in Buea Bomaka, out of a target of 100.',
    stat: '52 / 100',
  },
  {
    location: 'Pendamboko',
    headline: 'GBSS Pendamboko health club awareness session',
    detail:
      'All 30 targeted students in the GBSS Pendamboko health club attended the breast cancer awareness session. The project recorded an 83.3 percent success rate.',
    stat: '83.3%',
  },
  {
    location: 'Outreach focus',
    headline: 'Education, screening, and supplies',
    detail:
      'Health education, screening days, simple supplies, and support for local health teams and volunteer coordinators.',
    stat: 'Ongoing',
  },
]

export const impactFocusAreas: string[] = [
  'Health awareness sessions on breast health and chronic disease.',
  'Free clinical examination days run with local medical staff.',
  'Simple supplies including sanitary products and first aid items.',
  'Support to school health clubs and community health groups.',
]

export const impactLocations = [
  {
    name: 'Buea Bomaka',
    summary:
      'A breast cancer awareness and clinical examination activity where 52 people received free clinical examinations out of a target of 100.',
  },
  {
    name: 'Pendamboko',
    summary:
      'A breast cancer awareness session with the GBSS Pendamboko health club where all 30 targeted students attended and the project recorded an 83.3 percent success rate.',
  },
]

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

export type PillarIcon = 'awareness' | 'screening' | 'supplies' | 'capacity'

export interface ImpactPillar {
  title: string
  description: string
  icon: PillarIcon
}

export const impactPillars: ImpactPillar[] = [
  {
    title: 'Health awareness',
    description:
      'We support awareness sessions on breast health, chronic disease, and everyday prevention so families can ask better questions and act earlier.',
    icon: 'awareness',
  },
  {
    title: 'Screening and examinations',
    description:
      'We help organise community based screening and clinical examination activities with local health workers and volunteers.',
    icon: 'screening',
  },
  {
    title: 'Simple supplies',
    description:
      'We support basic supplies such as sanitary products, first aid items, screening materials, and tools needed for community outreach.',
    icon: 'supplies',
  },
  {
    title: 'Local capacity',
    description:
      'We work with volunteers, school health clubs, and local teams so care does not disappear when one event ends.',
    icon: 'capacity',
  },
]

export interface ProjectStory {
  slug: string
  location: string
  title: string
  metric: string
  body: string
  proofNote: string
}

export const projectStories: ProjectStory[] = [
  {
    slug: 'buea-bomaka',
    location: 'Buea Bomaka',
    title: 'Breast cancer awareness and clinical examination activity',
    metric: '52 people examined out of a target of 100',
    body: 'In Buea Bomaka, HappyMe Health supported a breast cancer awareness and clinical examination activity. The report recorded 52 beneficiaries reached through free clinical examinations, representing 52 percent of the 100 person target.',
    proofNote: 'Documented in project report.',
  },
  {
    slug: 'gbss-pendamboko',
    location: 'GBSS Pendamboko',
    title: 'Breast cancer awareness session with school health club',
    metric: '30 targeted students reached, 83.3 percent project success rate',
    body: 'At GBSS Pendamboko, HappyMe Health supported a breast cancer awareness intervention focused on sensitisation, volunteer mobilisation, administrative clearance, sanitary product distribution, and student participation. All 30 targeted health club students were present, and the project recorded an 83.3 percent success rate.',
    proofNote: 'Documented in project report.',
  },
]

export type InsightIcon = 'transport' | 'materials' | 'people' | 'followup'

export interface FieldInsight {
  title: string
  description: string
  icon: InsightIcon
}

export const fieldInsights: FieldInsight[] = [
  {
    title: 'Transport matters',
    description:
      'Heavy rain, bad roads, and long travel conditions can delay or limit outreach. Transport support directly affects whether teams arrive on time and reach more people.',
    icon: 'transport',
  },
  {
    title: 'Materials matter',
    description:
      'Outreach depends on practical supplies such as screening materials, chairs, canopies, sanitary products, first aid items, and basic tools.',
    icon: 'materials',
  },
  {
    title: 'People matter',
    description:
      'Volunteer support and local mobilisation shape attendance, trust, and follow up. A small team can carry a heavy workload without enough support.',
    icon: 'people',
  },
  {
    title: 'Follow up matters',
    description:
      'Awareness is only the first step. Screening results, referrals, education, and repeat contact are what turn one day of outreach into longer term health value.',
    icon: 'followup',
  },
]

export type SupportIcon = 'screening' | 'supplies' | 'transport' | 'partner'

export interface ImpactSupportOption {
  slug: string
  title: string
  description: string
  ctaLabel: string
  icon: SupportIcon
}

export const impactSupportOptions: ImpactSupportOption[] = [
  {
    slug: 'sponsor-a-screening-day',
    title: 'Sponsor a screening day',
    description:
      'Help cover basic costs for clinical examinations, health education, coordination, and community mobilisation.',
    ctaLabel: 'Sponsor a screening day',
    icon: 'screening',
  },
  {
    slug: 'support-supplies-and-kits',
    title: 'Support supplies and kits',
    description:
      'Contribute to first aid kits, sanitary products, screening materials, and consumables needed during outreach.',
    ctaLabel: 'Support supplies',
    icon: 'supplies',
  },
  {
    slug: 'help-with-transport',
    title: 'Help with transport',
    description:
      'Support transport for coordinators, volunteers, and materials to reach communities where roads, distance, and weather create barriers.',
    ctaLabel: 'Support transport',
    icon: 'transport',
  },
  {
    slug: 'partner-on-a-programme',
    title: 'Partner on a programme',
    description:
      'For companies, clinics, diaspora groups, NGOs, and institutions that want to support a larger health outreach programme.',
    ctaLabel: 'Partner with us',
    icon: 'partner',
  },
]

export interface ImpactReport {
  slug: string
  title: string
  tags: string[]
}

export const impactReports: ImpactReport[] = [
  {
    slug: 'buea-bomaka-report',
    title: 'Buea Bomaka Project Report',
    tags: ['Breast cancer awareness', 'Clinical examinations', 'Community outreach'],
  },
  {
    slug: 'pendamboko-report',
    title: 'Pendamboko Project Report',
    tags: ['School health club', 'Breast cancer awareness', 'Student outreach'],
  },
]

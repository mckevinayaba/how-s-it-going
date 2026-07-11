import type { Bundle } from '@/types'

export const bundles: Bundle[] = [
  {
    slug: 'family-health-starter-pack',
    name: 'The Family Health Starter Pack',
    description:
      'Date Sugar, Turmeric, and Tigernuts together for families starting to make more mindful everyday food choices.',
    priceCents: 2699,
    includes: ['Date Sugar (350g)', 'Turmeric (200g)', 'Tigernuts (250g)'],
    image: { tone: 'kitchen', label: 'Family Health Starter Pack' },
  },
  {
    slug: 'parent-care-pack',
    name: 'The Parent Care Pack',
    description:
      'A thoughtful selection for people supporting a parent who is trying to eat more intentionally.',
    priceCents: 2299,
    includes: ['Date Sugar (350g)', 'Turmeric (200g)'],
    image: { tone: 'kitchen', label: 'Parent Care Pack' },
  },
  {
    slug: 'everyday-wellness-trio',
    name: 'The Everyday Wellness Trio',
    description: 'A simple daily use bundle for the household kitchen.',
    priceCents: 2699,
    includes: ['Date Sugar (350g)', 'Turmeric (200g)', 'Tigernuts (250g)'],
    image: { tone: 'kitchen', label: 'Everyday Wellness Trio' },
  },
  {
    slug: 'buy-one-support-one',
    name: 'Buy One, Support One',
    description:
      'A customer buys a product bundle and helps contribute a wellness pack toward a community outreach activity.',
    priceCents: 2999,
    includes: [
      'Family Health Starter Pack',
      '1 wellness pack contributed to community outreach',
    ],
    image: { tone: 'community', label: 'Buy One, Support One' },
    isImpactBundle: true,
  },
]

export function getBundleBySlug(slug: string): Bundle | undefined {
  return bundles.find((bundle) => bundle.slug === slug)
}

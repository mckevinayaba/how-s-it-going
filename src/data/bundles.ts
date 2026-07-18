import type { Bundle } from '@/types'

// Bundle prices are the sum of current 500g bottle prices for their
// component products. priceConfirmed is false until the owner approves a
// final bundle price (e.g. a discount) — until then, the UI shows "Price
// confirmed after order request" instead of a specific discounted number.

export const bundles: Bundle[] = [
  {
    slug: 'family-health-starter-pack',
    name: 'The Family Health Starter Pack',
    description:
      'Date Sugar, Turmeric, and Tigernuts together for individuals and families starting to make more mindful everyday food choices.',
    priceFcfa: 9000,
    priceConfirmed: false,
    includes: ['Date Sugar (500g bottle)', 'Turmeric (500g bottle)', 'Tigernuts (500g bottle)'],
    image: { tone: 'kitchen', label: 'Family Health Starter Pack' },
  },
  {
    slug: 'parent-care-pack',
    name: 'The Parent Care Pack',
    description:
      'A thoughtful selection for people supporting a parent who is trying to eat more intentionally.',
    priceFcfa: 7000,
    priceConfirmed: false,
    includes: ['Date Sugar (500g bottle)', 'Turmeric (500g bottle)'],
    image: { tone: 'kitchen', label: 'Parent Care Pack' },
  },
  {
    slug: 'everyday-wellness-trio',
    name: 'The Everyday Wellness Trio',
    description: 'A simple daily use bundle for the household kitchen.',
    priceFcfa: 9000,
    priceConfirmed: false,
    includes: ['Date Sugar (500g bottle)', 'Turmeric (500g bottle)', 'Tigernuts (500g bottle)'],
    image: { tone: 'kitchen', label: 'Everyday Wellness Trio' },
  },
  {
    slug: 'buy-one-support-one',
    name: 'Buy One, Support One',
    description:
      'A customer buys a product bundle and helps contribute a wellness pack toward a community outreach activity.',
    priceFcfa: 9000,
    priceConfirmed: false,
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

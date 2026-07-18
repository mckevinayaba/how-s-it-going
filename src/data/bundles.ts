import type { Bundle } from '@/types'

// Bundle prices reflect direct client confirmation. Where priceConfirmed is
// false, no final public price has been approved yet — the UI shows "Price
// confirmed after order request" instead of inventing a number.
//
// Family Size Pack internal note (not shown publicly): based on individual
// current bottle prices (Date Sugar 4,000 + Turmeric 3,000 + Tigernuts
// 2,000 FCFA) at 2 bottles each, product value is 18,000 FCFA before any
// approved bundle pricing or delivery adjustment. Confirm the final public
// price with the HappyMe Health owner before showing a fixed price.

export const bundles: Bundle[] = [
  {
    slug: 'starter-wellness-pack',
    name: 'Starter Wellness Pack',
    description:
      'The easiest way to begin. Date Sugar, Turmeric, and Tigernuts in one thoughtful starter pack for individuals and families making more mindful everyday food choices.',
    priceFcfa: 10000,
    priceConfirmed: true,
    includes: ['Date Sugar (500g bottle)', 'Turmeric (500g bottle)', 'Tigernuts (500g bottle)'],
    basketLabel: 'Includes Date Sugar, Turmeric, Tigernuts',
    requestLabel: 'Request starter pack',
    image: { tone: 'kitchen', label: 'Starter Wellness Pack' },
  },
  {
    slug: 'family-size-pack',
    name: 'Family Size Pack',
    description:
      'A larger household bundle for individuals and families who want to keep nourishing staples available at home.',
    priceFcfa: 18000,
    priceConfirmed: false,
    includes: [
      'Date Sugar (2 x 500g bottle)',
      'Turmeric (2 x 500g bottle)',
      'Tigernuts (2 x 500g bottle)',
    ],
    basketLabel: '2 bottles each',
    requestLabel: 'Request family size pack',
    image: { tone: 'kitchen', label: 'Family Size Pack' },
  },
  {
    slug: 'buy-one-support-one',
    name: 'Buy One, Support One',
    description:
      'A customer buys a product bundle and helps contribute a wellness pack toward a community outreach activity. Details are confirmed after the order request.',
    priceFcfa: 0,
    priceConfirmed: false,
    includes: ['Starter Wellness Pack', '1 wellness pack contributed to community outreach'],
    basketLabel: 'Starter Wellness Pack + 1 wellness pack contributed',
    image: { tone: 'community', label: 'Buy One, Support One' },
    isImpactBundle: true,
  },
]

export function getBundleBySlug(slug: string): Bundle | undefined {
  return bundles.find((bundle) => bundle.slug === slug)
}

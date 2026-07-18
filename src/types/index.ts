export type ProductCategory = 'sweeteners' | 'spices' | 'snacks'

/** A specific package size and its price in FCFA. */
export interface PackageOption {
  label: string
  priceFcfa: number
}

export interface Product {
  slug: string
  name: string
  category: ProductCategory
  shortDescription: string
  longDescription: string
  /** The package currently available for order (real stock today). */
  currentPackage: PackageOption
  /**
   * A future packaging direction (e.g. pouches) that is not yet available
   * to order. Shown as "coming soon" — never orderable via basket.
   */
  plannedPackage?: PackageOption
  image: PlaceholderSpec
  gallery: PlaceholderSpec[]
  story: string
  safeBenefits: string[]
  howToUse: string[]
  relatedSlugs: string[]
}

export interface Bundle {
  slug: string
  name: string
  description: string
  /**
   * Price in FCFA. When priceConfirmed is false this is an internal
   * reference value only (e.g. a sum of component prices) and must not be
   * shown to customers as a real price — the UI shows "Price confirmed
   * after order request" instead.
   */
  priceFcfa: number
  /** False until the owner approves a final bundle price/discount. */
  priceConfirmed: boolean
  includes: string[]
  /** Short descriptor shown on the basket line item, e.g. "2 bottles each". */
  basketLabel: string
  /** Label for the primary request button. Defaults to "Request bundle". */
  requestLabel?: string
  image: PlaceholderSpec
  isImpactBundle?: boolean
}

export interface ImpactMetric {
  location: string
  headline: string
  detail: string
  stat: string
}

export interface SupportOption {
  slug: string
  title: string
  description: string
  suggestedAmounts: number[]
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo?: string
}

export interface LearnTopic {
  slug: string
  title: string
  excerpt: string
}

export interface PlaceholderSpec {
  tone: 'product' | 'kitchen' | 'founder' | 'community'
  label: string
}

export interface CartLineItem {
  kind: 'product' | 'bundle'
  slug: string
  name: string
  /** Price in FCFA (not cents — FCFA has no subdivision). */
  priceFcfa: number
  /**
   * False when this line's final price is not yet confirmed (e.g. the
   * Family Size Pack). Undefined/true means the price is confirmed.
   * Unconfirmed lines are excluded from subtotal/total calculations.
   */
  priceConfirmed?: boolean
  quantity: number
  image: PlaceholderSpec
  variantLabel?: string
}

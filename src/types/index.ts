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
  /** Estimated value in FCFA (sum of current component prices). */
  priceFcfa: number
  /** False until the owner approves a final bundle price/discount. */
  priceConfirmed: boolean
  includes: string[]
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
  quantity: number
  image: PlaceholderSpec
  variantLabel?: string
}

export type ProductCategory = 'sweeteners' | 'spices' | 'snacks'

export interface ProductVariant {
  label: string
  priceCents: number
}

export interface Product {
  slug: string
  name: string
  category: ProductCategory
  shortDescription: string
  longDescription: string
  priceCents: number
  packSize: string
  variants: ProductVariant[]
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
  priceCents: number
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
  priceCents: number
  quantity: number
  image: PlaceholderSpec
  variantLabel?: string
}

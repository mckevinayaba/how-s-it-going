import type { PlaceholderSpec } from '@/types'
import dateSugarImg from '@/assets/product-date-sugar.jpg'
import turmericImg from '@/assets/product-turmeric.jpg'
import tigernutsImg from '@/assets/product-tigernuts.jpg'
import heroImg from '@/assets/hero-scene.jpg'

const IMG_BY_SLUG: Record<string, string> = {
  'date-sugar': dateSugarImg,
  turmeric: turmericImg,
  tigernuts: tigernutsImg,
}

interface ProductVisualProps {
  slug: string
  spec: PlaceholderSpec
  className?: string
  rounded?: string
}

export function ProductVisual({ slug, spec, className = '', rounded = 'rounded-card' }: ProductVisualProps) {
  const src = spec.tone === 'kitchen' ? heroImg : IMG_BY_SLUG[slug] ?? dateSugarImg
  const alt = spec.label ?? slug

  return (
    <div className={`relative overflow-hidden ${rounded} bg-oat ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

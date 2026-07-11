import type { ComponentType } from 'react'
import type { PlaceholderSpec } from '@/types'
import {
  DateSugarScene,
  TurmericScene,
  TigernutsScene,
  KitchenHeroScene,
} from '@/components/illustrations/ProductScenes'

type SceneComponent = ComponentType<{ className?: string; rounded?: string }>

const SCENE_BY_SLUG: Record<string, SceneComponent> = {
  'date-sugar': DateSugarScene,
  turmeric: TurmericScene,
  tigernuts: TigernutsScene,
}

interface ProductVisualProps {
  slug: string
  spec: PlaceholderSpec
  className?: string
  rounded?: string
}

export function ProductVisual({ slug, spec, className = '', rounded = 'rounded-card' }: ProductVisualProps) {
  const Scene = SCENE_BY_SLUG[slug] ?? DateSugarScene

  if (spec.tone === 'kitchen') {
    return <KitchenHeroScene className={className} rounded={rounded} />
  }

  if (/texture|close-up/i.test(spec.label)) {
    return (
      <div className={`relative overflow-hidden ${rounded} ${className}`}>
        <div className="absolute inset-0 scale-[1.6]">
          <Scene className="h-full w-full" rounded="rounded-none" />
        </div>
      </div>
    )
  }

  return <Scene className={className} rounded={rounded} />
}

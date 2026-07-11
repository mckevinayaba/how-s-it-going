import type { PlaceholderSpec } from '@/types'

const TONE_STYLES: Record<PlaceholderSpec['tone'], string> = {
  product:
    'bg-[radial-gradient(circle_at_30%_25%,#FBF3E7_0%,#EBDFC8_40%,#C9A876_100%)]',
  kitchen:
    'bg-[linear-gradient(135deg,#8A6F55_0%,#5B4636_55%,#2B241D_100%)]',
  founder:
    'bg-[linear-gradient(160deg,#E3D4BB_0%,#B79868_55%,#3A2E22_100%)]',
  community:
    'bg-[linear-gradient(145deg,#D9C9AE_0%,#8E7B5E_45%,#146B34_100%)]',
}

const TONE_TEXT: Record<PlaceholderSpec['tone'], string> = {
  product: 'text-charcoal/70',
  kitchen: 'text-warm/80',
  founder: 'text-charcoal/70',
  community: 'text-white/85',
}

interface PlaceholderImageProps {
  spec: PlaceholderSpec
  className?: string
  rounded?: string
}

export function PlaceholderImage({
  spec,
  className = '',
  rounded = 'rounded-card',
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={spec.label}
      className={`relative overflow-hidden ${rounded} ${TONE_STYLES[spec.tone]} ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07] mix-blend-overlay"
        aria-hidden="true"
      >
        <filter id={`grain-${spec.tone}`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter={`url(#grain-${spec.tone})`} />
      </svg>
      <span
        className={`absolute bottom-3 left-3 rounded-pill bg-black/10 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide backdrop-blur-sm ${TONE_TEXT[spec.tone]}`}
      >
        {spec.label}
      </span>
    </div>
  )
}

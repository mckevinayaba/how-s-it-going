const PALETTES = [
  { from: '#1FA64A', to: '#146B34' },
  { from: '#146B34', to: '#0A3A1C' },
  { from: '#B98A4E', to: '#7A5327' },
  { from: '#E53935', to: '#A32621' },
]

function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function PortraitPlaceholder({
  name,
  index = 0,
  className = '',
}: {
  name: string
  index?: number
  className?: string
}) {
  const palette = PALETTES[index % PALETTES.length]
  const id = `portrait-${index}`

  return (
    <div
      role="img"
      aria-label={`Portrait placeholder for ${name}`}
      className={`relative overflow-hidden rounded-xl2 ${className}`}
    >
      <svg viewBox="0 0 200 200" className="h-full w-full">
        <defs>
          <radialGradient id={id} cx="35%" cy="25%" r="85%">
            <stop offset="0%" stopColor={palette.from} />
            <stop offset="100%" stopColor={palette.to} />
          </radialGradient>
        </defs>
        <rect width="200" height="200" fill={`url(#${id})`} />
        <circle cx="100" cy="118" r="72" fill="#FFFFFF" opacity="0.08" />
        <text
          x="100"
          y="128"
          textAnchor="middle"
          fontFamily="Fraunces, Georgia, serif"
          fontSize="56"
          fill="#FFFFFF"
          opacity="0.95"
        >
          {initials(name)}
        </text>
      </svg>
    </div>
  )
}

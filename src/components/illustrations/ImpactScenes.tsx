import { Leaf } from '@/components/illustrations/ProductScenes'

interface SceneProps {
  className?: string
  rounded?: string
}

function Person({
  x,
  y,
  scale = 1,
  tone = '#146B34',
}: {
  x: number
  y: number
  scale?: number
  tone?: string
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <ellipse cx="0" cy="86" rx="26" ry="7" fill="#3A2E1E" opacity="0.14" />
      <path d="M-22 84C-22 52 -13 30 0 30C13 30 22 52 22 84Z" fill={tone} />
      <circle cx="0" cy="14" r="14" fill="#E7CBAA" />
      <path d="M-14 8C-14 -2 -6 -8 0 -8C6 -8 14 -2 14 8C10 4 6 2 0 2C-6 2 -10 4 -14 8Z" fill="#3A2E1E" />
    </g>
  )
}

export function OutreachHeroScene({ className = '', rounded = 'rounded-card' }: SceneProps) {
  const id = 'otrh'
  return (
    <div
      role="img"
      aria-label="An outdoor community health outreach scene with a canopy, a screening table with a clipboard and supplies, and volunteers present"
      className={`relative overflow-hidden ${rounded} bg-oat ${className}`}
    >
      <svg viewBox="0 0 500 600" className="h-full w-full">
        <defs>
          <radialGradient id={`${id}-bg`} cx="35%" cy="12%" r="95%">
            <stop offset="0%" stopColor="#FFFDF8" />
            <stop offset="55%" stopColor="#EFF3E7" />
            <stop offset="100%" stopColor="#DCE7D6" />
          </radialGradient>
          <linearGradient id={`${id}-ground`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E6D8B9" />
            <stop offset="100%" stopColor="#CBB68C" />
          </linearGradient>
          <linearGradient id={`${id}-canopy`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EFE9D8" />
          </linearGradient>
          <linearGradient id={`${id}-table`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B98A4E" />
            <stop offset="100%" stopColor="#8A6134" />
          </linearGradient>
        </defs>

        <rect width="500" height="600" fill={`url(#${id}-bg)`} />
        <path d="M0 420 Q250 380 500 420 L500 600 L0 600 Z" fill={`url(#${id}-ground)`} />

        {/* canopy */}
        <path d="M40 150 Q250 90 460 150 L460 168 Q250 118 40 168 Z" fill={`url(#${id}-canopy)`} />
        <path d="M60 168 L70 260 M440 168 L430 260" stroke="#B9A67C" strokeWidth="6" strokeLinecap="round" />
        <path d="M170 155 L178 250 M330 155 L322 250" stroke="#B9A67C" strokeWidth="5" strokeLinecap="round" opacity="0.8" />

        {/* screening table */}
        <g transform="translate(150 400)">
          <rect x="0" y="0" width="200" height="16" rx="4" fill={`url(#${id}-table)`} />
          <rect x="12" y="16" width="10" height="70" fill="#6B4726" />
          <rect x="178" y="16" width="10" height="70" fill="#6B4726" />

          {/* clipboard */}
          <g transform="translate(20 -46)">
            <rect x="0" y="0" width="54" height="66" rx="6" fill="#FCFBF7" stroke="#D8CBA8" strokeWidth="2" />
            <rect x="16" y="-6" width="22" height="10" rx="3" fill="#8A6134" />
            <path d="M10 18h34M10 30h34M10 42h22" stroke="#C9BFA6" strokeWidth="2.4" />
            <path d="M10 52 15 57 26 46" stroke="#146B34" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>

          {/* supply box with first aid mark */}
          <g transform="translate(120 -40)">
            <rect x="0" y="0" width="56" height="40" rx="5" fill="#FFFFFF" stroke="#E5E7DA" strokeWidth="2" />
            <rect x="0" y="0" width="56" height="12" rx="5" fill="#E53935" />
            <path d="M24 20h8M28 16v8" stroke="#E53935" strokeWidth="3" strokeLinecap="round" />
          </g>
        </g>

        {/* volunteers */}
        <Person x={110} y={430} scale={1.05} tone="#146B34" />
        <Person x={390} y={434} scale={1.0} tone="#1FA64A" />
        <Person x={250} y={330} scale={0.85} tone="#8A6134" />

        <Leaf x={430} y={230} rotate={20} scale={1} />
        <Leaf x={55} y={210} rotate={-25} scale={0.85} />

        <ellipse cx="250" cy="560" rx="210" ry="18" fill="#3A2E1E" opacity="0.08" />
      </svg>
    </div>
  )
}

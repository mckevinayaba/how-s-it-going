interface SceneProps {
  className?: string
  rounded?: string
}

const WRAP = 'relative overflow-hidden'

function Backdrop({ id }: { id: string }) {
  return (
    <>
      <defs>
        <radialGradient id={`${id}-bg`} cx="32%" cy="22%" r="85%">
          <stop offset="0%" stopColor="#FFFDF8" />
          <stop offset="55%" stopColor="#F7F1E4" />
          <stop offset="100%" stopColor="#E9DEC7" />
        </radialGradient>
        <linearGradient id={`${id}-counter`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EADFC7" />
          <stop offset="100%" stopColor="#D8C9A8" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#${id}-bg)`} />
      <path d="M0 300 Q200 270 400 300 L400 400 L0 400 Z" fill={`url(#${id}-counter)`} />
    </>
  )
}

export function Leaf({ x, y, rotate = 0, scale = 1 }: { x: number; y: number; rotate?: number; scale?: number }) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="M0 0C10 -22 32 -30 48 -26C46 -6 30 12 8 14C3 14 0 8 0 0Z"
        fill="#1FA64A"
        opacity="0.9"
      />
      <path d="M2 2C16 -6 30 -16 46 -25" stroke="#146B34" strokeWidth="1.4" fill="none" opacity="0.6" />
    </g>
  )
}

export function DateSugarScene({ className = '', rounded = 'rounded-card' }: SceneProps) {
  const id = 'dsug'
  return (
    <div
      role="img"
      aria-label="Wooden bowl of date sugar powder beside whole dates on a warm kitchen counter"
      className={`${WRAP} ${rounded} bg-oat ${className}`}
    >
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <Backdrop id={id} />
        <defs>
          <radialGradient id={`${id}-bowl`} cx="40%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#8A6647" />
            <stop offset="100%" stopColor="#5B3F29" />
          </radialGradient>
          <radialGradient id={`${id}-powder`} cx="40%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#D9AE6E" />
            <stop offset="100%" stopColor="#A9773F" />
          </radialGradient>
          <linearGradient id={`${id}-date`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7A4A2C" />
            <stop offset="100%" stopColor="#432712" />
          </linearGradient>
        </defs>

        <ellipse cx="205" cy="322" rx="118" ry="20" fill="#3A2E1E" opacity="0.18" />

        {/* bowl */}
        <path d="M85 250 Q205 300 325 250 L308 300 Q205 335 102 300 Z" fill={`url(#${id}-bowl)`} />
        <ellipse cx="205" cy="250" rx="120" ry="34" fill={`url(#${id}-powder)`} />
        <ellipse cx="205" cy="250" rx="120" ry="34" fill="none" stroke="#7A5230" strokeWidth="3" opacity="0.4" />

        {/* powder texture flecks */}
        {[...Array(22)].map((_, i) => {
          const cx = 120 + ((i * 37) % 170)
          const cy = 238 + ((i * 19) % 22)
          return <circle key={i} cx={cx} cy={cy} r={1.6} fill="#6B4726" opacity={0.35} />
        })}

        {/* whole dates beside bowl */}
        <g>
          <ellipse cx="90" cy="290" rx="22" ry="13" fill={`url(#${id}-date)`} transform="rotate(-12 90 290)" />
          <ellipse cx="122" cy="305" rx="20" ry="12" fill={`url(#${id}-date)`} transform="rotate(8 122 305)" />
          <ellipse cx="300" cy="292" rx="21" ry="12.5" fill={`url(#${id}-date)`} transform="rotate(14 300 292)" />
          <path d="M78 284 Q90 278 102 284" stroke="#C89B63" strokeWidth="1.6" fill="none" opacity="0.7" />
          <path d="M288 286 Q300 280 312 286" stroke="#C89B63" strokeWidth="1.6" fill="none" opacity="0.7" />
        </g>

        <Leaf x={295} y={190} rotate={18} scale={0.9} />
        <Leaf x={70} y={205} rotate={-30} scale={0.7} />
      </svg>
    </div>
  )
}

export function TurmericScene({ className = '', rounded = 'rounded-card' }: SceneProps) {
  const id = 'turm'
  return (
    <div
      role="img"
      aria-label="Turmeric roots beside a bowl of golden turmeric powder on a warm kitchen counter"
      className={`${WRAP} ${rounded} bg-oat ${className}`}
    >
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <Backdrop id={id} />
        <defs>
          <radialGradient id={`${id}-powder`} cx="40%" cy="25%" r="75%">
            <stop offset="0%" stopColor="#F0B23D" />
            <stop offset="100%" stopColor="#C97F16" />
          </radialGradient>
          <radialGradient id={`${id}-bowl`} cx="40%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#8A6647" />
            <stop offset="100%" stopColor="#5B3F29" />
          </radialGradient>
          <linearGradient id={`${id}-root`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#B98A4E" />
            <stop offset="100%" stopColor="#7A5327" />
          </linearGradient>
        </defs>

        <ellipse cx="205" cy="322" rx="118" ry="20" fill="#3A2E1E" opacity="0.18" />

        {/* bowl of powder */}
        <path d="M110 258 Q205 300 300 258 L286 300 Q205 328 124 300 Z" fill={`url(#${id}-bowl)`} />
        <ellipse cx="205" cy="258" rx="95" ry="28" fill={`url(#${id}-powder)`} />
        <ellipse cx="205" cy="258" rx="95" ry="28" fill="none" stroke="#9C6412" strokeWidth="2.5" opacity="0.4" />

        {/* turmeric roots */}
        <path
          d="M70 250C55 230 60 200 85 190C110 180 130 195 128 218C126 238 100 250 85 255C78 257 74 254 70 250Z"
          fill={`url(#${id}-root)`}
        />
        <path
          d="M300 245C290 222 300 195 325 190C348 186 360 208 350 228C342 244 316 254 302 253C300 250 302 248 300 245Z"
          fill={`url(#${id}-root)`}
        />
        {/* cut root cross-section */}
        <g transform="translate(320 205) rotate(18)">
          <ellipse cx="0" cy="0" rx="20" ry="16" fill="#C97F16" />
          <ellipse cx="0" cy="0" rx="13" ry="10" fill="#F0B23D" />
          <ellipse cx="0" cy="0" rx="5" ry="4" fill="#FCD98A" />
        </g>

        <Leaf x={130} y={165} rotate={-15} scale={0.8} />
        <Leaf x={330} y={170} rotate={25} scale={0.65} />
      </svg>
    </div>
  )
}

export function TigernutsScene({ className = '', rounded = 'rounded-card' }: SceneProps) {
  const id = 'tign'
  const nuts = [...Array(26)].map((_, i) => {
    const angle = (i / 26) * Math.PI * 2
    const radius = 46 + ((i * 13) % 34)
    const cx = 205 + Math.cos(angle) * radius
    const cy = 250 + Math.sin(angle) * radius * 0.55
    const r = 9 + ((i * 7) % 5)
    return { cx, cy, r, i }
  })
  return (
    <div
      role="img"
      aria-label="Bowl of tigernuts with a few scattered on a warm kitchen counter"
      className={`${WRAP} ${rounded} bg-oat ${className}`}
    >
      <svg viewBox="0 0 400 400" className="h-full w-full">
        <Backdrop id={id} />
        <defs>
          <radialGradient id={`${id}-bowl`} cx="40%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#8A6647" />
            <stop offset="100%" stopColor="#5B3F29" />
          </radialGradient>
          <radialGradient id={`${id}-nut`} cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#E4C79A" />
            <stop offset="100%" stopColor="#B4895A" />
          </radialGradient>
        </defs>

        <ellipse cx="205" cy="322" rx="118" ry="20" fill="#3A2E1E" opacity="0.18" />

        <path d="M78 260 Q205 308 332 260 L314 306 Q205 336 96 306 Z" fill={`url(#${id}-bowl)`} />
        <ellipse cx="205" cy="260" rx="128" ry="36" fill="#6B4726" />

        {nuts.map(({ cx, cy, r, i }) => (
          <ellipse key={i} cx={cx} cy={cy} rx={r} ry={r * 0.85} fill={`url(#${id}-nut)`} stroke="#8C6539" strokeWidth="0.6" />
        ))}

        {/* scattered outside bowl */}
        <ellipse cx="95" cy="315" rx="10" ry="8.5" fill={`url(#${id}-nut)`} />
        <ellipse cx="120" cy="330" rx="9" ry="7.5" fill={`url(#${id}-nut)`} />
        <ellipse cx="308" cy="320" rx="10" ry="8.5" fill={`url(#${id}-nut)`} />

        <Leaf x={300} y={195} rotate={20} scale={0.8} />
        <Leaf x={95} y={200} rotate={-25} scale={0.7} />
      </svg>
    </div>
  )
}

export function BundleScene({ className = '', rounded = 'rounded-card', accent = false }: SceneProps & { accent?: boolean }) {
  const id = 'bndl'
  return (
    <div
      role="img"
      aria-label="Date Sugar, Turmeric, and Tigernuts packaging arranged together as a bundle"
      className={`${WRAP} ${rounded} bg-oat ${className}`}
    >
      <svg viewBox="0 0 400 250" className="h-full w-full">
        <defs>
          <radialGradient id={`${id}-bg`} cx="30%" cy="15%" r="95%">
            <stop offset="0%" stopColor="#FFFDF8" />
            <stop offset="60%" stopColor="#F7F1E4" />
            <stop offset="100%" stopColor="#E9DEC7" />
          </radialGradient>
          <linearGradient id={`${id}-pouchA`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent ? '#F0645C' : '#4FBE6C'} />
            <stop offset="100%" stopColor={accent ? '#C62F2B' : '#146B34'} />
          </linearGradient>
          <linearGradient id={`${id}-pouchB`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0B23D" />
            <stop offset="100%" stopColor="#C97F16" />
          </linearGradient>
          <linearGradient id={`${id}-pouchC`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B98A4E" />
            <stop offset="100%" stopColor="#7A5327" />
          </linearGradient>
        </defs>
        <rect width="400" height="250" fill={`url(#${id}-bg)`} />
        <ellipse cx="200" cy="228" rx="150" ry="14" fill="#3A2E1E" opacity="0.14" />

        {/* three standing pouches */}
        <g transform="translate(130 60)">
          <rect x="0" y="0" width="62" height="150" rx="14" fill={`url(#${id}-pouchA)`} />
          <rect x="10" y="14" width="42" height="26" rx="6" fill="#FCFBF7" opacity="0.85" />
        </g>
        <g transform="translate(200 40)">
          <rect x="0" y="0" width="62" height="170" rx="14" fill={`url(#${id}-pouchB)`} />
          <rect x="10" y="14" width="42" height="26" rx="6" fill="#FCFBF7" opacity="0.85" />
        </g>
        <g transform="translate(270 70)">
          <rect x="0" y="0" width="62" height="140" rx="14" fill={`url(#${id}-pouchC)`} />
          <rect x="10" y="14" width="42" height="26" rx="6" fill="#FCFBF7" opacity="0.85" />
        </g>

        <Leaf x={110} y={90} rotate={-20} scale={0.7} />
      </svg>
    </div>
  )
}

export function KitchenHeroScene({ className = '', rounded = 'rounded-card' }: SceneProps) {
  const id = 'hero'
  return (
    <div
      role="img"
      aria-label="A warm kitchen counter styled with Date Sugar, Turmeric, and Tigernuts packaging, wooden bowls, and natural ingredients"
      className={`${WRAP} ${rounded} bg-oat ${className}`}
    >
      <svg viewBox="0 0 500 600" className="h-full w-full">
        <defs>
          <radialGradient id={`${id}-bg`} cx="35%" cy="18%" r="90%">
            <stop offset="0%" stopColor="#FFFDF8" />
            <stop offset="55%" stopColor="#F7F1E4" />
            <stop offset="100%" stopColor="#E4D6B8" />
          </radialGradient>
          <linearGradient id={`${id}-counter`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E6D8B9" />
            <stop offset="100%" stopColor="#CBB68C" />
          </linearGradient>
          <linearGradient id={`${id}-pouchGreen`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4FBE6C" />
            <stop offset="100%" stopColor="#146B34" />
          </linearGradient>
          <linearGradient id={`${id}-pouchGold`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F0B23D" />
            <stop offset="100%" stopColor="#C97F16" />
          </linearGradient>
          <radialGradient id={`${id}-bowl`} cx="40%" cy="28%" r="75%">
            <stop offset="0%" stopColor="#8A6647" />
            <stop offset="100%" stopColor="#5B3F29" />
          </radialGradient>
          <radialGradient id={`${id}-powder`} cx="40%" cy="25%" r="70%">
            <stop offset="0%" stopColor="#D9AE6E" />
            <stop offset="100%" stopColor="#A9773F" />
          </radialGradient>
        </defs>

        <rect width="500" height="600" fill={`url(#${id}-bg)`} />
        <path d="M0 430 Q250 390 500 430 L500 600 L0 600 Z" fill={`url(#${id}-counter)`} />

        {/* soft window light */}
        <ellipse cx="120" cy="90" rx="170" ry="120" fill="#FFF7E6" opacity="0.5" />

        {/* back pouch - green (date sugar) */}
        <g transform="translate(75 260)">
          <ellipse cx="55" cy="238" rx="70" ry="16" fill="#3A2E1E" opacity="0.15" />
          <rect x="0" y="0" width="110" height="220" rx="20" fill={`url(#${id}-pouchGreen)`} />
          <rect x="16" y="24" width="78" height="46" rx="8" fill="#FCFBF7" opacity="0.9" />
          <text x="55" y="52" textAnchor="middle" fontSize="13" fontFamily="Georgia, serif" fill="#146B34">Date Sugar</text>
        </g>

        {/* front pouch - gold (turmeric) */}
        <g transform="translate(205 310)">
          <ellipse cx="50" cy="188" rx="66" ry="15" fill="#3A2E1E" opacity="0.16" />
          <rect x="0" y="0" width="100" height="170" rx="18" fill={`url(#${id}-pouchGold)`} />
          <rect x="14" y="20" width="72" height="40" rx="8" fill="#FCFBF7" opacity="0.9" />
          <text x="50" y="45" textAnchor="middle" fontSize="12" fontFamily="Georgia, serif" fill="#C97F16">Turmeric</text>
        </g>

        {/* bowl of tigernuts, front right */}
        <g transform="translate(330 420)">
          <ellipse cx="60" cy="86" rx="76" ry="14" fill="#3A2E1E" opacity="0.16" />
          <path d="M0 40 Q60 76 120 40 L108 78 Q60 100 12 78 Z" fill={`url(#${id}-bowl)`} />
          <ellipse cx="60" cy="40" rx="62" ry="18" fill="#6B4726" />
          {[...Array(10)].map((_, i) => {
            const cx = 25 + (i * 8) % 70
            const cy = 34 + ((i * 5) % 12)
            return <ellipse key={i} cx={cx} cy={cy} rx={7} ry={6} fill="#DCC190" />
          })}
        </g>

        {/* whole dates + turmeric root scattered on counter */}
        <g transform="translate(60 470)">
          <ellipse cx="0" cy="0" rx="20" ry="12" fill="#5B3417" transform="rotate(-10)" />
          <ellipse cx="34" cy="10" rx="18" ry="11" fill="#5B3417" transform="rotate(8 34 10)" />
        </g>
        <path
          d="M420 470C408 452 414 428 435 420C456 412 472 428 468 448C464 466 442 476 428 478C424 476 422 474 420 470Z"
          fill="#8A6134"
          transform="translate(0 30)"
        />

        <Leaf x={430 - 40} y={280} rotate={-20} scale={1.1} />
        <Leaf x={95} y={230} rotate={20} scale={0.9} />

        {/* soft shadow beneath everything to ground composition */}
        <ellipse cx="250" cy="560" rx="210" ry="20" fill="#3A2E1E" opacity="0.1" />
      </svg>
    </div>
  )
}

export function FamilyKitchenScene({ className = '', rounded = 'rounded-card' }: SceneProps) {
  const id = 'fam'
  return (
    <div
      role="img"
      aria-label="A warm, softly lit family kitchen table with tea, an open recipe book, and natural ingredients — an editorial storytelling scene"
      className={`${WRAP} ${rounded} bg-oat ${className}`}
    >
      <svg viewBox="0 0 400 500" className="h-full w-full">
        <defs>
          <radialGradient id={`${id}-bg`} cx="30%" cy="15%" r="95%">
            <stop offset="0%" stopColor="#FFF9EC" />
            <stop offset="55%" stopColor="#F3E7CC" />
            <stop offset="100%" stopColor="#DFCBA0" />
          </radialGradient>
          <linearGradient id={`${id}-table`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#B98A4E" />
            <stop offset="100%" stopColor="#8A6134" />
          </linearGradient>
          <linearGradient id={`${id}-cup`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFDF8" />
            <stop offset="100%" stopColor="#E9DEC7" />
          </linearGradient>
        </defs>

        <rect width="400" height="500" fill={`url(#${id}-bg)`} />
        <ellipse cx="200" cy="150" rx="220" ry="150" fill="#FFF3D6" opacity="0.55" />
        <path d="M0 340 Q200 300 400 340 L400 500 L0 500 Z" fill={`url(#${id}-table)`} />

        {/* open book */}
        <g transform="translate(70 360)">
          <path d="M0 30 L90 10 L90 60 L0 82 Z" fill="#FCFBF7" />
          <path d="M90 10 L180 30 L180 82 L90 60 Z" fill="#F4F0E4" />
          <path d="M10 35 L80 20 M10 45 L80 30 M10 55 L70 42" stroke="#C9BFA6" strokeWidth="2" fill="none" />
          <path d="M100 32 L170 20 M100 42 L170 30 M100 52 L160 42" stroke="#C9BFA6" strokeWidth="2" fill="none" />
        </g>

        {/* teapot */}
        <g transform="translate(250 300)">
          <ellipse cx="40" cy="95" rx="55" ry="12" fill="#3A2E1E" opacity="0.14" />
          <path d="M0 50C0 25 18 8 42 8C66 8 84 25 84 50C84 72 66 88 42 88C18 88 0 72 0 50Z" fill="#146B34" />
          <path d="M84 40C100 34 112 42 108 54C104 64 90 64 84 58Z" fill="#146B34" />
          <rect x="30" y="0" width="24" height="12" rx="4" fill="#0F4F27" />
        </g>

        {/* two cups */}
        <g transform="translate(140 400)">
          <ellipse cx="20" cy="46" rx="26" ry="7" fill="#3A2E1E" opacity="0.14" />
          <path d="M0 10C0 4 9 0 20 0C31 0 40 4 40 10L36 34C36 40 28 44 20 44C12 44 4 40 4 34Z" fill={`url(#${id}-cup)`} />
        </g>
        <g transform="translate(200 415)">
          <ellipse cx="16" cy="36" rx="20" ry="6" fill="#3A2E1E" opacity="0.14" />
          <path d="M0 8C0 3 7 0 16 0C25 0 32 3 32 8L29 27C29 32 23 35 16 35C9 35 3 32 3 27Z" fill={`url(#${id}-cup)`} />
        </g>

        {/* leaves + a small dish of dates */}
        <Leaf x={60} y={310} rotate={-15} scale={0.9} />
        <Leaf x={330} y={260} rotate={25} scale={0.8} />
        <g transform="translate(300 405)">
          <ellipse cx="20" cy="16" rx="24" ry="9" fill="#DCC9A0" />
          <ellipse cx="10" cy="12" rx="8" ry="5" fill="#5B3417" />
          <ellipse cx="24" cy="14" rx="8" ry="5" fill="#5B3417" />
        </g>
      </svg>
    </div>
  )
}

export function CommunityScene({ className = '', rounded = 'rounded-card' }: SceneProps) {
  const id = 'comm'
  return (
    <div
      role="img"
      aria-label="An editorial illustration representing HappyMe Health community outreach and screening activity"
      className={`${WRAP} ${rounded} bg-green-800 ${className}`}
    >
      <svg viewBox="0 0 400 260" className="h-full w-full">
        <defs>
          <radialGradient id={`${id}-bg`} cx="30%" cy="20%" r="100%">
            <stop offset="0%" stopColor="#1a7a41" />
            <stop offset="100%" stopColor="#0F4F27" />
          </radialGradient>
        </defs>
        <rect width="400" height="260" fill={`url(#${id}-bg)`} />
        {[...Array(5)].map((_, i) => (
          <circle key={i} cx={40 + i * 80} cy={140 + (i % 2) * 30} r={26} fill="#FCFBF7" opacity={0.12} />
        ))}
        <g transform="translate(150 90)">
          <circle cx="50" cy="30" r="26" fill="#FFF1F0" opacity="0.92" />
          <path d="M50 30m-14 0a14 14 0 1 0 28 0a14 14 0 1 0 -28 0" fill="#E53935" />
          <path d="M18 90C18 66 32 54 50 54C68 54 82 66 82 90" fill="#FFF1F0" opacity="0.92" />
        </g>
        <Leaf x={280} y={70} rotate={20} scale={0.9} />
        <Leaf x={90} y={60} rotate={-25} scale={0.8} />
      </svg>
    </div>
  )
}

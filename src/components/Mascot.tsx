interface MascotProps {
  className?: string
}

/**
 * Simplified, flat-vector recreation of the HappyMe Health tomato mark.
 * Kept small and used sparingly (header lockup, footer) per brand guide —
 * it is a secondary asset, not the primary visual identity.
 */
export function Mascot({ className = 'h-9 w-9' }: MascotProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M20 6.5c1.6 0 2.6 1.6 2.1 2.6-.6 1.2-1.5 1.2-2.1 1.2s-1.5 0-2.1-1.2c-.5-1 .5-2.6 2.1-2.6Z"
        fill="#146B34"
      />
      <path
        d="M14.5 9.2c1.8-.6 3.6.4 4.4 1.6.5-1.2 2.4-2.4 4.3-1.8"
        fill="none"
        stroke="#1FA64A"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="20" cy="23" r="12.5" fill="#E53935" />
      <path
        d="M11 19.5c1-4 4.7-7 9-7"
        fill="none"
        stroke="#FF6F69"
        strokeOpacity="0.55"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="16" cy="21.5" r="1.3" fill="#1F2933" />
      <circle cx="24" cy="21.5" r="1.3" fill="#1F2933" />
      <path
        d="M15.5 26c1.4 2 3 2.8 4.5 2.8s3.1-.8 4.5-2.8"
        fill="none"
        stroke="#1F2933"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

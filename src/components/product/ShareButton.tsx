import { useState, type MouseEvent } from 'react'
import { ShareIcon } from '@/components/icons'
import { shareContent } from '@/lib/share'
import { Toast } from '@/components/ui/Toast'

interface ShareButtonProps {
  title: string
  text: string
  url: string
  name: string
  className?: string
  size?: 'sm' | 'md'
}

export function ShareButton({ title, text, url, name, className = '', size = 'md' }: ShareButtonProps) {
  const [showToast, setShowToast] = useState(false)

  const handleShare = async (event: MouseEvent) => {
    event.preventDefault()
    event.stopPropagation()
    const result = await shareContent({ title, text, url })
    if (result === 'copied') {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2500)
    }
  }

  const dimension = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9'
  const iconSize = size === 'sm' ? 'h-4 w-4' : 'h-[18px] w-[18px]'

  return (
    <>
      <button
        type="button"
        onClick={handleShare}
        aria-label={`Share ${name}`}
        className={`flex ${dimension} items-center justify-center rounded-full bg-white/90 shadow-soft backdrop-blur transition-transform duration-200 ease-premium hover:scale-110 active:scale-95 ${className}`}
      >
        <ShareIcon className={`${iconSize} text-charcoal/70`} strokeWidth={1.8} />
      </button>
      <Toast message="Product link copied." show={showToast} />
    </>
  )
}

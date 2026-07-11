export interface ShareData {
  title: string
  text: string
  url: string
}

export type ShareResult = 'shared' | 'copied' | 'cancelled' | 'failed'

export async function shareContent(data: ShareData): Promise<ShareResult> {
  if (typeof navigator !== 'undefined' && navigator.share) {
    try {
      await navigator.share(data)
      return 'shared'
    } catch {
      return 'cancelled'
    }
  }

  try {
    await navigator.clipboard.writeText(data.url)
    return 'copied'
  } catch {
    return 'failed'
  }
}

export function buildProductUrl(slug: string): string {
  if (typeof window === 'undefined') return `/product/${slug}`
  return `${window.location.origin}/product/${slug}`
}

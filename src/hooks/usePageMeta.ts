import { useEffect } from 'react'

/**
 * Sets document.title and the meta description for the current page,
 * restoring the previous values on unmount. This keeps each route's
 * title/description accurate for browser tabs, history, and link
 * previews shared from the address bar.
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title.includes('HappyMe Health') ? title : `${title} | HappyMe Health`

    const descriptionTag = document.querySelector('meta[name="description"]')
    const previousDescription = descriptionTag?.getAttribute('content') ?? null

    if (description && descriptionTag) {
      descriptionTag.setAttribute('content', description)
    }

    return () => {
      document.title = previousTitle
      if (previousDescription !== null && descriptionTag) {
        descriptionTag.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])
}

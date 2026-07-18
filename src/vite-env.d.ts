/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Webhook URL for Order Request submissions. See src/lib/submissions.ts. */
  readonly VITE_ORDER_REQUEST_WEBHOOK_URL?: string
  /** Webhook URL for Support Inquiry submissions. See src/lib/submissions.ts. */
  readonly VITE_SUPPORT_INQUIRY_WEBHOOK_URL?: string
  /** Webhook URL for Contact form submissions. See src/lib/submissions.ts. */
  readonly VITE_CONTACT_WEBHOOK_URL?: string
  /** Webhook URL for Order Follow Up submissions. See src/lib/submissions.ts. */
  readonly VITE_ORDER_FOLLOW_UP_WEBHOOK_URL?: string
  /** Webhook URL for Newsletter Signup submissions. See src/lib/submissions.ts. */
  readonly VITE_NEWSLETTER_WEBHOOK_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

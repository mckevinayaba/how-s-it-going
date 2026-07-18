/**
 * Submission service layer.
 *
 * Each submit* function POSTs its payload as JSON to a webhook URL read from
 * an environment variable (see .env.example). Point that variable at a
 * Google Sheets webhook (Apps Script), Airtable REST endpoint, Supabase edge
 * function, Zapier/Make webhook, or any CRM/email-notification service that
 * accepts a JSON POST — no code changes needed here to switch providers.
 *
 * Until an environment variable is set, each function simulates a
 * successful submission on the client so the WhatsApp-handoff UX keeps
 * working end-to-end during development and before credentials exist.
 */

import type { CartLineItem } from '@/types'

export interface OrderRequestPayload {
  // Customer
  fullName: string
  phone: string
  whatsapp: string
  email: string
  // Delivery
  city: string
  quarter: string
  deliveryPreference: string
  addressDetails: string
  // Basket
  items: Array<{
    slug: string
    name: string
    variantLabel?: string
    quantity: number
    priceConfirmed: boolean
    /** Null when priceConfirmed is false — no final price to send yet. */
    unitPriceFcfa: number | null
    lineTotalFcfa: number | null
    kind: 'product' | 'bundle'
  }>
  /** Sum of priced items only. */
  subtotalFcfa: number
  supportAddOn: 'contribute' | 'ask-me' | 'not-today'
  supportAddOnFcfa: number
  /** Total for priced items only — see hasUnconfirmedItems for the rest. */
  totalFcfa: number
  hasUnconfirmedItems: boolean
  // Preferences
  contactMethod: string
  paymentMethod: string
  notes: string
  consent: boolean
  submittedAt: string
}

export interface SupportInquiryPayload {
  fullName: string
  phone: string
  whatsapp: string
  email: string
  organisation: string
  country: string
  city: string
  supportInterest: string
  amountOrType: string
  contactMethod: string
  message: string
  consent: boolean
  submittedAt: string
}

export interface ContactInquiryPayload {
  fullName: string
  phone: string
  whatsapp: string
  email: string
  inquiryType: string
  city: string
  message: string
  contactMethod: string
  consent: boolean
  submittedAt: string
}

export interface OrderFollowUpPayload {
  fullName: string
  phone: string
  whatsapp: string
  orderReference: string
  needType: string
  message: string
  contactMethod: string
  consent: boolean
  submittedAt: string
}

export interface NewsletterSignupPayload {
  email: string
  firstName: string
  submittedAt: string
}

export function buildCartLinePayload(items: CartLineItem[]) {
  return items.map((item) => {
    const priceConfirmed = item.priceConfirmed !== false
    return {
      slug: item.slug,
      name: item.name,
      variantLabel: item.variantLabel,
      quantity: item.quantity,
      priceConfirmed,
      unitPriceFcfa: priceConfirmed ? item.priceFcfa : null,
      lineTotalFcfa: priceConfirmed ? item.priceFcfa * item.quantity : null,
      kind: item.kind,
    }
  })
}

// Each entry reads a webhook URL from an env var. Set the corresponding
// VITE_*_WEBHOOK_URL in .env.local to activate real submission for that
// form — see .env.example for the full list and setup notes.
const ENDPOINTS = {
  orderRequest: import.meta.env.VITE_ORDER_REQUEST_WEBHOOK_URL,
  supportInquiry: import.meta.env.VITE_SUPPORT_INQUIRY_WEBHOOK_URL,
  contact: import.meta.env.VITE_CONTACT_WEBHOOK_URL,
  orderFollowUp: import.meta.env.VITE_ORDER_FOLLOW_UP_WEBHOOK_URL,
  newsletter: import.meta.env.VITE_NEWSLETTER_WEBHOOK_URL,
} as const

type EndpointKey = keyof typeof ENDPOINTS

export interface SubmissionResult {
  ok: boolean
  /** True when no webhook URL is configured yet and the submission was only simulated. */
  simulated: boolean
}

async function submitPayload<T>(endpointKey: EndpointKey, payload: T): Promise<SubmissionResult> {
  const endpoint = ENDPOINTS[endpointKey]

  if (!endpoint) {
    // No backend configured yet for this form. Simulate a successful
    // submission so the on-screen confirmation and WhatsApp handoff keep
    // working while the real destination is being set up.
    await new Promise((resolve) => setTimeout(resolve, 200))
    return { ok: true, simulated: true }
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    return { ok: response.ok, simulated: false }
  } catch {
    // Network/backend failure. The caller still shows the WhatsApp handoff
    // so the customer is never blocked by a backend outage.
    return { ok: false, simulated: false }
  }
}

export const submitOrderRequest = (p: OrderRequestPayload) => submitPayload('orderRequest', p)
export const submitSupportInquiry = (p: SupportInquiryPayload) => submitPayload('supportInquiry', p)
export const submitContactInquiry = (p: ContactInquiryPayload) => submitPayload('contact', p)
export const submitOrderFollowUp = (p: OrderFollowUpPayload) => submitPayload('orderFollowUp', p)
export const submitNewsletterSignup = (p: NewsletterSignupPayload) => submitPayload('newsletter', p)

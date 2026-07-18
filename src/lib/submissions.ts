/**
 * Submission service placeholders.
 *
 * These functions define the exact shape of the payloads that will be sent
 * to a backend (Supabase, Airtable, Google Sheets webhook, email service,
 * CRM, etc.) once the team wires one up.
 *
 * For now they simulate a successful submission on the client so the UX
 * flow works end-to-end. Swap the body of each function with a real
 * `fetch` call to the chosen endpoint when ready.
 *
 * Recommended integration options:
 *  - Lovable Cloud (Supabase) table + edge function
 *  - Google Apps Script webhook writing to a Sheet
 *  - Airtable REST API
 *  - Zapier / Make webhook
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

async function fakePost<T>(_payload: T): Promise<{ ok: true }> {
  // TODO: replace with real fetch, e.g.
  // await fetch(import.meta.env.VITE_ORDERS_ENDPOINT, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(_payload),
  // })
  return new Promise((resolve) => setTimeout(() => resolve({ ok: true }), 200))
}

export const submitOrderRequest = (p: OrderRequestPayload) => fakePost(p)
export const submitSupportInquiry = (p: SupportInquiryPayload) => fakePost(p)
export const submitContactInquiry = (p: ContactInquiryPayload) => fakePost(p)
export const submitOrderFollowUp = (p: OrderFollowUpPayload) => fakePost(p)
export const submitNewsletterSignup = (p: NewsletterSignupPayload) => fakePost(p)

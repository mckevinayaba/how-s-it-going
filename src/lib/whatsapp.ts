/**
 * Official HappyMe Health WhatsApp business number.
 * All WhatsApp links/buttons across the platform should go through
 * buildWhatsAppLink so they stay in sync with this one source of truth.
 */
export const WHATSAPP_NUMBER = '237672083772'

/** Human-readable form for display text (e.g. "Call or WhatsApp us at ..."). */
export const WHATSAPP_DISPLAY = '+237 672 083 772'

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

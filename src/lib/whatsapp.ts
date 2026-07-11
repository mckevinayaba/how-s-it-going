/**
 * TODO: replace with the real HappyMe Health WhatsApp business number
 * (international format, digits only, no leading +). Example: "237600000000"
 */
export const WHATSAPP_NUMBER = '000000000000'

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

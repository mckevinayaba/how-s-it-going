export const CONTACT_METHODS = ['WhatsApp', 'Phone call', 'SMS', 'Email'] as const

export const PAYMENT_METHODS = [
  'MTN Mobile Money',
  'Orange Money',
  'Bank transfer',
  'Cash on delivery, where available',
  'Pickup payment',
  'Discuss with team',
] as const

export const SUPPORT_INTERESTS = [
  'Sponsor a screening day',
  'Support first aid kits and supplies',
  'Help with transport and logistics',
  'Partner on a larger programme',
  'Speak to the team',
] as const

export const SUPPORT_ADD_ON_CHOICES = [
  { value: 'contribute', label: 'Add a small contribution' },
  { value: 'ask-me', label: 'Ask me about supporting outreach' },
  { value: 'not-today', label: 'Not today' },
] as const

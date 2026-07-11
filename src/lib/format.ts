/**
 * HappyMe Health operates in Cameroon. Product pricing is displayed in FCFA.
 *
 * Internally, prices remain stored in the existing `priceCents` fields
 * (USD cents) so downstream data isn't disrupted. We convert to FCFA at
 * display time using a single conversion factor and round to the nearest
 * 100 FCFA for a clean local price feel.
 *
 * TODO(pricing): replace this with real FCFA prices per product/variant
 * once the local pricing sheet is confirmed with the team.
 */
const USD_CENTS_TO_FCFA = 6 // ~600 FCFA per USD

export function formatPrice(cents: number): string {
  const fcfa = Math.round((cents * USD_CENTS_TO_FCFA) / 100) * 100
  return `${fcfa.toLocaleString('en-US')} FCFA`
}

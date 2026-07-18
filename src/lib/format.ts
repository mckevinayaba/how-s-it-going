/**
 * HappyMe Health operates in Cameroon. All prices are real FCFA amounts
 * stored directly (no cents/subdivision — FCFA doesn't use one).
 */
export function formatPrice(fcfa: number): string {
  return `${fcfa.toLocaleString('en-US')} FCFA`
}

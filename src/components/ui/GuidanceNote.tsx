export function GuidanceNote({ className = '' }: { className?: string }) {
  return (
    <div
      className={`rounded-card border border-green-500/20 bg-green-50 px-5 py-4 ${className}`}
    >
      <p className="text-sm leading-relaxed text-green-800">
        <span className="font-semibold">A note on this product: </span>
        This is a food product, not a medical treatment. It can be part of
        more mindful kitchen choices, but it does not replace professional
        medical advice or prescribed care. Always consult a qualified health
        professional regarding your personal health needs.
      </p>
    </div>
  )
}

export function Toast({ message, show }: { message: string; show: boolean }) {
  if (!show) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-x-0 bottom-24 z-50 flex justify-center px-4 lg:bottom-8"
    >
      <div className="rounded-pill bg-charcoal px-5 py-3 text-sm font-medium text-white shadow-lift">
        {message}
      </div>
    </div>
  )
}

import { Button } from '@/components/ui/Button'

export function NotFound() {
  return (
    <div className="container-page py-24 text-center">
      <p className="font-serif text-6xl text-green-700">404</p>
      <h1 className="mt-4 font-serif text-2xl text-charcoal">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you’re looking for doesn’t exist or has moved.
      </p>
      <Button to="/" className="mt-8">
        Back to home
      </Button>
    </div>
  )
}

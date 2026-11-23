import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-page-bg">
      <h1 className="text-h4 text-text">Page not found</h1>
      <Link to="/" className="text-body-sm text-primary-500">
        Back to Dashboard
      </Link>
    </main>
  )
}

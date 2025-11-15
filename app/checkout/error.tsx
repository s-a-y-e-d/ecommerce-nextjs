'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import './styles/error.css'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function CheckoutError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Checkout error:', error)
  }, [error])

  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-icon">⚠️</div>

        <h1 className="error-title">Oops! Something went wrong</h1>

        <p className="error-message">
          We encountered an issue while loading your checkout. This could be due to a network problem or server issue.
        </p>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="error-details">
            <p className="error-detail-label">Error details:</p>
            <pre className="error-detail-content">{error.message}</pre>
          </div>
        )}

        <div className="error-actions">
          <button
            onClick={reset}
            className="btn btn-primary"
          >
            Try Again
          </button>

          <Link href="/cart" className="btn btn-secondary">
            Back to Cart
          </Link>

          <Link href="/" className="btn btn-tertiary">
            Back Home
          </Link>
        </div>

        <div className="error-help">
          <p>If the problem persists, please contact support or try again later.</p>
        </div>
      </div>
    </div>
  )
}

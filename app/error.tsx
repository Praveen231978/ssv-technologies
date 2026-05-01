'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle } from 'lucide-react'

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-blue-600 flex items-center justify-center px-4">
      {/* Dots pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #4A95F0 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/20 border border-red-400/30 mb-6">
          <AlertTriangle className="w-10 h-10 text-red-400" aria-hidden="true" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Something Went Wrong
        </h1>

        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
          We encountered an unexpected error. Please try again, or return to the home page if the
          problem persists.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gold-500 text-navy-900 font-semibold text-base hover:bg-gold-400 transition-colors duration-200 shadow-lg w-full sm:w-auto"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-navy-900 transition-colors duration-200 w-full sm:w-auto"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

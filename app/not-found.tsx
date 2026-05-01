import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
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
        {/* Large 404 number */}
        <p
          className="text-[8rem] md:text-[10rem] font-bold leading-none text-gold-500 select-none"
          aria-hidden="true"
        >
          404
        </p>

        <h1 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
          Page Not Found
        </h1>

        <p className="text-slate-300 text-lg mb-10 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved,
          deleted, or the URL might be incorrect.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gold-500 text-navy-900 font-semibold text-base hover:bg-gold-400 transition-colors duration-200 shadow-lg"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'SSV Technologies | IT Services & Staffing Solutions',
    template: '%s | SSV Technologies',
  },
  description:
    'SSV Technologies delivers job marketing, placement, digital marketing, software development, cloud modernization, and enterprise consulting services from Hyderabad and the US.',
  metadataBase: new URL('https://ssv-tech.com'),
  openGraph: {
    title: 'SSV Technologies | IT Services & Staffing Solutions',
    description:
      'SSV Technologies delivers job marketing, placement, digital marketing, software development, cloud modernization, and enterprise consulting services from Hyderabad and the US.',
    url: 'https://ssv-tech.com',
    siteName: 'SSV Technologies',
    images: [
      {
        url: '/og/home.png',
        width: 1200,
        height: 630,
        alt: 'SSV Technologies — IT Services & Staffing Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SSV Technologies | IT Services & Staffing Solutions',
    description:
      'SSV Technologies delivers job marketing, placement, digital marketing, software development, cloud modernization, and enterprise consulting services.',
    images: ['/og/home.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased bg-white text-slate-900`}>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

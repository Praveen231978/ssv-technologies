import Link from 'next/link'
import Image from 'next/image'
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react'
import { footerLinkGroups } from '@/data/navigation'

export function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-navy-700">
          {/* Brand column — spans 2 cols on large screens */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center hover:opacity-90 transition-opacity duration-200"
              aria-label="SSV Technologies — Home"
            >
              <Image
                src="/logo.jpg"
                alt="SSV Technologies"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Tagline */}
            <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs">
              Connecting talent with opportunity. Delivering technology that drives growth — across India and the United States.
            </p>

            {/* Social icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/ssc-technologies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-navy-700 text-slate-400 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                aria-label="SSV Technologies on LinkedIn"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/ssctechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-navy-700 text-slate-400 hover:bg-blue-500 hover:text-white transition-colors duration-200"
                aria-label="SSV Technologies on Twitter / X"
              >
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/ssctechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-navy-700 text-slate-400 hover:bg-blue-700 hover:text-white transition-colors duration-200"
                aria-label="SSV Technologies on Facebook"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/ssctechnologies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-navy-700 text-slate-400 hover:bg-pink-600 hover:text-white transition-colors duration-200"
                aria-label="SSV Technologies on Instagram"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Footer link groups — each spans 1 col */}
          {footerLinkGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2.5" role="list">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-gold-400 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact + Locations row */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 border-b border-navy-700">
          {/* Contact details */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-3">
              <p className="text-sm text-slate-400 font-medium">
                Ambika Vedangi — CEO
              </p>
              <a
                href="tel:+9989478181"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-gold-400 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                +91 99894 78181
              </a>
              <a
                href="mailto:ambika.v@ssv-tech.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-gold-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                ambika.v@ssv-tech.com
              </a>
              <a
                href="mailto:nag.v@ssv-tech.com"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-gold-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                hr@ssv-tech.com
              </a>
            </address>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our Locations
            </h3>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-white">Hyderabad, India</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    SSV Technologies Pvt. Ltd.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-white">United States</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Serving clients and candidates across the US
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © 2024 SSV Technologies Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Registered in India &amp; United States
          </p>
        </div>
      </div>
    </footer>
  )
}

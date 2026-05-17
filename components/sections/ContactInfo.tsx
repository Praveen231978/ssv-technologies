import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

export function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* CEO Contact */}
      <div>
        <h3 className="text-lg font-semibold text-navy-900 mb-4">Direct Contact</h3>
        <div className="space-y-3">
          <p className="text-slate-700 font-medium">Ambika Vedangi — CEO, SSV Technologies</p>

          <a
            href="tel:+919989478181"
            className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
            aria-label="Call SSV Technologies at +91 91008 28982"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
              <Phone className="w-4 h-4" aria-hidden="true" />
            </span>
            <span>+91 91008 28982</span>
          </a>

          <a
            href="mailto:ambika.v@ssv-tech.com"
            className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
            aria-label="Email ambika.v@ssv-tech.com"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
              <Mail className="w-4 h-4" aria-hidden="true" />
            </span>
            <span>ambika.v@ssv-tech.com</span>
          </a>

          <a
            href="mailto:nag.v@ssv-tech.com"
            className="flex items-center gap-3 text-slate-600 hover:text-blue-600 transition-colors group"
            aria-label="Email nag.v@ssv-tech.com"
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex-shrink-0">
              <Mail className="w-4 h-4" aria-hidden="true" />
            </span>
            <span>nag.v@ssv-tech.com</span>
          </a>
        </div>
      </div>

      {/* Hyderabad Office */}
      <div>
        <h3 className="text-lg font-semibold text-navy-900 mb-4">Hyderabad Office</h3>
        <div className="flex items-start gap-3 text-slate-600">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex-shrink-0 mt-0.5">
            <MapPin className="w-4 h-4" aria-hidden="true" />
          </span>
          <address className="not-italic leading-relaxed">
            SSV Technologies Pvt. Ltd.
            <br />
            Hyderabad, Telangana
            <br />
            India — 500 081
          </address>
        </div>
      </div>

      {/* US Office */}
      <div>
        <h3 className="text-lg font-semibold text-navy-900 mb-4">United States</h3>
        <div className="flex items-start gap-3 text-slate-600">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex-shrink-0 mt-0.5">
            <MapPin className="w-4 h-4" aria-hidden="true" />
          </span>
          <p className="leading-relaxed">
            SSV Technologies operates across the United States, serving clients and candidates
            nationwide. Contact us for US office details.
          </p>
        </div>
      </div>

      {/* Social Media */}
      <div>
        <h3 className="text-lg font-semibold text-navy-900 mb-4">Follow Us</h3>
        <div className="flex items-center gap-3">
          <a
            href="https://linkedin.com/company/ssc-technologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SSV Technologies on LinkedIn"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-colors"
          >
            <Linkedin className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="https://twitter.com/ssctechnologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SSV Technologies on Twitter / X"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-900 hover:text-white transition-colors"
          >
            <Twitter className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="https://facebook.com/ssctechnologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SSV Technologies on Facebook"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-700 hover:text-white transition-colors"
          >
            <Facebook className="w-5 h-5" aria-hidden="true" />
          </a>
          <a
            href="https://instagram.com/ssctechnologies"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SSV Technologies on Instagram"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-pink-600 hover:text-white transition-colors"
          >
            <Instagram className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}

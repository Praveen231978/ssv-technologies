export function EmbeddedMap() {
  return (
    <section className="bg-slate-50 py-16" aria-label="Office location map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">Find Us</h2>
        <div className="rounded-2xl overflow-hidden shadow-card border border-slate-200">
          <iframe
            title="SSV Technologies Hyderabad Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160053!2d78.24323045!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

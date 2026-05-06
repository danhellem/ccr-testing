type ContactPageProps = {
  onBack: () => void
  name?: string
}

export default function ContactPage({ onBack, name }: ContactPageProps) {
  // React's JSX escaping handles output safety; we only trim length here
  const rawName = (name ?? 'there').slice(0, 50)

  return (
    <main className="contact-page">
      <button
        type="button"
        onClick={onBack}
        className="contact-back-btn"
        aria-label="Back to shop"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        <span>Back to Shop</span>
      </button>

      <div className="contact-greeting">
        <h2>Hello, {rawName}! Get in touch with Contoso.</h2>
      </div>

      <p className="contact-intro">
        We'd love to hear from you. Visit our flagship store, drop us a line,
        or reach out on social media.
      </p>

      <section className="contact-grid">
        <div className="contact-info">
          <h3>Our Address</h3>
          <address>
            Contoso Headquarters<br />
            742 Evergreen Terrace, Suite 1200<br />
            Springfield, OR 97477<br />
            United States
          </address>

          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <a href="mailto:hello@contoso.example">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>hello@contoso.example</span>
              </a>
            </li>
            <li>
              <a href="tel:+15035550199">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+1 (503) 555-0199</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/contoso"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/contoso"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-map">
          <img
            src="/contact-map.svg"
            alt="Map showing Contoso's Springfield, OR location"
            className="contact-map-img"
          />
          <p className="contact-map-caption">Visit us at our Springfield location.</p>
        </div>
      </section>
    </main>
  )
}

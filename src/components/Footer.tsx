const APP_VERSION = '1.0.0'

type FooterProps = {
  onNavigateContact: () => void
}

export default function Footer({ onNavigateContact }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Contoso Product Catalog</span>
          <span className="footer-version">v{APP_VERSION}</span>
        </div>

        <div className="footer-address">
          <p>123 Commerce Way, Suite 400</p>
          <p>Seattle, WA 98101</p>
          <p>United States</p>
        </div>

        <div className="footer-links">
          <button
            type="button"
            onClick={onNavigateContact}
            className="footer-social-link footer-contact-link"
            aria-label="Contact Us"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            <span>Contact Us</span>
          </button>
          <a
            href="https://www.facebook.com/contoso"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span>Facebook</span>
          </a>
          <a
            href="https://www.instagram.com/contoso"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-link"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Contoso. All rights reserved.</p>
      </div>
    </footer>
  )
}

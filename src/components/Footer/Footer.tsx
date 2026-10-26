import { Instagram, Linkedin, Facebook, Youtube, ArrowUp } from 'lucide-react';
import { companyContact } from '../../data/contactInfo';
import './Footer.css';

const currentYear = new Date().getFullYear();

const footerNav = {
  company: [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Services', href: '#services' },
    { label: 'How We Work', href: '#process' },
  ],
  properties: [
    { label: 'Buy Property', href: '#enquiry' },
    { label: 'Sell Property', href: '#enquiry' },
    { label: 'Rent Property', href: '#enquiry' },
    { label: 'Lease Property', href: '#enquiry' },
    { label: 'Investment Advisory', href: '#enquiry' },
  ],
  categories: [
    { label: 'Premium Apartments', href: '#properties' },
    { label: 'Luxury Villas', href: '#properties' },
    { label: 'Residential Plots', href: '#properties' },
    { label: 'Ready to Move', href: '#properties' },
    { label: 'Upcoming Projects', href: '#properties' },
  ],
};

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
];

export default function Footer() {
  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="rn-footer" role="contentinfo">
      {/* Premium Light-Beam Effect Layers */}
      <div className="rn-footer__beams" aria-hidden="true">
        <div className="rn-footer__horizon-glow" />
        <div className="rn-footer__beam rn-footer__beam--primary" />
        <div className="rn-footer__beam rn-footer__beam--secondary" />
        <div className="rn-footer__beam rn-footer__beam--center" />
      </div>

      {/* Main Footer Links & Brand */}
      <div className="rn-footer__main">
        <div className="container">
          <div className="rn-footer__grid">
            {/* Brand Column */}
            <div className="rn-footer__brand">
              <a
                href="#home"
                className="rn-footer__logo"
                onClick={(e) => handleNavClick('#home', e)}
                aria-label="Realnest - Go to homepage"
              >
                <div className="rn-footer__logo-mark" aria-hidden="true">
                  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="36" height="36" rx="8" fill="#C5A46D" />
                    <path d="M18 6L6 16V30H14V22H22V30H30V16L18 6Z" fill="#0A251D" />
                    <rect x="16" y="12" width="4" height="4" rx="1" fill="#C5A46D" />
                  </svg>
                </div>
                <div>
                  <div className="rn-footer__logo-name">Realnest</div>
                  <div className="rn-footer__logo-tag">Real Estate Advisory</div>
                </div>
              </a>

              <p className="rn-footer__brand-desc">
                Independent real estate advisory for discerning buyers, sellers, tenants, and investors across Chennai. Grounded in transparency, due diligence, and patient client representation.
              </p>

              {/* Social Icons */}
              <div className="rn-footer__socials" role="list" aria-label="Social media links">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="rn-footer__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Realnest on ${social.label}`}
                      role="listitem"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </a>
                  );
                })}
              </div>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${companyContact.whatsappNumber}?text=${encodeURIComponent(companyContact.whatsappMessage)}`}
                className="rn-footer__whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.463 3.488" />
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Navigation Column 1: Company */}
            <div className="rn-footer__col">
              <h3 className="rn-footer__col-title">Company</h3>
              <ul className="rn-footer__links">
                {footerNav.company.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="rn-footer__link"
                      onClick={(e) => handleNavClick(link.href, e)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Column 2: Services */}
            <div className="rn-footer__col">
              <h3 className="rn-footer__col-title">Services</h3>
              <ul className="rn-footer__links">
                {footerNav.properties.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="rn-footer__link"
                      onClick={(e) => handleNavClick(link.href, e)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigation Column 3: Properties */}
            <div className="rn-footer__col">
              <h3 className="rn-footer__col-title">Properties</h3>
              <ul className="rn-footer__links">
                {footerNav.categories.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="rn-footer__link"
                      onClick={(e) => handleNavClick(link.href, e)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Giant REALNEST Wordmark Signature Area */}
      <div className="rn-footer__wordmark-area" aria-hidden="true">
        <div className="rn-footer__wordmark-inner">
          <span className="rn-footer__wordmark">REALNEST</span>
          <div className="rn-footer__wordmark-ray" />
        </div>
      </div>

      {/* Bottom Bar: Copyright & Legal */}
      <div className="rn-footer__bottom">
        <div className="container">
          <div className="rn-footer__bottom-inner">
            <p className="rn-footer__copyright">
              <span>© {currentYear} Realnest Real Estate Advisory. All rights reserved.</span>
              <span className="rn-footer__copyright-note">
                Verified advisory engagements · RERA compliance assistance · Chennai, Tamil Nadu
              </span>
            </p>

            <div className="rn-footer__legal">
              <button className="rn-footer__legal-link" type="button">Privacy Policy</button>
              <button className="rn-footer__legal-link" type="button">Terms & Conditions</button>
              <button className="rn-footer__legal-link" type="button">Cookie Preferences</button>
            </div>

            {/* Back to Top */}
            <button
              className="rn-footer__back-top"
              onClick={scrollToTop}
              aria-label="Back to top"
              id="footer-back-top-btn"
              type="button"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

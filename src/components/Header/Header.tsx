import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import './Header.css';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Properties', href: '#properties' },
  { label: 'How We Work', href: '#process' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#enquiry' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detection
      const sections = ['#home', '#about', '#services', '#properties', '#process', '#testimonials', '#enquiry'];
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]);
        if (el && (el as HTMLElement).offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/' + href);
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    } else {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`rn-header ${isScrolled ? 'rn-header--scrolled' : 'rn-header--transparent'}`}
        role="banner"
      >
        <div className="container">
          <div className="rn-header__inner">
            {/* Logo */}
            <a
              href="#home"
              className="rn-logo"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              aria-label="Realnest - Go to homepage"
            >
              <div className="rn-logo__mark" aria-hidden="true">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="8" fill="#B99A6A"/>
                  <path d="M18 6L6 16V30H14V22H22V30H30V16L18 6Z" fill="#1C2D23"/>
                  <rect x="16" y="12" width="4" height="4" rx="1" fill="#B99A6A"/>
                </svg>
              </div>
              <div className="rn-logo__text">
                <span className="rn-logo__name">Realnest</span>
                <span className="rn-logo__tagline">Real Estate</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="rn-nav" role="navigation" aria-label="Main navigation">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`rn-nav__item ${activeSection === item.href ? 'rn-nav__item--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="rn-header__actions">
              <a
                href="#properties"
                className="btn btn-outline btn-sm rn-header__contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#properties'); }}
                id="header-explore-btn"
              >
                Explore
              </a>
              <a
                href="#enquiry"
                className="btn btn-primary btn-sm rn-header__cta-btn"
                onClick={(e) => { e.preventDefault(); handleNavClick('#enquiry'); }}
                id="header-contact-btn"
              >
                <span>Talk to Us</span>
                <ArrowRight size={14} className="rn-header__cta-arrow" />
              </a>
            </div>

            {/* Hamburger */}
            <button
              className="rn-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              id="hamburger-btn"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`rn-mobile-overlay ${mobileMenuOpen ? 'rn-mobile-overlay--open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Menu Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`rn-mobile-menu ${mobileMenuOpen ? 'rn-mobile-menu--open' : ''}`}
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal="true"
      >
        <div className="rn-mobile-menu__header">
          <a href="#home" className="rn-logo" onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}>
            <div className="rn-logo__mark" aria-hidden="true">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="#C5A46D"/>
                <path d="M18 6L6 16V30H14V22H22V30H30V16L18 6Z" fill="#101C2C"/>
                <rect x="16" y="12" width="4" height="4" rx="1" fill="#C5A46D"/>
              </svg>
            </div>
            <div className="rn-logo__text">
              <span className="rn-logo__name">Realnest</span>
            </div>
          </a>
          <button
            className="rn-mobile-menu__close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            id="mobile-menu-close-btn"
          >
            <X size={22} />
          </button>
        </div>

        <nav className="rn-mobile-nav" role="navigation" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rn-mobile-nav__item"
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
            >
              {item.label}
              <ChevronDown size={16} className="rn-mobile-nav__arrow" />
            </a>
          ))}
        </nav>

        <div className="rn-mobile-menu__footer">
          <a
            href="#enquiry"
            className="btn btn-primary w-full"
            onClick={(e) => { e.preventDefault(); handleNavClick('#enquiry'); }}
            id="mobile-list-property-btn"
          >
            List Your Property
          </a>
          <a
            href="#enquiry"
            className="btn btn-outline w-full"
            onClick={(e) => { e.preventDefault(); handleNavClick('#enquiry'); }}
            id="mobile-contact-btn"
            style={{ marginTop: '0.75rem', color: 'var(--midnight-navy)', borderColor: 'var(--soft-border)' }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
}

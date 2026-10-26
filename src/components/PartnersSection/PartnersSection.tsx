import { useEffect, useRef, useState, useCallback } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  X,
  ExternalLink,
  MapPin,
  Building2,
  CheckCircle2,
  FolderGit2,
} from 'lucide-react';
import { partners, type Partner } from '../../data/content';
import './PartnersSection.css';

export default function PartnersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState<Partner | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const modalCloseBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPartner(null);
  }, []);

  // Handle Escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedPartner) {
        handleCloseModal();
      }
    };

    if (selectedPartner) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Focus close button on open
      setTimeout(() => {
        modalCloseBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPartner, handleCloseModal]);

  const handleEnquireAboutPartner = (partnerName: string) => {
    handleCloseModal();
    const enquirySection = document.querySelector('#enquiry');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
      // If message field exists, provide subtle hint
      setTimeout(() => {
        const messageInput = document.querySelector<HTMLTextAreaElement>('#enq-message');
        if (messageInput && !messageInput.value) {
          messageInput.value = `I am interested in exploring available projects by ${partnerName}.`;
          messageInput.dispatchEvent(new Event('input', { bubbles: true }));
        }
      }, 600);
    }
  };

  return (
    <section
      id="partners"
      ref={sectionRef}
      className={`section rn-partners bg-ivory ${isVisible ? 'rn-partners--visible' : ''}`}
      aria-labelledby="partners-heading"
    >
      <div className="container">
        <div className="section-header reveal-heading">
          <p className="eyebrow reveal-fade-up">DEVELOPER NETWORK</p>
          <h2 id="partners-heading" className="section-title">
            <span className="reveal-mask-line"><span>Working With Trusted</span></span>
            <span className="reveal-mask-line">
              <span style={{ color: 'var(--champagne-gold)' }}>Property Developers.</span>
            </span>
          </h2>
          <p className="section-subtitle reveal-fade-up reveal-delay-1">
            Explore premier developments from established, verified developers across Chennai. Click any developer to view verified portfolio details.
          </p>
        </div>

        <div className="rn-partners__grid">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="rn-partner-card reveal-fade-up"
              onClick={() => setSelectedPartner(partner)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPartner(partner);
                }
              }}
              aria-label={`View detailed profile for ${partner.name}`}
            >
              {/* Logo Mark */}
              <div
                className="rn-partner-card__logo"
                style={{ background: partner.bgColor || partner.brandColor, color: partner.textColor || '#FFFFFF' }}
                aria-label={partner.name}
              >
                <span className="rn-partner-card__logo-text">{partner.logoText}</span>
              </div>

              {/* Info */}
              <div className="rn-partner-card__info">
                <div className="rn-partner-card__header">
                  <h3 className="rn-partner-card__name">{partner.name}</h3>
                  <span className="rn-partner-card__badge">
                    <ShieldCheck size={12} />
                    Verified
                  </span>
                </div>
                <p className="rn-partner-card__desc">{partner.description}</p>
                <button
                  type="button"
                  className="rn-partner-card__link"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPartner(partner);
                  }}
                  aria-label={`View details and projects for ${partner.name}`}
                >
                  <span>Explore Developer</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer - Positioned cleanly at bottom */}
        <div className="rn-partners__disclaimer-wrap">
          <p className="rn-partners__disclaimer">
            <strong>Note:</strong> Developer names and marks represent companies whose projects we present based on client requirements. Projects presented are subject to developer approvals and RERA compliance.
          </p>
        </div>
      </div>

      {/* Interactive Glassmorphism Developer Detail Card Modal */}
      {selectedPartner && (
        <div
          className="rn-partner-modal__backdrop"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="partner-modal-title"
        >
          <div
            className="rn-partner-modal__card"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="rn-partner-modal__header">
              <div className="rn-partner-modal__brand">
                <div
                  className="rn-partner-modal__logo"
                  style={{ background: selectedPartner.bgColor || selectedPartner.brandColor, color: selectedPartner.textColor || '#FFFFFF' }}
                  aria-hidden="true"
                >
                  <span className="rn-partner-modal__logo-text">{selectedPartner.logoText}</span>
                </div>
                <div>
                  <div className="rn-partner-modal__title-row">
                    <h3 id="partner-modal-title" className="rn-partner-modal__title">
                      {selectedPartner.name}
                    </h3>
                    <span className="rn-partner-modal__verified-badge">
                      <ShieldCheck size={13} />
                      Verified Network Partner
                    </span>
                  </div>
                  <p className="rn-partner-modal__tagline">{selectedPartner.description}</p>
                </div>
              </div>

              <button
                ref={modalCloseBtnRef}
                type="button"
                className="rn-partner-modal__close"
                onClick={handleCloseModal}
                aria-label="Close developer detail card"
                id="close-developer-modal-btn"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="rn-partner-modal__body">
              {/* Overview */}
              <div className="rn-partner-modal__section">
                <h4 className="rn-partner-modal__section-heading">Company Overview</h4>
                <p className="rn-partner-modal__overview-text">{selectedPartner.overview}</p>
              </div>

              {/* Grid: Locations & Categories */}
              <div className="rn-partner-modal__meta-grid">
                {/* Operating Locations */}
                <div className="rn-partner-modal__meta-block">
                  <div className="rn-partner-modal__meta-header">
                    <MapPin size={15} className="rn-partner-modal__icon" />
                    <span>Operating Locations</span>
                  </div>
                  <div className="rn-partner-modal__pills">
                    {selectedPartner.locations.map((loc) => (
                      <span key={loc} className="rn-partner-modal__pill">
                        {loc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Development Categories */}
                <div className="rn-partner-modal__meta-block">
                  <div className="rn-partner-modal__meta-header">
                    <Building2 size={15} className="rn-partner-modal__icon" />
                    <span>Development Categories</span>
                  </div>
                  <div className="rn-partner-modal__pills">
                    {selectedPartner.categories.map((cat) => (
                      <span key={cat} className="rn-partner-modal__pill">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Projects in Portfolio */}
              <div className="rn-partner-modal__section">
                <div className="rn-partner-modal__meta-header">
                  <FolderGit2 size={15} className="rn-partner-modal__icon" />
                  <span>Key Projects in Portfolio</span>
                </div>
                <div className="rn-partner-modal__projects-list">
                  {selectedPartner.projects.map((proj) => (
                    <div key={proj} className="rn-partner-modal__project-chip">
                      <span className="rn-partner-modal__project-dot" />
                      <span>{proj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Notable Quality Standards & Features */}
              <div className="rn-partner-modal__section">
                <h4 className="rn-partner-modal__section-heading">Notable Features & Standards</h4>
                <ul className="rn-partner-modal__features-list">
                  {selectedPartner.features.map((feat) => (
                    <li key={feat} className="rn-partner-modal__feature-item">
                      <CheckCircle2 size={15} className="rn-partner-modal__check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="rn-partner-modal__footer">
              <a
                href={selectedPartner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="rn-partner-modal__website-btn"
                aria-label={`Visit official website of ${selectedPartner.name} (opens in new tab)`}
              >
                <span>Official Website</span>
                <ExternalLink size={14} />
              </a>

              <button
                type="button"
                className="btn btn-navy rn-partner-modal__cta-btn"
                onClick={() => handleEnquireAboutPartner(selectedPartner.name)}
                id="developer-enquire-cta-btn"
              >
                <span>Enquire About {selectedPartner.name} Projects</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

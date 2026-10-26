import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  MapPin,
  Building2,
  Calendar,
  Compass,
  CheckCircle2,
  X,
  Maximize2,
  ChevronRight,
  Home,
  PhoneCall,
} from 'lucide-react';
import { partners, type Partner, type GalleryItem } from '../../data/content';
import { companyContact } from '../../data/contactInfo';
import { DeveloperLogoRenderer } from '../DeveloperShowcase/DeveloperLogos';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { WhatsAppButton, BackToTop } from '../FloatingButtons/FloatingButtons';
import './DeveloperDetailPage.css';

export default function DeveloperDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  // Find partner by slug
  const partner: Partner | undefined = partners.find(
    (p) =>
      p.id === slug ||
      (slug === 'tvs' && p.id === 'tvs-emerald') ||
      (slug === 'jain' && p.id === 'jain-housing') ||
      (slug === 'jains' && p.id === 'jain-housing')
  );

  if (!partner) {
    return (
      <div className="rn-dev-not-found">
        <Header />
        <div className="container rn-dev-not-found__inner">
          <h2>Developer Not Found</h2>
          <p>The requested developer portfolio could not be found.</p>
          <Link to="/" className="btn btn-primary">
            <ArrowLeft size={16} />
            <span>Return to Homepage</span>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleEnquiry = () => {
    navigate('/#enquiry');
    setTimeout(() => {
      const el = document.querySelector('#enquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      const messageInput = document.querySelector<HTMLTextAreaElement>('#enq-message');
      if (messageInput) {
        messageInput.value = `I would like to explore available verified projects by ${partner.name}.`;
        messageInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }, 400);
  };

  return (
    <div className="rn-dev-detail-page">
      <Header />

      <main id="main-content" className="rn-dev-detail-main">
        {/* Breadcrumbs & Navigation Bar */}
        <div className="rn-dev-detail__breadcrumb-bar">
          <div className="container">
            <div className="rn-dev-detail__breadcrumb-inner">
              <nav aria-label="Breadcrumb" className="rn-dev-breadcrumbs">
                <Link to="/" className="rn-dev-breadcrumb-link">
                  <Home size={14} />
                  <span>Home</span>
                </Link>
                <ChevronRight size={13} className="rn-dev-breadcrumb-sep" />
                <Link to="/#developers-showcase" className="rn-dev-breadcrumb-link">
                  <span>Developers</span>
                </Link>
                <ChevronRight size={13} className="rn-dev-breadcrumb-sep" />
                <span className="rn-dev-breadcrumb-current">{partner.name}</span>
              </nav>

              <Link to="/#developers-showcase" className="rn-dev-back-link">
                <ArrowLeft size={14} />
                <span>All Developers</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Section A: Developer Hero */}
        <section className="rn-dev-hero" aria-labelledby="dev-hero-title">
          <div className="rn-dev-hero__bg-wrap" aria-hidden="true">
            <img
              src={partner.heroImage}
              alt={`${partner.name} landmark development`}
              className="rn-dev-hero__bg-img"
            />
            <div className="rn-dev-hero__overlay" />
          </div>

          <div className="container rn-dev-hero__container">
            <div className="rn-dev-hero__content">
              {/* Verified Network Partner Badge */}
              <div className="rn-dev-hero__badge">
                <ShieldCheck size={14} className="rn-dev-hero__shield" />
                <span>Verified Realnest Developer Partner</span>
              </div>

              {/* Developer Official Logo */}
              <div className="rn-dev-hero__logo-box">
                <DeveloperLogoRenderer id={partner.id} size="lg" />
              </div>

              <h1 id="dev-hero-title" className="rn-dev-hero__title">
                {partner.name}
              </h1>

              <p className="rn-dev-hero__tagline">{partner.tagline}</p>
              <p className="rn-dev-hero__intro">{partner.description}</p>

              {/* Key Quick Stats */}
              <div className="rn-dev-hero__meta-strip">
                <div className="rn-dev-hero__meta-item">
                  <Calendar size={14} className="rn-dev-hero__meta-icon" />
                  <div>
                    <span className="rn-dev-hero__meta-label">Established</span>
                    <strong>{partner.yearEstablished} ({partner.yearsInOperation})</strong>
                  </div>
                </div>

                <div className="rn-dev-hero__meta-item">
                  <MapPin size={14} className="rn-dev-hero__meta-icon" />
                  <div>
                    <span className="rn-dev-hero__meta-label">Headquarters</span>
                    <strong>{partner.headquarters}</strong>
                  </div>
                </div>

                <div className="rn-dev-hero__meta-item">
                  <Building2 size={14} className="rn-dev-hero__meta-icon" />
                  <div>
                    <span className="rn-dev-hero__meta-label">Primary Markets</span>
                    <strong>{partner.regions.join(', ')}</strong>
                  </div>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="rn-dev-hero__actions">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleEnquiry}
                  id="dev-hero-enquire-btn"
                >
                  <span>Explore {partner.name} Properties</span>
                  <ArrowRight size={16} />
                </button>

                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline rn-dev-hero__site-btn"
                  aria-label={`Visit official website of ${partner.name}`}
                >
                  <span>Official Website</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section B: Company Overview */}
        <section className="section rn-dev-section rn-dev-overview bg-ivory" aria-labelledby="dev-overview-heading">
          <div className="container">
            <div className="rn-dev-section-header">
              <span className="eyebrow">COMPANY BACKGROUND</span>
              <h2 id="dev-overview-heading" className="rn-dev-section-title">
                About {partner.name}
              </h2>
            </div>

            <div className="rn-dev-overview__card">
              <div className="rn-dev-overview__text">
                <p className="rn-dev-overview__lead">{partner.overview}</p>
                <div className="rn-dev-overview__callout">
                  <Compass size={18} className="rn-dev-overview__callout-icon" />
                  <div>
                    <strong>Realnest Advisory Alignment</strong>
                    <p>
                      Realnest works directly with developers to provide independent, objective property evaluation, transparent pricing, and comprehensive RERA legal verification for home buyers and institutional investors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rn-dev-overview__facts-grid">
                <div className="rn-fact-box">
                  <span className="rn-fact-box__label">Operating Track Record</span>
                  <strong className="rn-fact-box__value">{partner.yearsInOperation}</strong>
                  <span className="rn-fact-box__sub">Since {partner.yearEstablished}</span>
                </div>
                <div className="rn-fact-box">
                  <span className="rn-fact-box__label">Operating Hub</span>
                  <strong className="rn-fact-box__value">{partner.headquarters}</strong>
                  <span className="rn-fact-box__sub">RERA registered developments</span>
                </div>
                <div className="rn-fact-box">
                  <span className="rn-fact-box__label">Active Presence</span>
                  <strong className="rn-fact-box__value">{partner.regions.length} Key Metros</strong>
                  <span className="rn-fact-box__sub">{partner.regions.slice(0, 3).join(', ')}</span>
                </div>
                <div className="rn-fact-box">
                  <span className="rn-fact-box__label">Direct Link</span>
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rn-fact-box__link"
                  >
                    <span>{partner.website.replace('https://', '')}</span>
                    <ExternalLink size={13} />
                  </a>
                  <span className="rn-fact-box__sub">Official Developer Portal</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section C & D: Operating Locations & Development Categories */}
        <section className="section rn-dev-section rn-dev-scope" aria-labelledby="dev-scope-heading">
          <div className="container">
            <div className="rn-dev-scope__grid">
              {/* Section C: Operating Locations */}
              <div className="rn-dev-scope__col">
                <div className="rn-dev-scope__header">
                  <div className="rn-dev-scope__icon-box">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="eyebrow">REGIONAL FOOTPRINT</span>
                    <h3 id="dev-scope-heading" className="rn-dev-scope__title">
                      Operating Locations
                    </h3>
                  </div>
                </div>
                <p className="rn-dev-scope__desc">
                  Strategic growth corridors and urban neighborhoods where {partner.name} has delivered or is actively developing residential & commercial assets:
                </p>
                <div className="rn-dev-locations__pills">
                  {partner.locations.map((loc) => (
                    <div key={loc} className="rn-location-pill">
                      <span className="rn-location-pill__dot" />
                      <span>{loc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section D: Development Categories */}
              <div className="rn-dev-scope__col">
                <div className="rn-dev-scope__header">
                  <div className="rn-dev-scope__icon-box">
                    <Building2 size={20} />
                  </div>
                  <div>
                    <span className="eyebrow">PORTFOLIO DIVERSIFICATION</span>
                    <h3 className="rn-dev-scope__title">Development Categories</h3>
                  </div>
                </div>
                <p className="rn-dev-scope__desc">
                  Core asset classes delivered across master-planned enclaves and urban high-rise developments:
                </p>
                <div className="rn-dev-categories__list">
                  {partner.categories.map((cat) => (
                    <div key={cat} className="rn-category-card">
                      <CheckCircle2 size={16} className="rn-category-card__check" />
                      <span className="rn-category-card__name">{cat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section E: Key Projects in Portfolio */}
        <section className="section rn-dev-section rn-dev-projects bg-ivory" aria-labelledby="dev-projects-heading">
          <div className="container">
            <div className="rn-dev-section-header">
              <span className="eyebrow">PORTFOLIO HIGHLIGHTS</span>
              <h2 id="dev-projects-heading" className="rn-dev-section-title">
                Key Projects in Portfolio
              </h2>
              <p className="rn-dev-section-sub">
                Verified developments delivered by {partner.name} across Chennai and regional corridors.
              </p>
            </div>

            <div className="rn-dev-projects__grid">
              {partner.detailedProjects.map((project) => (
                <article key={project.name} className="rn-dev-project-card">
                  <div className="rn-dev-project-card__img-box">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="rn-dev-project-card__img"
                      loading="lazy"
                    />
                    <span className="rn-dev-project-card__category">{project.category}</span>
                    <span className="rn-dev-project-card__status">{project.status}</span>
                  </div>

                  <div className="rn-dev-project-card__content">
                    <div className="rn-dev-project-card__loc">
                      <MapPin size={13} />
                      <span>{project.location}</span>
                    </div>
                    <h3 className="rn-dev-project-card__title">{project.name}</h3>
                    {project.description && (
                      <p className="rn-dev-project-card__desc">{project.description}</p>
                    )}

                    <div className="rn-dev-project-card__footer">
                      <button
                        type="button"
                        className="rn-dev-project-card__cta"
                        onClick={handleEnquiry}
                      >
                        <span>Enquire About Project</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section F: Notable Features & Development Standards */}
        <section className="section rn-dev-section rn-dev-features" aria-labelledby="dev-features-heading">
          <div className="container">
            <div className="rn-dev-section-header text-center">
              <span className="eyebrow">BENCHMARK STANDARDS</span>
              <h2 id="dev-features-heading" className="rn-dev-section-title">
                Notable Features & Quality Standards
              </h2>
              <p className="rn-dev-section-sub">
                Demonstrated construction benchmarks, architectural hallmarks, and regulatory compliance standards.
              </p>
            </div>

            <div className="rn-dev-features__grid">
              {partner.features.map((feat, idx) => (
                <div key={idx} className="rn-dev-feature-item">
                  <div className="rn-dev-feature-item__num">0{idx + 1}</div>
                  <div className="rn-dev-feature-item__content">
                    <CheckCircle2 size={18} className="rn-dev-feature-item__check" />
                    <p>{feat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section G: Project Gallery */}
        <section className="section rn-dev-section rn-dev-gallery bg-ivory" aria-labelledby="dev-gallery-heading">
          <div className="container">
            <div className="rn-dev-section-header">
              <span className="eyebrow">PROJECT VISUALS</span>
              <h2 id="dev-gallery-heading" className="rn-dev-section-title">
                Project Gallery
              </h2>
              <p className="rn-dev-section-sub">
                Authentic photographs and architectural views of {partner.name} developments. Click any image for enlarged viewing.
              </p>
            </div>

            <div className="rn-dev-gallery__grid">
              {partner.gallery.map((item, idx) => (
                <div
                  key={idx}
                  className="rn-dev-gallery__card"
                  onClick={() => setSelectedImage(item)}
                  role="button"
                  tabIndex={0}
                  aria-label={`View enlarged photo of ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') setSelectedImage(item);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rn-dev-gallery__img"
                    loading="lazy"
                  />
                  <div className="rn-dev-gallery__overlay">
                    <div className="rn-dev-gallery__expand-btn">
                      <Maximize2 size={16} />
                    </div>
                    <div className="rn-dev-gallery__meta">
                      <h4 className="rn-dev-gallery__title">{item.title}</h4>
                      <p className="rn-dev-gallery__loc">
                        <MapPin size={12} />
                        <span>{item.location}</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section H: Realnest Call to Action */}
        <section className="section rn-dev-cta" aria-labelledby="dev-cta-heading">
          <div className="container">
            <div className="rn-dev-cta__card">
              <div className="rn-dev-cta__content">
                <span className="eyebrow rn-dev-cta__eyebrow">REALNEST ADVISORY ASSISTANCE</span>
                <h2 id="dev-cta-heading" className="rn-dev-cta__title">
                  Explore Properties With Realnest
                </h2>
                <p className="rn-dev-cta__desc">
                  Looking to purchase, invest, or lease within a <strong>{partner.name}</strong> development? Realnest provides independent due diligence, inventory shortlisting, unit negotiation, and transparent transaction facilitation.
                </p>

                <div className="rn-dev-cta__actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleEnquiry}
                    id="dev-bottom-cta-btn"
                  >
                    <span>Connect for {partner.name} Portfolio</span>
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href={`https://wa.me/${companyContact.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline rn-dev-cta__wa-btn"
                  >
                    <PhoneCall size={16} />
                    <span>Speak Directly With an Advisor</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal for Gallery Images */}
      {selectedImage && (
        <div
          className="rn-dev-lightbox"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
        >
          <div className="rn-dev-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="rn-dev-lightbox__close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
            >
              <X size={22} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="rn-dev-lightbox__img"
            />
            <div className="rn-dev-lightbox__caption">
              <h3>{selectedImage.title}</h3>
              <p>
                <MapPin size={13} />
                <span>{selectedImage.location}</span>
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
}

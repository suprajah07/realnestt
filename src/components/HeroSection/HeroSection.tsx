import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import './HeroSection.css';

const locationOptions = [
  'All of Chennai',
  'OMR / Sholinganallur',
  'Anna Nagar',
  'Adyar / Velachery',
  'Porur / Vadapalani',
  'Pallavaram / Chrompet',
  'ECR / Navalur',
  'Perambur / Kolathur',
  'Tambaram / Guduvancheri',
  'Oragadam',
];

const propertyTypes = ['All Types', 'Apartment', 'Villa', 'Residential Plot', 'Commercial'];

const budgetRanges = [
  'Any Budget',
  'Under ₹50 Lakhs',
  '₹50L – ₹1 Crore',
  '₹1 Cr – ₹2 Crore',
  '₹2 Cr – ₹5 Crore',
  'Above ₹5 Crore',
];

interface HeroSectionProps {
  onSearch?: (params: {
    mode: string;
    location: string;
    type: string;
    budget: string;
  }) => void;
}

export default function HeroSection({ onSearch }: HeroSectionProps) {
  const [mode, setMode] = useState<'buy' | 'rent'>('buy');
  const [location, setLocation] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [budget, setBudget] = useState('');
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const heroRef = useRef<HTMLElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Parallax and viewport playback management
  useEffect(() => {
    const heroEl = heroRef.current;
    const videoEl = videoRef.current;
    const videoWrapperEl = videoWrapperRef.current;

    if (!heroEl) return;

    // Check motion preference and screen capabilities
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobileDevice = window.innerWidth <= 768 || 'ontouchstart' in window;
    const enableParallax = !prefersReducedMotion && !isMobileDevice;

    let isHeroVisible = true;
    let rafId: number | null = null;
    let isTicking = false;

    // 1. Intersection Observer: Pause video when hero is scrolled out of viewport
    const visibilityObserver = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        isHeroVisible = entry.isIntersecting;

        if (videoEl) {
          if (entry.isIntersecting) {
            const playPromise = videoEl.play();
            if (playPromise !== undefined) {
              playPromise.catch(() => {
                // Autoplay may be restricted by user agent; poster remains visible
              });
            }
          } else {
            videoEl.pause();
          }
        }
      },
      {
        root: null,
        threshold: [0, 0.05],
      }
    );

    visibilityObserver.observe(heroEl);

    // 2. Subtle, bounded parallax scroll listener
    const updateParallax = () => {
      if (!videoWrapperEl || !heroEl || !isHeroVisible) {
        isTicking = false;
        return;
      }

      const scrollY = window.scrollY;
      const heroHeight = heroEl.offsetHeight;

      if (scrollY <= heroHeight) {
        const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1);
        // Bounded subtle parallax: max 20px translation, keeping foreground stable
        const translateY = Math.round(progress * 20);
        videoWrapperEl.style.transform = `translate3d(0, ${translateY}px, 0)`;
      }

      isTicking = false;
    };

    const handleScroll = () => {
      if (!isTicking && isHeroVisible) {
        isTicking = true;
        rafId = requestAnimationFrame(updateParallax);
      }
    };

    if (enableParallax) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      visibilityObserver.disconnect();
      if (enableParallax) {
        window.removeEventListener('scroll', handleScroll);
      }
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // Handle video loaded data to fade in smoothly
  const handleVideoLoadedData = useCallback(() => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.({ mode, location, type: propertyType, budget });
    const section = document.querySelector('#properties');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    const about = document.querySelector('#about');
    if (about) about.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={heroRef} className="rn-hero" aria-label="Realnest Hero section">
      {/* Background Video Layer with Subtle Parallax */}
      <div
        ref={videoWrapperRef}
        className={`rn-hero__bg ${isVideoLoaded ? 'is-video-ready' : ''}`}
        aria-hidden="true"
      >
        <video
          ref={videoRef}
          className="rn-hero__video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/videos/realnest-hero-poster.jpg"
          onLoadedData={handleVideoLoadedData}
          tabIndex={-1}
        >
          <source src="/videos/realnest-hero.mp4" type="video/mp4" />
        </video>

        {/* Lightweight Cinematic Overlays — preserves architecture & details while enhancing contrast */}
        <div className="rn-hero__overlay" />
        <div className="rn-hero__gradient" />
        <div className="rn-hero__bottom-fade" />
      </div>

      {/* Foreground Content — Centered, Stable & Art-Directed */}
      <div className="container rn-hero__container">
        <div className="rn-hero__content">
          {/* Eyebrow — Stage 1 Entrance */}
          <div className="rn-hero__eyebrow rn-hero__anim-eyebrow">
            <span className="rn-hero__eyebrow-dot" aria-hidden="true" />
            <span>Chennai's Premium Real Estate Partner</span>
          </div>

          {/* Headline — Stage 2 Entrance */}
          <h1 className="rn-hero__headline rn-hero__anim-headline">
            Find a Place That Feels Like Yours.
          </h1>

          {/* Supporting Text — Stage 3 Entrance */}
          <p className="rn-hero__subtext rn-hero__anim-subtext">
            Discover exceptional properties, explore remarkable developments, and make confident real estate decisions with Realnest.
          </p>

          {/* CTA Buttons — Stage 4 Entrance */}
          <div className="rn-hero__cta-group rn-hero__anim-cta">
            <a
              href="#properties"
              className="btn btn-primary btn-lg rn-hero__cta-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#properties')?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="hero-explore-btn"
            >
              <Search size={18} aria-hidden="true" />
              <span>Explore Properties</span>
            </a>
            <a
              href="#enquiry"
              className="btn btn-secondary btn-lg rn-hero__cta-secondary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="hero-experts-btn"
            >
              <span>Talk to Our Experts</span>
            </a>
          </div>

          {/* Search Panel — Stage 5 Entrance */}
          <div
            className="rn-hero__search-panel rn-hero__anim-search"
            role="search"
            aria-label="Property search"
          >
            {/* Mode Toggle */}
            <div className="rn-search-mode" role="group" aria-label="Transaction type">
              <button
                type="button"
                className={`rn-search-mode__btn ${mode === 'buy' ? 'rn-search-mode__btn--active' : ''}`}
                onClick={() => setMode('buy')}
                aria-pressed={mode === 'buy'}
                id="mode-buy-btn"
              >
                Buy
              </button>
              <button
                type="button"
                className={`rn-search-mode__btn ${mode === 'rent' ? 'rn-search-mode__btn--active' : ''}`}
                onClick={() => setMode('rent')}
                aria-pressed={mode === 'rent'}
                id="mode-rent-btn"
              >
                Rent
              </button>
            </div>

            <form className="rn-search-form" onSubmit={handleSearch}>
              {/* Location Field */}
              <div className="rn-search-field">
                <label htmlFor="hero-location" className="rn-search-field__label">
                  <MapPin size={14} aria-hidden="true" />
                  <span>Location</span>
                </label>
                <select
                  id="hero-location"
                  className="rn-search-field__input form-select"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  aria-label="Select location"
                >
                  {locationOptions.map((l) => (
                    <option key={l} value={l === 'All of Chennai' ? '' : l}>
                      {l}
                    </option>
                  ))}
                </select>
              </div>

              <div className="rn-search-divider" aria-hidden="true" />

              {/* Property Type Field */}
              <div className="rn-search-field">
                <label htmlFor="hero-type" className="rn-search-field__label">
                  Property Type
                </label>
                <select
                  id="hero-type"
                  className="rn-search-field__input form-select"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  aria-label="Select property type"
                >
                  {propertyTypes.map((t) => (
                    <option key={t} value={t === 'All Types' ? '' : t}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div className="rn-search-divider" aria-hidden="true" />

              {/* Budget Range Field */}
              <div className="rn-search-field">
                <label htmlFor="hero-budget" className="rn-search-field__label">
                  Budget Range
                </label>
                <select
                  id="hero-budget"
                  className="rn-search-field__input form-select"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  aria-label="Select budget range"
                >
                  {budgetRanges.map((b) => (
                    <option key={b} value={b === 'Any Budget' ? '' : b}>
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Submit Button */}
              <button
                type="submit"
                className="rn-search-btn"
                id="hero-search-btn"
                aria-label="Search properties"
              >
                <Search size={20} aria-hidden="true" />
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        type="button"
        className="rn-hero__scroll-indicator"
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        id="scroll-indicator-btn"
      >
        <span className="rn-hero__scroll-text">Scroll to Explore</span>
        <ChevronDown size={20} className="rn-hero__scroll-chevron" aria-hidden="true" />
      </button>
    </section>
  );
}

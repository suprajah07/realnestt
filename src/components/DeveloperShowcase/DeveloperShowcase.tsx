import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Building,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { partners } from '../../data/content';
import { DeveloperLogoRenderer } from './DeveloperLogos';
import './DeveloperShowcase.css';

export default function DeveloperShowcase() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const activeDev = partners[activeIndex] || partners[0];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % partners.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + partners.length) % partners.length);
  }, []);

  // Subtle continuous carousel advance, pausing when hovered or interacted
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  // Touch gesture support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 40) {
      handleNext();
    } else if (diff < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const handleSelectDeveloper = (index: number) => {
    if (index === activeIndex) {
      navigate(`/developer/${partners[index].id}`);
    } else {
      setActiveIndex(index);
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'Enter') {
      e.preventDefault();
      navigate(`/developer/${activeDev.id}`);
    }
  };

  return (
    <section
      id="developers-showcase"
      className="rn-3d-showcase"
      aria-labelledby="dev-showcase-heading"
    >
      {/* Subtle ambient lighting backdrop */}
      <div className="rn-3d-showcase__ambient-glow" aria-hidden="true" />

      <div className="container rn-3d-showcase__container">
        {/* Section Header */}
        <div className="rn-3d-showcase__header text-center">
          <div className="rn-3d-showcase__eyebrow-wrap">
            <Sparkles size={13} className="rn-3d-showcase__gold-spark" />
            <span className="eyebrow rn-3d-showcase__eyebrow">DEVELOPER NETWORK</span>
          </div>
          <h2 id="dev-showcase-heading" className="rn-3d-showcase__title">
            Working With Trusted <span className="rn-3d-showcase__gold">Property Developers</span>
          </h2>
          <p className="rn-3d-showcase__subtitle">
            Explore premier residential and commercial developments from Chennai’s most established builders.
            Click any logo to view the verified portfolio.
          </p>
        </div>

        {/* Linear-Inspired 3D Perspective Logo Arc */}
        <div
          className="rn-3d-showcase__stage-wrap"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="3D Developer Logos Carousel"
        >
          {/* Navigation Controls */}
          <button
            type="button"
            className="rn-3d-nav-arrow rn-3d-nav-arrow--prev"
            onClick={handlePrev}
            aria-label="Previous developer logo"
            id="dev-3d-prev-btn"
          >
            <ChevronLeft size={22} />
          </button>

          {/* 3D Arc Track */}
          <div className="rn-3d-showcase__arc-stage">
            {partners.map((dev, index) => {
              // Calculate circular offset relative to activeIndex
              const offset = (index - activeIndex + partners.length) % partners.length;
              let normalizedOffset = offset;
              if (normalizedOffset > partners.length / 2) {
                normalizedOffset -= partners.length;
              }

              const isCenter = normalizedOffset === 0;

              let posClass = 'rn-3d-logo--far';
              if (isCenter) posClass = 'rn-3d-logo--center';
              else if (normalizedOffset === 1) posClass = 'rn-3d-logo--right-1';
              else if (normalizedOffset === -1) posClass = 'rn-3d-logo--left-1';
              else if (normalizedOffset === 2) posClass = 'rn-3d-logo--right-2';
              else if (normalizedOffset === -2) posClass = 'rn-3d-logo--left-2';
              else if (normalizedOffset === 3) posClass = 'rn-3d-logo--right-3';
              else if (normalizedOffset === -3) posClass = 'rn-3d-logo--left-3';

              return (
                <div
                  key={dev.id}
                  className={`rn-3d-logo-node ${posClass}`}
                  onClick={() => handleSelectDeveloper(index)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${dev.name} - ${isCenter ? 'Click to open dedicated profile' : 'Click to center logo'}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectDeveloper(index);
                    }
                  }}
                >
                  <div className="rn-3d-logo-pedestal">
                    <DeveloperLogoRenderer
                      id={dev.id}
                      size={isCenter ? 'lg' : 'md'}
                    />
                    {isCenter && (
                      <span className="rn-3d-logo-status-dot" aria-hidden="true" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            className="rn-3d-nav-arrow rn-3d-nav-arrow--next"
            onClick={handleNext}
            aria-label="Next developer logo"
            id="dev-3d-next-btn"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Minimal Editorial Readout for Centered Active Developer */}
        <div className="rn-3d-showcase__readout">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDev.id}
              className="rn-3d-readout-card"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rn-3d-readout-header">
                <span className="rn-3d-verified-badge">
                  <ShieldCheck size={13} />
                  Verified Developer Partner
                </span>
                <h3 className="rn-3d-readout-title">{activeDev.name}</h3>
                <p className="rn-3d-readout-tagline">{activeDev.tagline}</p>
              </div>

              {/* Verified Quick Stats Pills */}
              <div className="rn-3d-readout-meta">
                <span className="rn-3d-meta-pill">
                  <Calendar size={13} className="rn-3d-meta-icon" />
                  <span>Est. {activeDev.yearEstablished} ({activeDev.yearsInOperation})</span>
                </span>
                <span className="rn-3d-meta-pill">
                  <Building size={13} className="rn-3d-meta-icon" />
                  <span>{activeDev.projects.length}+ Key Portfolios</span>
                </span>
                <span className="rn-3d-meta-pill">
                  <span>{activeDev.headquarters}</span>
                </span>
              </div>

              {/* Dedicated Profile Page Navigation Button */}
              <div className="rn-3d-readout-action">
                <button
                  type="button"
                  className="btn btn-primary rn-3d-cta-btn"
                  onClick={() => navigate(`/developer/${activeDev.id}`)}
                  id={`dev-3d-profile-btn-${activeDev.id}`}
                >
                  <span>Explore {activeDev.name} Dedicated Profile</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Dot Indicators */}
          <div className="rn-3d-showcase__dots" role="tablist" aria-label="Developer Selection">
            {partners.map((p, idx) => (
              <button
                key={p.id}
                type="button"
                role="tab"
                className={`rn-3d-dot ${activeIndex === idx ? 'rn-3d-dot--active' : ''}`}
                onClick={() => setActiveIndex(idx)}
                aria-selected={activeIndex === idx}
                aria-label={`Select ${p.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

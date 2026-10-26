import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Home,
  Key,
  BarChart3,
  FileText,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Pause,
  Play,
  type LucideIcon,
} from 'lucide-react';
import { services } from '../../data/content';
import './ServicesSection.css';

const iconMap: Record<string, LucideIcon> = {
  Home,
  Key,
  BarChart3,
  FileText,
};

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timerResetKey, setTimerResetKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  const activeService = services[activeIndex] || services[0];
  const Icon = iconMap[activeService.icon] || Home;

  // Reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  // Reliable 4-second autoplay timer that continuously loops through all 4 slides
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !isPlaying) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPlaying, timerResetKey]);

  // Touch swipe support with timer reset
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (diff > 45) {
      handleManualNext();
    } else if (diff < -45) {
      handleManualPrev();
    }
    touchStartX.current = null;
  };

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setTimerResetKey((k) => k + 1);
  };

  const handleManualNext = () => {
    handleNext();
    setTimerResetKey((k) => k + 1);
  };

  const handleManualPrev = () => {
    handlePrev();
    setTimerResetKey((k) => k + 1);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleScrollToCTA = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleManualNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handleManualPrev();
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className={`section rn-services bg-ivory ${isVisible ? 'rn-services--visible' : ''}`}
      aria-labelledby="services-heading"
    >
      <div className="rn-services__wrapper">
        {/* Section Header */}
        <div className="section-header rn-services__header reveal-heading">
          <p className="eyebrow reveal-fade-up">OUR SERVICES</p>
          <h2 id="services-heading" className="section-title">
            <span className="reveal-mask-line">
              <span>Everything You Need for</span>
            </span>
            <span className="reveal-mask-line">
              <span className="rn-services__gold-accent">Your Next Move.</span>
            </span>
          </h2>
          <p className="section-subtitle reveal-fade-up reveal-delay-1">
            End-to-end real estate support tailored to your lifestyle and investment objectives.
          </p>
        </div>

        {/* Service Category Navigation Tabs */}
        <div
          className="rn-services__nav-tabs reveal-fade-up reveal-delay-1"
          role="tablist"
          aria-label="Service categories"
        >
          {services.map((service, index) => {
            const TabIcon = iconMap[service.icon] || Home;
            const isActive = activeIndex === index;
            const stepNum = String(index + 1).padStart(2, '0');

            return (
              <button
                key={service.id}
                type="button"
                role="tab"
                id={`services-tab-${service.id}`}
                aria-selected={isActive}
                aria-controls={`services-panel-${service.id}`}
                className={`rn-services__nav-tab ${isActive ? 'rn-services__nav-tab--active' : ''}`}
                onClick={() => handleManualSelect(index)}
              >
                <span className="rn-services__tab-num">{stepNum}</span>
                <TabIcon size={16} className="rn-services__tab-icon" aria-hidden="true" />
                <span className="rn-services__tab-label">{service.title}</span>
                {isActive && (
                  <motion.div
                    layoutId="serviceTabIndicator"
                    className="rn-services__tab-active-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Cinematic Zoom-Blur Carousel Showcase */}
        <div
          className="rn-services__carousel-stage reveal-fade-up reveal-delay-2"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="Services carousel"
          aria-roledescription="carousel"
        >
          {/* Animated Background Image Stage with Zoom-Blur & Refined Crossfade */}
          <div className="rn-services__media-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                className="rn-services__media-slide"
                initial={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
                animate={{ opacity: 1, scale: 1.0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="rn-services__bg-img"
                  loading={activeIndex === 0 ? 'eager' : 'lazy'}
                />
              </motion.div>
            </AnimatePresence>

            {/* Dark Gradient Overlay for Maximum Readability */}
            <div className="rn-services__gradient-overlay" />
            <div className="rn-services__vignette-overlay" />
          </div>

          {/* Carousel Top Meta Bar */}
          <div className="rn-services__stage-header">
            <div className="rn-services__stage-badge">
              <span className="rn-services__badge-dot" />
              <span>{activeService.badge}</span>
            </div>

            <div className="rn-services__stage-controls">
              {/* Play/Pause Button */}
              <button
                type="button"
                className="rn-services__control-btn"
                onClick={togglePlayPause}
                aria-label={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
                title={isPlaying ? 'Pause autoplay' : 'Start autoplay'}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
              </button>

              {/* Prev Button */}
              <button
                type="button"
                className="rn-services__control-btn"
                onClick={handleManualPrev}
                aria-label="Previous service"
                id="services-carousel-prev"
              >
                <ChevronLeft size={18} />
              </button>

              {/* Slide Counter */}
              <div className="rn-services__counter">
                <span>0{activeIndex + 1}</span>
                <span className="rn-services__counter-divider">/</span>
                <span>0{services.length}</span>
              </div>

              {/* Next Button */}
              <button
                type="button"
                className="rn-services__control-btn"
                onClick={handleManualNext}
                aria-label="Next service"
                id="services-carousel-next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Content Overlay */}
          <div className="rn-services__stage-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                id={`services-panel-${activeService.id}`}
                role="tabpanel"
                aria-labelledby={`services-tab-${activeService.id}`}
                className="rn-services__panel-body"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="rn-services__panel-icon-wrap" aria-hidden="true">
                  <Icon size={24} />
                </div>

                <h3 className="rn-services__panel-title">{activeService.title}</h3>
                <p className="rn-services__panel-desc">{activeService.description}</p>
                <p className="rn-services__panel-caption">{activeService.caption}</p>

                {/* Highlights */}
                <div className="rn-services__highlights">
                  {activeService.highlights.map((item) => (
                    <div key={item} className="rn-services__highlight-chip">
                      <CheckCircle2 size={14} className="rn-services__check" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Action */}
                <div className="rn-services__panel-action">
                  <a
                    href={activeService.href}
                    className="btn btn-primary rn-services__cta-btn"
                    onClick={(e) => handleScrollToCTA(e, activeService.href)}
                    id={`service-hero-cta-${activeService.id}`}
                  >
                    <span>{activeService.cta}</span>
                    <ArrowRight size={16} />
                  </a>
                  <span className="rn-services__action-note">
                    Verified Advisory · Dedicated Relationship Manager
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress Indicator Bar along bottom */}
          <div className="rn-services__progress-track" aria-hidden="true">
            {services.map((_, idx) => (
              <div
                key={idx}
                className={`rn-services__progress-segment ${
                  activeIndex === idx ? 'rn-services__progress-segment--active' : ''
                } ${idx < activeIndex ? 'rn-services__progress-segment--completed' : ''}`}
                onClick={() => handleManualSelect(idx)}
              >
                <div
                  key={`fill-${idx}-${activeIndex === idx}-${isPlaying}-${timerResetKey}`}
                  className="rn-services__progress-fill"
                  style={{
                    animationDuration: isPlaying && activeIndex === idx ? '4000ms' : '0s',
                    animationPlayState: isPlaying ? 'running' : 'paused',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

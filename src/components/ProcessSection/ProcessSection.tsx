import { useEffect, useRef, useState, useCallback } from 'react';
import {
  MessageSquare,
  Search,
  Building2,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import './ProcessSection.css';

export interface ProcessStep {
  id: string;
  phaseName: string;
  icon: typeof MessageSquare;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
}

export const steps: ProcessStep[] = [
  {
    id: '01',
    phaseName: 'Consultation',
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    subtitle: 'Consultation & Criteria Alignment',
    description:
      'Share your preferred location, property type, budget, and timeline. We take the time to understand your lifestyle, investment goals, and non-negotiables before suggesting options.',
    highlights: ['Personalized consultation', 'Budget & location mapping', 'No pressure or pushy sales'],
  },
  {
    id: '02',
    phaseName: 'Market Review',
    icon: Search,
    title: 'We Understand Your Goals',
    subtitle: 'Market Review & Opportunity Shortlist',
    description:
      'Our team analyzes current inventory, filters projects with verified title deeds, and presents only handpicked opportunities that strictly match your expectations.',
    highlights: ['RERA & title verification', 'Curated shortlist', 'Comparative market pricing'],
  },
  {
    id: '03',
    phaseName: 'Evaluation',
    icon: Building2,
    title: 'Explore and Evaluate',
    subtitle: 'Private Walkthroughs & Diligence',
    description:
      'Review comprehensive property specifications, floor plans, and amenities. We arrange private guided walkthroughs and clarify every legal and technical detail.',
    highlights: ['Guided site visits', 'Document transparency', 'Objective pros & cons review'],
  },
  {
    id: '04',
    phaseName: 'Closing & Handover',
    icon: CheckCircle2,
    title: 'Move Forward With Confidence',
    subtitle: 'Transaction Support & Handover',
    description:
      'From unit allocation and developer negotiation to legal documentation, loan facilitation, and registration coordination, we guide you to a stress-free closing.',
    highlights: ['Negotiation advisory', 'End-to-end documentation', 'Post-purchase support'],
  },
];

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Intersection Observer for section reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  }, []);

  // Autoplay with pause on hover/focus & respect prefers-reduced-motion
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

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

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    }
  };

  const getPositionClass = (index: number) => {
    const diff = (index - activeIndex + steps.length) % steps.length;
    if (diff === 0) return 'rn-process-card--active';
    if (diff === 1) return 'rn-process-card--next';
    if (diff === steps.length - 1) return 'rn-process-card--prev';
    return 'rn-process-card--hidden';
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className={`section rn-process ${isVisible ? 'rn-process--visible' : ''}`}
      aria-labelledby="process-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="section-header reveal-heading">
          <p className="eyebrow reveal-fade-up">HOW WE WORK</p>
          <h2 id="process-heading" className="section-title">
            <span className="reveal-mask-line">
              <span>A Thoughtful, Structured</span>
            </span>
            <span className="reveal-mask-line">
              <span className="rn-process__gold-accent">Path to Your Next Property.</span>
            </span>
          </h2>
          <p className="section-subtitle reveal-fade-up reveal-delay-1">
            An editorial approach to property advisory — thorough, transparent, and built around your timeline.
          </p>
        </div>

        {/* Phase Indicator Navigation (Tablist) */}
        <div
          className="rn-process__stage-nav reveal-fade-up reveal-delay-1"
          role="tablist"
          aria-label="Process phases"
        >
          {steps.map((step, index) => {
            const isActive = activeIndex === index;
            const isCompleted = index < activeIndex;

            return (
              <button
                key={step.id}
                type="button"
                role="tab"
                id={`stage-tab-${step.id}`}
                aria-selected={isActive}
                aria-controls={`stage-card-${step.id}`}
                className={`rn-stage-pill ${isActive ? 'rn-stage-pill--active' : ''} ${
                  isCompleted ? 'rn-stage-pill--completed' : ''
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="rn-stage-pill__number">{step.id}</span>
                <span className="rn-stage-pill__label">{step.phaseName}</span>
                {isActive && <span className="rn-stage-pill__dot" aria-hidden="true" />}
              </button>
            );
          })}
        </div>

        {/* Clean Interactive Process Stage (Guaranteed Zero Overlap) */}
        <div
          className="rn-process__showcase reveal-fade-up reveal-delay-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-label="How We Work phases carousel"
          aria-roledescription="carousel"
        >
          {/* Navigation Controls Bar */}
          <div className="rn-process__controls-bar">
            <div className="rn-process__phase-indicator">
              <Sparkles size={14} className="rn-process__sparkle-icon" />
              <span>Phase {activeIndex + 1} of {steps.length}: <strong>{steps[activeIndex].phaseName}</strong></span>
            </div>

            <div className="rn-process__nav-actions">
              <button
                type="button"
                className="rn-process__nav-arrow rn-process__nav-arrow--prev"
                onClick={handlePrev}
                aria-label="Previous phase"
                id="process-prev-btn"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="rn-process__step-counter">
                {String(activeIndex + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                className="rn-process__nav-arrow rn-process__nav-arrow--next"
                onClick={handleNext}
                aria-label="Next phase"
                id="process-next-btn"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Cards Track Container */}
          <div className="rn-process__stage-track">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const posClass = getPositionClass(index);
              const isActive = activeIndex === index;

              return (
                <article
                  key={step.id}
                  id={`stage-card-${step.id}`}
                  role="tabpanel"
                  aria-labelledby={`stage-tab-${step.id}`}
                  aria-hidden={!isActive}
                  className={`rn-process-card ${posClass}`}
                  onClick={() => {
                    if (!isActive) setActiveIndex(index);
                  }}
                >
                  {/* Top Gold Accent Bar */}
                  <div className="rn-process-card__accent-bar" aria-hidden="true" />

                  {/* Card Header */}
                  <div className="rn-process-card__header">
                    <div className="rn-process-card__badge-wrap">
                      <span className="rn-process-card__step-tag">PHASE {step.id}</span>
                      <span className="rn-process-card__phase-name">{step.phaseName}</span>
                    </div>
                    <div className="rn-process-card__icon-box" aria-hidden="true">
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* Card Title & Content */}
                  <div className="rn-process-card__body">
                    <h3 className="rn-process-card__title">{step.title}</h3>
                    <span className="rn-process-card__subtitle">{step.subtitle}</span>
                    <p className="rn-process-card__desc">{step.description}</p>

                    {/* Key Highlights */}
                    <div className="rn-process-card__highlights">
                      {step.highlights.map((item) => (
                        <span key={item} className="rn-process-card__pill">
                          <CheckCircle2 size={13} className="rn-process-card__check-icon" />
                          <span>{item}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="rn-process-card__footer">
                    <a
                      href="#enquiry"
                      className="rn-process-card__cta"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      <span>Discuss Your Goals</span>
                      <ArrowRight size={14} className="rn-process-card__arrow" />
                    </a>
                    <span className="rn-process-card__step-progress">
                      Step {index + 1} of 4
                    </span>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Indicators & Autoplay Hint */}
          <div className="rn-process__footer-bar">
            <div className="rn-process__dots" role="tablist" aria-label="Slide indicators">
              {steps.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  className={`rn-process__dot ${activeIndex === idx ? 'rn-process__dot--active' : ''}`}
                  onClick={() => setActiveIndex(idx)}
                  aria-selected={activeIndex === idx}
                  aria-label={`Jump to phase ${idx + 1}: ${s.phaseName}`}
                />
              ))}
            </div>
            <span className="rn-process__pause-hint">
              {isPaused ? 'Paused for interaction' : 'Autoplay active · Hover to pause'}
            </span>
          </div>
        </div>

        {/* Bottom Call to Action Box */}
        <div className="rn-process__bottom-cta">
          <div className="rn-process__cta-box">
            <div className="rn-process__cta-text">
              <h4>Ready to begin your property search in Chennai?</h4>
              <p>Our experienced advisory team is ready to guide you step-by-step.</p>
            </div>
            <a
              href="#enquiry"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="process-start-journey-btn"
            >
              <span>Start Your Property Journey</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

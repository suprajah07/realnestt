import { useRef } from 'react';
import { Star, MapPin, CheckCircle, ChevronLeft, ChevronRight, Building } from 'lucide-react';
import { testimonials, type Testimonial } from '../../data/content';
import './TestimonialsSection.css';

interface TestimonialCardProps {
  t: Testimonial;
  isDuplicate?: boolean;
}

function InstagramPropertyReviewCard({ t, isDuplicate = false }: TestimonialCardProps) {
  return (
    <article
      className="rn-insta-card"
      aria-label={`Property testimonial by ${t.name}`}
      aria-hidden={isDuplicate}
    >
      {/* 1. Header (User profile bar inspired by social feeds) */}
      <div className="rn-insta-card__header">
        <div className="rn-insta-card__avatar-wrap">
          <div className="rn-insta-card__avatar">{t.initials}</div>
          <span className="rn-insta-card__avatar-badge" aria-hidden="true" />
        </div>
        <div className="rn-insta-card__user-info">
          <div className="rn-insta-card__user-name-row">
            <span className="rn-insta-card__user-name">{t.name}</span>
            <CheckCircle size={13} className="rn-insta-card__verified-icon" aria-label="Verified Client" />
          </div>
          <span className="rn-insta-card__user-sub">
            {t.transactionType} • {t.location}
          </span>
        </div>
        <div className="rn-insta-card__more-dots" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* 2. Featured Property Photograph */}
      <div className="rn-insta-card__media-wrap">
        <img
          src={t.propertyImage}
          alt={`${t.propertyContext} property in Chennai`}
          className="rn-insta-card__img"
          loading="lazy"
          width="400"
          height="250"
        />
        <div className="rn-insta-card__media-overlay" />
        
        {/* Property Context Tag */}
        <span className="rn-insta-card__context-pill">
          <Building size={11} aria-hidden="true" />
          <span>{t.propertyContext}</span>
        </span>

        {/* Rating Pill overlay */}
        <div className="rn-insta-card__rating-pill">
          <Star size={12} fill="var(--champagne-gold)" stroke="var(--champagne-gold)" />
          <span>5.0 / 5.0</span>
        </div>
      </div>

      {/* 3. Review Content & Star Rating */}
      <div className="rn-insta-card__content">
        <div className="rn-insta-card__stars-row">
          <div className="rn-insta-card__stars" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={i < t.rating ? 'var(--champagne-gold)' : 'none'}
                stroke={i < t.rating ? 'var(--champagne-gold)' : 'var(--soft-border)'}
              />
            ))}
          </div>
          <span className="rn-insta-card__stars-rating">5.0 Star Rating</span>
        </div>

        {/* Customer Quote */}
        <blockquote className="rn-insta-card__quote">
          <p>"{t.quote}"</p>
        </blockquote>
      </div>

      {/* 4. Footer info */}
      <div className="rn-insta-card__footer">
        <div className="rn-insta-card__footer-location">
          <MapPin size={13} className="rn-insta-card__pin-icon" />
          <span>{t.location}</span>
        </div>
        <span className="rn-insta-card__engagement-tag">Chennai Advisory</span>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (marqueeRef.current) {
      marqueeRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="testimonials"
      className="section rn-testimonials bg-ivory"
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        <div className="section-header reveal-heading">
          <p className="eyebrow reveal-fade-up">CLIENT EXPERIENCES & PROPERTY STORIES</p>
          <h2 id="testimonials-heading" className="section-title">
            <span className="reveal-mask-line"><span>Real People. Real Properties.</span></span>
            <span className="reveal-mask-line">
              <span className="rn-testimonials__gold-accent">Proven Advice in Chennai.</span>
            </span>
          </h2>
          <p className="section-subtitle reveal-fade-up reveal-delay-1">
            Browse verified advisory engagements and authentic experiences from buyers, sellers, and investors across Chennai.
          </p>
        </div>
      </div>

      {/* Continuous Instagram-Inspired Property Review Carousel */}
      <div
        className="rn-testimonials__carousel-container"
        aria-label="Instagram-style customer review carousel"
      >
        {/* Navigation Scrub Buttons (Desktop/Tablet) */}
        <button
          type="button"
          className="rn-testimonials__nav-btn rn-testimonials__nav-btn--prev"
          onClick={scrollLeft}
          aria-label="Scroll testimonials left"
        >
          <ChevronLeft size={20} />
        </button>

        <div
          ref={marqueeRef}
          className="rn-testimonials__marquee"
          tabIndex={0}
          role="region"
          aria-label="Client review feed"
        >
          <div className="rn-testimonials__track">
            {/* Primary Track Set */}
            {testimonials.map((t) => (
              <InstagramPropertyReviewCard key={`test-orig-${t.id}`} t={t} isDuplicate={false} />
            ))}
            {/* Duplicate Set for Seamless Continuous Looping */}
            {testimonials.map((t) => (
              <InstagramPropertyReviewCard key={`test-dup-${t.id}`} t={t} isDuplicate={true} />
            ))}
          </div>
        </div>

        <button
          type="button"
          className="rn-testimonials__nav-btn rn-testimonials__nav-btn--next"
          onClick={scrollRight}
          aria-label="Scroll testimonials right"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Bottom CTA & Share */}
      <div className="container">
        <div className="rn-testimonials__share reveal-fade-up">
          <a
            href="#enquiry"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' });
            }}
            id="testimonials-share-btn"
          >
            <span>Share Your Experience With Realnest</span>
          </a>
        </div>
      </div>
    </section>
  );
}

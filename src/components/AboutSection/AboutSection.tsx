import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Award,
  Sparkles,
} from 'lucide-react';
import './AboutSection.css';

interface StatCounterProps {
  target: number;
  duration?: number;
  isActive: boolean;
}

function StatCounter({ target, duration = 1800, isActive }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isActive || hasAnimated.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCount(target);
      hasAnimated.current = true;
      return;
    }

    hasAnimated.current = true;
    let startTime: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth, high-precision cubic deceleration (1 - (1 - t)^3)
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isActive, target, duration]);

  return <span className="rn-metric-item__val">{count}</span>;
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  // Specific observer for the statistics section so counting starts exactly when metrics enter the viewport
  const isMetricsInView = useInView(metricsRef, { once: true, amount: 0.25, margin: '0px 0px -30px 0px' });

  const handleEnquiry = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`rn-about ${isInView ? 'rn-about--in-view' : ''}`}
      aria-labelledby="about-heading"
    >
      {/* Subtle Architectural Backdrop */}
      <div className="rn-about__backdrop-layer" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&auto=format&fit=crop&q=85"
          alt=""
          className="rn-about__backdrop-img"
          loading="lazy"
        />
        <div className="rn-about__backdrop-gradient" />
      </div>

      <div className="rn-about__container">
        {/* Main 2-Column Showcase */}
        <div className="rn-about__card">
          <div className="rn-about__grid">
            {/* Left Side: Owner / Founder Portrait with Smooth Zoom-Reveal */}
            <motion.div
              className="rn-about__portrait-col"
              initial={{ opacity: 0, scale: 0.90, y: 24 }}
              animate={isInView ? { opacity: 1, scale: 1.0, y: 0 } : { opacity: 0, scale: 0.90, y: 24 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="rn-about__portrait-frame">
                <div className="rn-about__portrait-img-box">
                  <img
                    src="/about-advisor.jpg"
                    alt="Realnest Founder & Principal Advisory Director"
                    className="rn-about__portrait-img"
                    loading="lazy"
                    width="460"
                    height="580"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.dataset.fallback) {
                        target.dataset.fallback = 'true';
                        target.src = 'https://images.unsplash.com/photo-1560250097-0dc05ae06d32?w=800&q=85';
                      }
                    }}
                  />
                  <div className="rn-about__portrait-overlay" />
                  
                  {/* Experience Badge */}
                  <div className="rn-about__portrait-badge">
                    <Award size={18} className="rn-about__badge-award-icon" />
                    <div>
                      <strong>10+ Years Experience</strong>
                      <span>Chennai Real Estate Advisory</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Company Introduction with Coordinated Text Fade-In */}
            <motion.div
              className="rn-about__story-col"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Eyebrow */}
              <div className="rn-about__eyebrow-wrap">
                <span className="rn-about__eyebrow">
                  <Sparkles size={13} className="rn-about__gold-icon" />
                  WHO WE ARE
                </span>
                <span className="rn-about__role-tag">
                  <ShieldCheck size={14} />
                  FOUNDER & PRINCIPAL ADVISORY
                </span>
              </div>

              {/* Section Main Title */}
              <h2 id="about-heading" className="rn-about__title">
                An Independent Advisory Firm Grounded in Integrity
              </h2>

              {/* Editorial Company Story */}
              <div className="rn-about__story-body">
                <p>
                  At Realnest, we believe acquiring or divesting real estate is one of life’s most pivotal decisions. Our advisory philosophy is founded on objective due diligence, complete transparency, and patient client representation without high-pressure sales tactics.
                </p>
                <p>
                  Over the past decade serving Chennai’s dynamic residential and commercial property markets, our team has curated handpicked developments with verified title deeds, evaluated micro-market growth corridors across OMR, ECR, and Central Chennai, and guided more than 500 discerning families and investors.
                </p>
              </div>

              {/* Core Standards / Service Commitments */}
              <div className="rn-about__commitments">
                <div className="rn-about__commitment-item">
                  <CheckCircle2 size={16} className="rn-about__check-icon" />
                  <span>Direct client representation & objective property audits</span>
                </div>
                <div className="rn-about__commitment-item">
                  <CheckCircle2 size={16} className="rn-about__check-icon" />
                  <span>Comprehensive RERA title deed verification & legal transparency</span>
                </div>
                <div className="rn-about__commitment-item">
                  <CheckCircle2 size={16} className="rn-about__check-icon" />
                  <span>Deep micro-market intelligence across OMR, ECR & Central Chennai</span>
                </div>
                <div className="rn-about__commitment-item">
                  <CheckCircle2 size={16} className="rn-about__check-icon" />
                  <span>End-to-end transaction facilitation from initial scrutiny to handover</span>
                </div>
              </div>

              {/* CTA Action Bar */}
              <div className="rn-about__action-row">
                <a
                  href="#enquiry"
                  className="btn btn-primary rn-about__cta-btn"
                  onClick={handleEnquiry}
                  id="about-connect-team-btn"
                >
                  <span>Connect With Our Advisory Team</span>
                  <ArrowRight size={16} />
                </a>
                <span className="rn-about__action-sub">
                  Confidential Consultations · No Obligation
                </span>
              </div>
            </motion.div>
          </div>

          {/* Performance Metrics Dashboard — Live Loading Counting Animation */}
          <motion.div
            ref={metricsRef}
            className="rn-about__metrics-band"
            initial={{ opacity: 0, y: 18 }}
            animate={isMetricsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="rn-metric-item">
              <div className="rn-metric-item__num">
                <StatCounter target={500} duration={1900} isActive={isMetricsInView} />
                <span className="rn-metric-item__suffix">+</span>
              </div>
              <span className="rn-metric-item__label">Customers Served</span>
              <p className="rn-metric-item__desc">Families and investors guided to property goals</p>
            </div>

            <div className="rn-metric-item">
              <div className="rn-metric-item__num">
                <StatCounter target={85} duration={1700} isActive={isMetricsInView} />
                <span className="rn-metric-item__suffix">%+</span>
              </div>
              <span className="rn-metric-item__label">Client Satisfaction</span>
              <p className="rn-metric-item__desc">Consistently recommend our advisory services</p>
            </div>

            <div className="rn-metric-item">
              <div className="rn-metric-item__num">
                <span className="rn-metric-item__prefix">Top </span>
                <StatCounter target={5} duration={1400} isActive={isMetricsInView} />
              </div>
              <span className="rn-metric-item__label">Market Ranking</span>
              <p className="rn-metric-item__desc">Among preferred property advisors in Chennai</p>
            </div>

            <div className="rn-metric-item">
              <div className="rn-metric-item__num">
                <StatCounter target={10} duration={1500} isActive={isMetricsInView} />
                <span className="rn-metric-item__suffix">+</span>
              </div>
              <span className="rn-metric-item__label">Years of Experience</span>
              <p className="rn-metric-item__desc">Dedicated local real estate domain expertise</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

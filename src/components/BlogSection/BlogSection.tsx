import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '../../data/content';
import './BlogSection.css';

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="insights"
      ref={sectionRef}
      className={`section rn-blog bg-ivory ${isVisible ? 'rn-blog--visible' : ''}`}
      aria-labelledby="insights-heading"
    >
      <div className="container">
        <div className="section-header reveal-heading">
          <p className="eyebrow reveal-fade-up">PROPERTY INSIGHTS</p>
          <h2 id="insights-heading" className="section-title">
            <span className="reveal-mask-line"><span>Property Insights That</span></span>
            <span className="reveal-mask-line">
              <span style={{ color: 'var(--champagne-gold)' }}>Help You Decide.</span>
            </span>
          </h2>
          <p className="section-subtitle reveal-fade-up reveal-delay-1">
            Explore practical guidance, market explainers, and updates from the world of real estate.
          </p>
        </div>

        <div className="rn-blog__grid">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="rn-blog-card reveal-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="rn-blog-card__img-wrap">
                <img
                  src={post.image}
                  alt={`Cover image for article: ${post.title}`}
                  className="rn-blog-card__img"
                  loading="lazy"
                  width="400"
                  height="240"
                />
                <div className="rn-blog-card__img-overlay" aria-hidden="true" />
                <span className="badge badge-gold rn-blog-card__category">
                  {post.category}
                </span>
              </div>

              {/* Body */}
              <div className="rn-blog-card__body">
                <div className="rn-blog-card__meta">
                  <span className="rn-blog-card__date">
                    <Calendar size={13} aria-hidden="true" />
                    {formatDate(post.publishedDate)}
                  </span>
                  <span className="rn-blog-card__read-time">
                    <Clock size={13} aria-hidden="true" />
                    {post.readTime} min read
                  </span>
                </div>

                <h3 className="rn-blog-card__title">{post.title}</h3>
                <p className="rn-blog-card__excerpt">{post.excerpt}</p>

                <button
                  className="rn-blog-card__cta"
                  onClick={() => {
                    // In a full implementation, this would navigate to the article page
                    document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  aria-label={`Read article: ${post.title}`}
                  id={`blog-read-${post.id}`}
                >
                  Read Article
                  <ArrowRight size={15} className="rn-blog-card__arrow" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="rn-blog__view-all">
          <a
            href="#enquiry"
            className="btn btn-outline"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' });
            }}
            id="blog-view-all-btn"
          >
            Get Personalised Property Advice
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

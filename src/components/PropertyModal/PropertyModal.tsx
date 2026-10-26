import { useEffect, useRef, useState } from 'react';
import { X, MapPin, Maximize2, BedDouble, Calendar, ChevronLeft, ChevronRight, Phone, Waves, Dumbbell, Building2, Star, Activity, Shield, Gamepad2, TreePine, Zap, Laptop, Monitor, Wifi, MapPinIcon, Lightbulb, Droplets, Users, type LucideIcon } from 'lucide-react';
import type { Property } from '../../data/properties';
import './PropertyModal.css';

const iconComponents: Record<string, LucideIcon> = {
  Waves, Dumbbell, Building2, Star, Activity, Shield, Gamepad2, TreePine,
  Zap, Laptop, Monitor, Wifi, MapPin: MapPinIcon, Lightbulb, Droplets, Users,
};

interface PropertyModalProps {
  property: Property;
  onClose: () => void;
}

export default function PropertyModal({ property, onClose }: PropertyModalProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const allImages = [property.image, ...(property.gallery || []).filter(img => img !== property.image)];

  useEffect(() => {
    // Trap focus inside modal
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleEnquire = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <div
      className="rn-modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label={`Property details: ${property.name}`}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="rn-modal" ref={modalRef}>
        {/* Close */}
        <button
          ref={closeRef}
          className="rn-modal__close"
          onClick={onClose}
          aria-label="Close property details"
          id="modal-close-btn"
        >
          <X size={20} />
        </button>

        {/* Image Gallery */}
        <div className="rn-modal__gallery">
          <img
            src={allImages[currentImage]}
            alt={`${property.name} - image ${currentImage + 1}`}
            className="rn-modal__gallery-img"
          />

          {allImages.length > 1 && (
            <>
              <button
                className="rn-modal__gallery-btn rn-modal__gallery-btn--prev"
                onClick={() => setCurrentImage(i => (i - 1 + allImages.length) % allImages.length)}
                aria-label="Previous image"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="rn-modal__gallery-btn rn-modal__gallery-btn--next"
                onClick={() => setCurrentImage(i => (i + 1) % allImages.length)}
                aria-label="Next image"
              >
                <ChevronRight size={20} />
              </button>
              <div className="rn-modal__gallery-dots" aria-label="Gallery navigation">
                {allImages.map((_, idx) => (
                  <button
                    key={idx}
                    className={`rn-modal__gallery-dot ${idx === currentImage ? 'active' : ''}`}
                    onClick={() => setCurrentImage(idx)}
                    aria-label={`Image ${idx + 1}`}
                    aria-current={idx === currentImage}
                  />
                ))}
              </div>
            </>
          )}

          {property.badge && (
            <span
              className={`badge ${
                property.badge === 'Ready to Move'
                  ? 'badge-green'
                  : property.badge === 'Limited Units'
                  ? 'badge-navy'
                  : 'badge-gold'
              } rn-modal__gallery-badge`}
            >
              {property.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="rn-modal__body">
          {/* Header */}
          <div className="rn-modal__header">
            <div>
              <p className="rn-modal__developer">{property.developer}</p>
              <h2 className="rn-modal__name">{property.name}</h2>
              <div className="rn-modal__location">
                <MapPin size={15} />
                <span>{property.location}, {property.city}</span>
              </div>
            </div>
            <div className="rn-modal__price-block">
              <span className="rn-modal__price-label">Starting From</span>
              <span className="rn-modal__price">{property.price.label}</span>
              {property.possession && (
                <span className="rn-modal__possession">
                  <Calendar size={13} />
                  Possession: {property.possession}
                </span>
              )}
            </div>
          </div>

          {/* Quick Specs */}
          <div className="rn-modal__specs">
            <div className="rn-modal__spec">
              <Maximize2 size={16} />
              <div>
                <span className="rn-modal__spec-label">Area</span>
                <span className="rn-modal__spec-val">
                  {property.area.min.toLocaleString('en-IN')}
                  {property.area.max !== property.area.min && `–${property.area.max.toLocaleString('en-IN')}`}{' '}
                  {property.area.unit}
                </span>
              </div>
            </div>
            {property.bedrooms && (
              <div className="rn-modal__spec">
                <BedDouble size={16} />
                <div>
                  <span className="rn-modal__spec-label">Configuration</span>
                  <span className="rn-modal__spec-val">{property.bedrooms}</span>
                </div>
              </div>
            )}
            <div className="rn-modal__spec">
              <Building2 size={16} />
              <div>
                <span className="rn-modal__spec-label">Type</span>
                <span className="rn-modal__spec-val" style={{ textTransform: 'capitalize' }}>
                  {property.category}
                </span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="rn-modal__section">
            <h3 className="rn-modal__section-title">About This Property</h3>
            <p className="rn-modal__desc">{property.description}</p>
          </div>

          {/* Highlights */}
          {property.highlights.length > 0 && (
            <div className="rn-modal__section">
              <h3 className="rn-modal__section-title">Key Highlights</h3>
              <ul className="rn-modal__highlights">
                {property.highlights.map((h) => (
                  <li key={h} className="rn-modal__highlight">
                    <span className="rn-modal__highlight-dot" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Amenities */}
          {property.amenities.length > 0 && (
            <div className="rn-modal__section">
              <h3 className="rn-modal__section-title">Amenities</h3>
              <div className="rn-modal__amenities">
                {property.amenities.map((amenity) => {
                  const Icon = iconComponents[amenity.icon];
                  return (
                    <div key={amenity.name} className="rn-modal__amenity">
                      {Icon && <Icon size={18} />}
                      <span>{amenity.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Disclaimer */}
          <p className="rn-modal__disclaimer">
            Property information, pricing, and availability are subject to change. Please contact our advisory team for verified real-time details and site visits.
          </p>

          {/* CTA */}
          <div className="rn-modal__footer">
            <a
              href="#enquiry"
              className="btn btn-primary btn-lg w-full"
              onClick={handleEnquire}
              id="modal-enquire-btn"
            >
              <Phone size={18} />
              Enquire About This Property
            </a>
            <button
              className="btn btn-outline w-full"
              onClick={onClose}
              id="modal-back-btn"
            >
              Back to Listings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

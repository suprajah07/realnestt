import { useState, useMemo } from 'react';
import { Heart, MapPin, Maximize2, BedDouble, ArrowRight, Building2, X } from 'lucide-react';
import { properties, categoryFilters, filterLabels, type PropertyCategory, type Property } from '../../data/properties';
import PropertyModal from '../PropertyModal/PropertyModal';
import './PropertiesSection.css';

interface PropertyCardProps {
  property: Property;
  onSelect: (p: Property) => void;
}

function PropertyCard({ property, onSelect }: PropertyCardProps) {
  const [isFav, setIsFav] = useState(false);
  const [imgError, setImgError] = useState(false);

  const statusColors: Record<string, string> = {
    'ready': 'badge-green',
    'under-construction': 'badge-ivory',
    'new-launch': 'badge-gold',
    'upcoming': 'badge-navy',
  };

  const statusLabels: Record<string, string> = {
    'ready': 'Ready to Move',
    'under-construction': 'Under Construction',
    'new-launch': 'New Launch',
    'upcoming': 'Upcoming',
  };

  const getBadgeClass = (badge?: string, status?: string) => {
    if (badge === 'Featured' || badge === 'New Launch') return 'badge-gold';
    if (badge === 'Ready to Move') return 'badge-green';
    if (badge === 'Limited Units') return 'badge-navy';
    if (status && statusColors[status]) return statusColors[status];
    return 'badge-gold';
  };

  return (
    <article className="rn-prop-card" aria-label={`${property.name} in ${property.location}`}>
      {/* Image */}
      <div className="rn-prop-card__img-wrap">
        <img
          src={imgError ? 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80' : property.image}
          alt={`${property.name} - ${property.category} in ${property.location}, Chennai`}
          className="rn-prop-card__img"
          loading="lazy"
          width="400"
          height="280"
          onError={() => setImgError(true)}
        />
        {/* Overlay */}
        <div className="rn-prop-card__img-overlay" aria-hidden="true" />

        {/* Badge */}
        {property.badge && (
          <span className={`badge ${getBadgeClass(property.badge, property.status)} rn-prop-card__badge`}>
            {property.badge}
          </span>
        )}

        {/* Favourite */}
        <button
          className={`rn-prop-card__fav ${isFav ? 'rn-prop-card__fav--active' : ''}`}
          onClick={(e) => { e.stopPropagation(); setIsFav(!isFav); }}
          aria-label={isFav ? `Remove ${property.name} from saved` : `Save ${property.name}`}
          aria-pressed={isFav}
        >
          <Heart size={16} fill={isFav ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Body */}
      <div className="rn-prop-card__body">
        <div className="rn-prop-card__meta">
          <span className={`badge ${statusColors[property.status]} text-xs`}>
            {statusLabels[property.status]}
          </span>
          <span className="rn-prop-card__category text-xs">
            <Building2 size={12} aria-hidden="true" />
            {property.category.charAt(0).toUpperCase() + property.category.slice(1)}
          </span>
        </div>

        <h3 className="rn-prop-card__name">{property.name}</h3>

        <div className="rn-prop-card__location">
          <MapPin size={14} aria-hidden="true" />
          <span>{property.location}, {property.city}</span>
        </div>

        {/* Specs */}
        <div className="rn-prop-card__specs">
          <div className="rn-prop-card__spec">
            <Maximize2 size={13} aria-hidden="true" />
            <span>{property.area.min.toLocaleString('en-IN')}
              {property.area.max !== property.area.min && `–${property.area.max.toLocaleString('en-IN')}`}{' '}
              {property.area.unit}
            </span>
          </div>
          {property.bedrooms && (
            <div className="rn-prop-card__spec">
              <BedDouble size={13} aria-hidden="true" />
              <span>{property.bedrooms}</span>
            </div>
          )}
        </div>

        {/* Price & CTA */}
        <div className="rn-prop-card__footer">
          <div className="rn-prop-card__price">
            <span className="rn-prop-card__price-label">Starting From</span>
            <span className="rn-prop-card__price-value">{property.price.label}</span>
            {property.possession && (
              <span className="rn-prop-card__possession">
                Possession: {property.possession}
              </span>
            )}
          </div>
          <button
            className="btn btn-navy btn-sm rn-prop-card__view-btn"
            onClick={() => onSelect(property)}
            aria-label={`View details for ${property.name}`}
          >
            Explore
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function PropertiesSection() {
  const [activeFilter, setActiveFilter] = useState<PropertyCategory>('all');
  const [sortBy, setSortBy] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const filteredProperties = useMemo(() => {
    let list = properties.filter((p) => {
      if (activeFilter === 'all') return true;
      if (activeFilter === 'ready') return p.status === 'ready';
      if (activeFilter === 'upcoming') return p.status === 'under-construction' || p.status === 'upcoming' || p.status === 'new-launch';
      return p.category === activeFilter || p.tags?.includes(activeFilter);
    });

    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.price.min - b.price.min);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.price.min - a.price.min);
    }

    return list;
  }, [activeFilter, sortBy]);

  return (
    <section id="properties" className="section rn-properties" aria-labelledby="properties-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header reveal-heading">
          <p className="eyebrow reveal-fade-up">FEATURED PROPERTIES</p>
          <h2 id="properties-heading" className="section-title">
            <span className="reveal-mask-line"><span>Exceptional Properties.</span></span>
            <span className="reveal-mask-line">
              <span style={{ color: 'var(--champagne-gold)' }}>Remarkable Possibilities.</span>
            </span>
          </h2>
          <p className="section-subtitle reveal-fade-up reveal-delay-1">
            Explore carefully presented properties and residential developments across Chennai.
          </p>
        </div>

        {/* Controls */}
        <div className="rn-properties__controls">
          {/* Category Filters */}
          <div className="rn-prop-filters" role="group" aria-label="Property category filters">
            {categoryFilters.map((cat) => (
              <button
                key={cat}
                className={`rn-prop-filter ${activeFilter === cat ? 'rn-prop-filter--active' : ''}`}
                onClick={() => setActiveFilter(cat)}
                aria-pressed={activeFilter === cat}
                id={`filter-${cat}-btn`}
              >
                {filterLabels[cat]}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="rn-properties__sort">
            <select
              className="form-input form-select rn-properties__sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort properties"
              id="properties-sort-select"
            >
              <option value="">Sort by</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results count */}
        <div className="rn-properties__count" aria-live="polite" aria-atomic="true">
          <span>
            {filteredProperties.length} propert{filteredProperties.length === 1 ? 'y' : 'ies'} found
          </span>
          {activeFilter !== 'all' && (
            <button
              className="rn-clear-filter"
              onClick={() => setActiveFilter('all')}
              aria-label="Clear property filter"
              id="clear-filter-btn"
            >
              <X size={14} />
              Clear filter
            </button>
          )}
        </div>

        {/* Property Grid */}
        {filteredProperties.length > 0 ? (
          <div className="rn-properties__grid">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={setSelectedProperty}
              />
            ))}
          </div>
        ) : (
          <div className="rn-properties__empty" role="status">
            <Building2 size={48} aria-hidden="true" />
            <h3>No properties found</h3>
            <p>Try selecting a different category or clear the current filter.</p>
            <button
              className="btn btn-navy"
              onClick={() => setActiveFilter('all')}
              id="empty-state-reset-btn"
            >
              Show All Properties
            </button>
          </div>
        )}

        {/* View All CTA */}
        {filteredProperties.length > 0 && (
          <div className="rn-properties__view-all">
            <a
              href="#enquiry"
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#enquiry')?.scrollIntoView({ behavior: 'smooth' });
              }}
              id="properties-view-all-btn"
            >
              Enquire About More Properties
              <ArrowRight size={16} />
            </a>
          </div>
        )}
      </div>

      {/* Property Modal */}
      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </section>
  );
}

// ============================================================
// REALNEST — PROPERTY DATA
// ⚠️  DEMO DATA — Replace with real verified property information
// ============================================================

export type PropertyCategory =
  | 'all'
  | 'apartments'
  | 'villas'
  | 'plots'
  | 'ready'
  | 'upcoming';

export type PropertyStatus = 'ready' | 'under-construction' | 'upcoming' | 'new-launch';

export interface PropertyAmenity {
  name: string;
  icon: string;
}

export interface Property {
  id: string;
  name: string;
  developer: string;
  location: string;
  city: string;
  category: 'apartments' | 'villas' | 'plots' | 'commercial';
  status: PropertyStatus;
  badge?: 'Featured' | 'New Launch' | 'Ready to Move' | 'Limited Units';
  area: {
    min: number;
    max: number;
    unit: 'sq.ft.' | 'sq.yards';
  };
  bedrooms?: string;
  price: {
    min: number;
    currency: 'INR';
    label: string;
  };
  possession?: string;
  description: string;
  highlights: string[];
  amenities: PropertyAmenity[];
  image: string;
  gallery: string[];
  isFeatured: boolean;
  tags: PropertyCategory[];
}

export const properties: Property[] = [
  {
    id: 'casagrand-estilo',
    name: 'Casagrand Estilo',
    developer: 'Casagrand',
    location: 'Pallavaram',
    city: 'Chennai',
    category: 'apartments',
    status: 'under-construction',
    badge: 'Featured',
    area: { min: 1605, max: 1789, unit: 'sq.ft.' },
    bedrooms: '3 BHK',
    price: { min: 11500000, currency: 'INR', label: '₹1.15 Cr onwards' },
    possession: 'Dec 2026',
    description:
      'Casagrand Estilo is a premium residential apartment project located in Pallavaram, one of South Chennai\'s well-connected neighbourhoods. Designed for modern living with thoughtfully planned spaces and quality finishes.',
    highlights: [
      'RERA registered project',
      'Vastu-compliant layouts',
      'Landscaped podium with amenity deck',
      'Close to Chennai airport',
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Building2' },
      { name: 'Children\'s Play Area', icon: 'Star' },
      { name: 'Jogging Track', icon: 'Activity' },
      { name: '24/7 Security', icon: 'Shield' },
    ],
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    ],
    isFeatured: true,
    tags: ['apartments', 'upcoming'],
  },
  {
    id: 'casagrand-first-city',
    name: 'Casagrand First City',
    developer: 'Casagrand',
    location: 'Sholinganallur',
    city: 'Chennai',
    category: 'apartments',
    status: 'ready',
    badge: 'Ready to Move',
    area: { min: 1220, max: 1680, unit: 'sq.ft.' },
    bedrooms: '2/3 BHK',
    price: { min: 9800000, currency: 'INR', label: '₹98 L onwards' },
    possession: 'Ready',
    description:
      'A landmark residential development in Sholinganallur, close to Chennai\'s IT corridor. Offering spacious 2 and 3 BHK apartments with resort-style amenities and excellent connectivity.',
    highlights: [
      'Ready to occupy',
      'IT corridor connectivity',
      'Multiple amenities',
      'Proven developer track record',
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Building2' },
      { name: 'Indoor Games', icon: 'Gamepad2' },
      { name: 'Landscaped Garden', icon: 'TreePine' },
      { name: '24/7 Security', icon: 'Shield' },
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    ],
    isFeatured: true,
    tags: ['apartments', 'ready'],
  },
  {
    id: 'casagrand-laurels',
    name: 'Casagrand Laurels',
    developer: 'Casagrand',
    location: 'Navalur',
    city: 'Chennai',
    category: 'apartments',
    status: 'new-launch',
    badge: 'New Launch',
    area: { min: 1350, max: 1920, unit: 'sq.ft.' },
    bedrooms: '2/3 BHK',
    price: { min: 10200000, currency: 'INR', label: '₹1.02 Cr onwards' },
    possession: 'Mar 2027',
    description:
      'A newly launched premium residential project in Navalur, strategically located along the Old Mahabalipuram Road (OMR) corridor — Chennai\'s rapidly developing technology and lifestyle destination.',
    highlights: [
      'New launch pricing advantage',
      'OMR connectivity',
      'Upcoming metro proximity',
      'Premium specifications',
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Rooftop Lounge', icon: 'Building2' },
      { name: 'Co-working Space', icon: 'Laptop' },
      { name: 'Children\'s Play Area', icon: 'Star' },
      { name: 'EV Charging', icon: 'Zap' },
    ],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    ],
    isFeatured: true,
    tags: ['apartments', 'upcoming'],
  },
  {
    id: 'premium-villa-ecr',
    name: 'Shoreline Villas',
    developer: 'Premium Developer',
    location: 'East Coast Road',
    city: 'Chennai',
    category: 'villas',
    status: 'under-construction',
    badge: 'Featured',
    area: { min: 2800, max: 4200, unit: 'sq.ft.' },
    bedrooms: '4/5 BHK',
    price: { min: 25000000, currency: 'INR', label: '₹2.5 Cr onwards' },
    possession: 'Jun 2027',
    description:
      'Luxury independent villas along the scenic East Coast Road. Each villa offers spacious living areas, private gardens, and premium finishes — designed for discerning buyers seeking privacy and exclusivity.',
    highlights: [
      'ECR address',
      'Private garden',
      'Club membership included',
      'Near Mahabalipuram',
    ],
    amenities: [
      { name: 'Private Pool', icon: 'Waves' },
      { name: 'Home Theatre', icon: 'Monitor' },
      { name: 'Smart Home', icon: 'Wifi' },
      { name: 'Club House', icon: 'Building2' },
      { name: 'Garden', icon: 'TreePine' },
      { name: 'Security', icon: 'Shield' },
    ],
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1200&q=80',
    ],
    isFeatured: false,
    tags: ['villas', 'upcoming'],
  },
  {
    id: 'vgn-highland',
    name: 'VGN Highland',
    developer: 'VGN',
    location: 'Perambur',
    city: 'Chennai',
    category: 'apartments',
    status: 'ready',
    badge: 'Ready to Move',
    area: { min: 980, max: 1340, unit: 'sq.ft.' },
    bedrooms: '2/3 BHK',
    price: { min: 7500000, currency: 'INR', label: '₹75 L onwards' },
    possession: 'Ready',
    description:
      'VGN Highland offers well-designed 2 and 3 BHK apartments in North Chennai\'s Perambur locality, offering excellent access to central business districts and transport connections.',
    highlights: [
      'Ready to occupy',
      'North Chennai connectivity',
      'Established developer',
      'Competitive pricing',
    ],
    amenities: [
      { name: 'Swimming Pool', icon: 'Waves' },
      { name: 'Gymnasium', icon: 'Dumbbell' },
      { name: 'Clubhouse', icon: 'Building2' },
      { name: 'Children\'s Play Area', icon: 'Star' },
      { name: 'Multipurpose Hall', icon: 'Users' },
      { name: 'Security', icon: 'Shield' },
    ],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
    ],
    isFeatured: false,
    tags: ['apartments', 'ready'],
  },
  {
    id: 'plotted-development-oragadam',
    name: 'Oragadam Greens',
    developer: 'Premier Plots',
    location: 'Oragadam',
    city: 'Chennai',
    category: 'plots',
    status: 'ready',
    badge: 'Limited Units',
    area: { min: 1200, max: 2400, unit: 'sq.yards' },
    price: { min: 4800000, currency: 'INR', label: '₹48 L onwards' },
    possession: 'Available',
    description:
      'Carefully laid-out residential plots in Oragadam — Chennai\'s rapidly expanding industrial and residential growth corridor. DTCP approved with clear title and excellent infrastructure.',
    highlights: [
      'DTCP approved layout',
      'Clear title',
      'Excellent infrastructure',
      'Near industrial zone',
    ],
    amenities: [
      { name: 'Gated Community', icon: 'Shield' },
      { name: 'Wide Roads', icon: 'MapPin' },
      { name: 'Street Lighting', icon: 'Lightbulb' },
      { name: 'Drainage', icon: 'Droplets' },
    ],
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&q=80',
    ],
    isFeatured: false,
    tags: ['plots', 'ready'],
  },
];

export const filterLabels: Record<PropertyCategory, string> = {
  all: 'All Properties',
  apartments: 'Premium Apartments',
  villas: 'Luxury Villas',
  plots: 'Residential Plots',
  ready: 'Ready to Move',
  upcoming: 'Upcoming Projects',
};

export const categoryFilters: PropertyCategory[] = [
  'all',
  'apartments',
  'villas',
  'plots',
  'ready',
  'upcoming',
];

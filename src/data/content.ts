// ============================================================
// REALNEST — TESTIMONIALS DATA
// ⚠️  DEMO DATA — Replace with genuine customer testimonials
// ============================================================

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  transactionType: string;
  location: string;
  rating: number;
  quote: string;
  avatar?: string;
  propertyImage: string;
  propertyContext: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ramesh Krishnamurthy',
    initials: 'RK',
    transactionType: 'Property Buyer',
    location: 'Sholinganallur, Chennai',
    rating: 5,
    quote:
      'The team at Realnest made the entire property buying process remarkably stress-free. Their local knowledge and patient guidance helped us make the right decision. We found our dream apartment within our budget.',
    propertyImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    propertyContext: 'Residential Purchase',
  },
  {
    id: 'test-2',
    name: 'Priya Venkataraman',
    initials: 'PV',
    transactionType: 'Property Seller',
    location: 'Anna Nagar, Chennai',
    rating: 5,
    quote:
      'I was impressed by how efficiently Realnest managed the sale of my property. They connected me with serious buyers, handled all the documentation queries, and kept me updated at every stage.',
    propertyImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    propertyContext: 'Villa Consultation',
  },
  {
    id: 'test-3',
    name: 'Suresh & Meena Balaji',
    initials: 'SB',
    transactionType: 'First Home Buyers',
    location: 'Pallavaram, Chennai',
    rating: 5,
    quote:
      'As first-time homebuyers, we had a hundred questions. Realnest answered every one of them honestly and helped us understand what to look for. We couldn\'t be happier with our new home.',
    propertyImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    propertyContext: 'First Home Purchase',
  },
  {
    id: 'test-4',
    name: 'Vikram Nair',
    initials: 'VN',
    transactionType: 'Property Investor',
    location: 'OMR, Chennai',
    rating: 5,
    quote:
      'I\'ve worked with several real estate consultants over the years. Realnest stands out for their honest advice and deep market understanding. They never pushed me toward a decision that wasn\'t right for me.',
    propertyImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    propertyContext: 'Property Investment',
  },
  {
    id: 'test-5',
    name: 'Anitha Subramanian',
    initials: 'AS',
    transactionType: 'Rental Property',
    location: 'Velachery, Chennai',
    rating: 5,
    quote:
      'Found a perfect rental apartment through Realnest within two weeks. The team was responsive, coordinated site visits efficiently, and helped me navigate the lease agreement without any confusion.',
    propertyImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    propertyContext: 'Rental Assistance',
  },
  {
    id: 'test-6',
    name: 'Mohammed Faruk',
    initials: 'MF',
    transactionType: 'Commercial Lease',
    location: 'Guindy, Chennai',
    rating: 5,
    quote:
      'We were looking for office space in Guindy and Realnest presented us with very relevant options. Their understanding of commercial leasing requirements was impressive and saved us considerable time.',
    propertyImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    propertyContext: 'Commercial Property',
  },
  {
    id: 'test-7',
    name: 'Deepa Muralidharan',
    initials: 'DM',
    transactionType: 'NRI Buyer',
    location: 'Adyar, Chennai (NRI)',
    rating: 5,
    quote:
      'Managing a property purchase from abroad is never easy. Realnest coordinated everything seamlessly, sent detailed video walkthroughs, and kept me completely informed. The process was transparent from start to finish.',
    propertyImage: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    propertyContext: 'NRI Villa Advisory',
  },
  {
    id: 'test-8',
    name: 'Karthikeyan Pillai',
    initials: 'KP',
    transactionType: 'Plot Buyer',
    location: 'Tambaram, Chennai',
    rating: 5,
    quote:
      'I wanted a DTCP-approved plot with clear title documentation. Realnest helped me verify all documents before I committed to anything. That level of diligence is rare and genuinely appreciated.',
    propertyImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    propertyContext: 'Plot & Land Purchase',
  },
];

// ============================================================
// REALNEST — BLOG DATA
// ⚠️  DEMO DATA — Replace with real verified articles
// ============================================================

export interface BlogPost {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: number;
  publishedDate: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'first-home-checklist-chennai',
    category: 'Buying Guide',
    title: 'Buying Your First Home in Chennai: A Practical Checklist',
    excerpt:
      'From shortlisting locations to verifying documents and understanding registration costs, here is what every first-time homebuyer in Chennai should know before signing anything.',
    readTime: 7,
    publishedDate: '2024-10-15',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
    tags: ['buying', 'first-home', 'guide'],
  },
  {
    id: 'blog-2',
    slug: 'rera-property-documents-due-diligence',
    category: 'Legal Guide',
    title: 'Understanding RERA, Property Documents, and Due Diligence',
    excerpt:
      'A clear explanation of what RERA registration means for buyers, which property documents to verify, and the due-diligence checks that protect your investment.',
    readTime: 9,
    publishedDate: '2024-09-28',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    tags: ['rera', 'legal', 'documents'],
  },
  {
    id: 'blog-3',
    slug: 'apartment-vs-villa-lifestyle',
    category: 'Lifestyle',
    title: 'Apartment vs. Villa: Which Fits Your Lifestyle and Budget?',
    excerpt:
      'A balanced comparison of apartment living versus independent villas in Chennai — exploring space, cost, maintenance, community, and long-term value.',
    readTime: 6,
    publishedDate: '2024-09-10',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
    tags: ['apartments', 'villas', 'lifestyle'],
  },
  {
    id: 'blog-4',
    slug: 'evaluating-residential-plots',
    category: 'Investment',
    title: 'What to Evaluate Before Investing in Residential Plots',
    excerpt:
      'Plot investments offer distinct advantages, but require careful evaluation of approvals, title documents, infrastructure, and future development plans.',
    readTime: 8,
    publishedDate: '2024-08-22',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80',
    tags: ['plots', 'investment', 'evaluation'],
  },
];

// ============================================================
// REALNEST — SERVICES DATA
// ============================================================

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  badge: string;
  caption: string;
  highlights: string[];
}

export const services: Service[] = [
  {
    id: 'buying-selling',
    icon: 'Home',
    title: 'Property Buying & Selling',
    description:
      'End-to-end guidance for residential acquisitions and asset divestment. From curated property discovery to strategic price negotiation and RERA compliance.',
    cta: 'Explore Properties & Sales',
    href: '#properties',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&auto=format&fit=crop&q=85',
    badge: 'ACQUISITIONS & SALES',
    caption: 'Curated luxury residences, contemporary villas, and strategic transaction management across Chennai',
    highlights: [
      'Property discovery and evaluation',
      'Buyer and seller representation',
      'Price negotiation and transaction assistance',
      'RERA and title verification guidance',
    ],
  },
  {
    id: 'rentals-leasing',
    icon: 'Key',
    title: 'Property Rentals & Leasing',
    description:
      'Structured tenancy solutions for premium residential homes and commercial corporate spaces, connecting discerning occupants with verified landlords.',
    cta: 'Explore Rentals & Leasing',
    href: '#enquiry',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&auto=format&fit=crop&q=85',
    badge: 'RESIDENTIAL & COMMERCIAL LEASING',
    caption: 'Prime furnished apartments and corporate workspaces with standardized lease agreements',
    highlights: [
      'Tenant and landlord matching',
      'Residential and commercial leasing',
      'Tenant profiling and rental agreement assistance',
      'Move-in coordination and documentation support',
    ],
  },
  {
    id: 'investment-advisory',
    icon: 'BarChart3',
    title: 'Property Investment Advisory',
    description:
      'Data-driven portfolio advisory and micro-market intelligence to maximize rental yields, capital growth, and generational wealth preservation.',
    cta: 'Consult Investment Advisory',
    href: '#enquiry',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&auto=format&fit=crop&q=85',
    badge: 'CAPITAL APPRECIATION & YIELD',
    caption: 'Micro-market corridor growth data, commercial towers, and strategic asset diversification',
    highlights: [
      'Investment opportunity evaluation',
      'Market research and property valuation',
      'Rental yield and investment potential analysis',
      'Portfolio planning and location-based recommendations',
    ],
  },
  {
    id: 'management-support',
    icon: 'FileText',
    title: 'Property Management',
    description:
      'Comprehensive legal due diligence, title scrutiny, asset maintenance, and seamless post-purchase handover for complete peace of mind.',
    cta: 'Request Property Management',
    href: '#enquiry',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&auto=format&fit=crop&q=85',
    badge: 'DUE DILIGENCE & MANAGEMENT',
    caption: 'Professionally maintained residential communities, common areas, and lifetime ownership guidance',
    highlights: [
      'Property documentation and due diligence',
      'Transaction coordination and handover',
      'Property maintenance and vendor management',
      'Post-purchase support and ownership guidance',
    ],
  },
];

// ============================================================
// REALNEST — PARTNERS DATA
// ============================================================

export interface DetailedProject {
  name: string;
  location: string;
  category: string;
  image: string;
  status: string;
  description?: string;
}

export interface GalleryItem {
  title: string;
  location: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  tagline: string;
  description: string;
  logoText: string;
  logoSubtitle?: string;
  brandColor: string;
  accentColor: string;
  bgColor?: string;
  textColor?: string;
  yearEstablished: number;
  yearsInOperation: string;
  headquarters: string;
  regions: string[];
  heroImage: string;
  overview: string;
  website: string;
  locations: string[];
  categories: string[];
  projects: string[];
  detailedProjects: DetailedProject[];
  features: string[];
  gallery: GalleryItem[];
}

export const partners: Partner[] = [
  {
    id: 'casagrand',
    name: 'Casagrand',
    tagline: 'Building Aspirations Across South India',
    description: 'Leading residential enterprise renowned for expansive wellness townships and lifestyle clubhouses.',
    logoText: 'CASAGRAND',
    logoSubtitle: 'BUILDING ASPIRATIONS',
    brandColor: '#B82229',
    accentColor: '#1A3A5C',
    yearEstablished: 2004,
    yearsInOperation: '20+ Years',
    headquarters: 'Chennai, Tamil Nadu',
    regions: ['Chennai', 'Bengaluru', 'Coimbatore', 'Hyderabad'],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=85',
    overview:
      'Established in 2004, Casagrand is one of South India\'s leading real estate enterprises. Acclaimed for visionary wellness-focused communities, expansive multi-acre lifestyle clubhouses, and consistent on-schedule delivery across premier Chennai and Bengaluru micro-markets.',
    website: 'https://www.casagrand.co.in',
    locations: [
      'Sholinganallur (OMR)',
      'Pallavaram',
      'Navalur',
      'Mogappair',
      'Perungalathur',
      'Koyambedu',
    ],
    categories: [
      'Premium High-Rise Condominiums',
      'Independent Luxury Villas',
      'Integrated Wellness Townships',
    ],
    projects: [
      'Casagrand First City — Sholinganallur',
      'Casagrand Estilo — Pallavaram',
      'Casagrand Laurels — Navalur',
      'Casagrand Tudor — Mogappair',
    ],
    detailedProjects: [
      {
        name: 'Casagrand First City',
        location: 'Sholinganallur, OMR Chennai',
        category: 'Grand Township',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=85',
        status: 'Ready to Move & Ongoing',
        description: 'Multi-acre Roman architectural township with over 100+ modern lifestyle amenities.',
      },
      {
        name: 'Casagrand Estilo',
        location: 'Pallavaram, Chennai',
        category: 'Luxury Enclave',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=85',
        status: 'Ongoing Phase',
        description: 'Contemporary high-rise apartments with airport connectivity and podium sports courts.',
      },
      {
        name: 'Casagrand Laurels',
        location: 'Navalur, OMR Chennai',
        category: 'Lifestyle Residences',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=85',
        status: 'Ready to Move',
        description: 'Bespoke apartment towers close to major IT SEZ tech campuses on the corridor.',
      },
    ],
    features: [
      'Comprehensive resort-style amenities and dedicated kids-centric zones',
      '100% RERA registered developments with transparent title documentation',
      'Prime IT corridor and suburban arterial highway connectivity',
      'Thoughtful vastu-compliant architectural floor plans and generous natural airflow',
    ],
    gallery: [
      {
        title: 'Casagrand First City Clubhouse',
        location: 'Sholinganallur, Chennai',
        image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&auto=format&fit=crop&q=85',
      },
      {
        title: 'Casagrand Estilo Tower Architecture',
        location: 'Pallavaram, Chennai',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=85',
      },
      {
        title: 'Casagrand Laurels Open Landscape',
        location: 'Navalur, Chennai',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=85',
      },
    ],
  },
  {
    id: 'brigade',
    name: 'Brigade Group',
    tagline: 'Building Positive Experiences',
    description: 'Pioneering developer behind world-class integrated enclaves, WTC developments, and luxury residences.',
    logoText: 'BRIGADE',
    logoSubtitle: 'BUILDING POSITIVE EXPERIENCES',
    brandColor: '#0E2A47',
    accentColor: '#C5A46D',
    yearEstablished: 1986,
    yearsInOperation: '38+ Years',
    headquarters: 'Bengaluru, Karnataka',
    regions: ['Chennai', 'Bengaluru', 'Hyderabad', 'Mysuru', 'Kochi', 'GIFT City'],
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&auto=format&fit=crop&q=85',
    overview:
      'Established in 1986, Brigade Group is one of India\'s most trusted, institutionally governed real estate developers. Renowned for creating benchmark mixed-use enclaves, signature commercial landmarks including World Trade Center (WTC) campuses, and thoughtfully landscaped residential communities.',
    website: 'https://www.brigadegroup.com',
    locations: [
      'Mogappair West',
      'Perungudi (OMR)',
      'Mount Road (Anna Salai)',
      'Tambaram',
    ],
    categories: [
      'Integrated Enclaves',
      'World Trade Center Grade-A Tech Parks',
      'Luxury Residential Towers',
    ],
    projects: [
      'Brigade Xanadu — Mogappair West',
      'Brigade Residences at WTC — Perungudi',
      'Brigade Icon — Mount Road',
    ],
    detailedProjects: [
      {
        name: 'Brigade Xanadu',
        location: 'Mogappair West, Chennai',
        category: 'Spanish-Themed Enclave',
        image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&auto=format&fit=crop&q=85',
        status: 'Ready & Ongoing Phases',
        description: 'Spanish-themed residential haven with over 33 acres of integrated open green surroundings.',
      },
      {
        name: 'Brigade Residences at WTC Chennai',
        location: 'Perungudi, OMR Chennai',
        category: 'Ultra-Luxury Towers',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=85',
        status: 'Completed Landmark',
        description: 'Executive luxury residences adjoining World Trade Center Chennai on the expressway.',
      },
    ],
    features: [
      'Integrated enclave ecosystems seamlessly blending work, living, and leisure',
      'Certified energy-efficient construction, solar infrastructure, and rainwater management',
      'Expansive central landscaped parks, tree canopies, and championship sporting facilities',
      'Exemplary corporate governance, ISO certified processes, and institutional investor trust',
    ],
    gallery: [
      {
        title: 'Brigade Xanadu Courtyard View',
        location: 'Mogappair, Chennai',
        image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=1000&auto=format&fit=crop&q=85',
      },
      {
        title: 'Brigade World Trade Center Skyline',
        location: 'Perungudi OMR, Chennai',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&auto=format&fit=crop&q=85',
      },
    ],
  },
  {
    id: 'prestige',
    name: 'Prestige Group',
    tagline: 'Adds Prestige to Your Life',
    description: 'National real estate leader acclaimed for iconic high-rise condominiums, luxury villas, and tech parks.',
    logoText: 'PRESTIGE',
    logoSubtitle: 'GROUP',
    brandColor: '#0F4D2A',
    accentColor: '#D4AF37',
    yearEstablished: 1986,
    yearsInOperation: '38+ Years',
    headquarters: 'Bengaluru, Karnataka',
    regions: ['Chennai', 'Bengaluru', 'Hyderabad', 'Kochi', 'Mumbai', 'Goa', 'NCR'],
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop&q=85',
    overview:
      'Founded in 1986, Prestige Group has evolved into a premier national developer with over 280+ delivered developments. Known for uncompromising architectural standards, grade-A tech campuses, luxury retail centers, and bespoke residential sanctuaries across Chennai and major metropolitan corridors.',
    website: 'https://www.prestigeconstructions.com',
    locations: [
      'Sholinganallur (OMR)',
      'East Coast Road (ECR)',
      'Porur',
      'Vadapalani',
      'Pallavaram',
    ],
    categories: [
      'Luxury High-Rise Condominiums',
      'Signature Waterfront & Sea-Facing Villas',
      'Grade-A Corporate IT Parks',
    ],
    projects: [
      'Prestige Courtyards — Sholinganallur',
      'Prestige Silver Springs — ECR',
      'Prestige Bella Vista — Porur',
      'Prestige Cyber Towers — Karapakkam',
    ],
    detailedProjects: [
      {
        name: 'Prestige Courtyards',
        location: 'Sholinganallur, OMR Chennai',
        category: 'Neo-Classical Residences',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=85',
        status: 'Ready to Move',
        description: 'Neo-classical design apartments clustered around lush tranquil internal courtyards.',
      },
      {
        name: 'Prestige Silver Springs',
        location: 'ECR, Chennai',
        category: 'Presidential Luxury Villas',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=85',
        status: 'Delivered Luxury Landmark',
        description: 'Ultra-exclusive private villa community nestled along Chennai\'s scenic coastal corridor.',
      },
    ],
    features: [
      'International-grade engineering, precision finishes, and premium branded fittings',
      'Expansive landscaped podium recreation decks and signature five-star clubhouses',
      'Sustainable IGBC Gold & Platinum certified green building construction',
      'High rental yield appeal and proven long-term capital preservation profile',
    ],
    gallery: [
      {
        title: 'Prestige Courtyards Grand Atrium',
        location: 'Sholinganallur, Chennai',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&auto=format&fit=crop&q=85',
      },
      {
        title: 'Prestige Silver Springs Private Villa',
        location: 'ECR, Chennai',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=85',
      },
    ],
  },
  {
    id: 'tvs-emerald',
    name: 'TVS Emerald',
    tagline: 'Homes by the TVS Legacy',
    description: 'Sustainably planned gated communities crafted on a 110-year legacy of punctuality and transparency.',
    logoText: 'TVS EMERALD',
    logoSubtitle: 'TVS GROUP',
    brandColor: '#003366',
    accentColor: '#10B981',
    yearEstablished: 2012,
    yearsInOperation: '12+ Years (110+ Year Group Legacy)',
    headquarters: 'Chennai, Tamil Nadu',
    regions: ['Chennai', 'Bengaluru'],
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&auto=format&fit=crop&q=85',
    overview:
      'Part of the respected 110-year TVS Group legacy, TVS Emerald crafts sustainably planned residential communities in Chennai with deep consumer trust, punctual delivery track record, CMDA/RERA transparency, and nature-centric architectural planning.',
    website: 'https://www.tvsemerald.com',
    locations: [
      'Medavakkam',
      'Porur',
      'Manapakkam',
      'Kovilambakkam',
    ],
    categories: [
      'Gated Community Apartments',
      'Independent Smart Villas',
      'Plotted Townships',
    ],
    projects: [
      'TVS Emerald Aaranya — Medavakkam',
      'TVS Emerald GreenEnclave — Porur',
      'TVS Emerald Peninsula — Manapakkam',
      'TVS Emerald Elements — Kovilambakkam',
    ],
    detailedProjects: [
      {
        name: 'TVS Emerald Aaranya',
        location: 'Medavakkam, Chennai',
        category: 'Resort Villa Community',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop&q=85',
        status: 'Ongoing Phases',
        description: 'First resort-style villa community in Chennai with an expansive green canopy of trees.',
      },
      {
        name: 'TVS Emerald Peninsula',
        location: 'Manapakkam, Chennai',
        category: 'Courtyard Homes',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=85',
        status: 'Ongoing Phase',
        description: 'Contemporary apartments with 100% corner homes ensuring total light and ventilation.',
      },
    ],
    features: [
      '60%+ designated green open ground cover and clean air micro-climates',
      'Vehicle-free podium parks engineered for the safety of children and senior citizens',
      'Strict CMDA and RERA compliance with zero hidden charges or ambiguous clauses',
      'Integrated home automation, solar street lighting, and organic waste convertors',
    ],
    gallery: [
      {
        title: 'TVS Emerald Aaranya Landscaped Greens',
        location: 'Medavakkam, Chennai',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1000&auto=format&fit=crop&q=85',
      },
      {
        title: 'TVS Emerald Peninsula Facade',
        location: 'Manapakkam, Chennai',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=85',
      },
    ],
  },
  {
    id: 'akshayam',
    name: 'Akshayam Property Developers',
    tagline: 'Trust, Value & Service in Real Estate Since 2004',
    description: 'Reputed developer with more than 53 projects delivered across Chennai and Tamil Nadu, specializing in CMDA & DTCP approved residential enclaves.',
    logoText: 'AKSHAYAM',
    logoSubtitle: 'PROPERTY DEVELOPERS',
    brandColor: '#A62B2B',
    accentColor: '#D4AF37',
    yearEstablished: 2004,
    yearsInOperation: '20+ Years',
    headquarters: 'Chennai, Tamil Nadu',
    regions: ['Chennai', 'Tamil Nadu'],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=85',
    overview:
      'Founded in 2004, Akshayam Property Developers is a trusted real estate enterprise with a dynamic track record of developing more than 53 residential and commercial projects across Tamil Nadu. Guided by the core tenets of Trust, Value, and Service, Akshayam delivers prime CMDA and DTCP approved plotted layouts and model villas designed for immediate home construction and enduring value appreciation.',
    website: 'https://akshayamproperty.com',
    locations: [
      'Kelambakkam',
      'Sithalapakkam',
      'Vengaivasal',
      'Tambaram Corridor',
      'Medavakkam',
    ],
    categories: [
      'CMDA & DTCP Approved Residential Plots',
      'Independent Model Villas',
      'Commercial Property Developments',
    ],
    projects: [
      'Akshayam City — Kelambakkam',
      'Akshayam Roheline — Vengaivasal',
      'Green Castle Avenue — Sithalapakkam',
      'Akshayam Avenue — Sithalapakkam',
    ],
    detailedProjects: [
      {
        name: 'Akshayam City',
        location: 'Kelambakkam, OMR Chennai',
        category: 'CMDA Approved Plotted Township',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format&fit=crop&q=85',
        status: 'Ready for Construction',
        description: 'Prime gated plotted community in Kelambakkam close to OMR IT hubs with wide blacktop roads.',
      },
      {
        name: 'Akshayam Roheline',
        location: 'Vengaivasal, Chennai',
        category: 'Residential Enclave',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=85',
        status: 'Completed & Delivered',
        description: 'Serene residential development with clear titles and direct access to Medavakkam arterial roads.',
      },
      {
        name: 'Green Castle Avenue',
        location: 'Sithalapakkam, Chennai',
        category: 'Villa Plots',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=85',
        status: 'Ready to Build',
        description: 'DTCP approved villa plots in rapidly growing Sithalapakkam with immediate building feasibility.',
      },
    ],
    features: [
      'Dynamic track record of more than 53 verified projects delivered across Tamil Nadu.',
      '100% CMDA & DTCP approved plotted layouts with clear marketable legal title deeds.',
      'Well-developed infrastructure including wide blacktop roads, potable groundwater, and power lines.',
      'Immediate building readiness and hassle-free loan facilitation through leading banks.',
    ],
    gallery: [
      {
        title: 'Akshayam City Gated Entry',
        location: 'Kelambakkam, Chennai',
        image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1000&auto=format&fit=crop&q=85',
      },
      {
        title: 'Akshayam Roheline Residential View',
        location: 'Vengaivasal, Chennai',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=85',
      },
      {
        title: 'Green Castle Avenue Plotted Layout',
        location: 'Sithalapakkam, Chennai',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=85',
      },
    ],
  },
  {
    id: 'jain-housing',
    name: 'Jain Housing & Construction Ltd',
    tagline: 'Pioneering Quality Homes for Over Three Decades',
    description: 'Award-winning residential developer established in 1987, having delivered over 180+ benchmark projects across South India.',
    logoText: 'JAIN HOUSING',
    logoSubtitle: 'CONSTRUCTION LTD',
    brandColor: '#0F3870',
    accentColor: '#C5A46D',
    yearEstablished: 1987,
    yearsInOperation: '37+ Years',
    headquarters: 'Chennai, Tamil Nadu',
    regions: ['Chennai', 'Bengaluru', 'Hyderabad', 'Kochi', 'Coimbatore', 'Tirupur'],
    heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1600&auto=format&fit=crop&q=85',
    overview:
      'Established in 1987 in Chennai, Jain Housing & Construction Ltd is one of South India\'s most prominent real estate developers. With more than 37 years of construction excellence, the company has delivered over 180 projects spanning millions of square feet. Jain Housing is acclaimed for spacious floor layouts, high construction standards, transparent customer dealings, and on-time property delivery across Chennai.',
    website: 'https://www.jainhousing.com',
    locations: [
      'Pallavaram',
      'Thoraipakkam (OMR)',
      'Mogappair',
      'Nolambur',
      'Madipakkam',
    ],
    categories: [
      'Premium Residential High-Rises',
      'Luxury Condominiums',
      'Integrated Gated Communities',
    ],
    projects: [
      'Jains Pebble Brook — Thoraipakkam (OMR)',
      'Jains Aadhya — Mogappair',
      'Jains Seven 77 — Pallavaram',
      'Jains Advaya — Madipakkam',
      'Jains Anushree — Nolambur',
    ],
    detailedProjects: [
      {
        name: 'Jains Pebble Brook',
        location: 'Thoraipakkam, OMR Chennai',
        category: 'Luxury High-Rise Condominiums',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=85',
        status: 'Ready to Move',
        description: 'Sprawling high-rise gated community on OMR featuring luxury clubhouse, pools, and sports facilities.',
      },
      {
        name: 'Jains Aadhya',
        location: 'Mogappair, Chennai',
        category: 'Contemporary Residences',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&auto=format&fit=crop&q=85',
        status: 'Ongoing Phase',
        description: 'Elegantly designed apartments with landscaped central greens and swift connectivity to Anna Nagar.',
      },
      {
        name: 'Jains Seven 77',
        location: 'Pallavaram, Chennai',
        category: 'Urban Lifestyle Apartments',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop&q=85',
        status: 'Ready to Move',
        description: 'Strategically located lifestyle apartments close to Chennai International Airport and GST Road.',
      },
      {
        name: 'Jains Advaya',
        location: 'Madipakkam, Chennai',
        category: 'Gated Residential Apartments',
        image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&auto=format&fit=crop&q=85',
        status: 'Completed & Occupied',
        description: 'Vastu-compliant residential development with premier fittings and 24/7 security management.',
      },
    ],
    features: [
      'Over 37 years of uninterrupted development heritage with 180+ completed communities.',
      'State-of-the-art clubhouse infrastructure, landscaped courtyards, and swimming pools.',
      'Rigorous quality standards with certified construction materials and RERA compliance.',
      'Prime suburban arterial connectivity near Chennai airport, metro stations, and IT corridors.',
    ],
    gallery: [
      {
        title: 'Jains Pebble Brook Grand Elevation',
        location: 'Thoraipakkam OMR, Chennai',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=85',
      },
      {
        title: 'Jains Aadhya Landscaped Courtyard',
        location: 'Mogappair, Chennai',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000&auto=format&fit=crop&q=85',
      },
      {
        title: 'Jains Seven 77 Clubhouse Amenities',
        location: 'Pallavaram, Chennai',
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1000&auto=format&fit=crop&q=85',
      },
    ],
  },
  {
    id: 'sobha',
    name: 'SOBHA',
    tagline: 'Passion at Work',
    description: 'Renowned for backward integration, German engineering tolerances, and bespoke luxury craftsmanship.',
    logoText: 'SOBHA',
    logoSubtitle: 'PASSION AT WORK',
    brandColor: '#2B2B2B',
    accentColor: '#D4AF37',
    yearEstablished: 1995,
    yearsInOperation: '29+ Years',
    headquarters: 'Bengaluru, Karnataka',
    regions: ['Chennai', 'Bengaluru', 'Kochi', 'Pune', 'NCR', 'Dubai'],
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&auto=format&fit=crop&q=85',
    overview:
      'Founded in 1995, Sobha Limited stands distinct in the Indian subcontinent for its unique backward integration model. Utilizing in-house manufacturing, German engineering tolerances, and zero-compromise quality audits to deliver bespoke super-luxury residences in Chennai.',
    website: 'https://www.sobha.com',
    locations: [
      'Vengaivasal (Medavakkam)',
      'Kovur (Porur corridor)',
      'Sholinganallur',
    ],
    categories: [
      'Super-Luxury Apartments',
      'Presidential Row Houses & Villas',
      'Contractual Commercial Landmarks',
    ],
    projects: [
      'Sobha Gardenia — Vengaivasal',
      'Sobha Winchester — Kovur',
    ],
    detailedProjects: [
      {
        name: 'Sobha Gardenia',
        location: 'Vengaivasal, Chennai',
        category: 'Luxury Villa Enclave',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop&q=85',
        status: 'Delivered Masterpiece',
        description: 'Biophilic luxury villas created with German architectural precision and private garden decks.',
      },
      {
        name: 'Sobha Winchester',
        location: 'Kovur, Porur Chennai',
        category: 'High-Rise Residences',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop&q=85',
        status: 'Ready to Move',
        description: 'Immaculately crafted multi-story apartments with acoustic isolation and precision joinery.',
      },
    ],
    features: [
      'In-house German engineering, metal fabrication, and joinery manufacturing',
      'Zero-compromise construction quality with stringent multi-tier quality audits',
      'Superior acoustic isolation, thermal comfort, and European precision plumbing',
      'Timeless architectural aesthetics with expansive natural cross-ventilation',
    ],
    gallery: [
      {
        title: 'Sobha Gardenia Villa Exterior',
        location: 'Vengaivasal, Chennai',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&auto=format&fit=crop&q=85',
      },
      {
        title: 'Sobha Winchester Grand Elevation',
        location: 'Kovur, Chennai',
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1000&auto=format&fit=crop&q=85',
      },
    ],
  },
];

// ============================================================
// REALNEST — STATISTICS DATA
// ============================================================

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

export const statistics: Stat[] = [
  {
    id: 'customers',
    value: 500,
    suffix: '+',
    label: 'Customers Served',
    description: 'Families and investors guided to their property goals',
  },
  {
    id: 'satisfaction',
    value: 85,
    suffix: '%+',
    label: 'Customer Satisfaction',
    description: 'Customers who would recommend our services',
  },
  {
    id: 'experience',
    value: 10,
    suffix: '+',
    label: 'Years of Experience',
    description: 'Serving Chennai\'s real estate market',
  },
  {
    id: 'ranking',
    value: 5,
    prefix: 'Top ',
    suffix: '',
    label: 'Market Ranking',
    description: 'Among Chennai\'s preferred real estate advisors',
  },
];

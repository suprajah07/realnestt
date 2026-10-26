interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function CasagrandLogo({ className = '', size = 'md' }: LogoProps) {
  const height = size === 'sm' ? 26 : size === 'lg' ? 44 : size === 'xl' ? 56 : 36;
  return (
    <div className={`rn-dev-logo rn-dev-logo--casagrand ${className}`} style={{ height }}>
      <svg height={height} viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="40" height="40" rx="6" fill="#B82229" />
        <path d="M14 25L22 14L30 25L22 36L14 25Z" fill="#FFFFFF" />
        <circle cx="22" cy="25" r="4" fill="#1A3A5C" />
        <text x="52" y="30" fill="#1A3A5C" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="22" letterSpacing="0.08em">CASAGRAND</text>
        <text x="53" y="42" fill="#B82229" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="8" letterSpacing="0.18em">BUILDING ASPIRATIONS</text>
      </svg>
    </div>
  );
}

export function BrigadeLogo({ className = '', size = 'md' }: LogoProps) {
  const height = size === 'sm' ? 26 : size === 'lg' ? 44 : size === 'xl' ? 56 : 36;
  return (
    <div className={`rn-dev-logo rn-dev-logo--brigade ${className}`} style={{ height }}>
      <svg height={height} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 38V12L20 20V46L6 38Z" fill="#0E2A47" />
        <path d="M22 20L36 12V38L22 46V20Z" fill="#C5A46D" />
        <circle cx="21" cy="9" r="4" fill="#C5A46D" />
        <text x="46" y="31" fill="#0E2A47" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="21" letterSpacing="0.12em">BRIGADE</text>
        <text x="47" y="42" fill="#6B7280" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="0.15em">BUILDING EXPERIENCES</text>
      </svg>
    </div>
  );
}

export function PrestigeLogo({ className = '', size = 'md' }: LogoProps) {
  const height = size === 'sm' ? 26 : size === 'lg' ? 44 : size === 'xl' ? 56 : 36;
  return (
    <div className={`rn-dev-logo rn-dev-logo--prestige ${className}`} style={{ height }}>
      <svg height={height} viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="25" r="19" fill="#0F4D2A" />
        <path d="M12 28C15 20 22 14 32 14C28 20 25 28 22 36C18 36 14 32 12 28Z" fill="#D4AF37" />
        <circle cx="22" cy="25" r="6" fill="#0F4D2A" />
        <text x="50" y="30" fill="#0F4D2A" fontFamily="Instrument Sans, Georgia, serif" fontWeight="700" fontSize="22" letterSpacing="0.08em">Prestige</text>
        <text x="51" y="42" fill="#D4AF37" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="8" letterSpacing="0.25em">GROUP</text>
      </svg>
    </div>
  );
}

export function TVSEmeraldLogo({ className = '', size = 'md' }: LogoProps) {
  const height = size === 'sm' ? 26 : size === 'lg' ? 44 : size === 'xl' ? 56 : 36;
  return (
    <div className={`rn-dev-logo rn-dev-logo--tvs ${className}`} style={{ height }}>
      <svg height={height} viewBox="0 0 210 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L32 14V34L18 42L4 34V14L18 6Z" fill="#003366" />
        <path d="M18 12L27 17V29L18 34L9 29V17L18 12Z" fill="#10B981" />
        <text x="42" y="27" fill="#003366" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="19" letterSpacing="0.08em">TVS</text>
        <text x="88" y="27" fill="#10B981" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="19" letterSpacing="0.08em">EMERALD</text>
        <text x="43" y="40" fill="#6B7280" fontFamily="Inter, sans-serif" fontWeight="600" fontSize="7.5" letterSpacing="0.18em">HOMES BY TVS GROUP</text>
      </svg>
    </div>
  );
}

export function AkshayamLogo({ className = '', size = 'md' }: LogoProps) {
  const height = size === 'sm' ? 26 : size === 'lg' ? 44 : size === 'xl' ? 56 : 36;
  return (
    <div className={`rn-dev-logo rn-dev-logo--akshayam ${className}`} style={{ height }}>
      <svg height={height} viewBox="0 0 240 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="38" height="38" rx="6" fill="#A62B2B" />
        <path d="M21 12L31 21H11L21 12Z" fill="#D4AF37" />
        <rect x="15" y="21" width="12" height="14" fill="#FFFFFF" />
        <path d="M18 27H24V35H18V27Z" fill="#A62B2B" />
        <text x="48" y="28" fill="#A62B2B" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="19" letterSpacing="0.06em">AKSHAYAM</text>
        <text x="49" y="41" fill="#78350F" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="0.16em">PROPERTY DEVELOPERS</text>
      </svg>
    </div>
  );
}

export function JainHousingLogo({ className = '', size = 'md' }: LogoProps) {
  const height = size === 'sm' ? 26 : size === 'lg' ? 44 : size === 'xl' ? 56 : 36;
  return (
    <div className={`rn-dev-logo rn-dev-logo--jain ${className}`} style={{ height }}>
      <svg height={height} viewBox="0 0 230 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="40" height="40" rx="8" fill="#0F3870" />
        <path d="M12 36V22L22 13L32 22V36H26V27H18V36H12Z" fill="#C5A46D" />
        <path d="M22 20L27 24.5V32H23V25H21V32H17V24.5L22 20Z" fill="#FFFFFF" />
        <text x="50" y="28" fill="#0F3870" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="19" letterSpacing="0.08em">JAIN HOUSING</text>
        <text x="51" y="41" fill="#C5A46D" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="0.16em">SINCE 1987 · CHENNAI</text>
      </svg>
    </div>
  );
}

export function SobhaLogo({ className = '', size = 'md' }: LogoProps) {
  const height = size === 'sm' ? 26 : size === 'lg' ? 44 : size === 'xl' ? 56 : 36;
  return (
    <div className={`rn-dev-logo rn-dev-logo--sobha ${className}`} style={{ height }}>
      <svg height={height} viewBox="0 0 170 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="25" r="16" stroke="#2B2B2B" strokeWidth="2.5" />
        <path d="M20 13V37M12 25H28" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" />
        <text x="46" y="30" fill="#2B2B2B" fontFamily="Instrument Sans, Georgia, serif" fontWeight="800" fontSize="22" letterSpacing="0.18em">SOBHA</text>
        <text x="47" y="42" fill="#D4AF37" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="7.5" letterSpacing="0.22em">PASSION AT WORK</text>
      </svg>
    </div>
  );
}

export function DeveloperLogoRenderer({ id, size = 'md', className = '' }: { id: string; size?: 'sm' | 'md' | 'lg' | 'xl'; className?: string }) {
  switch (id) {
    case 'casagrand':
      return <CasagrandLogo size={size} className={className} />;
    case 'brigade':
      return <BrigadeLogo size={size} className={className} />;
    case 'prestige':
      return <PrestigeLogo size={size} className={className} />;
    case 'tvs-emerald':
    case 'tvs':
      return <TVSEmeraldLogo size={size} className={className} />;
    case 'akshayam':
      return <AkshayamLogo size={size} className={className} />;
    case 'jain-housing':
    case 'jain':
      return <JainHousingLogo size={size} className={className} />;
    case 'sobha':
      return <SobhaLogo size={size} className={className} />;
    default:
      return null;
  }
}

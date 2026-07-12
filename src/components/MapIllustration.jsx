
export default function MapIllustration() {
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
      <defs>
        <pattern id="dots" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="0.6" fill="rgba(241,234,212,0.18)" />
        </pattern>
      </defs>
      <rect width="400" height="500" fill="#1d3327" />
      <rect width="400" height="500" fill="url(#dots)" />
      <path d="M300 0 Q280 100 290 200 Q310 320 280 500" stroke="rgba(164,122,58,0.35)" strokeWidth="14" fill="none" />
      <g stroke="rgba(241,234,212,0.18)" strokeWidth="1">
        <line x1="0" y1="80" x2="400" y2="80" />
        <line x1="0" y1="160" x2="400" y2="160" />
        <line x1="0" y1="240" x2="400" y2="240" />
        <line x1="0" y1="320" x2="400" y2="320" />
        <line x1="0" y1="400" x2="400" y2="400" />
        <line x1="60" y1="0" x2="60" y2="500" />
        <line x1="140" y1="0" x2="140" y2="500" />
        <line x1="220" y1="0" x2="220" y2="500" />
      </g>
      <line x1="0" y1="240" x2="290" y2="240" stroke="rgba(198,154,82,0.6)" strokeWidth="3" />
      <g fill="rgba(241,234,212,0.45)" fontFamily="Manrope, sans-serif" fontSize="9" letterSpacing="2">
        <text x="10" y="78" textAnchor="start">VIA GARIBALDI</text>
        <text x="10" y="158" textAnchor="start">VIA PIETRO MICCA</text>
        <text x="10" y="232" textAnchor="start" fill="rgba(198,154,82,0.9)">VIA CERNAIA</text>
        <text x="10" y="318" textAnchor="start">CORSO MATTEOTTI</text>
        <text x="10" y="398" textAnchor="start">CORSO V. EMANUELE</text>
        <text x="320" y="20" textAnchor="end">FIUME PO →</text>
      </g>
      <circle cx="80" cy="320" r="2" fill="rgba(241,234,212,0.4)" />
      <circle cx="220" cy="80" r="2" fill="rgba(241,234,212,0.4)" />
      <circle cx="160" cy="400" r="2" fill="rgba(241,234,212,0.4)" />
    </svg>
  );
}
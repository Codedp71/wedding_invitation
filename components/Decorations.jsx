// Reusable SVG decorations — no external images needed
export function GoldDivider() {
  return <div className="gold-divider" />;
}

export function OrnamentalDivider() {
  return (
    <div className="ornamental-divider">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0L10 6H16L11 9.5L13 16L8 12L3 16L5 9.5L0 6H6Z" />
      </svg>
    </div>
  );
}

export function MandalaSVG({ size = 400, className = '' }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.12 }}>
      {/* Outer ring */}
      <circle cx="200" cy="200" r="190" stroke="#C8A45D" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="170" stroke="#C8A45D" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="150" stroke="#C8A45D" strokeWidth="1" />
      <circle cx="200" cy="200" r="120" stroke="#C8A45D" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="90" stroke="#C8A45D" strokeWidth="1" />
      <circle cx="200" cy="200" r="60" stroke="#C8A45D" strokeWidth="0.8" />
      <circle cx="200" cy="200" r="30" stroke="#C8A45D" strokeWidth="1" fill="#C8A45D" fillOpacity="0.1" />
      {/* Petals — 12 directions */}
      {Array.from({ length: 12 }).map((_, i) => (
        <g key={i} transform={`rotate(${i * 30} 200 200)`}>
          <ellipse cx="200" cy="80" rx="12" ry="35" fill="#C8A45D" fillOpacity="0.15" stroke="#C8A45D" strokeWidth="0.5" />
          <ellipse cx="200" cy="130" rx="8" ry="20" fill="#C8A45D" fillOpacity="0.1" stroke="#C8A45D" strokeWidth="0.5" />
          <line x1="200" y1="10" x2="200" y2="45" stroke="#C8A45D" strokeWidth="0.5" />
        </g>
      ))}
      {/* Inner star */}
      {Array.from({ length: 8 }).map((_, i) => (
        <line key={`s${i}`} x1="200" y1="140" x2="200" y2="200" stroke="#C8A45D" strokeWidth="0.6" transform={`rotate(${i * 45} 200 200)`} />
      ))}
    </svg>
  );
}

export function EventIcon({ type }) {
  const icons = {
    kalash: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <ellipse cx="40" cy="55" rx="20" ry="18" stroke="#C8A45D" strokeWidth="2" fill="#C8A45D" fillOpacity="0.08" />
        <ellipse cx="40" cy="40" rx="14" ry="10" stroke="#C8A45D" strokeWidth="1.5" fill="#C8A45D" fillOpacity="0.05" />
        <circle cx="40" cy="25" r="8" stroke="#C8A45D" strokeWidth="1.5" fill="#C8A45D" fillOpacity="0.1" />
        <path d="M32 25C32 25 36 15 40 12C44 15 48 25 48 25" stroke="#C8A45D" strokeWidth="1" fill="none" />
        <line x1="40" y1="12" x2="40" y2="8" stroke="#C8A45D" strokeWidth="1.5" />
        <path d="M36 8C36 8 38 5 40 5C42 5 44 8 44 8" stroke="#C8A45D" strokeWidth="1" fill="none" />
      </svg>
    ),
    mehndi: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <path d="M40 10C40 10 25 25 25 45C25 60 32 70 40 70C48 70 55 60 55 45C55 25 40 10 40 10Z" stroke="#C8A45D" strokeWidth="1.5" fill="#C8A45D" fillOpacity="0.06" />
        <circle cx="40" cy="40" r="8" stroke="#C8A45D" strokeWidth="1" fill="#C8A45D" fillOpacity="0.1" />
        <circle cx="40" cy="40" r="3" fill="#C8A45D" fillOpacity="0.2" />
        <path d="M40 32C40 32 35 36 35 40C35 44 37 48 40 48C43 48 45 44 45 40C45 36 40 32 40 32Z" stroke="#C8A45D" strokeWidth="0.8" fill="none" />
        <path d="M32 50L40 55L48 50" stroke="#C8A45D" strokeWidth="0.8" fill="none" />
        <path d="M34 55L40 59L46 55" stroke="#C8A45D" strokeWidth="0.8" fill="none" />
      </svg>
    ),
    mandap: (
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect x="15" y="65" width="50" height="3" rx="1.5" fill="#C8A45D" fillOpacity="0.3" />
        <line x1="20" y1="25" x2="20" y2="65" stroke="#C8A45D" strokeWidth="2" />
        <line x1="60" y1="25" x2="60" y2="65" stroke="#C8A45D" strokeWidth="2" />
        <path d="M15 25C15 25 25 15 40 12C55 15 65 25 65 25" stroke="#C8A45D" strokeWidth="2" fill="#C8A45D" fillOpacity="0.06" />
        <path d="M20 28C20 28 28 22 40 20C52 22 60 28 60 28" stroke="#C8A45D" strokeWidth="1" fill="none" />
        <circle cx="40" cy="15" r="3" fill="#C8A45D" fillOpacity="0.3" />
        <path d="M30 30Q40 35 50 30" stroke="#C8A45D" strokeWidth="0.8" fill="none" />
        <ellipse cx="40" cy="50" rx="10" ry="6" stroke="#C8A45D" strokeWidth="0.8" strokeDasharray="3 2" fill="none" />
      </svg>
    ),
  };
  return icons[type] || icons.kalash;
}

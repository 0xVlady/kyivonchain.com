import React from 'react';

interface PixelatedMapProps {
  size?: number;
  className?: string;
}

const PixelatedMap: React.FC<PixelatedMapProps> = ({ size = 200, className = "" }) => {
  return (
    <div className={`pixelated-map ${className}`} style={{ width: size, height: size * 0.6 }}>
      <svg 
        width={size} 
        height={size * 0.6} 
        viewBox="0 0 320 192" 
        className="ukraine-map-pixels"
      >
        {/* Pixelated Ukrainian map inspired pattern */}
        <defs>
          <pattern id="pixelPattern" patternUnits="userSpaceOnUse" width="8" height="8">
            <rect width="8" height="8" fill="currentColor" opacity="0.9"/>
            <rect width="6" height="6" x="1" y="1" fill="currentColor" opacity="0.7"/>
          </pattern>
        </defs>
        
        {/* Main map shape with pixelated edges */}
        <g fill="url(#pixelPattern)">
          {/* Western regions */}
          <rect x="16" y="64" width="32" height="24" />
          <rect x="48" y="48" width="24" height="40" />
          <rect x="24" y="88" width="40" height="16" />
          
          {/* Central regions */}
          <rect x="72" y="40" width="48" height="32" />
          <rect x="80" y="72" width="56" height="24" />
          <rect x="64" y="96" width="64" height="20" />
          
          {/* Eastern regions */}
          <rect x="120" y="32" width="64" height="40" />
          <rect x="136" y="72" width="56" height="32" />
          <rect x="144" y="104" width="48" height="24" />
          
          {/* Northern regions */}
          <rect x="88" y="16" width="80" height="24" />
          <rect x="168" y="24" width="48" height="32" />
          
          {/* Southern regions - Crimea area */}
          <rect x="112" y="128" width="72" height="16" />
          <rect x="128" y="144" width="48" height="12" />
          
          {/* Additional pixel details */}
          <rect x="200" y="48" width="24" height="32" />
          <rect x="224" y="56" width="32" height="24" />
          <rect x="192" y="80" width="40" height="16" />
        </g>
        
        {/* Glowing outline effect */}
        <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4">
          <rect x="16" y="16" width="240" height="140" rx="8" />
        </g>
      </svg>
    </div>
  );
};

export default PixelatedMap;
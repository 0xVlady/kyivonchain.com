import React from 'react';

interface ChestnutLogoProps {
  size?: number;
  className?: string;
}

const ChestnutLogo: React.FC<ChestnutLogoProps> = ({ size = 32, className = "" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      className={`chestnut-logo ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chestnut leaf with branching pattern */}
      <g>
        {/* Main leaf shape */}
        <path 
          d="M50 90 L30 60 L25 45 L30 30 L40 20 L50 10 L60 20 L70 30 L75 45 L70 60 Z" 
          fill="currentColor" 
          className="leaf-main"
        />
        <path 
          d="M50 90 L70 60 L75 45 L70 30 L60 20 L50 10 L40 20 L30 30 L25 45 L30 60 Z" 
          fill="currentColor" 
          className="leaf-side"
          opacity="0.8"
        />
        
        {/* Central vein */}
        <line x1="50" y1="15" x2="50" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
        
        {/* Branch veins */}
        <line x1="50" y1="25" x2="35" y2="35" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
        <line x1="50" y1="25" x2="65" y2="35" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
        <line x1="50" y1="40" x2="30" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
        <line x1="50" y1="40" x2="70" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
        <line x1="50" y1="55" x2="35" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
        <line x1="50" y1="55" x2="65" y2="65" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8"/>
        
        {/* Smaller branch details */}
        <line x1="35" y1="35" x2="25" y2="42" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
        <line x1="65" y1="35" x2="75" y2="42" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
        <line x1="30" y1="50" x2="22" y2="55" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
        <line x1="70" y1="50" x2="78" y2="55" stroke="rgba(255,255,255,0.15)" strokeWidth="0.5"/>
      </g>
    </svg>
  );
};

export default ChestnutLogo;
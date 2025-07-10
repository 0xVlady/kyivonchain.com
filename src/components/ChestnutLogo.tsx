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
      {/* 7-pointed chestnut leaf matching uploaded logo */}
      <g fill="#2D5D3B">
        {/* Top center leaf */}
        <path d="M50 8 L45 25 L40 30 L50 35 L60 30 L55 25 Z"/>
        
        {/* Top left leaf */}
        <path d="M35 20 L25 15 L20 25 L25 35 L35 32 L40 30 L35 25 Z"/>
        
        {/* Top right leaf */}
        <path d="M65 20 L75 15 L80 25 L75 35 L65 32 L60 30 L65 25 Z"/>
        
        {/* Left leaf */}
        <path d="M30 45 L15 40 L12 50 L18 60 L30 58 L35 50 L30 45 Z"/>
        
        {/* Right leaf */}
        <path d="M70 45 L85 40 L88 50 L82 60 L70 58 L65 50 L70 45 Z"/>
        
        {/* Bottom left leaf */}
        <path d="M40 65 L30 70 L28 80 L35 85 L45 80 L48 70 L40 65 Z"/>
        
        {/* Bottom right leaf */}
        <path d="M60 65 L70 70 L72 80 L65 85 L55 80 L52 70 L60 65 Z"/>
        
        {/* Central stem */}
        <rect x="48" y="85" width="4" height="10" fill="#2D5D3B"/>
      </g>
      
      {/* White vein patterns matching the uploaded logo */}
      <g stroke="white" strokeWidth="1.2" fill="none">
        {/* Central main vein */}
        <line x1="50" y1="35" x2="50" y2="85"/>
        
        {/* Top center veins */}
        <line x1="50" y1="20" x2="48" y2="30"/>
        <line x1="50" y1="20" x2="52" y2="30"/>
        
        {/* Left side veins */}
        <line x1="50" y1="40" x2="32" y2="30"/>
        <line x1="32" y1="30" x2="28" y2="25"/>
        <line x1="32" y1="30" x2="30" y2="35"/>
        
        {/* Right side veins */}
        <line x1="50" y1="40" x2="68" y2="30"/>
        <line x1="68" y1="30" x2="72" y2="25"/>
        <line x1="68" y1="30" x2="70" y2="35"/>
        
        {/* Middle left veins */}
        <line x1="50" y1="55" x2="25" y2="50"/>
        <line x1="25" y1="50" x2="20" y2="45"/>
        <line x1="25" y1="50" x2="22" y2="55"/>
        
        {/* Middle right veins */}
        <line x1="50" y1="55" x2="75" y2="50"/>
        <line x1="75" y1="50" x2="80" y2="45"/>
        <line x1="75" y1="50" x2="78" y2="55"/>
        
        {/* Bottom left veins */}
        <line x1="50" y1="70" x2="38" y2="72"/>
        <line x1="38" y1="72" x2="35" y2="75"/>
        <line x1="38" y1="72" x2="32" y2="74"/>
        
        {/* Bottom right veins */}
        <line x1="50" y1="70" x2="62" y2="72"/>
        <line x1="62" y1="72" x2="65" y2="75"/>
        <line x1="62" y1="72" x2="68" y2="74"/>
      </g>
    </svg>
  );
};

export default ChestnutLogo;
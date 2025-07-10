import React from 'react';
import { Heart } from 'lucide-react';

const UkraineBanner: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-ukraine-blue to-ukraine-yellow text-white py-1.5 px-4 text-center relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%),
          linear-gradient(-45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)
        `,
        backgroundSize: '8px 8px'
      }}></div>
      
      <div className="relative z-10 flex items-center justify-center space-x-2 text-sm font-medium">
        <span className="text-ukraine-yellow">🇺🇦</span>
        <span>Stand with Ukraine</span>
        <Heart className="w-3 h-3 text-red-400 animate-pulse" />
        <span className="hidden sm:inline">Support democracy and freedom</span>
      </div>
    </div>
  );
};

export default UkraineBanner;
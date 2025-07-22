import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSlider: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setLanguage(language === 'en' ? 'uk' : 'en');
  };

  return (
    <div className="relative group">
      <div 
        className="w-16 h-8 bg-card/20 backdrop-blur-xl border border-primary/20 rounded-full p-1 cursor-pointer transition-all duration-300 hover:bg-card/30 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20"
        onClick={handleToggle}
      >
        <div 
          className={`w-6 h-6 bg-gradient-to-r from-primary to-primary/80 rounded-full transition-all duration-300 flex items-center justify-center shadow-lg backdrop-blur-sm ${
            language === 'uk' ? 'translate-x-8' : 'translate-x-0'
          }`}
        >
          <span className="text-xs font-bold text-primary-foreground drop-shadow-sm">
            {language === 'en' ? 'EN' : 'UA'}
          </span>
        </div>
      </div>
      
      {/* Glass reflection effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/10 to-white/20 pointer-events-none" />
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 pointer-events-none -z-10" />
    </div>
  );
};

export default LanguageSlider;
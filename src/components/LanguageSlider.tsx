import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';

const LanguageSlider: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setLanguage(language === 'en' ? 'uk' : 'en');
  };

  return (
    <div className="relative">
      <div 
        className="w-14 h-7 bg-muted rounded-full p-1 cursor-pointer transition-colors duration-200 hover:bg-muted/80"
        onClick={handleToggle}
      >
        <div 
          className={`w-5 h-5 bg-primary rounded-full transition-transform duration-200 flex items-center justify-center ${
            language === 'uk' ? 'translate-x-7' : 'translate-x-0'
          }`}
        >
          <span className="text-xs font-bold text-primary-foreground">
            {language === 'en' ? 'EN' : 'UA'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LanguageSlider;
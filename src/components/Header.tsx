import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ChestnutLogo from './ChestnutLogo';

const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-glass-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="flex items-center justify-center">
              <img 
                src="/lovable-uploads/a1681a44-34d9-4478-9cb3-fa38979cf895.png" 
                alt="KYIV.ONCHAIN Logo"
                className="w-8 h-8 hover:scale-110 transition-transform duration-300 bg-transparent"
                style={{ backgroundColor: 'transparent', mixBlendMode: 'multiply' }}
              />
            </div>
            <span className="font-bold text-xs sm:text-sm md:text-xl text-foreground">KYIV.ONCHAIN</span>
            <div className="flex items-center space-x-2">
              <img 
                src="/solana-logo.svg" 
                alt="Solana"
                className="w-6 h-6"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-muted/30 rounded-lg p-1 space-x-1">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                  language === 'en' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('uk')}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                  language === 'uk' 
                    ? 'bg-background text-foreground shadow-sm' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                UK
              </button>
            </div>

            {/* CTA Buttons */}
            <Button
              variant="ghost"
              onClick={() => scrollToSection('join-waitlist')}
              className="btn-glass"
            >
              {t('nav.joinWaitlist')}
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection('partner-form')}
              className="btn-glass"
            >
              {t('nav.partnerWithUs')}
            </Button>

            <Button
              variant="ghost"
              disabled
              className="btn-glass opacity-60 cursor-not-allowed"
            >
              {t('nav.hostEvent')} <span className="ml-1 text-xs">Soon</span>
            </Button>

            <Button className="btn-primary">
              {t('nav.login')}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
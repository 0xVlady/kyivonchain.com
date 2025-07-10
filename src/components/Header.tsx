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
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center">
              <ChestnutLogo size={32} className="hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="font-bold text-xl text-foreground">KYIV.ONCHAIN</span>
            <div className="solana-badge">Powered by Solana</div>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="lang-toggle">
              <button
                onClick={() => setLanguage('en')}
                className={language === 'en' ? 'active' : ''}
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => setLanguage('uk')}
                className={language === 'uk' ? 'active' : ''}
              >
                🇺🇦 UK
              </button>
            </div>

            {/* CTA Buttons */}
            <Button
              variant="ghost"
              onClick={() => scrollToSection('join-hub')}
              className="btn-glass"
            >
              {t('nav.joinHub')}
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection('host-event')}
              className="btn-glass"
            >
              {t('nav.hostEvent')}
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
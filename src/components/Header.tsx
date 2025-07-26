
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSlider from './LanguageSlider';
import { ArrowRight, Menu, X, Calendar } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ChestnutLogo from './ChestnutLogo';

interface HeaderProps {
  onOpenWaitlist: () => void;
  onOpenEvent: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenWaitlist, onOpenEvent }) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    
    // If we're not on the home page, navigate to home first with hash
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
      return;
    }
    
    // If we're already on home page, just scroll
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-glass-border">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
            <div className="flex items-center justify-center">
              <img 
                alt="KYIV.ONCHAIN Logo" 
                className="w-6 h-6 sm:w-8 sm:h-8 hover:scale-110 transition-transform duration-300 bg-transparent" 
                style={{
                  backgroundColor: 'transparent',
                  mixBlendMode: 'multiply'
                }} 
                src="/lovable-uploads/50ada35c-1a7f-452e-85d6-33e5a850a6c2.png"
              />
            </div>
            <span className="font-bold text-sm sm:text-xl text-foreground">KYIV.ONCHAIN</span>
            <div className="hidden sm:flex items-center space-x-2">
              <img src="/solana-logo.svg" alt="Solana" className="w-6 h-6" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Stand with Ukraine Banner */}
            <div className="flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-ukraine-blue/10 to-ukraine-yellow/10 border border-ukraine-yellow/20">
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-sm">🇺🇦</span>
              </div>
            </div>

            {/* Action Buttons */}
            <Button 
              size="sm" 
              onClick={onOpenWaitlist} 
              className="btn-primary text-sm px-4 py-2 rounded-lg"
            >
              {t('nav.joinWaitlist')}
              <ArrowRight className="ml-1 w-3 h-3" />
            </Button>

            <Button 
              size="sm" 
              variant="outline" 
              onClick={onOpenEvent}
              className="btn-glass text-sm px-4 py-2 rounded-lg"
            >
              {t('nav.hostEvent')}
            </Button>

            {/* Navigation Links */}
            <Button variant="ghost" onClick={() => scrollToSection('about')} className="btn-glass">
              {t('nav.aboutUs')}
            </Button>

            <Button variant="ghost" asChild className="btn-glass">
              <Link to="/vision">{t('nav.ourMission')}</Link>
            </Button>

            <Button variant="ghost" onClick={() => scrollToSection('partnerships')} className="btn-glass">
              {t('nav.partnership')}
            </Button>

            {/* Calendar Icon Button */}
            <Button variant="ghost" asChild className="btn-glass p-2">
              <Link to="/calendar">
                <Calendar className="w-5 h-5" />
              </Link>
            </Button>

            {/* Language Toggle */}
            <LanguageSlider />
          </div>

          {/* Mobile Menu Button & Quick Actions */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Button 
              size="sm" 
              onClick={onOpenWaitlist} 
              className="btn-primary text-xs px-3 py-2 rounded-lg"
            >
              {t('nav.join')}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-glass-border pt-4">
            <div className="flex flex-col space-y-3">
              <Button 
                variant="ghost" 
                onClick={onOpenEvent}
                className="btn-glass justify-start"
              >
                {t('nav.hostEvent')}
              </Button>
              
              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('about')} 
                className="btn-glass justify-start"
              >
                {t('nav.aboutUs')}
              </Button>

              <Button variant="ghost" asChild className="btn-glass justify-start">
                <Link to="/vision" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.ourMission')}</Link>
              </Button>

              <Button 
                variant="ghost" 
                onClick={() => scrollToSection('partnerships')} 
                className="btn-glass justify-start"
              >
                {t('nav.partnership')}
              </Button>

              <Button variant="ghost" asChild className="btn-glass justify-start">
                <Link to="/calendar" onClick={() => setIsMobileMenuOpen(false)}>
                  {t('footer.calendar')}
                </Link>
              </Button>

              {/* Mobile Language Toggle */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-sm text-muted-foreground">{t('nav.language')}</span>
                <LanguageSlider />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ChestnutLogo from './ChestnutLogo';

interface HeaderProps {
  onOpenWaitlist: () => void;
  onOpenEvent: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenWaitlist, onOpenEvent }) => {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <header className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-glass-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <div className="flex items-center justify-center">
              <img alt="KYIV.ONCHAIN Logo" className="w-8 h-8 hover:scale-110 transition-transform duration-300 bg-transparent" style={{
              backgroundColor: 'transparent',
              mixBlendMode: 'multiply'
            }} src="/lovable-uploads/e827a6da-5e2e-4f74-a012-f40e81d490e4.png" />
            </div>
            <span className="font-bold text-sm md:text-xl text-foreground">KYIV.ONCHAIN</span>
            <div className="flex items-center space-x-2">
              <img src="/solana-logo.svg" alt="Solana" className="w-6 h-6" />
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {/* Stand with Ukraine Banner */}
            <div className="hidden md:flex items-center px-3 py-1.5 rounded-full bg-gradient-to-r from-ukraine-blue/10 to-ukraine-yellow/10 border border-ukraine-yellow/20">
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
              Join Waitlist
              <ArrowRight className="ml-1 w-3 h-3" />
            </Button>

            <Button 
              size="sm" 
              variant="outline" 
              onClick={onOpenEvent}
              className="btn-glass text-sm px-4 py-2 rounded-lg"
            >
              Host Event
            </Button>

            {/* Navigation Links */}
            <Button variant="ghost" onClick={() => scrollToSection('about')} className="btn-glass">
              About Us
            </Button>

            <Button variant="ghost" asChild className="btn-glass">
              <Link to="/vision">Our Mission</Link>
            </Button>

            <Button variant="ghost" onClick={() => scrollToSection('partnerships')} className="btn-glass">
              Partnership
            </Button>

            {/* Language Toggle */}
            <div className="flex items-center bg-muted/30 rounded-lg p-1 space-x-1">
              <button onClick={() => setLanguage('en')} className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${language === 'en' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
                EN
              </button>
              <button onClick={() => setLanguage('uk')} className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${language === 'uk' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
                UK
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Header;
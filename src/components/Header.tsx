import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import ChestnutLogo from './ChestnutLogo';
import WaitlistModal from './WaitlistModal';
import EventModal from './EventModal';
const Header: React.FC = () => {
  const {
    language,
    setLanguage,
    t
  } = useLanguage();
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <header className="fixed top-0 left-0 right-0 z-50 glass-card border-0 border-b border-glass-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })}>
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
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-4">
            {/* Stand with Ukraine Banner */}
            <div className="hidden md:flex items-center glass-card px-3 py-1.5 rounded-full border border-ukraine-yellow/30">
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-sm">🇺🇦</span>
                <span className="text-foreground font-medium">Stand with Ukraine</span>
              </div>
            </div>

            {/* Action Buttons */}
            <Button 
              size="sm" 
              onClick={() => setIsWaitlistModalOpen(true)} 
              className="btn-primary text-sm px-4 py-2 rounded-lg"
            >
              Join Waiting List
              <ArrowRight className="ml-1 w-3 h-3" />
            </Button>

            <Button 
              size="sm" 
              variant="outline" 
              onClick={() => setIsEventModalOpen(true)}
              className="btn-glass text-sm px-4 py-2 rounded-lg"
            >
              Host Event
            </Button>

            {/* Navigation Links */}
            <Button variant="ghost" onClick={() => scrollToSection('about')} className="btn-glass">
              About Us
            </Button>

            <Button variant="ghost" onClick={() => window.location.href = '/vision'} className="btn-glass">
              Our Mission
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

      {/* Modals */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
    </header>;
};
export default Header;
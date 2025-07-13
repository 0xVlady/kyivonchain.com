import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Zap, Users, Trophy } from 'lucide-react';
import PixelatedMap from './PixelatedMap';
const Hero: React.FC = () => {
  const {
    t
  } = useLanguage();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      
      {/* Subtle pixelated chestnut pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
      backgroundImage: `
          radial-gradient(circle at 20% 30%, hsl(var(--chestnut) / 0.1) 2px, transparent 2px),
          radial-gradient(circle at 70% 60%, hsl(var(--chestnut) / 0.08) 1px, transparent 1px),
          radial-gradient(circle at 90% 20%, hsl(var(--chestnut) / 0.12) 1.5px, transparent 1.5px)
        `,
      backgroundSize: '80px 80px, 120px 120px, 100px 100px'
    }}></div>
      
      {/* Minimalistic chestnut leaf elements */}
      <div className="absolute top-32 right-16 opacity-20">
        <div className="w-3 h-3 bg-chestnut/30 transform rotate-45" style={{
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
      }}></div>
      </div>
      <div className="absolute bottom-24 left-20 opacity-15">
        <div className="w-2 h-2 bg-chestnut/40 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent text-4xl">
            {t('hero.title')}
          </h1>

          {/* Tagline */}
          <p className="text-2xl md:text-3xl font-medium text-foreground mb-4">
            {t('hero.tagline')}
          </p>

          {/* Subtitle */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" onClick={() => scrollToSection('join-waitlist')} className="btn-primary text-lg px-8 py-4 rounded-2xl">
              {t('hero.joinBtn')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button size="lg" variant="outline" disabled className="btn-glass text-lg px-8 py-4 rounded-2xl opacity-60 cursor-not-allowed relative">
              {t('hero.hostBtn')}
              <span className="ml-2 px-2 py-1 bg-pixel text-xs rounded-full text-foreground font-semibold">
                {t('hero.hostBtnSoon')}
              </span>
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="glass-card p-6 rounded-3xl interactive-card enhanced-hover">
              <div className="flex items-center justify-center mb-3">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Community Members</div>
            </div>

            <div className="glass-card p-6 rounded-3xl interactive-card enhanced-hover">
              <div className="flex items-center justify-center mb-3">
                <Trophy className="w-8 h-8 text-ukraine-blue" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">20+</div>
              <div className="text-sm text-muted-foreground">Events Hosted</div>
            </div>

            <div className="glass-card p-6 rounded-3xl interactive-card enhanced-hover">
              <div className="flex items-center justify-center mb-3">
                <Zap className="w-8 h-8 text-chestnut" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Hub Access</div>
            </div>
          </div>
          
          {/* Enhanced Ukraine Pride Section with Logo Pairing */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="glass-card p-8 rounded-3xl text-center bg-gradient-ukraine/10 border-2 border-ukraine-yellow/20">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <img alt="KYIV.ONCHAIN Logo" className="w-8 h-8" style={{
                backgroundColor: 'transparent'
              }} src="/lovable-uploads/aa500a20-6676-44ba-b04f-0baaaadda75e.png" />
                <span className="text-lg font-bold text-foreground">KYIV.ONCHAIN</span>
                <div className="flex items-center space-x-2">
                  <img src="/solana-logo.svg" alt="Solana" className="w-6 h-6" />
                </div>
              </div>
              <div className="text-lg font-semibold mb-2 bg-gradient-ukraine bg-clip-text text-transparent">
                🇺🇦 Building Ukraine's Web3 Future
              </div>
              <p className="text-muted-foreground">
                Empowering Ukrainian developers and entrepreneurs in the decentralized economy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
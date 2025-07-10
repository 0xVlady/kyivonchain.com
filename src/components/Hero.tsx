import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Zap, Users, Trophy } from 'lucide-react';
import PixelatedMap from './PixelatedMap';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Ukraine Pixelated Map Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/5a32a22d-5e03-4328-ba4c-c2bd9bb301ad.png')`,
          backgroundSize: '80%',
          filter: 'blur(0.5px)'
        }}
      />
      
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl float-animation"></div>
      <div className="absolute top-60 right-20 w-24 h-24 bg-secondary/20 rounded-full blur-2xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-ukraine-blue/10 rounded-full blur-3xl float-animation" style={{ animationDelay: '4s' }}></div>
      
      {/* Subtle pixelated pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `
          linear-gradient(45deg, hsl(var(--pixel-gold) / 0.1) 25%, transparent 25%),
          linear-gradient(-45deg, hsl(var(--pixel-gold) / 0.1) 25%, transparent 25%),
          linear-gradient(45deg, transparent 75%, hsl(var(--pixel-gold) / 0.1) 75%),
          linear-gradient(-45deg, transparent 75%, hsl(var(--pixel-gold) / 0.1) 75%)
        `,
        backgroundSize: '40px 40px',
        backgroundPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
      }}></div>
      
      {/* Chestnut leaf decorative elements */}
      <div className="absolute top-40 left-16 text-chestnut/20 rotate-45 transform">
        <div className="w-16 h-16 rounded-full bg-gradient-chestnut opacity-30 blur-xl"></div>
      </div>
      <div className="absolute bottom-32 right-32 text-chestnut/20 -rotate-12 transform">
        <div className="w-20 h-20 rounded-full bg-gradient-chestnut opacity-25 blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
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
            <Button
              size="lg"
              onClick={() => scrollToSection('join-hub')}
              className="btn-primary text-lg px-8 py-4 rounded-2xl"
            >
              {t('hero.joinBtn')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              disabled
              className="btn-glass text-lg px-8 py-4 rounded-2xl opacity-60 cursor-not-allowed relative"
            >
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
          
          {/* Enhanced Ukraine Pride Section */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="glass-card p-8 rounded-3xl text-center bg-gradient-ukraine/10 border-2 border-ukraine-yellow/20">
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
    </section>
  );
};

export default Hero;
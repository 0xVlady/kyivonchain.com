import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Users, FileText, Palette } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import WaitlistModal from './WaitlistModal';
import EventModal from './EventModal';
import PartnersModal from './PartnersModal';

const GetStarted: React.FC = () => {
  const navigate = useNavigate();
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isPartnersModalOpen, setIsPartnersModalOpen] = useState(false);

  const ctaButtons = [
    {
      id: 'waitlist',
      title: 'Join Waiting List',
      description: 'Get early access to membership',
      icon: Users,
      action: () => setIsWaitlistModalOpen(true),
      className: 'btn-primary'
    },
    {
      id: 'event',
      title: 'Host Event',
      description: 'Organize your Web3 event',
      icon: Calendar,
      action: () => setIsEventModalOpen(true),
      className: 'btn-glass'
    },
    {
      id: 'partnership',
      title: 'Partnership Deck',
      description: 'Explore partnership opportunities',
      icon: FileText,
      action: () => navigate('/partnership-deck'),
      className: 'btn-glass'
    },
    {
      id: 'branding',
      title: 'Branding Access',
      description: 'View our branding guidelines',
      icon: Palette,
      action: () => navigate('/branding'),
      className: 'btn-glass'
    }
  ];

  return (
    <>
      <section id="get-started" className="py-20 px-6 relative">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Get Started
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to join Ukraine's premier Web3 hub? Choose your path below.
            </p>
          </div>

          {/* CTA Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ctaButtons.map((cta) => {
              const IconComponent = cta.icon;
              
              return (
                <div key={cta.id} className="glass-card rounded-2xl p-6 transition-all duration-300 hover:scale-105 interactive-card">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{cta.title}</h3>
                    <p className="text-sm text-muted-foreground">{cta.description}</p>
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={cta.action}
                    className={`w-full ${cta.className}`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modals */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
      <PartnersModal
        isOpen={isPartnersModalOpen}
        onClose={() => setIsPartnersModalOpen(false)}
      />
    </>
  );
};

export default GetStarted;
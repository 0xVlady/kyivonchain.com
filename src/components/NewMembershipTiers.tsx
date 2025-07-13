import React, { useState } from 'react';
import { Check, Crown, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import WaitlistModal from './WaitlistModal';

const NewMembershipTiers: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>('');

  const handleJoinClick = (tier: string) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const tiers = [
    {
      id: 'guest',
      name: 'Guest',
      price: 'Free',
      icon: Users,
      color: 'from-muted to-muted/50',
      features: [
        'Event access (limited)',
        'Basic networking',
        'Community Discord access'
      ]
    },
    {
      id: 'member',
      name: 'Member',
      price: '$99',
      period: '/month',
      icon: Zap,
      color: 'from-primary/20 to-primary/10',
      popular: true,
      features: [
        'All Guest perks included',
        'Unlimited desk access',
        'Meeting room booking',
        'Priority event access',
        'Member-only events',
        'Mentorship program',
        'Resource library access'
      ]
    },
    {
      id: 'inner-circle',
      name: 'Inner Circle',
      price: '$199',
      period: '/month',
      icon: Crown,
      color: 'from-pixel-gold/30 to-pixel-gold/10',
      exclusive: true,
      features: [
        'All Member perks included',
        'Governance voting power',
        'Direct fund access',
        'Priority event hosting',
        'Leadership council access',
        'Early token access',
        'Private advisory sessions',
        'Strategic partnership opportunities'
      ]
    }
  ];

  return (
    <>
      <section id="membership" className="py-20 px-6 relative">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Membership Tiers
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join Ukraine's premier Web3 hub with three distinct membership levels, 
              each building upon the previous to unlock greater opportunities and influence.
            </p>
          </div>

          {/* Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tiers.map((tier, index) => {
              const IconComponent = tier.icon;
              
              return (
                <div
                  key={tier.id}
                  className={`relative glass-card rounded-2xl p-8 transition-all duration-300 hover:scale-105 ${
                    tier.popular ? 'ring-2 ring-primary/50' : ''
                  } ${tier.exclusive ? 'ring-2 ring-pixel-gold/50' : ''}`}
                >
                  {/* Popular Badge */}
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Exclusive Badge */}
                  {tier.exclusive && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-pixel text-foreground px-4 py-1 rounded-full text-sm font-semibold">
                        Leadership Level
                      </span>
                    </div>
                  )}

                  {/* Icon & Background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-foreground" />
                  </div>

                  {/* Tier Info */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="text-3xl font-bold">
                      {tier.price}
                      {tier.period && <span className="text-lg text-muted-foreground">{tier.period}</span>}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => {
                      // Show inherited features with subtle styling
                      const isInherited = featureIndex === 0 && index > 0;
                      
                      return (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            isInherited ? 'text-muted-foreground' : 'text-primary'
                          }`} />
                          <span className={`text-sm ${
                            isInherited ? 'text-muted-foreground italic' : 'text-foreground'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <Button
                    onClick={() => handleJoinClick(tier.id)}
                    className={`w-full ${
                      tier.popular ? 'btn-primary' : 
                      tier.exclusive ? 'bg-gradient-pixel hover:opacity-90' : 
                      'btn-glass'
                    }`}
                  >
                    {tier.id === 'guest' ? 'Get Started' : 'Join Waitlist'}
                  </Button>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <div className="glass-card rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Why Choose Membership?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div>
                  <strong className="text-foreground">Community First:</strong> Connect with Ukraine's top Web3 builders and innovators
                </div>
                <div>
                  <strong className="text-foreground">War-Resilient:</strong> Underground workspace ensures continuity during alerts
                </div>
                <div>
                  <strong className="text-foreground">Global Network:</strong> Access to international Web3 partnerships and opportunities
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaitlistModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedTier={selectedTier}
      />
    </>
  );
};

export default NewMembershipTiers;
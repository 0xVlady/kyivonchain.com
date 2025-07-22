import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Star, Crown, Users, Calendar, Gift, Zap, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MembershipTiers: React.FC = () => {
  const { t } = useLanguage();

  const tiers = [
    {
      name: t('membership.guest'),
      price: 'Free',
      duration: '1 day pass',
      description: 'Experience the hub and join our community',
      icon: Users,
      color: 'from-muted to-muted',
      textColor: 'text-muted-foreground',
      popular: false,
      features: [
        '1 day free workspace access',
        'Community Telegram access',
        'Attend public events',
        'Basic networking opportunities'
      ]
    },
    {
      name: t('membership.member'),
      price: '$99',
      originalPrice: '$149',
      duration: 'per month',
      description: 'Full access to the Web3 community hub',
      icon: Star,
      color: 'from-primary/80 to-primary',
      textColor: 'text-primary',
      popular: true,
      features: [
        'Unlimited hub access',
        'Private Member community',
        'NFT membership passport',
        'Members only event invites',
        'Partner product discounts',
        'Exclusive investor network access',
        'KYIV.ONCHAIN merch',
        'Loyalty programm rewards'
      ]
    },
    {
      name: t('membership.closed'),
      price: '299',
      originalPrice: '299',
      duration: 'per month',
      description: 'Exclusive features for select community leaders',
      icon: Crown,
      color: 'from-amber-400/80 to-amber-500',
      textColor: 'text-amber-600',
      popular: false,
      features: [
        'All Member benefits',
        'Private Advisory sessions',
        'Strategic partnership opportunities',
        'Exclusive alpha & deal flow',
        'Special governance weight',
        'Priority event hosting'
      ]
    }
  ];

  const scrollToJoinForm = (selectedTier?: string) => {
    const element = document.getElementById('join-waitlist');
    element?.scrollIntoView({ behavior: 'smooth' });
    
    // Set the selected tier in localStorage so the form can pick it up
    if (selectedTier) {
      localStorage.setItem('selectedTier', selectedTier);
      // Dispatch a custom event to notify the form
      window.dispatchEvent(new CustomEvent('tierSelected', { detail: selectedTier }));
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-ukraine-blue/5 rounded-full blur-3xl"></div>
      
      {/* Minimalistic chestnut element */}
      <div className="absolute top-40 right-20 opacity-12">
        <div className="w-3 h-3 bg-chestnut/30 transform -rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('membership.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the membership tier that fits your Web3 journey. 
              All tiers include access to our vibrant community and events.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
          </div>

          {/* Membership Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {tiers.map((tier, index) => (
              <div key={index} className={`relative ${tier.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}>
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`glass-card p-6 rounded-2xl h-full transition-all duration-300 hover:scale-[1.02] ${
                  tier.popular ? 'border border-primary/20 shadow-lg' : ''
                }`}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tier.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                      <tier.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      {tier.originalPrice && (
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <span className="text-sm text-muted-foreground line-through">{tier.originalPrice}</span>
                          <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-2 py-0.5 text-xs rounded-md font-medium">
                            -{Math.round(((parseInt(tier.originalPrice.replace('$', '')) - parseInt(tier.price.replace('$', ''))) / parseInt(tier.originalPrice.replace('$', ''))) * 100)}%
                          </span>
                        </div>
                      )}
                      <span className={`text-2xl font-bold ${tier.textColor}`}>{tier.price}</span>
                      {tier.duration && (
                        <span className="text-muted-foreground ml-2">/ {tier.duration}</span>
                      )}
                    </div>
                    <p className="text-muted-foreground text-sm">{tier.description}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-5 h-5 bg-gradient-to-r ${tier.color} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button
                      onClick={() => {
                        const tierValue = tier.name.toLowerCase().includes('guest') ? 'guest' :
                                        tier.name.toLowerCase().includes('member') ? 'member' : 'closed';
                        scrollToJoinForm(tierValue);
                      }}
                      className={`w-full py-3 rounded-xl transition-all duration-300 ${
                        tier.popular 
                          ? 'btn-primary hover:scale-105' 
                          : 'btn-glass hover:scale-105'
                      }`}
                    >
                      {tier.name.toLowerCase().includes('guest') ? 'Get Day Pass' : 
                       tier.name.toLowerCase().includes('member') ? 'Join Waitlist' : 
                       'Apply'}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">20+ Events</h4>
              <p className="text-muted-foreground text-sm">Monthly workshops, meetups, and conferences</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-ukraine-blue to-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Safe Space</h4>
              <p className="text-muted-foreground text-sm">Underground workspace for air raid safety</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-secondary to-secondary-dark rounded-xl flex items-center justify-center mx-auto mb-4">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Rewards</h4>
              <p className="text-muted-foreground text-sm">XP system with coffee, merch, and perks</p>
            </div>

            <div className="glass-card p-6 rounded-2xl text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-ukraine-yellow to-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Network</h4>
              <p className="text-muted-foreground text-sm">Connect with top Web3 builders in Ukraine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipTiers;
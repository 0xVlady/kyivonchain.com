import React from 'react';
import { Check, Crown, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface NewMembershipTiersProps {
  onOpenWaitlist: (tier?: string) => void;
}

const NewMembershipTiers: React.FC<NewMembershipTiersProps> = ({ onOpenWaitlist }) => {
  const { t } = useLanguage();

  const handleJoinClick = (tier: string) => {
    onOpenWaitlist(tier);
  };

  const tiers = [
    {
      id: 'guest',
      name: t('membership.guest'),
      price: t('general.free'),
      icon: Users,
      color: 'from-muted to-muted/50',
      features: [
        t('membership.tier.guest.features.0'),
        t('membership.tier.guest.features.1'),
        t('membership.tier.guest.features.2'),
        t('membership.tier.guest.features.3')
      ]
    },
    {
      id: 'member',
      name: t('membership.member'),
      price: '$99',
      originalPrice: '$149',
      period: t('general.month'),
      icon: Zap,
      color: 'from-primary/20 to-primary/10',
      popular: true,
      features: [
        t('membership.tier.member.features.0'),
        t('membership.tier.member.features.1'),
        t('membership.tier.member.features.2'),
        t('membership.tier.member.features.3'),
        t('membership.tier.member.features.4'),
        t('membership.tier.member.features.5'),
        t('membership.tier.member.features.6'),
        t('membership.tier.member.features.7')
      ]
    },
    {
      id: 'inner-circle',
      name: t('membership.innerCircle'),
      price: '$199',
      period: t('general.month'),
      icon: Crown,
      color: 'from-pixel-gold/30 to-pixel-gold/10',
      exclusive: true,
      features: [
        t('membership.tier.inner.features.0'),
        t('membership.tier.inner.features.1'),
        t('membership.tier.inner.features.2'),
        t('membership.tier.inner.features.3'),
        t('membership.tier.inner.features.4'),
        t('membership.tier.inner.features.5'),
        t('membership.tier.inner.features.6'),
        t('membership.tier.inner.features.7'),
        t('membership.tier.inner.features.8')
      ]
    }
  ];

  return (
     <>
       <section id="membership" className="py-20 px-6 relative mb-20 mt-8">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('membership.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('membership.subtitle')}
            </p>
          </div>

          {/* Tiers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-16 mt-4 overflow-visible">
            {tiers.map((tier, index) => {
              const IconComponent = tier.icon;
              
              return (
                <div
                  key={tier.id}
                  className={`relative glass-card rounded-2xl p-8 transition-all duration-300 hover:scale-105 flex flex-col h-full ${
                    tier.popular ? 'ring-2 ring-primary/50 pt-12' : ''
                  } ${tier.exclusive ? 'ring-2 ring-pixel-gold/50' : ''}`}
                >
                   {/* Popular Badge */}
                   {tier.popular && (
                     <div className="absolute -top-2 md:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                       <span className="bg-gradient-primary text-primary-foreground px-2 py-1 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-semibold whitespace-nowrap shadow-lg">
                         {t('membership.mostPopular')}
                       </span>
                     </div>
                   )}

                  {/* Icon & Background */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6 mx-auto`}>
                    <IconComponent className="w-8 h-8 text-foreground" />
                  </div>

                   {/* Tier Info */}
                   <div className="text-center mb-8 h-24 flex flex-col justify-center">
                     <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                     <div className="space-y-1">
                       {tier.originalPrice && (
                          <div className="flex items-center justify-center gap-2">
                            <span className="text-xl text-muted-foreground line-through">{tier.originalPrice}</span>
                            <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full font-medium">{t('general.save')} ${parseInt(tier.originalPrice.replace('$', '')) - parseInt(tier.price.replace('$', ''))}</span>
                         </div>
                       )}
                       <div className={`text-3xl font-bold ${tier.id === 'member' ? 'text-primary' : 'text-muted-foreground'}`}>
                         {tier.price}
                         {tier.period && <span className="text-lg text-muted-foreground">/{tier.period}</span>}
                       </div>
                     </div>
                   </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8 flex-grow">
                    {tier.features.map((feature, featureIndex) => {
                      // Only show inherited styling for Inner Circle's first feature
                      const isInherited = featureIndex === 0 && tier.id === 'inner-circle';
                      
                      return (
                        <div key={featureIndex} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            isInherited ? 'text-muted-foreground' : 'text-primary'
                          }`} />
                          <span className={`text-sm leading-relaxed ${
                            isInherited ? 'text-muted-foreground italic' : 'text-foreground'
                          }`}>
                            {feature}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button
                      onClick={() => handleJoinClick(tier.id)}
                      className={`w-full ${
                        tier.popular ? 'btn-primary' : 
                        tier.exclusive ? 'bg-gradient-pixel hover:opacity-90' : 
                        'btn-glass'
                      }`}
                    >
                      {tier.id === 'guest' ? t('membership.getStarted') : t('membership.joinWaitlist')}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <div className="glass-card rounded-xl p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">{t('membership.whyChoose')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-muted-foreground">
                <div>
                  <strong className="text-foreground">{t('membership.communityFirst')}</strong> {t('membership.communityFirst.desc')}
                </div>
                <div>
                  <strong className="text-foreground">{t('membership.warResilient')}</strong> {t('membership.warResilient.desc')}
                </div>
                <div>
                  <strong className="text-foreground">{t('membership.globalNetwork')}</strong> {t('membership.globalNetwork.desc')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewMembershipTiers;

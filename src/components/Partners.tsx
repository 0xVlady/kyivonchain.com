import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink } from 'lucide-react';

const Partners: React.FC = () => {
  const { t } = useLanguage();

  const partners = [
    {
      name: 'Kumeka',
      description: t('partners.kumeka.desc'),
      logo: '🏢',
      category: t('partners.categories.backer'),
      website: '#'
    },
    {
      name: 'Solana Foundation',
      description: t('partners.solana.desc'),
      logo: '◎',
      category: t('partners.categories.ecosystem'),
      website: 'https://solana.org'
    },
    {
      name: 'iHUB Kyiv',
      description: t('partners.ihub.desc'),
      logo: '🏢',
      category: t('partners.categories.infrastructure'),
      website: '#'
    },
    {
      name: 'Solus Partners',
      description: t('partners.solus.desc'),
      logo: '💼',
      category: t('partners.categories.investment'),
      website: '#'
    },
    {
      name: '3x Capital',
      description: t('partners.3xCapital.desc'),
      logo: '💰',
      category: t('partners.categories.investment'),
      website: '#'
    },
    {
      name: 'Flow (Solana Temple)',
      description: t('partners.flow.desc'),
      logo: '🌊',
      category: t('partners.categories.community'),
      website: '#'
    },
    {
      name: 'Nomadz',
      description: t('partners.nomadz.desc'),
      logo: '🌎',
      category: t('partners.categories.community'),
      website: '#'
    },
    {
      name: 'Venture Launch',
      description: t('partners.ventures.desc'),
      logo: '🚀',
      category: t('partners.categories.acceleration'),
      website: '#'
    }
  ];

  const categories = [
    { name: t('partners.categories.backer'), color: 'from-primary to-primary-light' },
    { name: t('partners.categories.ecosystem'), color: 'from-ukraine-blue to-blue-400' },
    { name: t('partners.categories.infrastructure'), color: 'from-secondary to-secondary-dark' },
    { name: t('partners.categories.investment'), color: 'from-ukraine-yellow to-yellow-400' },
    { name: t('partners.categories.community'), color: 'from-green-500 to-green-400' },
    { name: t('partners.categories.acceleration'), color: 'from-purple-500 to-purple-400' }
  ];

  const getCategoryColor = (category: string) => {
    return categories.find(c => c.name === category)?.color || 'from-muted to-muted';
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-ukraine-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('partners.title')}
            </h2>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
               {t('partners.subtitle')}
             </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
          </div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {partners.map((partner, index) => (
              <div key={index} className="glass-card p-6 rounded-3xl group hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  {/* Logo */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${getCategoryColor(partner.category)} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {partner.logo}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                        {partner.name}
                      </h3>
                      {partner.website && partner.website !== '#' && (
                        <a 
                          href={partner.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                    
                    {/* Category Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getCategoryColor(partner.category)} mb-3`}>
                      {partner.category}
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Partnership CTA */}
          <div className="text-center">
            <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
               <h3 className="text-2xl font-bold text-foreground mb-4">
                 {t('partners.becomePartner')}
               </h3>
               <p className="text-muted-foreground mb-6">
                 {t('partners.becomePartner.desc')}
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button className="btn-primary px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                   {t('partners.inquiry')}
                 </button>
                 <button className="btn-glass px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                   {t('partners.downloadDeck')}
                 </button>
               </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
             <div className="text-center">
               <div className="text-3xl font-bold text-primary mb-2">8</div>
               <div className="text-muted-foreground text-sm">{t('partners.stats.partners')}</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-bold text-ukraine-blue mb-2">$2M+</div>
               <div className="text-muted-foreground text-sm">{t('partners.stats.investment')}</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-bold text-secondary-dark mb-2">50+</div>
               <div className="text-muted-foreground text-sm">{t('partners.stats.events')}</div>
             </div>
             <div className="text-center">
               <div className="text-3xl font-bold text-ukraine-yellow mb-2">100%</div>
               <div className="text-muted-foreground text-sm">{t('partners.stats.community')}</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
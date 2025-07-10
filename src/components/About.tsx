import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Wifi, Users, Zap, Building, Coffee } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: 'Underground Safety',
      description: 'Work safely during air raid alarms in our underground workspace'
    },
    {
      icon: Wifi,
      title: 'High-Speed Internet',
      description: 'Reliable connectivity for all your Web3 development needs'
    },
    {
      icon: Users,
      title: 'Flexible Workspaces',
      description: 'Hot desks, private offices, and collaboration areas'
    },
    {
      icon: Zap,
      title: 'Full Event Setup',
      description: 'Complete AV equipment for hosting events and presentations'
    },
    {
      icon: Building,
      title: 'iHUB Partnership',
      description: 'Access to established coworking infrastructure'
    },
    {
      icon: Coffee,
      title: 'Community Perks',
      description: 'Coffee, networking events, and member benefits'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                {t('about.description')}
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.partnership')}
              </p>

              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-ukraine-blue">
                <p className="text-foreground font-medium">
                  {t('about.safety')}
                </p>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="glass-card p-8 rounded-3xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">iHUB Kyiv</h4>
                    <p className="text-sm text-muted-foreground">Partner Location</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-ukraine-blue rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">Underground</h4>
                    <p className="text-sm text-muted-foreground">Safe Workspace</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Wifi className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">High-Speed</h4>
                    <p className="text-sm text-muted-foreground">Internet & Tech</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-ukraine-yellow to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground">Community</h4>
                    <p className="text-sm text-muted-foreground">Web3 Builders</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
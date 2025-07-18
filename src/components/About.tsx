import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Wifi, Users, Zap, Building, Coffee, Linkedin, Send, Twitter } from 'lucide-react';
import ChestnutLogo from './ChestnutLogo';

const About: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "VLAD FEDYNA",
      description: "An executive director at a Goldman Sachs with 9 years experience in derivatives. Focused on projects related to blockchain and tokenization use cases in TradFi.",
      image: "/lovable-uploads/41874f53-09d9-4501-bb37-a19f8bb1d726.png",
      social: {
        linkedin: "Vlad Fedyna",
        telegram: "@vlady_xyz",
        twitter: "@vlady_xyz"
      }
    },
    {
      name: "IVAN MALTSEV",
      description: "General Partner at 3x Capital, Founder of Nomadz, Co-founder of Ventures Launch. Driving strategic investment and supporting portfolio companies with financial advisory services.",
      image: "/lovable-uploads/038adab8-9ff0-4418-94ed-9569a28e9a6d.png",
      social: {
        linkedin: "Ivan Maltsev",
        telegram: "@ivan_nomadz",
        twitter: "@ivan_nomadz"
      }
    },
    {
      name: "TARAS YAVORSKI",
      description: "General Partner at 3x Capital, Co-founder of Ventures Launch. Investor in web3 companies and digital assets. Has 5+ years of management experience in top-tier international companies.",
      image: "/lovable-uploads/2fb643ba-c3c8-4f6c-b844-88931d9a8657.png",
      social: {
        linkedin: "Taras Yavorski",
        telegram: "@tarasX3",
        twitter: "@tarasssl3"
      }
    },
    {
      name: "PAVLO KARAPINKA",
      description: "Founder of Mergewave Capital, Founder of Solus Group. Blockchain Marketing Advisor, Growth for Tier 1 WEB 3.0 companies.",
      image: "/lovable-uploads/e0abdda0-6878-4e2c-84b0-bb2893aabb2e.png",
      social: {
        linkedin: "Pasha Karapinka",
        telegram: "@Pasha_S11"
      }
    },
    {
      name: "NICK SMOHORZHEVSKI",
      description: "CIO at Solus Group, Co-Founder of DEGEN Associates. Strategic Advisor and Investor.",
      image: "/lovable-uploads/8a4889f3-4033-420c-b87f-cf85a3cedd31.png",
      social: {
        linkedin: "Nikita Smohorzhevskyi",
        telegram: "@Nick_Solus"
      }
    }
  ];

  const features = [
    {
      icon: Shield,
      title: t('about.features.undergroundSafety'),
      description: t('about.features.undergroundSafety.desc')
    },
    {
      icon: Wifi,
      title: t('about.features.highSpeedInternet'),
      description: t('about.features.highSpeedInternet.desc')
    },
    {
      icon: Users,
      title: t('about.features.flexibleWorkspaces'),
      description: t('about.features.flexibleWorkspaces.desc')
    },
    {
      icon: Zap,
      title: t('about.features.fullEventSetup'),
      description: t('about.features.fullEventSetup.desc')
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden mb-20">
      {/* Minimalistic chestnut elements */}
      <div className="absolute top-16 right-12 opacity-10">
        <div className="w-4 h-4 bg-chestnut/20 transform rotate-12" style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}></div>
      </div>
      <div className="absolute bottom-32 left-16 opacity-8">
        <div className="w-2 h-2 bg-chestnut/25 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('about.title')}
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          </div>

          {/* Intro Text Content */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              {t('about.description')}
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.partnership')}
            </p>
          </div>

          {/* Team Section */}
          <div className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">Team</h3>
            
            {/* First row - 3 members */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {teamMembers.slice(0, 3).map((member, index) => (
                <div key={index} className="group">
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                    {/* Photo */}
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/30">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center flex-1">
                      {member.description}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex justify-center gap-3 mt-auto">
                      <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-3 h-3" />
                        <span className="hidden sm:inline text-xs">{member.social.linkedin}</span>
                      </a>
                      <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                        <Send className="w-3 h-3" />
                        <span className="hidden sm:inline text-xs">{member.social.telegram}</span>
                      </a>
                      {member.social.twitter && (
                        <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                          <Twitter className="w-3 h-3" />
                          <span className="hidden sm:inline text-xs">{member.social.twitter}</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Second row - 2 members centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                {teamMembers.slice(3, 5).map((member, index) => (
                  <div key={index + 3} className="group">
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-64 flex flex-col">
                      {/* Photo */}
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/30">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Description */}
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center flex-1">
                        {member.description}
                      </p>
                      
                      {/* Social Links */}
                      <div className="flex justify-center gap-3 mt-auto">
                        <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="w-3 h-3" />
                          <span className="hidden sm:inline text-xs">{member.social.linkedin}</span>
                        </a>
                        <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                          <Send className="w-3 h-3" />
                          <span className="hidden sm:inline text-xs">{member.social.telegram}</span>
                        </a>
                        {member.social.twitter && (
                          <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                            <Twitter className="w-3 h-3" />
                            <span className="hidden sm:inline text-xs">{member.social.twitter}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col items-center text-center p-4 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
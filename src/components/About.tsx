
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Wifi, Users, Zap, Building, Coffee, Linkedin, Send, Twitter, Blocks, Coins, BookOpen, Code, Calendar, Trophy, ShoppingBag } from 'lucide-react';
import ChestnutLogo from './ChestnutLogo';

const About: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "VLAD FEDYNA",
      role: "Executive Director at Goldman Sachs",
      image: "/lovable-uploads/fb8db31a-dc29-4e04-8631-4e697e5ba355.png",
      social: {
        twitter: "https://x.com/vlady_xyz"
      }
    },
    {
      name: "IVAN MALTSEV", 
      role: "General Partner at 3x Capital, Founder of Nomadz, Co-founder of Ventures Launch",
      image: "/lovable-uploads/6fa81022-9fda-4df2-a962-1d92443db90e.png",
      social: {
        twitter: "https://x.com/ivan_nomadz"
      }
    },
    {
      name: "TARAS YAVORSKI",
      role: "General Partner at 3x Capital, Co-founder of Ventures Launch", 
      image: "/lovable-uploads/041e06b3-fc9a-47b2-8681-a4d709acb4be.png",
      social: {
        twitter: "https://x.com/tarasss13"
      }
    },
    {
      name: "PAVLO KARAPINKA",
      role: "Founder of Mergewave Capital, Founder of Solus Group",
      image: "/lovable-uploads/86bf392e-bea9-4f61-9a62-bd7e84bb5d49.png",
      social: {}
    },
    {
      name: "NICK SMOHORZHEVSKI", 
      role: "CIO at Solus Group, Co-Founder of DEGEN Associates",
      image: "/lovable-uploads/2b5fecb6-2266-4ddc-a8c4-34da28c08e6a.png",
      social: {
        twitter: "https://x.com/Jeytery1"
      }
    }
  ];

  const features = [
    {
      icon: Wifi,
      title: "All you need for work",
      description: "Desks, Wi-Fi & meeting rooms"
    },
    {
      icon: Users,
      title: "iHUB Partner",
      description: "Official partnership with innovation hub"
    },
    {
      icon: Blocks,
      title: "Web3 environment",
      description: "Web3 teams & builders around you"
    },
    {
      icon: Coins,
      title: "Tokenized Membership",
      description: "Token-based membership system"
    },
    {
      icon: BookOpen,
      title: "Mentorships",
      description: "Expert guidance from industry leaders"
    },
    {
      icon: Code,
      title: "Hackathons",
      description: "Hackathon prep, founder education, pitches"
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Conferences, workshops, meetups"
    },
    {
      icon: Trophy,
      title: "Loyalty/Gamification",
      description: "Rewards system for active members"
    },
    {
      icon: ShoppingBag,
      title: "Web3 Store",
      description: "Exclusive Web3 gadgets, merch & wallets"
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
            
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group h-full">
                  <div className="bg-card rounded-2xl p-3 sm:p-4 md:p-6 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 flex flex-col h-full">
                    <div className="relative mb-3 sm:mb-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full mx-auto overflow-hidden border-2 border-border">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center flex-grow flex flex-col">
                      <h3 className="text-xs sm:text-sm md:text-base font-semibold mb-1 leading-tight">{member.name}</h3>
                      <p className="text-muted-foreground text-xs md:text-sm font-medium mb-3 flex-grow hidden sm:block leading-tight">{member.role}</p>
                      <div className="flex justify-center mt-auto">
                        {member.social.twitter && (
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">Features</h3>
            
            {/* Mobile layout - compact like team */}
            <div className="grid grid-cols-2 gap-4 sm:hidden">
              {features.map((feature, index) => (
                <div key={index} className="group h-full">
                  <div className="bg-card rounded-2xl p-3 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20 flex flex-col h-full">
                    <div className="flex flex-col items-center text-center flex-grow">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="text-xs font-semibold mb-1 leading-tight">{feature.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Tablet and desktop layout - original clean design */}
            <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
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

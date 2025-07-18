import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Wifi, Users, Zap, Building, Coffee, Linkedin, Send, Twitter, Blocks, Coins, BookOpen, Code, Calendar, Trophy, ShoppingBag } from 'lucide-react';
import ChestnutLogo from './ChestnutLogo';

const About: React.FC = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Executive Director at Goldman Sachs",
      image: "/lovable-uploads/0292a05f-577c-4efe-89c0-5aa4575b1b95.png",
      social: {
        twitter: "https://twitter.com/alexchen"
      }
    },
    {
      name: "Maria Rodriguez", 
      role: "General Partner at 3x",
      image: "/lovable-uploads/0e5078f9-64c6-477c-996d-00f33509723d.png",
      social: {
        twitter: "https://twitter.com/mariarodriguez"
      }
    },
    {
      name: "David Kim",
      role: "Founder of Nomadz",
      image: "/lovable-uploads/5c1b18d8-89da-49b8-bd2e-8d2af10be8da.png",
      social: {
        twitter: "https://twitter.com/davidkim"
      }
    },
    {
      name: "Sarah Johnson",
      role: "Operations Lead at Web3 Ventures",
      image: "/lovable-uploads/a1c39dda-2bab-4782-9c80-6e0613ebac6c.png",
      social: {
        twitter: "https://twitter.com/sarahjohnson"
      }
    },
    {
      name: "Michael Brown",
      role: "Chief Technology Officer at BlockTech",
      image: "/lovable-uploads/bc22947d-4e52-41ee-99a8-b6f46eb5d103.png",
      social: {
        twitter: "https://twitter.com/michaelbrown"
      }
    }
  ];

  const features = [
    {
      icon: Wifi,
      title: "High-speed WiFi",
      description: "Lightning-fast internet connectivity"
    },
    {
      icon: Users,
      title: "Ihub Partner",
      description: "Official partnership with innovation hub"
    },
    {
      icon: Blocks,
      title: "Web3 Workspace",
      description: "Dedicated blockchain development environment"
    },
    {
      icon: Coins,
      title: "Tokenized Membership",
      description: "NFT-based membership system"
    },
    {
      icon: BookOpen,
      title: "Mentorships",
      description: "Expert guidance from industry leaders"
    },
    {
      icon: Code,
      title: "Hackathons",
      description: "Community-driven development projects"
    },
    {
      icon: Calendar,
      title: "Events",
      description: "Regular meetups and conferences"
    },
    {
      icon: Trophy,
      title: "Loyalty/Gamification",
      description: "Rewards system for active members"
    },
    {
      icon: ShoppingBag,
      title: "Web3 Shop",
      description: "Decentralized marketplace integration"
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-card rounded-2xl p-4 md:p-6 border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                    <div className="relative mb-4">
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto overflow-hidden border-2 border-border">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-base md:text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-primary text-xs md:text-sm font-medium mb-3">{member.role}</p>
                      <div className="flex justify-center">
                        <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                          <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                          </svg>
                        </a>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
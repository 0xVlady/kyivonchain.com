import React from 'react';
import { Wifi, Users, Blocks, Coins, BookOpen, Code, Calendar, Trophy, ShoppingBag } from 'lucide-react';

const Features = () => {
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
      title: "Hacktors",
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
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Features</h2>
          <p className="text-xl text-muted-foreground">Everything you need for Web3 innovation</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-2 sm:p-4 rounded-xl hover:scale-110 transition-all duration-300 group">
              {/* Icon Container - same style as partners */}
              <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-2 rounded-xl bg-primary/10 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:bg-primary/20 transition-all duration-300">
                <feature.icon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-primary" />
              </div>
              
              {/* Title */}
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground mb-1 leading-tight text-center">{feature.title}</h3>
              
              {/* Description - hidden on mobile like partners */}
              <p className="text-xs text-muted-foreground leading-tight text-center hidden sm:block">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
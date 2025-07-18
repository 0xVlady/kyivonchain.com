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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="flex flex-col items-center text-center p-3 md:p-4 lg:p-6 rounded-2xl border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <div className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2 md:mb-3 lg:mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-primary" />
                </div>
                <h3 className="text-sm md:text-lg lg:text-xl font-semibold mb-1 lg:mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
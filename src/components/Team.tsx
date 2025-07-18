import React from 'react';
import { Linkedin, Send, Twitter } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "VLAD FEDYNA",
      role: "Executive Director",
      description: "An executive director at a Goldman Sachs with 9 years experience in derivatives. Focused on projects related to blockchain and tokenization use cases in TradFi.",
      image: "/placeholder.svg", // Replace with actual image
      social: {
        linkedin: "Vlad Fedyna",
        telegram: "@vlady_xyz",
        twitter: "@vlady_xyz"
      }
    },
    {
      name: "IVAN MALTSEV",
      role: "General Partner",
      description: "General Partner at 3x Capital, Founder of Nomadz, Co-founder of Ventures Launch. Driving strategic investment and supporting portfolio companies with financial advisory services.",
      image: "/placeholder.svg", // Replace with actual image
      social: {
        linkedin: "Ivan Maltsev",
        telegram: "@ivan_nomadz",
        twitter: "@ivan_nomadz"
      }
    },
    {
      name: "TARAS YAVORSKI",
      role: "General Partner",
      description: "General Partner at 3x Capital, Co-founder of Ventures Launch. Investor in web3 companies and digital assets. Has 5+ years of management experience in top-tier international companies.",
      image: "/placeholder.svg", // Replace with actual image
      social: {
        linkedin: "Taras Yavorski",
        telegram: "@tarasX3",
        twitter: "@tarasssl3"
      }
    },
    {
      name: "PAVLO KARAPINKA",
      role: "Founder",
      description: "Founder of Mergewave Capital, Founder of Solus Group. Blockchain Marketing Advisor, Growth for Tier 1 WEB 3.0 companies.",
      image: "/placeholder.svg", // Replace with actual image
      social: {
        linkedin: "Pasha Karapinka",
        telegram: "@Pasha_S11"
      }
    },
    {
      name: "NICK SMOHORZHEVSKI",
      role: "CIO",
      description: "CIO at Solus Group, Co-Founder of DEGEN Associates. Strategic Advisor and Investor.",
      image: "/placeholder.svg", // Replace with actual image
      social: {
        linkedin: "Nikita Smohorzhevskyi",
        telegram: "@Nick_Solus"
      }
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Team</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Photo */}
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/30">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                </div>
                
                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 text-center">
                  {member.description}
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-4 h-4" />
                    <span className="hidden sm:inline">{member.social.linkedin}</span>
                  </a>
                  <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                    <Send className="w-4 h-4" />
                    <span className="hidden sm:inline">{member.social.telegram}</span>
                  </a>
                  {member.social.twitter && (
                    <a href="#" className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors">
                      <Twitter className="w-4 h-4" />
                      <span className="hidden sm:inline">{member.social.twitter}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
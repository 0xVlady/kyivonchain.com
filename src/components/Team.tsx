import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "VLAD FEDYNA",
      role: "Executive Director at Goldman Sachs",
      image: "/lovable-uploads/65e53568-5497-4916-b921-c57f4dd4eacb.png",
      social: {
        twitter: "https://x.com/vlady_xyz"
      }
    },
    {
      name: "IVAN MALTSEV",
      role: "General Partner at 3x Capital, Founder of Nomadz, Co-founder of Ventures Launch",
      image: "/lovable-uploads/7786efe5-c4c0-4c7b-96ee-9d5bbf7da8ca.png",
      social: {
        twitter: "https://x.com/ivan_nomadz"
      }
    },
    {
      name: "TARAS YAVORSKI",
      role: "General Partner at 3x Capital, Co-founder of Ventures Launch",
      image: "/lovable-uploads/25d4ecec-39e9-4437-9663-0556a24e67a3.png",
      social: {
        twitter: "https://x.com/tarasss13"
      }
    },
    {
      name: "PAVLO KARAPINKA",
      role: "Founder of Mergewave Capital, Founder of Solus Group",
      image: "/lovable-uploads/9e94dfcf-a9c7-402a-9c04-2beca574eb4e.png",
      social: {}
    },
    {
      name: "NICK SMOHORZHEVSKI",
      role: "CIO at Solus Group, Co-Founder of DEGEN Associates",
      image: "/lovable-uploads/fe16eb7e-9c6b-4b70-b4ca-e78bb549e784.png",
      social: {
        twitter: "https://x.com/Jeytery1"
      }
    }
  ];

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Team</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-4 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Photo */}
                <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/30">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name and Role */}
                <div className="text-center mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-xs md:text-sm text-primary font-medium leading-tight">{member.role}</p>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center">
                  {member.social.twitter && (
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
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
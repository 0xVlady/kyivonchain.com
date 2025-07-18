import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "VLAD FEDYNA",
      role: "Executive Director at Goldman Sachs",
      image: "/lovable-uploads/24dfacd6-6127-4643-a441-5323672a72b5.png", // Vlad - glasses and beard with patterned shirt
      social: {
        twitter: "https://x.com/vlady_xyz"
      }
    },
    {
      name: "IVAN MALTSEV", 
      role: "General Partner at 3x Capital, Founder of Nomadz, Co-founder of Ventures Launch",
      image: "/lovable-uploads/73598042-ce83-4cef-9b68-7f13940fdad6.png", // Ivan - smiling in black shirt
      social: {
        twitter: "https://x.com/ivan_nomadz"
      }
    },
    {
      name: "TARAS YAVORSKI",
      role: "General Partner at 3x Capital, Co-founder of Ventures Launch", 
      image: "/lovable-uploads/cf067974-d3a1-4e85-b691-dd143c50c401.png", // Taras - in beige jacket
      social: {
        twitter: "https://x.com/tarasss13"
      }
    },
    {
      name: "PAVLO KARAPINKA",
      role: "Founder of Mergewave Capital, Founder of Solus Group",
      image: "/lovable-uploads/f65422ca-15a8-4ddf-92e3-1f1942a499de.png", // Pasha - glasses in gray vest
      social: {}
    },
    {
      name: "NICK SMOHORZHEVSKI", 
      role: "CIO at Solus Group, Co-Founder of DEGEN Associates",
      image: "/lovable-uploads/019b29ec-2f04-40bb-b55d-bdcdc8ea154b.png", // Nick - black turtleneck
      social: {
        twitter: "https://x.com/Jeytery1"
      }
    }
  ];

  return (
    <section className="py-24 px-2 md:px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Team</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 md:gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group w-full">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-md md:rounded-3xl p-1 md:p-6 lg:p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Photo */}
                <div className="w-8 h-8 md:w-20 md:h-20 lg:w-24 lg:h-24 mx-auto mb-0.5 md:mb-4 lg:mb-6 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/30">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Name and Role */}
                <div className="text-center mb-0.5 md:mb-4">
                  <h3 className="text-[8px] md:text-lg lg:text-xl font-bold text-foreground mb-0 md:mb-2 leading-none md:leading-normal">{member.name}</h3>
                  <p className="text-[7px] md:text-sm text-primary font-medium leading-none hidden md:block">{member.role}</p>
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
                      <svg className="w-2 h-2 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 24 24">
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
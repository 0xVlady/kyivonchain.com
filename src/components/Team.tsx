import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "VLAD FEDYNA",
      role: "Executive Director at Goldman Sachs",
      image: "/lovable-uploads/24dfacd6-6127-4643-a441-5323672a72b5.png",
      twitterUrl: "https://x.com/vlady_xyz"
    },
    {
      name: "IVAN MALTSEV", 
      role: "General Partner at 3x Capital, Founder of Nomadz, Co-founder of Ventures Launch",
      image: "/lovable-uploads/73598042-ce83-4cef-9b68-7f13940fdad6.png",
      twitterUrl: "https://x.com/ivan_nomadz"
    },
    {
      name: "TARAS YAVORSKI",
      role: "General Partner at 3x Capital, Co-founder of Ventures Launch", 
      image: "/lovable-uploads/cf067974-d3a1-4e85-b691-dd143c50c401.png",
      twitterUrl: "https://x.com/tarasss13"
    },
    {
      name: "PAVLO KARAPINKA",
      role: "Founder of Mergewave Capital, Founder of Solus Group",
      image: "/lovable-uploads/f65422ca-15a8-4ddf-92e3-1f1942a499de.png",
      twitterUrl: "https://x.com/ayde_sol_jedi"
    },
    {
      name: "NICK SMOHORZHEVSKI", 
      role: "CIO at Solus Group, Co-Founder of DEGEN Associates",
      image: "/lovable-uploads/019b29ec-2f04-40bb-b55d-bdcdc8ea154b.png",
      twitterUrl: "https://x.com/Jeytery1"
    }
  ];

  // X Icon Component
  const XIcon = () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Team</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center p-2 sm:p-4 rounded-xl hover:scale-110 transition-all duration-300 group h-full">
              {/* Photo Container */}
              <div className="w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-2 rounded-xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Name */}
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-foreground mb-1 leading-tight text-center">{member.name}</h3>
              
              {/* Role */}
              <p className="text-xs text-primary font-medium leading-tight text-center hidden sm:block mb-2 flex-grow">{member.role}</p>
              
              {/* X Icon Link - Explicit for each member */}
              <div className="flex justify-center mt-auto">
                {member.name === "VLAD FEDYNA" && (
                  <a href="https://x.com/vlady_xyz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <XIcon />
                  </a>
                )}
                {member.name === "IVAN MALTSEV" && (
                  <a href="https://x.com/ivan_nomadz" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <XIcon />
                  </a>
                )}
                {member.name === "TARAS YAVORSKI" && (
                  <a href="https://x.com/tarasss13" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <XIcon />
                  </a>
                )}
                {member.name === "PAVLO KARAPINKA" && (
                  <a href="https://x.com/ayde_sol_jedi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <XIcon />
                  </a>
                )}
                {member.name === "NICK SMOHORZHEVSKI" && (
                  <a href="https://x.com/Jeytery1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <XIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
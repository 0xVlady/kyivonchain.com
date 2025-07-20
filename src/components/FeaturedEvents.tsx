import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Users, MapPin, ChevronLeft, ChevronRight, GraduationCap, Home, Rocket, Briefcase, Sailboat, Code, Mic, Anchor, TrendingUp, BookOpen, Code2, Trophy, Handshake, PartyPopper, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
const FeaturedEvents: React.FC = () => {
  const {
    t
  } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        // width of one card + gap
        behavior: 'smooth'
      });
    }
  };
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        // width of one card + gap
        behavior: 'smooth'
      });
    }
  };
  const featuredEvents = [
    {
      title: t('events.sailing.title'),
      description: t('events.sailing.desc'),
      date: "Dec 2024",
      attendees: "25 builders",
      location: "Various Coastal Locations",
      type: "Networking",
      icon: Anchor,
      color: "from-blue-500 to-blue-400",
      xUrl: "https://x.com/nomadz_co/status/1940343576199823687",
      photo: "/lovable-uploads/70495dbf-d554-4e8b-a3df-a1cb86c1985d.png"
    },
    {
      title: t('events.web3Education.title'),
      description: t('events.web3Education.desc'),
      date: "Jun 2024",
      attendees: t('events.web3Education.attendees'),
      location: "Kyiv",
      type: "Education",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-400",
      xUrl: "https://x.com/Jeytery1/status/1801376658756173952",
      photo: "/lovable-uploads/4758dfd3-3708-4aaf-9883-31b935b8e75c.png"
    },
    {
      title: t('events.pitchDays.title'),
      description: t('events.pitchDays.desc'),
      date: "Multiple dates",
      attendees: t('events.pitchDays.attendees'),
      location: "Multiple cities",
      type: "Pitch",
      icon: TrendingUp,
      color: "from-green-500 to-green-400",
      xUrl: "https://x.com/solana_temple/status/1897291563530920052",
      photo: "/lovable-uploads/b5f8555c-516b-41a8-97d7-eb5f81b48d44.png"
    },
    {
      title: t('events.kolGathering.title'),
      description: t('events.kolGathering.desc'),
      date: "Nov 2024",
      attendees: t('events.kolGathering.attendees'),
      location: "Dubai",
      type: "Networking",
      icon: Users,
      color: "from-orange-500 to-orange-400",
      xUrl: "https://x.com/solus_group/status/1921920220056228351",
      photo: "/lovable-uploads/3077bb7c-fb85-4e71-98f8-c13711e56065.png"
    },
    {
      title: t('events.solanaTemple.title'),
      description: t('events.solanaTemple.desc'),
      date: "Dec 2024",
      attendees: t('events.solanaTemple.attendees'),
      location: "Bali",
      type: "Co-living",
      icon: Home,
      color: "from-teal-500 to-teal-400",
      xUrl: "https://x.com/solana_temple/status/1865695788095119775",
      photo: "/lovable-uploads/b0e0c41c-936d-492e-a23d-3c9dc6c65e5e.png"
    },
    {
      title: t('events.networkSchool.title'),
      description: t('events.networkSchool.desc'),
      date: "Sep 2024",
      attendees: t('events.networkSchool.attendees'),
      location: "Malaysia",
      type: "Education",
      icon: BookOpen,
      color: "from-indigo-500 to-indigo-400",
      xUrl: "https://x.com/ivan_nomadz/status/1904896244423483894",
      photo: "/lovable-uploads/50ada35c-1a7f-452e-85d6-33e5a850a6c2.png"
    },
    {
      title: t('events.kumekathon.title'),
      description: t('events.kumekathon.desc'),
      date: "Jun 2024",
      attendees: t('events.kumekathon.attendees'),
      location: "Kyiv",
      type: "Hackathon",
      icon: Code2,
      color: "from-red-500 to-red-400",
      xUrl: "https://x.com/kumekateam/status/1803125229671026868?s=46",
      photo: "/lovable-uploads/27db150f-840c-4163-9ad7-f5fd4e620106.png"
    },
    {
      title: t('events.solanaPong.title'),
      description: t('events.solanaPong.desc'),
      date: "Sep 2024",
      attendees: t('events.solanaPong.attendees'),
      location: "Malaysia",
      type: "Community",
      icon: Trophy,
      color: "from-yellow-500 to-yellow-400",
      xUrl: "https://x.com/nomadz_co/status/1911037572731814136",
      photo: "/lovable-uploads/b56cb450-f469-4738-b277-c6de9c296185.png"
    },
    {
      title: t('events.vcStartupConnect.title'),
      description: t('events.vcStartupConnect.desc'),
      date: "Jul 2024",
      attendees: t('events.vcStartupConnect.attendees'),
      location: "Kyiv",
      type: "Business",
      icon: Handshake,
      color: "from-pink-500 to-pink-400",
      xUrl: "https://x.com/solus_group/status/1812817591078936901",
      photo: "/lovable-uploads/ece5dc79-bdeb-45b5-842a-12d13c07b816.png"
    },
    {
      title: t('events.irlWorkshops.title'),
      description: t('events.irlWorkshops.desc'),
      date: "Sep 2024",
      attendees: t('events.irlWorkshops.attendees'),
      location: "Kyiv",
      type: "Education",
      icon: GraduationCap,
      color: "from-purple-500 to-purple-400",
      xUrl: "https://x.com/kumekateam/status/1905659200635822164?s=46",
      photo: "/lovable-uploads/f3a79033-2526-4473-8fa3-78ac9c228987.png"
    },
    {
      title: t('events.hangouts.title'),
      description: t('events.hangouts.desc'),
      date: "Multiple dates",
      attendees: t('events.hangouts.attendees'),
      location: "Multiple cities",
      type: "Community",
      icon: PartyPopper,
      color: "from-rainbow-500 to-rainbow-400",
      xUrl: "https://x.com/KumekaTeam/status/1871629980515361073",
      photo: "/lovable-uploads/4c1318bc-ff48-49e7-9b33-d9d32305f2c5.png"
    }
  ];
  const typeColors = {
    'Education': 'bg-primary text-primary-foreground',
    'Networking': 'bg-ukraine-yellow text-white',
    'Co-living': 'bg-teal-500 text-white',
    'Pitch': 'bg-green-500 text-white',
    'Business': 'bg-pink-500 text-white',
    'Hackathon': 'bg-red-500 text-white',
    'Community': 'bg-yellow-500 text-white'
  };
  return <section className="py-20 relative overflow-hidden mb-20">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-ukraine-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('events.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('events.subtitle')}
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
          </div>

          {/* Featured Events Horizontal Scroll */}
          <div className="mb-16 relative">
            <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory horizontal-scroll-container" style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}>
              {featuredEvents.map((event, index) => {
              const backgroundImage = event.photo || 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=320&fit=crop&crop=center';
              return <div key={index} className="flex-shrink-0 w-80 h-96 relative glass-card group hover:scale-105 transition-all duration-300 snap-center overflow-hidden">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center" style={{
                  backgroundImage: `url(${backgroundImage})`
                }}>
                      <div className="absolute inset-0 bg-black/50"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                      {/* Top Section */}
                      <div>
                        <div className="flex items-start justify-between mb-4 px-[7px] mx-0 py-0 my-0">
                          
                          
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[event.type as keyof typeof typeColors]}`}>
                            {event.type}
                          </span>
                        </div>

                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-xl font-bold group-hover:text-primary-light transition-colors duration-300">
                            {event.title}
                          </h4>
                          {event.xUrl && <a href={event.xUrl} target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] bg-white/10 hover:bg-white/20 rounded-full p-1.5 backdrop-blur-sm">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                              </svg>
                            </a>}
                        </div>
                        
                        <p className="text-white/80 text-sm leading-relaxed mb-4">
                          {event.description}
                        </p>
                      </div>

                      {/* Bottom Section - Metadata */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-2 text-white/80">
                          
                          
                        </div>
                        
                        <div className="flex items-center space-x-2 text-white/80">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-white/80">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>;
            })}
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-center mt-4 space-x-4">
              <Button variant="outline" size="icon" onClick={scrollLeft} className="h-10 w-10 rounded-full bg-background/80 hover:bg-background border-border/50 hover:border-border">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button variant="outline" size="icon" onClick={scrollRight} className="h-10 w-10 rounded-full bg-background/80 hover:bg-background border-border/50 hover:border-border">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Event Stats */}
          <div className="glass-card p-8 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pixel-purple/30 to-pixel-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-8 h-8 text-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">25+</div>
                <div className="text-muted-foreground text-sm">{t('events.eventsHosted')}</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Mic className="w-8 h-8 text-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">200+</div>
                <div className="text-muted-foreground text-sm">{t('events.expertSpeakers')}</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pixel-blue/30 to-pixel-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">5000+</div>
                <div className="text-muted-foreground text-sm">{t('events.totalAttendees')}</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pixel-gold/30 to-pixel-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">15+</div>
                <div className="text-muted-foreground text-sm">{t('general.cities')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturedEvents;
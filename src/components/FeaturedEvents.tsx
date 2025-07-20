import React, { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Users, MapPin, ChevronLeft, ChevronRight, GraduationCap, Home, Rocket, Briefcase, Sailboat, Code, Mic } from 'lucide-react';
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
  const featuredEvents = [{
    title: 'Education Blockchain Week',
    description: 'Ukraine\'s premier student-focused Web3 education event with workshops, talks, and networking opportunities for aspiring blockchain developers.',
    date: 'Quarterly',
    attendees: '120+',
    location: 'Kyiv, Ukraine',
    type: 'Education',
    icon: GraduationCap,
    color: 'from-primary to-primary-light'
  }, {
    title: 'Solana Temple',
    description: 'Co-living residency for Solana builders and founders focused on wellness, learning, and deep work in inspiring locations.',
    date: 'Annual',
    attendees: '100+',
    location: 'Bali, Indonesia',
    type: 'Residency',
    icon: Home,
    color: 'from-green-500 to-green-400'
  }, {
    title: 'Pitch Days & Ideathons',
    description: 'Founder-focused events to refine token models, business plans, and decks — often with live investor feedback.',
    date: 'Monthly',
    attendees: '30+',
    location: 'Kyiv, Ukraine',
    type: 'Pitch',
    icon: Rocket,
    color: 'from-purple-500 to-purple-400'
  }, {
    title: 'VC Startup Connect',
    description: 'Exclusive B2B gathering of VCs, founders, and ecosystem builders fostering investment opportunities and partnerships.',
    date: 'Bi-annually',
    attendees: '250+',
    location: 'Kyiv, Ukraine',
    type: 'Networking',
    icon: Briefcase,
    color: 'from-ukraine-yellow to-yellow-400'
  }, {
    title: 'Solana Sailing',
    description: 'Unique sailing experience combining Web3 learning and networking on the water. Connect with fellow builders while exploring new horizons.',
    date: 'Monthly',
    attendees: '25+',
    location: 'Various Coastal Locations',
    type: 'Social',
    icon: Sailboat,
    color: 'from-cyan-500 to-blue-400',
    xUrl: 'https://x.com/kyivonchain',
    photo: 'https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=320&fit=crop&crop=center'
  }, {
    title: 'Web3 Hackathon',
    description: 'Intensive 48-hour coding competition where developers build innovative blockchain solutions with mentorship from industry experts.',
    date: 'Quarterly',
    attendees: '80+',
    location: 'Kyiv, Ukraine',
    type: 'Hackathon',
    icon: Code,
    color: 'from-cyan-500 to-cyan-400',
    xUrl: 'https://x.com/kyivonchain',
    photo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=320&fit=crop&crop=center'
  }, {
    title: 'Workshops at Network School Event',
    description: 'Educational workshops focused on Web3 development, DeFi protocols, and blockchain entrepreneurship with hands-on learning experiences.',
    date: 'Bi-monthly',
    attendees: '40+',
    location: 'Kyiv, Ukraine',
    type: 'Education',
    icon: GraduationCap,
    color: 'from-purple-500 to-indigo-400',
    xUrl: 'https://x.com/kyivonchain',
    photo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=320&fit=crop&crop=center'
  }];
  const typeColors = {
    'Education': 'bg-primary text-primary-foreground',
    'Networking': 'bg-ukraine-yellow text-white',
    'Residency': 'bg-green-500 text-white',
    'Pitch': 'bg-purple-500 text-white',
    'Social': 'bg-orange-500 text-white',
    'Hackathon': 'bg-cyan-500 text-white'
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
              return <div key={index} className="flex-shrink-0 w-80 h-96 relative glass-card group hover:scale-105 transition-all duration-300 snap-start overflow-hidden">
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
                          {event.xUrl && <a href={event.xUrl} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300">
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                          <span>{event.attendees} attendees</span>
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
                <div className="text-muted-foreground text-sm">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FeaturedEvents;
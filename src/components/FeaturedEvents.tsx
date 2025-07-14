import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Users, MapPin } from 'lucide-react';

const FeaturedEvents: React.FC = () => {
  const { t } = useLanguage();

  const featuredEvents = [
    {
      title: 'Education Blockchain Week',
      description: 'Ukraine\'s premier student-focused Web3 education event with workshops, talks, and networking opportunities for aspiring blockchain developers.',
      date: 'Quarterly',
      attendees: '120+',
      location: 'Kyiv, Ukraine',
      type: 'Education',
      image: '🎓',
      color: 'from-primary to-primary-light',
    },
    {
      title: 'Solana Temple',
      description: 'Co-living residency for Solana builders and founders focused on wellness, learning, and deep work in inspiring locations.',
      date: 'Annual',
      attendees: '100+',
      location: 'Bali, Indonesia',
      type: 'Residency',
      image: '🏝️',
      color: 'from-green-500 to-green-400',
    },
    {
      title: 'Pitch Days & Ideathons',
      description: 'Founder-focused events to refine token models, business plans, and decks — often with live investor feedback.',
      date: 'Monthly',
      attendees: '30+',
      location: 'Kyiv, Ukraine',
      type: 'Pitch',
      image: '🚀',
      color: 'from-purple-500 to-purple-400',
    },
    {
      title: 'VC Startup Connect',
      description: 'Exclusive B2B gathering of VCs, founders, and ecosystem builders fostering investment opportunities and partnerships.',
      date: 'Bi-annually',
      attendees: '250+',
      location: 'Kyiv, Ukraine',
      type: 'Networking',
      image: '💼',
      color: 'from-ukraine-yellow to-yellow-400',
    },
    {
      title: 'Casual Community Hangouts',
      description: 'Regular social gatherings for builders and contributors. Sometimes, the best ideas start over coffee.',
      date: 'Weekly',
      attendees: '20+',
      location: 'Kyiv, Ukraine',
      type: 'Social',
      image: '☕',
      color: 'from-orange-500 to-orange-400',
    },
    {
      title: 'Web3 Hackathon',
      description: 'Intensive 48-hour coding competition where developers build innovative blockchain solutions with mentorship from industry experts.',
      date: 'Quarterly',
      attendees: '80+',
      location: 'Kyiv, Ukraine',
      type: 'Hackathon',
      image: '💻',
      color: 'from-cyan-500 to-cyan-400',
    }
  ];

  const typeColors = {
    'Education': 'bg-primary text-primary-foreground',
    'Networking': 'bg-ukraine-yellow text-white',
    'Residency': 'bg-green-500 text-white',
    'Pitch': 'bg-purple-500 text-white',
    'Social': 'bg-orange-500 text-white',
    'Hackathon': 'bg-cyan-500 text-white'
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-ukraine-blue/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Featured Events
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join our signature events that bring together Ukraine's Web3 community. 
              From education and networking to building and socializing — there's something for everyone.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
          </div>

          {/* Featured Events Horizontal Scroll */}
          <div className="mb-16">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {featuredEvents.map((event, index) => (
                <div key={index} className="flex-shrink-0 w-80 glass-card p-6 rounded-3xl group hover:scale-105 transition-all duration-300 snap-start">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                      {event.image}
                    </div>
                    
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[event.type as keyof typeof typeColors]}`}>
                      {event.type}
                    </span>
                  </div>

                  {/* Content */}
                  <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {event.title}
                  </h4>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {event.description}
                  </p>

                  {/* Metadata */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                    
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <span>Swipe to see more</span>
                <div className="w-4 h-4 animate-pulse">→</div>
              </div>
            </div>
          </div>

          {/* Community Impact Stats */}
          <div className="glass-card p-8 rounded-3xl">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              Community Impact
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">20+</div>
                <div className="text-muted-foreground text-sm">Events Hosted</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-ukraine-blue to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">1000+</div>
                <div className="text-muted-foreground text-sm">Total Attendees</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-ukraine-yellow to-yellow-400 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">3</div>
                <div className="text-muted-foreground text-sm">Countries</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground text-sm">Expert Speakers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
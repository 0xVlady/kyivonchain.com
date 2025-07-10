import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Users, Calendar, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PreviousEvents: React.FC = () => {
  const { t } = useLanguage();

  const events = [
    {
      title: 'Ukrainian Web3 Education @ Blockchain Week 2024',
      description: 'Ukraine\'s first student-focused Web3 event with 120+ attendees and top speakers from Cryptology, 3X Capital, Incrypted, and more.',
      date: 'September 2024',
      attendees: '120+',
      location: 'Kyiv, Ukraine',
      type: 'Education',
      image: '🎓',
      color: 'from-primary to-primary-light',
      link: '#'
    },
    {
      title: 'VC <> Startup Connect (Kyiv)',
      description: 'Exclusive B2B gathering of 250+ VCs, founders, and ecosystem builders. Featured a fundraising auction for Ukraine\'s Armed Forces.',
      date: 'October 2024',
      attendees: '250+',
      location: 'Kyiv, Ukraine',
      type: 'Networking',
      image: '💼',
      color: 'from-ukraine-yellow to-yellow-400',
      link: '#'
    },
    {
      title: 'Solana Temple (Bali)',
      description: 'A month-long co-living residency for 100+ Solana builders and founders focused on wellness, learning, and deep work.',
      date: 'August 2024',
      attendees: '100+',
      location: 'Bali, Indonesia',
      type: 'Residency',
      image: '🏝️',
      color: 'from-green-500 to-green-400',
      link: '#'
    },
    {
      title: 'Solana Journey Workshops',
      description: 'Introductory developer sessions that walked 100+ participants through Solana\'s growth, funding paths, and builder tools.',
      date: 'June 2024',
      attendees: '100+',
      location: 'Kyiv, Ukraine',
      type: 'Workshop',
      image: '⚡',
      color: 'from-ukraine-blue to-blue-400',
      link: '#'
    },
    {
      title: 'Solana Pong Tournament',
      description: 'A casual ping-pong tournament to bring Solana builders together in Kyiv — informal networking with high vibes.',
      date: 'July 2024',
      attendees: '50+',
      location: 'Kyiv, Ukraine',
      type: 'Social',
      image: '🏓',
      color: 'from-secondary to-secondary-dark',
      link: '#'
    },
    {
      title: 'Pitch Days & Ideathons',
      description: 'Founder-focused events to refine token models, business plans, and decks — often with live investor feedback.',
      date: 'Ongoing',
      attendees: '30+',
      location: 'Kyiv, Ukraine',
      type: 'Pitch',
      image: '🚀',
      color: 'from-purple-500 to-purple-400',
      link: '#'
    },
    {
      title: 'Casual Community Hangouts',
      description: 'Sometimes, the best ideas start over coffee. We host regular social gatherings for builders and contributors in Kyiv.',
      date: 'Weekly',
      attendees: '20+',
      location: 'Kyiv, Ukraine',
      type: 'Social',
      image: '☕',
      color: 'from-orange-500 to-orange-400',
      link: '#'
    }
  ];

  const typeColors = {
    'Education': 'bg-primary text-primary-foreground',
    'Networking': 'bg-ukraine-yellow text-white',
    'Residency': 'bg-green-500 text-white',
    'Workshop': 'bg-ukraine-blue text-white',
    'Social': 'bg-secondary-dark text-white',
    'Pitch': 'bg-purple-500 text-white'
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
              {t('events.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From intimate workshops to large-scale conferences, we've been building 
              Ukraine's Web3 community one event at a time. Here's what we've accomplished together.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {events.map((event, index) => (
              <div key={index} className="glass-card p-6 rounded-3xl group hover:scale-105 transition-all duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${event.color} rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {event.image}
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[event.type as keyof typeof typeColors]}`}>
                      {event.type}
                    </span>
                    {event.link && event.link !== '#' && (
                      <a 
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {event.description}
                </p>

                {/* Metadata */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
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

                {/* View More Link */}
                <div className="mt-4 pt-4 border-t border-border">
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary-dark">
                    {t('events.viewMore')}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Event Stats */}
          <div className="glass-card p-8 rounded-3xl mb-12">
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
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground text-sm">Expert Speakers</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">3</div>
                <div className="text-muted-foreground text-sm">Countries</div>
              </div>
            </div>
          </div>

          {/* Upcoming Events CTA */}
          <div className="text-center">
            <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Don't Miss Our Next Event
              </h3>
              <p className="text-muted-foreground mb-6">
                Stay connected with our community to get early access to tickets, 
                special discounts, and exclusive content from our events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                  Join Our Telegram
                </Button>
                <Button variant="outline" className="btn-glass px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                  Follow on X
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousEvents;
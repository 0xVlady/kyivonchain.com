import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Calendar: React.FC = () => {
  // Placeholder events - this would come from a database/Google Calendar integration
  const events = [
    {
      id: 1,
      title: 'Web3 Builders Meetup',
      date: '2025-01-20',
      time: '18:00',
      location: 'iHUB Kyiv',
      attendees: 25,
      description: 'Monthly gathering of Web3 developers and entrepreneurs'
    },
    {
      id: 2,
      title: 'Solana Workshop',
      date: '2025-01-25',
      time: '14:00',
      location: 'Underground Workspace',
      attendees: 15,
      description: 'Learn to build on Solana blockchain'
    },
    {
      id: 3,
      title: 'Investor Pitch Night',
      date: '2025-02-01',
      time: '19:00',
      location: 'iHUB Kyiv',
      attendees: 40,
      description: 'Present your Web3 startup to investors'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Event Calendar
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay updated with all upcoming events at KYIV.ONCHAIN
            </p>
            <Button className="btn-primary">
              Host Your Event
            </Button>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="grid gap-6 max-w-4xl mx-auto">
              {events.map((event) => (
                <div key={event.id} className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                      <p className="text-muted-foreground mb-4">{event.description}</p>
                      
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {event.attendees} attending
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <Button className="btn-primary w-full md:w-auto">
                        Register
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Calendar Integration Note */}
            <div className="mt-12 text-center">
              <div className="glass-card rounded-xl p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-2">Stay Connected</h3>
                <p className="text-muted-foreground">
                  Subscribe to our calendar to get automatic updates about all events
                </p>
                <Button className="btn-glass mt-4">
                  Subscribe to Calendar
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Calendar;
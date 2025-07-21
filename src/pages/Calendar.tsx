import React, { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/WaitlistModal';
import EventModal from '@/components/EventModal';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import BackToHome from '@/components/BackToHome';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { format } from 'date-fns';
import { uk, enUS } from 'date-fns/locale';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  end_time?: string | null;
  location: string;
  description: string | null;
  link: string | null;
}

const Calendar: React.FC = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t, language } = useLanguage();
  const { toast } = useToast();

  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    const locale = language === 'uk' ? uk : enUS;
    
    return format(date, 'EEEE, d MMMM yyyy', { locale });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from('calendar_events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch events',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div className="min-h-screen bg-background">
      <BackToHome />
      <Header 
        onOpenWaitlist={() => setIsWaitlistModalOpen(true)}
        onOpenEvent={() => setIsEventModalOpen(true)}
      />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              {t('calendar.title')}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('calendar.subtitle')}
            </p>
            <Button className="btn-primary" onClick={() => setIsEventModalOpen(true)}>
              {t('calendar.hostYourEvent')}
            </Button>
          </div>
        </section>

        {/* Events Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : events.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No events scheduled at the moment.</p>
                <p className="text-muted-foreground mt-2">Check back soon for upcoming events!</p>
              </div>
            ) : (
              <div className="grid gap-6 max-w-4xl mx-auto">
                {events.map((event) => (
                  <div key={event.id} className="glass-card rounded-2xl p-6 hover:scale-105 transition-transform duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                        {event.description && (
                          <p className="text-muted-foreground mb-4">{event.description}</p>
                        )}
                        
                         <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                           <div className="flex items-center">
                             <CalendarIcon className="w-4 h-4 mr-2" />
                             {formatEventDate(event.date)}
                           </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            {event.time}{event.end_time ? ` - ${event.end_time}` : ''}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 md:mt-0 md:ml-6">
                        {event.link ? (
                          <Button 
                            className="btn-primary w-full md:w-auto"
                            onClick={() => window.open(event.link!, '_blank')}
                          >
                            {t('calendar.register')}
                          </Button>
                        ) : (
                          <Button 
                            variant="outline" 
                            className="w-full md:w-auto"
                            disabled
                          >
                            Registration TBA
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Calendar Integration Note */}
            <div className="mt-12 text-center">
              <div className="glass-card rounded-xl p-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-4">{t('calendar.stayConnected')}</h3>
                <p className="text-muted-foreground mb-6">
                  {t('calendar.subscribeUpdates')}
                </p>
                <NewsletterSubscribe 
                  className="max-w-md mx-auto"
                  placeholder={t('calendar.enterEmailUpdates')}
                  buttonText={t('calendar.subscribe')}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Shared Modals */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
    </div>
  );
};

export default Calendar;
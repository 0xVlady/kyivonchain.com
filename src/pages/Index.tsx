import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import NewMembershipTiers from '@/components/NewMembershipTiers';
import FeaturedEvents from '@/components/FeaturedEvents';
import NewPartners from '@/components/NewPartners';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/WaitlistModal';
import EventModal from '@/components/EventModal';

const Index = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onOpenWaitlist={() => setIsWaitlistModalOpen(true)}
        onOpenEvent={() => setIsEventModalOpen(true)}
      />
      <main>
        <Hero 
          onOpenWaitlist={() => setIsWaitlistModalOpen(true)}
          onOpenEvent={() => setIsEventModalOpen(true)}
        />
        <About />
        <NewMembershipTiers />
        <FeaturedEvents />
        <NewPartners />
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

export default Index;

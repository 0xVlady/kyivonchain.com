import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CustomTextSection from '@/components/CustomTextSection';
import NewMembershipTiers from '@/components/NewMembershipTiers';
import FeaturedEvents from '@/components/FeaturedEvents';
import NewPartners from '@/components/NewPartners';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/WaitlistModal';
import EventModal from '@/components/EventModal';

const Index = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>('guest');

  const openWaitlistModal = (tier?: string) => {
    if (tier) setSelectedTier(tier);
    setIsWaitlistModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onOpenWaitlist={() => openWaitlistModal()}
        onOpenEvent={() => setIsEventModalOpen(true)}
      />
      <main>
        <Hero 
          onOpenWaitlist={() => openWaitlistModal()}
          onOpenEvent={() => setIsEventModalOpen(true)}
        />
        <About />
        <CustomTextSection />
        <NewMembershipTiers onOpenWaitlist={openWaitlistModal} />
        <FeaturedEvents />
        <NewPartners />
      </main>
      <Footer />
      
      {/* Shared Modals */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
        selectedTier={selectedTier}
      />
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
    </div>
  );
};

export default Index;


import React, { useState, useEffect } from 'react';
import SEOHead from '@/components/SEOHead';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import CustomTextSection from '@/components/CustomTextSection';
import NewMembershipTiers from '@/components/NewMembershipTiers';
import FeaturedEvents from '@/components/FeaturedEvents';
import NewPartners from '@/components/NewPartners';
import Team from '@/components/Team';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/WaitlistModal';
import EventModal from '@/components/EventModal';
import { useLocation } from 'react-router-dom';
import { trackPageView, trackMembershipInterest, initAnalytics } from '@/utils/analytics';

const Index = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>('guest');
  const location = useLocation();

  useEffect(() => {
    // Initialize analytics
    initAnalytics();
    
    // Track page view
    trackPageView('/');
  }, []);

  // Handle scrolling to section when coming from another page with hash
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove the # symbol
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({
          behavior: 'smooth'
        });
      }, 100); // Small delay to ensure the page is fully loaded
    }
  }, [location.hash]);

  const openWaitlistModal = (tier?: string) => {
    if (tier) {
      setSelectedTier(tier);
      trackMembershipInterest(tier);
    }
    setIsWaitlistModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="KYIV.ONCHAIN - Ukraine's Solana-Powered Web3 Community Hub"
        description="Ukraine's permanent home for Web3 builders. Powered by Solana, built by Acropolis, backed by Kumeka. Join our gamified community hub in Kyiv."
        url="https://kyivonchain.com/"
        canonical="https://kyivonchain.com/"
      />
      
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
        <Team />
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

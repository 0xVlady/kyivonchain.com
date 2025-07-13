import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import UkraineBanner from '@/components/UkraineBanner';
import UkraineSupportButton from '@/components/UkraineSupportButton';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gamification from '@/components/Gamification';
import NewMembershipTiers from '@/components/NewMembershipTiers';
import NewPartners from '@/components/NewPartners';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <UkraineBanner />
        <Header />
        <UkraineSupportButton />
        <main>
          <Hero />
          <About />
          <NewMembershipTiers />
          <NewPartners />
          <Gamification />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import UkraineBanner from '@/components/UkraineBanner';
import UkraineSupportButton from '@/components/UkraineSupportButton';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import NewMembershipTiers from '@/components/NewMembershipTiers';
import NewPartners from '@/components/NewPartners';
import GetStarted from '@/components/GetStarted';
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
          <GetStarted />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

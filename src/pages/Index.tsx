import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import UkraineBanner from '@/components/UkraineBanner';
import UkraineSupportButton from '@/components/UkraineSupportButton';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Gamification from '@/components/Gamification';
import MembershipTiers from '@/components/MembershipTiers';
import JoinForm from '@/components/JoinForm';
import EventForm from '@/components/EventForm';
import PartnerForm from '@/components/PartnerForm';
import Partners from '@/components/Partners';
import PreviousEvents from '@/components/PreviousEvents';
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
          <MembershipTiers />
          <Partners />
          <PartnerForm />
          <JoinForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;

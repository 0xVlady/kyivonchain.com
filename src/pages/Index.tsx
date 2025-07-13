import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import NewMembershipTiers from '@/components/NewMembershipTiers';
import FeaturedEvents from '@/components/FeaturedEvents';
import NewPartners from '@/components/NewPartners';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <NewMembershipTiers />
        <FeaturedEvents />
        <NewPartners />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

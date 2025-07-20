import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Download, Palette, Camera, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/WaitlistModal';
import EventModal from '@/components/EventModal';
import PartnerModal from '@/components/PartnerModal';
import BackToHome from '@/components/BackToHome';
import { useLanguage } from '@/contexts/LanguageContext';

const Branding: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Placeholder images - replace with actual branding placement photos
  const brandingImages = [
    { 
      url: '/lovable-uploads/aa500a20-6676-44ba-b04f-0baaaadda75e.png', 
      title: 'Logo Placement - Main Entrance',
      description: 'Prime visibility at the entrance of iHUB Kyiv'
    },
    { 
      url: '/lovable-uploads/e827a6da-5e2e-4f74-a012-f40e81d490e4.png', 
      title: 'Digital Displays',
      description: 'Rotating sponsor logos on digital screens'
    },
    { 
      url: '/lovable-uploads/a40c6297-e33c-4cb6-ba3e-4dd074ecbced.png', 
      title: 'Event Spaces',
      description: 'Branding opportunities during events and meetups'
    },
    { 
      url: '/lovable-uploads/cfe16f8b-4a64-4fd2-82ec-d4786854e145.png', 
      title: 'Co-working Areas',
      description: 'Subtle brand integration in work spaces'
    },
    { 
      url: '/lovable-uploads/9e5ffa2d-d3d3-45fd-9d9e-9d1f001dcc04.png', 
      title: 'Meeting Rooms',
      description: 'Branded meeting room naming rights'
    }
  ];

  const brandingOptions = [
    {
      icon: Layout,
      title: t('branding.logoPlacement'),
      description: t('branding.logoPlacement.desc'),
      price: t('general.from') + ' $500/month'
    },
    {
      icon: Camera,
      title: t('branding.eventSponsorship'),
      description: t('branding.eventSponsorship.desc'),
      price: t('general.from') + ' $1,000/event'
    },
    {
      icon: Palette,
      title: t('branding.customBranding'),
      description: t('branding.customBranding.desc'),
      price: t('general.custom')
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % brandingImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + brandingImages.length) % brandingImages.length);
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
              Branding Packages
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Partner with KYIV.ONCHAIN to showcase your brand to Ukraine's most vibrant Web3 community. 
              Connect with builders, entrepreneurs, and innovators in the heart of Kyiv.
            </p>
          </div>
        </section>

        {/* Branding Options */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Branding Packages</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {brandingOptions.map((option, index) => {
                const IconComponent = option.icon;
                
                return (
                  <div key={index} className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">{option.title}</h3>
                    <p className="text-muted-foreground mb-6">{option.description}</p>
                    
                    <div className="text-lg font-semibold text-primary mb-6">{option.price}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
               <h3 className="text-2xl font-bold mb-4">Ready to Showcase Your Brand?</h3>
               <p className="text-muted-foreground mb-6">
                 Join the leading Web3 brands that trust KYIV.ONCHAIN to connect with Ukraine's blockchain community. 
                 Let's create something amazing together.
               </p>
               <Button 
                 className="btn-primary"
                 onClick={() => setIsPartnerModalOpen(true)}
               >
                 Contact Partnership Team
               </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Shared Modals */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
        selectedTier="guest"
      />
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
      <PartnerModal
        isOpen={isPartnerModalOpen}
        onClose={() => setIsPartnerModalOpen(false)}
      />
    </div>
  );
};

export default Branding;

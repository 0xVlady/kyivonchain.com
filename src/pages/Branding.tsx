import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Palette, Camera, Layout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Branding: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      title: 'Logo Placement',
      description: 'Strategic placement of your logo in high-traffic areas',
      price: 'From $500/month'
    },
    {
      icon: Camera,
      title: 'Event Sponsorship',
      description: 'Exclusive branding during events and workshops',
      price: 'From $1,000/event'
    },
    {
      icon: Palette,
      title: 'Custom Branding',
      description: 'Dedicated branded spaces and installations',
      price: 'Custom pricing'
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
      <Header />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Branding & Sponsorship
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Showcase your brand in Ukraine's premier Web3 community space
            </p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Branding Opportunities</h2>
            
            <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
              {/* Main Image Display */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                <img 
                  src={brandingImages[currentImageIndex].url} 
                  alt={brandingImages[currentImageIndex].title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                
                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 glass-card px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {brandingImages.length}
                </div>
              </div>
              
              {/* Image Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold mb-2">{brandingImages[currentImageIndex].title}</h3>
                <p className="text-muted-foreground">{brandingImages[currentImageIndex].description}</p>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="flex justify-center space-x-2 mt-6">
                {brandingImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>
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
                    
                    <Button className="btn-glass w-full">
                      Learn More
                    </Button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Brand Guidelines */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4">Brand Guidelines & Assets</h3>
              <p className="text-muted-foreground mb-6">
                Download our comprehensive brand guidelines and logo assets for your marketing materials
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-primary">
                  <Download className="mr-2 w-4 h-4" />
                  Download Brand Kit
                </Button>
                <Button className="btn-glass">
                  View Guidelines Online
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Showcase Your Brand?</h3>
              <p className="text-muted-foreground mb-6">
                Contact our partnerships team to discuss custom branding opportunities
              </p>
              <Button className="btn-primary">
                Contact Partnerships Team
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Branding;
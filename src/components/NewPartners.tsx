import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import PartnerModal from './PartnerModal';

const NewPartners: React.FC = () => {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Partners data - 9 partners with dummy logos
  const partners = [
    {
      name: "Acropolis",
      description: "Strategic Partner & Hub Builder",
      logo: "https://via.placeholder.com/64x64/6366f1/ffffff?text=A",
      category: "Strategic",
      website: "#"
    },
    {
      name: "Kumeka",
      description: "Financial Backing & Support",
      logo: "https://via.placeholder.com/64x64/8b5cf6/ffffff?text=K",
      category: "Financial",
      website: "#"
    },
    {
      name: "iHub",
      description: "Workspace & Infrastructure Partner",
      logo: "https://via.placeholder.com/64x64/06b6d4/ffffff?text=I",
      category: "Infrastructure",
      website: "#"
    },
    {
      name: "Solana",
      description: "Blockchain Technology Platform",
      logo: "https://via.placeholder.com/64x64/10b981/ffffff?text=S",
      category: "Technology",
      website: "#"
    },
    {
      name: "Solus",
      description: "Investment & Advisory",
      logo: "https://via.placeholder.com/64x64/f59e0b/ffffff?text=SO",
      category: "Investment",
      website: "#"
    },
    {
      name: "3xCapital",
      description: "Venture Capital Fund",
      logo: "https://via.placeholder.com/64x64/ef4444/ffffff?text=3X",
      category: "Investment",
      website: "#"
    },
    {
      name: "Nomadz",
      description: "Community & Events",
      logo: "https://via.placeholder.com/64x64/8b5cf6/ffffff?text=N",
      category: "Community",
      website: "#"
    },
    {
      name: "Flow",
      description: "Blockchain Platform",
      logo: "https://via.placeholder.com/64x64/06b6d4/ffffff?text=F",
      category: "Technology",
      website: "#"
    },
    {
      name: "Ventures Launch",
      description: "Startup Accelerator",
      logo: "https://via.placeholder.com/64x64/10b981/ffffff?text=VL",
      category: "Accelerator",
      website: "#"
    }
  ];

  // Placeholder for event photos carousel - will be populated later
  const eventPhotos = [
    "/lovable-uploads/a1681a44-34d9-4478-9cb3-fa38979cf895.png",
    "/lovable-uploads/a40c6297-e33c-4cb6-ba3e-4dd074ecbced.png",
    "/lovable-uploads/aa500a20-6676-44ba-b04f-0baaaadda75e.png",
    "/lovable-uploads/cfe16f8b-4a64-4fd2-82ec-d4786854e145.png",
    "/lovable-uploads/e827a6da-5e2e-4f74-a012-f40e81d490e4.png",
    // Add 2 more placeholder paths
    "/lovable-uploads/a1681a44-34d9-4478-9cb3-fa38979cf895.png",
    "/lovable-uploads/a40c6297-e33c-4cb6-ba3e-4dd074ecbced.png"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % eventPhotos.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + eventPhotos.length) % eventPhotos.length);
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Strategic': return 'bg-gradient-primary';
      case 'Financial': return 'bg-gradient-chestnut';
      case 'Infrastructure': return 'bg-gradient-pixel';
      case 'Technology': return 'bg-primary/20';
      case 'Investment': return 'bg-gradient-chestnut';
      case 'Community': return 'bg-gradient-primary';
      case 'Accelerator': return 'bg-gradient-pixel';
      default: return 'bg-muted';
    }
  };

  return (
    <>
      <section id="partnerships" className="py-20 px-6 relative">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Our Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building Ukraine's Web3 ecosystem together with leading organizations, 
              infrastructure providers, and strategic partners.
            </p>
          </div>

          {/* Partners Horizontal Scroll */}
          <div className="mb-16">
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory horizontal-scroll-container" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {partners.map((partner, index) => (
                <div key={index} className="flex-shrink-0 w-48 glass-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 snap-start">
                  {/* Logo */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-background/50 flex items-center justify-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-12 h-12 object-contain"
                    />
                  </div>

                  {/* Partner Info */}
                  <h3 className="font-semibold mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{partner.description}</p>

                  {/* Category Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(partner.category)} text-white mb-3`}>
                    {partner.category}
                  </div>

                  {/* Link */}
                  <div>
                    <a 
                      href={partner.website}
                      className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary-light transition-colors"
                    >
                      Visit <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Scroll indicator */}
            <div className="flex justify-center mt-4">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <span>Swipe to see more</span>
                <div className="w-4 h-4 animate-pulse">→</div>
              </div>
            </div>
          </div>


          {/* Partnership CTA */}
          <div className="text-center">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Become a Partner</h3>
              <p className="text-muted-foreground mb-6">
                Join our ecosystem and help build the future of Web3 in Ukraine. 
                We're looking for strategic partners, sponsors, and collaborators.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => setIsModalOpen(true)} className="btn-primary">
                  Partner With Us
                </Button>
                <Button variant="outline" className="btn-glass">
                  Download Partnership Deck
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default NewPartners;

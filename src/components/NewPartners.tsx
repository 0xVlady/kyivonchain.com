import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import PartnerModal from './PartnerModal';
const NewPartners: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Partners data - 9 partners with dummy logos
  const partners = [{
    name: "Acropolis",
    description: "Strategic Partner & Hub Builder",
    logo: "https://via.placeholder.com/64x64/6366f1/ffffff?text=A",
    category: "Strategic",
    website: "#"
  }, {
    name: "Kumeka",
    description: "Financial Backing & Support",
    logo: "https://via.placeholder.com/64x64/8b5cf6/ffffff?text=K",
    category: "Financial",
    website: "#"
  }, {
    name: "iHub",
    description: "Workspace & Infrastructure Partner",
    logo: "https://via.placeholder.com/64x64/06b6d4/ffffff?text=I",
    category: "Infrastructure",
    website: "#"
  }, {
    name: "Solana",
    description: "Blockchain Technology Platform",
    logo: "https://via.placeholder.com/64x64/10b981/ffffff?text=S",
    category: "Technology",
    website: "#"
  }, {
    name: "Solus",
    description: "Investment & Advisory",
    logo: "https://via.placeholder.com/64x64/f59e0b/ffffff?text=SO",
    category: "Investment",
    website: "#"
  }, {
    name: "3xCapital",
    description: "Venture Capital Fund",
    logo: "https://via.placeholder.com/64x64/ef4444/ffffff?text=3X",
    category: "Investment",
    website: "#"
  }, {
    name: "Nomadz",
    description: "Community & Events",
    logo: "https://via.placeholder.com/64x64/8b5cf6/ffffff?text=N",
    category: "Community",
    website: "#"
  }, {
    name: "Flow",
    description: "Blockchain Platform",
    logo: "https://via.placeholder.com/64x64/06b6d4/ffffff?text=F",
    category: "Technology",
    website: "#"
  }, {
    name: "Ventures Launch",
    description: "Startup Accelerator",
    logo: "https://via.placeholder.com/64x64/10b981/ffffff?text=VL",
    category: "Accelerator",
    website: "#"
  }];
  return <>
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

          {/* Partners Grid */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {partners.map((partner, index) => <div key={index} className="flex flex-col items-center text-center p-6 rounded-xl hover:scale-105 transition-all duration-300">
                  {/* Logo */}
                  <div className="w-16 h-16 mb-4 rounded-lg bg-background/50 flex items-center justify-center">
                    <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain" />
                  </div>

                  {/* Partner Name */}
                  <h3 className="text-lg font-semibold text-foreground">{partner.name}</h3>
                </div>)}
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
                <Button variant="outline" className="btn-glass" onClick={() => window.location.href = '/partnership-deck'}>More Info</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>;
};
export default NewPartners;
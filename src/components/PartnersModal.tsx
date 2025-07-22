import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PartnersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnersModal: React.FC<PartnersModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Placeholder partner data - this would come from a database
  const partners = [
    { name: 'Solana Foundation', logo: '/solana-logo.svg', category: 'Blockchain' },
    { name: 'iHUB Kyiv', logo: '/lovable-uploads/aa500a20-6676-44ba-b04f-0baaaadda75e.png', category: 'Coworking' },
    // Add more partners as they come onboard
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card rounded-3xl p-8 w-full max-w-4xl max-h-[80vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Our Partners</h2>
            <p className="text-muted-foreground">Building Ukraine's Web3 ecosystem together</p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="h-10 w-10 rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 mx-auto mb-4 bg-background rounded-xl flex items-center justify-center">
                <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.category}</p>
            </div>
          ))}
          
          {/* Placeholder for more partners */}
          <div className="glass-card p-6 rounded-2xl text-center border-2 border-dashed border-muted">
            <div className="w-16 h-16 mx-auto mb-4 bg-muted/30 rounded-xl flex items-center justify-center">
              <span className="text-2xl">+</span>
            </div>
            <h3 className="font-semibold text-muted-foreground mb-1">Your Logo Here</h3>
            <p className="text-sm text-muted-foreground">Become a Partner</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in partnering with us?
          </p>
          <Button onClick={onClose} className="btn-primary">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnersModal;
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import PartnerModal from './PartnerModal';
const NewPartners: React.FC = () => {
  const {
    t
  } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Partners data - 9 partners with real logos
  const partners = [{
    name: "Acropolis",
    description: "Strategic Partner & Hub Builder",
    logo: "https://via.placeholder.com/64x64/6366f1/ffffff?text=A",
    category: "Strategic",
    website: "#"
  }, {
    name: "Kumeka",
    description: "Financial Backing & Support",
    logo: "https://passtnsttaxaaauovxnz.supabase.co/storage/v1/object/sign/images/Logos/Kumeka.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mOGFmYTMwMy01OWQ1LTQ1YjktYjJmMy0xZWUzYjViMzBkNGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTG9nb3MvS3VtZWthLnN2ZyIsImlhdCI6MTc1MjgzNzU4NCwiZXhwIjoxOTEwNTE3NTg0fQ.KpjJkH0s4X8tD2GgfRV__gxFegZyQDFTYdSnCFL3idQ",
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
    logo: "/solana-logo.svg",
    category: "Technology",
    website: "#"
  }, {
    name: "Solus",
    description: "Investment & Advisory",
    logo: "https://passtnsttaxaaauovxnz.supabase.co/storage/v1/object/sign/images/Logos/Solus_logo.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mOGFmYTMwMy01OWQ1LTQ1YjktYjJmMy0xZWUzYjViMzBkNGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTG9nb3MvU29sdXNfbG9nby5zdmciLCJpYXQiOjE3NTI4Mzc2NDMsImV4cCI6MTkxMDUxNzY0M30.R1Hkb3BG6654tCnXXyVzziKQeHjqpRZCMwlAHtx_BWU",
    category: "Investment",
    website: "#"
  }, {
    name: "3xCapital",
    description: "Venture Capital Fund",
    logo: "https://passtnsttaxaaauovxnz.supabase.co/storage/v1/object/sign/images/Logos/3X.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mOGFmYTMwMy01OWQ1LTQ1YjktYjJmMy0xZWUzYjViMzBkNGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTG9nb3MvM1guc3ZnIiwiaWF0IjoxNzUyODM3NTU5LCJleHAiOjE5MTA1MTc1NTl9.vlf_q86v47LbWXHvkXRl6Acjai_SbO2i4qna60DMJ6Q",
    category: "Investment",
    website: "#"
  }, {
    name: "Nomadz",
    description: "Community & Events",
    logo: "https://passtnsttaxaaauovxnz.supabase.co/storage/v1/object/sign/images/Logos/Nomadz%20Main.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mOGFmYTMwMy01OWQ1LTQ1YjktYjJmMy0xZWUzYjViMzBkNGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTG9nb3MvTm9tYWR6IE1haW4ucG5nIiwiaWF0IjoxNzUyODM3NjA4LCJleHAiOjE5MTA1MTc2MDh9.L2tc17H0-7YaP-t4OpA1gRDQCc2fRaiHjetZc0q-84A",
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
    logo: "https://passtnsttaxaaauovxnz.supabase.co/storage/v1/object/sign/images/Logos/venture%20launch.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mOGFmYTMwMy01OWQ1LTQ1YjktYjJmMy0xZWUzYjViMzBkNGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTG9nb3MvdmVudHVyZSBsYXVuY2gucG5nIiwiaWF0IjoxNzUyODM3NjU3LCJleHAiOjE5MTA1MTc2NTd9.lJ81IDvB-83p4-G9eFzKqAhT3yAZNEX2wt2BkryDyRI",
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
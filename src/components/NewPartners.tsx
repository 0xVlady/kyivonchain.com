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
    logo: "https://passtnsttaxaaauovxnz.supabase.co/storage/v1/object/sign/images/Logos/Acropolis%20Logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mOGFmYTMwMy01OWQ1LTQ1YjktYjJmMy0xZWUzYjViMzBkNGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTG9nb3MvQWNyb3BvbGlzIExvZ28ucG5nIiwiaWF0IjoxNzUyODM3ODM5LCJleHAiOjE5MTA1MTc4Mzl9.AcXE3Ev-EO6adqjXeEgW7TtnEMlUYGvE52V7GqTMRSU",
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
    logo: "https://passtnsttaxaaauovxnz.supabase.co/storage/v1/object/sign/images/Logos/iHub.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mOGFmYTMwMy01OWQ1LTQ1YjktYjJmMy0xZWUzYjViMzBkNGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTG9nb3MvaUh1Yi5zdmciLCJpYXQiOjE3NTI4NDQ5NjcsImV4cCI6MTkxMDUyNDk2N30.z556-2PcyKbO5WM7Qu8H6okaui_q5Fn1aJTgvD1WZ8U",
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
    logo: "https://passtnsttaxaaauovxnz.supabase.co/storage/v1/object/sign/images/Logos/Solus_logo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mOGFmYTMwMy01OWQ1LTQ1YjktYjJmMy0xZWUzYjViMzBkNGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTG9nb3MvU29sdXNfbG9nby5wbmciLCJpYXQiOjE3NTI4NDQ4NjksImV4cCI6MTkxMDUyNDg2OX0.S4mE1BKaGAyidl2AGDt5rvWnVUmmLNMra73PaBpPbq0",
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
    name: "Solana Temple",
    description: "Blockchain Platform",
    logo: "https://passtnsttaxaaauovxnz.supabase.co/storage/v1/object/sign/images/Logos/Solana%20Temple.svg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9mOGFmYTMwMy01OWQ1LTQ1YjktYjJmMy0xZWUzYjViMzBkNGEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvTG9nb3MvU29sYW5hIFRlbXBsZS5zdmciLCJpYXQiOjE3NTI4NDUwMTIsImV4cCI6MTkxMDUyNTAxMn0.IIMxNTKuQP-3GpqkF25gFde7w161QXU_29wXrPmIOH0",
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
            {/* Liquid Glass Background Board */}
            <div className="glass-card rounded-3xl p-12 max-w-5xl mx-auto relative overflow-hidden">
              {/* Animated liquid elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tl from-secondary/20 to-primary/20 rounded-full blur-xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-lg animate-pulse delay-500"></div>
              </div>
              
              {/* Partners Grid */}
              <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
                {partners.map((partner, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4 rounded-xl hover:scale-110 transition-all duration-300 group">
                    {/* Logo Container */}
                    <div className="w-32 h-32 mb-2 rounded-xl bg-white/80 backdrop-blur-sm flex items-center justify-center p-4 shadow-lg group-hover:shadow-xl group-hover:bg-white/90 transition-all duration-300">
                      <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <a href="https://x.com/kyivonchain" target="_blank" rel="noopener noreferrer" 
                 className="text-foreground hover:text-primary transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/kyivonchain/" target="_blank" rel="noopener noreferrer"
                 className="text-foreground hover:text-primary transition-colors">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
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
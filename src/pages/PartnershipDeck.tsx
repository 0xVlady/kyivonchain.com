import React, { useState } from 'react';
import { ExternalLink, Download, FileText, Users, Target, Handshake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/WaitlistModal';
import EventModal from '@/components/EventModal';
const PartnershipDeck: React.FC = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const partnershipTypes = [{
    icon: Users,
    title: 'Community Partners',
    description: 'Collaborate on events and community building initiatives',
    benefits: ['Event co-hosting', 'Cross-promotion', 'Shared resources']
  }, {
    icon: Target,
    title: 'Technology Partners',
    description: 'Technical integrations and product collaborations',
    benefits: ['API integrations', 'Co-development', 'Technical support']
  }, {
    icon: Handshake,
    title: 'Strategic Partners',
    description: 'Long-term strategic alliances and investments',
    benefits: ['Strategic planning', 'Investment opportunities', 'Global reach']
  }];
  return <div className="min-h-screen bg-background">
      <Header onOpenWaitlist={() => setIsWaitlistModalOpen(true)} onOpenEvent={() => setIsEventModalOpen(true)} />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">Partnership</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore partnership opportunities with Ukraine's leading Web3 hub
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-base">
                <Download className="mr-2 w-4 h-4" />
                Download Full Deck
              </Button>
              
            </div>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {partnershipTypes.map((type, index) => {
              const IconComponent = type.icon;
              return <div key={index} className="glass-card rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">{type.title}</h3>
                    <p className="text-muted-foreground mb-6">{type.description}</p>
                    
                    <ul className="space-y-2 text-sm">
                      {type.benefits.map((benefit, benefitIndex) => <li key={benefitIndex} className="flex items-center justify-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                          {benefit}
                        </li>)}
                    </ul>
                  </div>;
            })}
            </div>
          </div>
        </section>

        {/* Presentation Embed */}
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <div className="glass-card rounded-3xl p-8 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Partnership Presentation</h2>
              
              {/* Placeholder for Canva presentation - replace with actual embed */}
              <div className="aspect-video bg-muted/20 rounded-xl flex items-center justify-center border-2 border-dashed border-muted">
                <div className="text-center">
                  <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Partnership Deck Coming Soon</h3>
                  <p className="text-muted-foreground">
                    Our comprehensive partnership presentation will be available here
                  </p>
                  <Button className="btn-primary mt-4">
                    Request Preview Access
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto text-center">
            <div className="glass-card rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Partner?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can build Ukraine's Web3 future together
              </p>
              <Button className="btn-primary">
                Contact Partnership Team
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Shared Modals */}
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
      <EventModal isOpen={isEventModalOpen} onClose={() => setIsEventModalOpen(false)} />
    </div>;
};
export default PartnershipDeck;
import React, { useState } from 'react';
import { ExternalLink, Download, FileText, Users, Target, Handshake, Palette, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WaitlistModal from '@/components/WaitlistModal';
import EventModal from '@/components/EventModal';
import PartnerModal from '@/components/PartnerModal';
import BackToHome from '@/components/BackToHome';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
const PartnershipDeck: React.FC = () => {
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const { t } = useLanguage();
  const partnershipTypes = [{
    icon: Users,
    title: t('partnershipDeck.communityPartners'),
    description: t('partnershipDeck.communityPartners.desc'),
    benefits: [t('partnershipDeck.eventCohosting'), t('partnershipDeck.crossPromotion'), t('partnershipDeck.sharedResources')]
  }, {
    icon: Target,
    title: t('partnershipDeck.technologyPartners'),
    description: t('partnershipDeck.technologyPartners.desc'),
    benefits: [t('partnershipDeck.apiIntegrations'), t('partnershipDeck.coDevelopment'), t('partnershipDeck.technicalSupport')]
  }, {
    icon: Handshake,
    title: t('partnershipDeck.strategicPartners'),
    description: t('partnershipDeck.strategicPartners.desc'),
    benefits: [t('partnershipDeck.strategicPlanning'), t('partnershipDeck.investmentOpportunities'), t('partnershipDeck.globalReach')]
  }, {
    icon: Palette,
    title: 'Branding Partners',
    description: 'Showcase your brand to our vibrant Web3 community',
    benefits: ['Logo placement opportunities', 'Event sponsorship options', 'Digital presence'],
    moreInfo: true
  }];
  return <div className="min-h-screen bg-background">
      <BackToHome />
      <Header onOpenWaitlist={() => setIsWaitlistModalOpen(true)} onOpenEvent={() => setIsEventModalOpen(true)} />
      
      <main className="pt-20">
        {/* Header Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto text-center">
             <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">{t('partnershipDeck.title')}</h1>
             <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
               {t('partnershipDeck.subtitle')}
             </p>
          </div>
        </section>

        {/* Partnership Types */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {partnershipTypes.map((type, index) => {
              const IconComponent = type.icon;
               return <div key={index} className="glass-card rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
                     <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                       <IconComponent className="w-6 h-6 text-white" />
                     </div>
                     
                     <h3 className="text-lg font-bold mb-3">{type.title}</h3>
                     <p className="text-muted-foreground text-sm mb-4">{type.description}</p>
                     
                     <ul className="space-y-2 text-sm mb-4">
                       {type.benefits.map((benefit, benefitIndex) => <li key={benefitIndex} className="flex items-center text-left">
                           <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0 mt-2"></span>
                           <span>{benefit}</span>
                         </li>)}
                     </ul>
                     
                     {type.moreInfo && (
                       <Button variant="outline" asChild className="w-full btn-glass text-sm">
                         <Link to="/branding">
                           More
                           <ArrowRight className="w-4 h-4 ml-2" />
                         </Link>
                       </Button>
                     )}
                   </div>;
            })}
            </div>
          </div>
        </section>

        {/* Presentation Embed */}
        <section className="py-12 px-6">
          <div className="container mx-auto">
            <div className="glass-card rounded-3xl p-6 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-6">{t('partnershipDeck.presentationTitle')}</h2>
              
              {/* Placeholder for Canva presentation - replace with actual embed */}
              <div className="aspect-video bg-muted/20 rounded-xl flex items-center justify-center border-2 border-dashed border-muted">
                <div className="text-center">
                  <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
                   <h3 className="text-lg font-semibold mb-2">{t('partnershipDeck.deckComingSoon')}</h3>
                   <p className="text-muted-foreground text-sm">
                     {t('partnershipDeck.deckComingSoon.desc')}
                   </p>
                   <Button className="btn-primary mt-3 text-sm px-4 py-2">
                     {t('partnershipDeck.requestPreview')}
                   </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto text-center">
            <div className="glass-card rounded-xl p-6 max-w-2xl mx-auto">
               <h3 className="text-2xl font-bold mb-4">{t('partnershipDeck.readyToPartner')}</h3>
               <p className="text-muted-foreground mb-6">
                 {t('partnershipDeck.buildTogether')}
               </p>
               <Button className="btn-primary" onClick={() => setIsPartnerModalOpen(true)}>
                 {t('partnershipDeck.contactPartnershipTeam')}
               </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Shared Modals */}
      <WaitlistModal isOpen={isWaitlistModalOpen} onClose={() => setIsWaitlistModalOpen(false)} />
      <EventModal isOpen={isEventModalOpen} onClose={() => setIsEventModalOpen(false)} />
      <PartnerModal isOpen={isPartnerModalOpen} onClose={() => setIsPartnerModalOpen(false)} />
    </div>;
};
export default PartnershipDeck;
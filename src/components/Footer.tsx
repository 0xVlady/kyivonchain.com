import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Mail, MessageCircle, Heart, Instagram, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import NewsletterSubscribe from './NewsletterSubscribe';
import WaitlistModal from './WaitlistModal';
import EventModal from './EventModal';

// Custom X (Twitter) icon component
const XIcon: React.FC<{
  className?: string;
}> = ({
  className
}) => <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>;
const Footer: React.FC = () => {
  const {
    t,
    language,
    setLanguage
  } = useLanguage();
  const location = useLocation();
  
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    // Always navigate to home page and scroll to the specific section
    window.location.href = `/#${id}`;
  };
  const socialLinks = [{
    icon: XIcon,
    label: 'X (formerly Twitter)',
    url: 'https://x.com/kyivonchain',
    color: 'hover:text-foreground'
  }, {
    icon: Instagram,
    label: 'Instagram',
    url: 'https://www.instagram.com/kyivonchain/',
    color: 'hover:text-pink-400'
  }];
  const quickLinks = [{
    label: t('footer.aboutUs'),
    action: () => scrollToSection('about')
  }, {
    label: t('footer.ourVision'),
    href: '/vision'
  }, {
    label: t('footer.partners'),
    action: () => scrollToSection('partnerships')
  }, {
    label: t('footer.calendar'),
    href: '/calendar'
  }];
  const resourceLinks = [{
    label: 'Join Waitlist',
    action: () => setIsWaitlistModalOpen(true)
  }, {
    label: t('footer.hostEvent'),
    action: () => setIsEventModalOpen(true)
  }, {
    label: t('footer.partnershipInfo'),
    href: '/partnership-deck'
  }, {
    label: t('footer.brandingAccess'),
    href: '/branding'
  }];
  return <footer className="relative overflow-hidden bg-gradient-to-t from-background to-background/50 border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-ukraine-blue/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-12 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <img alt="KYIV.ONCHAIN Logo" className="w-12 h-12" src="/lovable-uploads/a40c6297-e33c-4cb6-ba3e-4dd074ecbced.png" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">KYIV.ONCHAIN</h3>
                  
                </div>
              </Link>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
                {t('footer.tagline')}
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">{t('footer.stayUpdated')}</h4>
                <NewsletterSubscribe />
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 glass-card rounded-xl flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`} aria-label={social.label}>
                    <social.icon className="w-5 h-5" />
                  </a>)}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">{t('footer.quickLinks')}</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => <li key={index}>
                    {link.action ? (
                      <button onClick={link.action} className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    ) : (
                      <Link to={link.href!} className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    )}
                  </li>)}
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">{t('footer.getStarted')}</h4>
              <ul className="space-y-4">
                {resourceLinks.map((link, index) => <li key={index}>
                    {link.action ? (
                      <button onClick={link.action} className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </button>
                    ) : (
                      <Link to={link.href!} className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                        <span>{link.label}</span>
                        <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    )}
                  </li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-8 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-3">
                {t('footer.contact')}
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                  <Mail className="w-4 h-4" />
                  <span>kyivonchain@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground text-sm">
                  <MessageCircle className="w-4 h-4" />
                  <span>@kyivonchain</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                {t('footer.location')}
              </h4>
              <div className="flex items-center justify-end space-x-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>Khreschatyk St, 10 (iHub co-working)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>© 2025 KYIV.ONCHAIN</span>
              <span>•</span>
              <span>{t('footer.builtWith')}</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>{t('footer.forUkraine')}</span>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground text-sm">{t('footer.language')}</span>
              <div className="lang-toggle">
                <button onClick={() => setLanguage('en')} className={language === 'en' ? 'active' : ''}>
                  🇬🇧 EN
                </button>
                {/* <button onClick={() => setLanguage('uk')} className={language === 'uk' ? 'active' : ''}>
                  🇺🇦 UK
                </button> */}
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Modals */}
      <WaitlistModal
        isOpen={isWaitlistModalOpen}
        onClose={() => setIsWaitlistModalOpen(false)}
      />
      <EventModal
        isOpen={isEventModalOpen}
        onClose={() => setIsEventModalOpen(false)}
      />
    </footer>;
};
export default Footer;
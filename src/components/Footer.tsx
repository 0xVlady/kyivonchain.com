import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ExternalLink, Mail, MessageCircle, Twitter, Github, Globe, Heart, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const Footer: React.FC = () => {
  const {
    t,
    language,
    setLanguage
  } = useLanguage();
  const socialLinks = [{
    icon: Twitter,
    label: 'Twitter/X',
    url: '#',
    color: 'hover:text-blue-400'
  }, {
    icon: Instagram,
    label: 'Instagram',
    url: '#',
    color: 'hover:text-pink-400'
  }, {
    icon: MessageCircle,
    label: 'Telegram',
    url: '#',
    color: 'hover:text-blue-500'
  }, {
    icon: Github,
    label: 'GitHub',
    url: '#',
    color: 'hover:text-gray-400'
  }, {
    icon: Globe,
    label: 'Discord',
    url: '#',
    color: 'hover:text-indigo-400'
  }];
  const quickLinks = [{
    label: 'About Us',
    href: '#about'
  }, {
    label: 'Membership',
    href: '#membership'
  }, {
    label: 'Events',
    href: '#events'
  }, {
    label: 'Partners',
    href: '#partners'
  }];
  const resourceLinks = [{
    label: 'Join Hub',
    href: '#join-hub'
  }, {
    label: 'Host Event',
    href: '#host-event'
  }, {
    label: 'Partnership Deck',
    href: '#'
  }, {
    label: 'Brand Assets',
    href: '#'
  }];
  return <footer className="relative overflow-hidden bg-gradient-to-t from-background to-background/50 border-t border-border/50">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-ukraine-blue/3 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img alt="KYIV.ONCHAIN Logo" className="w-12 h-12" src="/lovable-uploads/a40c6297-e33c-4cb6-ba3e-4dd074ecbced.png" />
                <div>
                  <h3 className="text-2xl font-bold text-foreground">KYIV.ONCHAIN</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <img src="/solana-logo.svg" alt="Solana" className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-md">
                Ukraine's permanent home for Web3 builders, built by the community.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-8">
                <h4 className="font-semibold text-foreground mb-3">Stay Updated</h4>
                <div className="flex space-x-3">
                  <Input placeholder="Enter your email" className="glass-card border-glass-border flex-1" />
                  <Button className="btn-primary px-6">
                    Subscribe
                  </Button>
                </div>
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
              <h4 className="text-lg font-semibold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Get Started */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-6">Get Started</h4>
              <ul className="space-y-4">
                {resourceLinks.map((link, index) => <li key={index}>
                    <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors duration-300 flex items-center group">
                      <span>{link.label}</span>
                      <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-12 border-t border-border/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4">
                {t('footer.contact')}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-5 h-5" />
                  <span>hello@kyiv.onchain</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MessageCircle className="w-5 h-5" />
                  <span>@kyivonchain</span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <h4 className="text-xl font-bold text-foreground mb-4">
                Location
              </h4>
              <div className="text-muted-foreground">
                <p>iHUB Kyiv</p>
                <p>Kyiv, Ukraine 🇺🇦</p>
                <p className="text-sm mt-2 flex items-center justify-end">
                  <span className="mr-2">Underground workspace for safety</span>
                  🛡️
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-muted-foreground text-sm">
              <span>© 2025 KYIV.ONCHAIN</span>
              <span>•</span>
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>for Ukraine's Web3 community</span>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center space-x-4">
              <span className="text-muted-foreground text-sm">Language:</span>
              <div className="lang-toggle">
                <button onClick={() => setLanguage('en')} className={language === 'en' ? 'active' : ''}>
                  🇬🇧 EN
                </button>
                <button onClick={() => setLanguage('uk')} className={language === 'uk' ? 'active' : ''}>
                  🇺🇦 UK
                </button>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center space-x-6 mt-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors duration-300">
              Code of Conduct
            </a>
          </div>
        </div>

      </div>
    </footer>;
};
export default Footer;
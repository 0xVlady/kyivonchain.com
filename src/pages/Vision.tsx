import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import BackToHome from '@/components/BackToHome';
import WaitlistModal from '@/components/WaitlistModal';

const Vision: React.FC = () => {
  const { t } = useLanguage();
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      <BackToHome />
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-0 border-b border-glass-border">
        <div className="container mx-auto px-4 sm:px-6 py-4 max-w-full">
          <div className="flex items-center justify-center min-w-0">            
            <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
              <img alt="KYIV.ONCHAIN Logo" className="w-6 h-6 sm:w-8 sm:h-8 shrink-0" src="/lovable-uploads/e827a6da-5e2e-4f74-a012-f40e81d490e4.png" />
              <span className="font-bold text-lg sm:text-xl text-foreground truncate">KYIV.ONCHAIN</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 max-w-full">
        <div className="max-w-4xl mx-auto w-full">
          {/* Hero Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 bg-gradient-primary bg-clip-text text-transparent break-words">
              {t('vision.missionTitle')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-full break-words">
              {t('vision.missionSubtitle')}
            </p>
          </div>

          {/* Vision Content */}
          <div className="space-y-8 sm:space-y-12">
            {/* The Future of Ukrainian Web3 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">{t('vision.futureTitle')}</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.future.desc1')}
                </p>
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.future.desc2')}
                </p>
                <p className="break-words">
                  {t('vision.future.desc3')}
                </p>
              </div>
            </div>

            {/* Solana & Kumeka */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">{t('vision.solanaTitle')}</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.solana.desc1')}
                </p>
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.solana.desc2')}
                </p>
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.solana.desc3')}
                </p>
                <p className="mb-4 sm:mb-6 break-words">
                  {t('links.exploreOpportunities')}: <a href="https://solana.org/grants-funding" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://solana.org/grants-funding</a> {t('common.and')} <a href="https://earn.superteam.fun/grants/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://earn.superteam.fun/grants/</a>
                </p>
                
                <h3 className="text-xl font-bold mb-3 text-primary">{t('vision.kumeka.title')}</h3>
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.kumeka.desc1')}
                </p>
                <p className="mb-4 sm:mb-6 break-words">
                  {t('links.learnMore')}: <a href="https://kumeka.team/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://kumeka.team/</a>
                </p>
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.kumeka.desc2')}
                </p>
                <p className="mb-6 sm:mb-8 break-words">
                  {t('vision.kumeka.desc3')}
                </p>

                <h3 className="text-xl font-bold mb-3 text-primary">{t('vision.accelerators.title')}</h3>
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.accelerators.desc1')}
                </p>
                <ul className="mb-4 sm:mb-6 list-disc pl-6">
                  <li><a href="https://colosseum.org/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Colosseum</a></li>
                  <li><a href="https://solana.com/developers#grants-and-incubators" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Solana Incubator</a></li>
                  <li><a href="https://x.com/venture_launch" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Venture Launch</a></li>
                  <li><a href="https://outlierventures.io/base-camp/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Outlier Ventures Base Camps</a></li>
                </ul>
                <p className="break-words">
                  {t('vision.accelerators.desc2')}
                </p>
              </div>
            </div>

            {/* Solana Superteam Model */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">{t('vision.superteam.title')}</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.superteam.desc1')}
                </p>
                <ul className="mb-4 sm:mb-6 list-disc pl-6">
                  <li>{t('vision.superteam.feature1')}</li>
                  <li>{t('vision.superteam.feature2')}</li>
                  <li>{t('vision.superteam.feature3')}</li>
                </ul>
                <p className="break-words">
                  {t('vision.superteam.desc2')}
                </p>
              </div>
            </div>

            {/* Tokenized Community Governance */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">{t('vision.governance')}</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.governance.desc1')}
                </p>
                <p className="break-words">
                  {t('vision.governance.desc2')}
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-primary rounded-2xl p-8 sm:p-12 text-primary-foreground w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 break-words">{t('vision.join.title')}</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 break-words">
                {t('vision.join.desc')}
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                onClick={() => setIsWaitlistModalOpen(true)}
              >
                {t('cta.joinWaitlist')}
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Waitlist Modal */}
      <WaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={() => setIsWaitlistModalOpen(false)} 
      />
    </div>
  );
};

export default Vision;
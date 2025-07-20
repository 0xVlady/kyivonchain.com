import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import BackToHome from '@/components/BackToHome';
import WaitlistModal from '@/components/WaitlistModal';

const Vision: React.FC = () => {
  const { t } = useLanguage();
  const [isWaitlistModalOpen, setIsWaitlistModalOpen] = useState(false);

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
              Our Mission
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-full break-words">
              To build a permanent home for Web3 innovation in Ukraine — one that endures, adapts, and thrives, even when the world around it shakes.
            </p>
          </div>

          {/* Vision Content */}
          <div className="space-y-8 sm:space-y-12">
            {/* The Future of Ukrainian Web3 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">The Future of Ukrainian Web3</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  KYIV.ONCHAIN represents more than just a physical workspace—it's the cornerstone of Ukraine's digital sovereignty in the Web3 era. Our vision extends beyond borders, creating a global network where Ukrainian innovation leads the way in decentralized technologies.
                </p>
                <p className="mb-4 sm:mb-6 break-words">
                  We envision a future where Ukraine becomes the premier destination for Web3 builders, researchers, and entrepreneurs from around the world, drawn by our unique combination of technical excellence, resilient infrastructure, and unwavering community spirit.
                </p>
                <p className="break-words">
                  What we are building is not just local — it's borderless, and its heartbeat is Ukrainian.
                </p>
              </div>
            </div>

            {/* Solana & Kumeka */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">Solana & Kumeka — Building with Purpose: A Foundation-Layer Partnership</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  We didn't choose Solana and Kumeka by chance — we chose them because they build from first principles, at both the protocol and ecosystem level. That's exactly how we see KYIV.ONCHAIN: not as another co-working space, but as core infrastructure for Ukraine's Web3 future.
                </p>
                <p className="mb-4 sm:mb-6 break-words">
                  Solana isn't just a high-performance blockchain — it's a complete ecosystem designed to support founders from zero to one, and from idea to scale. At its core is a community-first philosophy that empowers builders with access, funding, and distribution — not just code.
                </p>
                <h3 className="text-xl font-bold mb-3 text-primary">KUMEKA Team - Ukrainian Solana Hub</h3>
                <p className="mb-4 sm:mb-6 break-words">
                  Kumeka helps the most promising projects in the Solana ecosystem launch and grow. Kumeka are organized as a collective of creatives, developers, and operators who are experienced in launching and growing technology businesses.
                </p>
                <p className="mb-4 sm:mb-6 break-words">
                  We value the sovereignty that comes with founding a company, the skin in the game that comes with investing, and the joy that comes with getting sh*t done. In a pre-crypto world, we had to fit into broiler categories — founder, investor, or employee. Crypto allows us to be free-range and be all 3 at the same time.
                </p>
                <p className="break-words">
                  Kumeka is the core Tenant of KYIV.ONCHAIN that supported us from day 1.
                </p>
              </div>
            </div>

            {/* Solana Superteam Model */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">🌐 Solana Superteam Model: Peer-Led, Founder-Focused</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  Solana's regional Superteams — including Superteam DE, UK, UAE, Kumeka, and others — are collectives of proven builders helping new founders succeed. They offer:
                </p>
                <ul className="mb-4 sm:mb-6 list-disc pl-6">
                  <li>Direct access to product feedback, advisors, and hiring help</li>
                  <li>Localized support for hackathons, quests, and events</li>
                  <li>Real-time amplification and warm intros to key ecosystem players</li>
                </ul>
                <p className="break-words">
                  With Ukraine's growing Web3 scene, [XYZ].ONCHAIN aims to become the chain of IRL hubs in multiple cities activating and uniting regional talent into the broader Solana & Web3 movement.
                </p>
              </div>
            </div>

            {/* Grants */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">🛠️ Grants That Actually Move the Needle</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  Through the Solana Foundation, builders can access milestone-based, no-equity grants across several verticals:
                </p>
                <ul className="mb-4 sm:mb-6 list-disc pl-6">
                  <li><strong>Developer Tooling:</strong> SDKs, integrations, language support (Rust, Python, TypeScript)</li>
                  <li><strong>Consumer Apps:</strong> From games and social tools to creator platforms</li>
                  <li><strong>DePIN:</strong> Decentralized hardware and infrastructure projects</li>
                  <li><strong>Payments & Commerce:</strong> Stablecoin rails, merchant tools, and wallets</li>
                </ul>
                <p className="break-words">
                  🔗 Explore Solana Grants →
                </p>
              </div>
            </div>

            {/* Accelerators */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">🚀 Accelerators That Actually Build Startups</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  Solana doesn't just fund projects — it incubates them. The ecosystem includes top-tier accelerators like:
                </p>
                <ul className="mb-4 sm:mb-6 list-disc pl-6">
                  <li>Colosseum (https://www.colosseum.com/accelerator)</li>
                  <li>Solana Incubator (https://incubator.solanalabs.com/)</li>
                  <li>Venture Launch (https://venturelaunch.xyz/)</li>
                  <li>Outlier Ventures Base Camps (https://outlierventures.io/base-camp/)</li>
                </ul>
                <p className="mb-4 sm:mb-6 break-words">
                  Each provides hands-on mentorship, product support, and growth expertise tailored to Solana-native startups.
                </p>
                <p className="break-words font-semibold">
                  Our job is to support all of this!
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
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 break-words">Join Us in Building the Future</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 break-words">
                {t('pages.vision.joinDescription')}
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                onClick={() => setIsWaitlistModalOpen(true)}
              >
                Join Waitlist
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
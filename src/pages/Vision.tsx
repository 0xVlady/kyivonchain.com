import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Vision: React.FC = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden max-w-[100vw]">
      {/* Header */}
      <header className="sticky top-0 z-50 glass-card border-0 border-b border-glass-border">
        <div className="container mx-auto px-4 sm:px-6 py-4 max-w-full">
          <div className="flex items-center justify-between min-w-0">
            <Button 
              variant="ghost" 
              asChild
              className="btn-glass flex items-center gap-2"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4" />
                Back to KYIV.ONCHAIN
              </Link>
            </Button>
            
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
              Our Vision
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-full break-words">
              Building the permanent home for Web3 innovation in Ukraine, 
              fostering a resilient ecosystem that thrives even in challenging times.
            </p>
          </div>

          {/* Vision Content */}
          <div className="space-y-8 sm:space-y-12">
            {/* Section 1 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">The Future of Ukrainian Web3</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  KYIV.ONCHAIN represents more than just a physical workspace—it's the cornerstone 
                  of Ukraine's digital sovereignty in the Web3 era. Our vision extends beyond borders, 
                  creating a global network where Ukrainian innovation leads the way in decentralized technologies.
                </p>
                <p className="break-words">
                  We envision a future where Ukraine becomes the premier destination for Web3 builders, 
                  researchers, and entrepreneurs from around the world, drawn by our unique combination 
                  of technical excellence, resilient infrastructure, and unwavering community spirit.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">Resilience Through Innovation</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  Our underground workspace isn't just about safety—it symbolizes our commitment to 
                  continuous innovation despite adversity. We're proving that great technology can 
                  emerge from any circumstances when brilliant minds come together with shared purpose.
                </p>
                <p className="break-words">
                  This resilience model will become a blueprint for Web3 hubs worldwide, 
                  demonstrating how communities can maintain productivity and innovation even 
                  in the most challenging environments.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">Tokenized Community Governance</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  The Inner Circle membership tier represents the first step toward full tokenization 
                  of our community governance. We're building toward a future where KYIV.ONCHAIN 
                  operates as a true DAO, with members having direct influence over strategic decisions, 
                  resource allocation, and ecosystem development.
                </p>
                <p className="break-words">
                  Our tokenized membership will create unprecedented transparency and democratic 
                  participation in hub operations, setting new standards for community-owned Web3 infrastructure.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">Global Web3 Leadership</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  Through strategic partnerships with Solana, Acropolis, Kumeka, and iHUB Kyiv, 
                  we're positioning KYIV.ONCHAIN as a global leader in Web3 innovation and adoption. 
                  Our goal is to become the primary bridge between Eastern European talent and 
                  global Web3 opportunities.
                </p>
                <p className="break-words">
                  We will establish sister hubs across Europe and beyond, creating a network of 
                  interconnected Web3 communities that share resources, knowledge, and opportunities 
                  while maintaining their unique local character and strengths.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-primary rounded-2xl p-8 sm:p-12 text-primary-foreground w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 break-words">Join Us in Building the Future</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 break-words">
                This vision becomes reality through community. Whether you're a developer, 
                entrepreneur, investor, or simply passionate about Web3's potential in Ukraine, 
                your contribution shapes our collective future.
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                asChild
              >
                <Link to="/">Return to KYIV.ONCHAIN</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vision;
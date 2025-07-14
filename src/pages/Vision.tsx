import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Vision: React.FC = () => {
  const { t } = useLanguage();

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
                {t('pages.vision.backTo')}
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
              {t('pages.vision.title')}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-full break-words">
              {t('pages.vision.subtitle')}
            </p>
          </div>

          {/* Vision Content */}
          <div className="space-y-8 sm:space-y-12">
            {/* Section 1 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">{t('vision.ourFuture')}</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.ourFuture.desc1')}
                </p>
                <p className="break-words">
                  {t('vision.ourFuture.desc2')}
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">{t('vision.resilience')}</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.resilience.desc1')}
                </p>
                <p className="break-words">
                  {t('vision.resilience.desc2')}
                </p>
              </div>
            </div>

            {/* Section 3 */}
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

            {/* Section 4 */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-primary break-words">{t('vision.leadership')}</h2>
              <div className="prose prose-base sm:prose-lg max-w-none text-foreground w-full">
                <p className="mb-4 sm:mb-6 break-words">
                  {t('vision.leadership.desc1')}
                </p>
                <p className="break-words">
                  {t('vision.leadership.desc2')}
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-gradient-primary rounded-2xl p-8 sm:p-12 text-primary-foreground w-full">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 break-words">{t('pages.vision.joinBuilding')}</h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 break-words">
                {t('pages.vision.joinDescription')}
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
                asChild
              >
                <Link to="/">{t('pages.vision.returnTo')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Vision;
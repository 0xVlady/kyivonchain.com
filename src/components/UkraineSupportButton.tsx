import React from 'react';
import { ExternalLink, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UkraineSupportButton: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-ukraine-blue/5 via-white/5 to-ukraine-yellow/5 border-b border-ukraine-blue/10 mt-[84px]">
      <div className="container mx-auto px-6 py-1.5">
        <div className="flex items-center justify-center space-x-3">
          <span className="text-ukraine-blue text-lg">🇺🇦</span>
          <span className="text-foreground font-medium">Stand with Ukraine</span>
          <Heart className="w-4 h-4 text-red-500 animate-pulse" />
          <Button
            variant="outline"
            size="sm"
            className="border-ukraine-blue/30 text-ukraine-blue hover:bg-ukraine-blue/10"
            onClick={() => window.open('https://war.ukraine.ua/support-ukraine/', '_blank')}
          >
            Support Ukraine
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default UkraineSupportButton;
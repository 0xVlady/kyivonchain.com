import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UkraineSupportButton: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-ukraine-blue/5 via-white/5 to-ukraine-yellow/5 border-b border-ukraine-blue/10">
      <div className="container mx-auto px-6 py-2">
        <div className="flex items-center justify-center">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-ukraine-blue hover:bg-ukraine-blue/10 transition-all duration-300 group"
            onClick={() => window.open('https://ukraine.ua/support', '_blank')}
          >
            <span className="text-ukraine-blue mr-2">🇺🇦</span>
            <span className="font-medium">Stand with Ukraine</span>
            <ExternalLink className="w-3 h-3 ml-2 opacity-60 group-hover:opacity-100 transition-opacity" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UkraineSupportButton;
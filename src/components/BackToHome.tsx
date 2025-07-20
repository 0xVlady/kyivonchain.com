import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BackToHome: React.FC = () => {
  return (
    <div className="fixed top-20 left-4 z-40">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="glass-card px-3 py-2 rounded-lg hover:scale-105 transition-all duration-200 border border-glass-border"
      >
        <Link to="/" className="flex items-center">
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
};

export default BackToHome;
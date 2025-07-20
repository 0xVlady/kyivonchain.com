import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const BackToHome: React.FC = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      
      // Make icon visible when scrolling
      setIsTransparent(false);
      
      // Set new timeout to make it transparent after 4 seconds
      const timeout = setTimeout(() => {
        setIsTransparent(true);
      }, 4000);
      
      setScrollTimeout(timeout);
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Set initial timeout
    const initialTimeout = setTimeout(() => {
      setIsTransparent(true);
    }, 4000);
    setScrollTimeout(initialTimeout);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  return (
    <div className="fixed top-20 left-4 z-40">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className={`glass-card px-3 py-2 rounded-lg hover:scale-105 transition-all duration-500 border border-glass-border ${
          isTransparent ? 'opacity-20' : 'opacity-100'
        }`}
      >
        <Link to="/" className="flex items-center" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <Home className="w-4 h-4" />
        </Link>
      </Button>
    </div>
  );
};

export default BackToHome;
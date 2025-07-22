
import { useEffect } from 'react';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          console.log('Page Load Time:', navEntry.loadEventEnd - navEntry.loadEventStart);
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        
        if (entry.entryType === 'first-input') {
          const fid = entry as PerformanceEventTiming;
          console.log('FID:', fid.processingStart - fid.startTime);
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'largest-contentful-paint', 'first-input'] });
    } catch (e) {
      console.log('Performance Observer not supported');
    }

    return () => observer.disconnect();
  }, []);
};

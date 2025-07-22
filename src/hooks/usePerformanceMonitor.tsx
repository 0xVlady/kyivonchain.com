
import { useEffect } from 'react';
import { trackError } from '@/utils/analytics';

export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals and errors
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          const loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          console.log('Page Load Time:', loadTime);
          
          // Track slow page loads
          if (loadTime > 3000) {
            trackError('Slow page load', `Load time: ${loadTime}ms`);
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
          
          // Track poor LCP
          if (entry.startTime > 2500) {
            trackError('Poor LCP performance', `LCP: ${entry.startTime}ms`);
          }
        }
        
        if (entry.entryType === 'first-input') {
          const fid = entry as PerformanceEventTiming;
          const fidValue = fid.processingStart - fid.startTime;
          console.log('FID:', fidValue);
          
          // Track poor FID
          if (fidValue > 100) {
            trackError('Poor FID performance', `FID: ${fidValue}ms`);
          }
        }
      });
    });

    try {
      observer.observe({ 
        entryTypes: ['navigation', 'largest-contentful-paint', 'first-input'] 
      });
    } catch (e) {
      console.log('Performance Observer not supported');
    }

    // Monitor memory usage
    const checkMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100;
        
        if (memoryUsage > 90) {
          trackError('High memory usage', `Memory usage: ${memoryUsage.toFixed(2)}%`);
        }
      }
    };

    const memoryInterval = setInterval(checkMemoryUsage, 30000); // Check every 30 seconds

    // Global error handler
    const handleGlobalError = (event: ErrorEvent) => {
      trackError(event.error?.message || 'Unknown error', event.filename);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      trackError('Unhandled Promise Rejection', event.reason);
    };

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      observer.disconnect();
      clearInterval(memoryInterval);
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);
};

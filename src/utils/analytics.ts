
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    mixpanel?: {
      track: (event: string, properties?: Record<string, any>) => void;
    };
  }
}

// Initialize Google Analytics if not already done
export const initAnalytics = () => {
  if (typeof window !== 'undefined' && !window.gtag) {
    // This will be replaced with actual GA_MEASUREMENT_ID in production
    const GA_ID = 'GA_MEASUREMENT_ID';
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
    
    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer!.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Console logging for development
  console.log('Analytics Event:', eventName, properties);
  
  // Track performance metrics
  if (eventName === 'page_view') {
    trackPerformance();
  }
  
  // Only track in browser environment
  if (typeof window === 'undefined') return;
  
  // Google Analytics 4
  if (window.gtag) {
    window.gtag('event', eventName, {
      custom_parameter_1: properties?.page || 'unknown',
      ...properties
    });
  }
  
  // Mixpanel (if configured)
  if (window.mixpanel) {
    window.mixpanel.track(eventName, properties);
  }
};

export const trackPageView = (page: string) => {
  trackEvent('page_view', { 
    page,
    timestamp: new Date().toISOString(),
    user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : 'unknown',
    screen_resolution: typeof screen !== 'undefined' ? `${screen.width}x${screen.height}` : 'unknown'
  });
};

export const trackMembershipInterest = (tier: string) => {
  trackEvent('membership_interest', { 
    tier,
    timestamp: new Date().toISOString()
  });
};

export const trackEventRegistration = (eventName: string) => {
  trackEvent('event_registration', { 
    event_name: eventName,
    timestamp: new Date().toISOString()
  });
};

export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup', {
    timestamp: new Date().toISOString()
  });
};

export const trackError = (error: string, context?: string) => {
  trackEvent('error', {
    error_message: error,
    context,
    timestamp: new Date().toISOString(),
    url: typeof window !== 'undefined' ? window.location.href : 'unknown'
  });
};

// Performance monitoring
const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Track Core Web Vitals
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      const metrics = {
        page_load_time: navigation.loadEventEnd - navigation.loadEventStart,
        dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        first_contentful_paint: 0,
        largest_contentful_paint: 0
      };
      
      // Get paint metrics
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          metrics.first_contentful_paint = entry.startTime;
        }
      });
      
      // Get LCP
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.largest_contentful_paint = lastEntry.startTime;
          
          trackEvent('performance_metrics', metrics);
          observer.disconnect();
        });
        
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // Browser doesn't support LCP
        trackEvent('performance_metrics', metrics);
      }
    }
  }
};


export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // Analytics tracking - replace with your preferred analytics service
  if (typeof window !== 'undefined') {
    console.log('Analytics Event:', eventName, properties);
    
    // Example for Google Analytics 4
    if (window.gtag) {
      window.gtag('event', eventName, properties);
    }
    
    // Example for Mixpanel
    if (window.mixpanel) {
      window.mixpanel.track(eventName, properties);
    }
  }
};

export const trackPageView = (page: string) => {
  trackEvent('page_view', { page });
};

export const trackMembershipInterest = (tier: string) => {
  trackEvent('membership_interest', { tier });
};

export const trackEventRegistration = (eventName: string) => {
  trackEvent('event_registration', { event_name: eventName });
};

export const trackNewsletterSignup = () => {
  trackEvent('newsletter_signup');
};

// Input validation and sanitization utilities
import DOMPurify from 'isomorphic-dompurify';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// Email validation with improved regex
export const validateEmail = (email: string): ValidationResult => {
  const errors: string[] = [];
  
  if (!email) {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(email)) {
      errors.push('Please enter a valid email address');
    }
    if (email.length > 254) {
      errors.push('Email address is too long');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Name validation
export const validateName = (name: string, fieldName: string = 'Name'): ValidationResult => {
  const errors: string[] = [];
  
  if (!name) {
    errors.push(`${fieldName} is required`);
  } else {
    if (name.length < 2) {
      errors.push(`${fieldName} must be at least 2 characters long`);
    }
    if (name.length > 100) {
      errors.push(`${fieldName} must be less than 100 characters`);
    }
    // Allow letters, spaces, hyphens, apostrophes, and some international characters
    const nameRegex = /^[a-zA-ZÀ-ÿĀ-žΑ-ωА-я\s\-'\.]+$/;
    if (!nameRegex.test(name)) {
      errors.push(`${fieldName} contains invalid characters`);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Text field validation (for descriptions, messages, etc.)
export const validateText = (text: string, fieldName: string, required: boolean = false, maxLength: number = 2000): ValidationResult => {
  const errors: string[] = [];
  
  if (required && !text) {
    errors.push(`${fieldName} is required`);
  } else if (text) {
    if (text.length > maxLength) {
      errors.push(`${fieldName} must be less than ${maxLength} characters`);
    }
    // Basic check for malicious patterns
    const suspiciousPatterns = [
      /<script[^>]*>/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /data:text\/html/i
    ];
    
    if (suspiciousPatterns.some(pattern => pattern.test(text))) {
      errors.push(`${fieldName} contains invalid content`);
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// URL validation
export const validateUrl = (url: string, required: boolean = false): ValidationResult => {
  const errors: string[] = [];
  
  if (required && !url) {
    errors.push('URL is required');
  } else if (url) {
    try {
      const parsedUrl = new URL(url);
      // Only allow http and https protocols
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        errors.push('URL must use http or https protocol');
      }
      if (url.length > 2048) {
        errors.push('URL is too long');
      }
    } catch {
      errors.push('Please enter a valid URL');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Sanitize text input to prevent XSS
export const sanitizeText = (text: string): string => {
  if (!text) return '';
  
  // Use DOMPurify to sanitize HTML content
  const sanitized = DOMPurify.sanitize(text, {
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: []
  });
  
  // Additional sanitization: remove control characters
  return sanitized.replace(/[\x00-\x1F\x7F]/g, '').trim();
};

// Sanitize HTML content (for rich text areas if needed)
export const sanitizeHtml = (html: string): string => {
  if (!html) return '';
  
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'ol', 'ul', 'li'],
    ALLOWED_ATTR: []
  });
};

// Company name validation
export const validateCompany = (company: string, required: boolean = false): ValidationResult => {
  const errors: string[] = [];
  
  if (required && !company) {
    errors.push('Company name is required');
  } else if (company) {
    if (company.length > 200) {
      errors.push('Company name must be less than 200 characters');
    }
    // Allow alphanumeric, spaces, common business punctuation
    const companyRegex = /^[a-zA-Z0-9\s\-'.,&()]+$/;
    if (!companyRegex.test(company)) {
      errors.push('Company name contains invalid characters');
    }
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// Rate limiting check (simple client-side implementation)
export const checkRateLimit = (key: string, maxAttempts: number = 5, windowMs: number = 15 * 60 * 1000): boolean => {
  const now = Date.now();
  const attempts = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]') as number[];
  
  // Remove old attempts outside the window
  const recentAttempts = attempts.filter(timestamp => now - timestamp < windowMs);
  
  if (recentAttempts.length >= maxAttempts) {
    return false; // Rate limit exceeded
  }
  
  // Add current attempt
  recentAttempts.push(now);
  localStorage.setItem(`rate_limit_${key}`, JSON.stringify(recentAttempts));
  
  return true; // Within rate limit
};
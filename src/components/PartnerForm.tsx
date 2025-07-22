import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';
import { Handshake, ArrowRight } from 'lucide-react';
import { validateEmail, validateName, validateText, validateCompany, sanitizeText, checkRateLimit } from '@/utils/validation';
import { supabase } from '@/integrations/supabase/client';

const PartnerForm: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check
    if (!checkRateLimit('partner_submission', 3, 15 * 60 * 1000)) {
      toast({
        title: "Too Many Requests",
        description: "Please wait before submitting another partnership request.",
        variant: "destructive",
      });
      return;
    }

    // Validate all fields
    const nameValidation = validateName(formData.name);
    const emailValidation = validateEmail(formData.email);
    const companyValidation = validateCompany(formData.company, true);
    const messageValidation = validateText(formData.message, 'Message', false, 1000);

    const errors = [
      ...nameValidation.errors,
      ...emailValidation.errors,
      ...companyValidation.errors,
      ...messageValidation.errors
    ];

    if (errors.length > 0) {
      toast({
        title: "Validation Error",
        description: errors[0],
        variant: "destructive",
      });
      return;
    }

    try {
      // Sanitize inputs before submission
      const sanitizedData = {
        name: sanitizeText(formData.name),
        email: sanitizeText(formData.email).toLowerCase(),
        company: sanitizeText(formData.company),
        message: sanitizeText(formData.message),
        partnership_type: 'general'
      };

      const { error } = await supabase
        .from('partner_submissions')
        .insert([sanitizedData]);

      if (error) {
        console.error('Submission error:', error);
        toast({
          title: "Submission Error",
          description: "There was an error submitting your partnership request. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Partnership Request Submitted!",
        description: "We'll review your request and get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        message: ''
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your partnership request. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="partner-form" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-ukraine-blue/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
              <Handshake className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            {t('form.partner.title')}
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8">
            If you're building toward a shared vision, we'd love to partner.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="partner-name" className="block text-sm font-medium text-foreground mb-2">
                  {t('form.name')} *
                </label>
                <Input
                  id="partner-name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="glass-card border-glass-border"
                  required
                />
              </div>

              <div>
                <label htmlFor="partner-email" className="block text-sm font-medium text-foreground mb-2">
                  {t('form.email')} *
                </label>
                <Input
                  id="partner-email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="glass-card border-glass-border"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="partner-company" className="block text-sm font-medium text-foreground mb-2">
                {t('form.company')} *
              </label>
              <Input
                id="partner-company"
                type="text"
                placeholder="Your company or organization"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                className="glass-card border-glass-border"
                required
              />
            </div>

            <div>
              <label htmlFor="partner-message" className="block text-sm font-medium text-foreground mb-2">
                {t('form.message')}
              </label>
              <Textarea
                id="partner-message"
                placeholder="Tell us about your project and how we might collaborate..."
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="glass-card border-glass-border min-h-[120px]"
                rows={5}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full btn-primary text-lg py-6 rounded-2xl"
            >
              Send Partnership Request
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <p className="text-sm text-muted-foreground text-center">
              We review all partnership requests and typically respond within 24 hours.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default PartnerForm;
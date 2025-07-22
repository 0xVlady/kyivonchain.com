import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import Modal from './Modal';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    partnership_type: 'sponsor'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('partner_submissions')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your partnership application has been submitted successfully.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        partnership_type: 'sponsor'
      });
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t('form.partner.title')}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">{t('form.name')}</label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            className="glass-card border-glass-border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('form.email')}</label>
          <Input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            className="glass-card border-glass-border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('form.company')}</label>
          <Input
            required
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            className="glass-card border-glass-border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('form.partnershipType')}</label>
          <Select
            value={formData.partnership_type}
            onValueChange={(value) => setFormData(prev => ({ ...prev, partnership_type: value }))}
          >
            <SelectTrigger className="glass-card border-glass-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sponsor">{t('form.sponsor')}</SelectItem>
              <SelectItem value="venue">{t('form.venue')}</SelectItem>
              <SelectItem value="technology">{t('form.technology')}</SelectItem>
              <SelectItem value="media">{t('form.media')}</SelectItem>
              <SelectItem value="community">{t('form.community')}</SelectItem>
              <SelectItem value="branding">{t('form.branding')}</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">{t('form.message')}</label>
          <Textarea
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="glass-card border-glass-border"
            rows={4}
            placeholder="Tell us about your partnership proposal..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary"
        >
          {isSubmitting ? t('form.submitting') : t('form.submit')}
        </Button>
      </form>
    </Modal>
  );
};

export default PartnerModal;
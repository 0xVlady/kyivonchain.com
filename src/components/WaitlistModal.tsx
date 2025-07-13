import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import Modal from './Modal';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose, selectedTier }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    membership_tier: selectedTier || 'guest'
  });

  // Update form data when selectedTier changes
  React.useEffect(() => {
    if (selectedTier) {
      setFormData(prev => ({ ...prev, membership_tier: selectedTier }));
    }
  }, [selectedTier]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('waitlist_submissions')
        .insert([formData]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your application has been submitted successfully.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        message: '',
        membership_tier: selectedTier || 'guest'
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
    <Modal isOpen={isOpen} onClose={onClose} title={t('form.join.title')}>
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
            value={formData.company}
            onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
            className="glass-card border-glass-border"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Membership Tier</label>
          <Select
            value={formData.membership_tier}
            onValueChange={(value) => setFormData(prev => ({ ...prev, membership_tier: value }))}
          >
            <SelectTrigger className="glass-card border-glass-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="guest">Guest</SelectItem>
              <SelectItem value="member">Member</SelectItem>
              <SelectItem value="inner-circle">Inner Circle</SelectItem>
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
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary"
        >
          {isSubmitting ? 'Submitting...' : t('form.submit')}
        </Button>
      </form>
    </Modal>
  );
};

export default WaitlistModal;
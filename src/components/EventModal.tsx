import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import Modal from './Modal';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    event_title: '',
    event_description: '',
    expected_attendees: '',
    preferred_date: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('event_submissions')
        .insert([{
          ...formData,
          expected_attendees: formData.expected_attendees ? parseInt(formData.expected_attendees) : null
        }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Your event hosting application has been submitted successfully.",
      });

      setFormData({
        name: '',
        email: '',
        company: '',
        event_title: '',
        event_description: '',
        expected_attendees: '',
        preferred_date: '',
        message: ''
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
    <Modal isOpen={isOpen} onClose={onClose} title={t('form.event.title')}>
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
          <label className="block text-sm font-medium mb-2">Event Title</label>
          <Input
            required
            value={formData.event_title}
            onChange={(e) => setFormData(prev => ({ ...prev, event_title: e.target.value }))}
            className="glass-card border-glass-border"
            placeholder="Name of your event"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Event Description</label>
          <Textarea
            value={formData.event_description}
            onChange={(e) => setFormData(prev => ({ ...prev, event_description: e.target.value }))}
            className="glass-card border-glass-border"
            rows={3}
            placeholder="Brief description of your event"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Expected Attendees</label>
          <Input
            type="number"
            value={formData.expected_attendees}
            onChange={(e) => setFormData(prev => ({ ...prev, expected_attendees: e.target.value }))}
            className="glass-card border-glass-border"
            placeholder="Number of expected attendees"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Preferred Date</label>
          <Input
            value={formData.preferred_date}
            onChange={(e) => setFormData(prev => ({ ...prev, preferred_date: e.target.value }))}
            className="glass-card border-glass-border"
            placeholder="e.g., March 2024, or specific date"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Additional Information</label>
          <Textarea
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            className="glass-card border-glass-border"
            rows={3}
            placeholder="Any additional details about your event..."
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

export default EventModal;
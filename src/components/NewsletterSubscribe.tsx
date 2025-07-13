import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface NewsletterSubscribeProps {
  className?: string;
  placeholder?: string;
  buttonText?: string;
}

const NewsletterSubscribe: React.FC<NewsletterSubscribeProps> = ({
  className = "",
  placeholder = "Enter your email",
  buttonText = "Subscribe"
}) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email: email.trim() }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter",
            variant: "default"
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter",
          variant: "default"
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex space-x-3 ${className}`}>
      <Input 
        type="email"
        placeholder={placeholder}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="glass-card border-glass-border flex-1" 
        disabled={isLoading}
      />
      <Button 
        type="submit"
        className="btn-primary px-6"
        disabled={isLoading}
      >
        {isLoading ? 'Subscribing...' : buttonText}
      </Button>
    </form>
  );
};

export default NewsletterSubscribe;
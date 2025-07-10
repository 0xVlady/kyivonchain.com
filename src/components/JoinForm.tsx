import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Users, Send, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const JoinForm: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    twitter: '',
    tier: '',
    reason: '',
    portfolio: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.tier || !formData.reason) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Show success message
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      telegram: '',
      twitter: '',
      tier: '',
      reason: '',
      portfolio: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="join-hub" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('form.join.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to join Ukraine's premier Web3 community? Fill out the form below 
              to apply for our waiting list and get early access to the hub.
            </p>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-8"></div>
          </div>

          {/* Form */}
          <Card className="glass-card border-0 shadow-card">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-center text-foreground">
                Membership Application
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      {t('form.name')} *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="glass-card border-glass-border"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      {t('form.email')} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="glass-card border-glass-border"
                      required
                    />
                  </div>
                </div>

                {/* Social Handles */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="telegram" className="text-foreground font-medium">
                      Telegram Handle
                    </Label>
                    <Input
                      id="telegram"
                      type="text"
                      placeholder="@yourtelegram"
                      value={formData.telegram}
                      onChange={(e) => handleInputChange('telegram', e.target.value)}
                      className="glass-card border-glass-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitter" className="text-foreground font-medium">
                      X (Twitter) Handle
                    </Label>
                    <Input
                      id="twitter"
                      type="text"
                      placeholder="@yourtwitter"
                      value={formData.twitter}
                      onChange={(e) => handleInputChange('twitter', e.target.value)}
                      className="glass-card border-glass-border"
                    />
                  </div>
                </div>

                {/* Membership Tier */}
                <div className="space-y-2">
                  <Label htmlFor="tier" className="text-foreground font-medium">
                    Preferred Membership Tier *
                  </Label>
                  <Select value={formData.tier} onValueChange={(value) => handleInputChange('tier', value)}>
                    <SelectTrigger className="glass-card border-glass-border">
                      <SelectValue placeholder="Select your preferred tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="guest">Guest (1 Day Free Pass)</SelectItem>
                      <SelectItem value="member">Member ($99/month)</SelectItem>
                      <SelectItem value="closed">Closed Community (By Invitation)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Reason */}
                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-foreground font-medium">
                    Why do you want to join KYIV.ONCHAIN? *
                  </Label>
                  <Textarea
                    id="reason"
                    placeholder="Tell us about your Web3 background, current projects, and what you hope to achieve by joining our community..."
                    value={formData.reason}
                    onChange={(e) => handleInputChange('reason', e.target.value)}
                    className="glass-card border-glass-border min-h-[120px]"
                    required
                  />
                </div>

                {/* Portfolio */}
                <div className="space-y-2">
                  <Label htmlFor="portfolio" className="text-foreground font-medium">
                    Portfolio/Project Links (Optional)
                  </Label>
                  <Input
                    id="portfolio"
                    type="url"
                    placeholder="https://github.com/yourproject or https://yourportfolio.com"
                    value={formData.portfolio}
                    onChange={(e) => handleInputChange('portfolio', e.target.value)}
                    className="glass-card border-glass-border"
                  />
                </div>

                {/* Benefits Reminder */}
                <div className="glass-card p-6 rounded-2xl bg-primary/5 border border-primary/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What You'll Get:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Access to Ukraine's premier Web3 community</li>
                        <li>• Underground workspace safe during air raids</li>
                        <li>• Solana NFT membership passport</li>
                        <li>• XP gamification system with rewards</li>
                        <li>• Exclusive events and networking opportunities</li>
                        <li>• Partner discounts and governance rights</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full btn-primary py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('form.submit')}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By submitting this form, you agree to join our community and follow our guidelines. 
                  We'll review your application within 48 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JoinForm;
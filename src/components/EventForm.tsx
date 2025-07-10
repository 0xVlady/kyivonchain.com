import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Calendar, Send, Users, Mic, Video, Projector } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const EventForm: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventTitle: '',
    description: '',
    preferredDate: '',
    audienceSize: '',
    ecosystem: '',
    techNeeds: [] as string[]
  });

  const techOptions = [
    { id: 'projector', label: 'Projector & Screen', icon: Projector },
    { id: 'microphone', label: 'Microphone & Audio', icon: Mic },
    { id: 'livestream', label: 'Livestream Setup', icon: Video },
    { id: 'recording', label: 'Event Recording', icon: Video },
    { id: 'lighting', label: 'Professional Lighting', icon: Video },
    { id: 'catering', label: 'Catering & Refreshments', icon: Users }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.eventTitle || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Show success message
    toast({
      title: "Event Proposal Submitted!",
      description: "We'll review your event proposal and get back to you within 48 hours.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      eventTitle: '',
      description: '',
      preferredDate: '',
      audienceSize: '',
      ecosystem: '',
      techNeeds: []
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTechNeedChange = (techId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      techNeeds: checked 
        ? [...prev.techNeeds, techId]
        : prev.techNeeds.filter(id => id !== techId)
    }));
  };

  return (
    <section id="host-event" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-ukraine-blue to-blue-400 rounded-2xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('form.event.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have an idea for a Web3 event? Partner with KYIV.ONCHAIN to bring your vision to life 
              in Ukraine's premier Web3 community space.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-ukraine-blue to-blue-400 mx-auto rounded-full mt-8"></div>
          </div>

          {/* Form */}
          <Card className="glass-card border-0 shadow-card">
            <CardHeader className="pb-6">
              <CardTitle className="text-2xl text-center text-foreground">
                Event Proposal Form
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="event-name" className="text-foreground font-medium">
                      Your Name *
                    </Label>
                    <Input
                      id="event-name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="glass-card border-glass-border"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="event-email" className="text-foreground font-medium">
                      Contact Email *
                    </Label>
                    <Input
                      id="event-email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="glass-card border-glass-border"
                      required
                    />
                  </div>
                </div>

                {/* Event Details */}
                <div className="space-y-2">
                  <Label htmlFor="event-title" className="text-foreground font-medium">
                    Event Title *
                  </Label>
                  <Input
                    id="event-title"
                    type="text"
                    placeholder="What's the name of your event?"
                    value={formData.eventTitle}
                    onChange={(e) => handleInputChange('eventTitle', e.target.value)}
                    className="glass-card border-glass-border"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event-description" className="text-foreground font-medium">
                    Event Description *
                  </Label>
                  <Textarea
                    id="event-description"
                    placeholder="Describe your event, its goals, target audience, and what makes it special..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="glass-card border-glass-border min-h-[120px]"
                    required
                  />
                </div>

                {/* Event Logistics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="preferred-date" className="text-foreground font-medium">
                      Preferred Date
                    </Label>
                    <Input
                      id="preferred-date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      className="glass-card border-glass-border"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="audience-size" className="text-foreground font-medium">
                      Expected Audience Size
                    </Label>
                    <Select value={formData.audienceSize} onValueChange={(value) => handleInputChange('audienceSize', value)}>
                      <SelectTrigger className="glass-card border-glass-border">
                        <SelectValue placeholder="How many attendees?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">10-25 people</SelectItem>
                        <SelectItem value="medium">25-50 people</SelectItem>
                        <SelectItem value="large">50-100 people</SelectItem>
                        <SelectItem value="xlarge">100+ people</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Ecosystem */}
                <div className="space-y-2">
                  <Label htmlFor="ecosystem" className="text-foreground font-medium">
                    Blockchain Ecosystem Focus
                  </Label>
                  <Select value={formData.ecosystem} onValueChange={(value) => handleInputChange('ecosystem', value)}>
                    <SelectTrigger className="glass-card border-glass-border">
                      <SelectValue placeholder="Which ecosystem is your event focused on?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="solana">Solana</SelectItem>
                      <SelectItem value="ethereum">Ethereum</SelectItem>
                      <SelectItem value="multichain">Multi-chain</SelectItem>
                      <SelectItem value="bitcoin">Bitcoin</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                      <SelectItem value="agnostic">Blockchain Agnostic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Technical Needs */}
                <div className="space-y-4">
                  <Label className="text-foreground font-medium">
                    Technical Requirements
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {techOptions.map((option) => (
                      <div key={option.id} className="flex items-center space-x-3 p-3 glass-card rounded-xl">
                        <Checkbox
                          id={option.id}
                          checked={formData.techNeeds.includes(option.id)}
                          onCheckedChange={(checked) => handleTechNeedChange(option.id, !!checked)}
                        />
                        <div className="flex items-center space-x-2">
                          <option.icon className="w-4 h-4 text-primary" />
                          <Label htmlFor={option.id} className="text-foreground text-sm cursor-pointer">
                            {option.label}
                          </Label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info Box */}
                <div className="glass-card p-6 rounded-2xl bg-ukraine-blue/5 border border-ukraine-blue/20">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-ukraine-blue to-blue-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">What We Provide:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Full venue setup with professional AV equipment</li>
                        <li>• Marketing support and community promotion</li>
                        <li>• Live streaming and recording capabilities</li>
                        <li>• Networking space and refreshments</li>
                        <li>• Event coordination and support staff</li>
                        <li>• XP rewards for attendees through our gamification system</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-ukraine-blue to-blue-400 hover:from-ukraine-blue/90 hover:to-blue-400/90 text-white py-4 text-lg rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Event Proposal
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  We review all event proposals carefully. You'll hear back from our team within 48 hours 
                  with next steps or questions about your proposal.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventForm;
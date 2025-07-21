import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Save, X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string | null;
  link: string | null;
}

const EventManagement: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [isAddingEvent, setIsAddingEvent] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: 'KYIV.ONCHAIN',
    description: '',
    link: ''
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await (supabase as any)
        .from('calendar_events')
        .select('*')
        .order('date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch events',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      date: '',
      time: '',
      location: 'KYIV.ONCHAIN',
      description: '',
      link: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingEvent) {
        // Update existing event
        const { error } = await (supabase as any)
          .from('calendar_events')
          .update({
            title: formData.title,
            date: formData.date,
            time: formData.time,
            location: formData.location,
            description: formData.description || null,
            link: formData.link || null
          })
          .eq('id', editingEvent.id);

        if (error) throw error;
        
        toast({
          title: 'Success',
          description: 'Event updated successfully'
        });
      } else {
        // Create new event
        const { error } = await (supabase as any)
          .from('calendar_events')
          .insert({
            title: formData.title,
            date: formData.date,
            time: formData.time,
            location: formData.location,
            description: formData.description || null,
            link: formData.link || null
          });

        if (error) throw error;
        
        toast({
          title: 'Success',
          description: 'Event created successfully'
        });
      }

      resetForm();
      setEditingEvent(null);
      setIsAddingEvent(false);
      fetchEvents();
    } catch (error) {
      console.error('Error saving event:', error);
      toast({
        title: 'Error',
        description: 'Failed to save event',
        variant: 'destructive'
      });
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      date: event.date,
      time: event.time,
      location: event.location,
      description: event.description || '',
      link: event.link || ''
    });
    setIsAddingEvent(true);
  };

  const handleDelete = async (eventId: string) => {
    if (!confirm('Are you sure you want to delete this event?')) return;

    try {
      const { error } = await (supabase as any)
        .from('calendar_events')
        .delete()
        .eq('id', eventId);

      if (error) throw error;
      
      toast({
        title: 'Success',
        description: 'Event deleted successfully'
      });
      
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete event',
        variant: 'destructive'
      });
    }
  };

  const handleCancel = () => {
    resetForm();
    setEditingEvent(null);
    setIsAddingEvent(false);
  };

  const handlePasswordChange = () => {
    if (newPassword.trim()) {
      // In a real app, this would make an API call to update the password
      localStorage.setItem('adminPassword', newPassword);
      toast({
        title: 'Success',
        description: 'Admin password updated successfully'
      });
      setNewPassword('');
      setIsSettingsOpen(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Events</h2>
        <div className="space-x-2">
          <Button
            onClick={() => setIsSettingsOpen(true)}
            variant="outline"
            size="sm"
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button
            onClick={() => setIsAddingEvent(true)}
            className="btn-primary"
            size="sm"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      {/* Add/Edit Event Form */}
      {isAddingEvent && (
        <Card>
          <CardHeader>
            <CardTitle>
              {editingEvent ? 'Edit Event' : 'Add New Event'}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Event title"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Location</label>
                  <Input
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="Event location"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Date</label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Time</label>
                  <Input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Event description (optional)"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Registration Link</label>
                <Input
                  type="url"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  placeholder="https://lu.ma/your-event (optional)"
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="btn-primary">
                  <Save className="w-4 h-4 mr-2" />
                  {editingEvent ? 'Update Event' : 'Create Event'}
                </Button>
                <Button type="button" variant="outline" onClick={handleCancel}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Events List */}
      <div className="space-y-4">
        {events.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">No events found. Add your first event!</p>
            </CardContent>
          </Card>
        ) : (
          events.map((event) => (
            <Card key={event.id}>
              <CardContent className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{event.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {event.date} at {event.time} • {event.location}
                    </p>
                    {event.description && (
                      <p className="text-sm text-muted-foreground mb-2">{event.description}</p>
                    )}
                    {event.link && (
                      <a 
                        href={event.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        Registration Link
                      </a>
                    )}
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button
                      onClick={() => handleEdit(event)}
                      variant="outline"
                      size="sm"
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      onClick={() => handleDelete(event.id)}
                      variant="outline"
                      size="sm"
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Settings Modal */}
      <Dialog open={isSettingsOpen} onOpenChange={setIsSettingsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Admin Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Change Admin Password
              </label>
              <div className="space-y-2">
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Enter new password"
                />
                <Button onClick={handlePasswordChange} className="btn-primary">
                  Update Password
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EventManagement;
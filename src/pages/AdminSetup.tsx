import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import SEOHead from '@/components/SEOHead';
import { createAdminUser } from '@/utils/adminHelpers';

const AdminSetup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [hasAdmins, setHasAdmins] = useState(false);
  const [checkingAdmins, setCheckingAdmins] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    checkExistingAdmins();
  }, []);

  const checkExistingAdmins = async () => {
    try {
      const { data, error } = await supabase
        .from('user_roles')
        .select('id')
        .eq('role', 'admin')
        .limit(1);

      if (error) {
        console.error('Error checking for existing admins:', error);
      } else {
        setHasAdmins(data && data.length > 0);
      }
    } catch (error) {
      console.error('Error checking for existing admins:', error);
    } finally {
      setCheckingAdmins(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        title: 'Error',
        description: 'Passwords do not match',
        variant: 'destructive'
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: 'Error',
        description: 'Password must be at least 6 characters long',
        variant: 'destructive'
      });
      return;
    }

    setLoading(true);

    try {
      const result = await createAdminUser(email, password);
      
      if (result.success) {
        toast({
          title: 'Success',
          description: 'Admin user created successfully! Check your email for confirmation.',
        });
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        checkExistingAdmins(); // Refresh the admin check
      } else {
        toast({
          title: 'Error',
          description: result.error?.message || 'Failed to create admin user',
          variant: 'destructive'
        });
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An unexpected error occurred',
        variant: 'destructive'
      });
    } finally {
      setLoading(false);
    }
  };

  if (checkingAdmins) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (hasAdmins) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <SEOHead title="Admin Setup - KYIV.ONCHAIN" />
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Admin Setup Complete</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <Alert>
              <AlertDescription>
                Admin users have already been set up for this system. If you need to create additional admins, please contact an existing administrator.
              </AlertDescription>
            </Alert>
            <Button 
              className="mt-4 w-full"
              onClick={() => window.location.href = '/'}
            >
              Return to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <SEOHead title="Admin Setup - KYIV.ONCHAIN" />
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">Create First Admin</CardTitle>
        </CardHeader>
        <CardContent>
          <Alert className="mb-6">
            <AlertDescription>
              This is a one-time setup to create the first administrator for the system. Additional admins can be created later through the admin panel.
            </AlertDescription>
          </Alert>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
                placeholder="admin@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                disabled={loading}
                minLength={6}
                placeholder="Minimum 6 characters"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                disabled={loading}
                minLength={6}
                placeholder="Confirm your password"
              />
            </div>
            
            <Button type="submit" disabled={loading} className="w-full btn-primary">
              {loading ? 'Creating Admin...' : 'Create Admin User'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminSetup;
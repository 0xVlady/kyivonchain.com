
import React, { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import EventManagement from './EventManagement';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  // Get admin password from localStorage or use default
  const getAdminPassword = () => {
    return localStorage.getItem('adminPassword') || '9390888';
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password === getAdminPassword()) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      setError('Invalid password');
    }
    setIsLoading(false);
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Simple validation - in production this would be proper verification
    if (resetEmail === 'admin@kyiv.onchain' || resetEmail.includes('@')) {
      // Reset password to default
      localStorage.removeItem('adminPassword');
      setResetSuccess(true);
      setShowForgotPassword(false);
      setTimeout(() => {
        setResetSuccess(false);
      }, 5000);
    } else {
      setError('Please enter a valid admin email address');
    }
    setIsLoading(false);
  };

  const handleClose = () => {
    setIsAuthenticated(false);
    setPassword('');
    setError('');
    setShowForgotPassword(false);
    setResetEmail('');
    setResetSuccess(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {isAuthenticated ? 'Event Management' : 'Admin Login'}
          </DialogTitle>
        </DialogHeader>

        {!isAuthenticated ? (
          <div className="p-6">
            {resetSuccess && (
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-md">
                <p className="text-blue-800 text-sm">
                  If the email address you entered is associated with an admin account, a password reset email has been sent.
                </p>
              </div>
            )}
            
            {!showForgotPassword ? (
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-2">
                    Admin Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter admin password"
                      className="pr-10"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                </div>
                <Button 
                  type="submit" 
                  className="w-full btn-primary"
                  disabled={isLoading || !password.trim()}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </Button>
                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="text-sm text-muted-foreground hover:text-foreground underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <label htmlFor="resetEmail" className="block text-sm font-medium mb-2">
                    Admin Email Address
                  </label>
                  <Input
                    id="resetEmail"
                    type="email"
                    value={resetEmail}
                    onChange={(e) => setResetEmail(e.target.value)}
                    placeholder="Enter your admin email"
                    required
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error}</p>
                  )}
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter the email address associated with your admin account
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    type="submit" 
                    className="flex-1 btn-primary"
                    disabled={isLoading || !resetEmail.trim()}
                  >
                    {isLoading ? 'Sending...' : 'Send Reset Email'}
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => {
                      setShowForgotPassword(false);
                      setError('');
                      setResetEmail('');
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            )}
          </div>
        ) : (
          <div className="overflow-y-auto max-h-[calc(90vh-100px)]">
            <EventManagement />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default AdminModal;

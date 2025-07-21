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

  // Default admin password - in production this should be stored securely
  const ADMIN_PASSWORD = 'admin123';

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      setError('Invalid password');
    }
    setIsLoading(false);
  };

  const handleClose = () => {
    setIsAuthenticated(false);
    setPassword('');
    setError('');
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
            </form>
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
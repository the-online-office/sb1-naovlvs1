import React, { useState } from 'react';
import { X, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useAuth } from '../contexts/AuthContext';
import { SignInModal } from './auth/SignInModal';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { isAuthenticated, logout } = useAuth();
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSignOut = () => {
    logout();
    onClose();
  };

  const handleSignInClick = () => {
    setIsRegistering(false);
    setIsSignInModalOpen(true);
    onClose();
  };

  const handleSignUpClick = () => {
    setIsRegistering(true);
    setIsSignInModalOpen(true);
    onClose();
  };

  return (
    <>
    <div 
      className={`fixed inset-y-0 right-0 w-[280px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <Logo isScrolled={true} />
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
      
      <nav className="p-4">
        <div className="space-y-4">
          <Link 
            to="/talent"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={onClose}
          >
            Find & Hire Talent
          </Link>
          <Link 
            to="/jobs"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={onClose}
          >
            Find Jobs
          </Link>
          <Link 
            to="/jobs/create"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={onClose}
          >
            Post Job
          </Link>
          <Link
            to="/packages"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            onClick={onClose}
          >
            Shop Packages
          </Link>
        </div>

        <div className="mt-8 space-y-4">
          {isAuthenticated ? (
            <button
              onClick={handleSignOut}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg border border-gray-200"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign out</span>
            </button>
          ) : (
            <>
              <button 
                onClick={handleSignInClick}
                className="w-full px-4 py-2 text-center text-gray-700 hover:bg-gray-100 rounded-lg border border-gray-200"
              >
                Sign in
              </button>
              <button 
                onClick={handleSignUpClick}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center"
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
    <SignInModal
      isOpen={isSignInModalOpen}
      onClose={() => setIsSignInModalOpen(false)}
      defaultView={isRegistering ? 'register' : 'login'}
    />
    </>
  );
}
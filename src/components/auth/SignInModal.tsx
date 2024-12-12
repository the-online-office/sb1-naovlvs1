import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { SignInForm } from './SignInForm';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultView?: 'login' | 'register';
}

export function SignInModal({ isOpen, onClose, defaultView = 'login' }: SignInModalProps) {
  const [isSignIn, setIsSignIn] = useState(defaultView === 'login');

  // Update the form view when defaultView changes
  useEffect(() => {
    setIsSignIn(defaultView === 'login');
  }, [defaultView]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal */}
        <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {isSignIn ? 'Welcome back!' : 'Create account'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isSignIn ? "Don't have an account? " : "Already have an account? "}
              <button 
                onClick={() => setIsSignIn(!isSignIn)}
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                {isSignIn ? 'Register here' : 'Login here'}
              </button>
            </p>
          </div>

          <SignInForm onClose={onClose} isSignIn={isSignIn} />
        </div>
      </div>
    </div>
  );
}
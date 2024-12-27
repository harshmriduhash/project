import React from 'react';
import { X, Mail, Lock, Github } from 'lucide-react';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'signup';
};

export function AuthModal({ isOpen, onClose, mode }: AuthModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute right-4 top-4">
          <X className="h-6 w-6 text-gray-400" />
        </button>
        
        <h2 className="text-2xl font-bold text-center mb-6">
          {mode === 'login' ? 'Welcome Back' : 'Create Account'}
        </h2>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600">
            <img src="https://www.google.com/favicon.ico" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="mt-1 relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  className="pl-10 w-full rounded-lg border border-gray-300 py-2 px-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700">
              {mode === 'login' ? 'Sign In' : 'Create Account'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
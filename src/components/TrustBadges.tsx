import React from 'react';
import { Star, Shield, CreditCard, Award, CheckCircle } from 'lucide-react';

export function TrustBadges() {
  return (
    <section className="bg-white py-8 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Trustpilot */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center space-x-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-[#00b67a] fill-current" />
              ))}
            </div>
            <p className="text-sm font-medium text-gray-600 text-center">50,000+ Reviews on Trustpilot</p>
          </div>

          {/* Google Reviews */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-2">
              <div className="p-2 rounded-full bg-blue-100">
                <svg viewBox="0 0 24 24" className="h-6 w-6">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
              </div>
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
              <span className="text-lg font-bold text-gray-800">4.9</span>
            </div>
            <p className="text-sm font-medium text-gray-600 text-center">Google Business Reviews</p>
          </div>

          {/* BBB */}
          <div className="flex flex-col items-center justify-center">
            <div className="p-2 rounded-full bg-blue-100 mb-2">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <p className="text-sm font-medium text-gray-600 text-center">BBB Accredited Business</p>
          </div>

          {/* Secure Checkout */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2 mb-2">
              <div className="p-2 rounded-full bg-gray-100">
                <CreditCard className="h-6 w-6 text-gray-700" />
              </div>
              <div className="p-2 rounded-full bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 text-center">Secure Checkout & SSL</p>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col items-center justify-center">
            <div className="p-2 rounded-full bg-purple-100 mb-2">
              <Award className="h-8 w-8 text-purple-600" />
            </div>
            <p className="text-sm font-medium text-gray-600 text-center">Multiple Payment Options</p>
          </div>
        </div>
      </div>
    </section>
  );
}
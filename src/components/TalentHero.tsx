import React from 'react';
import { Star, Shield, CreditCard } from 'lucide-react';

export function TalentHero() {
  return (
    <div className="relative min-h-[600px] bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
          alt="Remote team collaboration"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-48 pb-32">
          <div className="max-w-3xl">
            <h1 className="text-[2.23rem] font-extrabold text-white mb-6 tracking-tight">
              Find exceptional talent for your next project
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Connect with skilled professionals ready to bring your vision to life. From development to design, find the perfect match for your needs.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-yellow-400/10">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <span className="text-white text-sm">4.9/5 average talent rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-green-400/10">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-white text-sm">Verified professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-blue-400/10">
                  <CreditCard className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-white text-sm">Secure payments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
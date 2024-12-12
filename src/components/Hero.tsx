import React, { useState } from 'react';
import { SearchTabs } from './SearchTabs';
import { SearchForm } from './SearchForm';
import { HeroImage } from './HeroImage';
import { Star, Shield, CreditCard, Search, Play } from 'lucide-react';
import { VideoPopup } from './VideoPopup';

export function Hero() {
  const [activeTab, setActiveTab] = useState<'buyers' | 'sellers'>('buyers');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-brand-900 overflow-hidden">
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/95 via-brand-900/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 via-brand-900/50 to-brand-900/90 z-20" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(98,249,201,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(98,249,201,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,166,81,0.1),transparent_70%)]" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2362F9C9' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }}
        />
        
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000"
          alt="Remote team collaboration"
          className="absolute inset-0 w-full h-full object-cover opacity-[0.07] mix-blend-luminosity"
        />
      </div>
      
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
            {/* Left content */}
            <div className="col-span-1 lg:col-span-6 flex flex-col px-4 sm:px-6 lg:px-8 pt-20 lg:pt-28 relative z-20">
              <div className="text-center lg:text-left">
                <h1 className="text-[2.23rem] font-extrabold text-white mb-6 tracking-tight">
                  The Future of <br/>
                  <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-transparent bg-clip-text animate-gradient bg-300% bg-clip-text">Remote Work</span>
                </h1>
                <p className="text-xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  Hire anyone, anywhere. The future of global remote work & collaboration is here
                </p>

                {/* Video Link */}
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center text-brand-700 hover:text-brand-600 transition-colors mb-10 mx-auto lg:mx-0"
                >
                  <div className="p-2 rounded-full bg-brand-700/20 mr-2">
                    <Play className="h-4 w-4 fill-current" />
                  </div>
                  <span className="font-medium">See how it works</span>
                </button>

                {/* Mini trust badges */}
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 mb-2">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-brand-700/20">
                      <Star className="h-5 w-5 text-brand-700 fill-current" />
                    </div>
                    <span className="text-white text-sm">Trustpilot 4.8/5</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-brand-700/20">
                      <Shield className="h-5 w-5 text-brand-700" />
                    </div>
                    <span className="text-white text-sm">Verified Business</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-full bg-brand-700/20">
                      <CreditCard className="h-5 w-5 text-brand-700" />
                    </div>
                    <span className="text-white text-sm">Secure Payments</span>
                  </div>
                </div>
              </div>

              {/* Mobile search */}
              <div className="lg:hidden relative z-30 mt-8">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg mx-auto max-w-sm">
                  <div className="relative p-4">
                    <input
                      type="text"
                      placeholder="Search for services..."
                      className="w-full px-4 py-3 pr-12 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
                    />
                    <button className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Search className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right content - Image (hidden on mobile) */}
            <div className="col-span-1 lg:col-span-6 relative hidden lg:block">
              <HeroImage />
            </div>
          </div>

          {/* Desktop search widget */}
          <div className="absolute bottom-12 left-0 right-0 z-30 px-4 sm:px-6 lg:px-8 hidden lg:block">
            <div className="max-w-7xl mx-auto">
              <div className="bg-white/10 backdrop-blur-lg rounded-t-xl shadow-xl overflow-hidden">
                <SearchTabs activeTab={activeTab} onTabChange={setActiveTab} />
                <SearchForm type={activeTab} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <VideoPopup 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
      />
    </div>
  );
}
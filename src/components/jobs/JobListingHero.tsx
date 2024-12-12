import React from 'react';
import { Star, Shield, CreditCard, Search } from 'lucide-react';

export function JobListingHero() {
  return (
    <div className="relative min-h-[600px] bg-brand-900 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
          alt="Remote work"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/95 via-brand-900/90 to-transparent z-10" />
        
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
      </div>
      
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
          <div className="max-w-3xl">
            <h1 className="text-[2.23rem] font-extrabold text-white mb-6 tracking-tight">
              Find Your Next{' '}
              <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-700 text-transparent bg-clip-text animate-gradient bg-300%">Remote Opportunity</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed">
              Browse through thousands of remote jobs from top companies. Work from anywhere, anytime.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-8 mt-8">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-brand-700/20">
                  <Star className="h-5 w-5 text-brand-700 fill-current" />
                </div>
                <span className="text-white text-sm">Over 10,000 jobs posted</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-brand-700/20">
                  <Shield className="h-5 w-5 text-brand-700" />
                </div>
                <span className="text-white text-sm">Verified employers</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-brand-700/20">
                  <CreditCard className="h-5 w-5 text-brand-700" />
                </div>
                <span className="text-white text-sm">Secure payments</span>
              </div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="mt-12">
            <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/10 max-w-7xl mx-auto">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-700 text-white placeholder-gray-400"
                    />
                  </div>
                </div>
                <div className="col-span-3">
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white appearance-none">
                    <option>Select Category</option>
                    <option>Web Development</option>
                    <option>Mobile Development</option>
                    <option>UI/UX Design</option>
                  </select>
                </div>
                <div className="col-span-2 flex">
                  <button className="w-full bg-brand-700 text-gray-900 py-3 rounded-lg hover:bg-brand-600 transition-colors">
                    <Search className="h-5 w-5 mx-auto" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
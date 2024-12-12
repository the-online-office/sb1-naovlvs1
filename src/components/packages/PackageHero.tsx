import React from 'react';
import { Star, Shield, CreditCard, Search, Filter } from 'lucide-react';

export function PackageHero() {
  return (
    <div className="relative min-h-[300px] bg-gray-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
          alt="Development services"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
          <div className="max-w-3xl">
            <h1 className="text-[2.23rem] font-extrabold text-white mb-6 tracking-tight">
              Professional Development Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Choose from our range of pre-packaged solutions designed to meet your business needs.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-yellow-400/10">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <span className="text-white text-sm">4.9/5 average rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-green-400/10">
                  <Shield className="h-5 w-5 text-green-400" />
                </div>
                <span className="text-white text-sm">Money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-2 rounded-full bg-blue-400/10">
                  <CreditCard className="h-5 w-5 text-blue-400" />
                </div>
                <span className="text-white text-sm">Secure payments</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-12">
            <div className="max-w-7xl mx-auto bg-white rounded-full shadow-lg">
              <div className="flex items-center p-2">
                <div className="flex-1 flex items-center min-w-0">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search packages..."
                      className="w-full pl-12 pr-4 py-3 border-0 focus:ring-0 placeholder-gray-400"
                    />
                  </div>
                  <div className="flex items-center border-l border-gray-200">
                    <select className="w-48 px-6 py-3 border-0 focus:ring-0 text-gray-700">
                      <option>All Categories</option>
                      <option>Web Development</option>
                      <option>Mobile Development</option>
                      <option>UI/UX Design</option>
                    </select>
                  </div>
                  <div className="flex items-center border-l border-gray-200">
                    <button className="px-6 py-3 text-gray-700 hover:text-gray-900 flex items-center">
                      <Filter className="h-5 w-5 mr-2" />
                      Filters
                    </button>
                  </div>
                  <div className="flex items-center border-l border-gray-200">
                    <select className="w-48 px-6 py-3 border-0 focus:ring-0 text-gray-700">
                      <option>Highest Rated</option>
                      <option>Lowest Price</option>
                      <option>Highest Price</option>
                      <option>Most Popular</option>
                    </select>
                  </div>
                </div>
                <button className="ml-2 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
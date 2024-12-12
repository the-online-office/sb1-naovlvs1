import React, { useState } from 'react';
import { Search, Building2, Grid } from 'lucide-react';
import { PopularSearches } from './PopularSearches';

interface SearchFormProps {
  type: 'buyers' | 'sellers';
}

export function SearchForm({ type }: SearchFormProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handlePopularSearch = (search: string) => {
    setSearchQuery(search);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-12 gap-4">
        <div className="relative col-span-5">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <div className="p-1.5 rounded-lg bg-white/10">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for anything"
            className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white placeholder-gray-400"
          />
        </div>
        
        <div className="relative col-span-3">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <div className="p-1.5 rounded-lg bg-white/10">
              <Building2 className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <select className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-white">
            <option value="">Industry</option>
            <option value="tech">Technology</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <div className="relative col-span-3">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <div className="p-1.5 rounded-lg bg-white/10">
              <Grid className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <select className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500 text-white">
            <option value="">Category</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="writing">Writing</option>
          </select>
        </div>

        <div className="col-span-1">
          <button className="w-full bg-orange-500 text-white rounded-lg px-6 py-3 hover:bg-orange-600 transition-colors flex items-center justify-center">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>

      <PopularSearches onSelect={handlePopularSearch} />
    </div>
  );
}
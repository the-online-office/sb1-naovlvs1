import React, { useState } from 'react';
import { Star, Globe, Briefcase } from 'lucide-react';

interface TalentFiltersProps {
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
}

const industries = [
  'Technology',
  'Design',
  'Marketing',
  'Writing',
  'Finance',
  'Business',
  'Legal'
];

export function TalentFilters({ priceRange, onPriceRangeChange }: TalentFiltersProps) {
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [radius, setRadius] = useState(50);

  return (
    <div className="w-64 bg-white rounded-lg shadow-sm p-6 space-y-8">
      {/* Salary Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Hourly Rate</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label className="text-xs text-gray-500 mb-1 block">Min ($)</label>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-500 mb-1 block">Max ($)</label>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[1]}
            onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option>Hourly Rate</option>
            <option>Monthly Rate</option>
            <option>Project Rate</option>
          </select>
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-4 w-4 ${
                      index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="ml-2 text-sm text-gray-600">& Up</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Skills Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Skills</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Add skills..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800">
            React
            <button className="ml-1 text-blue-600 hover:text-blue-800">×</button>
          </span>
        </div>
      </div>

      {/* Languages Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Languages</h3>
        <div className="space-y-2">
          {['English', 'Spanish', 'French', 'German', 'Chinese'].map((language) => (
            <label key={language} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLanguages.includes(language)}
                onChange={() => {
                  setSelectedLanguages(prev =>
                    prev.includes(language)
                      ? prev.filter(l => l !== language)
                      : [...prev, language]
                  );
                }}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">{language}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Location</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter location..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <div>
            <label className="text-xs text-gray-500 mb-1 block">
              Radius: {radius} miles
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={radius}
              onChange={(e) => setRadius(parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      {/* Talent Type */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Talent Type</h3>
        <div className="grid grid-cols-2 gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            Individual
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm hover:bg-gray-50">
            Company
          </button>
        </div>
      </div>

      {/* Industry Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Industry</h3>
        <div className="space-y-2">
          {industries.map((industry) => (
            <label key={industry} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedIndustries.includes(industry)}
                onChange={() => {
                  setSelectedIndustries(prev =>
                    prev.includes(industry)
                      ? prev.filter(i => i !== industry)
                      : [...prev, industry]
                  );
                }}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">{industry}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Search } from 'lucide-react';

interface PackageFiltersProps {
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: 'all', name: 'All Packages' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Development' },
  { id: 'design', name: 'UI/UX Design' },
  { id: 'marketing', name: 'Digital Marketing' },
  { id: 'content', name: 'Content Creation' }
];

export function PackageFilters({
  priceRange,
  onPriceRangeChange,
  selectedCategory,
  onCategoryChange
}: PackageFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search packages..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Min ($)</label>
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) => onPriceRangeChange([parseInt(e.target.value), priceRange[1]])}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div>
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
            max="2000"
            value={priceRange[1]}
            onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
        </div>
      </div>

      {/* Delivery Time */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Delivery Time</h3>
        <div className="space-y-2">
          {['Up to 7 days', 'Up to 14 days', 'Up to 30 days'].map((time) => (
            <label key={time} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="delivery-time"
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">{time}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="rating"
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">{rating}+ stars</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Tag } from 'lucide-react';

interface PopularSearchesProps {
  onSelect: (search: string) => void;
}

const popularSearches = [
  'SEO services',
  'UX packages',
  'Web development',
  'Logo design',
  'Content writing',
  'Social media marketing',
  'Mobile app development',
  'WordPress development'
];

export function PopularSearches({ onSelect }: PopularSearchesProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 mt-4">
      <span className="text-gray-400 flex items-center">
        <Tag className="h-4 w-4 mr-2" />
        Popular:
      </span>
      {popularSearches.map((search) => (
        <button
          key={search}
          onClick={() => onSelect(search)}
          className="px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-sm text-gray-300 transition-colors"
        >
          {search}
        </button>
      ))}
    </div>
  );
}
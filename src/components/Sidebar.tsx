import React from 'react';
import { ChevronDown } from 'lucide-react';

export function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-md p-4 hidden lg:block">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {['Computers', 'Peripherals', 'Networking', 'Components', 'Accessories'].map((category) => (
          <li key={category}>
            <button className="w-full flex items-center justify-between p-2 text-gray-700 hover:bg-gray-100 rounded-md">
              <span>{category}</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
      
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Price Range</h2>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="1000"
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$1000</span>
          </div>
        </div>
      </div>
    </div>
  );
}
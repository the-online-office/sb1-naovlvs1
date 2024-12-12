import React from 'react';
import { Tag } from 'lucide-react';

export function TopBanner() {
  return (
    <div className="bg-[#62f9c9]/30 backdrop-blur-sm py-1.5 hidden xl:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <Tag className="h-4 w-4 mr-2 text-gray-900" />
        <a 
          href="/packages" 
          className="text-sm text-gray-900 hover:text-gray-700 transition-colors"
        >
          Get <span className="font-semibold">20% off</span> all packages!{' '}
          Use code <code className="bg-white/80 px-1.5 py-0.5 rounded text-gray-900 font-mono text-sm">20OFF</code> at checkout.
        </a>
      </div>
    </div>
  );
}
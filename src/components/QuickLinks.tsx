import React from 'react';

interface QuickLinksProps {
  type: 'buyers' | 'sellers';
}

export function QuickLinks({ type }: QuickLinksProps) {
  const links = type === 'buyers' 
    ? ['Find Packages', 'Post a job', 'Find Talent']
    : ['Create Package', 'Find Jobs', 'Seller Tools'];

  return (
    <div className="mt-12 grid grid-cols-3 gap-4">
      {links.map((link) => (
        <div 
          key={link} 
          className="bg-[#1E2532] p-6 rounded-lg text-center hover:bg-[#2A3441] cursor-pointer transition-all"
        >
          <h3 className="text-lg font-semibold text-white">{link}</h3>
        </div>
      ))}
    </div>
  );
}
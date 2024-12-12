import React, { useState } from 'react';
import { Users, Briefcase, Package, FileSearch, UserSearch, Search } from 'lucide-react';

interface SearchTabsProps {
  activeTab: 'buyers' | 'sellers';
  onTabChange: (tab: 'buyers' | 'sellers') => void;
}

const buyerSubTabs = [
  { id: 'find-packages', label: 'Find Packages', icon: Package },
  { id: 'post-job', label: 'Post Job', icon: FileSearch },
  { id: 'find-talent', label: 'Find Talent', icon: UserSearch },
];

const sellerSubTabs = [
  { id: 'find-jobs', label: 'Find Jobs', icon: Search },
];

export function SearchTabs({ activeTab, onTabChange }: SearchTabsProps) {
  const [activeSubTab, setActiveSubTab] = useState('find-packages');
  const currentSubTabs = activeTab === 'buyers' ? buyerSubTabs : sellerSubTabs;

  return (
    <div className="bg-white/5">
      <div className="flex border-b border-white/10">
        <button
          onClick={() => onTabChange('buyers')}
          className={`flex items-center space-x-2 px-5 py-3 text-sm font-medium transition-colors relative bg-transparent
            ${activeTab === 'buyers'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-300 hover:text-white'
            }`}
        >
          <div className="p-1.5 rounded-lg bg-white/10">
            <Users className="h-4 w-4" />
          </div>
          <span>For Buyers</span>
        </button>
        <button
          onClick={() => onTabChange('sellers')}
          className={`flex items-center space-x-2 px-5 py-3 text-sm font-medium transition-colors relative bg-transparent
            ${activeTab === 'sellers'
              ? 'text-orange-500 border-b-2 border-orange-500'
              : 'text-gray-300 hover:text-white'
            }`}
        >
          <div className="p-1.5 rounded-lg bg-white/10">
            <Briefcase className="h-4 w-4" />
          </div>
          <span>For Sellers</span>
        </button>
      </div>

      <div className="flex border-b border-white/10">
        {currentSubTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center space-x-2 px-5 py-3 text-sm transition-colors
                ${activeSubTab === tab.id
                  ? 'text-orange-500 border-b-2 border-orange-500 bg-white/5'
                  : 'text-gray-300 hover:text-white'
                }`}
            >
              <div className="p-1.5 rounded-lg bg-white/10">
                <Icon className="h-4 w-4" />
              </div>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
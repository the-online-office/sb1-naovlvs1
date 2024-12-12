import React, { useState } from 'react';
import { Star, Building2, Clock, DollarSign } from 'lucide-react';

interface JobFiltersProps {
  salaryRange: [number, number];
  onSalaryRangeChange: (range: [number, number]) => void;
}

const jobTypes = [
  'Full-time',
  'Part-time',
  'Contract',
  'Freelance',
  'Internship'
];

const experienceLevels = [
  'Entry Level',
  'Mid Level',
  'Senior Level',
  'Lead',
  'Manager'
];

export function JobFilters({ salaryRange, onSalaryRangeChange }: JobFiltersProps) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  return (
    <div className="w-64 bg-white rounded-lg shadow-sm p-6 space-y-8">
      {/* Salary Filter */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Salary Range</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex-1">
              <label className="text-xs text-gray-500 mb-1 block">Min ($)</label>
              <input
                type="number"
                value={salaryRange[0]}
                onChange={(e) => onSalaryRangeChange([parseInt(e.target.value), salaryRange[1]])}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
              />
            </div>
            <div className="flex-1">
              <label className="text-xs text-gray-500 mb-1 block">Max ($)</label>
              <input
                type="number"
                value={salaryRange[1]}
                onChange={(e) => onSalaryRangeChange([salaryRange[0], parseInt(e.target.value)])}
                className="w-full px-3 py-1.5 border border-gray-300 rounded-md text-sm"
              />
            </div>
          </div>
          <input
            type="range"
            min="0"
            max="200000"
            value={salaryRange[1]}
            onChange={(e) => onSalaryRangeChange([salaryRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm">
            <option>Per Year</option>
            <option>Per Month</option>
            <option>Per Hour</option>
          </select>
        </div>
      </div>

      {/* Job Type */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Job Type</h3>
        <div className="space-y-2">
          {jobTypes.map((type) => (
            <label key={type} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => {
                  setSelectedTypes(prev =>
                    prev.includes(type)
                      ? prev.filter(t => t !== type)
                      : [...prev, type]
                  );
                }}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Experience Level */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Experience Level</h3>
        <div className="space-y-2">
          {experienceLevels.map((level) => (
            <label key={level} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedLevels.includes(level)}
                onChange={() => {
                  setSelectedLevels(prev =>
                    prev.includes(level)
                      ? prev.filter(l => l !== level)
                      : [...prev, level]
                  );
                }}
                className="rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600">{level}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Skills */}
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

      {/* Location */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Location</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter location..."
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
          />
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              className="rounded text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-600">Remote only</span>
          </label>
        </div>
      </div>
    </div>
  );
}
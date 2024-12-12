import React from 'react';
import { Search, Filter } from 'lucide-react';

interface CompaniesControlsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortByChange: (value: string) => void;
  sortOrder: string;
  onSortOrderChange: (value: string) => void;
  rowsPerPage: string;
  onRowsPerPageChange: (value: string) => void;
}

export function CompaniesControls({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange,
  rowsPerPage,
  onRowsPerPageChange
}: CompaniesControlsProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search companies..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-brand-700 focus:border-brand-700"
        />
      </div>

      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <span>Sort by</span>
          <select 
            value={sortBy}
            onChange={(e) => onSortByChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1.5"
          >
            <option value="name">Name</option>
            <option value="employees">Employees</option>
            <option value="projects">Projects</option>
          </select>
        </div>

        <select
          value={sortOrder}
          onChange={(e) => onSortOrderChange(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-1.5 text-sm"
        >
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>

        <div className="flex items-center space-x-2 text-sm">
          <select
            value={rowsPerPage}
            onChange={(e) => onRowsPerPageChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1.5"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
          <span className="text-gray-500">Rows</span>
        </div>

        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
}
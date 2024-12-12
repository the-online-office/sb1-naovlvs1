import React from 'react';
import { Search, Download, Filter } from 'lucide-react';

interface JobsControlsProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  onSortByChange: (value: string) => void;
  sortOrder: string;
  onSortOrderChange: (value: string) => void;
  rowsPerPage: string;
  onRowsPerPageChange: (value: string) => void;
}

export function JobsControls({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortByChange,
  sortOrder,
  onSortOrderChange,
  rowsPerPage,
  onRowsPerPageChange
}: JobsControlsProps) {
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Type here..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            <Download className="h-4 w-4" />
            <span>Download CSV</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
            <Download className="h-4 w-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2 text-gray-500">
          <span>showing 1 - 5 of 30 entries</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">Sort by</span>
            <select 
              value={sortBy}
              onChange={(e) => onSortByChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1.5"
            >
              <option value="created">Created</option>
              <option value="title">Title</option>
              <option value="status">Status</option>
            </select>
          </div>

          <select
            value={sortOrder}
            onChange={(e) => onSortOrderChange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-1.5"
          >
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>

          <div className="flex items-center space-x-2">
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

          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            <span>Show advanced filters</span>
          </button>
        </div>
      </div>
    </>
  );
}
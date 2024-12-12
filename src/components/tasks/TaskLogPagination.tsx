import React from 'react';

interface TaskLogPaginationProps {
  totalItems: number;
  visibleItems: number;
}

export function TaskLogPagination({ totalItems, visibleItems }: TaskLogPaginationProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="text-sm text-gray-500">
        Showing 1 - {visibleItems} of {totalItems} tasks
      </div>
      <div className="flex items-center space-x-2">
        <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed">
          Previous
        </button>
        <button className="px-3 py-1 bg-brand-50 text-brand-600 rounded text-sm font-medium">
          1
        </button>
        <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
}
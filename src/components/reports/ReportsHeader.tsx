import React from 'react';
import { Download, Plus } from 'lucide-react';

export function ReportsHeader() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Reports</h1>
        <p className="text-sm text-gray-600 mt-1">
          View and manage reports across all your projects
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
          <Download className="h-4 w-4" />
          <span>Download CSV</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
          <Download className="h-4 w-4" />
          <span>Download PDF</span>
        </button>
        <button className="flex items-center space-x-2 px-4 py-2 bg-brand-800 text-white rounded-lg text-sm hover:bg-brand-700">
          <Plus className="h-4 w-4" />
          <span>Create Report</span>
        </button>
      </div>
    </div>
  );
}
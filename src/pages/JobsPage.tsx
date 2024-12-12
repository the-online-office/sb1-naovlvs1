import React, { useState, useEffect } from 'react';
import { useJobs } from '../hooks/useJobs';
import { JobsTable } from '../components/jobs/JobsTable';
import { JobsControls } from '../components/jobs/JobsControls';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const tabs = [
  { id: 'posted', label: 'Posted Jobs', count: 18 },
  { id: 'assigned', label: 'Assigned Jobs', count: 13 },
  { id: 'draft', label: 'Draft Jobs', count: 12 }
];

export function JobsPage() {
  const [activeTab, setActiveTab] = useState('posted');
  const { jobs, loading, error, filterJobs } = useJobs();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('created');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [rowsPerPage, setRowsPerPage] = useState('5');

  useEffect(() => {
    if (activeTab === 'posted') {
      filterJobs({ status: 'Active' });
    } else if (activeTab === 'assigned') {
      filterJobs({ jobType: 'Assigned' });
    }
  }, [activeTab]);

  if (loading) {
    return <div className="flex items-center justify-center h-64">Loading...</div>;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-64 text-red-600">
        {error}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
        <h1 className="text-2xl font-semibold text-gray-900">Jobs</h1>
        <p className="text-sm text-gray-600 mt-1">
          Manage, create and edit jobs from this page
        </p>
        </div>
        <button
          onClick={() => navigate('create')}
          className="inline-flex items-center px-4 py-2 bg-[#00A651] text-white text-sm font-medium rounded hover:bg-[#008C44] transition-colors"
        >
          <Plus className="h-5 w-5 mr-1.5" />
          Post new job
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
              `}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </nav>
      </div>

      <JobsControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={setRowsPerPage}
      />

      <JobsTable jobs={jobs} />

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <button
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50"
          disabled
        >
          Previous
        </button>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
            1
          </button>
          <button className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-lg text-sm">
            2
          </button>
          <button className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-lg text-sm">
            3
          </button>
        </div>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50">
          Next
        </button>
      </div>
    </div>
  );
}
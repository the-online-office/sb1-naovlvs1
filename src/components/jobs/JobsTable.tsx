import React from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { Job } from '../../types/job';

interface JobsTableProps {
  jobs: Job[];
}

export function JobsTable({ jobs }: JobsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <div className="flex items-center space-x-1">
                <span>Title</span>
                <ChevronDown className="h-4 w-4" />
              </div>
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created on
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Categories
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Job Type
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Payout
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Agent
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {jobs.map((job) => (
            <tr key={job.id} className="hover:bg-gray-50">
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <div className="flex items-center space-x-1">
                    <span className="font-medium text-blue-600">{job.id}</span>
                    <span className="text-gray-900">{job.title}</span>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </div>
                  {job.industry && (
                    <span className="text-sm text-gray-500">{job.industry}</span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{job.createdOn}</td>
              <td className="px-6 py-4">
                {job.categories.length > 0 ? (
                  <div className="space-y-1">
                    {job.categories.map((category) => (
                      <span
                        key={category}
                        className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-sm text-gray-500">No categories assigned</span>
                )}
              </td>
              <td className="px-6 py-4">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                  {job.jobType}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{job.time}</td>
              <td className="px-6 py-4">
                <div className="flex flex-col">
                  <span className="font-medium text-gray-900">{job.payout.amount}</span>
                  <span className="text-sm text-gray-500">{job.payout.type}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={job.agent.avatar}
                    alt={job.agent.name}
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm text-gray-900">{job.agent.name}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-2">
                  <img
                    src={job.customer.avatar}
                    alt={job.customer.name}
                    className="h-6 w-6 rounded-full"
                  />
                  <span className="text-sm text-gray-900">{job.customer.name}</span>
                </div>
              </td>
              <td className="px-6 py-4">
                <span
                  className={`inline-block px-2 py-1 text-xs font-medium rounded-full
                    ${job.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                    }`}
                >
                  {job.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
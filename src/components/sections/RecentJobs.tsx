import React from 'react';
import { Clock, MapPin, DollarSign } from 'lucide-react';

const recentJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    company: 'Tech Solutions Inc.',
    location: 'Remote',
    salary: '$80k - $120k',
    type: 'Full-time',
    posted: '2 hours ago'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    company: 'Creative Agency',
    location: 'New York, USA',
    salary: '$70k - $90k',
    type: 'Contract',
    posted: '5 hours ago'
  },
  {
    id: 3,
    title: 'Content Writer',
    company: 'Digital Media Co.',
    location: 'Remote',
    salary: '$45k - $65k',
    type: 'Part-time',
    posted: '1 day ago'
  }
];

export function RecentJobs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Recently Posted Jobs</h2>
          <button className="text-blue-600 hover:text-blue-700">View all jobs</button>
        </div>
        <div className="space-y-4">
          {recentJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.company}</p>
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </span>
                    <span className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-1" />
                      {job.salary}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {job.posted}
                    </span>
                  </div>
                </div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {job.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
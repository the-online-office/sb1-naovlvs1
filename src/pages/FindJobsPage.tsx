import React, { useState } from 'react';
import { Search, Filter, DollarSign, MapPin, Clock, Building2, LayoutGrid, List } from 'lucide-react';
import { JobListingHero } from '../components/jobs/JobListingHero';
import { JobFilters } from '../components/jobs/JobFilters';
import { JobFlyout } from '../components/jobs/JobFlyout';

interface JobListing {
  id: string;
  title: string;
  company: {
    name: string;
    logo: string;
    verified: boolean;
  };
  location: string;
  type: string;
  salary: {
    min: number;
    max: number;
    period: string;
  };
  posted: string;
  description: string;
  requirements: string[];
  skills: string[];
}

const MOCK_JOBS: JobListing[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: {
      name: 'Tech Solutions Inc.',
      logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=100&h=100&q=80',
      verified: true
    },
    location: 'Remote (US)',
    type: 'Full-time',
    salary: {
      min: 120000,
      max: 160000,
      period: 'year'
    },
    posted: '2 days ago',
    description: 'We are looking for a Senior Frontend Developer to join our growing team...',
    requirements: [
      '5+ years of experience with React',
      'Strong TypeScript skills',
      'Experience with modern frontend tooling'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL']
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: {
      name: 'Digital Innovations',
      logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=100&h=100&q=80',
      verified: true
    },
    location: 'New York, NY',
    type: 'Contract',
    salary: {
      min: 80,
      max: 100,
      period: 'hour'
    },
    posted: '1 week ago',
    description: 'Looking for a Full Stack Developer to help build our next generation platform...',
    requirements: [
      'Experience with full stack development',
      'Strong JavaScript/TypeScript skills',
      'Database design experience'
    ],
    skills: ['React', 'Node.js', 'PostgreSQL', 'AWS']
  }
];

const categories = [
  'All Categories',
  'Web Development',
  'Mobile Development',
  'UI/UX Design',
  'DevOps',
  'Data Science',
  'Cybersecurity'
];

export function FindJobsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [salaryRange, setSalaryRange] = useState([0, 200000]);
  const [sortBy, setSortBy] = useState('recent');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [selectedJob, setSelectedJob] = useState<JobListing | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <JobListingHero />
      
      {/* Search Header */}
      <div className="bg-white border-b sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jobs..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${
                    viewMode === 'grid'
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                  title="Grid view"
                >
                  <LayoutGrid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${
                    viewMode === 'list'
                      ? 'bg-blue-50 text-blue-600'
                      : 'hover:bg-gray-50 text-gray-600'
                  }`}
                  title="List view"
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="pl-4 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="recent">Most Recent</option>
                <option value="salary_high">Highest Salary</option>
                <option value="salary_low">Lowest Salary</option>
                <option value="best_match">Best Match</option>
              </select>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Salary Range
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200000"
                    value={salaryRange[1]}
                    onChange={(e) => setSalaryRange([salaryRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${salaryRange[0].toLocaleString()}</span>
                    <span>${salaryRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skills
                </label>
                <input
                  type="text"
                  placeholder="e.g. React, Python"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. New York"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex">
        {/* Filters Sidebar */}
        <div className="hidden lg:block flex-shrink-0 mr-8">
          <JobFilters
            salaryRange={salaryRange}
            onSalaryRangeChange={setSalaryRange}
          />
        </div>

        {/* Results Grid */}
        <div className="flex-grow">
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            : "space-y-4"
          }>
            {MOCK_JOBS.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer"
                onClick={() => setSelectedJob(job)}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={job.company.logo}
                    alt={job.company.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.company.name}</p>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1.5" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1.5" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <DollarSign className="h-4 w-4 mr-1.5" />
                        ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()} per {job.salary.period}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          +{job.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="text-sm text-gray-500">{job.posted}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <JobFlyout
          isOpen={!!selectedJob}
          onClose={() => setSelectedJob(null)}
          job={selectedJob}
        />
      </div>
    </div>
  );
}
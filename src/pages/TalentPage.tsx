import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, DollarSign, Briefcase, ChevronDown } from 'lucide-react';
import { TalentHero } from '../components/TalentHero';
import { TalentFilters } from '../components/talent/TalentFilters';
import { LayoutGrid, List, ExternalLink } from 'lucide-react';
import { ProfileFlyout } from '../components/talent/ProfileFlyout';

interface Freelancer {
  id: string;
  name: string;
  title: string;
  avatar: string;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  skills: string[];
  jobsCompleted: number;
  verified: boolean;
}

const MOCK_FREELANCERS: Freelancer[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    title: 'Senior Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4.9,
    reviews: 127,
    hourlyRate: 85,
    location: 'San Francisco, CA',
    skills: ['React', 'TypeScript', 'Node.js', 'UI/UX Design'],
    jobsCompleted: 143,
    verified: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    title: 'Full Stack Developer',
    avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4.8,
    reviews: 98,
    hourlyRate: 75,
    location: 'New York, NY',
    skills: ['Python', 'Django', 'React', 'PostgreSQL'],
    jobsCompleted: 89,
    verified: true
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

export function TalentPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProfile, setSelectedProfile] = useState<Freelancer | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <TalentHero />
      
      {/* Search Header */}
      <div className="bg-white border-b sticky top-0 z-20 mt-[-100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-grow">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search freelancers..."
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
                <option value="rating">Highest Rated</option>
                <option value="price_low">Lowest Price</option>
                <option value="price_high">Highest Price</option>
                <option value="jobs">Most Jobs</option>
              </select>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hourly Rate
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
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
          <TalentFilters
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
          />
        </div>

        {/* Results Grid */}
        <div className="flex-grow">
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            : "space-y-4"
          }>
          {MOCK_FREELANCERS.map((freelancer) => (
            <div
              key={freelancer.id}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 ${
                viewMode === 'list' ? 'flex items-start space-x-6' : ''
              } cursor-pointer`}
              onClick={() => setSelectedProfile(freelancer)}
            >
              <div className={`flex items-center ${viewMode === 'list' ? 'w-64 flex-shrink-0' : 'space-x-4'}`}>
                <img
                  src={freelancer.avatar}
                  alt={freelancer.name}
                  className="h-16 w-16 rounded-full"
                />
                {viewMode === 'grid' && <div className="flex-grow">
                  <h3 className="font-semibold text-gray-900">{freelancer.name}</h3>
                  <p className="text-sm text-gray-600">{freelancer.title}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-900">{freelancer.rating}</span>
                    <span className="text-sm text-gray-500">({freelancer.reviews})</span>
                  </div>
                </div>}
              </div>

              <div className={`${viewMode === 'list' ? 'flex-grow' : 'mt-4'}`}>
                {viewMode === 'list' && (
                  <div className="mb-4">
                    <h3 className="font-semibold text-gray-900">{freelancer.name}</h3>
                    <p className="text-sm text-gray-600">{freelancer.title}</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium text-gray-900">{freelancer.rating}</span>
                      <span className="text-sm text-gray-500">({freelancer.reviews})</span>
                    </div>
                  </div>
                )}
                
                <div className={`${viewMode === 'list' ? 'flex items-center space-x-6' : 'space-y-3'}`}>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{freelancer.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <DollarSign className="h-4 w-4" />
                  <span>${freelancer.hourlyRate}/hr</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Briefcase className="h-4 w-4" />
                  <span>{freelancer.jobsCompleted} jobs completed</span>
                </div>
                </div>
              </div>

              <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'mt-4'}`}>
                <div className="flex flex-wrap gap-2">
                  {freelancer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className={viewMode === 'list' ? 'w-32 flex-shrink-0' : 'mt-6'}>
                <div className="space-y-2">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Profile
                  </button>
                  <button className="w-full bg-white text-blue-600 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
                    Message
                  </button>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Hire for Job
                  </button>
                </div>
              </div>
            </div>
          ))}
          <ProfileFlyout
            isOpen={!!selectedProfile}
            onClose={() => setSelectedProfile(null)}
            profile={{
              ...selectedProfile!,
              bio: "Experienced frontend developer with a passion for creating beautiful and functional user interfaces.",
              experience: [
                {
                  title: "Senior Frontend Developer",
                  company: "Tech Solutions Inc",
                  period: "2020 - Present",
                  description: "Led frontend development team and implemented key features."
                }
              ],
              education: [
                {
                  degree: "BS in Computer Science",
                  school: "University of Technology",
                  period: "2016 - 2020",
                  description: "Major in Software Engineering"
                }
              ]
            }}
          />
        </div>
      </div>
    </div>
    </div>
  );
}
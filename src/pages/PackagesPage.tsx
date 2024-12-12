import React, { useState } from 'react';
import { Search, Filter, Star, MapPin, DollarSign, Clock, LayoutGrid, List } from 'lucide-react';
import { PackageHero } from '../components/packages/PackageHero';
import { PackageFilters } from '../components/packages/PackageFilters';
import { Link } from 'react-router-dom';

interface Package {
  id: string;
  title: string;
  description: string;
  image: string;
  price: {
    oneTime: number;
    monthly?: number;
    annual?: number;
  };
  rating: number;
  reviews: number;
  deliveryTime: string;
  seller: {
    name: string;
    avatar: string;
    verified: boolean;
  };
  features: string[];
}

const MOCK_PACKAGES: Package[] = [
  {
    id: '1',
    title: 'Professional Website Development',
    description: 'Get a fully responsive, modern website built with React and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500',
    price: {
      oneTime: 499,
      monthly: 99,
      annual: 999
    },
    rating: 4.9,
    reviews: 128,
    deliveryTime: '14 days',
    seller: {
      name: 'WebPro Solutions',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      verified: true
    },
    features: [
      'Custom Design',
      'Mobile Responsive',
      'SEO Optimized',
      '5 Pages',
      'Contact Form'
    ]
  },
  {
    id: '2',
    title: 'E-commerce Store Setup',
    description: 'Complete e-commerce solution with payment integration and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500',
    price: {
      oneTime: 999,
      monthly: 199,
      annual: 1999
    },
    rating: 4.8,
    reviews: 94,
    deliveryTime: '21 days',
    seller: {
      name: 'Digital Innovations',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      verified: true
    },
    features: [
      'Product Management',
      'Payment Gateway',
      'Shopping Cart',
      'Order Management',
      'Inventory Tracking'
    ]
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

export function PackagesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="min-h-screen bg-gray-50">
      <PackageHero />
      
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
                  placeholder="Search packages..."
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
                <option value="popular">Most Popular</option>
              </select>
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 border-t grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="2000"
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
                  Features
                </label>
                <input
                  type="text"
                  placeholder="e.g. Responsive Design, SEO"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Time
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Any</option>
                  <option>Up to 7 days</option>
                  <option>Up to 14 days</option>
                  <option>Up to 30 days</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex">
        {/* Filters Sidebar */}
        <div className="hidden lg:block w-64 flex-shrink-0 mr-8">
          <PackageFilters
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* Results Grid */}
        <div className="flex-1">
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
            : "space-y-4"
          }>
            {MOCK_PACKAGES.map((pkg) => (
              <Link
                key={pkg.id}
                to={`/packages/${pkg.id}`}
                className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 ${
                  viewMode === 'list' ? 'flex items-start space-x-6' : ''
                }`}
              >
                <div className={viewMode === 'list' ? 'w-64 flex-shrink-0' : ''}>
                  <div className="relative pb-[60%] mb-4 rounded-lg overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={pkg.seller.avatar}
                      alt={pkg.seller.name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{pkg.title}</h3>
                      <p className="text-sm text-gray-600">{pkg.seller.name}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{pkg.description}</p>

                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="font-medium">{pkg.rating}</span>
                      <span className="text-gray-500 ml-1">({pkg.reviews})</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{pkg.deliveryTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.features.slice(0, 3).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                    {pkg.features.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{pkg.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-sm text-gray-500">Starting at</span>
                      <div className="text-xl font-bold text-gray-900">${pkg.price.oneTime}</div>
                    </div>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
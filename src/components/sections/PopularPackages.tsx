import React, { useState } from 'react';
import { Star, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const packages = [
  {
    id: '1',
    title: 'Professional Website Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500',
    price: 499,
    rating: 4.8,
    reviews: 156,
    seller: 'WebPro Solutions'
  },
  {
    id: '2',
    title: 'Logo & Brand Identity Design',
    image: 'https://images.unsplash.com/photo-1626785774625-0b1c2c4eab67?auto=format&fit=crop&w=500',
    price: 299,
    rating: 4.9,
    reviews: 203,
    seller: 'Creative Studio'
  },
  {
    id: '3',
    title: 'Social Media Marketing Campaign',
    image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&w=500',
    price: 399,
    rating: 4.7,
    reviews: 128,
    seller: 'Digital Growth'
  },
  {
    id: '4',
    title: 'Mobile App Development',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500',
    price: 899,
    rating: 4.9,
    reviews: 167,
    seller: 'AppTech Solutions'
  },
  {
    id: '5',
    title: 'SEO Optimization Package',
    image: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?auto=format&fit=crop&w=500',
    price: 299,
    rating: 4.6,
    reviews: 98,
    seller: 'SEO Experts'
  },
  {
    id: '6',
    title: 'Content Writing & Strategy',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=500',
    price: 199,
    rating: 4.8,
    reviews: 142,
    seller: 'Content Masters'
  },
  {
    id: '7',
    title: 'E-commerce Store Setup',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=500',
    price: 799,
    rating: 4.9,
    reviews: 183,
    seller: 'E-com Solutions'
  },
  {
    id: '8',
    title: 'UI/UX Design System',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500',
    price: 599,
    rating: 4.7,
    reviews: 156,
    seller: 'Design Studio Pro'
  }
];

export function PopularPackages() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextSlide = () => {
    setStartIndex((prev) => 
      prev + itemsPerPage >= packages.length ? 0 : prev + itemsPerPage
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) => 
      prev - itemsPerPage < 0 ? Math.max(0, packages.length - itemsPerPage) : prev - itemsPerPage
    );
  };

  const visiblePackages = packages.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Popular Packages</h2>
          <button className="text-blue-400 hover:text-blue-300">View all</button>
        </div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition-colors shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visiblePackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-[1.02] h-[460px] flex flex-col"
              >
                <div className="relative h-48">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover" />
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="font-semibold text-lg mb-2 text-gray-900 line-clamp-2">{pkg.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">by {pkg.seller}</p>
                    <div className="flex items-center mb-3">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium text-gray-900">{pkg.rating}</span>
                      <span className="ml-1 text-sm text-gray-500">({pkg.reviews})</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">${pkg.price}</span>
                      <Link 
                        to={`/packages/${pkg.id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
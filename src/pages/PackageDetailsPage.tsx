import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Shield, Clock, Check, ArrowRight, Heart, ChevronDown, ChevronUp, ArrowUp, ArrowDown, Trash2 } from 'lucide-react';

const TABS = [
  { id: 'features', label: 'Features' },
  { id: 'reviews', label: 'Reviews' },
  { id: 'compare', label: 'Compare Tiers' },
  { id: 'deliverables', label: 'Add Job Deliverables' },
  { id: 'addons', label: 'Add-Ons' },
  { id: 'faq', label: 'FAQs' }
];

const TRUST_BADGES = [
  { icon: Shield, label: 'Money-Back Guarantee', description: '30-day satisfaction guarantee' },
  { icon: Clock, label: 'On-Time Delivery', description: '98% of projects delivered on time' },
  { icon: Star, label: 'Top Rated Service', description: '4.9/5 average rating from 1000+ clients' }
];

const ADDONS = [
  {
    id: '1',
    title: 'Priority Support',
    description: '24/7 priority customer support',
    price: 49,
    popular: true
  },
  {
    id: '2',
    title: 'Extra Revisions',
    description: '5 additional revision rounds',
    price: 99
  },
  {
    id: '3',
    title: 'Express Delivery',
    description: 'Get your project 50% faster',
    price: 149
  }
];

const PACKAGE_DATA = {
  id: '1',
  title: 'Professional Website Development',
  description: 'Get a fully responsive, modern website built with React and Tailwind CSS.',
  seller: {
    name: 'WebPro Solutions',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4.9,
    reviews: 128,
    location: 'San Francisco, CA'
  },
  tiers: [
    {
      name: 'Basic',
      price: 499,
      description: 'Perfect for small business websites',
      features: [
        '5 Pages',
        'Responsive Design',
        'Basic SEO',
        'Contact Form',
        '2 Revisions'
      ],
      deliveryTime: '7 days'
    },
    {
      name: 'Standard',
      price: 999,
      description: 'Great for growing businesses',
      features: [
        '10 Pages',
        'Responsive Design',
        'Advanced SEO',
        'Contact Form',
        'Blog Setup',
        'Social Media Integration',
        '5 Revisions'
      ],
      deliveryTime: '14 days',
      popular: true
    },
    {
      name: 'Premium',
      price: 1999,
      description: 'Complete solution for large businesses',
      features: [
        'Unlimited Pages',
        'Responsive Design',
        'Advanced SEO',
        'Contact Form',
        'Blog Setup',
        'Social Media Integration',
        'E-commerce Integration',
        'Custom Features',
        'Unlimited Revisions'
      ],
      deliveryTime: '21 days'
    }
  ],
  portfolio: [
    {
      title: 'E-commerce Website',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500'
    },
    {
      title: 'Corporate Website',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=500'
    },
    {
      title: 'Blog Platform',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=500'
    }
  ],
  faq: [
    {
      question: 'What is included in the website development package?',
      answer: 'Our website development package includes custom design, responsive development, basic SEO optimization, and thorough testing across all major browsers and devices.'
    },
    {
      question: 'How many revisions are included?',
      answer: 'The number of revisions varies by package tier. Basic includes 2 revisions, Standard includes 5 revisions, and Premium includes unlimited revisions.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer 30 days of support after project completion for bug fixes and minor adjustments.'
    }
  ]
};

export function PackageDetailsPage() {
  const { packageId } = useParams();
  const [selectedTier, setSelectedTier] = useState(1);
  const [expandedTier, setExpandedTier] = useState<number | null>(1);
  const [activeTab, setActiveTab] = useState('features');

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Package Title & Seller Info */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">{PACKAGE_DATA.title}</h1>
                <div className="flex items-center space-x-4">
                  <img
                    src={PACKAGE_DATA.seller.avatar}
                    alt={PACKAGE_DATA.seller.name}
                    className="h-12 w-12 rounded-full"
                  />
                  <div>
                    <h2 className="font-medium text-gray-900">{PACKAGE_DATA.seller.name}</h2>
                    <div className="flex items-center space-x-2 text-sm">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 font-medium">{PACKAGE_DATA.seller.rating}</span>
                      </div>
                      <span className="text-gray-500">({PACKAGE_DATA.seller.reviews} reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Portfolio Gallery */}
              <div className="border-t">
                <div className="grid grid-cols-3 gap-px">
                  {PACKAGE_DATA.portfolio.map((item, index) => (
                    <div key={index} className="relative aspect-video">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  {TABS.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                        activeTab === tab.id
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {TRUST_BADGES.map((badge, index) => {
                    const Icon = badge.icon;
                    return (
                      <div key={index} className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <h4 className="font-medium text-gray-900 mb-1">{badge.label}</h4>
                        <p className="text-sm text-gray-600">{badge.description}</p>
                      </div>
                    );
                  })}
                </div>

                {activeTab === 'features' && (
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">About This Package</h2>
                      <p className="text-gray-600">{PACKAGE_DATA.description}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Key Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center space-x-2 text-gray-600">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Professional and experienced team</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-600">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Clear communication and timely delivery</span>
                        </li>
                        <li className="flex items-center space-x-2 text-gray-600">
                          <Check className="h-5 w-5 text-green-500" />
                          <span>Quality assurance and testing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Customer Reviews</h3>
                        <div className="flex items-center mt-2">
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                          <span className="ml-1 font-medium">{PACKAGE_DATA.seller.rating}</span>
                          <span className="text-gray-500 ml-1">({PACKAGE_DATA.seller.reviews} reviews)</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Write a Review
                      </button>
                    </div>
                    {/* Add review list here */}
                  </div>
                )}

                {activeTab === 'compare' && (
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Compare Package Tiers</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="py-4 px-6 text-left">Feature</th>
                            {PACKAGE_DATA.tiers.map((tier) => (
                              <th key={tier.name} className="py-4 px-6 text-center">
                                {tier.name}
                                <div className="text-sm font-normal text-gray-500">${tier.price}</div>
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="py-4 px-6">Pages</td>
                            <td className="py-4 px-6 text-center">5 Pages</td>
                            <td className="py-4 px-6 text-center">10 Pages</td>
                            <td className="py-4 px-6 text-center">Unlimited</td>
                          </tr>
                          {/* Add more feature rows */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === 'deliverables' && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">Job Deliverables</h3>
                        <p className="text-gray-600 mt-1">Define specific milestones and deliverables for this project</p>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                        Add Deliverable
                      </button>
                    </div>

                    <div className="space-y-4">
                      {/* Timeline visualization */}
                      <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200" />
                        
                        {/* Example deliverables */}
                        {[1, 2, 3].map((item, index) => (
                          <div key={index} className="relative flex items-start mb-8">
                            <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${
                              index === 2 ? 'bg-white border-2 border-blue-500' : 'bg-blue-500'
                            }`}>
                              <span className={index === 2 ? 'text-blue-500' : 'text-white'}>
                                {index + 1}
                              </span>
                            </div>
                            <div className="ml-6 flex-grow">
                              <div className="bg-white p-4 rounded-lg border border-gray-200">
                                <input
                                  type="text"
                                  placeholder="Deliverable title"
                                  className="w-full font-medium text-gray-900 mb-2 bg-transparent border-none p-0 focus:ring-0"
                                  defaultValue={`Phase ${index + 1}`}
                                />
                                <textarea
                                  placeholder="Describe this deliverable..."
                                  className="w-full text-gray-600 bg-transparent border-none p-0 focus:ring-0 resize-none"
                                  rows={2}
                                />
                                <div className="flex items-center justify-between mt-4 pt-4 border-t">
                                  <input
                                    type="date"
                                    className="text-sm text-gray-500 bg-transparent border-none p-0 focus:ring-0"
                                  />
                                  <div className="flex items-center space-x-2">
                                    <button className="p-2 text-gray-400 hover:text-gray-600">
                                      <ArrowUp className="h-4 w-4" />
                                    </button>
                                    <button className="p-2 text-gray-400 hover:text-gray-600">
                                      <ArrowDown className="h-4 w-4" />
                                    </button>
                                    <button className="p-2 text-red-400 hover:text-red-600">
                                      <Trash2 className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'addons' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Available Add-Ons</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {ADDONS.map((addon) => (
                        <div 
                          key={addon.id}
                          className={`relative p-6 bg-white rounded-lg border-2 transition-all ${
                            addon.popular
                              ? 'border-blue-500 ring-2 ring-blue-500'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {addon.popular && (
                            <span className="absolute -top-3 right-4 bg-blue-500 text-white px-3 py-1 text-xs font-medium rounded-full">
                              Popular
                            </span>
                          )}
                          
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="font-medium text-gray-900">{addon.title}</h4>
                              <p className="text-sm text-gray-600 mt-1">{addon.description}</p>
                            </div>
                            <span className="text-lg font-bold text-gray-900">${addon.price}</span>
                          </div>
                          
                          <button className="w-full bg-gray-100 text-gray-900 py-2 rounded hover:bg-gray-200 transition-colors">
                            Add to Package
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'faq' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h3>
                    {PACKAGE_DATA.faq.map((item, index) => (
                      <div key={index}>
                        <h4 className="font-medium text-gray-900 mb-2">{item.question}</h4>
                        <p className="text-gray-600">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Package Tiers */}
                <div className="p-4 space-y-4">
                  {PACKAGE_DATA.tiers.map((tier, index) => (
                    <div key={index}>
                      <button
                        onClick={() => {
                          setSelectedTier(index);
                          setExpandedTier(expandedTier === index ? null : index);
                        }}
                        className={`w-full p-4 rounded-lg border-2 transition-colors ${
                          selectedTier === index
                            ? 'border-blue-500 bg-blue-50'
                            : 'border-gray-200 hover:border-gray-300'
                        } ${tier.popular ? 'ring-2 ring-blue-500' : ''}`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="font-medium text-gray-900">{tier.name}</span>
                            <div className="text-2xl font-bold text-gray-900 mt-1">
                              ${tier.price}
                            </div>
                          </div>
                          {expandedTier === index ? (
                            <ChevronUp className="h-5 w-5 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </button>
                      
                      {expandedTier === index && (
                        <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                          <p className="text-sm text-gray-600 mb-4">{tier.description}</p>
                          <div className="flex items-center text-sm text-gray-500 mb-4">
                            <Clock className="h-4 w-4 mr-1" />
                            {tier.deliveryTime} delivery
                          </div>
                          <ul className="space-y-2 text-sm text-gray-600">
                            {tier.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-center">
                                <Check className="h-4 w-4 text-green-500 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="p-4 border-t space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    Continue (${PACKAGE_DATA.tiers[selectedTier].price})
                  </button>
                  <button className="w-full bg-white text-blue-600 py-3 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
                    Contact Seller
                  </button>
                  <button className="w-full flex items-center justify-center space-x-2 py-3 text-gray-600 hover:text-gray-900">
                    <Heart className="h-5 w-5" />
                    <span>Save for Later</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PACKAGE_DATA.portfolio.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative pb-[60%]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">{item.title}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold text-gray-900">$499</span>
                    <button className="text-blue-600 hover:text-blue-700">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
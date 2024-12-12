import React from 'react';
import { Camera, Plus, Eye, Briefcase, GraduationCap, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PersonalDetails() {
  return (
    <div className="p-6 space-y-8">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-6">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="h-24 w-24 rounded-full"
            />
            <button className="absolute bottom-0 right-0 p-1.5 bg-blue-600 rounded-full text-white hover:bg-blue-700">
              <Camera className="h-4 w-4" />
            </button>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-900">Profile Picture</h2>
            <p className="text-sm text-gray-500 mt-1">
              Upload a professional photo for your profile
            </p>
            <div className="mt-4 flex space-x-3">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Upload New
              </button>
              <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500">
                Remove
              </button>
            </div>
          </div>
        </div>
        <Link
          to="/dashboard/profile/view"
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Eye className="h-4 w-4" />
          <span>View Public Profile</span>
        </Link>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Bio
            </label>
            <textarea
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Professional Details</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Skills (separate with commas)
            </label>
            <textarea
              rows={2}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="e.g. React, TypeScript, Node.js"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hourly Rate
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                className="block w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.00"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm">/hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Employment History */}
      <div className="border-t pt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Employment History</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <Briefcase className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900">Senior Frontend Developer</h3>
                  <p className="text-sm text-gray-600">Tech Solutions Inc.</p>
                  <p className="text-sm text-gray-500 mt-1">Jan 2020 - Present</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Led frontend development team, implemented new features, and improved performance.
                  </p>
                </div>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700">Edit</button>
            </div>
          </div>
          
          <button className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Plus className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Add Employment History</span>
          </button>
        </div>
      </div>

      {/* Education */}
      <div className="border-t pt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Education</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <GraduationCap className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-900">Bachelor of Science in Computer Science</h3>
                  <p className="text-sm text-gray-600">University of Technology</p>
                  <p className="text-sm text-gray-500 mt-1">2016 - 2020</p>
                  <p className="text-sm text-gray-600 mt-2">
                    Major in Software Engineering, Minor in UI/UX Design
                  </p>
                </div>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700">Edit</button>
            </div>
          </div>
          
          <button className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Plus className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Add Education</span>
          </button>
        </div>
      </div>

      {/* Portfolio */}
      <div className="border-t pt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Portfolio</h2>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Image className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-900">E-commerce Platform</h3>
                    <p className="text-sm text-gray-600 mt-1">React, TypeScript, Node.js</p>
                    <a href="#" className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block">
                      View Project
                    </a>
                  </div>
                </div>
                <button className="text-sm text-blue-600 hover:text-blue-700">Edit</button>
              </div>
            </div>
          </div>
          
          <button className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Plus className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Add Portfolio Item</span>
          </button>
        </div>
      </div>

      <div className="border-t pt-8 flex justify-end">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}
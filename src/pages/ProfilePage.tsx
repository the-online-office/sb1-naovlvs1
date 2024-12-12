import React from 'react';
import { ArrowLeft, MapPin, Mail, Globe, Star, Briefcase, GraduationCap, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProfilePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/dashboard/settings"
        className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to Settings</span>
      </Link>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="absolute -bottom-12 left-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="h-24 w-24 rounded-full border-4 border-white"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-16 px-8 pb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">John Doe</h1>
              <p className="text-lg text-gray-600">Senior Frontend Developer</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  San Francisco, CA
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-1" />
                  john@example.com
                </div>
                <div className="flex items-center">
                  <Globe className="h-4 w-4 mr-1" />
                  portfolio.com
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="font-medium text-gray-900">4.9</span>
              <span className="text-gray-500">(127 reviews)</span>
            </div>
          </div>

          <div className="mt-8 space-y-8">
            {/* About */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600">
                Experienced frontend developer with a passion for creating beautiful and functional user interfaces.
                Specialized in React and TypeScript with 5+ years of professional experience.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Node.js', 'UI/UX Design', 'GraphQL', 'Next.js'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Employment History */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Employment History</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <Briefcase className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Senior Frontend Developer</h3>
                    <p className="text-gray-600">Tech Solutions Inc.</p>
                    <p className="text-sm text-gray-500">Jan 2020 - Present</p>
                    <p className="text-gray-600 mt-2">
                      Led frontend development team, implemented new features, and improved performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Education</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Bachelor of Science in Computer Science</h3>
                    <p className="text-gray-600">University of Technology</p>
                    <p className="text-sm text-gray-500">2016 - 2020</p>
                    <p className="text-gray-600 mt-2">
                      Major in Software Engineering, Minor in UI/UX Design
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Portfolio */}
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-gray-100 rounded-lg">
                      <Image className="h-5 w-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">E-commerce Platform</h3>
                      <p className="text-sm text-gray-600 mt-1">React, TypeScript, Node.js</p>
                      <a href="#" className="text-sm text-blue-600 hover:text-blue-700 mt-2 inline-block">
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
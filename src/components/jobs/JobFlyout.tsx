import React, { useState } from 'react';
import { X, MapPin, Clock, DollarSign, Building2, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface JobFlyoutProps {
  isOpen: boolean;
  onClose: () => void;
  job: {
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
  } | null;
}

export function JobFlyout({ isOpen, onClose, job }: JobFlyoutProps) {
  const navigate = useNavigate();

  if (!isOpen || !job) return null;

  return (
    <>
    <div className="fixed inset-y-0 right-0 w-[480px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50">
      <div className="h-full flex flex-col">
        <div className="p-6 border-b relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
          
          <div className="flex items-start space-x-4">
            <img
              src={job.company.logo}
              alt={job.company.name}
              className="h-16 w-16 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{job.title}</h2>
              <p className="text-gray-600">{job.company.name}</p>
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                {job.location}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                  <Clock className="h-4 w-4" />
                  <span>Job Type</span>
                </div>
                <p className="font-medium text-gray-900">{job.type}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 text-sm text-gray-500 mb-1">
                  <DollarSign className="h-4 w-4" />
                  <span>Salary Range</span>
                </div>
                <p className="font-medium text-gray-900">
                  ${job.salary.min.toLocaleString()} - ${job.salary.max.toLocaleString()}
                  <span className="text-sm text-gray-500"> per {job.salary.period}</span>
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Description</h3>
              <p className="text-gray-600 whitespace-pre-wrap">{job.description}</p>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Requirements</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t space-y-3">
          <button 
            onClick={() => navigate(`/jobs/${job.id}/apply`)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Apply Now
          </button>
          <button className="w-full bg-white text-blue-600 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors">
            Save Job
          </button>
          <a
            href={`/jobs/${job.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ExternalLink className="h-4 w-4" />
            <span>Open in New Tab</span>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
import React from 'react';
import { X, Star, MapPin, Mail, Globe, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';

interface ProfileFlyoutProps {
  isOpen: boolean;
  onClose: () => void;
  profile: {
    id: string;
    name: string;
    title: string;
    avatar: string;
    rating: number;
    reviews: number;
    hourlyRate: number;
    location: string;
    skills: string[];
    bio?: string;
    experience?: Array<{
      title: string;
      company: string;
      period: string;
      description: string;
    }>;
    education?: Array<{
      degree: string;
      school: string;
      period: string;
      description: string;
    }>;
  };
}

export function ProfileFlyout({ isOpen, onClose, profile }: ProfileFlyoutProps) {
  if (!isOpen) return null;

  return (
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
              src={profile.avatar}
              alt={profile.name}
              className="h-20 w-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{profile.name}</h2>
              <p className="text-gray-600">{profile.title}</p>
              <div className="flex items-center space-x-1 mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium text-gray-900">{profile.rating}</span>
                <span className="text-sm text-gray-500">({profile.reviews} reviews)</span>
              </div>
              <div className="flex items-center mt-2 text-sm text-gray-600">
                <MapPin className="h-4 w-4 mr-1" />
                {profile.location}
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Bio */}
            {profile.bio && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">About</h3>
                <p className="text-gray-600">{profile.bio}</p>
              </div>
            )}

            {/* Skills */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            {profile.experience && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Experience</h3>
                <div className="space-y-4">
                  {profile.experience.map((exp, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <Briefcase className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{exp.title}</h4>
                        <p className="text-sm text-gray-600">{exp.company}</p>
                        <p className="text-sm text-gray-500">{exp.period}</p>
                        <p className="text-sm text-gray-600 mt-1">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {profile.education && (
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Education</h3>
                <div className="space-y-4">
                  {profile.education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-gray-100 rounded-lg">
                        <GraduationCap className="h-5 w-5 text-gray-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{edu.degree}</h4>
                        <p className="text-sm text-gray-600">{edu.school}</p>
                        <p className="text-sm text-gray-500">{edu.period}</p>
                        <p className="text-sm text-gray-600 mt-1">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="p-6 border-t space-y-3">
          <div className="flex items-center justify-between text-sm mb-4">
            <span className="text-gray-600">Hourly Rate</span>
            <span className="font-semibold text-gray-900">${profile.hourlyRate}/hr</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Message
          </button>
          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
            Hire for Job
          </button>
          <a
            href={`/talent/${profile.id}`}
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
  );
}
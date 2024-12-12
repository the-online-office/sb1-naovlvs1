import React from 'react';
import { ArrowLeft, MapPin, Globe, Users, Calendar, Link } from 'lucide-react';

interface CompanyPreviewProps {
  formData: {
    name: string;
    industry: string;
    description: string;
    location: string;
    website: string;
    size: string;
    yearFounded: string;
    logo: File | null;
    coverImage: File | null;
    brandColors: {
      primary: string;
      secondary: string;
    };
    socialLinks: {
      linkedin: string;
      twitter: string;
      facebook: string;
      instagram: string;
    };
    departments: Array<{
      id: string;
      name: string;
      description: string;
    }>;
    team: Array<{
      id: string;
      name: string;
      role: string;
      department: string;
      email: string;
    }>;
  };
  onBack: () => void;
}

export function CompanyPreview({ formData, onBack }: CompanyPreviewProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
      >
        <ArrowLeft className="h-5 w-5" />
        <span>Back to editing</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Cover Image */}
        <div className="relative h-48 bg-gray-100">
          {formData.coverImage && (
            <img
              src={URL.createObjectURL(formData.coverImage)}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Logo & Basic Info */}
        <div className="relative px-8 pb-8">
          <div className="absolute -top-12 left-8">
            <div className="h-24 w-24 rounded-lg bg-white shadow-lg overflow-hidden">
              {formData.logo ? (
                <img
                  src={URL.createObjectURL(formData.logo)}
                  alt={formData.name}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gray-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">
                    {formData.name.charAt(0)}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="pt-16">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{formData.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              {formData.industry && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {formData.industry}
                </span>
              )}
              {formData.location && (
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  {formData.location}
                </div>
              )}
              {formData.website && (
                <a 
                  href={formData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-gray-700"
                >
                  <Globe className="h-4 w-4 mr-1" />
                  {formData.website}
                </a>
              )}
              {formData.size && (
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {formData.size}
                </div>
              )}
              {formData.yearFounded && (
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  Founded {formData.yearFounded}
                </div>
              )}
            </div>

            {formData.description && (
              <p className="text-gray-600 mb-8">{formData.description}</p>
            )}

            {/* Social Links */}
            {Object.values(formData.socialLinks).some(link => link) && (
              <div className="flex items-center space-x-4 mb-8">
                {Object.entries(formData.socialLinks).map(([platform, url]) => {
                  if (!url) return null;
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-gray-600"
                    >
                      <Link className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            )}

            {/* Departments */}
            {formData.departments.length > 0 && (
              <div className="mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Departments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.departments.map(dept => (
                    <div
                      key={dept.id}
                      className="p-4 bg-gray-50 rounded-lg"
                    >
                      <h3 className="font-medium text-gray-900">{dept.name}</h3>
                      <p className="text-sm text-gray-600 mt-1">{dept.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Team Members */}
            {formData.team.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {formData.team.map(member => (
                    <div
                      key={member.id}
                      className="p-4 bg-gray-50 rounded-lg"
                    >
                      <h3 className="font-medium text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-600">{member.role}</p>
                      {member.department && (
                        <p className="text-sm text-gray-500 mt-1">
                          {formData.departments.find(d => d.id === member.department)?.name}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
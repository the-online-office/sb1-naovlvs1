import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Upload, AlertCircle, ArrowLeft, MapPin, Clock, DollarSign, Building2, Briefcase } from 'lucide-react';

// Mock job data - replace with actual data fetching
const JOB_DATA = {
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
};

export function JobApplicationPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resume: null as File | null,
    portfolio: '',
    linkedIn: '',
    github: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.resume) newErrors.resume = 'Resume is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Handle form submission
    console.log('Submitting application:', formData);
    // Redirect to success page or dashboard
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Job</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-32">
              <div className="p-6 border-b">
                <div className="flex items-start space-x-4">
                  <img
                    src={JOB_DATA.company.logo}
                    alt={JOB_DATA.company.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">{JOB_DATA.title}</h2>
                    <p className="text-gray-600">{JOB_DATA.company.name}</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                {/* Quick Info */}
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>{JOB_DATA.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Briefcase className="h-5 w-5" />
                    <span>{JOB_DATA.type}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <DollarSign className="h-5 w-5" />
                    <span>${JOB_DATA.salary.min.toLocaleString()} - ${JOB_DATA.salary.max.toLocaleString()} per {JOB_DATA.salary.period}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>Posted {JOB_DATA.posted}</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Description</h3>
                  <p className="text-gray-600">{JOB_DATA.description}</p>
                </div>

                {/* Requirements */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {JOB_DATA.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Required Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {JOB_DATA.skills.map((skill) => (
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
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h1 className="text-2xl font-bold text-gray-900">Apply for {JOB_DATA.title}</h1>
                <p className="text-gray-600 mt-1">at {JOB_DATA.company.name}</p>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                        errors.fullName ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Resume Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Resume *
                  </label>
                  <div className={`border-2 border-dashed rounded-lg p-4 text-center ${
                    errors.resume ? 'border-red-500' : 'border-gray-300'
                  }`}>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setFormData(prev => ({ 
                        ...prev, 
                        resume: e.target.files?.[0] || null 
                      }))}
                      className="hidden"
                      id="resume-upload"
                    />
                    <label
                      htmlFor="resume-upload"
                      className="cursor-pointer"
                    >
                      <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {formData.resume ? formData.resume.name : 'Upload your resume (PDF, DOC, DOCX)'}
                      </p>
                    </label>
                  </div>
                  {errors.resume && (
                    <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
                  )}
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Cover Letter
                  </label>
                  <textarea
                    value={formData.coverLetter}
                    onChange={(e) => setFormData(prev => ({ ...prev, coverLetter: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Why are you interested in this position?"
                  />
                </div>

                {/* Additional Links */}
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Portfolio URL
                    </label>
                    <input
                      type="url"
                      value={formData.portfolio}
                      onChange={(e) => setFormData(prev => ({ ...prev, portfolio: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="https://your-portfolio.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn Profile
                    </label>
                    <input
                      type="url"
                      value={formData.linkedIn}
                      onChange={(e) => setFormData(prev => ({ ...prev, linkedIn: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="https://linkedin.com/in/your-profile"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      GitHub Profile
                    </label>
                    <input
                      type="url"
                      value={formData.github}
                      onChange={(e) => setFormData(prev => ({ ...prev, github: e.target.value }))}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="https://github.com/your-username"
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    placeholder="Any other information you'd like to share?"
                  />
                </div>

                {/* Notice */}
                <div className="bg-blue-50 p-4 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                  <p className="text-sm text-blue-700">
                    By submitting this application, you agree to our terms and conditions. Your information will be handled according to our privacy policy.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
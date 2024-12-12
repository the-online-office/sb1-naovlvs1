import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { CompanyDetailsForm } from '../components/companies/CompanyDetailsForm';
import { CompanyBrandingForm } from '../components/companies/CompanyBrandingForm';
import { CompanyTeamForm } from '../components/companies/CompanyTeamForm';
import { CompanyPreview } from '../components/companies/CompanyPreview';

const tabs = [
  { id: 'company-details', label: 'Company Details' },
  { id: 'branding', label: 'Branding & Media' },
  { id: 'team', label: 'Team & Structure' }
];

export function CreateCompanyPage() {
  const [activeTab, setActiveTab] = useState('company-details');
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    industry: '',
    description: '',
    location: '',
    website: '',
    size: '',
    yearFounded: '',
    logo: null as File | null,
    coverImage: null as File | null,
    brandColors: {
      primary: '#00A651',
      secondary: '#62F9C9'
    },
    socialLinks: {
      linkedin: '',
      twitter: '',
      facebook: '',
      instagram: ''
    },
    departments: [],
    team: []
  });
  const navigate = useNavigate();

  const handleFormChange = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  if (showPreview) {
    return <CompanyPreview formData={formData} onBack={() => setShowPreview(false)} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => navigate('/dashboard/companies')}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Create New Company</h1>
          <p className="text-sm text-gray-600">Fill in the details to create your company profile</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-brand-800 rounded-full transition-all duration-300"
            style={{ 
              width: `${
                (tabs.findIndex(tab => tab.id === activeTab) + 1) * 33.33
              }%` 
            }}
          />
        </div>
        <div className="absolute top-4 left-0 right-0 pb-16">
          <div className="flex justify-between">
            {tabs.map((tab, index) => (
              <div 
                key={tab.id}
                className="flex flex-col items-center relative"
              >
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2
                    ${activeTab === tab.id 
                      ? 'border-brand-800 bg-brand-800 text-white'
                      : index <= tabs.findIndex(t => t.id === activeTab)
                        ? 'border-brand-800 text-brand-800'
                        : 'border-gray-300 text-gray-300'
                    }`}
                >
                  {index + 1}
                </button>
                <span className={`text-sm whitespace-nowrap ${
                  activeTab === tab.id ? 'text-gray-900' : 'text-gray-500'
                }`}>
                  {tab.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form content */}
      <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
        {activeTab === 'company-details' && (
          <CompanyDetailsForm
            formData={formData}
            onChange={handleFormChange}
          />
        )}
        {activeTab === 'branding' && (
          <CompanyBrandingForm
            formData={formData}
            onChange={handleFormChange}
          />
        )}
        {activeTab === 'team' && (
          <CompanyTeamForm
            formData={formData}
            onChange={handleFormChange}
          />
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between pt-6">
        <button
          onClick={() => {
            const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
            if (currentIndex > 0) {
              setActiveTab(tabs[currentIndex - 1].id);
            }
          }}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          disabled={activeTab === tabs[0].id}
        >
          Previous
        </button>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setShowPreview(true)}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Preview
          </button>
          
          <button
            onClick={() => {
              const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
              if (currentIndex < tabs.length - 1) {
                setActiveTab(tabs[currentIndex + 1].id);
              }
            }}
            className="px-6 py-2 bg-brand-800 text-white rounded-lg hover:bg-brand-700 transition-colors"
          >
            {activeTab === tabs[tabs.length - 1].id ? 'Create Company' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
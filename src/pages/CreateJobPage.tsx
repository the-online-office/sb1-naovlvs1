import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { JobDetailsForm } from '../components/jobs/JobDetailsForm';
import { ContractAndSalaryForm } from '../components/jobs/ContractAndSalaryForm';
import { RequirementsForm } from '../components/jobs/RequirementsForm';
import { ScreeningQuestionsForm } from '../components/jobs/ScreeningQuestionsForm';
import { AdditionalOptionsForm } from '../components/jobs/AdditionalOptionsForm';
import { JobPreview } from '../components/jobs/JobPreview';

const tabs = [
  { id: 'job-details', label: 'Job Details' },
  { id: 'contract-and-salary', label: 'Contract & Salary' },
  { id: 'requirements', label: 'Requirements' },
  { id: 'screening', label: 'Screening Questions' },
  { id: 'additional-options', label: 'Additional Options' }
];

export function CreateJobPage() {
  const [activeTab, setActiveTab] = useState('job-details');
  const [showPreview, setShowPreview] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    responsibilities: '',
    categories: [],
    skills: [],
    expiryDate: '',
    amount: '',
    contractType: '',
    timeCommitment: '',
    salaryType: '',
    requirements: '',
    deliverables: [],
    screeningQuestions: [],
    hiringManager: false
  });
  const navigate = useNavigate();

  const handleFormChange = (data: Partial<typeof formData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  if (showPreview) {
    return <JobPreview formData={formData} onBack={() => setShowPreview(false)} />;
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </button>
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Create New Job</h1>
          <p className="text-sm text-gray-600">Fill in the details to post a new job</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-brand-800 rounded-full transition-all duration-300"
            style={{ 
              width: `${
                (tabs.findIndex(tab => tab.id === activeTab) + 1) * 20
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
      <div className="mt-24 bg-white rounded-lg shadow-lg p-8">
        {activeTab === 'job-details' && (
          <JobDetailsForm
            formData={formData}
            onChange={handleFormChange}
          />
        )}
        {activeTab === 'contract-and-salary' && (
          <ContractAndSalaryForm
            formData={formData}
            onChange={handleFormChange}
          />
        )}
        {activeTab === 'requirements' && (
          <RequirementsForm
            formData={formData}
            onChange={handleFormChange}
          />
        )}
        {activeTab === 'screening' && (
          <ScreeningQuestionsForm
            formData={formData}
            onChange={handleFormChange}
          />
        )}
        {activeTab === 'additional-options' && (
          <AdditionalOptionsForm
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
            {activeTab === tabs[tabs.length - 1].id ? 'Post Job' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
}
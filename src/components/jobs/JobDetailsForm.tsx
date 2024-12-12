import React from 'react';
import { Calendar } from 'lucide-react';

interface JobDetailsFormProps {
  formData: {
    title: string;
    description: string;
    responsibilities: string;
    categories: string[];
    skills: string[];
    expiryDate: string;
  };
  onChange: (data: Partial<JobDetailsFormProps['formData']>) => void;
}

export function JobDetailsForm({ formData, onChange }: JobDetailsFormProps) {
  const handleSkillsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    onChange({ skills });
  };

  const handleCategoriesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const categories = e.target.value.split(',').map(category => category.trim());
    onChange({ categories });
  };

  return (
    <div className="space-y-6">
      {/* Job Title */}
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
          Job Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => onChange({ title: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g. Senior Frontend Developer"
        />
      </div>

      {/* Job Description */}
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
          Job Description
        </label>
        <textarea
          id="description"
          value={formData.description}
          onChange={(e) => onChange({ description: e.target.value })}
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe the job requirements, responsibilities, and qualifications..."
        />
      </div>

      {/* Job Responsibilities */}
      <div>
        <label htmlFor="responsibilities" className="block text-sm font-medium text-gray-700 mb-1">
          Job Responsibilities
        </label>
        <textarea
          id="responsibilities"
          value={formData.responsibilities}
          onChange={(e) => onChange({ responsibilities: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="List the key responsibilities for this position..."
        />
      </div>

      {/* Job Categories */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Job Categories (separate with commas)
        </label>
        <textarea
          value={formData.categories.join(', ')}
          onChange={handleCategoriesChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="e.g. Web Development, UI/UX Design, Frontend"
          rows={2}
        />
      </div>

      {/* Skills */}
      <div>
        <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
          Required Skills
        </label>
        <textarea
          id="skills"
          value={formData.skills.join(', ')}
          onChange={handleSkillsChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter skills separated by commas (e.g. React, TypeScript, Node.js)"
          rows={3}
        />
      </div>

      {/* Expiry Date */}
      <div>
        <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
          Expiry Date
        </label>
        <div className="relative">
          <input
            type="date"
            id="expiryDate"
            value={formData.expiryDate}
            onChange={(e) => onChange({ expiryDate: e.target.value })}
            min={new Date().toISOString().split('T')[0]}
            className="w-full pl-12 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}
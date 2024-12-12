import React from 'react';
import { DollarSign } from 'lucide-react';

interface AdditionalOptionsFormProps {
  formData: {
    hiringManager: boolean;
  };
  onChange: (data: Partial<AdditionalOptionsFormProps['formData']>) => void;
}

export function AdditionalOptionsForm({ formData, onChange }: AdditionalOptionsFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Hiring Options</h3>
        
        <div className="space-y-4">
          <label className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              checked={!formData.hiringManager}
              onChange={() => onChange({ hiringManager: false })}
              className="mt-1"
            />
            <div className="flex-grow">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">Manage hiring yourself</span>
                <span className="text-gray-500">Free</span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Handle the entire hiring process on your own. Best for those who have experience in hiring.
              </p>
            </div>
          </label>

          <label className="flex items-start space-x-3 p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
            <input
              type="radio"
              checked={formData.hiringManager}
              onChange={() => onChange({ hiringManager: true })}
              className="mt-1"
            />
            <div className="flex-grow">
              <div className="flex justify-between">
                <span className="font-medium text-gray-900">Hire a hiring manager</span>
                <div className="flex items-center text-gray-900">
                  <DollarSign className="h-4 w-4" />
                  <span>10</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Let our experienced hiring managers handle the recruitment process for you.
              </p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { DollarSign, Clock, Briefcase, Calendar } from 'lucide-react';

interface ContractAndSalaryFormProps {
  formData: {
    amount: string;
    contractType: string;
    timeCommitment: string;
    salaryType: string;
  };
  onChange: (data: Partial<ContractAndSalaryFormProps['formData']>) => void;
}

export function ContractAndSalaryForm({ formData, onChange }: ContractAndSalaryFormProps) {
  return (
    <div className="space-y-6">
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
          Amount
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            id="amount"
            value={formData.amount}
            onChange={(e) => onChange({ amount: e.target.value })}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter amount"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contractType" className="block text-sm font-medium text-gray-700 mb-1">
          Contract Type
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Briefcase className="h-5 w-5 text-gray-400" />
          </div>
          <select
            id="contractType"
            value={formData.contractType}
            onChange={(e) => onChange({ contractType: e.target.value })}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select contract type</option>
            <option value="fixed">Fixed Price</option>
            <option value="hourly">Hourly Rate</option>
            <option value="milestone">Milestone Based</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timeCommitment" className="block text-sm font-medium text-gray-700 mb-1">
          Time Commitment
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Clock className="h-5 w-5 text-gray-400" />
          </div>
          <select
            id="timeCommitment"
            value={formData.timeCommitment}
            onChange={(e) => onChange({ timeCommitment: e.target.value })}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select time commitment</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="flexible">Flexible Hours</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="salaryType" className="block text-sm font-medium text-gray-700 mb-1">
          Salary Type
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Calendar className="h-5 w-5 text-gray-400" />
          </div>
          <select
            id="salaryType"
            value={formData.salaryType}
            onChange={(e) => onChange({ salaryType: e.target.value })}
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select salary type</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="project">Per Project</option>
          </select>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Plus, Trash2, GripVertical } from 'lucide-react';

interface CompanyTeamFormProps {
  formData: {
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
  onChange: (data: Partial<CompanyTeamFormProps['formData']>) => void;
}

export function CompanyTeamForm({ formData, onChange }: CompanyTeamFormProps) {
  const addDepartment = () => {
    const newDepartment = {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      description: ''
    };
    onChange({
      departments: [...formData.departments, newDepartment]
    });
  };

  const updateDepartment = (id: string, updates: Partial<typeof formData.departments[0]>) => {
    onChange({
      departments: formData.departments.map(dept =>
        dept.id === id ? { ...dept, ...updates } : dept
      )
    });
  };

  const removeDepartment = (id: string) => {
    onChange({
      departments: formData.departments.filter(dept => dept.id !== id)
    });
  };

  const addTeamMember = () => {
    const newMember = {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      role: '',
      department: '',
      email: ''
    };
    onChange({
      team: [...formData.team, newMember]
    });
  };

  const updateTeamMember = (id: string, updates: Partial<typeof formData.team[0]>) => {
    onChange({
      team: formData.team.map(member =>
        member.id === id ? { ...member, ...updates } : member
      )
    });
  };

  const removeTeamMember = (id: string) => {
    onChange({
      team: formData.team.filter(member => member.id !== id)
    });
  };

  return (
    <div className="space-y-12">
      {/* Departments */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">Departments</h3>
          <button
            onClick={addDepartment}
            className="flex items-center space-x-2 px-4 py-2 bg-brand-800 text-white rounded-lg hover:bg-brand-700 relative z-10"
          >
            <Plus className="h-4 w-4" />
            <span>Add Department</span>
          </button>
        </div>

        <div className="space-y-6">
          {formData.departments.map((dept, index) => (
            <div
              key={dept.id}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-800 rounded-full flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 cursor-grab">
                    <GripVertical className="h-5 w-5" />
                  </button>
                </div>
                <button
                  onClick={() => removeDepartment(dept.id)}
                  className="p-2 text-gray-400 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 space-y-4">
                <input
                  type="text"
                  value={dept.name}
                  onChange={(e) => updateDepartment(dept.id, { name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="Department name"
                />
                <textarea
                  value={dept.description}
                  onChange={(e) => updateDepartment(dept.id, { description: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  placeholder="Department description"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Members */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-medium text-gray-900">Team Members</h3>
          <button
            onClick={addTeamMember}
            className="flex items-center space-x-2 px-4 py-2 bg-brand-800 text-white rounded-lg hover:bg-brand-700 relative z-10"
          >
            <Plus className="h-4 w-4" />
            <span>Add Team Member</span>
          </button>
        </div>

        <div className="space-y-6">
          {formData.team.map((member, index) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-brand-800 rounded-full flex items-center justify-center text-white">
                    {index + 1}
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 cursor-grab">
                    <GripVertical className="h-5 w-5" />
                  </button>
                </div>
                <button
                  onClick={() => removeTeamMember(member.id)}
                  className="p-2 text-gray-400 hover:text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={member.name}
                    onChange={(e) => updateTeamMember(member.id, { name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    placeholder="Full name"
                  />
                  <input
                    type="email"
                    value={member.email}
                    onChange={(e) => updateTeamMember(member.id, { email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    placeholder="Email address"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    value={member.role}
                    onChange={(e) => updateTeamMember(member.id, { role: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                    placeholder="Role / Position"
                  />
                  <select
                    value={member.department}
                    onChange={(e) => updateTeamMember(member.id, { department: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500"
                  >
                    <option value="">Select Department</option>
                    {formData.departments.map(dept => (
                      <option key={dept.id} value={dept.id}>{dept.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
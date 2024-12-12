import React from 'react';
import { GripVertical, Plus, Trash2, Edit2, Save, X } from 'lucide-react';

interface Deliverable {
  id: string;
  title: string;
  description: string;
  date: string;
  isEditing?: boolean;
}

interface RequirementsFormProps {
  formData: {
    requirements: string;
    deliverables: Deliverable[];
  };
  onChange: (data: Partial<RequirementsFormProps['formData']>) => void;
}

export function RequirementsForm({ formData, onChange }: RequirementsFormProps) {
  const addDeliverable = () => {
    const newDeliverable = {
      id: Math.random().toString(36).substr(2, 9),
      title: '',
      description: '',
      date: '',
      isEditing: true
    };
    onChange({ 
      deliverables: [...formData.deliverables, newDeliverable] 
    });
  };

  const toggleEdit = (id: string) => {
    onChange({
      deliverables: formData.deliverables.map(d => 
        d.id === id ? { ...d, isEditing: !d.isEditing } : d
      )
    });
  };

  const removeDeliverable = (id: string) => {
    onChange({
      deliverables: formData.deliverables.filter(d => d.id !== id)
    });
  };

  const updateDeliverable = (id: string, updates: Partial<Deliverable>) => {
    onChange({
      deliverables: formData.deliverables.map(d => 
        d.id === id ? { ...d, ...updates } : d
      )
    });
  };

  return (
    <div className="space-y-8">
      {/* Job Requirements */}
      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
          Job Requirements
        </label>
        <textarea
          id="requirements"
          value={formData.requirements}
          onChange={(e) => onChange({ requirements: e.target.value })}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="List the requirements and qualifications needed..."
        />
      </div>

      {/* Deliverables */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Job Deliverables</h3>
        </div>

        <div className="space-y-4">
          {formData.deliverables.map((deliverable, index) => (
            <div 
              key={deliverable.id}
              className="relative bg-gray-50 p-4 rounded-lg border border-gray-200 transition-all duration-200"
            >
              <div className="absolute left-4 -ml-8 h-full">
                <div className={`h-full w-0.5 ${index === formData.deliverables.length - 1 ? 'bg-blue-200' : 'bg-gray-200'}`} />
              </div>
              
              <div className="flex items-start space-x-4">
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white
                  ${index === formData.deliverables.length - 1 
                    ? 'bg-white border-2 border-blue-600 text-blue-600' 
                    : 'bg-blue-600'}`}>
                  {index + 1}
                </div>
                
                <div className="flex-grow space-y-4">
                  <div className={`grid grid-cols-2 gap-4 ${!deliverable.isEditing ? 'opacity-75' : ''}`}>
                    <input
                      type="text"
                      value={deliverable.title}
                      onChange={(e) => updateDeliverable(deliverable.id, { title: e.target.value })}
                      className={`px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                        ${!deliverable.isEditing ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                      disabled={!deliverable.isEditing}
                      placeholder="Deliverable title"
                    />
                    <input
                      type="date"
                      value={deliverable.date}
                      onChange={(e) => updateDeliverable(deliverable.id, { date: e.target.value })}
                      className={`px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                        ${!deliverable.isEditing ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                      disabled={!deliverable.isEditing}
                    />
                  </div>
                  <textarea
                    value={deliverable.description}
                    onChange={(e) => updateDeliverable(deliverable.id, { description: e.target.value })}
                    rows={2}
                    className={`w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                      ${!deliverable.isEditing ? 'bg-gray-50 cursor-not-allowed' : ''}`}
                    disabled={!deliverable.isEditing}
                    placeholder="Describe this deliverable..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  {deliverable.isEditing ? (
                    <button
                      onClick={() => toggleEdit(deliverable.id)}
                      className="p-2 text-green-600 hover:text-green-700"
                      title="Save changes"
                    >
                      <Save className="h-5 w-5" />
                    </button>
                  ) : (
                    <button
                      onClick={() => toggleEdit(deliverable.id)}
                      className="p-2 text-gray-400 hover:text-gray-600"
                      title="Edit deliverable"
                    >
                      <Edit2 className="h-5 w-5" />
                    </button>
                  )}
                  <button 
                    className="p-2 text-gray-400 hover:text-gray-600 cursor-grab"
                    title="Drag to reorder"
                  >
                    <GripVertical className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => removeDeliverable(deliverable.id)}
                    className="p-2 text-gray-400 hover:text-red-600"
                    title="Remove deliverable"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          
          {/* Add Deliverable Button */}
          <button
            onClick={addDeliverable}
            className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
          >
            <Plus className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Add New Deliverable</span>
          </button>
        </div>
      </div>
    </div>
  );
}
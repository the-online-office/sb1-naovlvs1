import React from 'react';
import { Plus, Trash2, GripVertical } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  type: 'text' | 'multiple_choice' | 'yes_no';
  options?: string[];
  required: boolean;
}

interface ScreeningQuestionsFormProps {
  formData: {
    screeningQuestions: Question[];
  };
  onChange: (data: Partial<ScreeningQuestionsFormProps['formData']>) => void;
}

export function ScreeningQuestionsForm({ formData, onChange }: ScreeningQuestionsFormProps) {
  const addQuestion = () => {
    const newQuestion: Question = {
      id: Math.random().toString(36).substr(2, 9),
      question: '',
      type: 'text',
      required: true,
      options: []
    };
    onChange({
      screeningQuestions: [...formData.screeningQuestions, newQuestion]
    });
  };

  const updateQuestion = (id: string, updates: Partial<Question>) => {
    onChange({
      screeningQuestions: formData.screeningQuestions.map(q =>
        q.id === id ? { ...q, ...updates } : q
      )
    });
  };

  const removeQuestion = (id: string) => {
    onChange({
      screeningQuestions: formData.screeningQuestions.filter(q => q.id !== id)
    });
  };

  const addOption = (questionId: string) => {
    onChange({
      screeningQuestions: formData.screeningQuestions.map(q =>
        q.id === questionId ? { ...q, options: [...(q.options || []), ''] } : q
      )
    });
  };

  const updateOption = (questionId: string, index: number, value: string) => {
    onChange({
      screeningQuestions: formData.screeningQuestions.map(q =>
        q.id === questionId ? {
          ...q,
          options: q.options?.map((opt, i) => i === index ? value : opt)
        } : q
      )
    });
  };

  const removeOption = (questionId: string, index: number) => {
    onChange({
      screeningQuestions: formData.screeningQuestions.map(q =>
        q.id === questionId ? {
          ...q,
          options: q.options?.filter((_, i) => i !== index)
        } : q
      )
    });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-medium text-gray-900">Screening Questions</h3>

      <div className="space-y-6">
        {formData.screeningQuestions.map((question, index) => (
          <div
            key={question.id}
            className="bg-white p-6 rounded-lg border border-gray-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  {index + 1}
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 cursor-grab">
                  <GripVertical className="h-5 w-5" />
                </button>
              </div>
              <button
                onClick={() => removeQuestion(question.id)}
                type="button"
                className="p-2 text-gray-400 hover:text-red-600"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <div>
                <input
                  type="text"
                  value={question.question}
                  onChange={(e) => updateQuestion(question.id, { question: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your question"
                />
              </div>

              <div className="flex items-center space-x-4">
                <select
                  value={question.type}
                  onChange={(e) => updateQuestion(question.id, { 
                    type: e.target.value as Question['type'],
                    options: e.target.value === 'multiple_choice' ? [''] : undefined
                  })}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="text">Text Answer</option>
                  <option value="multiple_choice">Multiple Choice</option>
                  <option value="yes_no">Yes/No</option>
                </select>

                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={question.required}
                    onChange={(e) => updateQuestion(question.id, { required: e.target.checked })}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">Required</span>
                </label>
              </div>

              {question.type === 'multiple_choice' && (
                <div className="space-y-2">
                  {question.options?.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={option}
                        onChange={(e) => updateOption(question.id, optionIndex, e.target.value)}
                        className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={`Option ${optionIndex + 1}`}
                      />
                      <button
                        onClick={() => removeOption(question.id, optionIndex)}
                        type="button"
                        className="p-2 text-gray-400 hover:text-red-600"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => addOption(question.id)}
                    type="button"
                    className="text-sm text-blue-600 hover:text-blue-700"
                  >
                    + Add Option
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Add Question Button moved to bottom */}
      <button
        onClick={() => addQuestion()}
        type="button"
        className="w-full flex items-center justify-center space-x-2 p-4 mt-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
      >
        <Plus className="h-5 w-5 text-gray-400" />
        <span className="text-gray-600">Add New Question</span>
      </button>
    </div>
  );
}
import React from 'react';
import { ArrowLeft, Calendar, Clock, DollarSign, Briefcase } from 'lucide-react';

interface JobPreviewProps {
  formData: {
    title: string;
    description: string;
    responsibilities: string;
    categories: string[];
    skills: string[];
    expiryDate: string;
    amount: string;
    contractType: string;
    timeCommitment: string;
    salaryType: string;
    requirements: string;
    deliverables: Array<{
      title: string;
      description: string;
      date: string;
    }>;
    screeningQuestions: Array<{
      question: string;
      type: string;
      required: boolean;
    }>;
  };
  onBack: () => void;
}

export function JobPreview({ formData, onBack }: JobPreviewProps) {
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
        <div className="p-8 border-b">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{formData.title}</h1>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            {formData.amount && (
              <div className="flex items-center space-x-2">
                <DollarSign className="h-4 w-4" />
                <span>{formData.amount} ({formData.salaryType})</span>
              </div>
            )}
            {formData.contractType && (
              <div className="flex items-center space-x-2">
                <Briefcase className="h-4 w-4" />
                <span>{formData.contractType}</span>
              </div>
            )}
            {formData.timeCommitment && (
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{formData.timeCommitment}</span>
              </div>
            )}
            {formData.expiryDate && (
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>Expires: {new Date(formData.expiryDate).toLocaleDateString()}</span>
              </div>
            )}
          </div>
        </div>

        <div className="p-8 space-y-8">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Job Description</h2>
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{formData.description}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Responsibilities</h2>
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{formData.responsibilities}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Requirements</h2>
            <div className="prose max-w-none">
              <p className="whitespace-pre-wrap">{formData.requirements}</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {formData.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2">
              {formData.categories.map((category, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                >
                  {category}
                </span>
              ))}
            </div>
          </section>

          {formData.deliverables.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Deliverables</h2>
              <div className="space-y-4">
                {formData.deliverables.map((deliverable, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900">{deliverable.title}</h3>
                      <span className="text-sm text-gray-500">
                        Due: {new Date(deliverable.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-gray-600">{deliverable.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {formData.screeningQuestions.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Screening Questions</h2>
              <div className="space-y-4">
                {formData.screeningQuestions.map((question, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <div className="flex items-start space-x-2">
                      <span className="font-medium text-gray-900">{index + 1}.</span>
                      <div>
                        <p className="font-medium text-gray-900">{question.question}</p>
                        {question.required && (
                          <span className="text-sm text-red-600">* Required</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
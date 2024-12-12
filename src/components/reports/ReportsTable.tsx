import React from 'react';
import { ChevronDown, Clock, Paperclip, MessageSquare } from 'lucide-react';
import type { Report, Task } from '../../types/reports';

interface ReportsTableProps {
  reports: Report[];
  tasks: Task[];
  onToggleExpand: (reportId: string) => void;
}

export function ReportsTable({ reports, tasks, onToggleExpand }: ReportsTableProps) {
  const getDueDateStatus = (dueDate: string) => {
    const today = new Date();
    const due = new Date(dueDate);
    const diffDays = Math.ceil((due.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return { color: 'red', text: `${Math.abs(diffDays)} days overdue` };
    if (diffDays <= 7) return { color: 'yellow', text: `${diffDays} days left` };
    return { color: 'green', text: `${diffDays} days left` };
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Created
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Modified
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tasks
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Members
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {reports.map((report) => (
            <React.Fragment key={report.id}>
              <tr 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onToggleExpand(report.id)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <ChevronDown className={`h-5 w-5 mr-2 text-gray-400 transition-transform ${
                      report.expanded ? 'transform rotate-180' : ''
                    }`} />
                    <div>
                      <div className="font-medium text-gray-900">{report.title}</div>
                      <div className="text-sm text-gray-500">{report.jobTitle}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(report.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(report.lastModified).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-900">{report.tasks.total}</span>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center px-2 py-1 bg-green-100 rounded-md">
                        <span className="text-xs font-medium text-green-800">{report.tasks.completed}</span>
                      </div>
                      <div className="flex items-center px-2 py-1 bg-yellow-100 rounded-md">
                        <span className="text-xs font-medium text-yellow-800">{report.tasks.inProgress}</span>
                      </div>
                      <div className="flex items-center px-2 py-1 bg-red-100 rounded-md">
                        <span className="text-xs font-medium text-red-800">{report.tasks.todo}</span>
                      </div>
                      <div className="flex items-center px-2 py-1 bg-gray-100 rounded-md">
                        <span className="text-xs font-medium text-gray-800">{report.tasks.archived}</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex -space-x-2">
                    {report.members.map((member) => (
                      <img
                        key={member.id}
                        src={member.avatar}
                        alt={member.name}
                        className="h-8 w-8 rounded-full border-2 border-white"
                        title={member.name}
                      />
                    ))}
                  </div>
                </td>
              </tr>
              {report.expanded && (
                <tr>
                  <td colSpan={5} className="px-6 py-4 bg-gray-50">
                    <div className="space-y-4">
                      {tasks.map((task) => (
                        <div key={task.id} className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="flex-shrink-0">
                                <div className={`w-3 h-3 rounded-full ${
                                  task.status === 'completed' ? 'bg-green-500' :
                                  task.status === 'in_progress' ? 'bg-yellow-500' :
                                  'bg-gray-500'
                                }`} />
                              </div>
                              <div>
                                <h4 className="text-sm font-medium text-gray-900">{task.name}</h4>
                                <div className="flex items-center space-x-4 mt-1">
                                  <div className="flex -space-x-2">
                                    {task.assignees.map((assignee) => (
                                      <img
                                        key={assignee.id}
                                        src={assignee.avatar}
                                        alt={assignee.name}
                                        className="h-6 w-6 rounded-full border-2 border-white"
                                        title={assignee.name}
                                      />
                                    ))}
                                  </div>
                                  <div className="flex items-center space-x-2 text-sm">
                                    <Clock className="h-4 w-4 text-gray-400" />
                                    <span className={`text-${getDueDateStatus(task.dueDate).color}-600`}>
                                      {getDueDateStatus(task.dueDate).text}
                                    </span>
                                  </div>
                                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                    task.priority === 'high' ? 'bg-red-100 text-red-800' :
                                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800'
                                  }`}>
                                    {task.priority}
                                  </span>
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800">
                                    {task.category}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <div className="flex items-center space-x-1">
                                <Paperclip className="h-4 w-4" />
                                <span>{task.attachments}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <MessageSquare className="h-4 w-4" />
                                <span>{task.messages}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
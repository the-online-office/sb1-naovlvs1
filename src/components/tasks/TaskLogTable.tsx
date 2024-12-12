import React from 'react';
import { ChevronDown, Clock, MessageSquare, Paperclip } from 'lucide-react';

interface TaskLogTableProps {
  tasks: any[];
  onToggleExpand: (taskId: string) => void;
}

export function TaskLogTable({ tasks, onToggleExpand }: TaskLogTableProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Task
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Priority
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Due Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Assignee
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Progress
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {tasks.map((task) => (
            <React.Fragment key={task.id}>
              <tr 
                className="hover:bg-gray-50 cursor-pointer"
                onClick={() => onToggleExpand(task.id)}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <ChevronDown className={`h-5 w-5 mr-2 text-gray-400 transition-transform ${
                      task.expanded ? 'transform rotate-180' : ''
                    }`} />
                    <div>
                      <div className="font-medium text-gray-900">{task.title}</div>
                      <div className="text-sm text-gray-500">{task.project}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(task.dueDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={task.assignee.avatar}
                      alt={task.assignee.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <span className="ml-2 text-sm text-gray-900">{task.assignee.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-brand-800 h-2 rounded-full"
                      style={{ width: `${task.progress}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 mt-1">{task.progress}%</span>
                </td>
              </tr>
              {task.expanded && (
                <tr>
                  <td colSpan={6} className="px-6 py-4 bg-gray-50">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {task.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-brand-100 text-brand-800 rounded-md text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="space-y-2">
                        {task.activity.map((item: any, index: number) => (
                          <div key={index} className="flex items-start space-x-3">
                            {item.type === 'comment' && (
                              <MessageSquare className="h-4 w-4 text-gray-400 mt-1" />
                            )}
                            {item.type === 'attachment' && (
                              <Paperclip className="h-4 w-4 text-gray-400 mt-1" />
                            )}
                            {item.type === 'status' && (
                              <Clock className="h-4 w-4 text-gray-400 mt-1" />
                            )}
                            <div>
                              <p className="text-sm text-gray-900">{item.content}</p>
                              <p className="text-xs text-gray-500">{item.timestamp}</p>
                            </div>
                          </div>
                        ))}
                      </div>
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
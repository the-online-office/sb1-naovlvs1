import React, { useState } from 'react';
import { TaskLogHeader } from '../components/tasks/TaskLogHeader';
import { TaskLogControls } from '../components/tasks/TaskLogControls';
import { TaskLogTable } from '../components/tasks/TaskLogTable';
import { TaskLogPagination } from '../components/tasks/TaskLogPagination';

// Sample data
const MOCK_TASKS = [
  {
    id: '1',
    title: 'Homepage Design Implementation',
    project: 'E-commerce Website',
    status: 'in_progress',
    priority: 'high',
    dueDate: '2024-03-25',
    assignee: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    progress: 65,
    tags: ['Design', 'Frontend'],
    activity: [
      { type: 'comment', content: 'Updated the hero section design', timestamp: '2 hours ago' },
      { type: 'attachment', content: 'design-v2.fig', timestamp: '5 hours ago' }
    ]
  },
  {
    id: '2',
    title: 'API Integration',
    project: 'Mobile App',
    status: 'pending',
    priority: 'medium',
    dueDate: '2024-03-28',
    assignee: {
      name: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    progress: 30,
    tags: ['Backend', 'API'],
    activity: [
      { type: 'status', content: 'Started implementation', timestamp: '1 day ago' }
    ]
  }
];

export function TaskLogPage() {
  const [tasks, setTasks] = useState(MOCK_TASKS);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('dueDate');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [rowsPerPage, setRowsPerPage] = useState('5');

  const toggleTaskExpansion = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId 
        ? { ...task, expanded: !task.expanded }
        : task
    ));
  };

  return (
    <div className="space-y-6">
      <TaskLogHeader />
      
      <TaskLogControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={setRowsPerPage}
      />

      <TaskLogTable
        tasks={tasks}
        onToggleExpand={toggleTaskExpansion}
      />

      <TaskLogPagination
        totalItems={tasks.length}
        visibleItems={tasks.length}
      />
    </div>
  );
}
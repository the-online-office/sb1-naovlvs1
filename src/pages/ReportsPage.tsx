import React, { useState } from 'react';
import { ReportsHeader } from '../components/reports/ReportsHeader';
import { ReportsControls } from '../components/reports/ReportsControls';
import { ReportsTable } from '../components/reports/ReportsTable';
import { ReportsPagination } from '../components/reports/ReportsPagination';
import type { Report, Task } from '../types/reports';

// Sample data
const MOCK_REPORTS: Report[] = [
  {
    id: '1',
    title: 'Website Development Progress Report',
    jobTitle: 'E-commerce Website Development',
    createdAt: '2024-03-15',
    lastModified: '2024-03-20',
    tasks: {
      total: 12,
      completed: 5,
      inProgress: 3,
      todo: 2,
      archived: 2
    },
    members: [
      {
        id: '1',
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      },
      {
        id: '2',
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ]
  },
  {
    id: '2',
    title: 'Mobile App Development Status',
    jobTitle: 'iOS App Development',
    createdAt: '2024-03-10',
    lastModified: '2024-03-18',
    tasks: {
      total: 15,
      completed: 8,
      inProgress: 4,
      todo: 3,
      archived: 0
    },
    members: [
      {
        id: '3',
        name: 'Mike Johnson',
        avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ]
  }
];

const MOCK_TASKS: Task[] = [
  {
    id: '1',
    name: 'Homepage Design',
    status: 'completed',
    assignees: [
      {
        id: '1',
        name: 'John Doe',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ],
    dueDate: '2024-03-25',
    priority: 'high',
    category: 'Design',
    attachments: 3,
    messages: 5
  },
  {
    id: '2',
    name: 'API Integration',
    status: 'in_progress',
    assignees: [
      {
        id: '2',
        name: 'Jane Smith',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      }
    ],
    dueDate: '2024-03-28',
    priority: 'medium',
    category: 'Development',
    attachments: 2,
    messages: 8
  }
];

export function ReportsPage() {
  const [reports, setReports] = useState(MOCK_REPORTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('created');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [rowsPerPage, setRowsPerPage] = useState('5');

  const toggleReportExpansion = (reportId: string) => {
    setReports(reports.map(report => 
      report.id === reportId 
        ? { ...report, expanded: !report.expanded }
        : report
    ));
  };

  return (
    <div className="space-y-6">
      <ReportsHeader />
      
      <ReportsControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={setRowsPerPage}
      />

      <ReportsTable
        reports={reports}
        tasks={MOCK_TASKS}
        onToggleExpand={toggleReportExpansion}
      />

      <ReportsPagination
        totalItems={reports.length}
        visibleItems={reports.length}
      />
    </div>
  );
}
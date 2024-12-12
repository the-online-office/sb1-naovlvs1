export interface Report {
  id: string;
  title: string;
  jobTitle: string;
  createdAt: string;
  lastModified: string;
  tasks: {
    total: number;
    completed: number;
    inProgress: number;
    todo: number;
    archived: number;
  };
  members: {
    id: string;
    name: string;
    avatar: string;
  }[];
  expanded?: boolean;
}

export interface Task {
  id: string;
  name: string;
  status: 'completed' | 'in_progress' | 'todo';
  assignees: {
    id: string;
    name: string;
    avatar: string;
  }[];
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
  attachments: number;
  messages: number;
}
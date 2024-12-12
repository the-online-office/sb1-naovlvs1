import { useState, useEffect } from 'react';
import type { Job } from '../types/job';

// Mock data
const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Website Development Project',
    createdOn: '2024-03-15',
    categories: ['Development', 'Frontend'],
    jobType: 'Contract',
    time: 'Full-time',
    payout: {
      amount: '$5,000',
      type: 'Fixed'
    },
    agent: {
      name: 'John Smith',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    customer: {
      name: 'Tech Solutions Inc',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    status: 'Active',
    industry: 'Technology'
  },
  {
    id: '2',
    title: 'Mobile App Design',
    createdOn: '2024-03-14',
    categories: ['Design', 'Mobile'],
    jobType: 'Freelance',
    time: 'Part-time',
    payout: {
      amount: '$3,000',
      type: 'Fixed'
    },
    agent: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    customer: {
      name: 'Creative Studios',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
    },
    status: 'Active',
    industry: 'Design'
  }
];

export function useJobs() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setJobs(MOCK_JOBS);
    } catch (err) {
      setError('Failed to fetch jobs');
      console.error('Error fetching jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  const createJob = async (jobData: Omit<Job, 'id'>) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      const newJob = { 
        id: Math.random().toString(36).substr(2, 9),
        ...jobData 
      };
      setJobs(prev => [newJob, ...prev]);
      return newJob;
    } catch (err) {
      setError('Failed to create job');
      console.error('Error creating job:', err);
      throw err;
    }
  };

  const updateJob = async (jobId: string, updates: Partial<Job>) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setJobs(prev => 
        prev.map(job => 
          job.id === jobId ? { ...job, ...updates } : job
        )
      );
    } catch (err) {
      setError('Failed to update job');
      console.error('Error updating job:', err);
      throw err;
    }
  };

  const filterJobs = async (filters: {
    status?: 'Active' | 'Complete';
    jobType?: string;
    category?: string;
  }) => {
    try {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      let filteredJobs = [...MOCK_JOBS];
      
      if (filters.status) {
        filteredJobs = filteredJobs.filter(job => job.status === filters.status);
      }
      if (filters.jobType) {
        filteredJobs = filteredJobs.filter(job => job.jobType === filters.jobType);
      }
      if (filters.category) {
        filteredJobs = filteredJobs.filter(job => 
          job.categories.includes(filters.category!)
        );
      }

      setJobs(filteredJobs);
    } catch (err) {
      setError('Failed to filter jobs');
      console.error('Error filtering jobs:', err);
    } finally {
      setLoading(false);
    }
  };

  return {
    jobs,
    loading,
    error,
    createJob,
    updateJob,
    filterJobs,
    refreshJobs: fetchJobs
  };
}
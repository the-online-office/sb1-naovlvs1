export interface Job {
  id: string;
  title: string;
  createdOn: string;
  categories: string[];
  jobType: string;
  time: string;
  payout: {
    amount: string;
    type: string;
  };
  agent: {
    name: string;
    avatar: string;
  };
  customer: {
    name: string;
    avatar: string;
  };
  status: 'Active' | 'Complete';
  industry?: string;
}
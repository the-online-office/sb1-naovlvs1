import React, { useState } from 'react';
import { CompaniesHeader } from '../components/companies/CompaniesHeader';
import { CompaniesTable } from '../components/companies/CompaniesTable';
import { CompaniesControls } from '../components/companies/CompaniesControls';
import { CreateCompanyModal } from '../components/companies/CreateCompanyModal';

// Sample data
const MOCK_COMPANIES = [
  {
    id: '1',
    name: 'Tech Solutions Inc.',
    logo: 'https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=100&h=100&q=80',
    industry: 'Technology',
    location: 'San Francisco, CA',
    employees: 150,
    website: 'www.techsolutions.com',
    status: 'active',
    joinedDate: '2024-01-15',
    projects: 12,
    activeJobs: 5
  },
  {
    id: '2',
    name: 'Creative Studios',
    logo: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=100&h=100&q=80',
    industry: 'Design',
    location: 'New York, NY',
    employees: 75,
    website: 'www.creativestudios.com',
    status: 'active',
    joinedDate: '2024-02-01',
    projects: 8,
    activeJobs: 3
  }
];

export function CompaniesPage() {
  const [companies, setCompanies] = useState(MOCK_COMPANIES);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('ascending');
  const [rowsPerPage, setRowsPerPage] = useState('5');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateCompany = (companyData: any) => {
    const newCompany = {
      id: Math.random().toString(36).substr(2, 9),
      ...companyData,
      status: 'active',
      joinedDate: new Date().toISOString().split('T')[0],
      projects: 0,
      activeJobs: 0
    };
    setCompanies([...companies, newCompany]);
    setIsCreateModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <CompaniesHeader onCreateClick={() => setIsCreateModalOpen(true)} />
      
      <CompaniesControls
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={setRowsPerPage}
      />

      <CompaniesTable companies={companies} />

      <CreateCompanyModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateCompany}
      />
    </div>
  );
}
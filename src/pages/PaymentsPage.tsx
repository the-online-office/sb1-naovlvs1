import React, { useState } from 'react';
import { PaymentsHeader } from '../components/payments/PaymentsHeader';
import { PaymentsOverview } from '../components/payments/PaymentsOverview';
import { PaymentsAnalytics } from '../components/payments/PaymentsAnalytics';
import { PaymentsTable } from '../components/payments/PaymentsTable';
import { PaymentsPagination } from '../components/payments/PaymentsPagination';

// Sample data
const MOCK_TRANSACTIONS = [
  {
    id: '1',
    type: 'credit',
    amount: 5000,
    status: 'completed',
    bankCard: 'Visa 4242',
    description: 'Payment for Website Development',
    date: '2024-03-05 17:47:00',
    jobId: 'JOB-2024-001'
  },
  {
    id: '2',
    type: 'debit',
    amount: -5000,
    status: 'completed',
    bankCard: 'Visa 4242',
    description: 'Withdrawal to Bank Account',
    date: '2024-03-03 19:06:00',
    jobId: 'JOB-2024-001'
  }
];

export function PaymentsPage() {
  const [transactions, setTransactions] = useState(MOCK_TRANSACTIONS);
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([null, null]);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('descending');
  const [rowsPerPage, setRowsPerPage] = useState('10');

  return (
    <div className="space-y-6">
      <PaymentsHeader />

      <PaymentsOverview />

      <PaymentsAnalytics />

      <PaymentsTable
        transactions={transactions}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        sortBy={sortBy}
        onSortByChange={setSortBy}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={setRowsPerPage}
      />

      <PaymentsPagination
        totalItems={transactions.length}
        visibleItems={transactions.length}
      />
    </div>
  );
}
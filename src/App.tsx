import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layouts/MainLayout';
import { DashboardLayout } from './components/layouts/DashboardLayout';
import { HomePage } from './pages/HomePage';
import { TalentPage } from './pages/TalentPage';
import { FindJobsPage } from './pages/FindJobsPage';
import { JobApplicationPage } from './pages/JobApplicationPage';
import { JobsPage } from './pages/JobsPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { CreateJobPage } from './pages/CreateJobPage';
import { PackagesPage } from './pages/PackagesPage';
import { PackageDetailsPage } from './pages/PackageDetailsPage';
import { SettingsPage } from './pages/SettingsPage';
import { ReportsPage } from './pages/ReportsPage';
import { PaymentsPage } from './pages/PaymentsPage';
import { CompaniesPage } from './pages/CompaniesPage';
import { CreateCompanyPage } from './pages/CreateCompanyPage';
import { TaskLogPage } from './pages/TaskLogPage';
import { DashboardPage } from './pages/DashboardPage';
import { ProfilePage } from './pages/ProfilePage';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" />;
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/talent" element={<TalentPage />} />
            <Route path="/jobs" element={<FindJobsPage />} />
            <Route path="/jobs/create" element={<CreateJobPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/packages/:packageId" element={<PackageDetailsPage />} />
            <Route path="/jobs/:jobId/apply" element={<JobApplicationPage />} />
          </Route>
          <Route 
            path="/dashboard/*" 
            element={
              <PrivateRoute>
                <DashboardLayout>
                  <Routes>
                    <Route path="/" element={<DashboardPage />} />
                    <Route path="jobs" element={<JobsPage />} />
                    <Route path="reports" element={<ReportsPage />} />
                    <Route path="companies" element={<CompaniesPage />} />
                    <Route path="companies/create" element={<CreateCompanyPage />} />
                    <Route path="tasks" element={<TaskLogPage />} />
                    <Route path="payments" element={<PaymentsPage />} />
                    <Route path="settings/*" element={<SettingsPage />} />
                    <Route path="profile/view" element={<ProfilePage />} />
                  </Routes>
                </DashboardLayout>
              </PrivateRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
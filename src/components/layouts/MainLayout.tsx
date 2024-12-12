import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../Header';

export function MainLayout() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="min-h-screen">
      <Header isDashboard={isDashboard} />
      <Outlet />
    </div>
  );
}
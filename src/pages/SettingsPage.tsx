import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { User, Settings, CreditCard, Wallet, Link2, Shield } from 'lucide-react';
import { PersonalDetails } from '../components/settings/PersonalDetails';
import { ConnectedServices } from '../components/settings/ConnectedServices';
import { SecuritySettings } from '../components/settings/SecuritySettings';
import { PaymentMethods } from '../components/settings/PaymentMethods';
import { BalanceWithdrawals } from '../components/settings/BalanceWithdrawals';

const tabs = [
  { id: 'personal', label: 'Personal & Profile Details', icon: User, path: '' },
  { id: 'connected', label: 'Connected Services', icon: Link2, path: 'connected' },
  { id: 'security', label: 'Password & Security', icon: Shield, path: 'security' },
  { id: 'payment', label: 'Payment Methods', icon: CreditCard, path: 'payment' },
  { id: 'balance', label: 'Balance & Withdrawals', icon: Wallet, path: 'balance' }
];

export function SettingsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop();
  const activeTab = tabs.find(tab => tab.path === currentPath) || tabs[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="text-sm text-gray-600 mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab.id;
            return (
              <button
                key={tab.id}
                onClick={() => navigate(tab.path)}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center space-x-2
                  ${isActive
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <Icon className="h-5 w-5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow">
        <Routes>
          <Route path="" element={<PersonalDetails />} />
          <Route path="connected" element={<ConnectedServices />} />
          <Route path="security" element={<SecuritySettings />} />
          <Route path="payment" element={<PaymentMethods />} />
          <Route path="balance" element={<BalanceWithdrawals />} />
        </Routes>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { DollarSign, ArrowUpRight, Download, Clock, CheckCircle, AlertTriangle, Plus, ArrowDownLeft, Bell } from 'lucide-react';

export function BalanceWithdrawals() {
  const [autoWithdraw, setAutoWithdraw] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-6 space-y-8">
      {/* Balance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Available Balance</h3>
            <DollarSign className="h-5 w-5 text-green-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">$2,450.50</p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Withdraw Funds
          </button>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Pending Earnings</h3>
            <Clock className="h-5 w-5 text-yellow-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">$750.00</p>
          <p className="mt-4 text-sm text-gray-500">Available in 7 days</p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-500">Total Earnings</h3>
            <ArrowUpRight className="h-5 w-5 text-blue-500" />
          </div>
          <p className="text-2xl font-bold text-gray-900">$12,750.75</p>
          <button className="mt-4 w-full text-blue-600 py-2 rounded-lg border border-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Download Report</span>
          </button>
        </div>
      </div>

      {/* Withdrawal Methods */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-6">Withdrawal Methods</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <DollarSign className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="text-sm font-medium text-gray-900">Bank Account (ACH)</h3>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800">
                    Default
                  </span>
                </div>
                <p className="text-sm text-gray-500">•••• 1234 - Chase Bank</p>
              </div>
            </div>
            <button className="text-sm text-blue-600 hover:text-blue-700">Edit</button>
          </div>

          <button className="w-full flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors">
            <Plus className="h-5 w-5 text-gray-400" />
            <span className="text-gray-600">Add New Withdrawal Method</span>
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-6">Recent Transactions</h2>
        <div className="space-y-4">
          {[
            {
              type: 'Withdrawal',
              amount: '-$1,250.00',
              status: 'completed',
              date: 'Mar 15, 2024',
              method: 'Bank Transfer'
            },
            {
              type: 'Payment Received',
              amount: '+$2,500.00',
              status: 'completed',
              date: 'Mar 12, 2024',
              method: 'Project Payment'
            },
            {
              type: 'Withdrawal',
              amount: '-$750.00',
              status: 'pending',
              date: 'Mar 10, 2024',
              method: 'Bank Transfer'
            }
          ].map((transaction, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  transaction.type === 'Payment Received' 
                    ? 'bg-green-100' 
                    : 'bg-blue-100'
                }`}>
                  {transaction.type === 'Payment Received' ? (
                    <ArrowUpRight className="h-5 w-5 text-green-600" />
                  ) : (
                    <ArrowDownLeft className="h-5 w-5 text-blue-600" />
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{transaction.type}</h3>
                  <p className="text-sm text-gray-500">
                    {transaction.method} • {transaction.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`text-sm font-medium ${
                  transaction.type === 'Payment Received'
                    ? 'text-green-600'
                    : 'text-gray-900'
                }`}>
                  {transaction.amount}
                </span>
                {transaction.status === 'completed' ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Clock className="h-5 w-5 text-yellow-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Withdrawal Settings */}
      <div className="border-t pt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Withdrawal Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Automatic Withdrawals</h3>
                <p className="text-sm text-gray-500">Automatically withdraw when balance exceeds $1,000</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={autoWithdraw}
                onChange={(e) => setAutoWithdraw(e.target.checked)}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>

          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Bell className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Payment Notifications</h3>
                <p className="text-sm text-gray-500">Get notified when you receive payments</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
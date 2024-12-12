import React from 'react';
import { Lock, Key, Shield, AlertTriangle } from 'lucide-react';

export function SecuritySettings() {
  return (
    <div className="p-6 space-y-8">
      {/* Password Change Section */}
      <div>
        <h2 className="text-lg font-medium text-gray-900 mb-6">Change Password</h2>
        <div className="space-y-4 max-w-md">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Current Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter current password"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter new password"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm New Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm new password"
              />
            </div>
          </div>

          <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Update Password
          </button>
        </div>
      </div>

      {/* Security Settings */}
      <div className="border-t pt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Security Settings</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Shield className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              Enable
            </button>
          </div>

          <div className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Login Alerts</h3>
                <p className="text-sm text-gray-500">Get notified of unusual login activity</p>
              </div>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="border-t pt-8">
        <h2 className="text-lg font-medium text-gray-900 mb-6">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              device: 'MacBook Pro',
              location: 'San Francisco, CA',
              time: '2 hours ago',
              status: 'success'
            },
            {
              device: 'iPhone 12',
              location: 'New York, NY',
              time: '1 day ago',
              status: 'success'
            },
            {
              device: 'Unknown Device',
              location: 'London, UK',
              time: '3 days ago',
              status: 'blocked'
            }
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${
                  activity.status === 'success' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <Shield className={`h-5 w-5 ${
                    activity.status === 'success' ? 'text-green-600' : 'text-red-600'
                  }`} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">{activity.device}</h3>
                  <p className="text-sm text-gray-500">
                    {activity.location} • {activity.time}
                  </p>
                </div>
              </div>
              <span className={`text-sm font-medium ${
                activity.status === 'success' ? 'text-green-600' : 'text-red-600'
              }`}>
                {activity.status === 'success' ? 'Successful login' : 'Blocked attempt'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
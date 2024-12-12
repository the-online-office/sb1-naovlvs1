import React from 'react';
import { BarChart2, Users, ShoppingBag, TrendingUp, ArrowUp, ArrowDown } from 'lucide-react';

export function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
        <div className="flex items-center space-x-2">
          <select className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
          <button className="px-4 py-2 bg-[#0E4F3B] text-white rounded-lg text-sm hover:bg-[#0a3c2d] transition-colors">
            Download Report
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-green-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-green-600" />
            </div>
            <span className="flex items-center text-sm font-medium text-green-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              12.5%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">$24,567.00</h3>
          <p className="text-sm text-gray-500 mt-1">Total Revenue</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-blue-100 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
            </div>
            <span className="flex items-center text-sm font-medium text-red-600">
              <ArrowDown className="h-4 w-4 mr-1" />
              8.2%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">1,234</h3>
          <p className="text-sm text-gray-500 mt-1">Total Orders</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <span className="flex items-center text-sm font-medium text-green-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              15.3%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">45,678</h3>
          <p className="text-sm text-gray-500 mt-1">Total Customers</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-orange-100 rounded-lg">
              <BarChart2 className="h-6 w-6 text-orange-600" />
            </div>
            <span className="flex items-center text-sm font-medium text-green-600">
              <ArrowUp className="h-4 w-4 mr-1" />
              2.1%
            </span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">3.24%</h3>
          <p className="text-sm text-gray-500 mt-1">Conversion Rate</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm">
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
            <button className="text-sm text-[#0E4F3B] hover:text-[#0a3c2d] font-medium">
              View All
            </button>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">New order #1234</p>
                    <p className="text-sm text-gray-500">2 minutes ago</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900">$123.45</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
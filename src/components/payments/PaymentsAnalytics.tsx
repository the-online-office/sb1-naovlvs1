import React, { useState } from 'react';
import { DollarSign, BarChart2, LineChart } from 'lucide-react';

// Generate random data for the last 15 days
const generateRandomData = () => {
  return Array.from({ length: 15 }, () => ({
    spent: Math.floor(Math.random() * 8000) + 4000,
    earned: Math.floor(Math.random() * 12000) + 6000
  }));
};

export function PaymentsAnalytics() {
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');
  const data = generateRandomData();
  const maxValue = Math.max(...data.map(d => d.spent + d.earned));

  return (
    <div className="grid grid-cols-12 gap-6">
      {/* Bar Chart - 70% width */}
      <div className="col-span-8 bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center space-x-2 px-2 py-1 bg-gray-100/80 rounded-md">
              <div className="w-2.5 h-2.5 bg-brand-900 rounded" />
              <span className="text-xs text-brand-900">Spent</span>
            </span>
            <span className="inline-flex items-center space-x-2 px-2 py-1 bg-gray-100/80 rounded-md">
              <div className="w-2.5 h-2.5 bg-brand-800 rounded" />
              <span className="text-xs text-brand-800">Earned</span>
            </span>
          </div>
          
          {/* Chart Type Toggle */}
          <div className="flex items-center bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setChartType('bar')}
              className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-md text-sm transition-colors ${
                chartType === 'bar' 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <BarChart2 className="h-3.5 w-3.5" />
              <span>Bar</span>
            </button>
            <button
              onClick={() => setChartType('line')}
              className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-md text-sm transition-colors ${
                chartType === 'line' 
                  ? 'bg-white shadow-sm text-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <LineChart className="h-3.5 w-3.5" />
              <span>Line</span>
            </button>
          </div>
        </div>
        
        {/* Chart Area */}
        <div className="relative h-80">
          {chartType === 'bar' ? (
            <div className="absolute inset-0 flex items-end justify-between px-6">
              {data.map((item, i) => {
                const totalHeight = ((item.spent + item.earned) / maxValue) * 100;
                const spentHeight = (item.spent / (item.spent + item.earned)) * totalHeight;
                const earnedHeight = (item.earned / (item.spent + item.earned)) * totalHeight;
                
                return (
                  <div key={i} className="w-8 flex flex-col justify-end h-full">
                    <div 
                      className="w-full bg-brand-800 rounded-t"
                      style={{ height: `${earnedHeight}%` }}
                    />
                    <div 
                      className="w-full bg-brand-900 rounded-b"
                      style={{ height: `${spentHeight}%` }}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="absolute inset-0 px-6 py-4">
              <svg className="w-full h-full">
                {/* Horizontal grid lines */}
                {[0, 20, 40, 60, 80, 100].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={`${y}%`}
                    x2="100%"
                    y2={`${y}%`}
                    stroke="#f3f4f6"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                {/* Vertical grid lines */}
                {data.map((_, i) => (
                  <line
                    key={i}
                    x1={`${(i * 100) / (data.length - 1)}%`}
                    y1="0"
                    x2={`${(i * 100) / (data.length - 1)}%`}
                    y2="100%"
                    stroke="#f3f4f6"
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                <path
                  d={`M ${data.map((d, i) => `${(i * 100) / (data.length - 1)}%,${100 - ((d.spent / maxValue) * 100)}%`).join(' L ')}`}
                  fill="none"
                  stroke="#0E4F3B"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-300"
                />
                <path
                  d={`M ${data.map((d, i) => `${(i * 100) / (data.length - 1)}%,${100 - ((d.earned / maxValue) * 100)}%`).join(' L ')}`}
                  fill="none"
                  stroke="#00A651"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-300"
                />
                {/* Data points */}
                {data.map((d, i) => (
                  <g key={`points-${i}`}>
                    <circle
                      cx={`${(i * 100) / (data.length - 1)}%`}
                      cy={`${100 - ((d.spent / maxValue) * 100)}%`}
                      r="4"
                      fill="#0E4F3B"
                      className="transition-all duration-300"
                    />
                    <circle
                      cx={`${(i * 100) / (data.length - 1)}%`}
                      cy={`${100 - ((d.earned / maxValue) * 100)}%`}
                      r="4"
                      fill="#00A651"
                      className="transition-all duration-300"
                    />
                  </g>
                ))}
              </svg>
            </div>
          )}
        </div>
      </div>
      
      {/* Pie Chart - 30% width */}
      <div className="col-span-4 bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-sm font-medium text-gray-900 mb-6">Payment Distribution</h3>
        
        {/* Pie Chart */}
        <div className="relative pt-[100%]">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              <svg viewBox="0 0 100 100" className="transform -rotate-90">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#E5E7EB"
                  strokeWidth="20"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#00A651"
                  strokeWidth="20"
                  fill="none"
                  strokeDasharray="251.2"
                  strokeDashoffset="62.8"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <DollarSign className="h-6 w-6 mx-auto text-brand-800" />
                  <div className="text-2xl font-bold text-gray-900">$2.4m</div>
                  <div className="text-sm text-gray-500">Profit</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
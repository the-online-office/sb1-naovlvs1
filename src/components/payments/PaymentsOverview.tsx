import React from 'react';
import { ArrowUpRight, ArrowDownRight, DollarSign, Clock, AlertCircle } from 'lucide-react';

export function PaymentsOverview() {
  return (
    <div className="bg-brand-900 rounded-xl shadow-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Available Balance */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-white/80">Supply Chain Revenue</h3>
            <button className="text-white/60 hover:text-white/80">•••</button>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-white/80">$</span>
            <span className="text-3xl font-bold text-white">234k</span>
          </div>
          <div className="flex items-center mt-2 text-sm">
            <ArrowUpRight className="h-4 w-4 text-brand-700" />
            <span className="text-brand-700 font-medium">+13%</span>
            <span className="text-white/60 ml-2">vs last month</span>
          </div>
        </div>

        {/* Retails Sales */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-white/80">Retails Sales</h3>
            <button className="text-white/60 hover:text-white/80">•••</button>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-white/80">$</span>
            <span className="text-3xl font-bold text-white">541k</span>
          </div>
          <div className="flex items-center mt-2 text-sm">
            <ArrowUpRight className="h-4 w-4 text-brand-700" />
            <span className="text-brand-700 font-medium">+21%</span>
            <span className="text-white/60 ml-2">vs last month</span>
          </div>
        </div>

        {/* Vendor Commissions */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-white/80">Vendor Commissions</h3>
            <button className="text-white/60 hover:text-white/80">•••</button>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-white/80">$</span>
            <span className="text-3xl font-bold text-white">473k</span>
          </div>
          <div className="flex items-center mt-2 text-sm">
            <ArrowUpRight className="h-4 w-4 text-brand-700" />
            <span className="text-brand-700 font-medium">+4%</span>
            <span className="text-white/60 ml-2">vs last month</span>
          </div>
        </div>
        {/* Customer Adoption Rate */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-white/80">Customer Adoption Rate</h3>
            <button className="text-white/60 hover:text-white/80">•••</button>
          </div>
          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-white">+4.5%</span>
          </div>
          <div className="h-8 flex items-end gap-0.5 mt-2">
            {[20, 35, 25, 45, 30, 55, 40, 60, 45, 65, 50, 70].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-brand-700 rounded-sm"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
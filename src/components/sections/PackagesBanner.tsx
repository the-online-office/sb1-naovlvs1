import React from 'react';
import { Package, CheckCircle, BarChart3 } from 'lucide-react';

const benefits = [
  {
    icon: Package,
    text: "Out-of-the-box, ready-to-go services"
  },
  {
    icon: CheckCircle,
    text: "Simplify the decision-making process"
  },
  {
    icon: BarChart3,
    text: "Easily compare pricing tiers & deliverables"
  }
];

export function PackagesBanner() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0E4F3B] rounded-2xl overflow-hidden">
          <div className="grid grid-cols-12 items-center min-h-[600px]">
            {/* Content */}
            <div className="col-span-12 lg:col-span-7 p-12 lg:p-16">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white leading-tight">
                  Browse and buy
                  <br />
                  <span className="text-[#62f9c9]">packaged services</span>
                </h2>
                
                <p className="text-lg text-gray-300 max-w-2xl">
                  Select from our range of pre-packaged product bundles, specifically designed to meet your business needs.
                </p>

                <div className="space-y-4 pt-6">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="h-10 w-10 rounded-lg bg-[#62f9c9]/20 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-[#62f9c9]" />
                        </div>
                        <span className="text-gray-300 text-base">{benefit.text}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="pt-8">
                  <button className="px-8 py-3 bg-white text-[#0E4F3B] rounded-md font-medium hover:bg-gray-100 transition-colors">
                    Browse Packages
                  </button>
                </div>
              </div>
            </div>

            {/* Image - Hidden on mobile */}
            <div className="hidden lg:block col-span-12 lg:col-span-5 h-full">
              <div className="relative h-full">
                <img
                  className="w-full h-[600px] object-cover"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000"
                  alt="Remote collaboration"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E4F3B]/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
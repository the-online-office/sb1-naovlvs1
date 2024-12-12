import React from 'react';
import { Target, Sliders, Briefcase } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    text: "Tailored solutions for your business needs"
  },
  {
    icon: Sliders,
    text: "Remain flexible and modify job details as you go"
  },
  {
    icon: Briefcase,
    text: "Hire for complex or highly specialized projects"
  }
];

export function PostJobSection() {
  return (
    <section className="py-20 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full">
                <div className="relative block w-full overflow-hidden rounded-lg">
                  <img
                    className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000"
                    alt="Team collaborating remotely"
                  />
                  <div className="absolute inset-0 bg-gray-900/10" />
                </div>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <h3 className="text-4xl font-bold text-white mb-4">
                Post your own job. Hire a professional today
              </h3>
              <p className="text-xl text-gray-300 mb-8">
                Create and post your own job. Specify the details of your job, including contract length, deliverables, and salary. Make it a one-off project or hire permanently.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="h-10 w-10 rounded-lg bg-[#62f9c9]/20 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-[#62f9c9]" />
                      </div>
                      <p className="text-lg text-gray-300">{benefit.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8">
                <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-[#62f9c9] hover:bg-[#50e8b8]">
                  Post a Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
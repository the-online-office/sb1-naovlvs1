import React from 'react';
import { FileText, Users, Shield, HeadphonesIcon, ArrowRight } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: "Post a job",
    description: "It's free and easy to post a job. Simply fill in a title, description and start receiving quotes within hours.",
    bgImage: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&q=80&w=1000",
    link: "/post-job"
  },
  {
    icon: Users,
    title: "Choose freelancers",
    description: "Browse and select freelancers effortlessly. Review profiles, portfolios and find the perfect match for your project.",
    bgImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
    link: "/find-freelancers"
  },
  {
    icon: Shield,
    title: "Pay safely",
    description: "We ensure secure payments through our escrow system. Only release payment when you're completely satisfied.",
    bgImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000",
    link: "/payment-security"
  },
  {
    icon: HeadphonesIcon,
    title: "We're here to help",
    description: "Our dedicated support team is available 24/7 to assist you with any questions or concerns.",
    bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
    link: "/support"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
          <p className="mt-4 text-xl text-gray-600">Get started in minutes and find the right talent for your project</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative group h-[400px] overflow-hidden rounded-xl">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10" />
                  <img
                    src={feature.bgImage}
                    alt={feature.title}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 h-full p-8 flex flex-col">
                  <div className="flex-grow">
                    <div className="h-12 w-12 bg-[#62f9c9]/20 backdrop-blur-md rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-6 w-6 text-[#62f9c9]" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-200">{feature.description}</p>
                  </div>

                  {/* Learn More Link */}
                  <a 
                    href={feature.link}
                    className="inline-flex items-center text-[#62f9c9] hover:text-[#50e8b8] transition-colors mt-6 group"
                  >
                    <span className="font-medium">Learn more</span>
                    <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
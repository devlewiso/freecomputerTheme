import React from 'react';
import { Cpu, Battery, Zap, Shield } from 'lucide-react';

const features = [
  {
    name: 'Next-Gen Processor',
    description: 'Latest generation processor with 16 cores and 32 threads for ultimate performance.',
    icon: Cpu,
  },
  {
    name: 'All-Day Battery',
    description: 'Up to 12 hours of battery life for uninterrupted productivity.',
    icon: Battery,
  },
  {
    name: 'Lightning Fast',
    description: 'PCIe 4.0 SSD storage for instantaneous data access and transfer.',
    icon: Zap,
  },
  {
    name: 'Enterprise Security',
    description: 'Advanced security features to protect your sensitive data.',
    icon: Shield,
  },
];

export function Features() {
  return (
    <div id="features" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need in a modern workstation
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
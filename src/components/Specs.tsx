import React from 'react';
import { Monitor, Cpu, Database, HardDrive } from 'lucide-react';

const specifications = [
  {
    category: 'Display',
    icon: Monitor,
    specs: [
      '17.3" 4K UHD (3840 x 2160)',
      'Anti-glare coating',
      'HDR 400 certified',
      '100% Adobe RGB',
      '165Hz refresh rate'
    ]
  },
  {
    category: 'Processor',
    icon: Cpu,
    specs: [
      'Latest Gen Intel Core i9',
      '16 cores, 32 threads',
      '5.5GHz max turbo frequency',
      '36MB cache',
      'Advanced thermal design'
    ]
  },
  {
    category: 'Memory',
    icon: Database,
    specs: [
      'Up to 64GB DDR5',
      '5200MHz speed',
      'Dual-channel support',
      'ECC memory support',
      'Expandable slots'
    ]
  },
  {
    category: 'Storage',
    icon: HardDrive,
    specs: [
      'Up to 4TB NVMe SSD',
      'PCIe Gen 4 support',
      '7000MB/s read speed',
      '6500MB/s write speed',
      'RAID support'
    ]
  }
];

export function Specs() {
  return (
    <section id="specs" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specifications.map((spec, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <spec.icon className="w-6 h-6 text-blue-600" />
                <h3 className="ml-2 text-xl font-semibold">{spec.category}</h3>
              </div>
              <ul className="space-y-2">
                {spec.specs.map((item, i) => (
                  <li key={i} className="text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
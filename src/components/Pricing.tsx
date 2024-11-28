import React from 'react';
import { Check } from 'lucide-react';
import { sendWhatsAppMessage } from '../utils/whatsapp';

const tiers = [
  {
    name: 'Professional',
    price: 1999,
    features: [
      '16-core processor',
      '32GB RAM',
      '512GB SSD',
      'NVIDIA RTX 3060',
      '15.6" 4K Display',
      '1 Year Warranty',
    ],
  },
  {
    name: 'Enterprise',
    price: 2499,
    features: [
      '32-core processor',
      '64GB RAM',
      '1TB SSD',
      'NVIDIA RTX 3080',
      '17" 4K Display',
      '3 Year Warranty',
    ],
  },
];

export function Pricing() {
  return (
    <div id="pricing" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-400">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Choose your perfect setup
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 md:grid-cols-2 lg:mx-0 lg:max-w-none">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10"
            >
              <div>
                <h3 className="text-2xl font-bold leading-8 text-white">{tier.name}</h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">${tier.price}</span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-blue-400" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => sendWhatsAppMessage(tier.name, tier.price)}
                className="mt-8 block w-full rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
              >
                Pre-order via WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
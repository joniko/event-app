import React from 'react';
import Link from 'next/link';
import InternalLayout from '@/components/InternalLayout';

// Mock data for sponsors
const sponsors = [
  { id: 1, name: 'Acme Corp', tier: 'Gold', logo: '/acme-logo.png' },
  { id: 2, name: 'TechStart', tier: 'Silver', logo: '/techstart-logo.png' },
  { id: 3, name: 'InnovateCo', tier: 'Bronze', logo: '/innovateco-logo.png' },
];

export default function SponsorsPage() {
  return (
    <InternalLayout>
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold text-yellow-950 dark:text-yellow-50 mt-4 mb-4">
          Our Sponsors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="bg-white shadow-md rounded-lg p-6">
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="w-full h-32 object-contain mb-4"
              />
              <h2 className="text-xl font-semibold">{sponsor.name}</h2>
              <p className="text-gray-600">{sponsor.tier} Sponsor</p>
            </div>
          ))}
        </div>
        <Link
          href="/"
          className="mt-8 inline-block text-yellow-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </InternalLayout>
  );
}

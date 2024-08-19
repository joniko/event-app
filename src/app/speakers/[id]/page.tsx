import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Mock data for speakers (in a real app, this would come from an API or database)
const speakers = [
  {
    id: '1',
    name: 'Jane Doe',
    topic: 'Future of AI',
    image: '/speakers/jane-doe.jpg',
    bio: 'Jane is a renowned AI researcher...',
  },
  {
    id: '2',
    name: 'John Smith',
    topic: 'Blockchain Revolution',
    image: '/speakers/erhart-cockrin.jpg',
    bio: 'John is a blockchain pioneer...',
  },
  {
    id: '3',
    name: 'Alice Johnson',
    topic: 'Cybersecurity Trends',
    image: '/speakers/erhart-cockrin.jpg',
    bio: 'Alice is a cybersecurity expert...',
  },
];

export default function SpeakerPage({ params }: { params: { id: string } }) {
  const speaker = speakers.find((s) => s.id === params.id);

  if (!speaker) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg p-6">
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-64 object-cover rounded-md mb-6"
        />
        <h1 className="text-3xl font-bold mb-2">{speaker.name}</h1>
        <h2 className="text-xl text-gray-600 mb-4">{speaker.topic}</h2>
        <p className="text-gray-800 mb-6">{speaker.bio}</p>
        <Link href="/speakers" className="text-yellow-600 hover:underline">
          Back to Speakers
        </Link>
      </div>
    </div>
  );
}

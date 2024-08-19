import React from "react";
import Link from "next/link";
import InternalLayout from "@/components/InternalLayout";

// Mock data for speakers
const speakers = [
  {
    id: 1,
    name: "Jane Doe",
    topic: "Future of AI",
    image: "/speakers/jane-doe.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    topic: "Blockchain Revolution",
    image: "/speakers/erhart-cockrin.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    topic: "Cybersecurity Trends",
    image: "/speakers/erhart-cockrin.jpg",
  },
];

export default function SpeakersPage() {
  return (
    <InternalLayout>
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold text-yellow-950 dark:text-yellow-50 mt-4 mb-4">
          Our Speakers
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {speakers.map((speaker) => (
            <Link href={`/speakers/${speaker.id}`} key={speaker.id}>
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">{speaker.name}</h2>
                <p className="text-gray-600">{speaker.topic}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="mt-8 inline-block text-orange-600 hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </InternalLayout>
  );
}

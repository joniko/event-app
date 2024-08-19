import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InternalLayout from '@/components/InternalLayout';

type Talk = {
  id: string;
  time: string;
  speaker: string;
  title?: string;
  isHighlight?: boolean;
  detailLink?: string;
  speakerImage?: string;
  color?: string;
};

type ScheduleDay = {
  date: string;
  talks: Talk[];
};

const scheduleData: ScheduleDay[] = [
  {
    date: '2024-06-01',
    talks: [
      {
        id: '1',
        time: '09:00 - 10:00',
        speaker: 'Jane Doe',
        title: 'Opening Keynote: The Future of Tech',
        isHighlight: true,
        detailLink: '/talks/1',
        speakerImage: '/speakers/jane-doe.jpg',
        color: 'yellow',
      },
      { id: '2', time: '10:30 - 11:30', speaker: 'John Smith' },
      {
        id: '3',
        time: '13:00 - 14:00',
        speaker: 'Alice Johnson',
        title: "AI and Machine Learning: What's Next?",
        isHighlight: true,
        detailLink: '/talks/3',
        color: 'emerald',
      },
      {
        id: '4',
        time: '15:00 - 16:00',
        speaker: 'Bob Brown',
        speakerImage: '/speakers/bob-brown.jpg',
      },
    ],
  },
  {
    date: '2024-06-02',
    talks: [
      { id: '5', time: '09:00 - 10:00', speaker: 'Carol White' },
      {
        id: '6',
        time: '11:00 - 12:00',
        speaker: 'David Green',
        title: 'Blockchain: Beyond Cryptocurrency',
        isHighlight: true,
        detailLink: '/talks/6',
        speakerImage: '/speakers/david-green.jpg',
        color: 'blue',
      },
      { id: '7', time: '14:00 - 15:00', speaker: 'Eve Taylor' },
      {
        id: '8',
        time: '16:00 - 17:00',
        speaker: 'Frank Moore',
        title: 'The Ethics of Technology',
        isHighlight: true,
        color: 'purple',
      },
    ],
  },
  {
    date: '2024-06-03',
    talks: [
      {
        id: '9',
        time: '09:00 - 10:00',
        speaker: 'Grace Lee',
        title: 'Cybersecurity in the Age of IoT',
        isHighlight: true,
        detailLink: '/talks/9',
        color: 'red',
      },
      {
        id: '10',
        time: '11:00 - 12:00',
        speaker: 'Henry Clark',
        speakerImage: '/speakers/henry-clark.jpg',
      },
      { id: '11', time: '13:30 - 14:30', speaker: 'Irene Ross' },
      {
        id: '12',
        time: '15:30 - 16:30',
        speaker: 'Jack Wilson',
        title: 'Closing Remarks: Where Do We Go From Here?',
        isHighlight: true,
        detailLink: '/talks/12',
        speakerImage: '/speakers/jack-wilson.jpg',
        color: 'yellow',
      },
    ],
  },
];

export default function SchedulePage() {
  return (
    <InternalLayout>
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold text-yellow-950 dark:text-yellow-50 mt-4 mb-4">
          Event Schedule
        </h1>
        {scheduleData.map((day, index) => (
          <div key={day.date} className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              Day {index + 1} -{' '}
              {new Date(day.date).toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </h2>
            <div className="space-y-4">
              {day.talks.map((talk) => (
                <div
                  key={talk.id}
                  className={`p-4 rounded-lg ${
                    talk.isHighlight
                      ? `bg-${talk.color || 'yellow'}-100 border-l-4 border-${
                          talk.color || 'yellow'
                        }-500`
                      : 'bg-white'
                  } flex items-center`}
                >
                  <div className="flex-grow">
                    <p className="text-sm text-gray-600">{talk.time}</p>
                    <h3 className="font-semibold">{talk.speaker}</h3>
                    {talk.title && (
                      <p
                        className={`text-${
                          talk.color || 'yellow'
                        }-600 font-medium`}
                      >
                        {talk.title}
                      </p>
                    )}
                    {talk.isHighlight && (
                      <span
                        className={`inline-block bg-${
                          talk.color || 'yellow'
                        }-500 text-${
                          talk.color || 'yellow'
                        }-800 text-xs px-2 py-1 rounded-full mt-2`}
                      >
                        Destacada
                      </span>
                    )}
                    {talk.detailLink && (
                      <Link
                        href={`/schedule/${talk.id}`}
                        className="mt-2 inline-block text-yellow-600 hover:underline"
                      >
                        Más detalles
                      </Link>
                    )}
                  </div>
                  {talk.speakerImage && (
                    <div className="ml-4 flex-shrink-0">
                      <Image
                        src={talk.speakerImage}
                        alt={talk.speaker}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <Link
          href="/"
          className="mt-8 inline-block text-yellow-600 hover:underline"
        >
          Volver al Inicio
        </Link>
      </div>
    </InternalLayout>
  );
}

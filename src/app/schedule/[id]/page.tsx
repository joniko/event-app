import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Este tipo representa la estructura de datos para una charla individual
type TalkDetail = {
  id: string;
  title: string;
  speaker: string;
  speakerImage: string;
  date: string;
  time: string;
  description: string;
  speakerBio: string;
  relatedLinks?: { title: string; url: string }[];
};

// En una aplicación real, esto vendría de una base de datos o API
const talkDetails: TalkDetail[] = [
  {
    id: '1',
    title: 'Opening Keynote: The Future of Tech',
    speaker: 'Jane Doe',
    speakerImage: '/speakers/jane-doe.jpg',
    date: '2024-06-01',
    time: '09:00 - 10:00',
    description:
      'In this keynote, Jane Doe will explore emerging trends in technology and their potential impact on our lives and businesses. From artificial intelligence to quantum computing, discover what the future holds and how we can prepare for it.',
    speakerBio:
      'Jane Doe is a renowned futurist and technology expert. With over 20 years of experience in Silicon Valley, she has been at the forefront of numerous technological breakthroughs and is a sought-after speaker on innovation and future trends.',
    relatedLinks: [
      { title: "Jane's TED Talk", url: 'https://www.ted.com/talks/jane_doe' },
      {
        title: 'Future Tech Book',
        url: 'https://www.amazon.com/future-tech-book',
      },
    ],
  },
  {
    id: '2',
    title: "AI and Machine Learning: What's Next?",
    speaker: 'John Smith',
    speakerImage: '/speakers/john-smith.jpg',
    date: '2024-06-01',
    time: '13:00 - 14:00',
    description:
      'John Smith dives deep into the latest advancements in AI and machine learning, exploring how these technologies are reshaping industries and what we can expect in the near future.',
    speakerBio:
      'John Smith is a leading AI researcher and the author of several bestselling books on machine learning. He has been at the forefront of AI development for over a decade.',
    relatedLinks: [{ title: "John's AI Blog", url: 'https://johnsmith.ai' }],
  },
];

export default function TalkDetailPage({ params }: { params: { id: string } }) {
  // Intenta encontrar la charla por ID, si no, usa la primera charla como ejemplo
  const talk = talkDetails.find((t) => t.id === params.id) || talkDetails[0];

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/schedule"
        className="text-yellow-600 hover:underline mb-4 inline-block"
      >
        &larr; Volver al Programa
      </Link>
      <div className="bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50 shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              src={talk.speakerImage}
              alt={talk.speaker}
              width={300}
              height={300}
              className="h-48 w-full object-cover md:h-full md:w-48"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">
              {new Date(talk.date).toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}{' '}
              • {talk.time}
            </div>
            <h1 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {talk.title}
            </h1>
            <p className="mt-2 text-xl text-gray-500">Por {talk.speaker}</p>
            <p className="mt-4 text-gray-800">{talk.description}</p>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Sobre el Orador
            </h2>
            <p className="mt-2 text-gray-800">{talk.speakerBio}</p>
            {talk.relatedLinks && talk.relatedLinks.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  Enlaces Relacionados
                </h3>
                <ul className="mt-2 space-y-2">
                  {talk.relatedLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="text-yellow-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

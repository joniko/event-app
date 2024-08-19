'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InternalLayout from '@/components/InternalLayout';

import {
  PlayCircle,
  Newspaper,
  Star,
  Music,
  Youtube,
  Link as LinkIcon,
} from 'lucide-react';

type PostType =
  | 'Video'
  | 'Article'
  | 'FeaturedArticle'
  | 'Spotify'
  | 'YouTube'
  | 'Link';

interface Post {
  id: number;
  type: PostType;
  title: string;
  content: string;
  tag?: string;
  category: string;
  supportText?: string;
  url?: string;
  image?: string;
}

const categories = ['Todos', 'Anuncios', 'Talleres', 'Entrevistas', 'Música'];

const posts: Post[] = [
  {
    id: 1,
    type: 'Video',
    title: 'Resumen del primer día',
    content: '/videos/day1-recap.mp4',
    category: 'Anuncios',
    tag: 'Destacado',
    supportText: 'Revive los mejores momentos del día inaugural.',
  },
  {
    id: 2,
    type: 'Article',
    title: 'Próximos talleres',
    content:
      'No te pierdas los emocionantes talleres programados para mañana...',
    category: 'Talleres',
  },
  {
    id: 3,
    type: 'FeaturedArticle',
    title: 'Entrevista exclusiva con el orador principal',
    content:
      'Tuvimos la oportunidad de hablar con nuestro orador principal sobre...',
    category: 'Entrevistas',
    image: '/speakers/gordon-sanderson.jpg',
  },
  {
    id: 4,
    type: 'Spotify',
    title: 'Playlist oficial del evento',
    content: 'https://open.spotify.com/embed/playlist/5TUxgTIxzLbLVh7RUf9V8i',
    category: 'Música',
  },
  {
    id: 5,
    type: 'YouTube',
    title: 'Trailer del evento',
    content: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Anuncios',
  },
  {
    id: 6,
    type: 'Link',
    title: 'Recursos adicionales',
    content: 'https://example.com/resources',
    category: 'Talleres',
    supportText: 'Encuentra material complementario para los talleres aquí.',
  },
];

const PostComponent: React.FC<{ post: Post }> = ({ post }) => {
  switch (post.type) {
    case 'Video':
      return (
        <div className="relative">
          {post.content ? (
            <video src={post.content} controls className="w-full rounded-lg">
              Tu navegador no soporta el elemento de video.
            </video>
          ) : (
            <p className="text-red-500">Video no disponible</p>
          )}
          {post.tag && (
            <span className="absolute top-2 right-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm">
              {post.tag}
            </span>
          )}
        </div>
      );
    case 'Article':
      return <p className="text-gray-700">{post.content}</p>;
    case 'FeaturedArticle':
      return (
        <div className="relative">
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              width={600}
              height={400}
              className="w-full rounded-lg"
            />
          ) : (
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Imagen no disponible</p>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h3 className="text-xl font-bold">{post.title}</h3>
            <p>{post.content}</p>
          </div>
        </div>
      );
    case 'Spotify':
      return (
        <iframe
          src={post.content}
          width="100%"
          height="352"
          frameBorder="0"
          allow="encrypted-media"
          className="rounded-lg"
        ></iframe>
      );
    case 'YouTube':
      return (
        <iframe
          width="100%"
          height="315"
          src={post.content}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg"
        ></iframe>
      );
    case 'Link':
      return (
        <a
          href={post.content}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-500 hover:underline"
        >
          {post.title}
        </a>
      );
    default:
      return null;
  }
};

export default function NewsFeedPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredPosts =
    selectedCategory === 'Todos'
      ? posts
      : posts.filter((post) => post.category === selectedCategory);

  return (
    <InternalLayout>
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold text-yellow-950 dark:text-yellow-50 mt-4 mb-4">
          Noticias y Actualizaciones
        </h1>

        <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
              <div className="flex items-center mb-4">
                {post.type === 'Video' && <PlayCircle className="mr-2" />}
                {post.type === 'Article' && <Newspaper className="mr-2" />}
                {post.type === 'FeaturedArticle' && <Star className="mr-2" />}
                {post.type === 'Spotify' && <Music className="mr-2" />}
                {post.type === 'YouTube' && <Youtube className="mr-2" />}
                {post.type === 'Link' && <LinkIcon className="mr-2" />}
                <h2 className="text-xl font-semibold">{post.title}</h2>
              </div>
              <PostComponent post={post} />
              {post.supportText && (
                <p className="mt-4 text-gray-600">{post.supportText}</p>
              )}
            </div>
          ))}
        </div>

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

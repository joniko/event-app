import React from 'react';
import Link from 'next/link';
import { Twitter, Facebook, Instagram } from 'lucide-react';

const socialPosts = [
  {
    platform: 'Twitter',
    content:
      '¡No te pierdas nuestra sesión de apertura mañana a las 9 AM! #EventoCumbre2023',
    date: '2023-05-31T15:30:00Z',
  },
  {
    platform: 'Facebook',
    content:
      'Gracias a todos los asistentes por hacer de este primer día un éxito. ¡Nos vemos mañana!',
    date: '2023-06-01T22:00:00Z',
  },
  // Añade más posts aquí
];

export default function SocialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Redes Sociales</h1>
      <div className="space-y-4">
        {socialPosts.map((post, index) => (
          <div
            key={index}
            className="bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50 shadow-md rounded-lg p-4"
          >
            <div className="flex items-center mb-2">
              {post.platform === 'Twitter' && <Twitter className="mr-2" />}
              {post.platform === 'Facebook' && <Facebook className="mr-2" />}
              {post.platform === 'Instagram' && <Instagram className="mr-2" />}
              <span className="font-semibold">{post.platform}</span>
            </div>
            <p className="mb-2">{post.content}</p>
            <p className="text-sm text-gray-500">
              {new Date(post.date).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Síguenos en redes sociales</h2>
      </div>
    </div>
  );
}

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { handleTransition } from '@/components/TransitionLink';

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <main className="container flex flex-col px-4 mx-auto max-w-2xl">
      <button
        onClick={(e) => handleTransition(e, '/', router)}
        className="flex items-center justify-center w-10 h-10 mb-4 rounded-full text-yellow-800 bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-50 transition-colors duration-200"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      {children}
    </main>
  );
}

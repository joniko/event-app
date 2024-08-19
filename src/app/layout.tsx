import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cumbre Generaciones 2024',
  description: 'Consulta el programa, busca tus talleres y las ubicaciones.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`flex min-h-full bg-zinc-100 antialiased dark:bg-zinc-950 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}

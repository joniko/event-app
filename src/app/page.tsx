import React from 'react';
import Link from 'next/link';
import WavyBackground from '@/components/WavyBackground';
import {
  Calendar,
  MapPin,
  Mic2,
  BookOpen,
  Users,
  Info,
  MessageSquare,
  ThumbsUp,
  Newspaper,
  Store,
  Star,
  Map,
} from 'lucide-react';

const navigationItems = [
  { icon: Calendar, text: 'Programa', href: '/program' },
  { icon: MapPin, text: 'Ubicaciones', href: '/locations' },
  { icon: Mic2, text: 'Oradores', href: '/speakers' },
  { icon: BookOpen, text: 'Talleres', href: '/workshops' },
  { icon: Users, text: 'Auspiciantes', href: '/sponsors' },
  { icon: Info, text: 'Acerca de', href: '/about' },
  { icon: MessageSquare, text: 'Contacto', href: '/contact' },
  { icon: MessageSquare, text: 'FAQ', href: '/faq' },
  { icon: ThumbsUp, text: 'Feedback', href: '/feedback' },
  { icon: Newspaper, text: 'Noticias', href: '/news-feed' },
  { icon: Calendar, text: 'Cronograma', href: '/schedule' },
  { icon: Store, text: 'Tienda', href: '/store' },
  { icon: Star, text: 'Equipo', href: '/team' },
  { icon: Map, text: 'Mapa del Venue', href: '/venue-map' },
];
export default function Home() {
  return (
    <main className="container flex flex-col items-center px-4 mx-auto max-w-5xl">
      <WavyBackground />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mt-8">
        {navigationItems.map(({ icon: Icon, text, href }) => (
          <Link
            key={href}
            href={href}
            className="flex flex-col text-base md:text-lg items-center justify-center w-36 md:w-40 h-36 md:h-40 rounded-xl bg-neutral-50 dark:bg-neutral-800 shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline hover:bg-white dark:hover:bg-neutral-700 transition-colors duration-200"
          >
            <Icon className="w-8 h-8 text-yellow-600" />
            <span className="mt-2 text-sm md:text-base font-semibold text-yellow-950 dark:text-yellow-50 text-center">
              {text}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}

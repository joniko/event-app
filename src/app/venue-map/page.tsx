'use client';

import React from 'react';

import InternalLayout from '@/components/InternalLayout';
import InteractiveVenueMap from '@/components/InteractiveVenueMap';
import {
  MapPin,
  Coffee,
  ShoppingBag,
  Info,
  Users,
  Utensils,
  FirstAid,
  Wifi,
} from 'lucide-react';

const pavilions = [
  { id: 1, name: 'Pabellón A', type: 'Auditorio' },
  {
    id: 2,
    name: 'Pabellón B',
    type: 'Mixto',
    areas: ['Baños', 'Comedor', 'Merch'],
  },
  { id: 3, name: 'Pabellón C', type: 'Auditorio' },
  {
    id: 4,
    name: 'Pabellón D',
    type: 'Mixto',
    areas: ['Baños', 'Comedor', 'Merch'],
  },
  {
    id: 5,
    name: 'Pabellón E',
    type: 'Central',
    areas: ['Acreditaciones', 'Informes'],
  },
  { id: 6, name: 'Pabellón F', type: 'Auditorio' },
];

const serviceAreas = [
  { name: 'Baños', icon: MapPin },
  { name: 'Comedor', icon: Utensils },
  { name: 'Cafetería', icon: Coffee },
  { name: 'Tienda de Merchandise', icon: ShoppingBag },
  { name: 'Punto de Información', icon: Info },
  { name: 'Zona de Networking', icon: Users },
  { name: 'Primeros Auxilios', icon: FirstAid },
  { name: 'Zona WiFi', icon: Wifi },
];

export default function VenueMapPage() {
  // Reemplaza esta URL con la ruta a tu archivo SVG del mapa
  const mapSvgUrl = '/path/to/your/venue-map.svg';

  return (
    <InternalLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Mapa del Venue</h1>
        <InteractiveVenueMap svgUrl={mapSvgUrl} />

        {/* ... (el resto del código permanece igual) */}
      </div>
    </InternalLayout>
  );
}

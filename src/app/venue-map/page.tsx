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
  Ambulance,
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
  { name: 'Primeros Auxilios', icon: Ambulance },
  { name: 'Zona WiFi', icon: Wifi },
];

export default function VenueMapPage() {
  // Reemplaza esta URL con la ruta a tu archivo SVG del mapa
  const mapSvgUrl = '/path/to/your/venue-map.svg';

  return (
    <InternalLayout>
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold text-yellow-950 dark:text-yellow-50 mt-4 mb-4">
          Mapa del Venue
        </h1>
        <InteractiveVenueMap svgUrl={mapSvgUrl} />

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Áreas de Servicio</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {serviceAreas.map((service) => (
              <div
                key={service.name}
                className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
              >
                <service.icon className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" />
                <span>{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Pabellones</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {pavilions.map((pavilion) => (
              <div
                key={pavilion.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
              >
                <h3 className="text-lg font-semibold mb-2">{pavilion.name}</h3>
                <p>{pavilion.type}</p>
                {pavilion.areas && (
                  <ul className="mt-2 text-sm">
                    {pavilion.areas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </InternalLayout>
  );
}

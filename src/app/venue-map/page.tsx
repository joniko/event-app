import React from "react";
import Image from "next/image";
import Link from "next/link";
import InternalLayout from "@/components/InternalLayout";

export default function VenueMapPage() {
  return (
    <InternalLayout>
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold text-yellow-950 dark:text-yellow-50 mt-4 mb-4">
          Mapa del Venue
        </h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <Image
            src="/images/venue-map.jpg"
            alt="Mapa del Venue"
            width={1200}
            height={800}
            className="w-full h-auto"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Leyenda</h2>
            <ul className="list-disc list-inside">
              <li>Área A: Salas de Conferencias</li>
              <li>Área B: Zona de Exposiciones</li>
              <li>Área C: Área de Networking</li>
              <li>Área D: Restaurantes y Cafeterías</li>
            </ul>
          </div>
        </div>
        <Link
          href="/"
          className="mt-4 inline-block text-orange-600 hover:underline"
        >
          Volver al Inicio
        </Link>
      </div>
    </InternalLayout>
  );
}

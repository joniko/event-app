'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import InternalLayout from '@/components/InternalLayout';
import {
  Shirt,
  Coffee,
  Book,
  Headphones,
  Star,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  products: Product[];
}

const categories: Category[] = [
  {
    name: 'Camisetas',
    icon: <Shirt />,
    products: [
      { id: 1, name: 'Camiseta Logo', price: 25, image: '/merch/tshirt-1.png' },
      {
        id: 2,
        name: 'Camiseta Evento',
        price: 30,
        image: '/merch/tshirt-2.png',
      },
      {
        id: 3,
        name: 'Camiseta Artista',
        price: 35,
        image: '/merch/tshirt-3.jpg',
      },
      {
        id: 4,
        name: 'Camiseta Limitada',
        price: 40,
        image: '/merch/tshirt-4.jpg',
      },
    ],
  },
  {
    name: 'Tazas',
    icon: <Coffee />,
    products: [
      { id: 5, name: 'Taza Logo', price: 15, image: '/merch/mug-1.jpg' },
      { id: 6, name: 'Taza Evento', price: 18, image: '/merch/mug-2.jpg' },
      { id: 7, name: 'Taza Artista', price: 20, image: '/merch/mug-3.jpg' },
      {
        id: 8,
        name: 'Taza Coleccionista',
        price: 25,
        image: '/merch/mug-4.jpg',
      },
    ],
  },
  {
    name: 'Libros',
    icon: <Book />,
    products: [
      {
        id: 9,
        name: 'Libro del Evento',
        price: 30,
        image: '/merch/book-1.jpg',
      },
      {
        id: 10,
        name: 'Biografía Artista',
        price: 35,
        image: '/merch/book-2.jpg',
      },
      { id: 11, name: 'Guía del Fan', price: 25, image: '/merch/book-3.jpg' },
      { id: 12, name: 'Libro de Fotos', price: 40, image: '/merch/book-4.jpg' },
    ],
  },
  {
    name: 'Accesorios',
    icon: <Headphones />,
    products: [
      {
        id: 13,
        name: 'Pulsera Evento',
        price: 10,
        image: '/merch/accessory-1.jpg',
      },
      {
        id: 14,
        name: 'Llavero Logo',
        price: 8,
        image: '/merch/accessory-2.jpg',
      },
      {
        id: 15,
        name: 'Gorra Evento',
        price: 20,
        image: '/merch/accessory-3.jpg',
      },
      {
        id: 16,
        name: 'Pin Coleccionable',
        price: 5,
        image: '/merch/accessory-4.jpg',
      },
    ],
  },
];

const highlightedProducts: Product[] = [
  { id: 101, name: 'Camiseta VIP', price: 50, image: '/merch/highlight-1.jpg' },
  {
    id: 102,
    name: 'Poster Firmado',
    price: 100,
    image: '/merch/highlight-2.jpg',
  },
  {
    id: 103,
    name: 'Set Coleccionista',
    price: 150,
    image: '/merch/highlight-3.jpg',
  },
];

const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className="bg-white shadow-md rounded-lg p-4 flex-shrink-0 w-full">
    <Image
      src={product.image}
      alt={product.name}
      width={200}
      height={200}
      className="w-full h-48 object-cover mb-4 rounded"
    />
    <h3 className="text-lg font-semibold">{product.name}</h3>
    <p className="text-gray-600">${product.price}</p>
    <button className="mt-2 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">
      Agregar al carrito
    </button>
  </div>
);

const CategorySlider: React.FC<{ category: Category }> = ({ category }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount =
        sliderRef.current.offsetWidth * (direction === 'left' ? -1 : 1);
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div
        ref={sliderRef}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        style={{
          scrollSnapType: 'x mandatory',
          scrollPadding: '0 16.66%',
          overscrollBehaviorX: 'contain',
        }}
      >
        {category.products.map((product) => (
          <div key={product.id} className="w-1/3 flex-shrink-0 snap-start px-2">
            <ProductCard product={product} />
          </div>
        ))}
        <div className="w-1/3 flex-shrink-0 snap-start px-2 flex items-center justify-center">
          <Link
            href={`/category/${category.name}`}
            className="bg-gray-100 rounded-lg hover:bg-gray-200 p-4 text-center"
          >
            Ver todos
          </Link>
        </div>
      </div>
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default function MerchStorePage() {
  return (
    <InternalLayout>
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold text-yellow-950 dark:text-yellow-50 mt-4 mb-4">
          Tienda de Merchandise
        </h1>

        <div className="flex justify-center space-x-4 mb-8 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`#${category.name}`}
              className="flex flex-col items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200 flex-shrink-0"
            >
              {category.icon}
              <span className="mt-1 text-sm">{category.name}</span>
            </Link>
          ))}
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center">
            <Star className="mr-2" /> Productos Destacados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {categories.map((category) => (
          <section key={category.name} id={category.name} className="mb-12">
            <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4 flex items-center">
              {category.icon}
              <span className="ml-2">{category.name}</span>
            </h2>
            <CategorySlider category={category} />
          </section>
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

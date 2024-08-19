'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import InternalLayout from '@/components/InternalLayout';

import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

type FAQCategory = {
  category: string;
  faqs: FAQ[];
};

const faqData: FAQCategory[] = [
  {
    category: 'Información General',
    faqs: [
      {
        question: '¿Cuándo y dónde se llevará a cabo el evento?',
        answer:
          'El evento se llevará a cabo del 1 al 3 de septiembre de 2023 en el Centro de Convenciones de la Ciudad.',
      },
      {
        question: '¿Cuál es el horario del evento?',
        answer:
          'El evento comienza a las 9:00 AM y termina a las 6:00 PM cada día.',
      },
    ],
  },
  {
    category: 'Entradas y Registro',
    faqs: [
      {
        question: '¿Cómo puedo comprar entradas?',
        answer:
          'Puedes comprar entradas a través de nuestro sitio web oficial o en la taquilla del evento.',
      },
      {
        question: '¿Hay descuentos para estudiantes?',
        answer:
          'Sí, ofrecemos un 20% de descuento para estudiantes con identificación válida.',
      },
    ],
  },
  {
    category: 'Logística',
    faqs: [
      {
        question: '¿Hay estacionamiento disponible?',
        answer:
          'Sí, hay estacionamiento disponible en el lugar por una tarifa adicional.',
      },
      {
        question: '¿Se proporcionará comida durante el evento?',
        answer:
          'Sí, habrá opciones de catering disponibles para compra durante el evento.',
      },
    ],
  },
];

export default function FAQPage() {
  const [openAnswers, setOpenAnswers] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleAnswer = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenAnswers((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/1234567890', '_blank');
  };

  return (
    <InternalLayout>
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold text-yellow-950 dark:text-yellow-50 mt-4 mb-4">
          Preguntas Frecuentes
        </h1>
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-4">
              {category.category}
            </h2>
            <div className="space-y-4">
              {category.faqs.map((faq, questionIndex) => (
                <div
                  key={questionIndex}
                  className="text-neutral-800 dark:text-neutral-200 rounded-xl bg-neutral-50 shadow-[0px_0px_0px_1px_rgba(9,9,11,0.07),0px_2px_2px_0px_rgba(9,9,11,0.05)] dark:bg-neutral-800 dark:shadow-[0px_0px_0px_1px_rgba(255,255,255,0.1)] dark:before:-inset-px dark:before:rounded-xl dark:before:shadow-[0px_2px_8px_0px_rgba(0,_0,_0,_0.20),_0px_1px_0px_0px_rgba(255,_255,_255,_0.06)_inset] forced-colors:outline p-4"
                >
                  <button
                    className="flex justify-between items-center w-full text-left"
                    onClick={() => toggleAnswer(categoryIndex, questionIndex)}
                  >
                    <h3 className="text-lg font-semibold ">{faq.question}</h3>
                    {openAnswers[`${categoryIndex}-${questionIndex}`] ? (
                      <ChevronUp />
                    ) : (
                      <ChevronDown />
                    )}
                  </button>
                  {openAnswers[`${categoryIndex}-${questionIndex}`] && (
                    <p className="mt-2">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={openWhatsApp}
          className="mt-8 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <MessageCircle className="mr-2" />
          Contactar por WhatsApp
        </button>
        <Link
          href="/"
          className="mt-4 inline-block text-yellow-600 hover:underline"
        >
          Volver al Inicio
        </Link>
      </div>
    </InternalLayout>
  );
}

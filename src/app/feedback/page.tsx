import React from 'react';
import Link from 'next/link';
import InternalLayout from '@/components/InternalLayout';

export default function FeedbackPage() {
  return (
    <InternalLayout>
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold text-yellow-950 dark:text-yellow-50 mt-4 mb-4">
          Encuesta de Feedback
        </h1>
        <form className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="overall"
            >
              Calificación general del evento:
            </label>
            <select
              id="overall"
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
            >
              <option>Excelente</option>
              <option>Bueno</option>
              <option>Regular</option>
              <option>Malo</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="comments"
            >
              Comentarios adicionales:
            </label>
            <textarea
              id="comments"
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Enviar Feedback
          </button>
        </form>
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

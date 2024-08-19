import React from "react";
import Link from "next/link";
import InternalLayout from "@/components/InternalLayout";

export default function ContactPage() {
  return (
    <InternalLayout>
      <div className="container mx-auto py-4">
        <h1 className="text-2xl font-bold text-yellow-950 dark:text-yellow-50 mt-4 mb-4">
          Contacto
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="mb-4">
            <strong>Email:</strong> info@eventocumbre.com
          </p>
          <p className="mb-4">
            <strong>Teléfono:</strong> +1 (123) 456-7890
          </p>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Mensaje:
              </label>
              <textarea
                id="message"
                className="shadow border rounded w-full py-2 px-3 text-gray-700"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Enviar Mensaje
            </button>
          </form>
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

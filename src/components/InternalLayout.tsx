"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function InternalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <main className="container flex flex-col px-4 mx-auto max-w-2xl">
      <button
        onClick={() => router.push("/")}
        className="flex items-center justify-center w-10 h-10 mb-4 bg-yellow-100 rounded-full text-yellow-800 hover:bg-white transition-colors duration-200"
      >
        <ArrowLeft className="w-6 h-6" />
      </button>
      {children}
    </main>
  );
}

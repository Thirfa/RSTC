import React from 'react';

export default function Home() {
  return (
    <div className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth">
      
      <section className="h-screen snap-start flex items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Section 1: Hero</h1>
          <p className="text-lg mt-2">Scroll ke bawah untuk melihat efeknya</p>
        </div>
      </section>

      
      <section className="h-screen snap-start flex items-center justify-center bg-gray-200 dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Section 2: Tentang Kami</h1>
          <p className="text-lg mt-2">Ini adalah section kedua</p>
        </div>
      </section>

      
      <section className="h-screen snap-start flex items-center justify-center bg-zinc-50 dark:bg-black">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Section 3: Layanan</h1>
          <p className="text-lg mt-2">Ini adalah section ketiga</p>
        </div>
      </section>

      {/* Tambahkan section h-screen snap-start lainnya di sini... */}

    </div>
  );
}
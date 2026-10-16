"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialGallery } from "@/lib/data";
import { ZoomIn, X, Calendar, Images } from "lucide-react";

export default function GaleriPage() {
  const [activePhoto, setActivePhoto] = useState<(typeof initialGallery)[0] | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <Images className="w-3.5 h-3.5" />
              <span>Dokumentasi Resmi</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              GALERI KELURAHAN BENTENG
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Dokumentasi aktivitas pemerintahan, pembinaan Desa Cantik, pelayanan warga, dan kegiatan kemasyarakatan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialGallery.map((item) => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="group relative rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 shadow-sm cursor-pointer h-72"
              >
                <Image
                  src={item.foto}
                  alt={item.judul}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 text-white">
                  <span className="text-[11px] text-emerald-300 font-semibold flex items-center gap-1 mb-1">
                    <Calendar className="w-3 h-3" />
                    {item.tanggal}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base leading-snug">{item.judul}</h3>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span>Perbesar Foto</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[65vh] bg-black">
              <Image src={activePhoto.foto} alt={activePhoto.judul} fill className="object-contain" />
            </div>
            <div className="p-4 text-white">
              <p className="text-xs text-emerald-400 font-semibold">{activePhoto.tanggal}</p>
              <h4 className="text-base font-bold mt-1">{activePhoto.judul}</h4>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

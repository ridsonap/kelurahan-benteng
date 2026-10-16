"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Images, ZoomIn, X, Calendar } from "lucide-react";
import { initialGallery } from "@/lib/data";

export default function GaleriSection() {
  const [activePhoto, setActivePhoto] = useState<(typeof initialGallery)[0] | null>(null);

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-semibold mb-2">
              <Images className="w-3.5 h-3.5" />
              <span>Dokumentasi Visual</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              GALERI KELURAHAN
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Potret aktivitas kemasyarakatan, inovasi pelayanan, dan kebersamaan warga Benteng
            </p>
          </div>
          <Link
            href="/galeri"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:text-purple-700 hover:border-purple-500 text-xs font-bold transition-all shadow-2xs self-start sm:self-auto"
          >
            <span>Buka Semua Galeri</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 shadow-sm cursor-pointer h-64 sm:h-72"
            >
              <Image
                src={item.foto}
                alt={item.judul}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <span className="text-[11px] text-emerald-300 font-medium flex items-center gap-1.5 mb-1">
                  <Calendar className="w-3 h-3" />
                  {item.tanggal}
                </span>
                <h3 className="font-bold text-sm sm:text-base leading-snug drop-shadow-sm">
                  {item.judul}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Perbesar Foto</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

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
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[65vh] bg-black">
              <Image
                src={activePhoto.foto}
                alt={activePhoto.judul}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-4 text-white">
              <p className="text-xs text-emerald-400 font-semibold">{activePhoto.tanggal}</p>
              <h4 className="text-base font-bold mt-1">{activePhoto.judul}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

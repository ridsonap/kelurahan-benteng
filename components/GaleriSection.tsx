"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ZoomIn, X, Calendar } from "lucide-react";
import { initialGallery } from "@/lib/data";

export default function GaleriSection() {
  const [activePhoto, setActivePhoto] = useState<(typeof initialGallery)[0] | null>(null);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-emerald-800 tracking-wider uppercase">
              Dokumentasi Foto
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Galeri Kegiatan Kelurahan
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Dokumentasi visual pembinaan Desa Cantik, inovasi pelayanan, dan partisipasi warga
            </p>
          </div>

          <Link
            href="/galeri"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:text-emerald-800 hover:border-emerald-600 text-xs font-bold transition-colors self-start sm:self-auto shrink-0"
          >
            <span>Buka Seluruh Galeri</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {initialGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePhoto(item)}
              className="group relative rounded-xl overflow-hidden bg-slate-200 border border-slate-200 shadow-2xs cursor-pointer h-60 sm:h-64"
            >
              <Image
                src={item.foto}
                alt={item.judul}
                fill
                className="object-cover group-hover:scale-103 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-[11px] text-emerald-300 font-medium flex items-center gap-1 mb-1">
                  <Calendar className="w-3 h-3" />
                  {item.tanggal}
                </span>
                <h3 className="font-bold text-xs sm:text-sm leading-snug drop-shadow-xs">
                  {item.judul}
                </h3>
                <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-3 h-3" />
                  <span>Perbesar</span>
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
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
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
              <h4 className="text-sm font-bold mt-1">{activePhoto.judul}</h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

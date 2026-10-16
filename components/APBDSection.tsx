"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, X, TrendingUp, TrendingDown, DollarSign } from "lucide-react";

export default function APBDSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Infographic Image preview */}
            <div className="lg:col-span-5 relative group cursor-pointer" onClick={() => setModalOpen(true)}>
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <Image
                  src="/landing/images/slider-main/apbd.png"
                  alt="Infografis APBD Kelurahan Benteng 2026"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl flex items-center justify-center text-white gap-2 text-xs font-semibold backdrop-blur-2xs">
                <Maximize2 className="w-4 h-4" />
                <span>Klik untuk memperbesar</span>
              </div>
            </div>

            {/* Info and Financial Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
                  <DollarSign className="w-3.5 h-3.5" />
                  <span>Transparansi Keuangan</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
                  APBD KELURAHAN TAHUN 2026
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  Akses cepat, terbuka, dan transparan terhadap realisasi Anggaran Pendapatan dan Belanja Kelurahan Benteng untuk pembangunan dan pemberdayaan masyarakat.
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-700 text-white shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-emerald-100 text-xs font-medium">
                    <span>Pendapatan Kelurahan</span>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                    Rp 1.278.593.000
                  </h3>
                  <p className="text-[11px] text-emerald-100/80">PAD 4% • Dana Transfer 96%</p>
                </div>

                <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-sm space-y-1">
                  <div className="flex items-center justify-between text-amber-100 text-xs font-medium">
                    <span>Belanja Kelurahan</span>
                    <TrendingDown className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">
                    Rp 384.667.683
                  </h3>
                  <p className="text-[11px] text-amber-100/80">Operasional, Sarana & Fasilitas</p>
                </div>
              </div>

              {/* Surplus Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs text-blue-100 font-medium">Surplus Anggaran Berjalan</span>
                  <h3 className="text-xl sm:text-2xl font-black tracking-tight">Rp 893.925.317</h3>
                </div>
                <Link
                  href="/apbd"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-blue-800 hover:bg-blue-50 text-xs font-bold transition-all shadow-xs shrink-0 self-start sm:self-auto"
                >
                  <span>Lihat Rincian Lengkap</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs"
          onClick={() => setModalOpen(false)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-2xl p-2 overflow-hidden shadow-2xl">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative w-full h-[75vh]">
              <Image
                src="/landing/images/slider-main/apbd.png"
                alt="Infografis APBD Kelurahan"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2, X, TrendingUp, TrendingDown, CheckCircle2 } from "lucide-react";

export default function APBDSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-emerald-800 tracking-wider uppercase">
              Transparansi Anggaran
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Realisasi APBD Kelurahan Tahun 2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Keterbukaan informasi pengelolaan keuangan daerah untuk pembangunan dan pelayanan masyarakat
            </p>
          </div>

          <Link
            href="/apbd"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:text-emerald-800 hover:border-emerald-600 text-xs font-bold transition-colors self-start sm:self-auto shrink-0"
          >
            <span>Rincian Pembukuan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Clean Financial Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>TOTAL PENDAPATAN</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 tracking-tight">
                Rp 1.278.593.000
              </p>
              <div className="mt-2 space-y-1 text-[11px] text-slate-500">
                <div className="flex justify-between">
                  <span>Dana Transfer (96%)</span>
                  <span className="font-semibold text-slate-700">Rp 1,227 M</span>
                </div>
                <div className="flex justify-between">
                  <span>Pendapatan Asli Daerah (4%)</span>
                  <span className="font-semibold text-slate-700">Rp 51,1 Jt</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500">
              <span>TOTAL BELANJA</span>
              <TrendingDown className="w-4 h-4 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 tracking-tight">
                Rp 384.667.683
              </p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Realisasi operasional kantor, pemeliharaan penerangan jalan lingkungan, dan pembinaan warga.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-emerald-200 bg-emerald-50/20 shadow-xs space-y-3">
            <div className="flex items-center justify-between text-xs font-bold text-emerald-800">
              <span>SISA ANGGARAN (SURPLUS)</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-700" />
            </div>
            <div>
              <p className="text-2xl font-black text-emerald-800 tracking-tight">
                Rp 893.925.317
              </p>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Kas aman tersimpan untuk kelanjutan program pembangunan triwulan berikutnya.
              </p>
            </div>
          </div>
        </div>

        {/* Infographic Preview Banner */}
        <div
          onClick={() => setModalOpen(true)}
          className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all flex flex-col sm:flex-row items-center justify-between gap-4 cursor-pointer group"
        >
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200 shrink-0">
              <Image
                src="/landing/images/slider-main/apbd.png"
                alt="Infografis APBD"
                fill
                className="object-contain p-1"
              />
            </div>
            <div>
              <h4 className="font-bold text-xs sm:text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
                Infografis Resmi APBD Kelurahan Benteng 2026
              </h4>
              <p className="text-[11px] text-slate-500">
                Klik untuk memperbesar infografis lembar pengumuman publik
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 group-hover:text-emerald-800 shrink-0">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Lihat Infografis Penuh</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-2xs"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-2xl p-2 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-black text-white flex items-center justify-center transition"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="relative w-full h-[75vh]">
              <Image
                src="/landing/images/slider-main/apbd.png"
                alt="Infografis APBD"
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

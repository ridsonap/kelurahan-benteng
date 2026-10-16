"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  FileText,
  Calendar,
  ShoppingBag,
  BarChart2,
  ArrowRight,
  ShieldCheck,
  Clock,
} from "lucide-react";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const searchIndex = [
    { title: "Permohonan Surat Online (SKU, SKTM, Kematian, Izin)", category: "Layanan", url: "/pengantar", icon: FileText },
    { title: "Cek Status Pengantar Surat (NIK)", category: "Layanan", url: "/status", icon: FileText },
    { title: "Pengaduan & Aspirasi Masyarakat", category: "Layanan", url: "/pengaduan", icon: FileText },
    { title: "Buku Tamu Digital Kelurahan", category: "Layanan", url: "/bukutamu", icon: FileText },
    { title: "Data Kependudukan Kelurahan Benteng", category: "Statistik", url: "/statistik-penduduk", icon: BarChart2 },
    { title: "Statistik Pendidikan Warga", category: "Statistik", url: "/pendidikan", icon: BarChart2 },
    { title: "Statistik Pekerjaan Penduduk", category: "Statistik", url: "/pekerjaan", icon: BarChart2 },
    { title: "Transparansi APBD Kelurahan 2026", category: "Profil", url: "/apbd", icon: BarChart2 },
    { title: "Struktur Pemerintah & Aparatur", category: "Profil", url: "/pemerintah", icon: BarChart2 },
    { title: "Agenda Kegiatan Kelurahan", category: "Agenda", url: "/agenda", icon: Calendar },
    { title: "Katalog UMKM & Produk Warga Benteng", category: "UMKM", url: "/belanja", icon: ShoppingBag },
    { title: "PPID & Dokumen Informasi Publik", category: "PPID", url: "/ppid", icon: FileText },
  ];

  const results = query.trim()
    ? searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <section className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100/70 border-b border-slate-200/80 pt-8 pb-12 sm:pt-14 sm:pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Civic Editorial Hero */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
              <span>Desa Cinta Statistik (Desa Cantik) BPS Sulsel</span>
            </div>

            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Pusat Pelayanan & Data Terbuka Kelurahan Benteng
              </h1>
              <p className="text-sm sm:text-base text-slate-600 max-w-xl leading-relaxed">
                Akses mandiri persuratan warga, transparansi realisasi APBD, pengaduan lingkungan, dan basis data statistik terverifikasi Kabupaten Kepulauan Selayar.
              </p>
            </div>

            {/* Live Search Box */}
            <div className="relative max-w-xl">
              <div className="relative flex items-center bg-white rounded-xl shadow-xs border border-slate-300 focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-100 transition-all">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setFocused(true)}
                  placeholder="Ketik layanan yang Anda butuhkan (contoh: SKU, APBD, NIK)..."
                  className="w-full pl-10 pr-24 py-3 text-xs sm:text-sm bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-hidden"
                />
                <button
                  type="button"
                  className="absolute right-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Cari
                </button>
              </div>

              {/* Instant Search Dropdown */}
              {focused && results.length > 0 && (
                <div
                  className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-50 text-left max-h-80 overflow-y-auto"
                  onMouseLeave={() => setFocused(false)}
                >
                  <div className="p-3 bg-slate-50 border-b border-slate-100 text-[11px] font-bold text-slate-500 uppercase tracking-wider flex justify-between items-center">
                    <span>Hasil Pencarian ({results.length})</span>
                    <span className="text-[10px] text-slate-400 font-normal">Pilih untuk membuka</span>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {results.map((r, i) => {
                      const Icon = r.icon;
                      return (
                        <Link
                          key={i}
                          href={r.url}
                          onClick={() => setFocused(false)}
                          className="flex items-center justify-between p-3 hover:bg-emerald-50/70 transition-colors group"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                              <Icon className="w-3.5 h-3.5" />
                            </div>
                            <div>
                              <p className="text-xs font-semibold text-slate-800 group-hover:text-emerald-800">
                                {r.title}
                              </p>
                              <span className="text-[10px] font-medium text-emerald-700">
                                {r.category}
                              </span>
                            </div>
                          </div>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Operating Hours Status */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
              <div className="flex items-center gap-1.5 font-medium text-slate-700">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>Pelayanan: 08.00 – 15.30 WITA</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Kecamatan Benteng, Kepulauan Selayar</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Photographic Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-md bg-white">
              <div className="relative h-64 sm:h-80 w-full">
                <Image
                  src="/landing/images/slider-main/benteng.png"
                  alt="Kantor Kelurahan Benteng"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-slate-900">Kantor Kelurahan Benteng</h4>
                  <p className="text-[11px] text-slate-500">Jl. Siswomiharjo No. 12, Benteng</p>
                </div>
                <Link
                  href="/pemerintah"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
                >
                  <span>Aparatur</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

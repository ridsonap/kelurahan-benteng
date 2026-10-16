"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, FileText, Calendar, ShoppingBag, BarChart2, ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const searchIndex = [
    { title: "Permohonan Surat Online (SKU, SKTM, Kematian, Izin)", category: "Layanan", url: "/pengantar", icon: FileText },
    { title: "Cek Status Pengantar Surat (NIK)", category: "Layanan", url: "/status", icon: FileText },
    { title: "Pengaduan & Aspirasi Masyarakat", category: "Layanan", url: "/pengaduan", icon: FileText },
    { title: "Buku Tamu Digital", category: "Layanan", url: "/bukutamu", icon: FileText },
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
    <div
      className="relative min-h-[520px] flex items-center justify-center text-center px-4 py-20 rounded-b-[40px] md:rounded-b-[60px] overflow-hidden shadow-xl"
      style={{
        backgroundImage: "linear-gradient(rgba(15, 23, 42, 0.65), rgba(6, 78, 59, 0.7)), url('/landing/images/slider-main/bentengg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-10 max-w-3xl w-full mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-600/90 text-white text-xs font-semibold tracking-wide backdrop-blur-md shadow-md animate-fade-in">
          <span>Badan Pusat Statistik Provinsi Sulawesi Selatan</span>
        </div>

        <h2 className="text-emerald-300 font-semibold text-lg md:text-xl tracking-wide drop-shadow-md">
          Selamat Datang di Website Resmi
        </h2>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight drop-shadow-lg">
          Desa Cantik Kelurahan Benteng
        </h1>

        <p className="text-sm md:text-base text-slate-200 max-w-xl mx-auto leading-relaxed drop-shadow">
          Pusat Informasi Statistik, Transparansi Pemerintahan, dan Pelayanan Administrasi Digital Terpadu Kabupaten Kepulauan Selayar.
        </p>

        {/* Live Search Box */}
        <div className="max-w-xl mx-auto relative pt-2">
          <div className="relative flex items-center bg-white/95 backdrop-blur-md rounded-full shadow-2xl p-1.5 border-2 border-emerald-400 focus-within:border-emerald-600 transition-all">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              placeholder="Cari berita, agenda, layanan surat, UMKM, statistik..."
              className="w-full pl-5 pr-12 py-2.5 text-sm bg-transparent text-slate-800 placeholder-slate-400 focus:outline-hidden"
            />
            <button
              aria-label="Cari"
              className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white flex items-center justify-center transition-transform hover:scale-105 shrink-0"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Search Results Dropdown */}
          {focused && results.length > 0 && (
            <div
              className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-50 text-left max-h-80 overflow-y-auto"
              onMouseLeave={() => setFocused(false)}
            >
              <div className="p-3 bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-500 uppercase tracking-wider flex justify-between items-center">
                <span>Hasil Pencarian ({results.length})</span>
                <span className="text-[10px] text-slate-400">Klik untuk membuka</span>
              </div>
              <div className="divide-y divide-slate-100">
                {results.map((r, i) => {
                  const Icon = r.icon;
                  return (
                    <Link
                      key={i}
                      href={r.url}
                      onClick={() => setFocused(false)}
                      className="flex items-center justify-between p-3.5 hover:bg-emerald-50/80 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-800 group-hover:text-emerald-800">
                            {r.title}
                          </p>
                          <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-sm">
                            {r.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

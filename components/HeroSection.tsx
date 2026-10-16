"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  FileText,
  Calendar,
  ShoppingBag,
  BarChart2,
  ArrowRight,
  Sparkles,
  X,
  Clock,
  ShieldCheck,
} from "lucide-react";

export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const searchIndex = [
    { title: "Permohonan Surat Online (SKU, SKTM, Kematian, Izin)", category: "Layanan Mandiri", url: "/pengantar", icon: FileText },
    { title: "Lacak Status Surat via NIK", category: "Layanan Mandiri", url: "/status", icon: FileText },
    { title: "Pengaduan & Aspirasi Warga", category: "Layanan Mandiri", url: "/pengaduan", icon: FileText },
    { title: "Buku Tamu Digital Kelurahan", category: "Layanan Mandiri", url: "/bukutamu", icon: FileText },
    { title: "Data Kependudukan Kelurahan Benteng", category: "Statistik", url: "/statistik-penduduk", icon: BarChart2 },
    { title: "Statistik Pendidikan Warga", category: "Statistik", url: "/pendidikan", icon: BarChart2 },
    { title: "Statistik Pekerjaan Penduduk", category: "Statistik", url: "/pekerjaan", icon: BarChart2 },
    { title: "Komposisi Pemeluk Agama", category: "Statistik", url: "/agama", icon: BarChart2 },
    { title: "Transparansi Realisasi APBD 2026", category: "Profil", url: "/apbd", icon: BarChart2 },
    { title: "Struktur Pemerintah & Aparatur", category: "Profil", url: "/pemerintah", icon: BarChart2 },
    { title: "Sejarah & Wilayah Administratif", category: "Profil", url: "/sejarah", icon: BarChart2 },
    { title: "Agenda Kegiatan Kelurahan", category: "Agenda", url: "/agenda", icon: Calendar },
    { title: "Katalog UMKM & Produk Warga Benteng", category: "UMKM", url: "/belanja", icon: ShoppingBag },
    { title: "PPID & Dokumen Informasi Publik", category: "Publikasi", url: "/ppid", icon: FileText },
  ];

  const quickPills = [
    { label: "Surat Online", url: "/pengantar" },
    { label: "Cek NIK", url: "/status" },
    { label: "Transparansi APBD", url: "/apbd" },
    { label: "Data Penduduk", url: "/statistik-penduduk" },
    { label: "Pengaduan", url: "/pengaduan" },
    { label: "Buku Tamu", url: "/bukutamu" },
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
      className="relative min-h-[540px] sm:min-h-[580px] flex items-center justify-center text-center px-4 pt-16 pb-24 sm:pb-28 rounded-b-[36px] sm:rounded-b-[56px] overflow-hidden shadow-xl"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(15, 23, 42, 0.78), rgba(6, 78, 59, 0.82), rgba(15, 23, 42, 0.90)), url('/landing/images/slider-main/bentengg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Subtle ambient lighting effect */}
      <div className="absolute inset-0 bg-radial from-emerald-500/15 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full mx-auto space-y-6">
        {/* Civic Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-200 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
          <span>Binaan Resmi Badan Pusat Statistik (Desa Cantik 2026)</span>
        </div>

        {/* Headings */}
        <div className="space-y-2">
          <p className="text-emerald-300 font-bold text-sm sm:text-base tracking-widest uppercase drop-shadow-sm">
            Selamat Datang di Portal Resmi
          </p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
            Desa Cantik Kelurahan Benteng
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-200/90 max-w-2xl mx-auto leading-relaxed drop-shadow-xs font-medium pt-1">
            Pusat Pelayanan Administrasi Mandiri, Transparansi Pengelolaan Anggaran, dan Data Terbuka Terintegrasi Kabupaten Kepulauan Selayar.
          </p>
        </div>

        {/* Live Search Box */}
        <div className="max-w-2xl mx-auto relative pt-2">
          <div className="relative flex items-center bg-white/95 backdrop-blur-md rounded-full shadow-2xl p-1.5 border border-white/40 focus-within:ring-3 focus-within:ring-emerald-400/50 transition-all">
            <Search className="w-4 h-4 text-slate-400 absolute left-4" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setFocused(true)}
              placeholder="Cari layanan surat, data statistik, NIK, transparansi APBD..."
              className="w-full pl-11 pr-24 py-2.5 sm:py-3 text-xs sm:text-sm bg-transparent text-slate-900 placeholder:text-slate-400 focus:outline-hidden font-medium"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-14 text-slate-400 hover:text-slate-600 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-md shrink-0 flex items-center gap-1.5"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cari</span>
            </button>
          </div>

          {/* Quick Suggestions Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            <span className="text-[11px] text-slate-300 font-medium">Pintasan Cepat:</span>
            {quickPills.map((pill, idx) => (
              <Link
                key={idx}
                href={pill.url}
                className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-slate-100 border border-white/15 backdrop-blur-xs transition-colors"
              >
                {pill.label}
              </Link>
            ))}
          </div>

          {/* Dropdown Live Results */}
          {focused && results.length > 0 && (
            <div
              className="absolute left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-50 text-left max-h-80 overflow-y-auto animate-fade-in"
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
                      className="flex items-center justify-between p-3.5 hover:bg-emerald-50/70 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-800 group-hover:text-emerald-800">
                            {r.title}
                          </p>
                          <span className="text-[10px] font-medium text-emerald-700">
                            {r.category}
                          </span>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Operating status & jurisdiction */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-300 pt-2 font-medium">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>Pelayanan: Senin – Jum’at 08.00 – 15.30 WITA</span>
          </div>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Kecamatan Benteng, Kepulauan Selayar</span>
          </div>
        </div>
      </div>
    </div>
  );
}

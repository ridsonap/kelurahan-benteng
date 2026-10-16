"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, BarChart3 } from "lucide-react";

export default function StatistikCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      label: "Dusun / Lingkungan",
      value: "2",
      icon: "/landing/images/icon-image/dusun.png",
      desc: "Satuan Wilayah (587,4 Ha)",
      href: "/sejarah",
    },
    {
      label: "Rukun Tetangga (RT)",
      value: "7",
      icon: "/landing/images/icon-image/rt.png",
      desc: "Komunitas Warga",
      href: "/sejarah",
    },
    {
      label: "Rukun Warga (RW)",
      value: "10",
      icon: "/landing/images/icon-image/rw.png",
      desc: "Satuan Wilayah RW",
      href: "/sejarah",
    },
    {
      label: "Kepala Keluarga",
      value: "912",
      icon: "/landing/images/icon-image/kepalaKeluarga.png",
      desc: "Rata-rata 2.1 jiwa / KK",
      href: "/statistik-penduduk",
    },
    {
      label: "Laki-laki",
      value: "952",
      icon: "/landing/images/icon-image/male.png",
      desc: "49.4% Total Jiwa",
      href: "/statistik-penduduk",
    },
    {
      label: "Perempuan",
      value: "974",
      icon: "/landing/images/icon-image/women.png",
      desc: "50.6% Total Jiwa",
      href: "/statistik-penduduk",
    },
    {
      label: "Disabilitas",
      value: "1",
      icon: "/landing/images/icon-image/disabi.png",
      desc: "Prioritas Bantuan Sosial",
      href: "/statistik-penduduk",
    },
    {
      label: "Total Penduduk",
      value: "1.926",
      icon: "/landing/images/icon-image/family.png",
      desc: "Terdata Desa Cantik 2026",
      href: "/statistik-penduduk",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-16 pb-14 bg-white border-b border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Header with Title and Scroll Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-emerald-800 tracking-wider uppercase">
              Data Terpadu Kependudukan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Statistik Kependudukan Kelurahan Benteng Tahun 2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Data terverifikasi hasil kolaborasi Desa Cinta Statistik (Desa Cantik) bersama BPS Sulawesi Selatan
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
            <Link
              href="/statistik-penduduk"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 text-slate-700 hover:text-emerald-800 hover:border-emerald-600 text-xs font-bold transition-all mr-1"
            >
              <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Tabel Lengkap</span>
            </Link>

            <button
              onClick={() => scroll("left")}
              aria-label="Geser ke kiri"
              className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Geser ke kanan"
              className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:bg-emerald-700 hover:text-white hover:border-emerald-700 flex items-center justify-center transition-all cursor-pointer shadow-2xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Carousel Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 pt-1 scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stats.map((s, idx) => (
            <Link
              key={idx}
              href={s.href}
              className="shrink-0 w-44 sm:w-52 bg-slate-50/70 hover:bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-600/50 hover:-translate-y-1 transition-all duration-200 snap-start flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 relative mb-3 bg-white rounded-2xl p-2.5 border border-slate-200 shadow-2xs flex items-center justify-center group-hover:scale-108 transition-transform">
                <Image
                  src={s.icon}
                  alt={s.label}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <span className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-emerald-800 tracking-tight transition-colors">
                {s.value}
              </span>

              <p className="text-xs font-bold text-slate-700 mt-1 line-clamp-1">
                {s.label}
              </p>

              <span className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                {s.desc}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

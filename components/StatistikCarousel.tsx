"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StatistikCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const stats = [
    { label: "Dusun / Lingkungan", value: "2", icon: "/landing/images/icon-image/dusun.png", desc: "Satuan Wilayah" },
    { label: "Rukun Tetangga (RT)", value: "7", icon: "/landing/images/icon-image/rt.png", desc: "Komunitas Warga" },
    { label: "Rukun Warga (RW)", value: "10", icon: "/landing/images/icon-image/rw.png", desc: "Satuan RW" },
    { label: "Kepala Keluarga", value: "912", icon: "/landing/images/icon-image/kepalaKeluarga.png", desc: "Kartu Keluarga" },
    { label: "Laki-laki", value: "952", icon: "/landing/images/icon-image/male.png", desc: "49.4% Jiwa" },
    { label: "Perempuan", value: "974", icon: "/landing/images/icon-image/women.png", desc: "50.6% Jiwa" },
    { label: "Disabilitas", value: "1", icon: "/landing/images/icon-image/disabi.png", desc: "Prioritas Bantuan" },
    { label: "Jumlah Penduduk", value: "1,926", icon: "/landing/images/icon-image/family.png", desc: "Total Jiwa Terdata" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const offset = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="py-14 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">
              Statistik Kependudukan Kelurahan Benteng Tahun 2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Data terverifikasi hasil kolaborasi Desa Cantik bersama BPS Sulsel
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Geser kiri"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Geser kanan"
              className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-xs flex items-center justify-center text-slate-600 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stats.map((s, idx) => (
            <div
              key={idx}
              className="shrink-0 w-48 sm:w-52 bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 snap-start flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 relative mb-3 bg-emerald-50 rounded-2xl p-2.5 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Image
                  src={s.icon}
                  alt={s.label}
                  fill
                  className="object-contain p-2"
                />
              </div>
              <span className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight text-emerald-800">
                {s.value}
              </span>
              <p className="text-xs font-bold text-slate-700 mt-1">{s.label}</p>
              <span className="text-[11px] text-slate-400 mt-0.5">{s.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

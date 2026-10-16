"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase } from "lucide-react";

export default function PekerjaanPage() {
  const jobData = [
    { label: "Belum / Tidak Bekerja", count: 868, pct: 45.1, color: "#22c55e" },
    { label: "Lainnya", count: 588, pct: 30.5, color: "#60a5fa" },
    { label: "Pegawai Negeri Sipil (PNS)", count: 186, pct: 9.7, color: "#f97316" },
    { label: "Karyawan Swasta", count: 156, pct: 8.1, color: "#a78bfa" },
    { label: "Pedagang", count: 55, pct: 2.9, color: "#ef4444" },
    { label: "P3K (Pegawai Pemerintah)", count: 31, pct: 1.6, color: "#fbbf24" },
    { label: "Petani", count: 14, pct: 0.7, color: "#06b6d4" },
    { label: "Tukang / Konstruksi", count: 11, pct: 0.6, color: "#8b5cf6" },
    { label: "Nelayan", count: 8, pct: 0.4, color: "#ec4899" },
    { label: "Guru / Pendidik", count: 6, pct: 0.3, color: "#14b8a6" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Sektor Ekonomi Warga</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              DATA PEKERJAAN & MATA PENCAHARIAN
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Klasifikasi jenis mata pencaharian dan struktur ketenagakerjaan penduduk Kelurahan Benteng
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
            <h2 className="font-bold text-sm text-slate-800 border-b pb-3">Distribusi Profesi Penduduk</h2>
            <div className="space-y-4">
              {jobData.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span>{item.label}</span>
                    <span className="font-bold text-slate-900">
                      {item.count.toLocaleString()} Jiwa <span className="text-slate-400 font-normal">({item.pct}%)</span>
                    </span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${Math.max(2, item.pct)}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

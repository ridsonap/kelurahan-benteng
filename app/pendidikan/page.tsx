"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GraduationCap, Filter } from "lucide-react";

export default function PendidikanPage() {
  const [tahun, setTahun] = useState("2026");

  const educationData = [
    { level: "SMA / Sederajat", count: 786, pct: 40.8, color: "#22c55e" },
    { level: "Sarjana (S1)", count: 357, pct: 18.5, color: "#3b82f6" },
    { level: "SD / Sederajat", count: 334, pct: 17.3, color: "#f97316" },
    { level: "SMP / Sederajat", count: 201, pct: 10.4, color: "#a855f7" },
    { level: "Tidak / Belum Sekolah", count: 191, pct: 9.9, color: "#ef4444" },
    { level: "Diploma (D3)", count: 30, pct: 1.6, color: "#06b6d4" },
    { level: "Diploma (D1)", count: 19, pct: 1.0, color: "#fbbf24" },
    { level: "Magister (S2)", count: 8, pct: 0.4, color: "#14b8a6" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Indikator Pendidikan</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              DATA TINGKAT PENDIDIKAN WARGA
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Statistik capaian jenjang pendidikan formal penduduk Kelurahan Benteng
            </p>
          </div>

          {/* Chart Bars */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="font-bold text-sm text-slate-800">Grafik Jenjang Pendidikan</h2>
              <span className="text-xs text-slate-400 font-mono">Tahun {tahun}</span>
            </div>

            <div className="space-y-4">
              {educationData.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span>{item.level}</span>
                    <span className="font-bold text-slate-900">
                      {item.count.toLocaleString()} Jiwa <span className="text-slate-400 font-normal">({item.pct}%)</span>
                    </span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">No</th>
                  <th className="p-3.5">Jenjang Pendidikan</th>
                  <th className="p-3.5">Jumlah Penduduk</th>
                  <th className="p-3.5">Persentase</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {educationData.map((d, i) => (
                  <tr key={i} className="hover:bg-slate-50/80">
                    <td className="p-3.5 font-bold text-slate-400">{i + 1}</td>
                    <td className="p-3.5 font-bold text-slate-900">{d.level}</td>
                    <td className="p-3.5 font-mono">{d.count} Jiwa</td>
                    <td className="p-3.5 font-bold text-emerald-800 font-mono">{d.pct}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

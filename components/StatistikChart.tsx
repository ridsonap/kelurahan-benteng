"use client";

import { useState } from "react";
import { BarChart3, PieChart } from "lucide-react";

export default function StatistikChart() {
  const [chartType, setChartType] = useState<"jenis_kelamin" | "pekerjaan" | "agama">("jenis_kelamin");

  const datasets = {
    jenis_kelamin: {
      title: "Distribusi Penduduk Berdasarkan Jenis Kelamin",
      total: 1926,
      items: [
        { label: "Laki-laki", value: 952, color: "#3b82f6" },
        { label: "Perempuan", value: 974, color: "#f97316" },
      ],
    },
    pekerjaan: {
      title: "Mata Pencaharian & Profesi Warga",
      total: 1923,
      items: [
        { label: "Belum/Tidak Bekerja", value: 868, color: "#22c55e" },
        { label: "Lainnya", value: 588, color: "#60a5fa" },
        { label: "PNS", value: 186, color: "#f97316" },
        { label: "Karyawan Swasta", value: 156, color: "#a78bfa" },
        { label: "Pedagang", value: 55, color: "#ef4444" },
        { label: "P3K", value: 31, color: "#fbbf24" },
        { label: "Petani", value: 14, color: "#06b6d4" },
        { label: "Tukang", value: 11, color: "#8b5cf6" },
        { label: "Nelayan", value: 8, color: "#ec4899" },
        { label: "Guru", value: 6, color: "#14b8a6" },
      ],
    },
    agama: {
      title: "Pemeluk Agama Penduduk Kelurahan Benteng",
      total: 1926,
      items: [
        { label: "Islam", value: 1858, color: "#16a34a" },
        { label: "Kristen Protestan", value: 64, color: "#3b82f6" },
        { label: "Konghucu", value: 3, color: "#eab308" },
        { label: "Katolik", value: 1, color: "#8b5cf6" },
      ],
    },
  };

  const current = datasets[chartType];
  const maxVal = Math.max(...current.items.map((i) => i.value));

  return (
    <section className="py-14 bg-white border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Visualisasi Data Interaktif</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
            Visualisasi Statistik Penduduk
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
            Gunakan pilihan dropdown di bawah untuk melihat rincian demografi warga Kelurahan Benteng secara transparan.
          </p>

          {/* Select Dropdown */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-2 bg-slate-50 border-2 border-emerald-500 rounded-xl px-4 py-2 shadow-xs">
              <label htmlFor="chartType" className="text-xs font-bold text-slate-700 shrink-0">
                Pilih Kategori:
              </label>
              <select
                id="chartType"
                value={chartType}
                onChange={(e) => setChartType(e.target.value as any)}
                className="bg-transparent text-xs sm:text-sm font-semibold text-emerald-800 focus:outline-hidden cursor-pointer"
              >
                <option value="jenis_kelamin">Penduduk Berdasarkan Jenis Kelamin</option>
                <option value="pekerjaan">Penduduk Berdasarkan Pekerjaan</option>
                <option value="agama">Penduduk Berdasarkan Agama</option>
              </select>
            </div>
          </div>
        </div>

        {/* Visualizer Display */}
        <div className="bg-slate-50/70 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-200 gap-2">
            <div>
              <h3 className="font-bold text-base text-slate-800">{current.title}</h3>
              <p className="text-xs text-slate-500">Basis pendataan Tahun 2026</p>
            </div>
            <div className="px-3 py-1.5 bg-white rounded-lg border border-slate-200 text-xs font-bold text-slate-700 self-start sm:self-auto shadow-2xs">
              Total Sampel: <span className="text-emerald-700">{current.total.toLocaleString()}</span> Jiwa
            </div>
          </div>

          {/* Bar Chart Representation */}
          <div className="space-y-4 pt-2">
            {current.items.map((item, i) => {
              const pct = ((item.value / current.total) * 100).toFixed(1);
              const barWidthPct = Math.max(4, Math.round((item.value / maxVal) * 100));

              return (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full inline-block"
                        style={{ backgroundColor: item.color }}
                      />
                      {item.label}
                    </span>
                    <span className="font-bold text-slate-900">
                      {item.value.toLocaleString()} <span className="text-slate-400 font-normal">({pct}%)</span>
                    </span>
                  </div>
                  <div className="h-3.5 bg-slate-200/80 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 ease-out"
                      style={{
                        width: `${barWidthPct}%`,
                        backgroundColor: item.color,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

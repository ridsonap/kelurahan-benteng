"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, ChevronRight } from "lucide-react";

export default function StatistikChart() {
  const [chartType, setChartType] = useState<"jenis_kelamin" | "pekerjaan" | "agama">("jenis_kelamin");

  const datasets = {
    jenis_kelamin: {
      title: "Distribusi Penduduk Berdasarkan Jenis Kelamin",
      total: 1926,
      link: "/statistik-penduduk",
      items: [
        { label: "Laki-laki", value: 952, color: "#0284c7" },
        { label: "Perempuan", value: 974, color: "#ea580c" },
      ],
    },
    pekerjaan: {
      title: "Mata Pencaharian & Profesi Warga Terbanyak",
      total: 1923,
      link: "/pekerjaan",
      items: [
        { label: "Belum / Tidak Bekerja", value: 868, color: "#059669" },
        { label: "Lainnya", value: 588, color: "#0284c7" },
        { label: "Pegawai Negeri Sipil (PNS)", value: 186, color: "#d97706" },
        { label: "Karyawan Swasta", value: 156, color: "#7c3aed" },
        { label: "Pedagang", value: 55, color: "#dc2626" },
        { label: "Pegawai Pemerintah (P3K)", value: 31, color: "#eab308" },
        { label: "Petani", value: 14, color: "#0d9488" },
      ],
    },
    agama: {
      title: "Komposisi Pemeluk Agama Penduduk",
      total: 1926,
      link: "/agama",
      items: [
        { label: "Islam", value: 1858, color: "#059669" },
        { label: "Kristen Protestan", value: 64, color: "#0284c7" },
        { label: "Konghucu", value: 3, color: "#d97706" },
        { label: "Katolik", value: 1, color: "#7c3aed" },
      ],
    },
  };

  const current = datasets[chartType];
  const maxVal = Math.max(...current.items.map((i) => i.value));

  return (
    <section className="py-14 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Visualisasi Data Kependudukan
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Pilih kategori data untuk meninjau sebaran demografi warga secara transparan
            </p>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="chartType" className="text-xs font-semibold text-slate-600">
              Kategori:
            </label>
            <select
              id="chartType"
              value={chartType}
              onChange={(e) => setChartType(e.target.value as any)}
              className="bg-white border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-800 shadow-2xs focus:outline-hidden focus:border-emerald-700 cursor-pointer"
            >
              <option value="jenis_kelamin">Jenis Kelamin</option>
              <option value="pekerjaan">Pekerjaan & Profesi</option>
              <option value="agama">Pemeluk Agama</option>
            </select>
          </div>
        </div>

        {/* Visualizer Container */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-100 gap-2">
            <div>
              <h4 className="font-bold text-sm sm:text-base text-slate-900">{current.title}</h4>
              <p className="text-xs text-slate-400">Tahun Anggaran 2026</p>
            </div>
            <div className="text-xs font-medium text-slate-500">
              Total Sampel: <strong className="text-slate-900 font-bold">{current.total.toLocaleString("id-ID")}</strong> Jiwa
            </div>
          </div>

          {/* Clean Metric Bars */}
          <div className="space-y-4 pt-1">
            {current.items.map((item, i) => {
              const pct = ((item.value / current.total) * 100).toFixed(1);
              const barWidthPct = Math.max(3, Math.round((item.value / maxVal) * 100));

              return (
                <div key={i} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-medium text-slate-700">
                    <span className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-xs shrink-0"
                        style={{ backgroundColor: item.color }}
                      />
                      <span>{item.label}</span>
                    </span>
                    <span className="font-semibold text-slate-900">
                      {item.value.toLocaleString("id-ID")} <span className="text-slate-400 font-normal">({pct}%)</span>
                    </span>
                  </div>
                  <div className="h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500 ease-out"
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

          <div className="pt-2 border-t border-slate-100 flex justify-end">
            <Link
              href={current.link}
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>Buka tabel data lengkap</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, Filter, BarChart3, PieChart } from "lucide-react";

export default function StatistikPendudukPage() {
  const [tahun, setTahun] = useState("2026");
  const [dusun, setDusun] = useState("Semua");

  const total = 1926;
  const laki = 952;
  const perempuan = 974;

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <Users className="w-3.5 h-3.5" />
              <span>Statistik Demografi</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              DATA JUMLAH PENDUDUK KELURAHAN
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Visualisasi dan persebaran populasi warga berdasarkan jenis kelamin dan satuan lingkungan
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Filter className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-bold text-slate-700">Filter Data:</span>
              <select
                value={tahun}
                onChange={(e) => setTahun(e.target.value)}
                className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-hidden"
              >
                <option value="2026">Tahun 2026</option>
                <option value="2025">Tahun 2025</option>
              </select>
              <select
                value={dusun}
                onChange={(e) => setDusun(e.target.value)}
                className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-hidden"
              >
                <option value="Semua">Semua Wilayah</option>
                <option value="Dusun I">Dusun / Lingkungan I</option>
                <option value="Dusun II">Dusun / Lingkungan II</option>
              </select>
            </div>
            <span className="text-xs font-bold text-emerald-800">
              Total Jiwa: {total.toLocaleString()}
            </span>
          </div>

          {/* Gender Comparison Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
              <span className="text-xs text-slate-500 font-medium">Laki-Laki</span>
              <h3 className="text-2xl font-black text-blue-600">
                {laki.toLocaleString()} <span className="text-xs font-normal text-slate-400">Jiwa</span>
              </h3>
              <p className="text-xs text-slate-400">49.4% dari total penduduk</p>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 w-[49.4%]" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
              <span className="text-xs text-slate-500 font-medium">Perempuan</span>
              <h3 className="text-2xl font-black text-orange-600">
                {perempuan.toLocaleString()} <span className="text-xs font-normal text-slate-400">Jiwa</span>
              </h3>
              <p className="text-xs text-slate-400">50.6% dari total penduduk</p>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-orange-500 w-[50.6%]" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
              <span className="text-xs text-slate-500 font-medium">Kepala Keluarga</span>
              <h3 className="text-2xl font-black text-emerald-700">
                912 <span className="text-xs font-normal text-slate-400">KK</span>
              </h3>
              <p className="text-xs text-slate-400">Rata-rata 2.1 jiwa per KK</p>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-600 w-[80%]" />
              </div>
            </div>
          </div>

          {/* Table Breakdown */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="p-5 border-b border-slate-100 font-bold text-sm text-slate-800">
              Rincian Satuan Lingkungan RT & RW
            </div>
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3.5">Wilayah</th>
                  <th className="p-3.5">Jumlah RT</th>
                  <th className="p-3.5">Jumlah RW</th>
                  <th className="p-3.5">Laki-Laki</th>
                  <th className="p-3.5">Perempuan</th>
                  <th className="p-3.5">Total Jiwa</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-bold">Lingkungan Benteng I</td>
                  <td className="p-3.5 font-mono">4 RT</td>
                  <td className="p-3.5 font-mono">5 RW</td>
                  <td className="p-3.5 font-mono">480</td>
                  <td className="p-3.5 font-mono">495</td>
                  <td className="p-3.5 font-bold text-emerald-800 font-mono">975</td>
                </tr>
                <tr className="hover:bg-slate-50/80">
                  <td className="p-3.5 font-bold">Lingkungan Benteng II</td>
                  <td className="p-3.5 font-mono">3 RT</td>
                  <td className="p-3.5 font-mono">5 RW</td>
                  <td className="p-3.5 font-mono">472</td>
                  <td className="p-3.5 font-mono">479</td>
                  <td className="p-3.5 font-bold text-emerald-800 font-mono">951</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

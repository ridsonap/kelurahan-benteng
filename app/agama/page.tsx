"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart } from "lucide-react";

export default function AgamaPage() {
  const religionData = [
    { label: "Islam", count: 1858, pct: 96.5, color: "#16a34a" },
    { label: "Kristen Protestan", count: 64, pct: 3.3, color: "#3b82f6" },
    { label: "Konghucu", count: 3, pct: 0.15, color: "#eab308" },
    { label: "Katolik", count: 1, pct: 0.05, color: "#8b5cf6" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <Heart className="w-3.5 h-3.5" />
              <span>Kerukunan Umat Beragama</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              DATA PEMELUK AGAMA
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Komposisi keberagaman agama masyarakat Kelurahan Benteng Tahun 2026
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5">
            <h2 className="font-bold text-sm text-slate-800 border-b pb-3">Persebaran Pemeluk Agama</h2>
            <div className="space-y-4">
              {religionData.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span>{item.label}</span>
                    <span className="font-bold text-slate-900">
                      {item.count.toLocaleString()} Jiwa <span className="text-slate-400 font-normal">({item.pct}%)</span>
                    </span>
                  </div>
                  <div className="h-3.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${Math.max(1, item.pct)}%`, backgroundColor: item.color }}
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

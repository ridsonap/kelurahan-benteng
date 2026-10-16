"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Info, CheckCircle, Clock } from "lucide-react";
import { db } from "@/lib/data";
import { PPIDRequest } from "@/lib/types";

export default function StatusPPIDPage() {
  const [email, setEmail] = useState("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<PPIDRequest[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    setResults(
      db.ppidRequests.filter(
        (r) => r.email.toLowerCase().trim() === email.toLowerCase().trim()
      )
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              STATUS PERMOHONAN INFORMASI PUBLIK
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Lacak progres pengajuan permohonan informasi PPID Anda menggunakan email
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                Masukkan Alamat Email Pemohon
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Contoh: pemohon@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold focus:outline-hidden focus:border-emerald-600"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs shrink-0"
                >
                  <Search className="w-4 h-4" />
                  <span>Cek Status</span>
                </button>
              </div>
            </form>
          </div>

          {searched && (
            <div className="space-y-4 animate-fade-in">
              {results.length === 0 ? (
                <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500 text-xs space-y-2">
                  <p className="font-semibold">Tidak ditemukan permohonan dengan email tersebut.</p>
                  <p className="text-slate-400">
                    Pastikan alamat email yang Anda masukkan sesuai saat pengisian formulir.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/ppid"
                      className="inline-block px-4 py-2 bg-emerald-700 text-white rounded-xl font-bold text-xs"
                    >
                      Ajukan Permohonan Informasi
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((r) => (
                    <div
                      key={r.id}
                      className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900 text-sm">{r.instansi}</span>
                        <span className="px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 text-[10px] font-bold">
                          {r.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        {r.isi_permohonan}
                      </p>
                      <p className="text-[11px] text-slate-400">Diajukan pada: {r.tanggal}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

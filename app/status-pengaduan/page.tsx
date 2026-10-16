"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, MessageSquareWarning, CheckCircle, Clock } from "lucide-react";
import { initialComplaints } from "@/lib/data";
import { Complaint } from "@/lib/types";

export default function StatusPengaduanPage() {
  const [email, setEmail] = useState("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<Complaint[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const matches = initialComplaints.filter(
      (c) => c.email.toLowerCase().trim() === email.toLowerCase().trim()
    );
    setResults(matches);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              STATUS PENGADUAN WARGA
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Lacak tindak lanjut dan respon aparat kelurahan terhadap pengaduan yang telah Anda kirimkan
            </p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                Masukkan Alamat Email Pelapor
              </label>
              <div className="flex gap-2">
                <input
                  type="email"
                  required
                  placeholder="Contoh: ahmad.yunus@gmail.com"
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
              <h2 className="font-bold text-sm text-slate-700">
                Daftar Laporan untuk Email: <code className="text-emerald-800 font-mono">{email}</code>
              </h2>

              {results.length === 0 ? (
                <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500 text-xs space-y-2">
                  <p className="font-semibold">Tidak ditemukan data pengaduan dengan email tersebut.</p>
                  <p className="text-slate-400">
                    Pastikan email yang Anda masukkan sesuai saat pengisian formulir.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/pengaduan"
                      className="inline-block px-4 py-2 bg-emerald-700 text-white rounded-xl font-bold text-xs"
                    >
                      Kirim Laporan Baru
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((c) => (
                    <div
                      key={c.id}
                      className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-base text-slate-900">{c.judul}</h3>
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                                c.status === "Selesai"
                                  ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                  : c.status === "Diproses"
                                  ? "bg-blue-50 text-blue-700 border border-blue-200"
                                  : "bg-amber-50 text-amber-700 border border-amber-200"
                              }`}
                            >
                              {c.status}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Dikirim pada: {c.tanggal} • Lokasi: {c.alamat}
                          </p>
                        </div>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-2xl text-xs text-slate-700 space-y-1">
                        <p className="font-bold text-slate-500 text-[11px]">Uraian Laporan Anda:</p>
                        <p className="leading-relaxed">{c.deskripsi}</p>
                      </div>

                      {c.balasan ? (
                        <div className="bg-emerald-50/80 border border-emerald-200 p-4 rounded-2xl text-xs text-emerald-900 space-y-1">
                          <p className="font-bold flex items-center gap-1.5 text-emerald-800">
                            <CheckCircle className="w-4 h-4 text-emerald-600" />
                            <span>Tanggapan Resmi Kelurahan:</span>
                          </p>
                          <p className="leading-relaxed">{c.balasan}</p>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50/60 p-3 rounded-xl">
                          <Clock className="w-4 h-4 shrink-0" />
                          <span>Laporan Anda sedang dalam proses peninjauan oleh petugas seksi terkait.</span>
                        </div>
                      )}
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

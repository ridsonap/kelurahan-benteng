"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Search, Printer, CheckCircle, Clock, XCircle, ArrowLeft } from "lucide-react";
import { initialLetters } from "@/lib/data";
import { LetterRequest } from "@/lib/types";

export default function StatusPengantarPage() {
  const [nik, setNik] = useState("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<LetterRequest[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    // In production or demo, filter letters matching NIK
    const matches = initialLetters.filter((l) => l.nik.trim() === nik.trim());
    setResults(matches);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              STATUS SURAT PENGANTAR ONLINE
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Pantau progres verifikasi permohonan surat administrasi Anda menggunakan NIK
            </p>
          </div>

          {/* Search Box */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-md max-w-xl mx-auto">
            <form onSubmit={handleSearch} className="space-y-3">
              <label className="block text-xs font-bold text-slate-700">
                Masukkan 16 Digit NIK Anda
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  maxLength={16}
                  placeholder="Contoh: 7301051203890002"
                  value={nik}
                  onChange={(e) => setNik(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-semibold focus:outline-hidden focus:border-emerald-600"
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

          {/* Search Results */}
          {searched && (
            <div className="space-y-4 animate-fade-in">
              <h2 className="font-bold text-sm text-slate-700">
                Hasil Pencarian Surat untuk NIK: <code className="font-mono text-emerald-800">{nik}</code>
              </h2>

              {results.length === 0 ? (
                <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-500 text-xs space-y-2">
                  <p className="font-semibold">Tidak ditemukan permohonan surat dengan NIK tersebut.</p>
                  <p className="text-slate-400">
                    Pastikan NIK yang Anda masukkan sudah benar atau ajukan surat baru melalui menu layanan online.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/pengantar"
                      className="inline-block px-4 py-2 bg-emerald-700 text-white rounded-xl font-bold text-xs"
                    >
                      Ajukan Surat Baru
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {results.map((l) => (
                    <div
                      key={l.id}
                      className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{l.nama}</span>
                          <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-mono text-[10px] font-bold uppercase">
                            {l.jenis_surat}
                          </span>
                        </div>
                        <p className="text-xs font-mono text-emerald-800 font-semibold">
                          Nomor: {l.nomor_surat}
                        </p>
                        <p className="text-[11px] text-slate-400">
                          Diajukan pada: {l.tanggal_dibuat} • Alamat: {l.alamat}
                        </p>
                      </div>

                      <div className="flex items-center gap-3 self-end sm:self-auto">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-bold ${
                            l.status === "Terverifikasi"
                              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                              : l.status === "Ditolak"
                              ? "bg-red-50 text-red-700 border border-red-200"
                              : "bg-amber-50 text-amber-700 border border-amber-200"
                          }`}
                        >
                          {l.status}
                        </span>

                        {l.status === "Terverifikasi" && (
                          <Link
                            href={`/print-surat/${l.id}`}
                            target="_blank"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition"
                          >
                            <Printer className="w-3.5 h-3.5" />
                            <span>Unduh Surat</span>
                          </Link>
                        )}
                      </div>
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

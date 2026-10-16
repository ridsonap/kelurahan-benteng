"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MessageSquareWarning, CheckCircle, ArrowRight, Loader2 } from "lucide-react";

export default function PengaduanPage() {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
    judul: "",
    deskripsi: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "submit_complaint", payload: formData }),
      });
      if (res.ok) {
        setSuccess(true);
      }
    } catch {
      alert("Gagal mengirimkan pengaduan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-red-700 text-xs font-bold">
              <MessageSquareWarning className="w-3.5 h-3.5" />
              <span>Aspirasi & Pengaduan Warga</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              PENGADUAN MASYARAKAT
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Sampaikan keluhan, aspirasi, atau usulan perbaikan fasilitas umum di lingkungan Kelurahan Benteng
            </p>
          </div>

          {success ? (
            <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-xl text-center space-y-5 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-black text-slate-800">Pengaduan Berhasil Dikirim</h2>
                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Laporan Anda telah diteruskan ke aparat dan seksi terkait untuk diverifikasi dan ditindaklanjuti.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/status-pengaduan"
                  className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition"
                >
                  Cek Status Pengaduan
                </Link>
                <button
                  onClick={() => {
                    setSuccess(false);
                    setFormData({ nama: "", email: "", telepon: "", alamat: "", judul: "", deskripsi: "" });
                  }}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-xs transition"
                >
                  Kirim Pengaduan Baru
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Nama Lengkap</label>
                    <input
                      type="text"
                      required
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                      placeholder="Nama Anda"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Nomor Telepon / WA</label>
                    <input
                      type="tel"
                      required
                      value={formData.telepon}
                      onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                      placeholder="08xxxxxxxxxx"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Email Aktif</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@domain.com"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Alamat Tempat Tinggal</label>
                    <input
                      type="text"
                      required
                      value={formData.alamat}
                      onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                      placeholder="Nama Jalan / Gang / Lingkungan"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Judul Pokok Pengaduan</label>
                  <input
                    type="text"
                    required
                    value={formData.judul}
                    onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
                    placeholder="Contoh: Perbaikan Lampu Jalan di Gang Manggalung"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Rincian & Kronologi Keluhan</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.deskripsi}
                    onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                    placeholder="Jelaskan secara jelas kendala atau aspirasi yang ingin Anda sampaikan..."
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <Link
                    href="/status-pengaduan"
                    className="text-xs font-semibold text-emerald-700 hover:underline"
                  >
                    Sudah pernah melapor? Cek Status di sini
                  </Link>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition flex items-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Mengirimkan...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirimkan Pengaduan</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

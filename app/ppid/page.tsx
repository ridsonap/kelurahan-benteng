"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialPPID } from "@/lib/data";
import { Info, Download, FileText, Send, CheckCircle, ArrowRight } from "lucide-react";

export default function PPIDPage() {
  const [formData, setFormData] = useState({
    nama: "",
    telepon: "",
    instansi: "",
    email: "",
    isi_permohonan: "",
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "submit_ppid_request",
        payload: formData,
      }),
    });
    if (res.ok) {
      setSuccess(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <Info className="w-3.5 h-3.5" />
              <span>Keterbukaan Informasi Publik</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              PPID KELURAHAN BENTENG
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Pejabat Pengelola Informasi dan Dokumentasi Pemerintah Kelurahan Benteng, Kepulauan Selayar
            </p>
          </div>

          {/* Documents Table */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-slate-800">Daftar Dokumen Informasi Berkala & Regulasi</h2>
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase text-[10px]">
                  <tr>
                    <th className="p-4">No</th>
                    <th className="p-4">Judul Dokumen</th>
                    <th className="p-4">Kategori</th>
                    <th className="p-4">Tanggal Publikasi</th>
                    <th className="p-4 text-center">Unduh</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {initialPPID.map((d, i) => (
                    <tr key={d.id} className="hover:bg-slate-50/80">
                      <td className="p-4 font-bold text-slate-400">{i + 1}</td>
                      <td className="p-4 max-w-md">
                        <p className="font-bold text-slate-900">{d.judul}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{d.deskripsi}</p>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold text-[10px]">
                          {d.kategori}
                        </span>
                      </td>
                      <td className="p-4 text-slate-500">{d.tanggal}</td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => alert(`Mengunduh dokumen: ${d.judul}`)}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white font-bold text-xs transition cursor-pointer"
                        >
                          <Download className="w-3.5 h-3.5" />
                          <span>PDF</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Form Permohonan Informasi Publik */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md max-w-3xl mx-auto space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div>
                <h3 className="font-bold text-base text-slate-800">
                  Formulir Permohonan Informasi Publik
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Ajukan permohonan berkas atau data khusus yang belum tersedia di daftar publik
                </p>
              </div>
              <Link
                href="/ppid/status-permohonan"
                className="text-xs font-bold text-emerald-700 hover:underline"
              >
                Cek Status Permohonan
              </Link>
            </div>

            {success ? (
              <div className="p-6 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-slate-800">Permohonan Anda Telah Tercatat</h4>
                <p className="text-xs text-slate-600">
                  Petugas PPID Kelurahan Benteng akan meninjau dan merespon permohonan melalui email Anda dalam 1-3 hari kerja.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold"
                >
                  Kirim Permohonan Lainnya
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Nama Pemohon</label>
                    <input
                      type="text"
                      required
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
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
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Asal Lembaga / Instansi</label>
                    <input
                      type="text"
                      required
                      value={formData.instansi}
                      onChange={(e) => setFormData({ ...formData, instansi: e.target.value })}
                      placeholder="Masyarakat Umum / Universitas / LSM"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Email Aktif</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Rincian Informasi yang Dibutuhkan</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.isi_permohonan}
                    onChange={(e) => setFormData({ ...formData, isi_permohonan: e.target.value })}
                    placeholder="Sebutkan jenis dokumen, tahun anggaran, dan peruntukan penggunaan informasi..."
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Kirim Permohonan PPID</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

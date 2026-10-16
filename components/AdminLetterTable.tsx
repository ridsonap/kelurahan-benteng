"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, XCircle, Printer, Clock } from "lucide-react";
import { LetterRequest } from "@/lib/types";

interface Props {
  title: string;
  type: "sku" | "sktm" | "kematian" | "izin";
  initialLetters: LetterRequest[];
}

export default function AdminLetterTable({ title, type, initialLetters }: Props) {
  const [letters, setLetters] = useState<LetterRequest[]>(
    initialLetters.filter((l) => l.jenis_surat === type)
  );
  const [statusFilter, setStatusFilter] = useState("");

  const updateStatus = async (id: string, status: LetterRequest["status"]) => {
    const res = await fetch("/api/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "update_letter_status",
        payload: { id, status },
      }),
    });
    if (res.ok) {
      setLetters(letters.map((l) => (l.id === id ? { ...l, status } : l)));
    }
  };

  const filtered = statusFilter ? letters.filter((l) => l.status === statusFilter) : letters;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">{title}</h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Verifikasi dan penerbitan surat resmi administrasi warga
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <label className="font-semibold text-slate-600">Filter Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="p-2 bg-white border border-slate-200 rounded-xl font-medium focus:outline-hidden"
          >
            <option value="">Semua Status</option>
            <option value="Belum Diverifikasi">Belum Diverifikasi</option>
            <option value="Diproses">Diproses</option>
            <option value="Terverifikasi">Terverifikasi</option>
            <option value="Ditolak">Ditolak</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs min-w-[850px]">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">No</th>
                <th className="p-3.5">Nomor Surat</th>
                <th className="p-3.5">NIK & Pemohon</th>
                <th className="p-3.5">Alamat</th>
                <th className="p-3.5">Kontak</th>
                <th className="p-3.5">Rincian Tambahan</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5">Tgl Pengajuan</th>
                <th className="p-3.5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-8 text-center text-slate-400">
                    Tidak ada antrian surat untuk kategori ini.
                  </td>
                </tr>
              ) : (
                filtered.map((l, i) => (
                  <tr key={l.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 text-slate-400 font-bold">{i + 1}</td>
                    <td className="p-3.5 font-mono font-bold text-emerald-800">{l.nomor_surat}</td>
                    <td className="p-3.5">
                      <p className="font-bold text-slate-900">{l.nama}</p>
                      <p className="text-[10px] font-mono text-slate-400">{l.nik}</p>
                    </td>
                    <td className="p-3.5 max-w-xs truncate">{l.alamat}</td>
                    <td className="p-3.5 font-mono">{l.kontak}</td>
                    <td className="p-3.5 max-w-xs">
                      {Object.entries(l.detail).map(([k, v]) => (
                        <div key={k} className="text-[11px]">
                          <span className="text-slate-400 capitalize">{k.replace("_", " ")}: </span>
                          <span className="font-semibold">{v}</span>
                        </div>
                      ))}
                    </td>
                    <td className="p-3.5">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          l.status === "Terverifikasi"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : l.status === "Ditolak"
                            ? "bg-red-50 text-red-700 border border-red-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {l.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-400 text-[11px]">{l.tanggal_dibuat}</td>
                    <td className="p-3.5">
                      <div className="flex items-center justify-center gap-1.5">
                        {l.status !== "Terverifikasi" && (
                          <button
                            onClick={() => updateStatus(l.id, "Terverifikasi")}
                            className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition"
                            title="Setujui / Verifikasi"
                          >
                            <CheckCircle className="w-4 h-4" />
                          </button>
                        )}
                        {l.status !== "Ditolak" && (
                          <button
                            onClick={() => updateStatus(l.id, "Ditolak")}
                            className="p-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-600 hover:text-white transition"
                            title="Tolak Permohonan"
                          >
                            <XCircle className="w-4 h-4" />
                          </button>
                        )}
                        <Link
                          href={`/print-surat/${l.id}`}
                          target="_blank"
                          className="p-1.5 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white transition flex items-center gap-1"
                          title="Cetak Surat Resmi"
                        >
                          <Printer className="w-4 h-4" />
                          <span className="text-[10px] font-bold">Cetak</span>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

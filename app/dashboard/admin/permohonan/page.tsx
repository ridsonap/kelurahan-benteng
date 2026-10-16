"use client";

import { useState } from "react";
import { BookOpen, CheckCircle, XCircle } from "lucide-react";
import { db } from "@/lib/data";
import { PPIDRequest } from "@/lib/types";

export default function PermohonanInformasiAdminPage() {
  const [requests, setRequests] = useState<PPIDRequest[]>(db.ppidRequests);

  const updateStatus = (id: string, status: PPIDRequest["status"]) => {
    setRequests(requests.map((r) => (r.id === id ? { ...r, status } : r)));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          Daftar Permohonan Informasi Publik
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Permintaan berkas dan dokumen informasi dari masyarakat/lembaga
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">No</th>
                <th className="p-3.5">Nama Pemohon</th>
                <th className="p-3.5">Kontak & Email</th>
                <th className="p-3.5">Asal Instansi</th>
                <th className="p-3.5">Isi Permohonan</th>
                <th className="p-3.5">Status</th>
                <th className="p-3.5">Tanggal</th>
                <th className="p-3.5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {requests.length === 0 ? (
                <tr>
                  <td colSpan={8} className="p-8 text-center text-slate-400">
                    Belum ada permohonan informasi publik yang masuk.
                  </td>
                </tr>
              ) : (
                requests.map((r, i) => (
                  <tr key={r.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 font-bold text-slate-400">{i + 1}</td>
                    <td className="p-3.5 font-bold text-slate-900">{r.nama}</td>
                    <td className="p-3.5 font-mono">
                      <p>{r.telepon}</p>
                      <p className="text-[10px] text-slate-400">{r.email}</p>
                    </td>
                    <td className="p-3.5">{r.instansi}</td>
                    <td className="p-3.5 max-w-xs">{r.isi_permohonan}</td>
                    <td className="p-3.5">
                      <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-700 font-bold text-[10px]">
                        {r.status}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-400 text-[11px]">{r.tanggal}</td>
                    <td className="p-3.5 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <button
                          onClick={() => updateStatus(r.id, "Disetujui")}
                          className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white"
                          title="Setujui"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => updateStatus(r.id, "Ditolak")}
                          className="p-1.5 rounded-lg bg-red-50 text-red-700 hover:bg-red-600 hover:text-white"
                          title="Tolak"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
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

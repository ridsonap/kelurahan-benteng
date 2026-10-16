"use client";

import { useState } from "react";
import { BookOpen, Calendar, Clock } from "lucide-react";
import { db } from "@/lib/data";
import { GuestBookEntry } from "@/lib/types";

export default function BukuTamuAdminPage() {
  const [entries, setEntries] = useState<GuestBookEntry[]>(db.guestBook);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          Buku Tamu Digital Kelurahan Benteng
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Rekapitulasi kunjungan dinas dan masyarakat lengkap dengan tanda tangan digital
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">No</th>
                <th className="p-3.5">Nama Tamu</th>
                <th className="p-3.5">Asal Instansi</th>
                <th className="p-3.5">Jabatan</th>
                <th className="p-3.5">Keperluan Kunjungan</th>
                <th className="p-3.5">Waktu Kunjungan (WITA)</th>
                <th className="p-3.5 text-center">Tanda Tangan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {entries.length === 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-slate-400">
                    Belum ada catatan buku tamu.
                  </td>
                </tr>
              ) : (
                entries.map((g, i) => (
                  <tr key={g.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 font-bold text-slate-400">{i + 1}</td>
                    <td className="p-3.5 font-bold text-slate-900">{g.nama}</td>
                    <td className="p-3.5">{g.asal}</td>
                    <td className="p-3.5 text-slate-600">{g.jabatan}</td>
                    <td className="p-3.5 max-w-xs">{g.keperluan}</td>
                    <td className="p-3.5 font-mono text-emerald-800 font-semibold">{g.waktu}</td>
                    <td className="p-3.5 text-center">
                      {g.ttd_data ? (
                        <img
                          src={g.ttd_data}
                          alt="Tanda Tangan"
                          className="h-10 mx-auto object-contain bg-slate-50 rounded border border-slate-200 p-1"
                        />
                      ) : (
                        <span className="text-[10px] text-slate-400 italic">Terverifikasi Digital</span>
                      )}
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

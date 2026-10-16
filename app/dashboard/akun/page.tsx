"use client";

import { useState } from "react";
import { UserCheck, Key, Shield, Plus } from "lucide-react";
import { initialUsers } from "@/lib/data";

export default function AkunAdminPage() {
  const [users] = useState(initialUsers);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          Data Akun Pengelola Sistem
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Manajemen hak akses administrator dan operator Desa Cantik
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="p-3.5">#</th>
              <th className="p-3.5">Nama Petugas</th>
              <th className="p-3.5">Username</th>
              <th className="p-3.5">Role</th>
              <th className="p-3.5">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
            {users.map((u, i) => (
              <tr key={u.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-bold text-slate-400">{i + 1}</td>
                <td className="p-3.5 font-bold text-slate-900">{u.nama}</td>
                <td className="p-3.5 font-mono text-emerald-800 font-semibold">{u.username}</td>
                <td className="p-3.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] uppercase">
                    {u.role}
                  </span>
                </td>
                <td className="p-3.5">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800 text-[10px] font-semibold">
                    Aktif
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="bg-emerald-50 p-5 rounded-2xl border border-emerald-200 text-xs text-emerald-800 space-y-1">
        <h4 className="font-bold flex items-center gap-1.5">
          <Shield className="w-4 h-4 text-emerald-700" />
          <span>Informasi Keamanan & Hak Akses</span>
        </h4>
        <p className="text-[11px] leading-relaxed">
          Akun administrator utama memiliki kewenangan penuh terhadap verifikasi data penduduk, persuratan online, dan pengaduan masyarakat. Pergantian kata sandi dapat dilakukan melalui konsol admin atau file environment Vercel.
        </p>
      </div>
    </div>
  );
}

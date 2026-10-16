"use client";

import { useState } from "react";
import { PiggyBank, Edit3, Check, DollarSign } from "lucide-react";
import { initialAPBD } from "@/lib/data";

export default function APBDAdminPage() {
  const [apbd, setApbd] = useState(initialAPBD[0]);
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({ ...apbd });
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const surplus = form.pendapatan - form.belanja;
    const updated = { ...form, surplus_defisit: surplus };
    setApbd(updated);
    setIsEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
            Data APBD Kelurahan Benteng
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Kelola data transparansi keuangan dan alokasi anggaran tahunan
          </p>
        </div>
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition"
        >
          <Edit3 className="w-4 h-4" />
          <span>{isEditing ? "Tutup Form Edit" : "Perbarui Anggaran"}</span>
        </button>
      </div>

      {saved && (
        <div className="p-3 bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800 rounded-xl flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-600" />
          <span>Data APBD berhasil diperbarui!</span>
        </div>
      )}

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">Total Pendapatan</span>
          <h3 className="text-xl font-black text-emerald-700">
            Rp {apbd.pendapatan.toLocaleString("id-ID")}
          </h3>
          <p className="text-[11px] text-slate-400">PAD {apbd.pad_pct}% • Transfer {apbd.transfer_pct}%</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">Total Belanja</span>
          <h3 className="text-xl font-black text-amber-600">
            Rp {apbd.belanja.toLocaleString("id-ID")}
          </h3>
          <p className="text-[11px] text-slate-400">Pemberdayaan & Operasional</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-1">
          <span className="text-xs text-slate-500 font-medium">Surplus / Defisit</span>
          <h3 className="text-xl font-black text-blue-600">
            Rp {apbd.surplus_defisit.toLocaleString("id-ID")}
          </h3>
          <p className="text-[11px] text-emerald-600 font-semibold">Surplus Anggaran</p>
        </div>
      </div>

      {/* Edit Form */}
      {isEditing && (
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
          <h3 className="font-bold text-sm text-slate-800 border-b pb-3">Form Pembaruan Nilai APBD</h3>
          <form onSubmit={handleSave} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Tahun Anggaran</label>
                <input
                  type="number"
                  value={form.tahun}
                  onChange={(e) => setForm({ ...form, tahun: Number(e.target.value) })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Total Pendapatan (Rp)</label>
                <input
                  type="number"
                  value={form.pendapatan}
                  onChange={(e) => setForm({ ...form, pendapatan: Number(e.target.value) })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Total Belanja (Rp)</label>
                <input
                  type="number"
                  value={form.belanja}
                  onChange={(e) => setForm({ ...form, belanja: Number(e.target.value) })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Porsi PAD (%)</label>
                <input
                  type="number"
                  value={form.pad_pct}
                  onChange={(e) => setForm({ ...form, pad_pct: Number(e.target.value) })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 border rounded-xl font-bold"
              >
                Batal
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-emerald-700 text-white rounded-xl font-bold"
              >
                Simpan Pembaruan
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

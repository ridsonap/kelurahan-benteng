"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Trash2, X, Landmark, UserCheck } from "lucide-react";
import { initialOfficials } from "@/lib/data";
import { OfficialItem } from "@/lib/types";

export default function PemerintahAdminPage() {
  const [officials, setOfficials] = useState<OfficialItem[]>(initialOfficials);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    jabatan: "",
    tupoksi: "",
    foto: "/storage/pemerintah-desa/aswNcR82KxkHjhsEgNrS96PQIr1Y8Oi1LFdXWhSn.jpg",
  });

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "add_official",
        payload: formData,
      }),
    });
    const data = await res.json();
    if (data.success) {
      setOfficials([...officials, data.data]);
      setModalOpen(false);
      setFormData({
        nama: "",
        jabatan: "",
        tupoksi: "",
        foto: "/storage/pemerintah-desa/aswNcR82KxkHjhsEgNrS96PQIr1Y8Oi1LFdXWhSn.jpg",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Hapus data aparatur ini?")) {
      await fetch("/api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_official", payload: { id } }),
      });
      setOfficials(officials.filter((o) => o.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
            Data Pemerintah & Aparatur Kelurahan
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Struktur organisasi, jabatan, dan tugas pokok & fungsi (Tupoksi)
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Aparatur</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">No</th>
                <th className="p-3.5">Foto</th>
                <th className="p-3.5">Nama Aparatur</th>
                <th className="p-3.5">Jabatan</th>
                <th className="p-3.5">Tupoksi</th>
                <th className="p-3.5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {officials.map((o, idx) => (
                <tr key={o.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-bold text-slate-400">{idx + 1}</td>
                  <td className="p-3.5">
                    <div className="relative w-11 h-14 rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                      <Image src={o.foto} alt={o.nama} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="p-3.5 font-bold text-slate-900">{o.nama}</td>
                  <td className="p-3.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold text-[11px]">
                      {o.jabatan}
                    </span>
                  </td>
                  <td className="p-3.5 max-w-sm text-slate-600 leading-relaxed">{o.tupoksi}</td>
                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => handleDelete(o.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                      title="Hapus"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-800">Tambah Data Aparatur</h3>
              <button onClick={() => setModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Nama & Gelar Lengkap</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  placeholder="Nama Lengkap, S.STP..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Jabatan Resmi</label>
                <input
                  type="text"
                  required
                  value={formData.jabatan}
                  onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })}
                  placeholder="Lurah / Sekretaris / Kepala Seksi..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Tupoksi / Tugas Pokok</label>
                <textarea
                  rows={3}
                  required
                  value={formData.tupoksi}
                  onChange={(e) => setFormData({ ...formData, tupoksi: e.target.value })}
                  placeholder="Uraian ringkas kewenangan dan tanggung jawab..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Pilihan Foto Profil</label>
                <select
                  value={formData.foto}
                  onChange={(e) => setFormData({ ...formData, foto: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value="/storage/pemerintah-desa/aswNcR82KxkHjhsEgNrS96PQIr1Y8Oi1LFdXWhSn.jpg">Foto Lurah Benteng</option>
                  <option value="/storage/pemerintah-desa/fke8jzGw6hTkZKewJW5ij8To0V9t3ecz9hwcBdBK.jpg">Foto Sekretaris Kelurahan</option>
                  <option value="/storage/pemerintah-desa/xE8Ge2Uy7UD62PAxTzUIZYDdGm4cU3UHHCdTyCk9.png">Foto Kepala Seksi</option>
                </select>
              </div>
              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 border rounded-xl font-bold"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-emerald-700 text-white rounded-xl font-bold"
                >
                  Simpan Data
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

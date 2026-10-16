"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Trash2, X, Calendar, MapPin } from "lucide-react";
import { initialAgendas } from "@/lib/data";
import { AgendaItem } from "@/lib/types";

export default function AgendaAdminPage() {
  const [agendas, setAgendas] = useState<AgendaItem[]>(initialAgendas);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    waktu: "",
    lokasi: "",
    deskripsi: "",
    kategori: "Umum",
    foto: "/storage/agenda_foto/DVdwukJ2K1pxrBhCtRfdhaA83P1nkQHxqBbqAWln.jpg",
  });

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "add_agenda", payload: formData }),
    });
    const data = await res.json();
    if (data.success) {
      setAgendas([data.data, ...agendas]);
      setModalOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Hapus agenda ini?")) {
      await fetch("/api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_agenda", payload: { id } }),
      });
      setAgendas(agendas.filter((a) => a.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
            Data Agenda & Jadwal Kegiatan Kelurahan
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Kelola kalender kegiatan, rapat dinas, dan sosialisasi kemasyarakatan
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Agenda Baru</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">No</th>
                <th className="p-3.5">Foto</th>
                <th className="p-3.5">Nama Kegiatan</th>
                <th className="p-3.5">Waktu Pelaksanaan</th>
                <th className="p-3.5">Lokasi</th>
                <th className="p-3.5">Kategori</th>
                <th className="p-3.5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {agendas.map((a, idx) => (
                <tr key={a.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-bold text-slate-400">{idx + 1}</td>
                  <td className="p-3.5">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                      <Image src={a.foto} alt={a.nama} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="p-3.5 font-bold text-slate-900">{a.nama}</td>
                  <td className="p-3.5 font-semibold text-emerald-800">{a.waktu}</td>
                  <td className="p-3.5 text-slate-500">{a.lokasi}</td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-semibold text-[10px]">
                      {a.kategori}
                    </span>
                  </td>
                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => handleDelete(a.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
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
              <h3 className="font-bold text-base text-slate-800">Tambah Agenda Baru</h3>
              <button onClick={() => setModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Nama Kegiatan</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Waktu Pelaksanaan</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: 28-10-2026 09:00 WITA"
                    value={formData.waktu}
                    onChange={(e) => setFormData({ ...formData, waktu: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Kategori</label>
                  <input
                    type="text"
                    required
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Lokasi Kegiatan</label>
                <input
                  type="text"
                  required
                  value={formData.lokasi}
                  onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
                  placeholder="Aula Kantor Kelurahan Benteng"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Deskripsi Kegiatan</label>
                <textarea
                  rows={3}
                  required
                  value={formData.deskripsi}
                  onChange={(e) => setFormData({ ...formData, deskripsi: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
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
                  Simpan Agenda
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

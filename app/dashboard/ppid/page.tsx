"use client";

import { useState } from "react";
import { Plus, Trash2, X, FileText, Download } from "lucide-react";
import { initialPPID } from "@/lib/data";
import { PPIDDocument } from "@/lib/types";

export default function PPIDAdminPage() {
  const [docs, setDocs] = useState<PPIDDocument[]>(initialPPID);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    judul: "",
    deskripsi: "",
    kategori: "Informasi Berkala",
  });

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "add_ppid_doc", payload: formData }),
    });
    const data = await res.json();
    if (data.success) {
      setDocs([data.data, ...docs]);
      setModalOpen(false);
      setFormData({ judul: "", deskripsi: "", kategori: "Informasi Berkala" });
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Hapus dokumen PPID ini?")) {
      await fetch("/api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_ppid_doc", payload: { id } }),
      });
      setDocs(docs.filter((d) => d.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
            Data Dokumen Informasi Publik (PPID)
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Arsip dokumen keterbukaan informasi publik dan regulasi kelurahan
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Dokumen</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">No</th>
                <th className="p-3.5">Judul Dokumen</th>
                <th className="p-3.5">Kategori</th>
                <th className="p-3.5">Tanggal</th>
                <th className="p-3.5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {docs.map((d, i) => (
                <tr key={d.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-bold text-slate-400">{i + 1}</td>
                  <td className="p-3.5 max-w-md">
                    <p className="font-bold text-slate-900">{d.judul}</p>
                    <p className="text-[11px] text-slate-400 mt-0.5">{d.deskripsi}</p>
                  </td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold text-[10px]">
                      {d.kategori}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-500">{d.tanggal}</td>
                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => handleDelete(d.id)}
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
              <h3 className="font-bold text-base text-slate-800">Tambah Dokumen PPID</h3>
              <button onClick={() => setModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Judul Dokumen</label>
                <input
                  type="text"
                  required
                  value={formData.judul}
                  onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
                  placeholder="Laporan Kinerja Instansi Pemerintah (LKjIP)..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Kategori</label>
                <select
                  value={formData.kategori}
                  onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value="Informasi Berkala">Informasi Berkala</option>
                  <option value="Informasi Serta Merta">Informasi Serta Merta</option>
                  <option value="Informasi Setiap Saat">Informasi Setiap Saat</option>
                  <option value="Regulasi">Regulasi</option>
                </select>
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Uraian / Deskripsi Ringkas</label>
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
                  Simpan Dokumen
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

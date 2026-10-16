"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Trash2, X, ShoppingBag, Star, Phone } from "lucide-react";
import { initialUMKM } from "@/lib/data";
import { UMKMItem } from "@/lib/types";

export default function UMKMAdminPage() {
  const [items, setItems] = useState<UMKMItem[]>(initialUMKM);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    kategori: "Jasa",
    pemilik: "",
    harga: 1000,
    lokasi: "Benteng",
    telepon: "081234567890",
    deskripsi: "",
    foto: "/storage/umkm/QB4d4WU5GDKxPtOQGTy77g67EnhMCPVQ6PkDKm8j.jpg",
  });

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "add_umkm", payload: formData }),
    });
    const data = await res.json();
    if (data.success) {
      setItems([data.data, ...items]);
      setModalOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Hapus data UMKM ini?")) {
      await fetch("/api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_umkm", payload: { id } }),
      });
      setItems(items.filter((i) => i.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
            Data UMKM Kelurahan Benteng
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Kurasi dan kelola produk usaha warga yang tampil di portal publik
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah UMKM Baru</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">No</th>
                <th className="p-3.5">Foto</th>
                <th className="p-3.5">Nama Usaha / Produk</th>
                <th className="p-3.5">Kategori</th>
                <th className="p-3.5">Pemilik & Kontak</th>
                <th className="p-3.5">Harga Dasar</th>
                <th className="p-3.5">Rating</th>
                <th className="p-3.5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {items.map((u, i) => (
                <tr key={u.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-bold text-slate-400">{i + 1}</td>
                  <td className="p-3.5">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                      <Image src={u.foto} alt={u.nama} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="p-3.5">
                    <p className="font-bold text-slate-900">{u.nama}</p>
                    <p className="text-[11px] text-slate-400">{u.lokasi}</p>
                  </td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 font-bold text-[10px]">
                      {u.kategori}
                    </span>
                  </td>
                  <td className="p-3.5">
                    <p className="font-semibold text-slate-800">{u.pemilik}</p>
                    <p className="text-[11px] font-mono text-emerald-700">{u.telepon}</p>
                  </td>
                  <td className="p-3.5 font-bold text-emerald-800 font-mono">
                    Rp {u.harga.toLocaleString("id-ID")}
                  </td>
                  <td className="p-3.5 font-bold text-amber-600 flex items-center gap-1 mt-3">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{u.rating.toFixed(1)}</span>
                  </td>
                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => handleDelete(u.id)}
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
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-800">Tambah UMKM Baru</h3>
              <button onClick={() => setModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Nama Usaha / Toko</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  placeholder="Contoh: Print Berkah"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Kategori</label>
                  <select
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="Jasa">Jasa</option>
                    <option value="Makanan">Makanan</option>
                    <option value="Kerajinan">Kerajinan</option>
                    <option value="Perdagangan">Perdagangan</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Harga Mulai Dari (Rp)</label>
                  <input
                    type="number"
                    required
                    value={formData.harga}
                    onChange={(e) => setFormData({ ...formData, harga: Number(e.target.value) })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Nama Pemilik</label>
                  <input
                    type="text"
                    required
                    value={formData.pemilik}
                    onChange={(e) => setFormData({ ...formData, pemilik: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Nomor WhatsApp</label>
                  <input
                    type="text"
                    required
                    value={formData.telepon}
                    onChange={(e) => setFormData({ ...formData, telepon: e.target.value })}
                    placeholder="081234567890"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Alamat / Lokasi</label>
                <input
                  type="text"
                  required
                  value={formData.lokasi}
                  onChange={(e) => setFormData({ ...formData, lokasi: e.target.value })}
                  placeholder="Jl. Siswomiharjo, Benteng"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Deskripsi Produk & Layanan</label>
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
                  Simpan UMKM
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

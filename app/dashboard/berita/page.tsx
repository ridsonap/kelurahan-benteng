"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Trash2, X, Newspaper, Eye } from "lucide-react";
import { initialNews } from "@/lib/data";
import { NewsItem } from "@/lib/types";

export default function BeritaAdminPage() {
  const [news, setNews] = useState<NewsItem[]>(initialNews);
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    judul: "",
    kategori: "Pemerintahan",
    ringkasan: "",
    isi: "",
    foto: "/landing/images/slider-main/benteng.png",
  });

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "add_news", payload: formData }),
    });
    const data = await res.json();
    if (data.success) {
      setNews([data.data, ...news]);
      setModalOpen(false);
      setFormData({
        judul: "",
        kategori: "Pemerintahan",
        ringkasan: "",
        isi: "",
        foto: "/landing/images/slider-main/benteng.png",
      });
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Hapus berita ini?")) {
      await fetch("/api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_news", payload: { id } }),
      });
      setNews(news.filter((n) => n.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
            Data Berita Kelurahan Benteng
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Publikasikan artikel, pengumuman resmi, dan dokumentasi kemasyarakatan
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Berita Baru</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">No</th>
                <th className="p-3.5">Foto</th>
                <th className="p-3.5">Judul Berita</th>
                <th className="p-3.5">Kategori</th>
                <th className="p-3.5">Tanggal</th>
                <th className="p-3.5">Dilihat</th>
                <th className="p-3.5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {news.map((item, idx) => (
                <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 font-bold text-slate-400">{idx + 1}</td>
                  <td className="p-3.5">
                    <div className="relative w-14 h-10 rounded-lg overflow-hidden bg-slate-100 border border-slate-200">
                      <Image src={item.foto} alt={item.judul} fill className="object-cover" />
                    </div>
                  </td>
                  <td className="p-3.5 max-w-sm">
                    <p className="font-bold text-slate-900 line-clamp-1">{item.judul}</p>
                    <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">{item.ringkasan}</p>
                  </td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 font-semibold text-[10px]">
                      {item.kategori}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-500">{item.tanggal}</td>
                  <td className="p-3.5 font-mono text-slate-600">{item.dilihat} x</td>
                  <td className="p-3.5 text-center">
                    <button
                      onClick={() => handleDelete(item.id)}
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
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-800">Tulis Berita Baru</h3>
              <button onClick={() => setModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Judul Berita</label>
                <input
                  type="text"
                  required
                  value={formData.judul}
                  onChange={(e) => setFormData({ ...formData, judul: e.target.value })}
                  placeholder="Judul Berita Utama..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-bold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Kategori</label>
                <select
                  value={formData.kategori}
                  onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value="Pemerintahan">Pemerintahan</option>
                  <option value="Pembangunan">Pembangunan</option>
                  <option value="Sosial & Budaya">Sosial & Budaya</option>
                  <option value="Ekonomi & UMKM">Ekonomi & UMKM</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Ringkasan Berita</label>
                <textarea
                  rows={2}
                  required
                  value={formData.ringkasan}
                  onChange={(e) => setFormData({ ...formData, ringkasan: e.target.value })}
                  placeholder="Ringkasan 1-2 kalimat untuk preview di halaman depan..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Isi Berita Lengkap</label>
                <textarea
                  rows={6}
                  required
                  value={formData.isi}
                  onChange={(e) => setFormData({ ...formData, isi: e.target.value })}
                  placeholder="Uraian berita lengkap..."
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
                  Terbitkan Berita
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

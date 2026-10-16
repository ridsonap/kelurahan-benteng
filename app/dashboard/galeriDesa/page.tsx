"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Trash2, X, Images } from "lucide-react";
import { initialGallery } from "@/lib/data";

export default function GaleriAdminPage() {
  const [gallery, setGallery] = useState(initialGallery);
  const [modalOpen, setModalOpen] = useState(false);
  const [judul, setJudul] = useState("");
  const [foto, setFoto] = useState("/landing/images/slider-main/benteng.png");

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "add_gallery",
        payload: { judul, foto },
      }),
    });
    const data = await res.json();
    if (data.success) {
      setGallery([data.data, ...gallery]);
      setModalOpen(false);
      setJudul("");
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Hapus foto kegiatan ini?")) {
      await fetch("/api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_gallery", payload: { id } }),
      });
      setGallery(gallery.filter((g) => g.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
            Galeri Kelurahan Benteng
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Kelola album foto kegiatan dan dokumentasi visual kelurahan
          </p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition"
        >
          <Plus className="w-4 h-4" />
          <span>Tambah Foto Baru</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((g) => (
          <div
            key={g.id}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs group"
          >
            <div className="relative h-48 w-full bg-slate-100">
              <Image src={g.foto} alt={g.judul} fill className="object-cover" />
            </div>
            <div className="p-4 flex items-center justify-between gap-2">
              <div>
                <p className="text-[10px] text-emerald-600 font-semibold">{g.tanggal}</p>
                <h3 className="text-xs font-bold text-slate-800 line-clamp-1 mt-0.5">{g.judul}</h3>
              </div>
              <button
                onClick={() => handleDelete(g.id)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-800">Unggah Foto Galeri</h3>
              <button onClick={() => setModalOpen(false)}>
                <X className="w-5 h-5 text-slate-400" />
              </button>
            </div>
            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Judul / Keterangan Foto</label>
                <input
                  type="text"
                  required
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  placeholder="Kegiatan Musyawarah Warga..."
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="font-bold text-slate-700 block mb-1">Pilih Sumber Foto</label>
                <select
                  value={foto}
                  onChange={(e) => setFoto(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                >
                  <option value="/landing/images/slider-main/benteng.png">Foto Kantor Kelurahan</option>
                  <option value="/landing/images/slider-main/bentengg.png">Foto Lapangan Benteng</option>
                  <option value="/storage/agenda_foto/DVdwukJ2K1pxrBhCtRfdhaA83P1nkQHxqBbqAWln.jpg">Foto Pertemuan Warga</option>
                  <option value="/storage/galeri/iVdFc1v1cWGtZ8hOohkP85QoZDCYAqjv75Miijpd.jpg">Foto Pelatihan Desa Cantik</option>
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
                  Simpan Foto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

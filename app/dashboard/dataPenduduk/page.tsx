"use client";

import { useState } from "react";
import { Users, Plus, Upload, Search, Trash2, Check, FileSpreadsheet, X } from "lucide-react";
import { initialResidents } from "@/lib/data";
import { Resident } from "@/lib/types";

export default function DataPendudukAdmin() {
  const [residents, setResidents] = useState<Resident[]>(initialResidents);
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    nik: "",
    no_kk: "",
    nama: "",
    jenis_kelamin: "Laki-laki" as "Laki-laki" | "Perempuan",
    tempat_lahir: "Benteng",
    tanggal_lahir: "2000-01-01",
    alamat: "",
    rt: "01",
    rw: "01",
    dusun: "Dusun I",
    agama: "Islam",
    status_perkawinan: "Belum Kawin",
    pekerjaan: "Belum/Tidak Bekerja",
    kewarganegaraan: "WNI",
    pendidikan: "SMA",
    disabilitas: "Tidak",
  });

  const filtered = residents.filter(
    (r) =>
      r.nama.toLowerCase().includes(search.toLowerCase()) ||
      r.nik.includes(search) ||
      r.alamat.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "add_resident", payload: formData }),
    });
    const result = await res.json();
    if (result.success) {
      setResidents([result.data, ...residents]);
      setModalOpen(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Yakin ingin menghapus data penduduk ini?")) {
      await fetch("/api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "delete_resident", payload: { id } }),
      });
      setResidents(residents.filter((r) => r.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
            Data Penduduk Kelurahan Benteng
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Master basis data kependudukan terpadu Desa Cantik (Cinta Statistik)
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-xs transition"
          >
            <Plus className="w-4 h-4" />
            <span>Tambah Penduduk</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:w-80 flex items-center">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari NIK, Nama, atau Alamat..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-800 focus:bg-white focus:outline-hidden focus:border-emerald-600 transition"
          />
        </div>
        <div className="text-xs font-semibold text-slate-500 self-start sm:self-auto">
          Menampilkan <span className="text-emerald-700 font-bold">{filtered.length}</span> warga
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="p-3.5">No</th>
                <th className="p-3.5">NIK</th>
                <th className="p-3.5">No. KK</th>
                <th className="p-3.5">Nama Lengkap</th>
                <th className="p-3.5">Jenis Kelamin</th>
                <th className="p-3.5">Alamat</th>
                <th className="p-3.5">Pekerjaan</th>
                <th className="p-3.5">Pendidikan</th>
                <th className="p-3.5 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="p-6 text-center text-slate-400">
                    Tidak ditemukan data penduduk yang sesuai.
                  </td>
                </tr>
              ) : (
                filtered.map((r, i) => (
                  <tr key={r.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 text-slate-400 font-bold">{i + 1}</td>
                    <td className="p-3.5 font-mono font-semibold text-slate-800">{r.nik}</td>
                    <td className="p-3.5 font-mono text-slate-500">{r.no_kk}</td>
                    <td className="p-3.5 font-bold text-slate-900">{r.nama}</td>
                    <td className="p-3.5">
                      <span
                        className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                          r.jenis_kelamin === "Laki-laki"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-orange-50 text-orange-700"
                        }`}
                      >
                        {r.jenis_kelamin}
                      </span>
                    </td>
                    <td className="p-3.5 max-w-xs truncate">{r.alamat}</td>
                    <td className="p-3.5">{r.pekerjaan}</td>
                    <td className="p-3.5">{r.pendidikan}</td>
                    <td className="p-3.5 text-center">
                      <button
                        onClick={() => handleDelete(r.id)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                        title="Hapus"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Tambah Penduduk */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-base text-slate-800">Tambah Data Penduduk Baru</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAdd} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">NIK (16 Digit)</label>
                  <input
                    type="text"
                    required
                    maxLength={16}
                    value={formData.nik}
                    onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Nomor KK (16 Digit)</label>
                  <input
                    type="text"
                    required
                    maxLength={16}
                    value={formData.no_kk}
                    onChange={(e) => setFormData({ ...formData, no_kk: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Nama Lengkap Sesuai KTP</label>
                <input
                  type="text"
                  required
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value.toUpperCase() })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl uppercase font-semibold"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Jenis Kelamin</label>
                  <select
                    value={formData.jenis_kelamin}
                    onChange={(e) => setFormData({ ...formData, jenis_kelamin: e.target.value as any })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="Laki-laki">Laki-laki</option>
                    <option value="Perempuan">Perempuan</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Agama</label>
                  <select
                    value={formData.agama}
                    onChange={(e) => setFormData({ ...formData, agama: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="Islam">Islam</option>
                    <option value="Kristen">Kristen</option>
                    <option value="Katolik">Katolik</option>
                    <option value="Konghucu">Konghucu</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Buddha">Buddha</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Alamat Domisili</label>
                <input
                  type="text"
                  required
                  value={formData.alamat}
                  onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                  placeholder="Jl. Siswomiharjo No. 4, RT 02 / RW 01"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Pekerjaan</label>
                  <input
                    type="text"
                    required
                    value={formData.pekerjaan}
                    onChange={(e) => setFormData({ ...formData, pekerjaan: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Pendidikan Terakhir</label>
                  <select
                    value={formData.pendidikan}
                    onChange={(e) => setFormData({ ...formData, pendidikan: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  >
                    <option value="Tidak Sekolah">Tidak Sekolah</option>
                    <option value="SD">SD</option>
                    <option value="SMP">SMP</option>
                    <option value="SMA">SMA</option>
                    <option value="D1">D1</option>
                    <option value="D3">D3</option>
                    <option value="S1">S1</option>
                    <option value="S2">S2</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold"
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

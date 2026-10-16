"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, CheckCircle, ArrowRight, Loader2 } from "lucide-react";

export default function PengantarPage() {
  const [jenisSurat, setJenisSurat] = useState<"sku" | "sktm" | "kematian" | "izin">("sku");
  const [formData, setFormData] = useState({
    nik: "",
    nomor_kk: "",
    nama: "",
    jenis_kelamin: "Laki-laki",
    tempat_lahir: "Benteng",
    tanggal_lahir: "1990-01-01",
    pekerjaan: "Wiraswasta",
    alamat: "",
    kontak: "",
    // Extra fields
    nama_usaha: "",
    alamat_usaha: "",
    jenis_usaha: "",
    tujuan_sktm: "",
    nama_meninggal: "",
    tanggal_kematian: "",
    jenis_acara: "",
    tanggal_acara: "",
    tempat_acara: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    let detail: Record<string, string> = {};
    if (jenisSurat === "sku") {
      detail = {
        nama_usaha: formData.nama_usaha,
        alamat_usaha: formData.alamat_usaha,
        jenis_usaha: formData.jenis_usaha,
      };
    } else if (jenisSurat === "sktm") {
      detail = {
        tujuan_permohonan: formData.tujuan_sktm || "Keringanan Administrasi / Pendidikan",
      };
    } else if (jenisSurat === "kematian") {
      detail = {
        nama_almarhum: formData.nama_meninggal,
        tanggal_meninggal: formData.tanggal_kematian,
      };
    } else if (jenisSurat === "izin") {
      detail = {
        jenis_acara: formData.jenis_acara,
        tanggal_acara: formData.tanggal_acara,
        tempat: formData.tempat_acara,
      };
    }

    try {
      const res = await fetch("/api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "submit_letter",
          payload: {
            nik: formData.nik,
            nama: formData.nama,
            kontak: formData.kontak,
            alamat: formData.alamat,
            jenis_surat: jenisSurat,
            detail,
          },
        }),
      });
      const data = await res.json();
      if (data.success) {
        setResult(data.data);
      }
    } catch (err) {
      alert("Terjadi kendala saat mengajukan permohonan surat.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <FileText className="w-3.5 h-3.5" />
              <span>Pelayanan Mandiri</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              FORMULIR SURAT PENGANTAR ONLINE
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Ajukan permohonan surat administrasi resmi tanpa perlu antri lama di kantor kelurahan
            </p>
          </div>

          {result ? (
            <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-xl text-center space-y-5 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-black text-slate-800">Permohonan Berhasil Dikirim!</h2>
                <p className="text-xs text-slate-500">
                  Berkas permohonan surat Anda telah masuk ke sistem antrian verifikasi admin kelurahan.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-sm mx-auto text-left text-xs space-y-1.5 font-mono">
                <p><span className="text-slate-400">Nomor Registrasi:</span> <strong>{result.nomor_surat}</strong></p>
                <p><span className="text-slate-400">Nama Pemohon:</span> <strong>{result.nama}</strong></p>
                <p><span className="text-slate-400">Status Awal:</span> <span className="text-amber-600 font-bold">{result.status}</span></p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                <Link
                  href="/status"
                  className="px-6 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition"
                >
                  Lacak Status Permohonan
                </Link>
                <button
                  onClick={() => setResult(null)}
                  className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 font-bold text-xs transition"
                >
                  Ajukan Surat Lainnya
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                {/* Pilih Jenis Surat */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Pilih Jenis Surat Permohonan
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      { id: "sku", label: "SKU (Usaha)" },
                      { id: "sktm", label: "SKTM" },
                      { id: "kematian", label: "Keterangan Kematian" },
                      { id: "izin", label: "Izin Kegiatan" },
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setJenisSurat(s.id as any)}
                        className={`p-3 rounded-xl border text-center font-bold transition-all cursor-pointer ${
                          jenisSurat === s.id
                            ? "bg-emerald-700 text-white border-emerald-700 shadow-xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Identitas Pemohon */}
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <h3 className="font-bold text-sm text-slate-800">Identitas Pemohon</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">NIK (16 Digit)</label>
                      <input
                        type="text"
                        required
                        maxLength={16}
                        placeholder="730105xxxxxxxxxx"
                        value={formData.nik}
                        onChange={(e) => setFormData({ ...formData, nik: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Nomor KK (16 Digit)</label>
                      <input
                        type="text"
                        required
                        maxLength={16}
                        placeholder="730101xxxxxxxxxx"
                        value={formData.nomor_kk}
                        onChange={(e) => setFormData({ ...formData, nomor_kk: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Nama Lengkap (Sesuai KTP)</label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: SITI AMINAH"
                      value={formData.nama}
                      onChange={(e) => setFormData({ ...formData, nama: e.target.value.toUpperCase() })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-semibold uppercase"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Nomor WhatsApp Aktif</label>
                      <input
                        type="tel"
                        required
                        placeholder="08xxxxxxxxxx"
                        value={formData.kontak}
                        onChange={(e) => setFormData({ ...formData, kontak: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-mono"
                      />
                    </div>
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
                  </div>

                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Alamat Lengkap</label>
                    <input
                      type="text"
                      required
                      placeholder="Jl. Siswomiharjo No. 12, RT 01 / RW 02"
                      value={formData.alamat}
                      onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                {/* Form Spesifik Jenis Surat */}
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <h3 className="font-bold text-sm text-slate-800">
                    Informasi Khusus ({jenisSurat.toUpperCase()})
                  </h3>

                  {jenisSurat === "sku" && (
                    <div className="space-y-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Nama Usaha</label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Toko Berkah Selayar"
                          value={formData.nama_usaha}
                          onChange={(e) => setFormData({ ...formData, nama_usaha: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-bold text-slate-700 block mb-1">Jenis Bidang Usaha</label>
                          <input
                            type="text"
                            required
                            placeholder="Perdagangan Kelontong / Jasa"
                            value={formData.jenis_usaha}
                            onChange={(e) => setFormData({ ...formData, jenis_usaha: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                          />
                        </div>
                        <div>
                          <label className="font-bold text-slate-700 block mb-1">Alamat Usaha</label>
                          <input
                            type="text"
                            required
                            placeholder="Jl. Kartini No. 4"
                            value={formData.alamat_usaha}
                            onChange={(e) => setFormData({ ...formData, alamat_usaha: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {jenisSurat === "sktm" && (
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">Tujuan / Keperluan SKTM</label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Persyaratan Beasiswa Pendidikan / Keringanan Biaya RS"
                        value={formData.tujuan_sktm}
                        onChange={(e) => setFormData({ ...formData, tujuan_sktm: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>
                  )}

                  {jenisSurat === "kematian" && (
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Nama yang Meninggal</label>
                        <input
                          type="text"
                          required
                          value={formData.nama_meninggal}
                          onChange={(e) => setFormData({ ...formData, nama_meninggal: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Tanggal Meninggal</label>
                        <input
                          type="date"
                          required
                          value={formData.tanggal_kematian}
                          onChange={(e) => setFormData({ ...formData, tanggal_kematian: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                        />
                      </div>
                    </div>
                  )}

                  {jenisSurat === "izin" && (
                    <div className="space-y-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">Jenis Acara / Kegiatan</label>
                        <input
                          type="text"
                          required
                          placeholder="Pernikahan / Syukuran / Bazar"
                          value={formData.jenis_acara}
                          onChange={(e) => setFormData({ ...formData, jenis_acara: e.target.value })}
                          className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-bold text-slate-700 block mb-1">Tanggal Pelaksanaan</label>
                          <input
                            type="date"
                            required
                            value={formData.tanggal_acara}
                            onChange={(e) => setFormData({ ...formData, tanggal_acara: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                          />
                        </div>
                        <div>
                          <label className="font-bold text-slate-700 block mb-1">Tempat Kegiatan</label>
                          <input
                            type="text"
                            required
                            placeholder="Gedung / Halaman Rumah"
                            value={formData.tempat_acara}
                            onChange={(e) => setFormData({ ...formData, tempat_acara: e.target.value })}
                            className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    * Pastikan data yang dimasukkan sesuai dengan KTP & KK.
                  </span>
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition flex items-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Mengirimkan...</span>
                      </>
                    ) : (
                      <>
                        <span>Kirim Permohonan Surat</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

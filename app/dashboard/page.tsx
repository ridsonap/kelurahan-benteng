import Link from "next/link";
import {
  Users,
  FileText,
  MessageSquareWarning,
  ShoppingBag,
  ArrowRight,
  Clock,
  CheckCircle,
  Eye,
  AlertCircle,
} from "lucide-react";
import { db } from "@/lib/data";

export default function DashboardPage() {
  const letters = db.letters;
  const complaints = db.complaints;
  const residents = db.residents;
  const umkm = db.umkm;

  const pendingLetters = letters.filter((l) => l.status === "Belum Diverifikasi" || l.status === "Diproses").length;
  const pendingComplaints = complaints.filter((c) => c.status === "Menunggu" || c.status === "Diproses").length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Hero Welcome Card */}
      <div className="relative rounded-3xl p-8 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white shadow-xl overflow-hidden">
        <div className="relative z-10 space-y-3 max-w-2xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-xs">
            Portal Administrasi Desa Cantik 2026
          </span>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
            Selamat Datang di Dashboard Admin Kelurahan Benteng
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
            Kelola data kependudukan, validasi persuratan online warga, respon aspirasi masyarakat, dan pantau transparansi statistik secara terpusat.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/dashboard/dataPenduduk"
              className="px-4 py-2 rounded-xl bg-white text-emerald-800 text-xs font-bold hover:bg-emerald-50 transition-all shadow-sm"
            >
              Kelola Data Penduduk
            </Link>
            <Link
              href="/dashboard/admin/sku"
              className="px-4 py-2 rounded-xl bg-emerald-900/60 hover:bg-emerald-900 text-white text-xs font-semibold border border-white/20 transition-all"
            >
              Verifikasi Surat ({pendingLetters})
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-medium">Total Penduduk</span>
            <h3 className="text-2xl font-black text-slate-800 mt-1">
              1,926 <span className="text-xs font-normal text-slate-400">Jiwa</span>
            </h3>
            <p className="text-[11px] text-emerald-600 font-semibold mt-1">912 Kepala Keluarga</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-medium">Permohonan Surat</span>
            <h3 className="text-2xl font-black text-slate-800 mt-1">
              {letters.length} <span className="text-xs font-normal text-slate-400">Berkas</span>
            </h3>
            <p className="text-[11px] text-amber-600 font-semibold mt-1">{pendingLetters} Menunggu Verifikasi</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <FileText className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-medium">Pengaduan Warga</span>
            <h3 className="text-2xl font-black text-slate-800 mt-1">
              {complaints.length} <span className="text-xs font-normal text-slate-400">Laporan</span>
            </h3>
            <p className="text-[11px] text-blue-600 font-semibold mt-1">{pendingComplaints} Perlu Tindak Lanjut</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <MessageSquareWarning className="w-6 h-6" />
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 font-medium">Produk UMKM</span>
            <h3 className="text-2xl font-black text-slate-800 mt-1">
              {umkm.length} <span className="text-xs font-normal text-slate-400">Usaha</span>
            </h3>
            <p className="text-[11px] text-purple-600 font-semibold mt-1">Katalog Aktif</p>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
            <ShoppingBag className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Tables Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Latest Letters */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-base text-slate-800">Permohonan Surat Terbaru</h3>
              <p className="text-xs text-slate-400">Daftar warga yang mengajukan dokumen online</p>
            </div>
            <Link
              href="/dashboard/admin/sku"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>Lihat Semua</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100 overflow-x-auto">
            {letters.length === 0 ? (
              <p className="text-xs text-slate-400 py-4 text-center">Belum ada surat masuk.</p>
            ) : (
              letters.slice(0, 5).map((l) => (
                <div key={l.id} className="py-3 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-800">{l.nama}</span>
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 font-mono text-[10px] font-semibold uppercase">
                        {l.jenis_surat}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 font-mono">
                      {l.nomor_surat} • NIK: {l.nik}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                        l.status === "Terverifikasi"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : l.status === "Ditolak"
                          ? "bg-red-50 text-red-700 border border-red-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {l.status}
                    </span>
                    <Link
                      href={`/dashboard/admin/${l.jenis_surat}`}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Latest Complaints */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="font-bold text-base text-slate-800">Aspirasi & Pengaduan Warga</h3>
              <p className="text-xs text-slate-400">Laporan keluhan lingkungan dan fasilitas umum</p>
            </div>
            <Link
              href="/dashboard/pengaduan"
              className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1"
            >
              <span>Lihat Semua</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {complaints.length === 0 ? (
              <p className="text-xs text-slate-400 py-4 text-center">Belum ada pengaduan warga.</p>
            ) : (
              complaints.slice(0, 5).map((c) => (
                <div key={c.id} className="py-3 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-800">{c.judul}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          c.status === "Selesai"
                            ? "bg-emerald-50 text-emerald-700"
                            : c.status === "Diproses"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-amber-50 text-amber-700"
                        }`}
                      >
                        {c.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-1">{c.deskripsi}</p>
                    <p className="text-[10px] text-slate-400">
                      Pelapor: {c.nama} ({c.telepon}) • {c.tanggal}
                    </p>
                  </div>
                  <Link
                    href="/dashboard/pengaduan"
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-600 hover:text-emerald-700 transition shrink-0"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

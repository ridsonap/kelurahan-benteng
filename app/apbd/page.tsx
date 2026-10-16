import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialAPBD } from "@/lib/data";
import { PiggyBank, TrendingUp, TrendingDown, CheckCircle, Download } from "lucide-react";

export default function APBDPage() {
  const data = initialAPBD[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <PiggyBank className="w-3.5 h-3.5" />
              <span>Transparansi Keuangan Publik</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              APBD KELURAHAN BENTENG TAHUN 2026
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Laporan realisasi pendapatan, belanja, dan pembiayaan untuk pembangunan dan pelayanan masyarakat
            </p>
          </div>

          {/* Cards Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex items-center justify-between text-emerald-600 text-xs font-bold">
                <span>TOTAL PENDAPATAN</span>
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Rp {data.pendapatan.toLocaleString("id-ID")}
              </h3>
              <p className="text-xs text-slate-500">
                PAD {data.pad_pct}% • Dana Transfer {data.transfer_pct}%
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex items-center justify-between text-amber-600 text-xs font-bold">
                <span>TOTAL BELANJA</span>
                <TrendingDown className="w-4 h-4" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Rp {data.belanja.toLocaleString("id-ID")}
              </h3>
              <p className="text-xs text-slate-500">
                Penyelenggaraan & Fasilitas Lingkungan
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
              <div className="flex items-center justify-between text-blue-600 text-xs font-bold">
                <span>SURPLUS / SISA ANGGARAN</span>
                <CheckCircle className="w-4 h-4" />
              </div>
              <h3 className="text-2xl font-black text-blue-700 tracking-tight">
                Rp {data.surplus_defisit.toLocaleString("id-ID")}
              </h3>
              <p className="text-xs text-emerald-600 font-semibold">
                Kondisi Keuangan Sehat
              </p>
            </div>
          </div>

          {/* Infographic Banner & Details */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image
                src="/landing/images/slider-main/apbd.png"
                alt="Infografis APBD"
                fill
                className="object-contain p-2"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-xl font-bold text-slate-800">
                Rincian Sumber & Alokasi Anggaran
              </h2>
              <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
                <p>
                  Pemerintah Kelurahan Benteng mengedepankan prinsip keterbukaan dan akuntabilitas dalam pengelolaan setiap rupiah anggaran daerah. Sebagian besar pendapatan bersumber dari alokasi dana transfer pemerintah kabupaten sebesar <strong>96%</strong>, didukung Pendapatan Asli Daerah (PAD) sebesar <strong>4%</strong>.
                </p>
                <p>
                  Belanja kelurahan difokuskan pada pemeliharaan infrastruktur gang dan jalan lingkungan, perbaikan lampu penerangan umum, operasional pos pelayanan terpadu (Posyandu), serta pembinaan administrasi kependudukan Desa Cantik.
                </p>
              </div>

              {/* Progress Bars */}
              <div className="space-y-3 pt-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Dana Transfer Pemerintah (96%)</span>
                    <span className="font-mono">Rp 1.227.449.280</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full w-[96%]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-xs font-bold text-slate-700">
                    <span>Pendapatan Asli Daerah - PAD (4%)</span>
                    <span className="font-mono">Rp 51.143.720</span>
                  </div>
                  <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full w-[4%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

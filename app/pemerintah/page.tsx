import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialOfficials } from "@/lib/data";
import { Landmark, ShieldCheck, UserCheck } from "lucide-react";

export default function PemerintahPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <Landmark className="w-3.5 h-3.5" />
              <span>Aparatur Kelurahan</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              STRUKTUR PEMERINTAHAN & TUPOKSI
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Mengenal jajaran aparatur Pemerintah Kelurahan Benteng dan pembagian tugas pokok serta fungsi pelayanan
            </p>
          </div>

          {/* Lurah Spotlight Card */}
          {initialOfficials.length > 0 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md max-w-3xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">
                <div className="relative w-40 h-52 sm:w-48 sm:h-64 rounded-2xl overflow-hidden border-2 border-emerald-600 shadow-md shrink-0 bg-slate-100">
                  <Image
                    src={initialOfficials[0].foto}
                    alt={initialOfficials[0].nama}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase tracking-wider">
                    {initialOfficials[0].jabatan}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    {initialOfficials[0].nama}
                  </h2>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 leading-relaxed">
                    <p className="font-bold text-slate-700 mb-1">Tugas Pokok & Fungsi (Tupoksi):</p>
                    <p>{initialOfficials[0].tupoksi}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Subordinates Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-800 text-center">
              Perangkat & Pejabat Teknis Kelurahan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initialOfficials.slice(1).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left"
                >
                  <div className="relative w-28 h-36 rounded-xl overflow-hidden border border-slate-200 shadow-xs shrink-0 bg-slate-100">
                    <Image
                      src={item.foto}
                      alt={item.nama}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-2 flex-1">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold">
                      {item.jabatan}
                    </span>
                    <h4 className="font-bold text-base text-slate-900">{item.nama}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                      {item.tupoksi}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

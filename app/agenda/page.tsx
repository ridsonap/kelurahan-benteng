import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialAgendas } from "@/lib/data";
import { Calendar, MapPin, Tag, ArrowRight } from "lucide-react";

export default function AgendaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold">
              <Calendar className="w-3.5 h-3.5" />
              <span>Kalender Kegiatan</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              AGENDA KELURAHAN BENTENG
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Jadwal pelaksanaan rapat, pembinaan masyarakat, pelatihan UMKM, dan kegiatan dinas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initialAgendas.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col sm:flex-row gap-6 group"
              >
                <div className="relative w-full sm:w-48 h-44 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                  <Image
                    src={item.foto}
                    alt={item.nama}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold">
                      <Tag className="w-3 h-3" />
                      {item.kategori}
                    </span>
                    <h2 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                      {item.nama}
                    </h2>
                    <div className="space-y-1 text-xs text-slate-500 pt-1">
                      <div className="flex items-center gap-2 text-emerald-800 font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item.waktu}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{item.lokasi}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-xs text-slate-400 line-clamp-1 pr-2">
                      {item.deskripsi}
                    </p>
                    <Link
                      href={`/agenda/${item.id}`}
                      className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 shrink-0"
                    >
                      <span>Rincian</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

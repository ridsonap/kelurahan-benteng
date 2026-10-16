import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Tag } from "lucide-react";
import { initialAgendas } from "@/lib/data";

export default function AgendaSection() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>Jadwal Kegiatan</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              AGENDA KELURAHAN
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Jadwal pertemuan dinas, musyawarah warga, dan program pembinaan masyarakat
            </p>
          </div>
          <Link
            href="/agenda"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:text-blue-700 hover:border-blue-500 text-xs font-bold transition-all shadow-2xs self-start sm:self-auto"
          >
            <span>Lihat Semua Agenda</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initialAgendas.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-5 group"
            >
              <div className="relative w-full sm:w-40 h-36 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] font-bold">
                      <Tag className="w-3 h-3" />
                      {item.kategori}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-slate-800 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {item.nama}
                  </h3>
                  <div className="space-y-1 text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.waktu}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item.lokasi}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-[11px] text-slate-400 line-clamp-1 flex-1 pr-2">
                    {item.deskripsi}
                  </p>
                  <Link
                    href={`/agenda/${item.id}`}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 shrink-0"
                  >
                    <span>Detail</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

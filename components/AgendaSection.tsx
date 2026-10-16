import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin, Tag } from "lucide-react";
import { initialAgendas } from "@/lib/data";

export default function AgendaSection() {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-emerald-800 tracking-wider uppercase">
              Kalender Acara
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Agenda & Kegiatan Kelurahan
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Jadwal pelaksanaan musyawarah lingkungan, rapat dinas, dan sosialisasi program kerja
            </p>
          </div>

          <Link
            href="/agenda"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:text-emerald-800 hover:border-emerald-600 text-xs font-bold transition-colors self-start sm:self-auto shrink-0"
          >
            <span>Seluruh Jadwal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {initialAgendas.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-4 sm:p-5 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row gap-4 group"
            >
              <div className="relative w-full sm:w-36 h-32 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                <Image
                  src={item.foto}
                  alt={item.nama}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between space-y-2">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-semibold">
                      <Tag className="w-3 h-3 text-emerald-700" />
                      {item.kategori}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                    {item.nama}
                  </h3>

                  <div className="space-y-1 text-xs text-slate-500 pt-0.5">
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{item.waktu}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">{item.lokasi}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-[11px] text-slate-400 line-clamp-1 pr-2">
                    {item.deskripsi}
                  </p>
                  <Link
                    href={`/agenda/${item.id}`}
                    className="text-xs font-bold text-emerald-800 hover:text-emerald-900 flex items-center gap-0.5 shrink-0"
                  >
                    <span>Rincian</span>
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

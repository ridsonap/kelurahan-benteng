import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Eye, Newspaper } from "lucide-react";
import { initialNews } from "@/lib/data";

export default function BeritaSection() {
  const news = initialNews.slice(0, 3);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-2">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Kabar Terkini</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              BERITA KELURAHAN
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Informasi program kegiatan dan pengumuman resmi seputar Kelurahan Benteng
            </p>
          </div>
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:text-emerald-700 hover:border-emerald-500 text-xs font-bold transition-all shadow-2xs self-start sm:self-auto"
          >
            <span>Lihat Semua Berita</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col group"
            >
              <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.foto}
                  alt={item.judul}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                  {item.kategori}
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.tanggal}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {item.dilihat} dilihat
                    </span>
                  </div>
                  <h3 className="font-bold text-sm sm:text-base text-slate-800 line-clamp-2 group-hover:text-emerald-700 transition-colors">
                    {item.judul}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.ringkasan}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href={`/berita/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 group-hover:text-emerald-800 transition-colors"
                  >
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

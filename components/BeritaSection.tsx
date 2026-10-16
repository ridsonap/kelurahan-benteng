import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Eye } from "lucide-react";
import { initialNews } from "@/lib/data";

export default function BeritaSection() {
  const news = initialNews.slice(0, 3);

  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-emerald-800 tracking-wider uppercase">
              Warta & Informasi
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Kabar Terkini Kelurahan Benteng
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Pengumuman resmi dan liputan program kerja aparatur bersama warga masyarakat
            </p>
          </div>

          <Link
            href="/berita"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:text-emerald-800 hover:border-emerald-600 text-xs font-bold transition-colors self-start sm:self-auto shrink-0"
          >
            <span>Arsip Berita</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col group"
            >
              <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={item.foto}
                  alt={item.judul}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-md">
                  {item.kategori}
                </span>
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
                      {item.dilihat} pembaca
                    </span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-emerald-800 transition-colors line-clamp-2 leading-snug">
                    {item.judul}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.ringkasan}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <Link
                    href={`/berita/${item.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-800 group-hover:text-emerald-900 transition-colors"
                  >
                    <span>Baca selengkapnya</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
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

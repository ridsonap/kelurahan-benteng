import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialNews } from "@/lib/data";
import { Calendar, Eye, ArrowRight, Newspaper } from "lucide-react";

export default function BeritaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <Newspaper className="w-3.5 h-3.5" />
              <span>Publikasi & Kabar</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              BERITA KELURAHAN BENTENG
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Informasi terkini mengenai program kerja, kegiatan aparatur, dan pengumuman resmi bagi masyarakat
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initialNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col group"
              >
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={item.foto}
                    alt={item.judul}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-emerald-700 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-xs">
                    {item.kategori}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
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
                    <h2 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-snug">
                      {item.judul}
                    </h2>
                    <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
                      {item.ringkasan}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
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
      </main>
      <Footer />
    </div>
  );
}

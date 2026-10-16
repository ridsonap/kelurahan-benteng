import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Phone, MapPin } from "lucide-react";
import { initialUMKM } from "@/lib/data";

export default function UMKMSection() {
  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-emerald-800 tracking-wider uppercase">
              Ekonomi Lokal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Etalase Produk & Usaha Warga
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Dukung pertumbuhan usaha mikro, kerajinan lokal, dan jasa masyarakat Kelurahan Benteng
            </p>
          </div>

          <Link
            href="/belanja"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:text-emerald-800 hover:border-emerald-600 text-xs font-bold transition-colors self-start sm:self-auto shrink-0"
          >
            <span>Katalog Lengkap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initialUMKM.map((u) => {
            const cleanPhone = u.telepon.replace(/\D/g, "").replace(/^0/, "62");
            const waUrl = `https://wa.me/${cleanPhone}?text=Halo%20${encodeURIComponent(
              u.nama
            )},%20saya%20melihat%20produk%20Anda%20di%20Website%20Kelurahan%20Benteng.`;

            return (
              <div
                key={u.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200 shadow-2xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col group"
              >
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={u.foto}
                    alt={u.nama}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <span className="absolute top-2.5 left-2.5 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
                    {u.kategori}
                  </span>
                  <div className="absolute top-2.5 right-2.5 bg-white/95 backdrop-blur-xs text-slate-800 text-[11px] font-bold px-2 py-0.5 rounded-md shadow-2xs flex items-center gap-1">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{u.rating.toFixed(1)}</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-800 transition-colors">
                      {u.nama}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {u.deskripsi}
                    </p>
                    <div className="text-xs text-slate-500 space-y-0.5 pt-1">
                      <div className="flex items-center gap-1.5 text-slate-600">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{u.lokasi}</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Pemilik: <span className="font-medium text-slate-700">{u.pemilik}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Mulai dari</span>
                      <span className="font-extrabold text-base text-slate-900">
                        Rp {u.harga.toLocaleString("id-ID")}
                      </span>
                    </div>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-colors shadow-2xs"
                    >
                      <Phone className="w-3 h-3" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

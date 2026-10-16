import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingBag, Star, Phone, MapPin } from "lucide-react";
import { initialUMKM } from "@/lib/data";

export default function UMKMSection() {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold mb-2">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Pemberdayaan Ekonomi Warga</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight">
              UMKM KELURAHAN
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Dukung usaha lokal dengan berbelanja langsung dari warga dan pedagang Kelurahan Benteng
            </p>
          </div>
          <Link
            href="/belanja"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-slate-700 hover:text-amber-700 hover:border-amber-500 text-xs font-bold transition-all shadow-2xs self-start sm:self-auto"
          >
            <span>Buka Katalog UMKM</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {initialUMKM.map((u) => {
            const cleanPhone = u.telepon.replace(/\D/g, "").replace(/^0/, "62");
            const waUrl = `https://wa.me/${cleanPhone}?text=Halo%20${encodeURIComponent(u.nama)},%20saya%20melihat%20produk%20Anda%20di%20Website%20Kelurahan%20Benteng.`;

            return (
              <div
                key={u.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col group"
              >
                <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={u.foto}
                    alt={u.nama}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-xs">
                    {u.kategori}
                  </div>
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-amber-600 text-xs font-bold px-2 py-0.5 rounded-md shadow-xs flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    <span>{u.rating.toFixed(1)}</span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-bold text-base text-slate-800 group-hover:text-amber-700 transition-colors">
                      {u.nama}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {u.deskripsi}
                    </p>
                    <div className="text-xs text-slate-500 space-y-1 pt-1">
                      <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{u.lokasi}</span>
                      </div>
                      <div className="text-[11px] text-slate-400">
                        Pemilik: <span className="font-semibold text-slate-600">{u.pemilik}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Mulai dari</span>
                      <span className="font-extrabold text-base text-emerald-800">
                        Rp {u.harga.toLocaleString("id-ID")}
                      </span>
                    </div>

                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs shrink-0"
                    >
                      <Phone className="w-3.5 h-3.5" />
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

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialUMKM } from "@/lib/data";
import { Star, Phone, MapPin, ArrowLeft, Tag, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return initialUMKM.map((u) => ({ id: u.id }));
}

export default async function UMKMDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const u = initialUMKM.find((item) => item.id === id);

  if (!u) {
    return notFound();
  }

  const cleanPhone = u.telepon.replace(/\D/g, "").replace(/^0/, "62");
  const waUrl = `https://wa.me/${cleanPhone}?text=Halo%20${encodeURIComponent(u.nama)},%20saya%20tertarik%20dengan%20produk%20Anda%20di%20Website%20Kelurahan%20Benteng.`;

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
          <Link
            href="/belanja"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Katalog UMKM</span>
          </Link>

          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image src={u.foto} alt={u.nama} fill className="object-cover" priority />
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold">
                  <Tag className="w-3 h-3" />
                  {u.kategori}
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                  {u.nama}
                </h1>
                <div className="flex items-center gap-3 pt-1">
                  <div className="flex items-center gap-1 text-amber-500 font-bold text-xs bg-amber-50 px-2 py-0.5 rounded-md">
                    <Star className="w-3.5 h-3.5 fill-amber-500" />
                    <span>{u.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-xs text-slate-400">Terverifikasi Kelurahan</span>
                </div>
              </div>

              <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 space-y-1">
                <span className="text-[10px] text-slate-400 uppercase font-semibold">Harga Mulai</span>
                <p className="text-2xl font-black text-emerald-800">
                  Rp {u.harga.toLocaleString("id-ID")}
                </p>
              </div>

              <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                <h3 className="font-bold text-slate-900 text-sm">Deskripsi Usaha:</h3>
                <p>{u.deskripsi}</p>
              </div>

              <div className="space-y-2 text-xs text-slate-600 border-t pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Lokasi: {u.lokasi}</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Pemilik: {u.pemilik}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-xs shadow-md hover:shadow-lg transition cursor-pointer"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hubungi Penjual via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

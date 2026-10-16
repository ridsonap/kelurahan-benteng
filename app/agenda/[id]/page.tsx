import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialAgendas } from "@/lib/data";
import { Calendar, MapPin, Tag, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return initialAgendas.map((a) => ({ id: a.id }));
}

export default async function AgendaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = initialAgendas.find((a) => a.id === id);

  if (!item) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <Link
            href="/agenda"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Jadwal Agenda</span>
          </Link>

          <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
                <Tag className="w-3 h-3" />
                {item.kategori}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {item.nama}
              </h1>
              <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2 font-semibold text-emerald-800">
                  <Calendar className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Waktu: {item.waktu}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>Lokasi: {item.lokasi}</span>
                </div>
              </div>
            </div>

            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image src={item.foto} alt={item.nama} fill className="object-cover" priority />
            </div>

            <div className="space-y-2 text-sm text-slate-700 leading-relaxed pt-2">
              <h3 className="font-bold text-slate-900 text-base">Deskripsi Acara:</h3>
              <p>{item.deskripsi}</p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

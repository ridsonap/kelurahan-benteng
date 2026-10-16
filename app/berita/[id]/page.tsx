import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialNews } from "@/lib/data";
import { Calendar, Eye, ArrowLeft, Share2, Tag } from "lucide-react";

export async function generateStaticParams() {
  return initialNews.map((n) => ({ id: n.id }));
}

export default async function BeritaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const item = initialNews.find((n) => n.id === id);

  if (!item) {
    return notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <Link
            href="/berita"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-emerald-700 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Kembali ke Indeks Berita</span>
          </Link>

          <article className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
                <Tag className="w-3 h-3" />
                {item.kategori}
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {item.judul}
              </h1>
              <div className="flex items-center gap-4 text-xs text-slate-400 pb-4 border-b border-slate-100">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                  {item.tanggal}
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-emerald-600" />
                  {item.dilihat} pembaca
                </span>
              </div>
            </div>

            <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <Image src={item.foto} alt={item.judul} fill className="object-cover" priority />
            </div>

            <div
              className="text-sm text-slate-700 leading-relaxed space-y-4 pt-2"
              dangerouslySetInnerHTML={{ __html: item.isi }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

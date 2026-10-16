import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, CheckCircle } from "lucide-react";

export default function TentangSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image visual */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            <div className="relative h-80 sm:h-96 w-full">
              <Image
                src="/landing/images/slider-main/benteng.png"
                alt="Kantor Kelurahan Benteng"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-600/90 text-[11px] font-semibold">
                  <MapPin className="w-3 h-3" /> Kepulauan Selayar
                </span>
                <h3 className="font-bold text-lg">Pusat Pemerintahan & Perdagangan</h3>
                <p className="text-xs text-slate-200">Kecamatan Benteng, Kabupaten Kepulauan Selayar</p>
              </div>
            </div>
          </div>

          {/* Text narrative */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
              <span>Mengenal Kelurahan</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-snug">
              Tentang Kelurahan Benteng
            </h2>

            <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
              <p>
                Kelurahan Benteng merupakan salah satu kelurahan strategis di Kecamatan Benteng yang memiliki topografi sebagian besar berupa dataran pesisir. Kondisi geografis ini mendukung berbagai aktivitas masyarakat, baik di bidang pemerintahan, perdagangan, perikanan, maupun jasa.
              </p>
              <p>
                Kelurahan Benteng memiliki total luas wilayah sebesar <strong className="text-emerald-800 font-bold">587,4 Hektar</strong>. Satuan lingkungan masyarakat terbagi ke dalam <strong className="text-emerald-800 font-bold">17 Rukun Warga (RW)</strong> dan <strong className="text-emerald-800 font-bold">37 Rukun Tetangga (RT)</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-xs">Pusat Administrasi</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Ibukota Kabupaten Kepulauan Selayar</p>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-slate-800 text-xs">Desa Cantik BPS</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Tata kelola data statistik berkualitas</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/sejarah"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>Baca Sejarah Selengkapnya</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

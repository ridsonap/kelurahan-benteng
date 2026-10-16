import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function TentangSection() {
  return (
    <section className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Image visual */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/landing/images/slider-main/benteng.png"
                alt="Wilayah Kelurahan Benteng"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 bg-white border-t border-slate-100">
              <p className="text-xs font-bold text-slate-900">Kawasan Pesisir Ibukota Kabupaten</p>
              <p className="text-[11px] text-slate-500">Kecamatan Benteng, Kepulauan Selayar</p>
            </div>
          </div>

          {/* Text narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold text-emerald-800 tracking-wider uppercase">
                Profil Wilayah
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                Pusat Pemerintahan, Perdagangan, dan Budaya Bahari
              </h2>
            </div>

            <div className="space-y-3.5 text-sm text-slate-600 leading-relaxed">
              <p>
                Kelurahan Benteng merupakan jantung ibukota Kecamatan Benteng sekaligus pusat administrasi Kabupaten Kepulauan Selayar. Memiliki topografi sebagian besar berupa dataran pesisir barat yang strategis menghadap ke Selat Makassar, wilayah ini menjadi simpul utama kegiatan perekonomian, perikanan rakyat, dan sentra pelayanan publik.
              </p>
              <p>
                Dengan luas wilayah administratif sebesar <strong className="text-slate-900">587,4 Hektar</strong>, masyarakat terbagi secara harmonis ke dalam <strong className="text-slate-900">10 Rukun Warga (RW)</strong> dan <strong className="text-slate-900">7 Rukun Tetangga (RT)</strong>.
              </p>
            </div>

            {/* Key Civic Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900">Tata Kelola Desa Cantik</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Pendataan statistik sektoral berstandar BPS</p>
                </div>
              </div>
              <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-slate-900">Integrasi Layanan Digital</h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">Pengurusan surat pengantar tanpa antri di kantor</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/sejarah"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-bold transition-colors shadow-2xs"
              >
                <span>Pelajari Sejarah & Struktur Lengkap</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

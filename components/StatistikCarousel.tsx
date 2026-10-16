import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3 } from "lucide-react";

export default function StatistikCarousel() {
  const stats = [
    {
      label: "Total Penduduk",
      value: "1.926",
      unit: "Jiwa",
      sub: "Binaan Desa Cantik 2026",
      icon: "/landing/images/icon-image/family.png",
      href: "/statistik-penduduk",
    },
    {
      label: "Kepala Keluarga",
      value: "912",
      unit: "KK",
      sub: "Rata-rata 2.1 jiwa / KK",
      icon: "/landing/images/icon-image/kepalaKeluarga.png",
      href: "/statistik-penduduk",
    },
    {
      label: "Laki-laki & Perempuan",
      value: "952 / 974",
      unit: "Jiwa",
      sub: "49.4% Laki-laki • 50.6% Perempuan",
      icon: "/landing/images/icon-image/male.png",
      href: "/statistik-penduduk",
    },
    {
      label: "Satuan Wilayah",
      value: "10 RW / 7 RT",
      unit: "Wilayah",
      sub: "2 Dusun Lingkungan (587.4 Ha)",
      icon: "/landing/images/icon-image/rw.png",
      href: "/sejarah",
    },
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-emerald-800 tracking-wider uppercase">
              Data Terpadu Kependudukan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Statistik Penduduk Kelurahan Benteng Tahun 2026
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Hasil pemutakhiran data statistik sektoral bersama Badan Pusat Statistik (BPS) Provinsi Sulawesi Selatan
            </p>
          </div>

          <Link
            href="/statistik-penduduk"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 hover:text-emerald-800 hover:border-emerald-600 text-xs font-bold transition-colors self-start sm:self-auto shrink-0"
          >
            <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Lihat Seluruh Rincian</span>
          </Link>
        </div>

        {/* 4 Crisp Key Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s, idx) => (
            <Link
              key={idx}
              href={s.href}
              className="bg-slate-50/80 rounded-xl p-5 border border-slate-200/80 hover:bg-white hover:border-emerald-600/50 hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-600 group-hover:text-emerald-800 transition-colors">
                  {s.label}
                </span>
                <div className="w-9 h-9 relative bg-white rounded-lg p-1.5 border border-slate-200 shadow-2xs">
                  <Image src={s.icon} alt={s.label} fill className="object-contain p-1" />
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {s.value}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{s.unit}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                  {s.sub}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

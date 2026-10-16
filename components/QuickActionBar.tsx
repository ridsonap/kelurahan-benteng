import Link from "next/link";
import { FileText, SearchCheck, MessageSquareWarning, BarChart3, ArrowRight } from "lucide-react";

export default function QuickActionBar() {
  const actions = [
    {
      title: "Permohonan Surat",
      desc: "Layanan SKU, SKTM, Kematian, & Izin kegiatan online",
      href: "/pengantar",
      icon: FileText,
      accent: "text-emerald-700 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Lacak Status Surat",
      desc: "Periksa verifikasi dokumen cukup masukkan NIK",
      href: "/status",
      icon: SearchCheck,
      accent: "text-blue-700 bg-blue-50 border-blue-100",
    },
    {
      title: "Pengaduan Warga",
      desc: "Sampaikan keluhan fasilitas dan aspirasi lingkungan",
      href: "/pengaduan",
      icon: MessageSquareWarning,
      accent: "text-amber-700 bg-amber-50 border-amber-100",
    },
    {
      title: "Data Statistik 2026",
      desc: "1.926 jiwa terdata binaan Desa Cantik BPS",
      href: "/statistik-penduduk",
      icon: BarChart3,
      accent: "text-slate-800 bg-slate-100 border-slate-200",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 sm:-mt-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((act, idx) => {
          const Icon = act.icon;
          return (
            <Link
              key={idx}
              href={act.href}
              className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-lg hover:border-emerald-600/50 hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${act.accent}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-emerald-800 transition-colors">
                    {act.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-600 group-hover:text-emerald-700 transition-colors">
                <span>Buka Layanan</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Instansi & Logo */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-emerald-500 pb-2 inline-block">
              KONTAK INFO
            </h4>
            <div className="flex items-center gap-4 py-2">
              <div className="relative w-16 h-12 bg-white/10 rounded-lg p-1.5 flex items-center justify-center">
                <Image
                  src="/landing/images/footer/logobps.png"
                  alt="Logo BPS"
                  width={56}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="relative w-14 h-14 bg-white/10 rounded-lg p-1.5 flex items-center justify-center">
                <Image
                  src="/landing/images/footer/selayar.png"
                  alt="Logo Selayar"
                  width={46}
                  height={46}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Pemerintah Kelurahan Benteng</strong><br />
              Kecamatan Benteng, Kabupaten Kepulauan Selayar, Sulawesi Selatan<br />
              Binaan <strong>BPS Provinsi Sulawesi Selatan</strong> (Desa Cantik).
            </p>
            <div className="space-y-2 text-xs pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jl. Siswomiharjo No. 12, Benteng, Kepulauan Selayar, Sul-Sel 92812</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>kelurahanbenteng@selayarkab.go.id</span>
              </div>
            </div>
          </div>

          {/* Col 2: Jam Pelayanan */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-emerald-500 pb-2 inline-block">
              JAM PELAYANAN
            </h4>
            <div className="space-y-3 text-xs">
              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  Senin – Kamis
                </div>
                <p className="text-slate-300">Pagi: 08.00 – 12.00 WITA</p>
                <p className="text-slate-400 text-[11px]">Istirahat: 12.00 – 12.30 WITA</p>
                <p className="text-slate-300">Siang: 12.30 – 15.30 WITA</p>
              </div>

              <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
                <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  Jum’at
                </div>
                <p className="text-slate-300">Pagi: 08.00 – 11.30 WITA</p>
                <p className="text-slate-400 text-[11px]">Istirahat: 11.30 – 13.00 WITA</p>
                <p className="text-slate-300">Siang: 13.00 – 16.00 WITA</p>
              </div>

              <p className="text-[11px] text-amber-400 font-medium">
                * Sabtu – Minggu & Hari Libur Nasional: Tutup
              </p>
            </div>
          </div>

          {/* Col 3: Tautan Cepat */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-emerald-500 pb-2 inline-block">
              LAYANAN POPULER
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/pengantar" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">›</span> Permohonan Surat Online
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">›</span> Lacak Status Surat (NIK)
                </Link>
              </li>
              <li>
                <Link href="/pengaduan" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">›</span> Pengaduan & Aspirasi Warga
                </Link>
              </li>
              <li>
                <Link href="/bukutamu" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">›</span> Buku Tamu Digital
                </Link>
              </li>
              <li>
                <Link href="/belanja" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">›</span> Produk UMKM Kelurahan
                </Link>
              </li>
              <li>
                <Link href="/statistik-penduduk" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500 font-bold">›</span> Data Kependudukan 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Peta Lokasi */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-base tracking-wide border-b border-emerald-500 pb-2 inline-block">
              PETA LOKASI KANTOR
            </h4>
            <div className="w-full h-44 rounded-xl overflow-hidden border border-slate-700 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7934.148007460648!2d120.45668039446643!3d-6.120741575463653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbbcbb5d741086d%3A0xf3bb8adfd8e7d50a!2sKantor%20kelurahan%20Benteng!5e0!3m2!1sid!2sid!4v1784876789034!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Kantor Kelurahan Benteng"
              />
            </div>
            <p className="text-[11px] text-slate-400">
              Kecamatan Benteng, Kepulauan Selayar
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Pemerintah Kelurahan Benteng & BPS Provinsi Sulawesi Selatan. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/ppid" className="hover:text-emerald-400 transition-colors">PPID</Link>
            <span className="text-slate-600">•</span>
            <Link href="/apbd" className="hover:text-emerald-400 transition-colors">Transparansi Anggaran</Link>
            <span className="text-slate-600">•</span>
            <Link href="/auth" className="hover:text-emerald-400 transition-colors">Admin Portal</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

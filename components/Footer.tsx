import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Instansi & Logo */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">
              Pemerintah Kelurahan
            </h4>
            <div className="flex items-center gap-3 py-1">
              <div className="relative w-14 h-12 bg-white/5 rounded-lg p-1.5 flex items-center justify-center border border-white/10">
                <Image
                  src="/landing/images/footer/logobps.png"
                  alt="Logo BPS"
                  width={48}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="relative w-12 h-12 bg-white/5 rounded-lg p-1.5 flex items-center justify-center border border-white/10">
                <Image
                  src="/landing/images/footer/selayar.png"
                  alt="Logo Selayar"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              <strong>Kantor Kelurahan Benteng</strong><br />
              Kecamatan Benteng, Kabupaten Kepulauan Selayar, Sulawesi Selatan<br />
              Binaan Resmi <strong>BPS Provinsi Sulawesi Selatan</strong> (Desa Cantik).
            </p>
            <div className="space-y-2 text-xs pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Jl. Siswomiharjo No. 12, Benteng 92812</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>kelurahanbenteng@selayarkab.go.id</span>
              </div>
            </div>
          </div>

          {/* Col 2: Jam Pelayanan */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">
              Jam Pelayanan Kantor
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Senin – Kamis</span>
                </div>
                <p className="text-slate-300">08.00 – 12.00 WITA (Pagi)</p>
                <p className="text-slate-300">12.30 – 15.30 WITA (Siang)</p>
              </div>

              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Jum’at</span>
                </div>
                <p className="text-slate-300">08.00 – 11.30 WITA (Pagi)</p>
                <p className="text-slate-300">13.00 – 16.00 WITA (Siang)</p>
              </div>

              <p className="text-[11px] text-slate-500">
                * Sabtu, Minggu, & Libur Nasional: Tutup
              </p>
            </div>
          </div>

          {/* Col 3: Tautan Cepat */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">
              Layanan Warga
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/pengantar" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Permohonan Surat Online</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </Link>
              </li>
              <li>
                <Link href="/status" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Cek Status Berkas (NIK)</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </Link>
              </li>
              <li>
                <Link href="/pengaduan" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Pengaduan & Aspirasi</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </Link>
              </li>
              <li>
                <Link href="/bukutamu" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Buku Tamu Digital</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </Link>
              </li>
              <li>
                <Link href="/belanja" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Katalog Produk UMKM</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </Link>
              </li>
              <li>
                <Link href="/statistik-penduduk" className="hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>Data Penduduk 2026</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Peta Lokasi */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs tracking-wider uppercase">
              Peta Lokasi Kantor
            </h4>
            <div className="w-full h-40 rounded-lg overflow-hidden border border-slate-800 shadow-xs bg-slate-900">
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
            <p className="text-[11px] text-slate-500">
              Pusat Kota Benteng, Kepulauan Selayar
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Pemerintah Kelurahan Benteng & BPS Provinsi Sulawesi Selatan.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/ppid" className="hover:text-emerald-400 transition-colors">PPID</Link>
            <span>•</span>
            <Link href="/apbd" className="hover:text-emerald-400 transition-colors">APBD Transparan</Link>
            <span>•</span>
            <Link href="/auth" className="hover:text-emerald-400 transition-colors">Portal Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Landmark,
  Newspaper,
  BarChart3,
  FileCheck2,
  Store,
  Menu,
  X,
  ChevronDown,
  User,
  ExternalLink,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const navLinks = [
    {
      title: "Beranda",
      href: "/",
      icon: Home,
    },
    {
      title: "Profil",
      icon: Landmark,
      sub: [
        { title: "Sejarah & Wilayah", href: "/sejarah", desc: "Asal-usul, batas wilayah, dan demografi" },
        { title: "Pemerintah & Aparatur", href: "/pemerintah", desc: "Struktur organisasi dan tupoksi lurah" },
        { title: "Transparansi APBD", href: "/apbd", desc: "Alokasi anggaran pendapatan & belanja 2026" },
        { title: "Galeri Dokumentasi", href: "/galeri", desc: "Foto kegiatan kemasyarakatan & dinas" },
      ],
    },
    {
      title: "Statistik",
      icon: BarChart3,
      sub: [
        { title: "Jumlah Penduduk", href: "/statistik-penduduk", desc: "Data sebaran per RT, RW, dan gender" },
        { title: "Data Pendidikan", href: "/pendidikan", desc: "Tingkat capaian jenjang pendidikan" },
        { title: "Data Pekerjaan", href: "/pekerjaan", desc: "Mata pencaharian dan profesi warga" },
        { title: "Data Agama", href: "/agama", desc: "Komposisi pemeluk agama" },
      ],
    },
    {
      title: "Layanan Mandiri",
      icon: FileCheck2,
      sub: [
        { title: "Permohonan Surat Online", href: "/pengantar", desc: "Pengajuan SKU, SKTM, Kematian, Izin" },
        { title: "Lacak Status Surat", href: "/status", desc: "Cek progres verifikasi berkas via NIK" },
        { title: "Pengaduan Warga", href: "/pengaduan", desc: "Kanal aspirasi & perbaikan fasilitas" },
        { title: "Status Pengaduan", href: "/status-pengaduan", desc: "Pantau respon aparat atas laporan" },
        { title: "Buku Tamu Digital", href: "/bukutamu", desc: "Buku kehadiran tamu dinas & masyarakat" },
      ],
    },
    {
      title: "Kabar & Publikasi",
      icon: Newspaper,
      sub: [
        { title: "Berita Kelurahan", href: "/berita", desc: "Pengumuman dan agenda pembangunan" },
        { title: "Agenda Kegiatan", href: "/agenda", desc: "Jadwal rapat dan sosialisasi warga" },
        { title: "Informasi Publik (PPID)", href: "/ppid", desc: "Dokumen berkala dan permohonan informasi" },
      ],
    },
    {
      title: "Katalog UMKM",
      href: "/belanja",
      icon: Store,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
      {/* Top Banner: Civic Authority */}
      <div className="hidden md:block bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>Pemerintah Kabupaten Kepulauan Selayar</span>
            <span className="text-slate-600">•</span>
            <span>Binaan Resmi Badan Pusat Statistik (Desa Cantik 2026)</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Senin – Jum’at: 08.00 – 15.30 WITA</span>
            <Link
              href="/auth"
              className="hover:text-emerald-400 font-medium transition-colors flex items-center gap-1"
            >
              <User className="w-3 h-3" />
              <span>Login Aparatur</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & Kelurahan Branding */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/landing/images/footer/desaCanti.png"
                alt="Logo Desa Cantik Kelurahan Benteng"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-slate-900 group-hover:text-emerald-900 transition-colors">
                KELURAHAN BENTENG
              </span>
              <span className="text-[11px] font-medium text-emerald-700 tracking-wider">
                Desa Cinta Statistik (Desa Cantik)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const hasSub = !!item.sub;
              const isActive = item.href
                ? pathname === item.href
                : item.sub?.some((s) => pathname === s.href || pathname.startsWith(s.href + "/"));

              if (!hasSub && item.href) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? "text-emerald-800 bg-emerald-50/80 font-bold"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/70"
                    }`}
                  >
                    {item.title}
                  </Link>
                );
              }

              return (
                <div key={item.title} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                      isActive
                        ? "text-emerald-800 bg-emerald-50/80 font-bold"
                        : "text-slate-700 hover:text-slate-950 hover:bg-slate-100/70"
                    }`}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform duration-200 group-hover:rotate-180" />
                  </button>

                  {/* Clean Dropdown */}
                  <div className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-lg border border-slate-200/90 py-2 opacity-0 translate-y-1 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-150 z-50">
                    {item.sub?.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block px-4 py-2.5 transition-colors ${
                            isSubActive
                              ? "bg-emerald-50 text-emerald-900 border-l-2 border-emerald-700"
                              : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                          }`}
                        >
                          <p className="text-xs font-semibold leading-tight">{sub.title}</p>
                          {sub.desc && (
                            <p className="text-[11px] text-slate-400 mt-0.5 leading-snug line-clamp-1">
                              {sub.desc}
                            </p>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Quick Action Button for Citizens */}
            <div className="ml-2 pl-2 border-l border-slate-200 flex items-center gap-2">
              <Link
                href="/pengantar"
                className="px-3.5 py-2 rounded-lg text-xs font-bold bg-emerald-700 hover:bg-emerald-800 text-white shadow-xs transition-all"
              >
                Buat Surat
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Action */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/pengantar"
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-700 text-white"
            >
              Surat
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Menu navigasi"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-18 z-40 bg-black/40 backdrop-blur-xs flex justify-end animate-fade-in">
          <div className="w-full max-w-xs bg-white h-full shadow-2xl overflow-y-auto p-5 pb-28 border-l border-slate-200 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <Image
                  src="/landing/images/footer/desaCanti.png"
                  alt="Logo"
                  width={32}
                  height={32}
                />
                <div>
                  <h4 className="font-bold text-xs text-slate-900 leading-tight">Kelurahan Benteng</h4>
                  <p className="text-[10px] text-emerald-700">Desa Cantik BPS Selayar</p>
                </div>
              </div>

              <div className="space-y-1">
                {navLinks.map((item) => {
                  const hasSub = !!item.sub;
                  if (!hasSub && item.href) {
                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50"
                      >
                        <span>{item.title}</span>
                      </Link>
                    );
                  }

                  const isOpen = openDropdown === item.title;

                  return (
                    <div key={item.title} className="rounded-lg">
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-50"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-slate-400 transition-transform ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="pl-3 py-1 space-y-1 border-l-2 border-emerald-500 ml-4 my-1">
                          {item.sub?.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 rounded-md text-xs font-medium text-slate-600 hover:text-emerald-800 hover:bg-emerald-50/50"
                            >
                              {sub.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <Link
                href="/auth"
                onClick={() => setMobileOpen(false)}
                className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <User className="w-3.5 h-3.5" />
                <span>Login Administrator</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

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
  Laptop,
  Store,
  Menu,
  X,
  ChevronDown,
  UserCheck,
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
      title: "BERANDA",
      href: "/",
      icon: Home,
    },
    {
      title: "PROFIL KELURAHAN",
      icon: Landmark,
      sub: [
        { title: "Galeri Kelurahan", href: "/galeri" },
        { title: "Sejarah Kelurahan", href: "/sejarah" },
        { title: "Pemerintah Kelurahan", href: "/pemerintah" },
        { title: "APBD Kelurahan", href: "/apbd" },
      ],
    },
    {
      title: "BERITA & AGENDA",
      icon: Newspaper,
      sub: [
        { title: "Berita Kelurahan", href: "/berita" },
        { title: "Agenda Kelurahan", href: "/agenda" },
      ],
    },
    {
      title: "DATA STATISTIK",
      icon: BarChart3,
      sub: [
        { title: "Jumlah Penduduk", href: "/statistik-penduduk" },
        { title: "Data Pendidikan", href: "/pendidikan" },
        { title: "Data Pekerjaan", href: "/pekerjaan" },
        { title: "Data Agama", href: "/agama" },
      ],
    },
    {
      title: "LAYANAN ONLINE",
      icon: Laptop,
      sub: [
        { title: "Surat Pengantar", href: "/pengantar" },
        { title: "Status Pengantar", href: "/status" },
        { title: "Pengaduan Warga", href: "/pengaduan" },
        { title: "Status Pengaduan", href: "/status-pengaduan" },
        { title: "Buku Tamu", href: "/bukutamu" },
      ],
    },
    {
      title: "PPID & UMKM",
      icon: Store,
      sub: [
        { title: "PPID Kelurahan", href: "/ppid" },
        { title: "Status Permohonan", href: "/ppid/status-permohonan" },
        { title: "Katalog UMKM", href: "/belanja" },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 transition-transform group-hover:scale-105">
              <Image
                src="/landing/images/footer/desaCanti.png"
                alt="Logo Desa Cantik"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-emerald-800 leading-none">
                DESA CANTIK
              </span>
              <span className="text-xs font-semibold text-emerald-600 tracking-wider uppercase mt-1">
                Kelurahan Benteng
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((item) => {
              const Icon = item.icon;
              const hasSub = !!item.sub;
              const isActive = item.href ? pathname === item.href : item.sub?.some((s) => pathname.startsWith(s.href));

              if (!hasSub && item.href) {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                      isActive
                        ? "bg-emerald-700 text-white shadow-xs"
                        : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                  </Link>
                );
              }

              return (
                <div key={item.title} className="relative group">
                  <button
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-colors ${
                      isActive
                        ? "text-emerald-700 bg-emerald-50"
                        : "text-slate-700 hover:text-emerald-700 hover:bg-emerald-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.title}</span>
                    <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Dropdown Menu */}
                  <div className="absolute left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-slate-100 py-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                    {item.sub?.map((sub) => {
                      const isSubActive = pathname === sub.href;
                      return (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className={`block px-4 py-2.5 text-xs font-medium transition-colors ${
                            isSubActive
                              ? "bg-emerald-50 text-emerald-700 font-semibold border-l-4 border-emerald-600"
                              : "text-slate-600 hover:bg-emerald-50/60 hover:text-emerald-800"
                          }`}
                        >
                          {sub.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}

            {/* Admin Login Link */}
            <Link
              href="/auth"
              className="ml-2 flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-700 hover:text-white transition-all shadow-2xs"
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>Admin</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/auth"
              className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200"
            >
              Admin
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
              aria-label="Buka menu navigasi"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-20 z-40 bg-black/40 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-sm bg-white h-full shadow-2xl overflow-y-auto p-5 pb-24 border-l border-emerald-100">
            <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-100">
              <Image
                src="/landing/images/footer/desaCanti.png"
                alt="Logo"
                width={36}
                height={36}
              />
              <div>
                <h4 className="font-bold text-sm text-emerald-800">DESA CANTIK</h4>
                <p className="text-xs text-slate-500">Kelurahan Benteng</p>
              </div>
            </div>

            <div className="space-y-1">
              {navLinks.map((item) => {
                const Icon = item.icon;
                const hasSub = !!item.sub;

                if (!hasSub && item.href) {
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      <Icon className="w-4 h-4 text-emerald-600" />
                      <span>{item.title}</span>
                    </Link>
                  );
                }

                const isOpen = openDropdown === item.title;

                return (
                  <div key={item.title} className="rounded-lg">
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-emerald-600" />
                        <span>{item.title}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isOpen && (
                      <div className="pl-9 pr-2 py-1 space-y-1 border-l-2 border-emerald-200 ml-5 my-1">
                        {item.sub?.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2 rounded-md text-xs font-medium text-slate-600 hover:bg-emerald-50 hover:text-emerald-800"
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
        </div>
      )}
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Images,
  Landmark,
  PiggyBank,
  Calendar,
  Newspaper,
  Tags,
  FileCheck,
  FileText,
  FileX,
  FileSpreadsheet,
  MessageSquareWarning,
  BookOpen,
  Info,
  ShoppingBag,
  UserCog,
  LogOut,
  ExternalLink,
} from "lucide-react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "logout" }),
    });
    router.push("/auth");
  };

  const navSections = [
    {
      header: "MENU UTAMA",
      items: [
        { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { title: "Data Penduduk", href: "/dashboard/dataPenduduk", icon: Users },
      ],
    },
    {
      header: "PROFIL DESA",
      items: [
        { title: "Galeri Desa", href: "/dashboard/galeriDesa", icon: Images },
        { title: "Pemerintah Desa", href: "/dashboard/pemerintah-desa", icon: Landmark },
        { title: "APBD Desa", href: "/dashboard/apbd", icon: PiggyBank },
      ],
    },
    {
      header: "AGENDA & BERITA",
      items: [
        { title: "Agenda Desa", href: "/dashboard/AgendaDesa", icon: Calendar },
        { title: "Berita Desa", href: "/dashboard/berita", icon: Newspaper },
        { title: "Kategori Berita", href: "/dashboard/kategori", icon: Tags },
      ],
    },
    {
      header: "LAYANAN PERSURATAN",
      items: [
        { title: "Surat SKU", href: "/dashboard/admin/sku", icon: FileCheck },
        { title: "Surat SKTM", href: "/dashboard/admin/sktm", icon: FileText },
        { title: "Surat Kematian", href: "/dashboard/admin/kematian", icon: FileX },
        { title: "Surat Izin", href: "/dashboard/admin/izin", icon: FileSpreadsheet },
      ],
    },
    {
      header: "PENGADUAN & PPID",
      items: [
        { title: "Data Pengaduan", href: "/dashboard/pengaduan", icon: MessageSquareWarning },
        { title: "Dokumen PPID", href: "/dashboard/ppid", icon: Info },
        { title: "Permohonan Informasi", href: "/dashboard/admin/permohonan", icon: BookOpen },
        { title: "UMKM Desa", href: "/dashboard/admin/belanja", icon: ShoppingBag },
        { title: "Buku Tamu", href: "/dashboard/admin/buku-tamu", icon: BookOpen },
      ],
    },
    {
      header: "PENGATURAN",
      items: [
        { title: "Data Akun", href: "/dashboard/akun", icon: UserCog },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col shrink-0 border-r border-slate-800 min-h-screen">
      {/* Brand */}
      <div className="p-5 border-b border-slate-800 flex items-center gap-3">
        <div className="relative w-9 h-9">
          <Image
            src="/landing/images/footer/desaCanti.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <div>
          <h2 className="font-bold text-sm text-white tracking-wide">ADMIN PORTAL</h2>
          <p className="text-[11px] text-emerald-400">Kelurahan Benteng</p>
        </div>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-800">
        {navSections.map((sec, idx) => (
          <div key={idx} className="space-y-1">
            <p className="px-3 text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
              {sec.header}
            </p>
            {sec.items.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-emerald-600 text-white shadow-xs font-bold"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/80"
                  }`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span className="truncate">{item.title}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-slate-800 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-all"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          <span>Lihat Web Warga</span>
        </Link>
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-red-950/40 hover:bg-red-900 text-red-300 text-xs font-semibold border border-red-900/50 transition-all cursor-pointer"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Keluar (Logout)</span>
        </button>
      </div>
    </aside>
  );
}

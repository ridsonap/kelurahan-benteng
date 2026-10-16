"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { initialUMKM } from "@/lib/data";
import { ShoppingBag, Star, Phone, MapPin, Search } from "lucide-react";

export default function BelanjaPage() {
  const [filter, setFilter] = useState("Semua");
  const [search, setSearch] = useState("");

  const filtered = initialUMKM.filter((u) => {
    const matchCat = filter === "Semua" || u.kategori === filter;
    const matchSearch =
      u.nama.toLowerCase().includes(search.toLowerCase()) ||
      u.deskripsi.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Etalase Produk Warga</span>
            </div>
            <h1 className="text-3xl font-black text-slate-800 tracking-tight">
              UMKM KELURAHAN BENTENG
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Temukan produk lokal terbaik dari para pelaku usaha mikro, kuliner, dan jasa warga Kelurahan Benteng
            </p>
          </div>

          {/* Filter & Search Bar */}
          <div className="bg-white p-4 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {["Semua", "Jasa", "Makanan", "Kerajinan"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    filter === cat
                      ? "bg-emerald-700 text-white shadow-xs"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64 flex items-center">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                placeholder="Cari produk UMKM..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:border-emerald-600"
              />
            </div>
          </div>

          {/* UMKM Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((u) => {
              const cleanPhone = u.telepon.replace(/\D/g, "").replace(/^0/, "62");
              const waUrl = `https://wa.me/${cleanPhone}?text=Halo%20${encodeURIComponent(u.nama)},%20saya%20melihat%20produk%20Anda%20di%20Website%20Kelurahan%20Benteng.`;

              return (
                <div
                  key={u.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col group"
                >
                  <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={u.foto}
                      alt={u.nama}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-amber-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-xs">
                      {u.kategori}
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-amber-600 text-xs font-bold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      <span>{u.rating.toFixed(1)}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <Link href={`/belanja/${u.id}`}>
                        <h2 className="font-bold text-base text-slate-800 group-hover:text-amber-700 transition-colors">
                          {u.nama}
                        </h2>
                      </Link>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {u.deskripsi}
                      </p>
                      <div className="text-xs text-slate-500 space-y-1 pt-1">
                        <div className="flex items-center gap-1.5 text-slate-600 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{u.lokasi}</span>
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Pemilik: <span className="font-semibold text-slate-700">{u.pemilik}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Mulai dari</span>
                        <span className="font-extrabold text-base text-emerald-800">
                          Rp {u.harga.toLocaleString("id-ID")}
                        </span>
                      </div>

                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold transition-all shadow-xs shrink-0 cursor-pointer"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Pesan WA</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

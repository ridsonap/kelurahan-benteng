"use client";

import { useState } from "react";
import { Plus, Trash2, Tags } from "lucide-react";
import { initialCategories } from "@/lib/data";

export default function KategoriAdminPage() {
  const [categories, setCategories] = useState(initialCategories);

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          Kategori Berita Kelurahan
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Kelola taksonomi dan pengelompokan artikel publikasi
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider text-[10px]">
            <tr>
              <th className="p-3.5">No</th>
              <th className="p-3.5">Nama Kategori</th>
              <th className="p-3.5">Deskripsi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
            {categories.map((c, i) => (
              <tr key={c.id} className="hover:bg-slate-50/80 transition-colors">
                <td className="p-3.5 font-bold text-slate-400">{i + 1}</td>
                <td className="p-3.5 font-bold text-emerald-800">{c.nama}</td>
                <td className="p-3.5 text-slate-500">{c.deskripsi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

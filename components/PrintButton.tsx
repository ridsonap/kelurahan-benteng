"use client";

import { Printer } from "lucide-react";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl shadow-md cursor-pointer transition"
    >
      <Printer className="w-4 h-4" />
      <span>Cetak Dokumen (Print / Save PDF)</span>
    </button>
  );
}

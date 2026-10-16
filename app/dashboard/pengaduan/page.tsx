"use client";

import { useState } from "react";
import { MessageSquareWarning, CheckCircle, Clock, Trash2, Send } from "lucide-react";
import { initialComplaints } from "@/lib/data";
import { Complaint } from "@/lib/types";

export default function PengaduanAdminPage() {
  const [complaints, setComplaints] = useState<Complaint[]>(initialComplaints);
  const [replyText, setReplyText] = useState<Record<string, string>>({});

  const handleUpdate = async (id: string, status: Complaint["status"]) => {
    const balasan = replyText[id];
    const res = await fetch("/api/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        action: "update_complaint",
        payload: { id, status, balasan },
      }),
    });
    if (res.ok) {
      setComplaints(
        complaints.map((c) =>
          c.id === id ? { ...c, status, ...(balasan ? { balasan } : {}) } : c
        )
      );
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight">
          Data Pengaduan & Aspirasi Warga
        </h1>
        <p className="text-xs text-slate-500 mt-0.5">
          Tanggapi dan kelola tindak lanjut aspirasi masyarakat Kelurahan Benteng
        </p>
      </div>

      <div className="space-y-4">
        {complaints.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center text-slate-400 text-xs">
            Belum ada data pengaduan masyarakat yang masuk.
          </div>
        ) : (
          complaints.map((c) => (
            <div
              key={c.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm sm:text-base text-slate-900">{c.judul}</span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        c.status === "Selesai"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : c.status === "Diproses"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                    >
                      {c.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Pelapor: <strong className="text-slate-700">{c.nama}</strong> ({c.telepon} • {c.email}) • Lokasi: {c.alamat} • {c.tanggal}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {c.status !== "Diproses" && (
                    <button
                      onClick={() => handleUpdate(c.id, "Diproses")}
                      className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 text-xs font-semibold hover:bg-blue-600 hover:text-white transition"
                    >
                      Proses
                    </button>
                  )}
                  {c.status !== "Selesai" && (
                    <button
                      onClick={() => handleUpdate(c.id, "Selesai")}
                      className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold hover:bg-emerald-600 hover:text-white transition"
                    >
                      Selesaikan
                    </button>
                  )}
                </div>
              </div>

              <div className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100">
                <p className="font-semibold text-slate-500 mb-1">Isi Keluhan:</p>
                <p>{c.deskripsi}</p>
              </div>

              {c.balasan && (
                <div className="text-xs text-emerald-900 bg-emerald-50/80 p-4 rounded-xl border border-emerald-200">
                  <p className="font-bold mb-1">Tanggapan Kelurahan:</p>
                  <p>{c.balasan}</p>
                </div>
              )}

              {/* Reply Box */}
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Tulis respon/tanggapan untuk pelapor..."
                  value={replyText[c.id] || ""}
                  onChange={(e) => setReplyText({ ...replyText, [c.id]: e.target.value })}
                  className="flex-1 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-hidden focus:border-emerald-600"
                />
                <button
                  onClick={() => handleUpdate(c.id, c.status)}
                  className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Balasan</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, CheckCircle, RotateCcw, Send, Loader2 } from "lucide-react";

export default function BukuTamuPage() {
  const [formData, setFormData] = useState({
    nama: "",
    asal: "",
    jabatan: "",
    keperluan: "",
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Canvas drawing handlers
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#065f46"; // Dark emerald ink
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setHasSignature(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx?.beginPath();
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
    const x = (clientX - rect.left) * scaleX;
    const y = (clientY - rect.top) * scaleY;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
    setHasSignature(true);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    setHasSignature(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const canvas = canvasRef.current;
    const ttd_data = canvas && hasSignature ? canvas.toDataURL("image/png") : "";

    try {
      const res = await fetch("/api/action", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "submit_guestbook",
          payload: { ...formData, ttd_data },
        }),
      });

      if (res.ok) {
        setSuccess(true);
      }
    } catch {
      alert("Gagal menyimpan data buku tamu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Buku Tamu Elektronik</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              BUKU TAMU DIGITAL
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Silakan isi formulir kehadiran bagi para tamu dinas, instansi mitra, maupun warga masyarakat
            </p>
          </div>

          {success ? (
            <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-xl text-center space-y-5 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-black text-slate-800">Terima Kasih Atas Kunjungan Anda!</h2>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  Data kunjungan beserta tanda tangan digital Anda telah tersimpan rapi dalam rekapitulasi buku tamu kelurahan.
                </p>
              </div>

              <button
                onClick={() => {
                  setSuccess(false);
                  setFormData({ nama: "", asal: "", jabatan: "", keperluan: "" });
                  clearCanvas();
                }}
                className="px-6 py-2.5 bg-emerald-700 text-white rounded-xl font-bold text-xs shadow-md transition"
              >
                Isi Buku Tamu Kembali
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-5 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Nama Lengkap Tamu</label>
                  <input
                    type="text"
                    required
                    value={formData.nama}
                    onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                    placeholder="Contoh: Ir. H. Budi Santoso, M.Si"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Asal Instansi / Lembaga</label>
                    <input
                      type="text"
                      required
                      value={formData.asal}
                      onChange={(e) => setFormData({ ...formData, asal: e.target.value })}
                      placeholder="BPS Sulsel / Dinas PU / Warga"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Jabatan / Profesi</label>
                    <input
                      type="text"
                      required
                      value={formData.jabatan}
                      onChange={(e) => setFormData({ ...formData, jabatan: e.target.value })}
                      placeholder="Staf Ahli / Pengusaha / Tokoh Masyarakat"
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Maksud & Keperluan Kunjungan</label>
                  <textarea
                    rows={3}
                    required
                    value={formData.keperluan}
                    onChange={(e) => setFormData({ ...formData, keperluan: e.target.value })}
                    placeholder="Uraikan tujuan kedatangan Anda ke kantor kelurahan..."
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                {/* Digital Signature Pad */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between">
                    <label className="font-bold text-slate-700">
                      Tanda Tangan Digital (Gunakan Mouse / Layar Sentuh)
                    </label>
                    <button
                      type="button"
                      onClick={clearCanvas}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 hover:text-red-700 cursor-pointer"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Hapus TTD</span>
                    </button>
                  </div>
                  <div className="border-2 border-dashed border-slate-300 rounded-2xl bg-slate-50/50 overflow-hidden flex items-center justify-center relative">
                    <canvas
                      ref={canvasRef}
                      width={500}
                      height={180}
                      onMouseDown={startDrawing}
                      onMouseUp={stopDrawing}
                      onMouseMove={draw}
                      onMouseLeave={stopDrawing}
                      onTouchStart={startDrawing}
                      onTouchEnd={stopDrawing}
                      onTouchMove={draw}
                      className="cursor-crosshair w-full h-44 touch-none"
                    />
                    {!hasSignature && (
                      <span className="absolute text-slate-300 pointer-events-none text-xs font-semibold select-none">
                        Tanda Tangan di Sini
                      </span>
                    )}
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Menyimpan...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Simpan Buku Tamu</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

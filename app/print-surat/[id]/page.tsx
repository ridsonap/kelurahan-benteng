import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import PrintButton from "@/components/PrintButton";

export async function generateStaticParams() {
  return db.letters.map((l) => ({ id: l.id }));
}

export default async function PrintSuratPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const letter = db.letters.find((l) => l.id === id);

  if (!letter) {
    return notFound();
  }

  const getJudul = () => {
    switch (letter.jenis_surat) {
      case "sku":
        return "SURAT KETERANGAN USAHA";
      case "sktm":
        return "SURAT KETERANGAN TIDAK MAMPU";
      case "kematian":
        return "SURAT KETERANGAN KEMATIAN";
      case "izin":
        return "SURAT KETERANGAN IZIN KEGIATAN";
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8 flex flex-col items-center">
      {/* Print Control Toolbar */}
      <div className="w-full max-w-3xl mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 bg-white px-3 py-2 rounded-xl shadow-xs"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Kembali</span>
        </Link>
        <PrintButton />
      </div>

      {/* Official A4 Paper Container */}
      <div className="w-full max-w-3xl bg-white p-10 sm:p-14 shadow-2xl rounded-sm text-slate-900 border border-slate-200 print:shadow-none print:border-none print:p-0">
        {/* Kop Surat Resmi */}
        <div className="flex items-center gap-4 pb-4 border-b-4 border-double border-black text-center">
          <div className="relative w-20 h-24 shrink-0">
            <Image
              src="/landing/images/footer/selayar.png"
              alt="Logo Kabupaten Kepulauan Selayar"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-bold tracking-wider">PEMERINTAH KABUPATEN KEPULAUAN SELAYAR</h4>
            <h3 className="text-base font-extrabold tracking-wider">KECAMATAN BENTENG</h3>
            <h2 className="text-xl font-black tracking-wider text-black">KELURAHAN BENTENG</h2>
            <p className="text-[11px] text-slate-700 mt-1">
              Jl. Siswomiharjo No. 12, Benteng, Kec. Benteng, Kabupaten Kepulauan Selayar, Sulawesi Selatan 92812
            </p>
          </div>
        </div>

        {/* Judul & Nomor Surat */}
        <div className="text-center my-6 space-y-1">
          <h1 className="text-base font-black underline tracking-wide uppercase">
            {getJudul()}
          </h1>
          <p className="text-xs font-semibold font-mono">
            Nomor: {letter.nomor_surat}
          </p>
        </div>

        {/* Isi Surat */}
        <div className="space-y-4 text-xs sm:text-sm leading-relaxed">
          <p>
            Yang bertanda tangan di bawah ini, Lurah Benteng Kecamatan Benteng Kabupaten Kepulauan Selayar, dengan ini menerangkan bahwa:
          </p>

          <div className="pl-6 space-y-1.5 font-medium">
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-4 text-slate-600">Nama Lengkap</span>
              <span className="col-span-8 font-bold uppercase">: {letter.nama}</span>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-4 text-slate-600">NIK (Nomor Induk Kependudukan)</span>
              <span className="col-span-8 font-mono font-semibold">: {letter.nik}</span>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-4 text-slate-600">Alamat Domisili</span>
              <span className="col-span-8">: {letter.alamat}</span>
            </div>
            <div className="grid grid-cols-12 gap-2">
              <span className="col-span-4 text-slate-600">Nomor Telepon / WA</span>
              <span className="col-span-8">: {letter.kontak}</span>
            </div>
            {Object.entries(letter.detail).map(([k, v]) => (
              <div key={k} className="grid grid-cols-12 gap-2">
                <span className="col-span-4 text-slate-600 capitalize">
                  {k.replace("_", " ")}
                </span>
                <span className="col-span-8 font-semibold">: {v}</span>
              </div>
            ))}
          </div>

          <p className="pt-2">
            Adalah benar yang bersangkutan merupakan warga yang berdomisili di wilayah Kelurahan Benteng, Kecamatan Benteng, Kabupaten Kepulauan Selayar. Surat keterangan ini diberikan untuk dipergunakan sebagaimana mestinya.
          </p>

          <p>
            Demikian surat keterangan ini kami buat dengan sebenarnya agar dapat dipergunakan sesuai dengan peruntukannya.
          </p>
        </div>

        {/* Tanda Tangan & QR Code Verifikasi */}
        <div className="mt-14 pt-4 grid grid-cols-2 gap-8 items-end text-xs">
          {/* QR Code Validation */}
          <div className="space-y-2 border border-slate-200 p-3 rounded-lg max-w-xs bg-slate-50">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-white border border-slate-300 p-1 flex items-center justify-center font-mono text-[9px] text-center font-bold">
                [QR VALID]
              </div>
              <div className="text-[10px] space-y-0.5">
                <p className="font-bold text-emerald-800">Dokumen Sah Terverifikasi</p>
                <p className="text-slate-500 font-mono">Kode: {letter.id}</p>
                <p className="text-slate-400">Desa Cantik Kelurahan Benteng</p>
              </div>
            </div>
          </div>

          {/* Pejabat Penandatangan */}
          <div className="text-center space-y-1">
            <p>Benteng, {letter.tanggal_dibuat}</p>
            <p className="font-bold">Lurah Benteng,</p>
            <div className="h-16 flex items-center justify-center">
              <span className="text-[11px] text-slate-400 italic">[Tanda Tangan & Cap Elektronik]</span>
            </div>
            <p className="font-black underline text-slate-900">SRI ANNISA RAHAYU. R, S.STP.,M.M</p>
            <p className="text-[11px] text-slate-600 font-mono">NIP. 19880415 200701 2 001</p>
          </div>
        </div>
      </div>
    </div>
  );
}

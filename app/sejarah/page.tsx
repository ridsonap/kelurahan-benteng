import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Landmark, Compass, Award, Users } from "lucide-react";

export default function SejarahPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      <Navbar />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold">
              <Landmark className="w-3.5 h-3.5" />
              <span>Profil Kelurahan</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight">
              SEJARAH & PROFIL KELURAHAN BENTENG
            </h1>
            <p className="text-xs sm:text-sm text-slate-500">
              Kecamatan Benteng, Kabupaten Kepulauan Selayar, Provinsi Sulawesi Selatan
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <Image
              src="/landing/images/slider-main/benteng.png"
              alt="Kelurahan Benteng"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Article */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs space-y-6 text-sm text-slate-700 leading-relaxed">
            <h2 className="text-xl font-bold text-slate-800 border-b pb-3">
              Asal-Usul & Perkembangan Wilayah
            </h2>
            <p>
              Kelurahan Benteng merupakan salah satu kelurahan di Kecamatan Benteng yang memiliki topografi sebagian besar berupa dataran pesisir barat Pulau Selayar. Sebagai kawasan pusat pemerintahan ibukota Kabupaten Kepulauan Selayar, kawasan Benteng telah lama menjadi simpul aktivitas masyarakat dalam bidang administrasi pemerintahan, perdagangan maritim, dan jasa.
            </p>
            <p>
              Kata <em>"Benteng"</em> merujuk pada peninggalan historis struktur pertahanan dan pos pemukiman lama yang strategis, menghadap ke Selat Makassar. Dari masa ke masa, kawasan ini bertransformasi menjadi pusat pertumbuhan ekonomi yang dinamis dengan tetap mempertahankan kearifan lokal masyarakat Selayar yang religius, gotong royong, dan terbuka.
            </p>

            <h2 className="text-xl font-bold text-slate-800 border-b pb-3 pt-4">
              Kondisi Geografis & Wilayah Administratif
            </h2>
            <p>
              Kelurahan Benteng memiliki luas wilayah administratif sebesar <strong className="text-emerald-800 font-bold">587,4 Hektar</strong>. Satuan lingkungan masyarakat terbagi secara terstruktur ke dalam <strong className="text-emerald-800 font-bold">17 Rukun Warga (RW)</strong> dan <strong className="text-emerald-800 font-bold">37 Rukun Tetangga (RT)</strong>.
            </p>
            <p>
              Jaringan sosial kemasyarakatan yang kuat dan terorganisir memudahkan aparatur kelurahan dalam melaksanakan program pemberdayaan, penyaluran bantuan sosial, pembangunan sarana fasilitas umum, serta koordinasi keamanan dan ketertiban.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <Compass className="w-6 h-6 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-slate-800 text-xs">587,4 Ha</h4>
                <p className="text-[11px] text-slate-500">Luas Wilayah</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <Users className="w-6 h-6 text-blue-600 mx-auto" />
                <h4 className="font-bold text-slate-800 text-xs">17 RW & 37 RT</h4>
                <p className="text-[11px] text-slate-500">Satuan Komunitas</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <Award className="w-6 h-6 text-amber-600 mx-auto" />
                <h4 className="font-bold text-slate-800 text-xs">Desa Cantik</h4>
                <p className="text-[11px] text-slate-500">Binaan BPS Sulsel</p>
              </div>
            </div>

            <h2 className="text-xl font-bold text-slate-800 border-b pb-3 pt-4">
              Komitmen Desa Cantik (Cinta Statistik)
            </h2>
            <p>
              Dalam era digital saat ini, Kelurahan Benteng terus berkomitmen meningkatkan kualitas pelayanan publik melalui inovasi program Desa Cinta Statistik (Desa Cantik) bersama Badan Pusat Statistik Provinsi Sulawesi Selatan. Melalui website ini, seluruh data demografi, capaian anggaran APBD, pengaduan masyarakat, serta persuratan resmi diintegrasikan untuk mewujudkan tata kelola kelurahan yang akuntabel, transparan, dan terpercaya.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

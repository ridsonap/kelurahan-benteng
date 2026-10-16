// ponytail: In-memory store with seed data matches serverless edge runtime; upgrade to Prisma/Drizzle + Neon Postgres when DATABASE_URL is set
import {
  Resident,
  LetterRequest,
  Complaint,
  PPIDDocument,
  PPIDRequest,
  GuestBookEntry,
  AgendaItem,
  NewsItem,
  NewsCategory,
  UMKMItem,
  OfficialItem,
  APBDItem,
  AdminUser,
} from "./types";

export const initialOfficials: OfficialItem[] = [
  {
    id: "1",
    nama: "Sri Annisa Rahayu. R, S.STP.,M.M",
    jabatan: "Lurah Benteng",
    tupoksi: "Kuasa Pengguna Anggaran (KPA), memimpin pelaksanaan tugas pemerintahan, pembangunan, dan pembinaan kemasyarakatan di wilayah Kelurahan Benteng.",
    foto: "/storage/pemerintah-desa/aswNcR82KxkHjhsEgNrS96PQIr1Y8Oi1LFdXWhSn.jpg",
    urutan: 1,
  },
  {
    id: "2",
    nama: "Mursyidayati, S.T.",
    jabatan: "Sekretaris Kelurahan",
    tupoksi: "Pejabat Pembuat Komitmen (PPK), membantu Lurah dalam mengkoordinasikan urusan ketatausahaan, administrasi umum, keuangan, dan kepegawaian.",
    foto: "/storage/pemerintah-desa/fke8jzGw6hTkZKewJW5ij8To0V9t3ecz9hwcBdBK.jpg",
    urutan: 2,
  },
  {
    id: "3",
    nama: "Sri Juniarti, S.E",
    jabatan: "Kepala Seksi Pemberdayaan Masyarakat & Kesejahteraan",
    tupoksi: "Pejabat Pelaksana Teknis Kegiatan (PPTK), membidangi pemberdayaan ekonomi warga, layanan bantuan sosial, dan kegiatan kesejahteraan masyarakat.",
    foto: "/storage/pemerintah-desa/xE8Ge2Uy7UD62PAxTzUIZYDdGm4cU3UHHCdTyCk9.png",
    urutan: 3,
  },
];

export const initialAPBD: APBDItem[] = [
  {
    id: "1",
    tahun: 2026,
    pendapatan: 1278593000,
    belanja: 384667683,
    surplus_defisit: 893925317,
    pad_pct: 4,
    transfer_pct: 96,
    lainnya_pct: 0,
  },
];

export const initialUMKM: UMKMItem[] = [
  {
    id: "1",
    nama: "Print Berkah",
    kategori: "Jasa",
    pemilik: "Abd Jabbar",
    harga: 1000,
    rating: 5.0,
    lokasi: "Jl. R.A. Kartini, Kelurahan Benteng",
    telepon: "085824289992",
    foto: "/storage/umkm/QB4d4WU5GDKxPtOQGTy77g67EnhMCPVQ6PkDKm8j.jpg",
    deskripsi: "Layanan cetak dokumen, scan, laminating, fotokopi, pembuatan undangan, dan kebutuhan percetakan kantor & warga.",
  },
  {
    id: "2",
    nama: "Pangkas Rambut Bang Heri",
    kategori: "Jasa",
    pemilik: "Heriansa",
    harga: 20000,
    rating: 5.0,
    lokasi: "Jl. Veteran No. 12, Benteng",
    telepon: "081369966261",
    foto: "/storage/umkm/XlPs4CIG5NNPZWM6rP73TUY2vpYHCFG0CIroJfIR.jpg",
    deskripsi: "Barbershop ramah keluarga dengan berbagai gaya potongan rambut modern dan klasik, ruang ber-AC dan nyaman.",
  },
  {
    id: "3",
    nama: "Kue Tradisional & Keripik Selayar",
    kategori: "Makanan",
    pemilik: "Ibu Nurhayati",
    harga: 15000,
    rating: 4.8,
    lokasi: "Lingkungan Benteng Selatan",
    telepon: "081234567890",
    foto: "/storage/umkm/QB4d4WU5GDKxPtOQGTy77g67EnhMCPVQ6PkDKm8j.jpg",
    deskripsi: "Pusat oleh-oleh khas Kepulauan Selayar: Kue Apam, Terigu Gulung, Keripik Pisang Tanduk, dan Abon Ikan Cakalang.",
  },
];

export const initialAgendas: AgendaItem[] = [
  {
    id: "1",
    nama: "Pertemuan Pembinaan Desa Cantik (Cinta Statistik)",
    waktu: "19-08-2026 10:32 WITA",
    deskripsi: "Rapat koordinasi dan evaluasi pemanfaatan data statistik kelurahan bersama Badan Pusat Statistik (BPS) Provinsi Sulawesi Selatan.",
    kategori: "Umum",
    lokasi: "Aula Kantor Kelurahan Benteng",
    foto: "/storage/agenda_foto/DVdwukJ2K1pxrBhCtRfdhaA83P1nkQHxqBbqAWln.jpg",
  },
  {
    id: "2",
    nama: "Pelatihan Pemasaran Digital bagi Pelaku UMKM Kelurahan",
    waktu: "28-10-2026 09:00 WITA",
    deskripsi: "Workshop pengemasan produk dan optimalisasi toko daring untuk pelaku usaha mikro di wilayah Benteng.",
    kategori: "Ekonomi",
    lokasi: "Ruang Rapat Kelurahan Benteng",
    foto: "/storage/agenda_foto/DVdwukJ2K1pxrBhCtRfdhaA83P1nkQHxqBbqAWln.jpg",
  },
];

export const initialNews: NewsItem[] = [
  {
    id: "1",
    judul: "Kelurahan Benteng Terpilih sebagai Percontohan Desa Cinta Statistik (Desa Cantik) BPS Sulsel",
    slug: "kelurahan-benteng-terpilih-sebagai-desa-cantik",
    kategori: "Pemerintahan",
    ringkasan: "Implementasi literasi data kependudukan dan transparansi informasi berbasis digital sukses mengantarkan Benteng sebagai role model.",
    isi: `<p>Kelurahan Benteng di Kecamatan Benteng, Kabupaten Kepulauan Selayar resmi menjadi percontohan program Desa Cantik (Desa Cinta Statistik) yang dibina langsung oleh Badan Pusat Statistik (BPS) Provinsi Sulawesi Selatan.</p><p>Program ini bertujuan meningkatkan kapabilitas aparatur kelurahan dalam mengelola, menyajikan, dan memanfaatkan data statistik sektoral untuk perencanaan pembangunan yang tepat sasaran.</p>`,
    foto: "/landing/images/slider-main/benteng.png",
    tanggal: "12 Oktober 2026",
    dilihat: 245,
  },
  {
    id: "2",
    judul: "Transparansi Anggaran: Realisasi APBD Kelurahan Benteng Tahun 2026 Mencapai Surplus",
    slug: "transparansi-anggaran-realisasi-apbd-2026",
    kategori: "Pembangunan",
    ringkasan: "Pengelolaan keuangan yang akuntabel menghasilkan surplus anggaran untuk program infrastruktur dan pemberdayaan masyarakat.",
    isi: `<p>Pemerintah Kelurahan Benteng merilis rincian realisasi Anggaran Pendapatan dan Belanja Desa (APBD) Tahun 2026 dengan total pendapatan Rp 1,27 miliar dan belanja Rp 384,6 juta. Sisa anggaran dialokasikan untuk pembangunan fisik lingkungan dan program jaring pengaman sosial.</p>`,
    foto: "/landing/images/slider-main/apbd.png",
    tanggal: "05 Oktober 2026",
    dilihat: 189,
  },
];

export const initialCategories: NewsCategory[] = [
  { id: "1", nama: "Pemerintahan", deskripsi: "Kabar kebijakan dan pelayanan aparatur kelurahan" },
  { id: "2", nama: "Pembangunan", deskripsi: "Infrastruktur, tata ruang, dan lingkungan" },
  { id: "3", nama: "Sosial & Budaya", deskripsi: "Kegiatan kemasyarakatan, adat, dan keagamaan" },
  { id: "4", nama: "Ekonomi & UMKM", deskripsi: "Pemberdayaan usaha warga dan pasar lokal" },
];

export const initialResidents: Resident[] = [
  {
    id: "1",
    nik: "7301052605060001",
    no_kk: "7301015504850001",
    nama: "NUR ALIM",
    jenis_kelamin: "Laki-laki",
    tempat_lahir: "Benteng",
    tanggal_lahir: "2006-05-26",
    alamat: "Jl. Veteran No. 4, RT 02 / RW 01",
    rt: "02",
    rw: "01",
    dusun: "Dusun I",
    agama: "Islam",
    status_perkawinan: "Belum Kawin",
    pekerjaan: "Belum/Tidak Bekerja",
    kewarganegaraan: "WNI",
    pendidikan: "SMA",
    disabilitas: "Tidak",
    tahun: 2026,
  },
  {
    id: "2",
    nik: "7301051203890002",
    no_kk: "7301015504850002",
    nama: "SITI AMINAH",
    jenis_kelamin: "Perempuan",
    tempat_lahir: "Benteng",
    tanggal_lahir: "1989-03-12",
    alamat: "Jl. Kartini No. 15, RT 01 / RW 02",
    rt: "01",
    rw: "02",
    dusun: "Dusun I",
    agama: "Islam",
    status_perkawinan: "Kawin",
    pekerjaan: "Pedagang",
    kewarganegaraan: "WNI",
    pendidikan: "S1",
    disabilitas: "Tidak",
    tahun: 2026,
  },
  {
    id: "3",
    nik: "7301051508780003",
    no_kk: "7301015504850003",
    nama: "MUHAMMAD YUSUF",
    jenis_kelamin: "Laki-laki",
    tempat_lahir: "Selayar",
    tanggal_lahir: "1978-08-15",
    alamat: "Jl. Pahlawan RT 03 / RW 01",
    rt: "03",
    rw: "01",
    dusun: "Dusun II",
    agama: "Islam",
    status_perkawinan: "Kawin",
    pekerjaan: "PNS",
    kewarganegaraan: "WNI",
    pendidikan: "S1",
    disabilitas: "Tidak",
    tahun: 2026,
  },
];

export const initialLetters: LetterRequest[] = [
  {
    id: "1",
    nomor_surat: "503/012/KB/2026",
    nik: "7301051203890002",
    nama: "SITI AMINAH",
    kontak: "081234567890",
    alamat: "Jl. Kartini No. 15, Benteng",
    jenis_surat: "sku",
    status: "Terverifikasi",
    detail: {
      nama_usaha: "Toko Kelontong Berkah",
      alamat_usaha: "Jl. Kartini No. 15",
      jenis_usaha: "Perdagangan Sembako",
      lama_usaha: "3 Tahun",
    },
    tanggal_dibuat: "2026-10-10",
  },
];

export const initialComplaints: Complaint[] = [
  {
    id: "1",
    nama: "Ahmad Yunus",
    email: "ahmad.yunus@gmail.com",
    telepon: "081947355215",
    alamat: "Manggalung, Benteng",
    judul: "Perbaikan Penerangan Lampu Jalan Gang 3",
    deskripsi: "Mohon bantuan perbaikan lampu penerangan jalan di simpang Gang 3 yang padam sejak dua pekan lalu.",
    status: "Diproses",
    tanggal: "2026-10-11",
    balasan: "Terima kasih atas laporannya. Tim seksi Trantib telah menjadwalkan penggantian bohlam LED bersama Dinas Terkait pada hari Kamis.",
  },
];

export const initialPPID: PPIDDocument[] = [
  {
    id: "1",
    judul: "Laporan Kinerja Instansi Pemerintah (LKjIP) Kelurahan Benteng 2025",
    deskripsi: "Dokumen akuntabilitas capaian kinerja program kerja dan pelayanan tahun 2025.",
    tanggal: "15 Januari 2026",
    file_url: "#",
    kategori: "Informasi Berkala",
  },
  {
    id: "2",
    judul: "Peraturan Daerah No. 4 Tahun 2024 tentang Kebersihan dan Ketertiban Umum",
    deskripsi: "Salinan regulasi daerah mengenai standar kebersihan lingkungan dan pengelolaan sampah.",
    tanggal: "20 Maret 2026",
    file_url: "#",
    kategori: "Regulasi",
  },
];

export const initialGallery = [
  {
    id: "1",
    judul: "Sosialisasi Pembinaan Desa Cinta Statistik BPS",
    foto: "/storage/galeri/iVdFc1v1cWGtZ8hOohkP85QoZDCYAqjv75Miijpd.jpg",
    tanggal: "19 Agustus 2026",
  },
  {
    id: "2",
    judul: "Suasana Kantor dan Pelayanan Kelurahan Benteng",
    foto: "/landing/images/slider-main/bentengg.png",
    tanggal: "01 September 2026",
  },
  {
    id: "3",
    judul: "Rapat Koordinasi Bersama Pengurus RT dan RW",
    foto: "/storage/agenda_foto/DVdwukJ2K1pxrBhCtRfdhaA83P1nkQHxqBbqAWln.jpg",
    tanggal: "14 September 2026",
  },
];

export const initialGuestBook: GuestBookEntry[] = [
  {
    id: "1",
    nama: "Ir. H. Budi Santoso, M.Si",
    asal: "BPS Provinsi Sulawesi Selatan",
    jabatan: "Koordinator Tim Pembina Statistik",
    keperluan: "Supervisi Lapangan Desa Cantik 2026",
    waktu: "12-10-2026 09:30 WITA",
    ttd_data: "",
  },
];

export const initialUsers: AdminUser[] = [
  {
    id: "1",
    nama: "Administrator Kelurahan Benteng",
    username: "bentengbenteng",
    role: "admin",
  },
];

// Persistent Store using global scope for Node/Serverless process
declare global {
  var __benteng_store: {
    residents: Resident[];
    letters: LetterRequest[];
    complaints: Complaint[];
    ppidDocs: PPIDDocument[];
    ppidRequests: PPIDRequest[];
    guestBook: GuestBookEntry[];
    agendas: AgendaItem[];
    news: NewsItem[];
    categories: NewsCategory[];
    umkm: UMKMItem[];
    officials: OfficialItem[];
    apbd: APBDItem[];
    gallery: typeof initialGallery;
    users: AdminUser[];
  } | undefined;
}

if (!global.__benteng_store) {
  global.__benteng_store = {
    residents: [...initialResidents],
    letters: [...initialLetters],
    complaints: [...initialComplaints],
    ppidDocs: [...initialPPID],
    ppidRequests: [],
    guestBook: [...initialGuestBook],
    agendas: [...initialAgendas],
    news: [...initialNews],
    categories: [...initialCategories],
    umkm: [...initialUMKM],
    officials: [...initialOfficials],
    apbd: [...initialAPBD],
    gallery: [...initialGallery],
    users: [...initialUsers],
  };
}

export const db = global.__benteng_store!;

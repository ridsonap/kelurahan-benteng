export interface Resident {
  id: string;
  nik: string;
  no_kk: string;
  nama: string;
  jenis_kelamin: "Laki-laki" | "Perempuan";
  tempat_lahir: string;
  tanggal_lahir: string;
  alamat: string;
  rt: string;
  rw: string;
  dusun: string;
  agama: string;
  status_perkawinan: string;
  pekerjaan: string;
  kewarganegaraan: string;
  pendidikan: string;
  disabilitas: string;
  tahun: number;
}

export interface LetterRequest {
  id: string;
  nomor_surat: string;
  nik: string;
  nama: string;
  kontak: string;
  alamat: string;
  jenis_surat: "sku" | "sktm" | "kematian" | "izin";
  status: "Belum Diverifikasi" | "Diproses" | "Terverifikasi" | "Ditolak";
  detail: Record<string, string>;
  tanggal_dibuat: string;
}

export interface Complaint {
  id: string;
  nama: string;
  email: string;
  telepon: string;
  alamat: string;
  judul: string;
  deskripsi: string;
  lampiran?: string;
  status: "Menunggu" | "Diproses" | "Selesai";
  tanggal: string;
  balasan?: string;
}

export interface PPIDDocument {
  id: string;
  judul: string;
  deskripsi: string;
  tanggal: string;
  file_url: string;
  kategori: string;
}

export interface PPIDRequest {
  id: string;
  nama: string;
  telepon: string;
  instansi: string;
  email: string;
  isi_permohonan: string;
  lampiran?: string;
  status: "Menunggu" | "Diproses" | "Disetujui" | "Ditolak";
  tanggal: string;
}

export interface GuestBookEntry {
  id: string;
  nama: string;
  asal: string;
  jabatan: string;
  keperluan: string;
  waktu: string;
  ttd_data: string; // base64 canvas data
}

export interface AgendaItem {
  id: string;
  nama: string;
  waktu: string;
  deskripsi: string;
  kategori: string;
  lokasi: string;
  foto: string;
}

export interface NewsItem {
  id: string;
  judul: string;
  slug: string;
  kategori: string;
  ringkasan: string;
  isi: string;
  foto: string;
  tanggal: string;
  dilihat: number;
}

export interface NewsCategory {
  id: string;
  nama: string;
  deskripsi: string;
}

export interface UMKMItem {
  id: string;
  nama: string;
  kategori: string;
  pemilik: string;
  harga: number;
  rating: number;
  lokasi: string;
  telepon: string;
  foto: string;
  deskripsi: string;
}

export interface OfficialItem {
  id: string;
  nama: string;
  jabatan: string;
  tupoksi: string;
  foto: string;
  urutan: number;
}

export interface APBDItem {
  id: string;
  tahun: number;
  pendapatan: number;
  belanja: number;
  surplus_defisit: number;
  pad_pct: number;
  transfer_pct: number;
  lainnya_pct: number;
}

export interface AdminUser {
  id: string;
  nama: string;
  username: string;
  role: "admin" | "operator";
}

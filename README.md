# Website Resmi Kelurahan Benteng (Desa Cantik 2026)

Implementasi portal web publik dan sistem administrasi kelurahan berbasis Next.js 15 (App Router, TypeScript, Tailwind CSS) dengan kesiapan deployment 100% serverless di Vercel.

Referensi: `https://desacantik.benteng.stat7300.net/` (Bina BPS Provinsi Sulawesi Selatan).

---

## Fitur Utama

1. **Halaman Publik Warga**
   - **Beranda (`/`)**: Hero banner, live search jump, carousel statistik kependudukan, chart interaktif, ringkasan APBD 2026, berita terkini, agenda, katalog UMKM, dan galeri kegiatan.
   - **Profil Kelurahan**: Galeri (`/galeri`), Sejarah (`/sejarah`), Struktur Pemerintahan & Tupoksi (`/pemerintah`), APBD Transparansi Keuangan (`/apbd`).
   - **Berita & Agenda**: Indeks berita (`/berita`), detail berita (`/berita/[id]`), agenda kelurahan (`/agenda`), detail agenda (`/agenda/[id]`).
   - **Data Statistik**: Jumlah Penduduk (`/statistik-penduduk`), Pendidikan (`/pendidikan`), Pekerjaan (`/pekerjaan`), Agama (`/agama`).
   - **Layanan Mandiri Online**:
     - Permohonan Surat Online (`/pengantar`) — SKU, SKTM, Kematian, Izin Keramaian.
     - Lacak Status Surat (`/status`) menggunakan NIK.
     - Format Cetak Surat Resmi (`/print-surat/[id]`) dengan Kop Daerah, QR Code verifikasi, dan format siap cetak/PDF (A4).
     - Pengaduan Warga (`/pengaduan`) & Cek Status Pengaduan (`/status-pengaduan`).
     - Buku Tamu Digital (`/bukutamu`) dengan tanda tangan digital HTML5 Canvas.
   - **PPID & UMKM**: Dokumen Informasi Publik (`/ppid`), Status Permohonan Informasi (`/ppid/status-permohonan`), Katalog Belanja UMKM (`/belanja`) & Detail (`/belanja/[id]`) dengan redirect WhatsApp.

2. **Dashboard Back-Office Admin (`/dashboard`)**
   - Autentikasi Admin (`/auth`) via cookie session aman.
   - Manajemen Master Penduduk (`/dashboard/dataPenduduk`) — CRUD data warga, pencarian NIK & alamat.
   - Verifikasi Persuratan Online: SKU (`/dashboard/admin/sku`), SKTM (`/dashboard/admin/sktm`), Surat Kematian (`/dashboard/admin/kematian`), Surat Izin (`/dashboard/admin/izin`).
   - Manajemen Aspirasi & Pengaduan (`/dashboard/pengaduan`) — tanggapan dan update status laporan warga.
   - Manajemen Konten: Galeri (`/dashboard/galeriDesa`), Aparatur (`/dashboard/pemerintah-desa`), APBD (`/dashboard/apbd`), Agenda (`/dashboard/AgendaDesa`), Berita (`/dashboard/berita`), Kategori (`/dashboard/kategori`), Dokumen PPID (`/dashboard/ppid`), Permohonan PPID (`/dashboard/admin/permohonan`), UMKM (`/dashboard/admin/belanja`), Buku Tamu Rekap (`/dashboard/admin/buku-tamu`), Data Akun (`/dashboard/akun`).

---

## Kredensial Akses

- **URL Login Admin**: `/auth`
- **Username**: `bentengbenteng`
- **Password**: `benteng123456`

---

## Panduan Menjalankan Lokal

```bash
# Instalasi dependensi
npm install

# Jalankan self-check logika data
npm test

# Jalankan server pengembangan
npm run dev

# Jalankan build produksi
npm run build
```

---

## Deploy ke Vercel

Aplikasi dirancang 100% kompatibel dengan arsitektur serverless Edge/Node.js di Vercel:

1. Import repositori GitHub `kelurahan-benteng` ke dashboard Vercel.
2. Framework Preset: **Next.js**.
3. Klik **Deploy**. Tidak membutuhkan environment variable wajib untuk pengujian awal.
4. *(Opsional)* Untuk persistensi database eksternal skala produksi, sambungkan ke Neon PostgreSQL / Supabase melalui `DATABASE_URL`.

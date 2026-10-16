// ponytail: Unified serverless action handler for forms and admin CRUD operations
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/data";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { action, payload } = body;

    switch (action) {
      // 1. Submit Letter Request (Warga)
      case "submit_letter": {
        const id = String(Date.now());
        const count = db.letters.length + 1;
        const nomor_surat = `503/${String(count).padStart(3, "0")}/KB/2026`;
        const newLetter = {
          id,
          nomor_surat,
          nik: payload.nik,
          nama: payload.nama,
          kontak: payload.kontak,
          alamat: payload.alamat,
          jenis_surat: payload.jenis_surat,
          status: "Belum Diverifikasi" as const,
          detail: payload.detail || {},
          tanggal_dibuat: new Date().toISOString().split("T")[0],
        };
        db.letters.unshift(newLetter);
        return NextResponse.json({ success: true, data: newLetter });
      }

      // 2. Submit Complaint (Warga)
      case "submit_complaint": {
        const id = String(Date.now());
        const newComplaint = {
          id,
          nama: payload.nama,
          email: payload.email,
          telepon: payload.telepon,
          alamat: payload.alamat,
          judul: payload.judul,
          deskripsi: payload.deskripsi,
          status: "Menunggu" as const,
          tanggal: new Date().toISOString().split("T")[0],
        };
        db.complaints.unshift(newComplaint);
        return NextResponse.json({ success: true, data: newComplaint });
      }

      // 3. Submit Guest Book (Warga/Tamu)
      case "submit_guestbook": {
        const id = String(Date.now());
        const now = new Date();
        const waktu = `${now.getDate().toString().padStart(2, "0")}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getFullYear()} ${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")} WITA`;
        const newGuest = {
          id,
          nama: payload.nama,
          asal: payload.asal,
          jabatan: payload.jabatan,
          keperluan: payload.keperluan,
          waktu,
          ttd_data: payload.ttd_data || "",
        };
        db.guestBook.unshift(newGuest);
        return NextResponse.json({ success: true, data: newGuest });
      }

      // 4. Submit PPID Request (Warga)
      case "submit_ppid_request": {
        const id = String(Date.now());
        const newReq = {
          id,
          nama: payload.nama,
          telepon: payload.telepon,
          instansi: payload.instansi,
          email: payload.email,
          isi_permohonan: payload.isi_permohonan,
          status: "Menunggu" as const,
          tanggal: new Date().toISOString().split("T")[0],
        };
        db.ppidRequests.unshift(newReq);
        return NextResponse.json({ success: true, data: newReq });
      }

      // 5. Admin: Update Letter Status
      case "update_letter_status": {
        const target = db.letters.find((l) => l.id === payload.id);
        if (target) {
          target.status = payload.status;
          return NextResponse.json({ success: true, data: target });
        }
        return NextResponse.json({ error: "Letter not found" }, { status: 404 });
      }

      // 6. Admin: Update Complaint Status / Reply
      case "update_complaint": {
        const target = db.complaints.find((c) => c.id === payload.id);
        if (target) {
          if (payload.status) target.status = payload.status;
          if (payload.balasan) target.balasan = payload.balasan;
          return NextResponse.json({ success: true, data: target });
        }
        return NextResponse.json({ error: "Complaint not found" }, { status: 404 });
      }

      // 7. Admin: Resident CRUD
      case "add_resident": {
        const id = String(Date.now());
        const newRes = { id, ...payload, tahun: payload.tahun || 2026 };
        db.residents.unshift(newRes);
        return NextResponse.json({ success: true, data: newRes });
      }
      case "delete_resident": {
        db.residents = db.residents.filter((r) => r.id !== payload.id);
        return NextResponse.json({ success: true });
      }

      // 8. Admin: Berita CRUD
      case "add_news": {
        const id = String(Date.now());
        const newNews = {
          id,
          judul: payload.judul,
          slug: payload.judul.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
          kategori: payload.kategori || "Umum",
          ringkasan: payload.ringkasan,
          isi: payload.isi,
          foto: payload.foto || "/landing/images/slider-main/benteng.png",
          tanggal: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
          dilihat: 1,
        };
        db.news.unshift(newNews);
        return NextResponse.json({ success: true, data: newNews });
      }
      case "delete_news": {
        db.news = db.news.filter((n) => n.id !== payload.id);
        return NextResponse.json({ success: true });
      }

      // 9. Admin: Agenda CRUD
      case "add_agenda": {
        const id = String(Date.now());
        const newAgenda = {
          id,
          nama: payload.nama,
          waktu: payload.waktu,
          deskripsi: payload.deskripsi,
          kategori: payload.kategori || "Umum",
          lokasi: payload.lokasi,
          foto: payload.foto || "/storage/agenda_foto/DVdwukJ2K1pxrBhCtRfdhaA83P1nkQHxqBbqAWln.jpg",
        };
        db.agendas.unshift(newAgenda);
        return NextResponse.json({ success: true, data: newAgenda });
      }
      case "delete_agenda": {
        db.agendas = db.agendas.filter((a) => a.id !== payload.id);
        return NextResponse.json({ success: true });
      }

      // 10. Admin: UMKM CRUD
      case "add_umkm": {
        const id = String(Date.now());
        const newUmkm = {
          id,
          nama: payload.nama,
          kategori: payload.kategori || "Jasa",
          pemilik: payload.pemilik,
          harga: Number(payload.harga) || 1000,
          rating: 5.0,
          lokasi: payload.lokasi || "Benteng",
          telepon: payload.telepon,
          foto: payload.foto || "/storage/umkm/QB4d4WU5GDKxPtOQGTy77g67EnhMCPVQ6PkDKm8j.jpg",
          deskripsi: payload.deskripsi || "",
        };
        db.umkm.unshift(newUmkm);
        return NextResponse.json({ success: true, data: newUmkm });
      }
      case "delete_umkm": {
        db.umkm = db.umkm.filter((u) => u.id !== payload.id);
        return NextResponse.json({ success: true });
      }

      // 11. Admin: Aparatur CRUD
      case "add_official": {
        const id = String(Date.now());
        const newOff = {
          id,
          nama: payload.nama,
          jabatan: payload.jabatan,
          tupoksi: payload.tupoksi,
          foto: payload.foto || "/storage/pemerintah-desa/aswNcR82KxkHjhsEgNrS96PQIr1Y8Oi1LFdXWhSn.jpg",
          urutan: db.officials.length + 1,
        };
        db.officials.push(newOff);
        return NextResponse.json({ success: true, data: newOff });
      }
      case "delete_official": {
        db.officials = db.officials.filter((o) => o.id !== payload.id);
        return NextResponse.json({ success: true });
      }

      // 12. Admin: PPID Doc CRUD
      case "add_ppid_doc": {
        const id = String(Date.now());
        const newDoc = {
          id,
          judul: payload.judul,
          deskripsi: payload.deskripsi,
          tanggal: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
          file_url: payload.file_url || "#",
          kategori: payload.kategori || "Informasi Berkala",
        };
        db.ppidDocs.unshift(newDoc);
        return NextResponse.json({ success: true, data: newDoc });
      }
      case "delete_ppid_doc": {
        db.ppidDocs = db.ppidDocs.filter((p) => p.id !== payload.id);
        return NextResponse.json({ success: true });
      }

      // 13. Admin: Gallery CRUD
      case "add_gallery": {
        const id = String(Date.now());
        const newGal = {
          id,
          judul: payload.judul,
          foto: payload.foto || "/landing/images/slider-main/benteng.png",
          tanggal: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }),
        };
        db.gallery.unshift(newGal);
        return NextResponse.json({ success: true, data: newGal });
      }
      case "delete_gallery": {
        db.gallery = db.gallery.filter((g) => g.id !== payload.id);
        return NextResponse.json({ success: true });
      }

      default:
        return NextResponse.json({ error: "Action not recognized" }, { status: 400 });
    }
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

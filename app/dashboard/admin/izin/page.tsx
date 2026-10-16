import AdminLetterTable from "@/components/AdminLetterTable";
import { db } from "@/lib/data";

export default function IzinAdminPage() {
  return (
    <AdminLetterTable
      title="Data Surat Izin Keramaian & Kegiatan"
      type="izin"
      initialLetters={db.letters}
    />
  );
}

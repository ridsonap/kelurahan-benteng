import AdminLetterTable from "@/components/AdminLetterTable";
import { db } from "@/lib/data";

export default function KematianAdminPage() {
  return (
    <AdminLetterTable
      title="Data Surat Keterangan Kematian"
      type="kematian"
      initialLetters={db.letters}
    />
  );
}

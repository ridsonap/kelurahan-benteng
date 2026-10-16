import AdminLetterTable from "@/components/AdminLetterTable";
import { db } from "@/lib/data";

export default function SKTMAdminPage() {
  return (
    <AdminLetterTable
      title="Data Surat Keterangan Tidak Mampu (SKTM)"
      type="sktm"
      initialLetters={db.letters}
    />
  );
}

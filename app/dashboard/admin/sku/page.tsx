import AdminLetterTable from "@/components/AdminLetterTable";
import { db } from "@/lib/data";

export default function SKUAdminPage() {
  return (
    <AdminLetterTable
      title="Data Surat Keterangan Usaha (SKU)"
      type="sku"
      initialLetters={db.letters}
    />
  );
}

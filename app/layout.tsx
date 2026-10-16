import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Website Resmi Kelurahan Benteng | Desa Cantik 2026",
  description:
    "Portal Resmi Kelurahan Benteng, Kecamatan Benteng, Kabupaten Kepulauan Selayar. Layanan surat mandiri, transparansi APBD, pengaduan masyarakat, dan statistik Desa Cinta Statistik binaan BPS.",
  icons: {
    icon: "/landing/images/footer/desaCanti.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-800 selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
